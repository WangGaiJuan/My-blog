'use strict';
import express from 'express';
import {User} from '../db/schema';

const router = express.Router();

router.post('/', function (req, res, next) {
    const {username, password} = req.body;
    //userData行为通过将数据写入一个UserData存储区（UserData store）来保存数据
    const userData = {username, password};

    if(userData.username==''||userData.password=='')
    {
        return res.status(400)
            .send('User or password can not be empty !');
    }else{

        User.findOne({username}, function (err, user) {
            if (err) return next(err);
            if (user === null) {
                return res.status(409)
                    .send('The user not exists !');
            }
            if(user.password !== userData.password) {
                return res.status(401)
                    .send('password is wrong !');
            }
            return res.status(201).send('succeed !');
        });
    }
});

export default  router;




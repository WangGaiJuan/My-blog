'use strict';
import express from 'express';
import {Article} from '../db/schema';

const router = express.Router();

router.post('/', function (req, res, next) {
    const {title,content,images} = req.body;
    const articleData = {title,content, images};

    new Article(articleData).save((err,saved)=> {
        if (err) return next(err);
        return res.status(201)
            .send('发表成功');
    });
});

router.get('/',function(req,res,next) {
    Article.find(function (err, articles) {
       if(err) return next(err);
        return res.status(200).send(articles);
    });
});

router.get('/:id', function (req,res,next) {
    const articleId = req.params.id;
    Article.findOne({_id: articleId}, function (err, article) {
        if(err) return next(err);
        return res.status(200).json(article);
    });
});





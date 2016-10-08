import mongoose from 'mongoose';

//接口
module.exports = {
    connect:function () {
        //连接对应的数据库mongodb://localhost/BO-master
        mongoose.connect('mongodb://localhost/BO-master')
    },
    close:function () {
        mongoose.connection.close()
    }
};
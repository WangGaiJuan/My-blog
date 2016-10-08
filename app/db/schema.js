import mongoose from 'mongoose';

//存入数据
const Schema = mongoose.Schema;

//声明Schema
//用户信息
const userSchema = new Schema({
    username: String,
    password: String
});

//文章内容
const articleSchema = new Schema({
    title:String,
    content:String,
    images:[String]
});

//构建用户登录信息model
const User = mongoose.model('User', userSchema);
const Article = mongoose.model('Article', articleSchema);

export {User,Article};


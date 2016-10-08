import Hello from './component/hello.jsx';
import ZhuCe from './component/zhuce.jsx';
import DengLu from './component/denglu.jsx';
import App from './component/app.jsx';
import Header from './component/header.jsx';
import Index from './component/index.jsx';
import Edit from './component/edit.jsx';
import NewFile from './component/newFile.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap-webpack';
import { Router,Route, hashHistory,IndexRoute } from 'react-router';


const route = <Router history = {hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="zhuce" component={ZhuCe}/>
        <Route path="denglu" component={DengLu}/>
        <Route path="header" component={Header}/>
        <Route path="index" component={Index}/>
        <Route path="edit" component={Edit}/>
        <Route path='new/:id' component={NewFile}/>
      </Route>
</Router>;

ReactDOM.render(
    route,
    document.getElementById("content")
   );

// use jquery
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}

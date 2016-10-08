import React, {Component} from 'react';
import '../style/origin.css';
import request from 'superagent';
import Header from './header.jsx';
import {hashHistory} from  'react-router'

class DengLu extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {/*登陆form表单*/}
                <form className="form-set" onSubmit = {this.submitHandler.bind(this)}>

                    {/*利用栅格布局*/}
                    <div className = "container-fluid">

                        {/*登陆log*/}
                        <div className="row row_log">
                            <div className=" col-sm-12 col-xs-12">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <br/>

                        {/*用户名*/}
                        <div className="row row_user">
                            <div className=" col-sm-12 col-xs-12">
                                <input id = "username" className="input_set" placeholder="UserName" type="text" onChange = {this.handleUsernameChange.bind(this)}/>
                            </div>
                        </div>
                        <br/>

                        {/*密码*/}
                        <div className="row row_psw">
                            <div className=" col-sm-12 col-xs-12">
                                <input id = "password" className = "input_set" placeholder="Password" type="password" onChange={this.handlerPasswordChange.bind(this)}/>
                            </div>
                        </div>
                        <br/>

                        {/*button & a*/}
                        <div className="row row_btn">
                            <div className=" col-sm-12 col-xs-12">
                                <button className="set_btn" type = "submit">Go</button>&nbsp;&nbsp;
                            </div>
                        </div>

                    </div>

                </form>
            </div>

        );

    }

    //初始化
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    //username
    handleUsernameChange(e){
        this.setState({
            username:e.target.value
        });
    }

    //password
    handlerPasswordChange(e){
        this.setState({
            password:e.target.value
        });
    }

    //submit
    submitHandler(e) {
        e.preventDefault();
        request.post('/api/validate')
            .send({
                username: this.state.username,
                password: this.state.password
            })
            .end((err, res) => {
                if (err) return alert(res.text);
                alert(res.text);
                hashHistory.push('/index');
            })
    }
}

export default DengLu;
    

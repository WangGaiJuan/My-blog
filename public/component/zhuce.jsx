//注册
import React from 'react';
import '../style/origin.css';
import request from 'superagent';
import {hashHistory} from 'react-router';
import Header from './header.jsx';

class ZhuCe extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {/*注册form表单*/}
                <form className="form-set" onSubmit = {this.submitHandler.bind(this)}>
                    {/*利用栅格布局*/}
                    <div className = "container-fluid">
                        {/*注册log*/}
                        <div className="row row_log">
                            <div className=" col-sm-12  col-xs-12">
                                <h1>Register</h1>
                            </div>
                        </div>
                        <br/>
                        {/*用户名*/}
                        <div className="row row_user">
                            <div className=" col-sm-12 col-xs-12">
                                <input id = "username" className="input_set" placeholder="UserName"
                                       type="text" value={this.state.username}
                                       onChange = {this.handleUsernameChange.bind(this)}/>
                            </div>
                        </div>
                        <br/>
                        {/*密码*/}
                        <div className="row row_psw">
                            <div className=" col-sm-12 col-xs-12">
                                <input id = "password" className = "input_set" placeholder="Password"
                                       type="password" value={this.state.password}
                                       onChange={this.handlerPasswordChange.bind(this)}/>
                            </div>
                        </div>
                        <br/>
                        {/*button*/}
                        <div className=" row row_btn ">
                            <div className=" col-sm-12 col-xs-12">
                                <button className="set_btn" type = "submit">Register</button>
                            </div>
                        </div>

                    </div>

                </form>
            </div>

        );

    }

    constructor(props) {
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
        //取消事件的默认动作
        e.preventDefault();
        request.post('/api/user')
            .send ({
                username: this.state.username,
                password: this.state.password
            })
            .end((err,res) => {
                if(err) return alert(res.text);
                alert(res.text);
                //路由通过URL的hash部分（#）切换，URL的形式类似，无刷新改变url
                hashHistory.push('/index');
            })
    }
}

export default ZhuCe;


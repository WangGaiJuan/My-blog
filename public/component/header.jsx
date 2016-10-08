import React from 'react';
import {Link} from 'react-router';
import '../style/header.css';

export default class Header extends React.Component {
    render(){
        return (
        /*header*/
        <div className="row row_header">
            <div className="col-sm-1 col-md-1 col-xs-3">
                <span><Link className = "set_link" to = '/index'>Home</Link></span>
            </div>
            <div className="col-sm-1 col-md-1 col-xs-3">
                <span><Link className = "set_link" to = '/edit'>Edit</Link></span>
            </div>
            <div className="col-sm-1 col-md-1 col-xs-3  col-sm-offset-8">
                <span><Link className = "set_link font_set" to = '/denglu'>Sign in</Link></span>
            </div>
            <div className="col-sm-1 col-md-1 col-xs-3">
                <span><Link className = "set_link font_set" to = '/zhuce'>Sign up</Link></span>
            </div>
        </div>
        )
    }
}

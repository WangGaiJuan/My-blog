import React, {Component} from 'react';
import request from 'superagent';
import Header from './header.jsx';
import '../style/newFile.css';

export default class NewFile extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <div className="container-fluid new_container">

                    <div className="row log">
                        <div className="col-sm-12 col-xs-12">
                            <span>Author:{this.state.title}</span>
                        </div>
                    </div>

                    <div className="row title">
                        <div className="col-sm-1npm 2 col-xs-12">
                            <h3>{this.state.title}</h3>
                        </div>
                    </div>

                    <div className="row contents" >
                        <div className="col-sm-12 col-xs-12" id="content">
                            {this.state.content}
                        </div>

                    </div>

                    <div className="row Images">
                        {this.state.images.map(i =>
                            <img key={i} src={i}/>)
                        }
                    </div>

                </div>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            images: [],
            content: '',
        }
    }

    componentWillMount() {
        request
            .get(`/api/articles/${this.props.params.id}`)
            .end((err, res)=> {
                if (err) return alert('page fault');
                return this.setState({
                    title: res.body.title,
                    images: res.body.images,
                    content: res.body.content
                })
            })
    }
}


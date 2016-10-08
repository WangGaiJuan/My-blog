//发表文章

import  React from 'react';
import  '../style/edit.css';
import Header from './header.jsx';
import {hashHistory} from 'react-router';
import request from 'superagent';
import _ from 'lodash';

class Edit extends React.Component {
    render() {
        return (
        <div>
            {/*header*/}
            <Header/>
            <div className="container-fluid">
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <div className="edit_content">

                        {/*log*/}
                        <div className="row row_log">
                            <div className="col-sm-1 col-xs-12 col-sm-offset-1">
                                <h1>edit</h1>
                            </div>
                        </div>

                        {/*title*/}
                        <div className="row row_title">
                            <div className="col-sm-10 col-xs-12 col-sm-offset-1">
                                <input className="set_title" type="text" placeholder="title"
                                       value={this.state.title} required="true" onChange={this.handleTitleChange.bind(this)}/>
                            </div>
                        </div>

                        {/*add_pic_btn*/}

                        <div className="row">
                            <input type="file" className="add_pic"  accept=".jpg,.jpeg,.png,.gif"
                                   onChange={(e)=>this.handleImageChange(e)}/>
                            <button type="edit-button" className="add_btn"
                                    onClick={this.handleImageUpload.bind(this)}>Upload</button>
                        </div>
                        {/*add_pic*/}
                        <div className="upload_pic">
                            {this.state.uploadedImages.map(sr => <img key={sr} src={sr}/>)}
                        </div>

                        {/*content*/}
                        <textarea className="content" placeholder="text"
                                  value={this.state.content} required="true"
                                  onChange={this.handleContentChange.bind(this)}/>

                        {/*sub_btn res_btn*/}
                        <div className="row row_footer">
                            <div className="col-sm-1 col-xs-6 col-sm-offset-8">
                                <button type='submit' className="but_set">Submit</button>
                            </div>
                            <div className="col-sm-1 col-xs-6 ">
                                <button type='reset' className="but_set"> Reset </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            selectedImage: null,
            content: '',
            uploadedImages: []
        }
    }

    handleTitleChange(e) {
        this.setState({
            title:e.target.value
        });
    }

    handleContentChange(e) {
        this.setState({
            content:e.target.value
        });
    }

    /*从本地获取到图片路径*/
    handleImageChange(e) {
        const file = e.target.files[0];
        this.setState({
            selectedImage: file
        });
    }

    /*把获取到的本地图片上传*/
    handleImageUpload(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.selectedImage);
        request.post('/api/uploadImage')
            .send(formData)
            .end((err, res) => {
                if(err) return alert('uploading failed!');
                /*图片路径*/
                const uploadedImagePath = res.text;
                this.setState({
                    uploadedImages: _.concat(this.state.uploadedImages, uploadedImagePath)
                });
            })
    }

    /*submit*/
    onSubmit(e) {
        e.preventDefault();
        request.post('/api/articles')
            .send({
                title:this.state.title,
                content:this.state.content,
                images:this.state.uploadedImages
            })
            .end((err,res)=>{
                if(err) return alert(res.text);
                return hashHistory.push('/new/' + res.body._id);
            });
    }

}

export default Edit;
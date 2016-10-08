import React,{Component} from 'react';
import '../style/index.css';
import Header from './header.jsx';
import request from 'superagent';
import {Link} from 'react-router';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Articles : [],
            left:0,
            top:0,
            CenterPos : {//中间图片
                left:0,
                top:0
            },
            hPosRange: {//水平方向的取值范围
                leftSecX:[0,0],
                rightSecX:[0,0],
                Y:[0,0]
            },
            vPosRange:{//垂直方向的取值范围
                X:[0,0],
                topY:[0,0]
            }
        }
    }

    /*重新布局所有图片
    *centerIndex 指定居中排布哪个图片
     */
    rearrange(centerIndex){

    }


    componentWillMount (){
        request
            .get('/api/articles')
            .end((err,res)=> {
                if (err) return res.text;
                this.setState({
                    Articles: res.body
                });
            })
    }

    render(){return(
    <div>
        <Header/>
        {/*stage*/}
        <div className="container-fluid stage" ref='stage'>

            {/*图片区域*/}
            <section className="img_sec" >
                {this.state.Articles.map((article, index)=>
                    /*每个图片块*/
                    <figure className="img_figure" ref={'img_figure' + index} key={article._id}>
                        {/*图片*/}
                        <Link to={'/new/' + article._id}>
                            <img src={article.images[0]} alt={article.title}/>
                        </Link>
                        {/*图片标签*/}
                        <figcaption>
                            <h2 className="img_title">{article.title}</h2>
                        </figcaption>
                    </figure>
                )}

            </section>
        </div>
    </div>
    )}
}

export default Index;
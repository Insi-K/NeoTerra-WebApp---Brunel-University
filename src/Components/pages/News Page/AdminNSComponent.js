import React from 'react';
import NewsService from './NewsService';
//import '../.././../Styles/App.css';
import AdminCard from './AdminCard'
import '../.././../Styles/NewsStory.css';
import axios from 'axios';

const Newsstory = {

    backgroundImage : "url(/images/nature2.jpg)",
   
};


class AdminNSComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            News:[],
            story_id:'',
        }
    }

    componentDidMount() {

        NewsService.getNews().then((response) => {

            this.setState({News: response.data})

        } );

    }

    deleteSelector = e => {

        e.preventDefault()
        this.setState({story_id: e.target.id})

    }

    deleteHandler = e => {

        e.preventDefault()
        axios.delete('http://localhost:8080/news/', {params: {id: this.state.story_id}})
        window.location.reload(false);

    }

    render () {

    {   

        return (

            <div className = "newsgrid">

                <AdminCard />   
                
                {

                this.state.News.map(

                News=>
                <div className = "newscard">

                    <div style = {Newsstory} className = "newsimage"></div>
                    <div className = "newscontent">

                        <h3 className = "newsTitle">{News.storyTitle}</h3>
                        <p className = "newsDesc">Test desciption is quite long on purpose do not mind anything nothing shady going on here</p>
                        <span className = "newsSource">{News.source}</span>
                        <span className = "newsDate">{News.date}</span>
                        <a href={News.storyLink}  rel="noreferrer" target ="_blank" className = "newsOpenBtn">Open Story</a>
                        <button id = {News.id} onMouseEnter = {this.deleteSelector} onClick = {this.deleteHandler}>DELETE</button>
            
                    </div>

                </div>
                )

                }

            </div>

        )

    }
        
}

}

export default AdminNSComponent
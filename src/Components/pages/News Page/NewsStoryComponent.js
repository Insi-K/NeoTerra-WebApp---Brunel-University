import React from 'react';
import NewsService from './NewsService';
//import '../.././../Styles/App.css';
import '../.././../Styles/NewsStory.css';
import SplitDate from './SplitDate.js'
import FilterSource from './FilterSource.js'

const Newsstory = {backgroundImage : "url(/images/forest.jpg)",};

class NewsStoryComponent extends React.Component {

    constructor(props) {
        super(props)
        this.toggleSortDate = this.toggleSortDate.bind(this)
        this.toggleFilterSource = this.toggleFilterSource.bind(this)
        this.state = {
            News:[],
            story_id:'',
            isOldestFirst: true,
            source: '',
            
        }
        
    }

    //Sorting Code for Date implemeneted by Hamza (Sorts by Ascending)
    sortByDate () {
        const {News} = this.state
        let newNews = News
        const sortedNews = News.sort((a, b) => SplitDate(a.date) - SplitDate(b.date))
        this.setState({
            isOldestFirst: !this.state.isOldestFirst, //This code was originally for Descending
            News: newNews
        })
    }

    //Used for Filtering by Source of News Stories
    changeHandler = e => {
        this.setState({ source: e.target.value})
    }

    filterBySource() {

        const {News} = this.state
        
        const filteredNews = News.filter((a) => FilterSource(a.source, this.state.source))
        this.setState (
            {
                News: filteredNews
            }
        )

    }
    
    toggleSortDate (event) {
        this.sortByDate()
    }

    toggleFilterSource (event) {
        event.preventDefault()
        this.filterBySource()
    }

    componentDidMount() {

        NewsService.getNews().then((response) => {

            this.setState({News: response.data})

        } );

    }

    render () {

        const {source} = this.state.source

        return (

            //First <div> element with class "newscard" is a dummy
            <div className = "newsgrid">

                <div class = "sortmenucard">

                <button onClick={this.toggleSortDate} class = "sortmenudate">Order by Date</button>
                
                <form class = "sortmenusource" onSubmit = {this.toggleFilterSource}>
                        <input type = "text" value = {source} placeholder = "Enter Source" onChange = {this.changeHandler}></input>
                        <button type = "submit">Filter by Source</button>

                </form>

                </div>

                <div className = "newscard">

                    <div style = {Newsstory} className = "newsimage"></div>
                    <div className = "newscontent">

                        <h3>Test Post</h3>
                        <p>Test desciption is quite long on purpose do not mind anything nothing shady going on here</p>
                        <span>Source</span>
                        <span>Date of Upload</span>
                        <a  rel="noreferrer" href="https://www.bbc.co.uk/news" target ="_blank">Learn More</a>
            
                    </div>

                </div>
                
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
            
                    </div>

                </div>
                )

                }

            </div>

        )
    }

}

export default NewsStoryComponent

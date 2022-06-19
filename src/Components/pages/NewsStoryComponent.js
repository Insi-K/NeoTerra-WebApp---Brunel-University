import React from 'react';
import NewsService from './NewsService';
import '../../App.css'
class NewsStoryComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            News:[]
        }
    }

    componentDidMount() {

        NewsService.getNews().then((response) => {

            this.setState({News: response.data})

        } );

    }

    render () {
        return (

            <div>

                

                <table >
                <h1 className="News-Stories"> News Stories</h1>
                    <tbody >

                        {

                            this.state.News.map(

                                News => 
                                <tr key = {News.story_id}>
                                    <td> {News.story_title} </td>
                                    <td> {News.story_link} </td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

        )
    }

}

export default NewsStoryComponent

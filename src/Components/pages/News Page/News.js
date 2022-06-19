import React from 'react'
import NewsStoryComponent from './NewsStoryComponent'
import Layout from '../../../Layout/Layout'

function News() {
    const News = {
        backgroundImage : "url(/images/News.jpg)",
        height: "700px",
        overflow: "scroll",
       
	  };
    return (
        <Layout>
        <div style={News}>
            <NewsStoryComponent />
        </div>
        </Layout>
    )
}

export default News

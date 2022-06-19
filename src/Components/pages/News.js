import React from 'react'
import NewsStoryComponent from './NewsStoryComponent'
import AddStory from './AddStory'
function News() {
    const News = {
        backgroundImage : "url(/images/News.jpg)",
        height: "700px",
       
	  };
    return (
        <div style={News}>
                  

            <NewsStoryComponent />
      <AddStory/>
        </div>
    )
}

export default News

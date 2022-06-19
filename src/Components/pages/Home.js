import React from 'react';
import '../../Styles/Home.css';
import {Link} from 'react-router-dom'
/**
 //Home function: creates the home page -- Quiz Introduction

 Note: Important changes have been made to this function:
 - Before the slider was made using the "Fade" component. Now it uses only JSX and CSS. This decision is due to remove the slider controls that the Fade component
   creates and to crop the image to fit the viewport only.
 - The slider is controlled inside the CSS file: "Home.css"
 - If you want to add more images to the slider, make sure the aspect ratio is 3/2 (Width / Height) or near.

 - A background has been added to the "content" <div> for better visualization.
 - Now the page has the web title to let users know they are in the NeoTerra Website.

 */

function Home()
{
  return(
    <div className="slider">
      <div className="Name">
        <i>NeoTerra: <span className="sub">Towards a healthier world</span></i>
      </div>
      <div className="content">
        <h1>How aware are you about climate change?</h1>
        <h2><i>Put yourself to the test</i></h2>
        <Link to='/Quiz'className="quiz-btn"> Take Our Quiz</Link>
      </div>
    </div>
  );
}

export default Home;

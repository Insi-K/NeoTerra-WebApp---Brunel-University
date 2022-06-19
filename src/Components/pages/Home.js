import React from 'react';
import Carousels from '../../Carousels';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import '../../App.css';

const fadeImages = [
    'images/nature.jpg',
    'images/Nature3.jpg',
    'images/Nature4.jpg'
    
  ];
  
function Home (){
    return (
        <div className="slide-container">
            
          <Fade>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[0]} alt="img1" />
                <h1 className="QuizTitle">
            How aware are you about Climate Change?
            </h1>
            <h2 className="QuizTitle-2">
                Put yourself to the test
                <br/>
            <h2>

            </h2>
            <Link to='/Quiz' className='Button-link' >
                    Take Our Quiz
            </Link>
            </h2>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[1]} alt="img1" />
                <h1 className="QuizTitle">
            How aware are you about Climate Change?
            </h1>
            <h2 className="QuizTitle-2">
                Put yourself to the test
                <br/>
            <h2>

            </h2>
            <Link to='/Quiz' className='Button-link' >
                    Take Our Quiz
            </Link>
            </h2>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[2]} alt="img1" />
                <h1 className="QuizTitle">
            How aware are you about Climate Change?
            </h1>
            <h2 className="QuizTitle-2">
                Put yourself to the test
                <br/>
            <h2>

            </h2>
            <Link to='/Quiz' className='Button-link' >
                    Take Our Quiz
            </Link>
            </h2>
              </div>
            </div>
          </Fade>
          <Carousels/>
        </div>
      )
    }

export default Home;

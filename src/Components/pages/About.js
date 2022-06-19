import React from 'react';
import Layout from '../../Layout/Layout'
import '../../Styles/About.css';

const backgroundImage = {
    backgroundImage : "url(/images/image2.jpg)",
    height: "100vh",
    display: "flex",
    width :"100%",
    backgroundRepeat: 'no-repeat',
	  backgroundSize: 'cover'
  };
function About () {
    return(
        <>
            <Layout>
            
              <div style={backgroundImage}>
                <div className="contentBox">
                  <div className="center">
                    {/* Title */}
                    <h1>About: Project Neo-Terra</h1>
                    {/* Section - 1 */}
                    <h4><i>- OUR STORY:</i></h4>
                    <hr className="line"/>
                    <p>
                    Neo-Terra is a group of students who work together to fight against climate change through all over the United Kingdom. We share the news regarding 
                    climate change, we offer you the possibility to check your carbon footprint thanks to our calculator and finally, we have a quiz that you can find 
                    on the website to test your knowledge on the subject. 
                    <br/>
                    We aim to create a new generation of young people who are aware of the situation, educated about 
                    society and the change we need, in order to change the system we live in.​ 
                    </p>
                    {/* Section - 2 */}
                    <h4><i>- OUR MISSION:</i></h4>
                    <hr className="line"/>
                    <p>
                    Neo-Terra is our proposal as a team to build a web application that will address climate change, one of the UN sustainable development goals.
                    Our main goal is to get people to be more involved in climate change and the consequences it has in today’s society. Although it seems to be an issue 
                    that is taken into account, we still struggle to mitigate its effects.
                    <br/><br/>
                    The development of our platform will be focused on a younger audience, ranging from 15 to 25 years of age. Almost half of the global population is aged 
                    under 25 and although our target audience represents only the 16%, we believe that it is essential to educate and provide resources to a group of people 
                    who are developing their critical thinking but yet they play an important role in society.
                    </p>
                    <p>
                    In order to accomplish our project, we defined our goal into three main principles, or what we call the “EEE”:
                    <br/><br/>
                    - Engage: bring new users to our platform
                    <br/>
                    - Educate: provide information from reliable resources
                    <br/>
                    - Encourage: help them take a course of action providing existing and innovating solutions.
                    <br/><br/>

                    In addition to this, we believe that users should be more exposed to the news, as it is known from research that news has a correlation with the level 
                    of concern people have towards environmental issues.
                    2019 was the second warmest year on record and the end of the warmest decade (2010- 2019) ever recorded.
                    Carbon dioxide (CO2) levels and other greenhouse gases in the atmosphere rose to new records in 2019.
                    </p>
                  </div>
                  {/* Added a return button */}
                  <div className="return">
                    <a href="/Learn">Return to main website</a>
                  </div>
                  
                </div>
              </div>
                
        </Layout>
        </>
    )
}
export default About;
import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import './Learn.css'
import { cyan, lightBlue } from '@material-ui/core/colors';

function Learn() {
  
    
    const useStyles = makeStyles((theme) => ({
      

        container: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 2fr)',
          gridGap: theme.spacing(2),
        },
        paper: {
          padding: theme.spacing(15),
          textAlign: 'left',
          color: theme.palette.text.secondary,
          whiteSpace: 'nowrap',
          marginBottom: theme.spacing(2),
          marginTop: theme.spacing(1),
          marginLeft: theme.spacing(1),
        },
        paper2: {
          height:'1h',
          display: 'flex',
          justifyContent: 'center',
          alignitems: 'center',
          width: '2h',
        },

        paper3: {
          height:'1h',
          display: 'inline-block',
          justifyContent: 'center',
          alignitems: 'center',
          width: '2h',
          marginLeft: theme.spacing(1),
        },


        factBox:{
          backgroundColor: cyan[100],
          margin: theme.spacing(1),
          width: theme.spacing(85),
          height: theme.spacing(10),
          borderRadius: 25,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          
        },

        divider: {
          margin: theme.spacing(0, 1),
        },
        

       
      
      }));
    const classes = useStyles();
      
      const Temp = {
        backgroundImage : "url(/images/temprise.jpg)",
        height: "530px",
        width: "900px",
      };

      const Ocean = {
        backgroundImage : "url(/images/oceans.jpg)",
        height: "500px",
        width:"900px",

      };
      const Leaf = {
        backgroundImage : "url(/images/leafsprout.jpg",
        height: "700px",
        width:"1900px",
      };

      const Deforestation = {
        backgroundImage : "url(/images/Deforestation.jpg)",
        height: "525px",
        width:"900px",
      };
      
      const droughts = {
        backgroundImage : "url(/images/droughts.jpg)",
        height: "460px",
        width:"900px",
      };

      const fires = {
        backgroundImage : "url(/images/fires.jpg)",
        height: "529px",
        width:"900px",
        resizeMode: 'contain',
        alignItems: 'center',
        overflow: 'hidden',
      };

      const forests = {
        backgroundImage : "url(/images/forests.jpg)",
        height: "460px",
        width:"900px",
        
      };

      const Polar = {
        backgroundImage : "url(/images/polarregions.jpg)",
        height: "530px",
        width:"900px",
        
      };

      const SafeWater = {
        backgroundImage : "url(/images/safewater.jpg)",
        height: '500px',
        width: '930px',
        position: 'relative',
        
      };
      const SeaLevels = {
        backgroundImage : "url(/images/sealevels.jpg)",
        height: "500px",
        width:"900px",
        
      };
    
      const Species = {
        backgroundImage : "url(/images/species.jpg)",
        height: "500px",
        width:"900px",
      };
      const Weather= {
        backgroundImage : "url(/images/weather.jpg)",
        height: "500px",
        width: "900px",
        position: "inline",
        resizeMethod: 'auto',
        
      };

  return (
      
    <div>
      <Typography variant="subtitle1" gutterBottom>
      <div className ="gradientBox">
        <div style={Leaf}>
                  <h1 className="TitleLearn">
                      What are the effects of climate<br/> change in nature?
                      <br/>
                      <h4 className="Subheading">
                        Climate change is a problem we are facing and it will affect the whole<br></br>planet in many ways.
                      </h4>
                      <h4 className="Subheading2">
                      We are aware that ecosystems constitute an element that humans cannot<br></br>do without, since without their resources we are unable to survive. Yet, our<br></br>actions put their existence at risk.
                      </h4>
                  </h1>
        </div>
      </div>
      </Typography>

      {/*Mid Section for Fact box */}
      
      <div className={classes.divider}>
          <h2 className="MidSubtitle">
         In this article we will take a look at the main consequences of climate change in nature:
         </h2>
      <div className={classes.paper2}>
       <Paper className={classes.factBox} elevation={10}>
         <Box m="2" p={1}>
          <Typography variant="subtitle1">
            <h1 className="Fact"><b><i>Fact: </i></b>Ecosystems perform an important role in climate regulation. Nowadays it is known that <br>
            </br>they absorb around half of CO2 emissions produced by humans
            </h1>
          </Typography>
        </Box>
       </Paper>
     </div>
     
     </div>
    
     {/*1st Box*/}
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div>
          <Paper className={classes.paper}>
          <h1 className="boxTitle"><b><i>Rise of Temperatures</i></b></h1>
          <h5 className="boxText">This is one of the most known consequences of climate change in the world.<br/>Due to global warming and our contribution with greenhouse gas emissions,<br></br> the global temperature has been increasing faster than it should.<br/> 
          This will cause extreme weather events on certain areas of the world, where<br></br>countries will face situations like heatwaves, arid conditions as well as extreme<br></br>precipitation.<br></br> The increase of temperatures has been more pronounced in the last decades,<br></br>having between 1975 and 2007 an average rate of warming of about 0.5<br></br>degrees per decade and it is expected to rise as much as 6 degrees by 2100. 
          </h5>
          </Paper>
        </div>
        <div >
          <Paper className={classes.paper2}><div style={Temp}></div></Paper>
        </div>
      </div>

      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.paper3}><div style={Polar}></div></Paper>
        </div>
        <div >
        <Paper className={classes.paper}>
          <h1 className="boxTitle"><b><i>Impact on Polar Regions</i></b></h1>
          <h5 className="boxText">This is one of the most known consequences of climate change in the world.<br/>Due to global warming and our contribution with greenhouse gas emissions,<br></br> the global temperature has been increasing faster than it should.<br/> 
          This will cause extreme weather events on certain areas of the world, where<br></br>countries will face situations like heatwaves, arid conditions as well as extreme<br></br>precipitation.<br></br> The increase of temperatures has been more pronounced in the last decades,<br></br>having between 1975 and 2007 an average rate of warming of about 0.5<br></br>degrees per decade and it is expected to rise as much as 6 degrees by 2100. 
          </h5>
          </Paper>
        </div>
      </div>

      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
        <Paper className={classes.paper}>
          <h1 className="boxTitle"><b><i>Rising Sea Levels</i></b></h1>
          <h5 className="boxText">With the melting of glacial ice from the polar regions and mountains, the<br/>Damount of water that flows into the world’s oceans increases, leading to<br></br>drastically rising sea levels, endangering many cities and ecosystems with<br></br> floods.<br></br>Scientists have speculated that if the ice in Antarctica, Greenland and the<br></br>Arctic melts at this rate, it could raise sea levels by more than 20 meters by<br></br>2100.
          </h5>
          </Paper>
        </div>
        <div >
          <Paper className={classes.paper3}><div style={SeaLevels}></div></Paper>
        </div>
      </div>
   

      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.paper3}><div style={Ocean}></div></Paper>
        </div>
        <div >
        <Paper className={classes.paper}>
          <h1 className="boxTitle"><b><i>Impact in Oceans</i></b></h1>
          <h5 className="boxText">Oceans will have a big influence on climate change. They are known for<br></br>absorbing huge amounts of CO2 and preventing it from reaching the<br></br>the atmosphere. This along with the increase of water temperatures leads to a<br>
          </br>higher PH which makes the oceans more acidic threatening marine species.
          <br></br>
          An example of this are coral reefs, being one of the great harmed. The<br></br>increase of temperature is causing their ecosystem to be destroyed and if no<br></br>action is taken, they could disappear by 2050.
          </h5>
          </Paper>
        </div>
      </div>
      

        <Divider className={classes.divider} />
        <Typography variant="subtitle1" gutterBottom>

        </Typography>
        <div className={classes.container}>
          <div >
            <Paper className={classes.paper}> 
               <h1 className="boxTitle"><b><i>Impact in Forests</i></b></h1>
               <h5 className="boxText">Forests are vital for the planet. They constitute a main line of defence against climate<br></br> change, as their main role is to soak up carbon dioxide, the main greenhouse gas<br></br>responsible of global warming. This way forests help regulate the global temperatures.<br></br>They also are an important element in ecosystems as they become the home of many plant<br></br>and animal species.
               
              </h5>
            </Paper>
          </div>
          <div >
            <Paper className={classes.container}><div style={forests}></div></Paper>
          </div>
        </div>

        <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.container}><div style={Species}></div></Paper>
        </div>
        <div >
          <Paper className={classes.paper}>
          <h1 className="boxTitle"><b><i>Endangered Species (biodiversity) </i></b></h1>
          <h5 className="boxText">
          Global warming is likely to be the main cause of the extinction of many species this century.
          <br></br>just increasing more than 2 degrees globally, most ecosystems will be threatened. Most
          <br></br>of the threatened species live in areas affected by climate change. Desertification, rising 
          <br></br>temperatures as well as deforestation are some of the different life conditions that prevent 
          <br></br>species from adapting and contribute to the disastrous and irreversible changes that 
          <br></br>are taking place in the habitat. On the other hand, we find proliferation of invasive species,
          <br></br> such as jellyfish or tiger mosquitoes, which harm other species such as sea snails.
          <br></br>Birds are also changing their patterns, staying in warmer latitudes.In the sea, there is a 
          <br></br>decrease in algae species, examples of this are the red algae in the Cantabrian Sea. 
          <br></br>The Mediterranean coral reefs are severely affected. In addition, the increase of temperatures 
          <br></br>has triggered the mortality rates of Posidonia.
          </h5> 
          </Paper>
        </div>
      </div>

      <Divider className={classes.divider} />
        <Typography variant="subtitle1" gutterBottom>

        </Typography>
        <div className={classes.container}>
          <div >
            <Paper className={classes.paper}>
            <h1 className="boxTitle"><b><i>Extreme Weather Events</i></b></h1>
            <h5 className="boxText">
            The emission of greenhouse gases and the increase of temperatures, contributes to the spread of
            <br></br>meteorological phenomena. By just increasing the global temperatures above 1.5 degrees, 
            <br></br>it could lead to a further increase in extreme heat, torrential rains and the likelihood of droughts.
            <br></br>In addition, the tropicalization of the oceans leads to a higher rate of evaporation which results 
            <br></br>in an increase of cloud cover, facilitating the formation of stronger storms and other phenomena.
            <br></br>Wetter winters and a warmer sea would increase the risk of floods in areas such as the Mediterranean.
            </h5>
            </Paper>
          </div>
          <div >
            <Paper className={classes.container}><div style={Weather}></div></Paper>
          </div>
        </div>

        <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.container}><div style={fires} resizeMode ={'cover'}></div></Paper>
        </div>
        <div >
          <Paper className={classes.paper}>
          <h1 className="boxTitle"><b><i>Heat waves and fires</i></b></h1>
          <h5 className="boxText">
          Heat waves have become increasingly common. This is due to greenhouse gases being trapped 
          <br></br>in the atmosphere. Studies indicate that these heat waves will continue to increase in the coming 
          <br></br>years and become 100 times worse in the future. 
          <br></br>
          <br></br>These events could cause intense fires and contribute to greater deforestation due to the decrease
          <br></br>of resilience of forests.
          </h5> 
          </Paper>
        </div>
      </div>

      <Divider className={classes.divider} />
        <Typography variant="subtitle1" gutterBottom>

        </Typography>
        <div className={classes.container}>
          <div >
            <Paper className={classes.paper}>
            <h1 className="boxTitle"><b><i>Droughts</i></b></h1>
            <h5 className="boxText">
            It has become noticeable that various parts of the world are struggling due to droughts.
            <br></br>The planet is warming and in turn, fresh water is diminishing which leads to poor 
            <br></br>conditions, it could lead to a further increase in extreme heat, torrential rains and the 
            <br></br>likelihood of droughts. There is a severe water shortage that is causing disruptions
            <br></br> in global food production and hunger is becoming more widespread.
            </h5>
            </Paper>
          </div>
          <div >
            <Paper className={classes.container}><div style={droughts}></div></Paper>
          </div>
        </div>

        <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.container}><div style={SafeWater}></div></Paper>
        </div>
        <div >
          <Paper className={classes.paper}>
          <h1 className="boxTitle"><b><i>Access to safe water</i></b></h1>
          <h5 className="boxText">
          Climate change has a severe impact on water systems due to events such as floods and droughts. 
          <br></br>Warmer air can hold higher amounts of water which makes rainfall patterns more extreme.
          <br></br>Rivers and lakes supply drinking water to people and animals and are vital for farming and for the
          <br></br>industry. Freshwater environments are already facing many problems such as drainage, dredging,
          <br></br> damming, pollution, extraction, silting and invasive species. If we add climate change to the formula,
          <br></br> the whole situation becomes worse as extreme weather events can cause displacement and conflict.
          </h5>
          </Paper>
        </div>
      </div>

      <Divider className={classes.divider} />
        <Typography variant="subtitle1" gutterBottom>

        </Typography>
        <div className={classes.container}>
          <div >
            <Paper className={classes.paper}>
            <h1 className="boxTitle"><b><i>Destruction of ecosystems</i></b></h1>
            <h5 className="boxText">
            The increase of greenhouse gases is not only causing drastic changes in the atmosphere, 
            <br></br>but it is causing struggles around the globe, affecting water supplies, clean air and agriculture, 
            <br></br>as well as energy resources. As climate change affects ecosystems, plants and animals die or
            <br></br>move to other habitats, when the ones on which they depend for survival are threatened.
            <br></br>
            <br></br>Climate change is a <b>reality</b> that must be accepted. Many species, ecosystems and natural
            <br></br>processes are currently threatened by the drastic changes that have taken place in the last centuries.
            <br></br>It is important to take action now in order to reduce its effects and become able to adapt in time to the 
            <br></br>new conditions that are being imposed.
            </h5>
            </Paper>
          </div>
          <div >
            <Paper className={classes.container}><div style={Deforestation}></div></Paper>
          
          </div>
        </div>
       


     </div>
  );
}

export default Learn

import Layout from '../../../Layout/Layout'
import {CreateBox, CreateFact, References} from './ArticleBox';
import {ArticleBanner} from './Banner';

/* --- Links for Banner --- */
const links = { 
  previous: '/Learn',
  next: '/LearnPageThree',
}

/* --- Article Body --- */
const article2 = {
    title: 'What are the consequences of climate change in society?',
    subtitle: (
      <p>
        Climate change is affecting people in far-reaching ways. Impacts related to climate change are evident 
        across regions and in many sectors important to society—such as human health, agriculture and food security, 
        water supply, transportation, and others—and are expected to become increasingly disruptive throughout this century 
        and beyond.
      </p>),
}

const Health = {
  id: 'Health',
  title: <h1>Health</h1>,
  txt: (
    <p>
      The same fossil fuel emissions that contribute to the greenhouse effect can also lead to
      cardiovascular and respiratory diseases such as asthma particularly among the elderly.
      It is estimated air pollution kills 7 million people worldwide every year         
      according to the World Health Organisation. Between 2030 and 2050 climate change
      is expected to cause 250000 additional deaths per year from malnutrition and heat stress. <br/>
      <br/>
      Warmer temperatures are linked to a 2 percent increase in mental health issues such as stress,
      anxiety and PTSD. Changes in climate change strongly affect water borne diseases and increases
      the transmissions of disease through insects. Malaria kills over 400000 people a year. <br/>
      The number of weather-related disasters from 2007 to 2016 increased by 46% when compared with
      the average for 1990 to 1999. Despite this rise the number of deaths caused by natural
      disasters did not increase. However, between 1990 and 2016 these disasters affected 4.8 billion
      people in Asia and killing 500000 people.
    </p>
  ),
  img: '/images/healthcare.jpg',
  layout: 'left'
}

const Economy = {
  id: 'Economy',
  title: <h1>Economy</h1>,
  txt: (
    <p>
      Warmer temperatures, higher sea levels and extreme weather will damage property and critical infrastructure
      and negatively impact sectors such as: agriculture, forestry, fisheries and tourism. According to Morgan Stanley 
      climate disasters have caused North America $415 billion in the last three years and leaving millions of lives in poverty. 
      The world bank is warning that if we don’t do something immediately climate cause 100 million people into poverty. <br/>
      Heatwaves make us less able to work and reduce productivity. Insurance firms would have to raise premiums to cover rising 
      costs from extreme weather. This would make insurance too expensive for most people. <br/>
      <br/>
      Efforts to stop climate change would create many jobs. Agricultural yields are sensitive to weather conditions as our 
      climate becomes more extreme this will result in a reduction of crop yields in areas where food production is vital. <br/>
      Climate change will affect tourism. A warming climate and changes to precipitation patterns will decrease the number of days 
      when recreational snow activities that can take place. <br/>
      The accumulation of carbon dioxide is changing the compositions of fruit and vegetables making the less nutritious. 
      The extra carbon dioxide is speeding up photosynthesis which produces more sugar and less, calcium, zinc and important vitamins. 
      As a result, this will lead to many more people developing a zinc or protein deficiency.
    </p> 
  ),
  img: '/images/economy.jpg',
  layout: 'right'
}

const Water = {
  id: 'Water',
  title: <h1>Water</h1>,
  txt: (
    <p>
      Climate change also disrupts the water cycle and precipitation, leading to more intense droughts.
      As a result, the water supply decreases as the demand increase as population continues to grow. <br/>
      Water quality will suffer in areas experiencing a large amount of rainfall. Heavy rain downpours
      can increase the number of pollutants, animal waste, trash and other materials that would make
      the water unsafe or in need of water treatment. <br/>
      <br/>
      Hydroelectric plants will be unable to function from the higher temperatures as this decreases
      the water present in lakes and rivers. Overgrown algae occur from the increased pollution.
      This makes treating the water a strenuous task.
    </p>
  ),
  img: '/images/water.jpg',
  layout: 'left'
}

/* --- Fact --- */
const fact = {
  txt: 'There is more carbon dioxide in our atmosphere than any time in human history'
}

/* --- References --- */
const sources = [
  {
    web: "Columbia University",
    link: "https://blogs.ei.columbia.edu/2019/12/27/climate-change-impacts-everyone/",
    title: "10 Climate change impacts that will affect us all",
    language: "EN"
  },
  {
    web: "National Geographic",
    link: "https://www.nationalgeographic.com/climate-change/how-to-live-with-it/health.html",
    title: "Climate change: how to live with it",
    language: "EN"
  },
  {
    web: "wwf.org.uk",
    link: "https://www.wwf.org.uk/learn/effects-of/climate-change",
    title: "Effects of climate change",
    language: "EN"
  },
  {
    web: "noaa.gov",
    link: "https://www.noaa.gov/education/resource-collections/climate/climate-change-impacts",
    title: "Climate change impacts",
    language: "EN"
  },
  {
    web: "Health Affairs",
    link: "https://www.healthaffairs.org/do/10.1377/hblog20181218.278288/full/",
    title: "Climate change is the greatest threat to human healh in history",
    language: "EN"
  },
  {
    web: "Carbon Brief",
    link: "https://www.carbonbrief.org/impact-climate-change-health-is-major-threat-21st-century",
    title: "Impact of climate change on health is 'the major threat of 21st century'",
    language: "EN"
  },
]

  function Article_2() {
      return (
          <Layout>
              <div>
              {ArticleBanner(article2, '/images/Articles/society.jpg', links)}

              <p className="article-body">In this article we will look at the main consequences of climate change  on people and the society we live in:</p>

              {CreateFact(fact)}
              {CreateBox(Health)}
              {CreateBox(Economy)}
              {CreateBox(Water)}
              </div>

              <p className="article-body">Climate change is an ever growing issue concerning us all. We all need to do our part to overcome it. Find out <a href='/LearnPageThree' className="link"><i>what you can do.</i></a></p>

              {References(sources)}

          </Layout>
      );
  }
  export default Article_2;
  
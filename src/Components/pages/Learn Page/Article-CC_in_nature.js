import Layout from '../../../Layout/Layout'
import {CreateBox, CreateFact, References} from './ArticleBox';
import {ArticleBanner} from './Banner';

//This css file modifies some parts of the content.
import '../../../Styles/Blog.css'; 


/* --- Links for banner --- */
const links = { 
  previous: '#',
  next: '/LearnPageTwo',
}

/* 
Here you can write the Article's content/body.
You are most likely to use content boxes. Each box (content / topic / bullet point) should be stored as an object. 
The object should have the following properties: 

- id: String
- title: JSX (<h1> is recommended)
- txt: JSX (<p> is recommended)
- img: object or String (it should contain the path of the image)
- layout: specify the position of the content relative to the img. 
          Values can be only 'right' or 'left passed as String.

NOTE: please use the property names displayed above.
*/

/* --- Article Body --- */
const article1 = {
  title: 'What are the consequences of climate change in nature?',
  subtitle: (
    <p>
      Climate change is a problem we are facing and it will affect the whole planet in many ways.
      We are aware that ecosystems constitute an element that humans cannot do without, since 
      without their resources we are unable to survive. Yet, our actions put their existance at risk.
    </p>),
}

/* --- Fact --- */
const fact = {
  txt: 'Ecosystems perform an important role in climate regulation. Nowadays it is known that they absorb around half of CO2 emissions produced by humans'
}

/* --- Article Body --- */
const articleBody = [
  /* Temp */
  {
    id: 'TempRise',
    title: <h1>Temperature Rise</h1>,
    txt: (
      <p>
        This is one of the most known consequences of climate change in the world.
        Due to global warming and our contribution with greenhouse gas emissions,
        the global temperature has been increasing faster than it should.
        This will cause extreme weather events on certain areas of the world,
        where countries will face situations like heatwaves, arid conditions as well as
        extreme precipitation. 
        <br/><br/>
        The increase of temperatures has been more 
        pronounced in the last decades, having between 1975 and 2007 an average 
        rate of warming of about 0.5 degrees per decade and it is expected to rise
        as much as 6 degrees by 2100.
      </p>
    ),
    img: '/images/temprise.jpg',
    layout: 'left'
  },
  /* Polar */
  {
    id: 'PolarRegions',
    title: <h1>Impact in Polar Regions</h1>,
    txt: (
      <p>
        The biggest impact of climate change takes place in the polar regions.
        The glacial areas have a big influence on the world's temperature,
        they help regulate the temperature by reflecting the sun's energy. 
        <br/><br/>
        However, as global temperature increases, these big masses of ice are melting down
        which contributes to warm the planet faster as more heat is trapped within the atmosphere.
      </p>
    ),
    img: '/images/polarregions.jpg',
    layout: 'right'
  },
  /* Sea */
  {
    id: 'SeaLevels',
    title: <h1>Rising Sea Levels</h1>,
    txt: (
      <p>
        With the melting of glacial ice from the polar regions and mountains, 
        the amount of water that flows into the world's oceans increases,
        leading to drastically rising sea levels, endangering many cities and ecosystems
        with floods.
        <br/><br/>
        Scientists have speculated that if the ice in Antartica, Greenland and the Arctic 
        melts at this rate, it could raise sea levels by more than 20 meters by 2100.
      </p>
    ),
    img: '/images/sealevels.jpg',
    layout: 'left'
  },
  /* Ocean */
  {
    id: 'ImpactOceans',
    title: <h1>Impact in Oceans</h1>,
    txt: (
      <p>
        Oceans will have a big influence on climate change. They are known for absorbing
        huge amounts of CO2 and preventing it from reaching the atmosphere. This along with 
        the increase of water temperatures leads to a higher PH which makes the oceans more 
        acidic, threatening marine species.
        <br/><br/>
        An example of this are coral reefs, being one of the great harmed. The increase of
        temperature is causing their ecosystem to be destroyed and if no action is taken,
        they could disappear by 2050.
  
      </p>
    ),
    img: '/images/oceans.jpg',
    layout: 'right'
  },
  /* Forest */
  {
    id: 'ImpactForests',
    title: <h1>Impact in Forests</h1>,
    txt: (
      <p>
        Forests are vital for the planet. They constitute a main line of defence against climate change, 
        as their main role is to soak up carbon dioxide, the main greenhouse gas responsible of global warming. 
        This way forests help regulate the global temperatures. They also are an important element in ecosystems 
        as they become the home of many plant and animal species.
        <br/><br/>
        Deforestation might be one of the main impacts on climate change. 
        Local species and communities are affected when large areas of forest are destroyed, not only due to the 
        lack of resources but also as dying trees release their stores of CO2, thus becoming a big influence on 
        global warming.
  
      </p>
    ),
    img: '/images/forests.jpg',
    layout: 'left'
  },
  /* Species */
  {
    id: 'EndangeredSpecies',
    title: <h1>Endangered Species</h1>,
    txt: (
      <p>
        Global warming is likely to be the main cause of the extinction of many species this century. By just 
        increasing more than 2 degrees globally, most ecosystems will be threatened.
        <br/>
        Most of the threatened species live in areas affected by climate change. Desertification, rising temperatures 
        as well as deforestation are some of the different life conditions that prevent species from adapting and 
        contribute to the disastrous and irreversible changes that are taking place in the habitat.
        <br/><br/>
        On the other hand, we find proliferation of invasive species, such as jellyfish or tiger mosquitoes, which 
        harm other species such as sea snails.
        Birds are also changing their patterns, staying in warmer latitudes.
        <br/>
        In the sea, there is a decrease in algae species, examples of this are the red algae in the Cantabrian Sea. 
        The Mediterranean coral reefs are severely affected. In addition, the increase of temperatures has triggered 
        the mortality rates of Posidonia.
  
      </p>
    ),
    img: '/images/species.jpg',
    layout: 'right'
  },
  /* Weather */
  {
    id: 'ExtremeWeather',
    title: <h1>Extreme Weather Events</h1>,
    txt: (
      <p>
        The emission of greenhouse gases and the increase of temperatures, contributes to the spread of meteorological phenomena.
        <br/>
        By just increasing the global temperatures above 1.5 degrees will lead to a further increase in extreme heat, torrential 
        rains and the likelihood of droughts.
        <br/><br/>
        In addition, the tropicalization of the oceans leads to a higher rate of evaporation which results in an increase of cloud 
        cover, facilitating the formation of stronger storms and other phenomena. Wetter winters and a warmer sea would increase the 
        risk of floods in areas such as the Mediterranean.
  
      </p>
    ),
    img: '/images/weather.jpg',
    layout: 'left'
  },
  /* Fires */
  {
    id: 'Fires',
    title: <h1>Heat waves and Fires</h1>,
    txt: (
      <p>
        Heat waves have become increasingly common. This is due to greenhouse gases being trapped in the atmosphere. Studies indicate 
        that these heat waves will continue to increase in the coming years and become 100 times worse in the future. 
        <br/><br/>
        These events could cause intense fires and contribute to greater deforestation due to the decrease of resilience of forests.
  
      </p>
    ),
    img: '/images/fires.jpg',
    layout: 'right'
  },
  /*  */
  {
    id: 'Droughts',
    title: <h1>Droughts</h1>,
    txt: (
      <p>
        It has become noticeable that various parts of the world are struggling due to droughts. The planet is warming and in turn, 
        fresh water is diminishing which leads to poor conditions in agriculture. There is a severe water shortage that is causing 
        disruptions in global food production and hunger is becoming more widespread.
      </p>
    ),
    img: '/images/droughts.jpg',
    layout: 'left'
  },
  /* SafeWater */
  {
    id: 'SafeWater',
    title: <h1>Access to Safe Water</h1>,
    txt: (
      <p>
        Climate change has a severe impact on water systems due to events such as floods and droughts. Warmer air can hold higher 
        amounts of water which makes rainfall patterns more extreme.
        <br/><br/>
        Rivers and lakes supply drinking water to people and animals and are vital for farming and for the industry. Freshwater 
        environments are already facing many problems such as drainage, dredging, damming, pollution, extraction, silting and 
        invasive species. If we add climate change to the formula, the whole situation becomes worse as extreme weather events 
        can cause displacement and conflict.
      </p>
    ),
    img: '/images/safewater.jpg',
    layout: 'right'
  },
  /* Ecosystems */
  {
    id: 'DestructionEcosystems',
    title: <h1>Destruction of Ecosystems</h1>,
    txt: (
      <p>
        The increase of greenhouse gases is not only causing drastic changes in the atmosphere, but it is causing struggles around 
        the globe, affecting water supplies, clean air and agriculture, as well as energy resources. As climate change affects 
        ecosystems, plants and animals die or move to other habitats, when the ones on which they depend for survival are threatened.
      </p>
    ),
    img: '/images/Deforestation.jpg',
    layout: 'left'
  },
]

/* --- References --- */
const sources = [
  {
    web: "wwf.org.uk",
    link: "https://www.wwf.org.uk/learn/effects-of/climate-change",
    title: "Effects of climate change",
    language: "EN"
  },
  {
    web: "ayudaenaccion.org",
    link: "https://ayudaenaccion.org/ong/blog/sostenibilidad/consecuencias-del-cambio-climatico/#:~:text=La%20deforestaci%C3%B3n%20y%20desaparici%C3%B3n%20de,de%20gases%20de%20efecto%20invernadero.",
    title: "Consequences of climate change",
    language: "SPA"
  },
  {
    web: "Greenpeace",
    link: "https://es.greenpeace.org/es/trabajamos-en/cambio-climatico/asi-afecta-el-cambio-climatico/efectos-del-cambio-climatico-en-el-medio-ambiente/",
    title: "Effects of climate change in the environment",
    language: "SPA"
  },
  {
    web: "ecoinventos.com",
    link: "https://ecoinventos.com/los-diez-efectos-mas-importantes-del-cambio-climatico/",
    title: "Top 10 most important effects of climate change",
    language: "SPA"
  },
  {
    web: "nuevatribuna.es",
    link: "https://nuevatribuna.publico.es/articulo/medio-ambiente/efectos-cambio-climatico-biodiversidad/20190525090956163038.html",
    title: "Effects of climate change in biodiversity",
    language: "SPA"
  },
]

/* 
Inside the main function we will pass only the required functions and arguments which will build the page content.
The functions defined already include CSS parameters.

//Instruccions on how to build an article:

- Create an instance of NavBar always!!!! (just add content inside the <Layout> Component)
- to add an element such as page banner, box content or fact box use the imported functions from Article.js and banner.js.
  Make sure you call the function within brackets --> "{}" inside a "<div>" tag.
  Take a look at each JS to know more on their function call syntax.
- you can add paragraphs and headings for extra content such as intro and conclusion.

- Summary of functions used to make an article:
    * PageBanner --- used to add a section banner (for HOME, LEARN, QUIZ, main pages)
    * CreateFact --- used to add a short fact related to the main topic
    * CreateBox  --- used to add a bullet point with image content. Take a look at "Climate Change in nature" article for reference
*/
function Article_1() {
  return(
    <Layout>
        <div>
            {/* Page Banner */}
            {ArticleBanner(article1, '/images/Articles/leafsprout.jpg', links)}

            {/* Article Intro */}
            <p className="article-body">In this article we will look at the main consequences of climate change in nature:</p>

            {/* Article fact */}
            {CreateFact(fact)}

            {/*Article body */}
            {articleBody.map((topic) => {return CreateBox(topic)})}

            {/* Conclusion */}
            <i><h1 className="conclusion-title">Conclusion</h1></i>
            <p className="article-body">
            Climate change is a reality that must be accepted. Many species, ecosystems and natural processes are currently threatened by the drastic changes that
            have taken place in the last centuries.
            It is important to take action now in order to reduce its effects and become able to adapt in time to the new conditions that are being imposed.
            </p>

            {/* References */}
            {References(sources)}
        </div>
    </Layout>
    );
}

export default Article_1;

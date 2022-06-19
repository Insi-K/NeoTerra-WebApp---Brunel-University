import Paper from '@material-ui/core/Paper';

/* 

//"content" object: this test function will have as argument an empty object.
The object in question will require the following properties:

- id: String
- title: JSX (<h1> is recommended)
- txt: JSX (<p> is recommended)
- img: object (it should contain the path of the image. Use import in the main article JS file)
- layout: specify the position of the content relative to the img. 
          Values can be only 'right' or 'left passed as String.

NOTE: please use the property names displayed above.
*/


/*

//CreateBox function:
This function is used to create a text box that includes detailed information regarding a specific bullet point or topic.
For reference take a look at "Climate Change in Nature " article.

This method requires an object argument in order to work properly. It is recommended to look at "content" object.

NOTE: It is not recommended to use this function with long extensions of text to avoid excessive cropping on the image.

*/
export function CreateBox(content)
{

    const box = {
        div_1: 
        {
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1.7fr 2fr)',
            marginBottom: '30px'
        },

        div_2:
        {
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 2fr 1.7fr)',
            marginBottom: '30px'
        },

        content:
        {
            padding: '120px',
            textAlign: 'justify',
        },

        img: {
            width: '100%',
            backgroundImage: `url(${content.img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }
    }

    if(content.layout === 'left')
    {
        return (
            <div id={content.id} style={box.div_2}>
                <Paper style={box.content}>
                    <i className="box-title">{content.title}</i>
                    {content.txt}
                </Paper>
                <Paper style={box.img} square></Paper>
            </div>
        );
    }
    else if(content.layout === 'right')
    {
        return(
            <div id={content.id} style={box.div_1}>
                <Paper style={box.img} square></Paper>
                <Paper style={box.content}>
                    <i className="box-title">{content.title}</i>
                    {content.txt}
                </Paper>
            </div>
        );
    }
}

/*

//CreateFact function:
This function will create a small box with a pice of info regarding a interesting or useful fact related to the main topic in question.

This method requires an object argument in order to work. The object in question requires to have the following property:

- txt: String

NOTE: please use the property names displayed above. 

 */
export function CreateFact(content)
{
    const fact = {
        padding: '20px',
        backgroundColor: 'rgb(204, 235, 255)',
        margin: '1em',
        width: '40vw',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'justify',
        borderRadius: '20px',
    }

    return (
        <Paper style={fact}>
            <i><b>Fact:</b> {content.txt}</i>
        </Paper>
    );
}

/*

//References function:
This function returns a list with all the sources used in the article

This method requires an array of object in order to work. Each object in the array must have the following properties:

- web: The main source website (This element is not a hyperlink)
- link: The we address to the original source / article
- title: Name of the article (from the source)
- language: specify the language of the source article (preferably abbreviations i.e: SPA, EN, GER, etc)
*/

export function References(links)
{
    return (
        <div className="references">
            <p>References:</p>
            <ul>
                {links.map((source) => {return <li>{source.web} - <a className="link" href={source.link}>{source.title}</a> ({source.language})</li>})}
            </ul>
        </div>
    );
}

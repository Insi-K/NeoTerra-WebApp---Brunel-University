/*

    PageBanner function:
    This function will create a banner for a specific page (the one you are developing in a separate JS file).

    This method requires two arguments:
    - pageTitle: the name of the page the user is currently at. This value is passed strictly as a String.
    - img: an object containing the path for the image to be used as background.

*/

export function PageBanner(pageTitle, img)
{
    const banner = {
        main: 
        {
            width: '100%',
            height: '40vw',
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        },

        title: 
        {
            display: 'table',
            padding: '40px 60px',
            backgroundColor: 'rgb(0, 0, 0, 0.5)',
            borderRadius: '5px',
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },

        content: 
        {
            fontSize: '100px', 
            margin: 0, 
            color: 'white'
        }
        
    }

    return (
        <div style={banner.main}>
            <div style={banner.title}>
                <h1 style={banner.content}>{pageTitle}</h1>
            </div>
        </div>
    );
}


/* 

    ArticleBanner function:
    This function will create an article header, similar to a page banner (see PageBanner function).

    ATTENTION!!: This function is still in development. It works as intended, but it might require more code economisation.

    This method requires two arguments:
    - head: an object containing the following parameters:
        * title: String
        * subtitle: JSX (<p> is recommended )
    - img: object (it should contain the path of the image. Use import in the main article JS file)

    NOTE: please use the property names displayed above.

*/

export function ArticleBanner(head, img, links)
{
    const banner = {
        main: 
        {
            width: '100%',
            height: '40vw',
            backgroundImage: `url(${process.env.PUBLIC_URL + img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        },

        header: 
        {
            height: '100%',
            width: '60%',
            backgroundColor: 'rgb(0, 0, 0, 0.5)',
            
        },

        title: 
        {
            fontSize: '30px', 
            margin: 0, 
            color: 'white',
            textAlign: 'left'
        },

        content: 
        {
            textAlign: 'justify',
            margin: '16px 0',
            color: 'white',
            fontSize: '20px'
        },

        link: 
        {
            display: 'flex',
            justifyContent: 'left',
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px',
            textDecoration: 'underline',
            marginBottom: '150px'
        }

    }

    return (
        <div style={banner.main}>
            <div style={banner.header}>
                <div style={{padding: '50px 100px'}}>
                    <div style={banner.link}>
                        <p style={{paddingRight: '30px'}}><a className="go-back" href={links.previous}>{"<"} Previous</a></p>
                        <p><a className="go-next" href={links.next}>Next {">"}</a></p>
                    </div>
                    <div style={banner.title}><h1 style={{margin: 0}}>{head.title}</h1></div>
                    <div style={banner.content}>{head.subtitle}</div>
                </div>
            </div>
        </div>
    );

}
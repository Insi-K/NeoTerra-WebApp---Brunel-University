import emailjs from "emailjs-com";
import React from 'react';
import '../../../Styles/Newsletter.css'
import Typical from 'react-typical'

export default function Newsletter() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_gsx7wwj', "template_6t7nara" , e.target, "user_WaNJvmIOzXMDStLaoV2zx")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        window.location.href = '/ThanksForSubscribing';
    }
    return(
            <form onSubmit={sendEmail}>
                <div className='Newsletter'>
                    <div className="row pt-2 mx-auto">
                        <div className="col-8 form-group mx-auto">
                                  <Typical
                                  className="NewsletterTitle"
                                    steps={['Hi 👋', 2000, ' Subscribe To Our Newsletter! 😃', 1500]}
                                    loop={Infinity}
                                    wrapper="p"
                                  />
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Subscribe now"></input>
                        </div>
                    </div> 
                    </div>
                </form>
    )
}
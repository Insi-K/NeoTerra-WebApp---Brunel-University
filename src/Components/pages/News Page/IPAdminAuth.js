import React from 'react';
import AdminNSComponent from './AdminNSComponent';
import IPservice from './IPservice';
//import '../.././../Styles/App.css';

class IPAdminAuth extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            IP: ""

        }
    }

    componentDidMount() {

        IPservice.getIPaddress().then((response) => {

            this.setState({IP: response.data})
            console.log(response.data)

        } );

    }

    render () {
    const {IP} = this.state

    {   
        
        switch (IP.ip) {
                                                //DEVELOPERS ADD YOUR IP ADDRESSES HERE!!!!!!!!
            case "90.217.179.169":
                return (
                    <div className = "newsgrid">
                        <AdminNSComponent/>   
                    </div>
                )
             case "134.83.252.83":
                 return (
                     <div className = "newsgrid">
                            <AdminNSComponent/>   
                     </div>
                 )

            case "90.199.0.122":
                return (
                    <div className = "newsgrid">
                        <AdminNSComponent/>   
                    </div>
                )

            case "134.83.252.111":
                return (
                    <div className = "newsgrid">
                        <AdminNSComponent/>   
                    </div>
                )

            case "134.83.3.147":
                return (

                    <div className = "newsgrid">
                        <AdminNSComponent/>
                    </div>

                )

            case "134.83.252.204":
                return (
    
                    <div className = "newsgrid">
                        <AdminNSComponent/>
                    </div>
    
                )

            case "134.83.252.76":
                return (
                    <div className = "newsgrid">
                        <AdminNSComponent/>
                    </div>
                )

            default:
                
                return (

                    <div>
                        <h1>This page is only accessible by Developers</h1>
                    </div>
                    
                )
        }

    }
        
}

}

export default IPAdminAuth
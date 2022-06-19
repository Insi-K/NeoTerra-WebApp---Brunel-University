import React from 'react'
import Layout from '../../../Layout/Layout'
import IPAdminAuth from './IPAdminAuth'

function Admin() {
    const News = {
        backgroundImage : "url(/images/News.jpg)",
        height: "700px",
        overflow: "scroll",
	  };
    return (
        <Layout>
        <div style={News}>

            <h1>Administration Page</h1>
            <IPAdminAuth />
        </div>
        </Layout>
        
    )
}

export default Admin
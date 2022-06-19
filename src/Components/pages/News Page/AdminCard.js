import React from 'react';
//import '../.././../Styles/App.css';
import '../.././../Styles/Admin.css';
import AddStory from './AddStory'
import AutoAdd from './AutoAdd';

class AdminCard extends React.Component {

    state = {
       action: 1, //1 Represents the Default Admin Menu
       story_id:''
    }

    adminMenu = () => { //Main Admin Menu is represented by 1
        this.setState(
            {action: 1}
        );
    }

    addManually = () => { //Adding Manually is represented by 2
        const {action} = this.state;
        this.setState(
            {action: action + 1}
        );
    }

    addAuto = () => { //Adding Automatically is represented by 3
        const {action} = this.state;
        this.setState(
            {action: action + 2}
        );
    }

    render () {

        const {action} = this.state;

        switch (action) {
            case 1:
                
                return (

                    <div className = "admincard">

                        <button className = "addButton" onClick = {this.addManually}>Add Manually</button> 
                        <button className = "autoButton" onClick = {this.addAuto}>Add Automatically</button>
                    
                    </div>
        
                )
            
            case 2:

                return (
                    <div className = "admincard"> 
                         <AddStory/>
                         <button onClick={this.adminMenu}>[X]</button>
                    </div>
                )

            case 3:

                return (
                    <div className = "admincard"> 
                         <AutoAdd/>
                         <button onClick={this.adminMenu}>[X]</button>
                    </div>
                )

            default:
                break;
        }
    }
}

export default AdminCard
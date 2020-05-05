import React, { Component, Fragment } from 'react';
import Navbar from '../../features/nav/Navbar/Navbar';
import EventDashboard from '../../features/event/eventDashboard/eventDashboard';
import HomePage from '../../features/event/home/HomePage';
import { Container } from 'semantic-ui-react';
import { Route, withRouter, Switch } from 'react-router-dom';
import SettingsDashboard from '../../features/event/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import UserDetailedPage from '../../features/event/user/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/event/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import TestComponent from '../../features/testArea/TestComponent';




class App extends Component  {
  render(){
  return (


    <Fragment>
      <Route exact path='/' component={HomePage}/>
      <Route 
      path='/(.+)' 
      render ={()=>(
      <Fragment>
      <Navbar/>
      <Container className="main">
        <Switch key={this.props.location.key}>
        <Route exact path='/events' component={EventDashboard}/>
        <Route path='/event/:id' component={EventDetailedPage}/>
        <Route path='/people' component={PeopleDashboard}/> 
        <Route path='/profile/:id' component={UserDetailedPage}/>
        <Route path='/settings' component={SettingsDashboard}/>
        <Route path= {['/createEvent', '/manage/:id']} component={EventForm}/> 
        <Route path='/test' component={TestComponent}/> 
        </Switch>
        

      </Container>
     </Fragment>
     )}
     />
      </Fragment>
    
  
   );
}
}

export default withRouter(App);

import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";

const mapState = (state) => ({
  events: state.events,
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent,
};

class eventDashboard extends Component {
  // state ={
  //     isOpen: false,
  //     selectedEvent: null
  // }

  // handleIsOpenToggle = () =>{
  //   this.setState(({isOpen}) => ({
  //     isOpen: !isOpen
  //   }))
  // }

  // handleCreateFormOpen=()=>{
  //   this.setState({
  //     isOpen:true,
  //     selectedEvent:null
  //   })
  // }

  // handleFormClose =()=>{
  //   this.setState({
  //     isOpen:false
  //   })
  // }

  // handleCreateEvent = (newEvent) => {
  //   newEvent.id = cuid();
  //   newEvent.hostPhotoURL = "/assets/user.png";
  //   this.props.createEvent(newEvent);
  //   // this.setState(({events})=>({
  //   //   isOpen: false
  //   // }))
  // };

  // handleUpdateEvent = (updatedEvent) => {
  //   this.props.updateEvent(updatedEvent);
  //   // this.setState(({events})=>({
  //   //   isOpen:false,
  //   //   selectedEvent:null
  //   // }))
  // };

  // handleSelectEvent=(event)=>{
  //   console.log(event);
  //   this.setState({
  //     selectedEvent:event,
  //     isOpen:true
  //   })
  // }

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  };

  render() {
    // const {isOpen, selectedEvent}= this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvents={this.handleDeleteEvent}
            // selectEvent={this.handleSelectEvent}
          />
        </Grid.Column>
        <Grid.Column width={8}>

          <h2>Activity Feed</h2>
          {/* <Button
            onClick={this.handleCreateFormOpen}
            positive
            content='Create Event'
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormClose}
            />
          )} */}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(eventDashboard);

import React, { Component, Fragment } from 'react'
import EventListItems from './EventListItems';

class EventList extends Component {
    render() {
        const {events, deleteEvents}= this.props;
        return (
            <Fragment>
                {events.map(event=>(
                    <EventListItems key={event.id} event={event} deleteEvents={deleteEvents}/>

                ))}
                
            </Fragment>
        )
    }
}

export default EventList;
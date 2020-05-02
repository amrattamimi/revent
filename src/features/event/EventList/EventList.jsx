import React, { Component, Fragment } from 'react'
import EventListItems from './EventListItems';

class EventList extends Component {
    render() {
        const {events,selectEvent, deleteEvents}= this.props;
        return (
            <Fragment>
                {events.map(event=>(
                    <EventListItems key={event.id} event={event} selectEvent={selectEvent} deleteEvents={deleteEvents}/>

                ))}
                
            </Fragment>
        )
    }
}

export default EventList;
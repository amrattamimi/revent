import React from 'react'
import {connect} from'react-redux'
import { Grid, GridColumn } from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'
import EventDetialedChat from './EventDetialedChat'

const mapState = (state,ownProps)=>{
    const eventID = ownProps.match.params.id;

    let events={}

    if(eventID && state.events.length> 0){
        events = state.events.filter(event =>event.id===eventID)[0];
    }

    return {
        events
    }
}


 const EventDetailedPage = ({events}) => {
    return (
      
            <Grid>
                <GridColumn width={10}>
                    <EventDetailedHeader events={events}/>
                    <EventDetailedInfo events={events}/>
                    <EventDetialedChat/>
                </GridColumn>

                <GridColumn width={6}>
                    <EventDetailedSidebar attendees={events.attendees}/>

                </GridColumn>
            </Grid>
        
    )
}

export default connect (mapState)(EventDetailedPage)

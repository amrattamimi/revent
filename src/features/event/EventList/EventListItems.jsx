import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendees from './EventListAttendees';
import { Link } from 'react-router-dom';

class EventListItems extends Component {
    render() {
        const {event, deleteEvents} = this.props;
        return (
                 <Segment.Group>
                    <Segment>
                      <Item.Group>
                        <Item>
                          <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                          <Item.Content>
                            <Item.Header >{event.title}</Item.Header>
                            <Item.Description>
                              Hosted by {event.hostedBy}
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                    <Segment>
                      <span>
                        <Icon name="clock" /> {event.date} |
                        <Icon name="marker" /> {event.venue}
                      </span>
                    </Segment>
                    <Segment secondary>
                      <List horizontal>
                        {event.attendees && event.attendees.map(attendee =>(
                            <EventListAttendees key={attendee.id} attendee={attendee}/>
                        ))}

                      </List>
                    </Segment>
                    <Segment clearing>
                        <span>{event.Description}</span>
                      <Button onClick = {()=>deleteEvents(event.id)}as="a" color="red" floated="right" content="delete" />
                      <Button 
                      as={Link}
                      to={`/event/${event.id}`} 
                      color="teal" 
                      floated="right" 
                      content="View" />
                    </Segment>
                  </Segment.Group>
        )
    }
}

export default EventListItems;
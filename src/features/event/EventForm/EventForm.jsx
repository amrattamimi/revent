import React, { Component } from 'react'
import { Segment, Form, Button, Grid, GridColumn, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import{reduxForm, Field} from 'redux-form';
import{createEvent, updateEvent} from '../eventActions';
import cuid from 'cuid';
import { TextInput } from '../../../app/common/Form/TextInput';
import { TextArea } from '../../../app/common/Form/TextArea';
import SelectInput from '../../../app/common/Form/SelectInput';
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate';
// import DateInput from '../../../app/common/Form/DateInput';



const mapState = (state, ownProps) =>{

  const eventID= ownProps.match.params.id;

  let event = { }

  if (eventID&& state.events.length>0){
    event = state.events.filter(event => event.id=== eventID)[0]

  }

  return{
    initialValues: event
  }


}


const actions ={
  createEvent,
  updateEvent
}


const validate= combineValidators({
  title: isRequired({message:'Event tilte required'}),
  category:isRequired({message:'the category is required'}),
  description:composeValidators(
    isRequired({message: 'desctiption is required'}),
    hasLengthGreaterThan(4)({message:'characters should be at least 5'})
  )(),
  city: isRequired('city'),
  venue:isRequired('venue'),
  date: isRequired('date')
  
})



const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

 class EventForm extends Component {

  // state= {...this.props.event}



  // componentDidMount(){
  //   if(this.props.selectedEvent !==null){
  //     this.setState({
  //      ...this.props.selectedEvent
  //     })
      
  //   }
  // }


  handleFormSubmit =(values) =>{

    console.log(values);
    if(this.props.initialValues.id){
      this.props.updateEvent(values);
      this.props.history.push(`/event/${this.props.initialValues.id}`)
    }else{
      const newEvent={
        ...values,
        id :cuid(),
        hostPhotoURL :"/assets/user.png",
        hostedBy: 'Bob'

      }
      this.props.createEvent(newEvent);
      this.props.history.push(`/event/${newEvent.id}`);

    }

  };

  // handleTitleChange = ({target: {name,value}})=>{
  //   this.setState({
  //     [name] : value

  //   });
  // };


    render() {
      const {history,initialValues, invalid, submitting, prestine} = this.props;
      // const {title, date, city, venue, hostedBy}=this.state;
        return (
          <Grid>
            <GridColumn width="10">
            <Segment>
                   <Form onSubmit={this.props.handleSubmit(this.handleFormSubmit)} autoComplete="off">

                      <Header sub color='teal' content='event details'/>
                     <Field name="title" component={TextInput} placeholder="event name"/>
                     <Field name="category" type="text" component={SelectInput} options={category} multiple={true} placeholder="what is it about?"/>
                     <Field name="description" component={TextArea} rows={3}placeholder="give us more deets"/>
                     <Header sub color='teal' content=' location details'/>
                     <Field name="city" component={TextInput} placeholder="whereabouts?"/>
                     <Field name="venue" component={TextInput} placeholder="taking place in?"/>
                     <Field name="date" component={TextInput} placeholder="finally what date is it?"/>


                      {/* <Form.Field>
                       <label>Event Title</label>
                       <input 
                       name='title'
                       onChange={this.handleTitleChange} 
                       value={title} 
                       placeholder=" EventTitle" />
                     </Form.Field> 
                     <Form.Field>
                       <label>Event Date</label>
                       <input 
                        name='date'
                        onChange={this.handleTitleChange} 
                        value={date} 
                        type="date" 
                        placeholder="Event Date" />
                     </Form.Field>
                     <Form.Field>
                       <label>City</label>
                       <input 
                       name='city'
                       onChange={this.handleTitleChange} 
                       value={city} 
                       placeholder="City event is taking place" />
                     </Form.Field>
                     <Form.Field>
                       <label>Venue</label>
                       <input 
                       name='venue'
                       onChange={this.handleTitleChange} 
                       value={venue} 
                       placeholder="Enter the Venue of the event" />
                     </Form.Field>
                     <Form.Field>
                       <label>Hosted By</label>
                       <input 
                       name='hostedBy'
                       onChange={this.handleTitleChange} 
                       value={hostedBy} 
                       placeholder="Enter the name of person hosting" />
                     </Form.Field> */}
                     <Button disabled={invalid ||submitting || prestine} positive type="submit">
                       Submit
                     </Button>
                     <Button onClick ={initialValues.id  
                     ? ()=> history.push(`/event/${initialValues.id}`)
                     : ()=> history.push(`/event/`)} 
                      type="button">Cancel</Button>
                   </Form>
                 </Segment>
            </GridColumn>
          </Grid>
                
        )
    }
}
export default connect(mapState,actions)(reduxForm({form: 'eventForm', validate})(EventForm));

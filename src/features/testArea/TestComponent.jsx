import React, {Component} from 'react'
import { connect } from 'react-redux';
import {incrementCounter,decrementCounter} from'./TestActions'
import { Button } from 'semantic-ui-react';


const mapState= (state)=>({
    data: state.test.data
})

const actions= {
    incrementCounter, 
    decrementCounter
}




 class TestComponent extends Component {
     render(){
         const {data, incrementCounter,decrementCounter}=this.props;
    return (
        <div>

            <h1>Test component </h1>
             <h3> the answer is {data}</h3> 
             <Button onClick={incrementCounter} positive content="increment counter" />
             <Button onClick={decrementCounter} negative content="decrement counter" />

            
            
        </div>
    )
}
 }
export default connect(mapState, actions)(TestComponent);
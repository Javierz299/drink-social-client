import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../store/reducers/index';

//In plain Redux, you can only dispatch objects. 
//In order to dispatch async functions, you would need to use a middleware
//applyMiddleware(async,stateValidator,reduxThunk)
let store = createStore(rootReducer);

const reduxRoot = (props) => {
    return (
       <Provider store={store}>
           {props.children}{/*<App /> */}
       </Provider>
    )
}

export default reduxRoot;

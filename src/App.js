import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

	componentWillMount(){
		const config = {
		    apiKey: "AIzaSyDmZ4EQPApxZMqZ2Zvi4883-Ix4oIa5nT0",
		    authDomain: "manager-22e47.firebaseapp.com",
		    databaseURL: "https://manager-22e47.firebaseio.com",
		    storageBucket: "manager-22e47.appspot.com",
		    messagingSenderId: "815294919567"
		};

		firebase.initializeApp(config);
	}


	render() {
		const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
			<Router />
			</Provider>
		);
	}
}

export default App;
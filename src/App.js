import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
		return (
			<Provider store={createStore(reducers)}>
			<View>
				<Text>
					Hello
				</Text>
			</View>
			</Provider>
		);
	}
}

export default App;
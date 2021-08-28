import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
	const [ todos, setTodos ] = useState([
		{ text: 'create an app', key: '1' },
		{ text: 'show case my react native skills', key: '2' },
		{ text: 'get a job as a full-stack developer', key: '3' }
	]);

	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key != key);
		});
	};

	const submitHandler = (text) => {
		if (text.length > 0) {
			setTodos((prevTodos) => {
				return [ { text, key: Math.random().toString() }, ...prevTodos ];
			});
		} else {
			Alert.alert('OOPS', 'Please enter a todo item', [
				{ text: 'Understood', onPress: () => console.log('alert closed') }
			]);
		}
	};

	return (
		// TouchableWithoutFeedback does not work for web builds - only phone builds
		// <TouchableWithoutFeedback
		// 	onPress={() => {
		// 		Keyboard.dismiss();
		// 		console.log('dismissed');
		// 	}}
		// >
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<AddTodo submitHandler={submitHandler} />
				<View style={styles.list}>
					<FlatList
						data={todos}
						renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />}
					/>
				</View>
			</View>
		</View>
		//</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : '#fff'
	},
	content   : {
		padding : 40,
		flex    : 1
	},
	list      : {
		marginTop : 20,
		flex      : 1
	}
});

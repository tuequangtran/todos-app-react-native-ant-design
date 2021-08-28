import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>My Todos App</Text>
			<Text style={styles.subtitle}>Coded with ❤ by Tue Tran using React Native & Ant Design</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header   : {
		height          : 100,
		paddingTop      : 38,
		backgroundColor : 'skyblue'
	},
	title    : {
		textAlign     : 'center',
		color         : '#fff',
		fontSize      : 20,
		fontWeight    : 'bold',
		paddingBottom : 5
	},
	subtitle : {
		textAlign : 'center',
		color     : '#fff'
	}
});

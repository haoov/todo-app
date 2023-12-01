<!--------------------TS--------------------->
<script setup lang="ts">
	import axios from 'axios'
	import { useRouter } from 'vue-router';

	//return a instance of our app router
	const router = useRouter();
	//temp todo object to store the data
	const todo = { title: "", description: "", done: false };

	//use axios to make a post request to the backend api
	async function createTodo() {
		//we pass the modified todo as data
		axios.post("http://localhost:3000/todos", todo)
			.then(() => {
				//if all went well log a msg
				console.log("todo successfully created");
				//go to the page at '/'
				router.push('/');
			})
			.catch((error) => {
				//if not log the error
				console.log(error);
			});
	}
</script>

<!--------------------HTML-------------------->
<template>
	<form class="todoForm">
		<!--the v-model directive will associate the value with the var we pass to it
		here we associate the data entered by the user with the todo.title variable-->
		title:<br><input type="text" v-model="todo.title"><br>
		description:<br><input type="text" v-model="todo.description"><br>
	</form>
	<!--the v-on directive will allow us to do an action on a specific event occurence-->
	<button v-on:click="createTodo()">Save</button>
</template>
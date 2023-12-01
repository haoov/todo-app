<!--------------------TS--------------------->
<script setup lang="ts">
	import axios from 'axios'
	import todoItem from './todoItem.vue';

	/*a top level await in script setup will automatically set the vue component as async
	we will need to use <suspense> to render it*/

	//get request using axios
	const response = await axios.get("http://localhost:3000/todos")
	const todos = await response.data;
</script>

<!--------------------HTML-------------------->
<template>
	<h2>Todo List<br></h2>
	<!--the v-for directive works like a loop
	'todo' becomes a usable object for each iteration of the loop-->
	<div class="todoItem" v-for="todo in todos">
		<!--we can define properties to the component with ':prop="value"' syntax-->
		<todoItem :id="todo.id" :title="todo.title" :description="todo.description" :done="todo.done"></todoItem>
	</div>
</template>

<!--------------------CSS-------------------->
<style>
	/*we can access html balise with their name*/
	h2 {
		text-align: center;
	}

	/*or custum balise with a '.'*/
	.todoItem {
		background-color: aliceblue;
		padding: 1%;
		margin: 1%;
	}
</style>
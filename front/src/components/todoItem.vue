<!--------------------TS--------------------->
<script setup lang="ts">
	import axios from 'axios';

	//define properties of the component
	defineProps(["id", "title", "description", "done"]);

	async function deleteTodo(id: string) {
		axios.delete("http://localhost:3000/todos/" + id);
		//force window reload
		window.location.reload();
	}

	async function todoDone(id: string) {
		axios.patch("http://localhost:3000/todos/" + id, { done: true });
		window.location.reload();
	}
</script>

<!--------------------HTML-------------------->
<template>
	<!--we can get a var value with {{  }} mustache syntax-->
	<h3>{{ title }}<br></h3>
	<div class="itemBody">
		<!--the v-if directive allow us to render html element on specific conditions-->
		<p class="description" v-if="description != null">{{ description }}<br></p>
		<p v-if="done == true">Done !</p>
		<button class="delete_button" v-on:click="deleteTodo(id)">Delete todo</button>
		<button class="done_button" v-if="done == false" v-on:click="todoDone(id)">Mark as done</button>
	</div>
</template>

<!--------------------CSS-------------------->
<style>
	.description {
		font-style: italic;
	}

	.delete_button {
		background-color: crimson;
	}

	.done_button {
		background-color: darkgreen;
	}
</style>
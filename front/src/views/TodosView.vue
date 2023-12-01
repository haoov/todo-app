<!--------------------TS--------------------->
<script setup lang="ts">
	//import todoList vue component
	import todoList from '../components/todoList.vue';
</script>

<!--------------------HTML-------------------->
<template>
	<!--create a div and set balise to todoList (for css)-->
	<div class="tododList">
		<!--<suspens> will wait for the async component 'todoList' to render-->
		<Suspense><todoList></todoList></Suspense>
	</div>
	<div class="todoFooter">
		<!--creates a link to the route /addTodo (in router/index.ts) associated with the button-->
		<RouterLink to="/addTodo"><button>Create new todo</button></RouterLink>
	</div>
</template>
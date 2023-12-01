import { createRouter, createWebHistory } from 'vue-router'
import TodosViews from '../views/TodosView.vue'
import AddTodoView from '../views/AddTodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			//URL
			path: '/',
			name: 'home',
			//component to render for this URL
			component: TodosViews
 		},
		{
			path: '/addTodo',
			name: 'addTodo',
			component: AddTodoView
		}
  ]
})

export default router

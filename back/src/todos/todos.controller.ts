import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todos.interface';
import { TodoDTO } from './todos.dto';

@Controller('todos')
export class TodosController {
	constructor(private readonly todosService: TodosService) {}

	@Get()
	findAll(): Promise<Todo[]> {
		return this.todosService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string): Promise<Todo> {
		return this.todosService.findOne(Number(id));
	}

	@Post()
	createTodo(@Body() todo: TodoDTO): void {
		this.todosService.create(todo as Todo);
	}

	@Patch(":id")
	updateTodo(@Param("id") id: string, @Body() todo: TodoDTO): void {
		this.todosService.update(Number(id), todo);
	}

	@Delete(":id")
	deleteTodo(@Param("id") id: string): any {
		this.todosService.delete(Number(id));
	}
}

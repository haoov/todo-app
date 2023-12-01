import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodosEntity } from './todos.entity';
import { Todo } from './todos.interface';

@Injectable()
export class TodosService {
	constructor(@InjectRepository(TodosEntity) private todosRepository: Repository<TodosEntity>) {}

	findAll(): Promise<Todo[]> {
		return this.todosRepository.find() as Promise<Todo[]>;
	}

	findOne(id: number): Promise<Todo> {
		return this.todosRepository.findOneBy({ id: id}) as Promise<Todo>;
	}

	create(todo: Todo): void {
		this.todosRepository.save(todo as TodosEntity);
	}

	update(id: number, todo: Todo): void {
		(this.todosRepository.findOneBy({ id: id}) as Promise<Todo>).then(
			(todoToUpdate) => {
				if (todoToUpdate) {
					if (todo.hasOwnProperty("title"))
						todoToUpdate.title = todo.title;
					if (todo.hasOwnProperty("description"))
						todoToUpdate.description = todo.description;
					if (todo.hasOwnProperty("done"))
						todoToUpdate.done = todo.done;
					this.todosRepository.save(todoToUpdate as TodosEntity);
				}
			});
	}

	delete(id: number) {
		this.todosRepository.findOneBy({ id: id }).then(
			(todoToDelete) => {
				if (todoToDelete)
					this.todosRepository.remove(todoToDelete);
			});
	}
}

import { Repository } from 'typeorm';
import { TodosEntity } from './todos.entity';
import { Todo } from './todos.interface';
export declare class TodosService {
    private todosRepository;
    constructor(todosRepository: Repository<TodosEntity>);
    findAll(): Promise<Todo[]>;
    findOne(id: number): Promise<Todo>;
    create(todo: Todo): void;
    update(id: number, todo: Todo): void;
    delete(id: number): void;
}

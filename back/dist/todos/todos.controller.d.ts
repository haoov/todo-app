import { TodosService } from './todos.service';
import { Todo } from './todos.interface';
import { TodoDTO } from './todos.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    createTodo(todo: TodoDTO): void;
    updateTodo(id: string, todo: TodoDTO): void;
    deleteTodo(id: string): any;
}

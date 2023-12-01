"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const todos_entity_1 = require("./todos.entity");
let TodosService = class TodosService {
    constructor(todosRepository) {
        this.todosRepository = todosRepository;
    }
    findAll() {
        return this.todosRepository.find();
    }
    findOne(id) {
        return this.todosRepository.findOneBy({ id: id });
    }
    create(todo) {
        this.todosRepository.save(todo);
    }
    update(id, todo) {
        this.todosRepository.findOneBy({ id: id }).then((todoToUpdate) => {
            if (todoToUpdate) {
                if (todo.hasOwnProperty("title"))
                    todoToUpdate.title = todo.title;
                if (todo.hasOwnProperty("description"))
                    todoToUpdate.description = todo.description;
                if (todo.hasOwnProperty("done"))
                    todoToUpdate.done = todo.done;
                this.todosRepository.save(todoToUpdate);
            }
        });
    }
    delete(id) {
        this.todosRepository.findOneBy({ id: id }).then((todoToDelete) => {
            if (todoToDelete)
                this.todosRepository.remove(todoToDelete);
        });
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todos_entity_1.TodosEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TodosService);
//# sourceMappingURL=todos.service.js.map
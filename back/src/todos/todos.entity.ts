import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//creates a database table
@Entity()
export class TodosEntity {
	//create a primary key column in the table that will auto increment the value id
	@PrimaryGeneratedColumn()
	id: number;

	//creates a column in the table
	@Column({ length: 20, unique: true})
	title: string;

	@Column({ nullable: true, length: 100 })
	description?: string;

	@Column({ default: false })
	done: boolean;
}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { TodosEntity } from './todos/todos.entity';

@Module({
  imports: [
	TypeOrmModule.forRoot({
		type: "postgres",
		host: "postgresql",
		port: 5432,
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
		entities: [TodosEntity],
		synchronize: true,
		autoLoadEntities: true
  }),
	TodosModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

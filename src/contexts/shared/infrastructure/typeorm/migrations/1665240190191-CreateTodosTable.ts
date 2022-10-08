import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTodosTable1665240190191 implements MigrationInterface {
    name = 'CreateTodosTable1665240190191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todos" ("id" uuid NOT NULL, "title" text NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todos"`);
    }

}

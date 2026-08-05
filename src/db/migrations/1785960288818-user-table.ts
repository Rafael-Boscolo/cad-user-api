import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1785960288818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
            id SERIAL NOT NULL,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            cpf VARCHAR(14) NOT NULL,
            CONSTRAINT user_pk_id PRIMARY KEY (id)
            )
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS"user"`);
    }
}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateTransactions1634520416561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'transactions',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'type',
              type: 'integer',
              isNullable: true,
            },
            {
              name: 'date',
              type: 'timestamp',
              isNullable: true,
            },
            {
              name: 'value',
              type: 'decimal',
              precision: 10,
              scale: 2,
              isNullable: true,
            },
            {
              name: 'cpf',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'card',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'hour',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'owner',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'name',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('transactions');
    }

}

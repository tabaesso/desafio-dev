module.exports = {
  type: 'postgres',
  name: process.env.DATABASE_CONFIG_NAME || 'default',
  host: process.env.DATABASE_CONFIG_HOST || 'localhost',
  port: Number(process.env.DATABASE_CONFIG_PORT) || 5432,
  username: process.env.DATABASE_CONFIG_USERNAME || 'postgres',
  password: process.env.DATABASE_CONFIG_PASSWORD || 'docker',
  database: process.env.DATABASE_CONFIG_DATABASE || 'desafio_dev',
  entities: [
    "dist/modules/**/models/*{.ts,.js}",
    "src/modules/**/models/*{.ts,.js}"
  ],
  migrations: [
    process.env.DATABASE_CONFIG_MIGRATIONS_PATH + '/*.ts',
    process.env.DATABASE_CONFIG_MIGRATIONS_PATH + '/*.js',
  ],
  cli: {
    migrationsDir: process.env.DATABASE_CONFIG_MIGRATIONS_PATH,
  }
};

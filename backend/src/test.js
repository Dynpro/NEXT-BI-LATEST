// test-db.js
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'NextBI',
  user: 'postgres',
  password: 'test',
  ssl: false
});

client.connect()
  .then(() => console.log("✅ Connected to Postgres"))
  .catch(err => console.error("❌ Failed to connect:", err))
  .finally(() => client.end());

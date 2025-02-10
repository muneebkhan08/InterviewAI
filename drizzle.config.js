import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_fJi2zW8aSGTx@ep-green-tree-a56d3evw-pooler.us-east-2.aws.neon.tech/Interview_AI?sslmode=require',
  },
});

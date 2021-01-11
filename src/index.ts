import { PrismaClient } from '@prisma/client';
import express from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';
import { loadSchemaSync } from '@graphql-tools/load';
import { graphqlHTTP } from 'express-graphql';
import { addResolversToSchema } from '@graphql-tools/schema';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import cors from 'cors';

// Local deps
import { resolvers } from './resolvers';

const prisma = new PrismaClient();
const app: express.Application = express();

// Load schema from the schema folder
const schema = loadSchemaSync(join(__dirname, './schema/*.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

// Add resolvers to the schema
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schemaWithResolvers,
    graphiql: true,
    context: (): any => {
      return {
        db: prisma,
      };
    },
  })
);

app.listen(1337, () => {
  console.info(`Server is running on port on 1337`);
});

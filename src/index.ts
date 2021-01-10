import { ApolloServer } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client';
import express from 'express'
import { importSchema } from 'graphql-import'
import path from 'path'
import cors from 'cors'
import { resolvers } from './resolvers'


const graphqlPath: string = '/api/graphql'
const prisma = new PrismaClient()
const schema = path.resolve('src/schema/Schema.graphql')

const typeDefs = importSchema(schema)

const app: express.Application = express();
app.use(cors())

const server = new ApolloServer({
    typeDefs: typeDefs as any,
    resolvers: resolvers as any,
    introspection: true,
    context: ({ req }): any => {
        return {
            db: prisma,
        }
    },
}) as any

server.applyMiddleware({
    app,
    path: graphqlPath
})

app.listen({ port: process.env.PORT }, () => {
    console.log('Server is listening on PORT', process.env.PORT)
})

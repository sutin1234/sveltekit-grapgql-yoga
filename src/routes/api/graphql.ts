import { yogaHandler } from '$lib/graphql/yogaHandler'
import { createServer } from '@graphql-yoga/core'
import type { ServerRequest } from '@sveltejs/kit/types/hooks'

const yogaApp = createServer({
    typeDefs: `
		type Query {
			hello: String
		}
	`,
    resolvers: {
        Query: {
            hello: () => 'GraphQL Yoga - SvelteKit',
        },
    },
    graphiql: {
        endpoint: '/api/graphql'
    }
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures

export async function get(req: ServerRequest) {
    return yogaHandler(req, yogaApp)
}
export async function post(req: ServerRequest) {
    return yogaHandler(req, yogaApp)
}
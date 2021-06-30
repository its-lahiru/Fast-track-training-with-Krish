const http = require('http');
const { postgraphile } = require('postgraphile');
const PostGraphileConnectionFilterPlugin = require('postgraphile-plugin-connection-filter');

http.createServer(
    postgraphile("postgres://postgres:1234@localhost:5432/car", "public", {
        enableCors: true,
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        appendPlugins: [PostGraphileConnectionFilterPlugin],
        graphileBuilOptions: {
            connectionFilterRelations: true,
        },
    }))
    .listen("5000");
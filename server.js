const fastify = require('fastify')();
const fastifyVite = require('fastify-vite');
const renderer = require('fastify-vite-vue');
const fastifyApi = require('fastify-api');

async function main () {
    await fastify.register(fastifyApi)
    await fastify.register(fastifyVite, {
        api: true,
        root: __dirname,
        renderer,
        entry: {
            server: '/entry/server.js'
        }
    });

    fastify.api(({ get }) => ({
        homepage: get('/api/homepage', (req, reply) => {
            reply.send({
                content: 'content block'
            });
        })
    }));

    fastify.get('/favicon.ico', (_, reply) => {
        reply.code(404);
        reply.send('');
    })

    await fastify.vite.ready();

    return fastify;
}

if (require.main === module) {
    main().then(fastify => {
        fastify.listen(3000, (err, address) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(`Server listening on ${address}`)
        });
    });
}

module.exports = main

const { redis } = require('../imports/modules.imports')

// Assuming Redis server is running locally on default port 6379
const redisClient = redis.createClient();

redisClient.on('error', (err) => {
     console.error('Redis error:', err);
});

module.exports = { redisClient };

const redis = require('redis');

let retries = 0;
const MAX_RETRIES = 5;

const redisClient = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    reconnectStrategy: (retryAttempt) => {
      if (retryAttempt > MAX_RETRIES) {
        console.error(`Unable to connect to Redis after ${retryAttempt} attempts.`);
        return new Error('Redis connection failed');
      }
      console.log(`Redis connection attempt ${retryAttempt} failed. Retrying in ${Math.min(retryAttempt * 100, 3000)}ms`);
      return Math.min(retryAttempt * 100, 3000); // Retry delay in ms
    },
  },
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

// Connect the client explicitly
(async () => {
  try {
    await redisClient.connect();
  } catch (err) {
    console.error('Error connecting to Redis:', err);
  }
})();

module.exports = redisClient;

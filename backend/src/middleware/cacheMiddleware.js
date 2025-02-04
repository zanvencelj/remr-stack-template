const redisClient = require('../config/redis');

// Middleware to cache
exports.cacheRemr = async (req, res, next) => {
  const cacheKey = 'remr';
  try {
    console.log(`Checking cache for key: ${cacheKey}`);
    const data = await redisClient.get(cacheKey);
    if (data) {
      console.log(`Cache hit for key: ${cacheKey}`);
      return res.json(JSON.parse(data)); // Return cached data if it exists
    }
    console.log(`Cache miss for key: ${cacheKey}`);
    next(); // Proceed to the next middleware if not cached
  } catch (err) {
    console.error('Redis error while caching:', err);
    next(); // Proceed even if there's a Redis error
  }
};

// Function to set cache
exports.setRemrCache = async (data) => {
  const cacheKey = 'remr';
  try {
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(data)); // Cache for 1 hour
    console.log(`Cache set for key: ${cacheKey}`);
  } catch (err) {
    console.error('Redis error while setting cache:', err);
  }
};

// Function to invalidate cache
exports.invalidateRemrCache = async () => {
  const cacheKey = 'remr';
  try {
    await redisClient.del(cacheKey);
    console.log(`Cache invalidated for key: ${cacheKey}`);
  } catch (err) {
    console.error('Redis error while invalidating cache:', err);
  }
};

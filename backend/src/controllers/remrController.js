const { Remr } = require('../models');
const redisClient = require('../config/redis');

const invalidateRemrCache = async () => {
  try {
    const keys = await redisClient.keys('remr:*'); // Find all keys related to remr
    if (keys.length > 0) {
      await redisClient.del(keys); // Delete all matching keys
      console.log('Invalidated cache');
    }
  } catch (error) {
    console.error('Error invalidating cache:', error);
  }
};

// Controller to get all entries with optional search and sorting
exports.getAllRemr = async (req, res) => {
  try {
    const {} = req.query; // Destructure search and sort params

    const cacheKey = `remr:${JSON.stringify(req.query)}`; // Create a unique key for the search params

    // Check Redis cache first
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log(cachedData);
      console.log('Serving from cache');
      return res.json(JSON.parse(cachedData));
    }

    // Fetch the enties from the database
    const results = await Remr.findAll();

    // Cache the result with an expiration time (e.g., 1 hour)
    await redisClient.setEx(cacheKey, 3600, JSON.stringify({
      data: results,
    }));

    // Respond with results
    res.json({
      data: results,
    });
  } catch (error) {
    console.error('Error fetching:', error);
    res.status(500).json({ error: 'Unable to fetch' });
  }
};


// Get entry by id
exports.getRemrById = async (req, res) => {
  try {
    const result = await Remr.findByPk(req.params.id);
    if (!result) return res.status(404).json({ error: 'Not found' });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch' });
  }
};

// Create a new entry (invalidate cache)
exports.createRemr = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newEntry = await Remr.create({
      name,
      description
    });

    await invalidateRemrCache();
    res.json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create' });
  }
};

// Update an entry (invalidate cache)
exports.updateRemr = async (req, res) => {
  try {
    const entry = await Remr.findByPk(req.params.id);
    if (!entry) return res.status(404).json({ error: 'Entry not found' });

    const { name, description } = req.body;
    await entry.update({ name, description});

    await invalidateRemrCache();
    res.json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update' });
  }
};

// Delete an entry (invalidate cache)
exports.deleteRemr = async (req, res) => {
  try {
    const entry = await Remr.findByPk(req.params.id);
    if (!entry) return res.status(404).json({ error: 'Entry not found' });

    await entry.destroy();

    await invalidateRemrCache();
    res.json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete' });
  }
};

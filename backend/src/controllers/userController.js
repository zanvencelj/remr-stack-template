const {User} = require("../models");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (error) {
    console.error('Error fetching:', error);
    res.status(500).json({error: 'Unable to fetch'});
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({error: 'User not found'});

    res.json(user);
  } catch (error) {
    console.error('Error fetching:', error);
    res.status(500).json({error: 'Unable to fetch'});
  }
};

exports.createUser = async (req, res) => {
  try {
    const {name, email, password} = req.body;

    if (password.length < 6) {
      return res.status(400).json({error: "Geslo prekratko"});
    }

    const newUser = await User.create({
      name,
      email,
      password
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating:', error);
    res.status(500).json({error: 'Unable to create'});
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({error: 'User not found'});

    const {name, email, password} = req.body;
    await user.update({name, email, password});

    res.json(user);
  } catch (error) {
    console.error('Error updating:', error);
    res.status(500).json({error: 'Unable to update'});
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({error: 'User not found'});

    await user.destroy();

    res.json({message: 'User deleted'});
  } catch (error) {
    console.error('Error deleting:', error);
    res.status(500).json({error: 'Unable to delete'});
  }
};

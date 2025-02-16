const {Task} = require("../models");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching:', error);
    res.status(500).json({error: 'Unable to fetch'});
  }
};

exports.getTaskById = async (req, res) => {

};

exports.createTask = async (req, res) => {
  try {
    const {name, description} = req.body;
    const newTask = await Task.create({
      title: name,
      description
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating:', error);
    res.status(500).json({error: 'Unable to create'});
  }
};

exports.updateRemr = async (req, res) => {

};

exports.deleteRemr = async (req, res) => {

};

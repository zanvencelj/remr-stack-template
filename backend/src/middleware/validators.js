const { body, validationResult } = require('express-validator');

// Validation for Remr creation
exports.validateRemr = [
  body('name').isString().notEmpty().withMessage('Name is required'),
  body('description').isString().notEmpty().withMessage('Description is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

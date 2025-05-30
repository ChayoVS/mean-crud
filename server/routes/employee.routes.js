const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee.controller');
const rateLimit = require('express-rate-limit');

const deleteEmployeeLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // limit each IP to 50 requests per windowMs
});

router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);
const getEmployeeLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

router.get('/:id', getEmployeeLimiter, employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', deleteEmployeeLimiter, employee.deleteEmployee);

module.exports = router;
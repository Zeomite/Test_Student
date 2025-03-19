const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

/**
 * @route POST /students
 * @desc Create a new student record.
 * @access Public
 */
router.post('/students', studentController.createStudent);

/**
 * @route GET /students
 * @desc Retrieve all student records with optional pagination.
 * @access Public
 */
router.get('/students', studentController.getStudents);

/**
 * @route GET /students/:regNo
 * @desc Retrieve a specific student's details by registration number.
 * @access Public
 */
router.get('/students/:regNo', studentController.getStudentByRegNo);

/**
 * @route PATCH /students/:regNo
 * @desc Update an existing student's record.
 * @access Public
 */
router.patch('/students/:regNo', studentController.updateStudent);

/**
 * @route DELETE /students/:regNo
 * @desc Soft delete a student record (set status to false).
 * @access Public
 */
router.delete('/students/:regNo', studentController.deleteStudent);

module.exports = router;

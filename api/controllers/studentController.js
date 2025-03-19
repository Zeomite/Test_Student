const studentRepository = require('../repository/student');

/**
 * Creates a new student record.
 * @param  req - Express request object.
 * @param res - Express response object.
 * @param next - Express next middleware function.
 */
async function createStudent(req, res, next) {
  try {
    const { registrationNumber, name, class: studentClass, rollNo, contactNumber } = req.body;
    if (!registrationNumber || !name || !studentClass || !rollNo || !contactNumber) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const studentData = { registrationNumber, name, class: studentClass, rollNo, contactNumber };
    const student = await studentRepository.createStudent(studentData);
    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
}

/**
 * Retrieves all student records with optional pagination.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next middleware function.
 */
async function getStudents(req, res, next) {
  try {
    const skip = parseInt(req.query.skip) || 0;
    const take = parseInt(req.query.take) || 10;
    const students = await studentRepository.getStudents(skip, take);
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
}

/**
 * Retrieves a student record by registration number.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next middleware function.
 */
async function getStudentByRegNo(req, res, next) {
  try {
    const { regNo } = req.params;
    if (!regNo) {
      return res.status(400).json({ message: 'Registration number is required.' });
    }
    const student = await studentRepository.getStudentByRegNo(regNo);
    if (!student) {
      return res.status(404).json({ message: 'Student not found.' });
    }
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
}

/**
 * Updates an existing student's record.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next middleware function.
 */
async function updateStudent(req, res, next) {
  try {
    const { regNo } = req.params;
    if (!regNo) {
      return res.status(400).json({ message: 'Registration number is required.' });
    }
    // Validate that the student exists
    const studentExists = await studentRepository.getStudentByRegNo(regNo);
    if (!studentExists) {
      return res.status(404).json({ message: 'Student not found.' });
    }
    const updateData = req.body;
    const updatedStudent = await studentRepository.updateStudent(regNo, updateData);
    res.status(200).json(updatedStudent);
  } catch (error) {
    next(error);
  }
}

/**
 * Performs a soft delete on a student record by updating its status.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next middleware function.
 */
async function deleteStudent(req, res, next) {
  try {
    const { regNo } = req.params;
    if (!regNo) {
      return res.status(400).json({ message: 'Registration number is required.' });
    }
    // Validate that the student exists
    const studentExists = await studentRepository.getStudentByRegNo(regNo);
    if (!studentExists) {
      return res.status(404).json({ message: 'Student not found.' });
    }
    const deletedStudent = await studentRepository.deleteStudent(regNo);
    res.status(200).json({ message: 'Student deleted (soft delete)', student: deletedStudent });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createStudent,
  getStudents,
  getStudentByRegNo,
  updateStudent,
  deleteStudent,
};

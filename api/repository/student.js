const prisma = require('../utils/prismaClient');

/**
 * Creates a new student record.
 * @param {Object} studentData - Data of the student to create.
 * @returns {Promise<Object>} - Created student record.
 */
async function createStudent(studentData) {
  try {
    const student = await prisma.student.create({
      data: studentData,
    });
    return student;
  } catch (error) {
    throw error;
  }
}

/**
 * Retrieves all students with optional pagination.
 * @param {number} [skip=0] - Number of records to skip.
 * @param {number} [take=10] - Number of records to take.
 * @returns {Promise<Array>} - List of student records.
 */
async function getStudents(skip = 0, take = 10) {
  try {
    const students = await prisma.student.findMany({
      skip,
      take,
    });
    return students;
  } catch (error) {
    throw error;
  }
}

/**
 * Retrieves a student by registration number.
 * @param {string} regNo - Registration number of the student.
 * @returns {Promise<Object|null>} - Student record if found.
 */
async function getStudentByRegNo(regNo) {
  try {
    const student = await prisma.student.findUnique({
      where: {
        registrationNumber: regNo,
      },
    });
    return student;
  } catch (error) {
    throw error;
  }
}

/**
 * Updates an existing student's details based on their registration number.
 * @param {string} regNo - Registration number of the student.
 * @param {Object} updateData - Data to update.
 * @returns {Promise<Object>} - Updated student record.
 */
async function updateStudent(regNo, updateData) {
  try {
    const student = await prisma.student.update({
      where: {
        registrationNumber: regNo,
      },
      data: updateData,
    });
    return student;
  } catch (error) {
    throw error;
  }
}

/**
 * Performs a soft delete on a student record by updating its status.
 * @param {string} regNo - Registration number of the student.
 * @returns {Promise<Object>} - Updated student record with status set to false.
 */
async function deleteStudent(regNo) {
  try {
    const student = await prisma.student.update({
      where: {
        registrationNumber: regNo,
      },
      data: {
        status: false,
      },
    });
    return student;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createStudent,
  getStudents,
  getStudentByRegNo,
  updateStudent,
  deleteStudent,
};

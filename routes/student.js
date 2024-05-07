const express = require('express')
const router = express.Router({ mergeParams: true })

const {
  addStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/student')

router.post('/', addStudent)
router.get('/', getAllStudents)
router.get('/:studentId', getStudent)
router.put('/:studentId', updateStudent)
router.delete('/:studentId', deleteStudent)

module.exports = router

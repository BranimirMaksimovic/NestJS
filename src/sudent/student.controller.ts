import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students') //all starts with /student
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }
  @Get('/:studentId') // whole route is /students/:studentId
  getStudentById() {
    return 'Get student by id';
  }

  @Post()
  createStudent() {
    return 'Create student';
  }

  @Put('/:studentId')
  updateStudent() {
    return 'Update student by id';
  }
}

import { Controller } from '@nestjs/common';
import { Get, Put } from '@nestjs/common/decorators';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'Get all students that belong to a teacher';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Upadte Student teacher ';
  }
}

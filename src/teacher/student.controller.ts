import { Controller } from '@nestjs/common';
import { Get, Param, Put } from '@nestjs/common/decorators';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../sudent/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto {
    return `Get all students that belong to the teacher with an id of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return `Upadte Student with id of ${studentId} to a teacher with id of ${teacherId} `;
  }
}

import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto';

@Controller('students') //all starts with /student
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return 'All Students';
  }
  @Get('/:studentId') // whole route is /students/:studentId
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto[] {
    return `Ge student with id of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto[] {
    return `Create student with the following data ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `Update student with id of ${studentId} with data of ${JSON.stringify(
      body,
    )}`;
  }
}

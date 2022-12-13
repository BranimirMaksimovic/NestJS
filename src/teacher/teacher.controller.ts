import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDto {
    return 'Get All teachers';
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return `Get Teacher by id of ${teacherId}`;
  }
}

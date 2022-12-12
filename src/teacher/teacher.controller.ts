import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'Get All teachers';
  }

  @Get('/:teacherId')
  getTeacherById() {
    return 'Get Teacher by id';
  }
}

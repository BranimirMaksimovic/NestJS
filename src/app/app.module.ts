import { Module } from '@nestjs/common';
import { StudentController } from 'src/sudent/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { StudentService } from 'src/sudent/student.service';
import { TeacherService } from 'src/teacher/teacher.service';
@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [StudentService, TeacherService],
})
export class AppModule {}

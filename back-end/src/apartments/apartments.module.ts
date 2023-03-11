import { Module } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { ApartmentsController } from './apartments.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  exports: [],
  controllers: [ApartmentsController],
  providers: [ApartmentsService, PrismaService],
})
export class ApartmentsModule {}

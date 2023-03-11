import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApartmentsService } from './apartments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('apartments')
@Controller('apartment')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  public async getAllApartments() {
    return await this.apartmentsService.getAllApartments();
  }
}

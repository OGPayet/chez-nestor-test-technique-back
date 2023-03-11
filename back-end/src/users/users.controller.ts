import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Put,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateUserDto, UpdatePasswordDto } from './users.dto';

@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /*
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('me')
  public async me(@Request() req: any) {
    return new RenderUser(req.user);
  }
  */

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Put('')
  public async update(
    @Body()
    updateUserDto: UpdateUserDto,
  ) {
    await this.usersService.update(updateUserDto);

    return {
      message: 'user_update_success',
    };
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Put('update/password')
  public async updatePassword(
    @Request() req: any,
    @Body()
    updatePasswordDto: UpdatePasswordDto,
  ) {
    await this.usersService.updatePassword(updatePasswordDto, req.user.id);

    return {
      message: 'password_update_success',
    };
  }
}

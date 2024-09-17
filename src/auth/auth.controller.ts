// auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { LoginDto } from './dto/login.dto';
import { UsersService } from './service/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const user = await this.usersService.validateUser(
        loginDto.username,
        loginDto.password,
      );

      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }

      return this.authService.login(user);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @Post('register')
  async register(@Body() loginDto: LoginDto) {
    try {
      return this.usersService.create(loginDto.username, loginDto.password);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}

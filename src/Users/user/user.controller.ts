import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/Models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  Create(@Body() params: User): void {
    //Imprimir parámetros del usuario
    console.log(
      'Nombre completo: ${params.username}\nCorreo electrónico: ${params.email}\nTeléfono: ${params.cellphone}',
    );
    this.userService.create(params);
  }
  @Get('/all')
  getUsers(): User[] {
    return this.userService.getAll();
  }
  @Get('/:correo')
  getUser(@Param('correo_electronico') param): User {
    // Valida la respuesta, si el usuario no existe, regresa un mensaje diciendo que no fue encontrado
    var result = this.userService.getByEmail(param);
    if (result == undefined) {
      console.error('No existe ese usuario');
    }
    return result;
  }
}

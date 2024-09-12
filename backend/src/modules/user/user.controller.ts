import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ActionDto } from 'src/shareDTO/action.dto';

import { LoginQuery } from './handlers/queries/Login.query';
import { JwtGuard } from 'src/guards/jwt.guard';
import { InsertUserStepOneCommand } from './handlers/commands/RegisterStepOne.command';
import { RegisterStepOneRequestDto } from './dto/request/RegisterStepOneRequest.dto';
import { InsertUserStepTwoCommand } from './handlers/commands/RegisterStepTwo.command';
import { RegisterStepTwoRequestDto } from './dto/request/RegisterStepTwoRequest.dto';
import { RegisterStepThreeRequestDto } from './dto/request/RegisterStepThreeRequest.dto';
import { InsertUserStepThreeCommand } from './handlers/commands/RegisterStepThree.command';
import { GetProfile } from 'src/decorator/get-profile.decorator';
import { User, UserDocument } from 'src/schema/user.schema';
import { SendTokenResponseDto } from './dto/response/SendTokenResponse.dto';
import { LoginRequestDto } from './dto/request/loginRequest.dto';
import { UpdateUserRequestDto } from './dto/request/UpdateUserRequest.dto';
import { UpdateUserCommand } from './handlers/commands/UpdateUser.command';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,

    @InjectModel(User.name)
    private readonly user: Model<UserDocument>,
  ) {}

  //commands

  @Post('init')
  @ApiOkResponse({
    description: 'this route for start insert user prossess 1/3',
    type: ActionDto,
  })
  async init() {
    await new this.user({
      email: 'admin@mg.com',
      phone: '09160000000',
      isCompleted: true,
      isAdmin: true,
    }).save();
    return 'OK';
  }

  @Post('register/one')
  @ApiOkResponse({
    description: 'this route for start insert user prossess 1/3',
    type: ActionDto,
  })
  stepOne(@Body() dto: RegisterStepOneRequestDto) {
    return this.commandBus.execute(new InsertUserStepOneCommand(dto));
  }

  @Post('register/two')
  @ApiOkResponse({
    description: 'this route for start insert user prossess 2/3',
    type: ActionDto,
  })
  stepTwo(@Body() dto: RegisterStepTwoRequestDto) {
    return this.commandBus.execute(new InsertUserStepTwoCommand(dto));
  }

  @Post('register/three')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'this route for start insert user prossess 3/3',
    type: ActionDto,
  })
  stepThree(
    @Body() dto: RegisterStepThreeRequestDto,
    @GetProfile() user: User,
  ) {
    return this.commandBus.execute(new InsertUserStepThreeCommand(user, dto));
  }

  @Post('update')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'this route for update user profile',
    type: ActionDto,
  })
  update(@Body() dto: UpdateUserRequestDto, @GetProfile() user: User) {
    return this.commandBus.execute(new UpdateUserCommand(user, dto));
  }

  //query

  @Post('login')
  @ApiOkResponse({
    description: 'this route user can login and get token',
    type: SendTokenResponseDto,
  })
  login(@Body() loginDto: LoginRequestDto) {
    return this.queryBus.execute(new LoginQuery(loginDto));
  }

  @Get('profile')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'this route user can login and get token',
    type: User,
  })
  profile(@GetProfile() user: User) {
    return Response.send(user);
  }
}

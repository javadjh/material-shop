import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/guards/jwt.guard';
import { ActionDto } from 'src/shareDTO/action.dto';
import { InsertChatRequestDto } from './dto/request/InsertChatRequest.dto';
import { GetProfile } from 'src/decorator/get-profile.decorator';
import { User } from 'src/schema/user.schema';
import { InsertChatCommand } from './handlers/commands/InsertChat.command';
import { GetUsersChatsQuery } from './handlers/queries/GetUsersChats.query';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { GetAdminChatsQuery } from './handlers/queries/GetAdminChats.query';
import { GetUsersUnseenChatQuery } from './handlers/queries/GetUsersUnseenChat.query';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'this route for insert new chat',
    type: ActionDto,
  })
  insert(@Body() dto: InsertChatRequestDto, @GetProfile() user: User) {
    return this.commandBus.execute(new InsertChatCommand(dto, user));
  }

  @Get('')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'return users chat list',
    type: ActionDto,
  })
  usersChats(@Param() paging: PagingDto, @GetProfile() user: User) {
    return this.queryBus.execute(new GetUsersChatsQuery(paging, user));
  }

  @Get('unseen')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'return users un seen chats',
    type: ActionDto,
  })
  usersUnseenChat(@GetProfile() user: User) {
    return this.queryBus.execute(new GetUsersUnseenChatQuery(user));
  }

  @Get('admin')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route will return the users chats',
    type: ActionDto,
  })
  adminUsersChats(@Param() paging: PagingDto) {
    return this.queryBus.execute(new GetAdminChatsQuery(paging));
  }
}

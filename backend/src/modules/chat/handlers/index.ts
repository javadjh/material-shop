//commands
import { InsertChatHandler } from './commands/InsertChat.command';

//queries
import { GetAdminChatsHandler } from './queries/GetAdminChats.query';
import { GetUsersChatsHandler } from './queries/GetUsersChats.query';
import { GetUsersUnseenChatHandler } from './queries/GetUsersUnseenChat.query';

export default [
  //commands
  InsertChatHandler,

  //queries
  GetUsersChatsHandler,
  GetAdminChatsHandler,
  GetUsersUnseenChatHandler,
];

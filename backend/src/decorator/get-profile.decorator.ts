import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetProfile = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    console.log(request.user);

    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);

import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  mixin,
} from '@nestjs/common';
import { User } from 'src/schema/user.schema';

export const UserTypeGuard = () => {
  class UserTypeGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const user: User = context.switchToHttp().getRequest().user;

      return user._id.length>10;
    }
  }

  const guard = mixin(UserTypeGuardMixin);
  return guard;
};

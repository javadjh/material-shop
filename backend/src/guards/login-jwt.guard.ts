import { AuthGuard } from '@nestjs/passport';
export class LoginJwtGuard extends AuthGuard('login-jwt') {
  constructor() {
    super();
  }
}

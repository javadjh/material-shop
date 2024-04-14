import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class Auth {
  constructor(private jwt: JwtService, private config: ConfigService) {}
  async generateToken(payload: any) {
    return await this.jwt.signAsync(payload, {
      secret: 'ssdcfvsdcsdfvdf',
    });
  }
}

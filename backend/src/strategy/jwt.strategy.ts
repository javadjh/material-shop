import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { Model } from 'mongoose';
import { RECORD_NOT_FOUND_ERROR_MESSAGE } from 'src/config/messages';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'ssdcfvsdcsdfvdf',
    });
  }
  async validate(payload: any) {
    console.log(payload);

    let user = await this.model.findById(payload.sub).lean();
    console.log('useruseruseruseruseruseruser');
    console.log(user);
    if (!user?._id)
      throw new BadRequestException(RECORD_NOT_FOUND_ERROR_MESSAGE);

    return user;
  }
}

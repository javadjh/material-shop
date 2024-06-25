import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { Model } from 'mongoose';
import { ACCESS_ERROR_MESSAGE } from 'src/config/messages';

@Injectable()
export class AdmminJwtStrategy extends PassportStrategy(Strategy, 'admin-jwt') {
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
    console.log(user);
    if (!user?._id || !user.isAdmin)
      throw new BadRequestException(ACCESS_ERROR_MESSAGE);

    return user;
  }
}

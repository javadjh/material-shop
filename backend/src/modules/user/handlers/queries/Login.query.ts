import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seed } from 'src/config/seed';
import { Response, ResponseDto } from 'src/config/response';
import { User, UserDocument } from 'src/schema/user.schema';
import { LoginRequestDto } from '../../dto/request/loginRequest.dto';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';
import { Password } from 'src/utility/password';
import { BadRequestException } from '@nestjs/common';
import { PASSWORD_ERROR_MESSAGE } from 'src/config/messages';
import { Auth } from 'src/config/Auth';
import { SendTokenResponseDto } from '../../dto/response/SendTokenResponse.dto';

export class LoginQuery {
  constructor(public readonly userLoginDto: LoginRequestDto) {}
}
@QueryHandler(LoginQuery)
export class LoginHandler implements IQueryHandler<LoginQuery> {
  constructor(
    @InjectModel(User.name)
    private readonly user: Model<UserDocument>,

    private readonly auth: Auth,
  ) {}
  async execute(query: LoginQuery): Promise<any> {
    const { password, phone } = query.userLoginDto;

    //find user using phone number
    const userObject = await this.user.findOne({ phone });

    //check is user found ?
    if (!userObject?._id) throw new RecordNotFoundException();

    //check password
    if (!(await Password.compare(password, userObject?.password)))
      throw new BadRequestException(PASSWORD_ERROR_MESSAGE);

    //generate token
    let token: string = await this.auth.generateToken({ sub: userObject?._id });

    let dto: SendTokenResponseDto = { data: token };
    return Response.send(dto);
  }
}

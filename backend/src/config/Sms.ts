import { BadRequestException, Injectable } from '@nestjs/common';
import * as request from 'request';

@Injectable()
export class Sms {
  static async sendSms(phone: string, code: string) {
    request.post(
      {
        url: 'http://ippanel.com/api/select',
        body: {
          op: 'pattern',
          user: 'u9122855499',
          pass: 'Med@0480301840',
          fromNum: '+983000505',
          toNum: phone,
          patternCode: '0pcrgww91fjomv6',
          inputData: [{ code }],
        },
        json: true,
      },
      function (error, response, body) {
        if (!error && response.statusCode === 200) {
          //YOU‌ CAN‌ CHECK‌ THE‌ RESPONSE‌ AND SEE‌ ERROR‌ OR‌ SUCCESS‌ MESSAGE
          console.log(response.body);
        } else {
          throw new BadRequestException();
        }
      },
    );
  }
}

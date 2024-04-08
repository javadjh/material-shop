import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: HttpException | any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let statusCode: number = 400;
    try {
      statusCode = exception?.getStatus() || 500;
    } catch (error) {
      statusCode = 500;
    }
    console.log(exception?.response?.message);
    let message: string = '';
    try {
      message =
        (exception?.response?.message &&
          exception?.response?.message?.join(' *** ')) ||
        exception?.message ||
        'UNkown Error';
    } catch (error) {
      message = exception?.message || 'UNkown Error';
    }

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode,
      message,
      timestamp: new Date().toJalali(),
      path: request.url,
      state: false,
    });
  }
}

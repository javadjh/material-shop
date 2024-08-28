/**
 * in this handler we save the file that was saved to public folder
 */
import { BadRequestException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  FILE_SIZE_ERROR_MESSAGE,
  INSERT_ERROR_MESSAGE,
} from 'src/config/messages';
import { File, FileDocument } from 'src/schema/file.schema';
import { InsertFileResponseData } from '../../dto/response/InsertFileResponse.dto';
import { Response } from 'src/config/response';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import * as fs from 'fs';

export class InsertFileCommand {
  constructor(public readonly file: Express.Multer.File) {}
}
@CommandHandler(InsertFileCommand)
export class InsertFileHandler implements ICommandHandler<InsertFileCommand> {
  constructor(
    @InjectModel(File.name)
    private readonly fileModel: Model<FileDocument>,
  ) {}
  async execute(command: InsertFileCommand): Promise<any> {
    let fileSent = command.file;
    //check if file not video , remove and throw ex
    if (
      !GlobalUtility.checkIsVideoType(fileSent.mimetype) &&
      fileSent.size > 1000000000
    ) {
      fs.unlinkSync(fileSent.path);
      throw new BadRequestException(FILE_SIZE_ERROR_MESSAGE);
    }

    //save file in database
    const file: File = await new this.fileModel(command.file).save();
    if (!file?._id) throw new BadRequestException(INSERT_ERROR_MESSAGE);

    //send file data
    let res: InsertFileResponseData = {
      filename: file?.filename,
      mimetype: file?.mimetype,
      originalname: file?.originalname,
      size: file?.size,
      _id: file?._id,
    };

    return Response.send(res);
  }
}

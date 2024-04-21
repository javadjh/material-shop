import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';
import { UpsertBrandRequestDto } from '../../dto/request/UpsertBrandRequest.dto';
import { Brand, BrandDocument } from 'src/schema/barnd.schema';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';

export class UpdateBrandCommand {
  constructor(
    public readonly dto: UpsertBrandRequestDto,
    public readonly id: string,
  ) {}
}
@CommandHandler(UpdateBrandCommand)
export class UpdateBrandHandler implements ICommandHandler<UpdateBrandCommand> {
  constructor(
    @InjectModel(Brand.name)
    private readonly brand: Model<BrandDocument>,
  ) {}
  async execute(command: UpdateBrandCommand): Promise<any> {
    const { dto, id } = command;

    // check id
    id.isObjectId();

    const brand = await this.brand.findByIdAndUpdate(id, {
      $set: {
        ...dto,
      },
    });

    if (!brand?._id) throw new RecordNotFoundException();

    return Response.updated();
  }
}

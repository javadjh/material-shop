import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';
import { UpsertBrandRequestDto } from '../../dto/request/UpsertBrandRequest.dto';
import { Brand, BrandDocument } from 'src/schema/barnd.schema';

export class InsertBrandCommand {
  constructor(public readonly dto: UpsertBrandRequestDto) {}
}
@CommandHandler(InsertBrandCommand)
export class InsertBrandHandler implements ICommandHandler<InsertBrandCommand> {
  constructor(
    @InjectModel(Brand.name)
    private readonly brand: Model<BrandDocument>,
  ) {}
  async execute(command: InsertBrandCommand): Promise<any> {
    const { dto } = command;

    //save brand
    const brand = await new this.brand(dto).save();

    if (!brand?._id) throw new InsertException();

    return Response.inserted();
  }
}

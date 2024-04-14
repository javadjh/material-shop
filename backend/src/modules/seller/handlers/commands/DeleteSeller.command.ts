import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';

import { LocationShareHandler } from 'src/modules/location/handlers/share';
import { Seller, SellerDocument } from 'src/schema/seller.schema';

export class DeleteSellerCommand {
  constructor(public readonly id: string) {}
}
@CommandHandler(DeleteSellerCommand)
export class DeleteSellerHandler
  implements ICommandHandler<DeleteSellerCommand>
{
  constructor(
    @InjectModel(Seller.name)
    private readonly seller: Model<SellerDocument>,
  ) {}
  async execute(command: DeleteSellerCommand): Promise<any> {
    const { id } = command;

    //dedlete logic
    await this.seller.findByIdAndRemove(id);

    return Response.deleted();
  }
}

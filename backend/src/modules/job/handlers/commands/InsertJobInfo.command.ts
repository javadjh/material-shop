import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';
import { Job, JobDocument } from 'src/schema/job.schema';
import { InsertJobRequestDto } from '../../dto/request/InsertJobRequest.dto';

export class InsertJobCommand {
  constructor(public readonly dto: InsertJobRequestDto) {}
}
@CommandHandler(InsertJobCommand)
export class InsertJobHandler implements ICommandHandler<InsertJobCommand> {
  constructor(
    @InjectModel(Job.name)
    private readonly job: Model<JobDocument>,
  ) {}
  async execute(command: InsertJobCommand): Promise<any> {
    const { dto } = command;

    //save job
    const job = await new this.job(dto).save();

    if (!job?._id) throw new InsertException();

    return Response.inserted();
  }
}

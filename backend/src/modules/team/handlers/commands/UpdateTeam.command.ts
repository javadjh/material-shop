import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpsertTeamRequestDto } from '../../dto/request/UpsertTeamRequest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Team, TeamDocument } from 'src/schema/team.schema';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { InsertException } from 'src/filters/insertException.filter';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';

export class UpdateTeamCommand {
  constructor(
    public readonly dto: UpsertTeamRequestDto,
    public readonly id: string,
  ) {}
}

@CommandHandler(UpdateTeamCommand)
export class UpdateTeamHandler implements ICommandHandler<UpdateTeamCommand> {
  constructor(
    @InjectModel(Team.name)
    private readonly team: Model<TeamDocument>,
  ) {}
  async execute(command: UpdateTeamCommand): Promise<any> {
    const { dto, id } = command;

    //update

    let team = await this.team.findByIdAndUpdate(id, {
      $set: {
        ...dto,
      },
    });

    if (!team?._id) throw new RecordNotFoundException();

    return Response.updated();
  }
}

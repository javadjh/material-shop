import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpsertTeamRequestDto } from '../../dto/request/UpsertTeamRequest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Team, TeamDocument } from 'src/schema/team.schema';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { InsertException } from 'src/filters/insertException.filter';

export class InsertTeamCommand {
  constructor(public readonly dto: UpsertTeamRequestDto) {}
}

@CommandHandler(InsertTeamCommand)
export class InsertTeamHandler implements ICommandHandler<InsertTeamCommand> {
  constructor(
    @InjectModel(Team.name)
    private readonly team: Model<TeamDocument>,
  ) {}
  async execute(command: InsertTeamCommand): Promise<any> {
    const { dto } = command;

    //insert

    let team = await new this.team(dto).save();

    if (!team?._id) throw new InsertException();

    return Response.inserted();
  }
}

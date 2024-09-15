import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpsertTeamRequestDto } from '../../dto/request/UpsertTeamRequest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Team, TeamDocument } from 'src/schema/team.schema';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { NotFoundException } from '@nestjs/common';

export class DeleteTeamCommand {
  constructor(public readonly id: string) {}
}

@CommandHandler(DeleteTeamCommand)
export class DeleteTeamHandler implements ICommandHandler<DeleteTeamCommand> {
  constructor(
    @InjectModel(Team.name)
    private readonly team: Model<TeamDocument>,
  ) {}
  async execute(command: DeleteTeamCommand): Promise<any> {
    const { id } = command;

    id?.isObjectId();

    //delete
    let team = await this.team.findByIdAndDelete(id);

    if (!team?._id) throw new NotFoundException();

    return Response.deleted();
  }
}

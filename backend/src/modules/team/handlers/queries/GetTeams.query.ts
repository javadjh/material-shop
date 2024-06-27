import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from 'src/schema/team.schema';
import { GetTeamsResponseDto } from '../../dto/response/GetTeamsResponse.dto';
import { Response } from 'src/config/response';

export class GetTeamsQuery {}

@QueryHandler(GetTeamsQuery)
export class GetTeamsHandler implements IQueryHandler<GetTeamsQuery> {
  constructor(
    @InjectModel(Team.name)
    private readonly team: Model<TeamDocument>,
  ) {}
  async execute(query: GetTeamsQuery): Promise<any> {
    const teams: Array<Team> = await this.team
      .find()
      .select(
        'fullName image instagram telegram twitter whatsapp linkedin position',
      );

    let response: GetTeamsResponseDto = { data: teams };

    return Response.send(response.data);
  }
}

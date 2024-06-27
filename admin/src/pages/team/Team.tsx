import { useEffect, useState } from "react";
import { ITeam } from "../../types/team.type";
import { SpaceStyled } from "../../global-style/global.s";
import { Button, Col, Row, Typography } from "antd";
import TeamsComponent from "./Teams.c";
import { teamsService } from "../../service/team.service";
import UpsertTeamModal from "./UpsertTeam.m";

export const Team = () => {
  const [teams, setTeams] = useState<{
    teams: Array<ITeam>;
    totla: number;
  }>();
  const [teamsData, setTeamsData] = useState<ITeam>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    getTeams();
  }, []);
  const getTeams = async () => {
    const { data } = await teamsService();
    console.log(data);

    setTeams(data.data);
  };
  const onOpenModalHandler = () => {
    setTeamsData({});
    setIsOpen(true);
  };
  const onClickEditListener = (team: ITeam) => {
    setTeamsData(team);
    setIsOpen(true);
  };
  return (
    <>
      <UpsertTeamModal
        data={teamsData}
        isOpen={isOpen}
        refreshData={getTeams}
        setIsOpen={setIsOpen}
      />
      <SpaceStyled horizontal={5} vertical={10}>
        <Row align={"middle"} justify={"space-between"}>
          <Col>
            <SpaceStyled horizontal={5}>
              <Typography.Text>اعضا</Typography.Text>
            </SpaceStyled>
          </Col>
          <Col>
            <Button type="primary" onClick={onOpenModalHandler}>
              افزودن عضو جدید
            </Button>
          </Col>
        </Row>
      </SpaceStyled>
      <TeamsComponent teams={teams} onClickEditListener={onClickEditListener} />
    </>
  );
};
export default Team;

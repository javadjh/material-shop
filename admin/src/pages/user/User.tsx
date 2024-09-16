import { useEffect, useState } from "react";
import { IUser } from "../../types/user.type";
import { SpaceStyled } from "../../global-style/global.s";
import { Button, Col, Row, Typography } from "antd";
import UsersComponent from "./Users.c";
import { usersService } from "../../service/user.service";
import SendSmsModal from "./SendSms.m";

export const User = () => {
  const [users, setUsers] = useState<{
    users: Array<IUser>;
    totla: number;
  }>();
  const [userId, setUserId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 10,
    }
  );
  useEffect(() => {
    getUsers();
  }, [paging]);

  const getUsers = async () => {
    const { data } = await usersService(paging);
    console.log(data.data);

    setUsers(data.data);
  };

  const onClickSendSmsListener = (id: string) => {
    setIsOpen(true);
    setUserId(id);
  };
  return (
    <>
      <SendSmsModal isOpen={isOpen} setIsOpen={setIsOpen} userId={userId} />
      <SpaceStyled horizontal={10} vertical={10}>
        <h4>کاربران</h4>
      </SpaceStyled>
      <UsersComponent
        onClickSendSmsListener={onClickSendSmsListener}
        paging={paging}
        users={users}
        setPaging={setPaging}
      />
    </>
  );
};
export default User;

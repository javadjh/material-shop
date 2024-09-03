import { FC, useEffect, useRef, useState } from "react";
import {
  getAdminUserChatsService,
  insertChats,
} from "../../service/chat.service";
import { SpaceStyled } from "../../global-style/global.s";
import styled from "styled-components";

const UserChat: FC<{ userId: string }> = ({ userId }) => {
  const [chats, setChats] = useState<any>({});
  const [filter, setFilter] = useState<any>({ pageId: 1, eachPerPage: 20 });
  const [message, setMessage] = useState<string>("");
  const [chatsList, setChatsList] = useState<Array<any>>([]);
  useEffect(() => {
    setTimeout(() => {
      getChats();
    }, 500);
  }, []);

  const getChats = async () => {
    console.log("userIduserIduserIduserIduserIduserIduserIduserId");
    console.log(userId);

    const {
      data: { data: res },
    } = await getAdminUserChatsService(filter, userId);
    setChats(res);

    setChatsList(res?.list?.reverse());
    scrollToBottom();
  };

  const messagesRef: any = useRef(null);
  useEffect(() => {
    getChats();
  }, [filter]);

  const onSendMessage = async () => {
    await insertChats({ isAdmin: true, message, userId });
    getChats();
    setMessage("");
  };
  const scrollToBottom = () => {
    setTimeout(() => {
      const { current } = messagesRef;
      current.scrollTop = current.scrollHeight;
    }, 200);
  };
  return (
    <>
      <SpaceStyled top={-20}>
        <ScrollContainer ref={messagesRef}>
          {chatsList?.map((item) => (
            <MessageContainer isAdmin={item?.isAdmin}>
              <p>کاربر : {item?.isAdmin ? "مدیر سایت" : "شما"}</p>
              <p>{item?.message}</p>
            </MessageContainer>
          ))}
        </ScrollContainer>
      </SpaceStyled>
      <MessageBoxContainer>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSendMessage();
          }}
        >
          <input
            className="form-control"
            onChange={(e) => setMessage(e.target?.value)}
            placeholder="پاسخ را بنویسید..."
            value={message}
          />
        </form>
      </MessageBoxContainer>
    </>
  );
};
export default UserChat;
const MessageBoxContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 78%;
  background-color: #1a2f34;
  margin-right: 30px;
  height: 55px;
  border-radius: 10px;
  padding: 10px;
`;

const SendBox = styled.span`
  width: 5%;
  position: absolute;
  left: 0px;
  top: 50%;
  cursor: pointer;
  transform: translate(-0%, -50%);
`;
const MessageContainer: any = styled.div`
  background-color: ${(props: any) => (props?.isAdmin ? "#303641" : "#1b1e24")};
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const ScrollContainer = styled.div`
  height: calc(100vh - 205px);
  overflow: auto;
`;

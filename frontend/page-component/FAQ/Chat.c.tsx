import { useEffect, useRef, useState } from "react";
import { getChats, insertChats } from "../../service/chat.service";
import styled from "styled-components";
import { GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import {
  CenterStyled,
  CenterVerticalStyled,
  SpaceStyled,
} from "../../global-style/global.s";
import { Typography } from "@mui/joy";
import { Mail } from "@mui/icons-material";
import { getCookie } from "cookies-next";
import { LARGE_FONT, X_LARGE_FONT } from "../../config/font";
import Link from "next/link";
const ChatComponent = () => {
  const [filter, setFilter] = useState({ pageId: 1, eachperPage: 40 });
  const [message, setMessage] = useState<string>("");
  const [chatsList, setChatsList] = useState<Array<any>>([]);

  const messagesRef: any = useRef(null);
  useEffect(() => {
    if (getCookie("token")) chats();
  }, [filter]);
  const chats = async () => {
    const {
      data: { data: res },
    } = await getChats(filter);
    setChatsList(res?.list?.reverse());
    scrollToBottom();
  };
  const onSendMessage = async () => {
    await insertChats({ isAdmin: false, message });
    chats();
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
      {getCookie("token") ? (
        <>
          <SpaceStyled top={80} right={30}>
            <ScrollContainer ref={messagesRef}>
              {chatsList?.map((item) => (
                <MessageContainer isAdmin={item?.isAdmin}>
                  <Typography>
                    کاربر : {item?.isAdmin ? "مدیر سایت" : "شما"}
                  </Typography>
                  <Typography textColor={WHITE_COLOR}>
                    {item?.message}
                  </Typography>
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
              <MessageBox
                onChange={(e) => setMessage(e.target?.value)}
                placeholder="سوالت رو بپرس..."
                value={message}
              />
            </form>
            <SendBox>
              <Mail
                onClick={onSendMessage}
                style={{ color: "white", fontSize: 40 }}
              />
            </SendBox>
          </MessageBoxContainer>
        </>
      ) : (
        <CenterVerticalStyled>
          <CenterStyled>
            <Typography textColor={WHITE_COLOR} fontSize={LARGE_FONT}>
              <Link href={"register"}>*لطفا وارد شوید*</Link>
            </Typography>
          </CenterStyled>
        </CenterVerticalStyled>
      )}
    </>
  );
};
export default ChatComponent;
const MessageBoxContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 78%;
  background-color: #1a2f34;
  margin-right: 30px;
  height: 65px;
  border-radius: 10px;
  padding: 10px;
`;
const MessageBox = styled.input`
  width: 95%;
  background-color: #1a2f34;

  ::placeholder {
    color: #fff !important;
  }
  border-radius: 10px;
  border: 2px solid ${ORANGE_COLOR};
  padding: 10px;
`;
const SendBox = styled.span`
  width: 5%;
  position: absolute;
  left: 0px;
  top: 55%;
  cursor: pointer;
  transform: translate(-0%, -50%);
`;
const MessageContainer: any = styled.div`
  background-color: ${(props: any) =>
    props?.isAdmin ? GRAY_COLOR : ORANGE_COLOR};
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const ScrollContainer = styled.div`
  height: calc(100vh - 210px);
  overflow: auto;
`;

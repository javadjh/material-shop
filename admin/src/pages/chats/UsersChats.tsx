import { useEffect, useState } from "react";
import { getAdminChatService } from "../../service/chat.service";
import CustomPaging from "../../components/CustomPaging";
import { Typography } from "antd";
import { Pointer, SpaceStyled } from "../../global-style/global.s";
import UserChat from "./UserChat";

const UsersChats = () => {
  const [users, setUsers] = useState<any>();
  const [user, setUser] = useState<string>();
  const [filter, setFilter] = useState<any>({
    pageId: 1,
    eachPerPage: 20,
  });
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const {
      data: { data: res },
    } = await getAdminChatService(filter);

    console.log(res);
    setUsers(res);
  };

  return (
    <>
      {user ? (
        <>
          <Pointer>
            <p onClick={() => setUser(undefined)}>بازگشت</p>
          </Pointer>
          <br />
          <UserChat userId={user} />
        </>
      ) : (
        <div className="col-xxl-12">
          <div className="card mb-3">
            <div className="card-body">
              <div className="table-responsive">
                <div className="table-outer">
                  <table className="table table-striped m-0">
                    <thead>
                      <tr>
                        <th>شناسه</th>
                        <th>شماره تماس</th>
                        <th>آخرین پیام</th>
                        <th>تاریخ آخرین پیام</th>

                        <th>عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.list?.map((item: any, index: number) => (
                        <>
                          <tr>
                            <td>
                              <SpaceStyled top={10}>{index + 1}</SpaceStyled>
                            </td>

                            <td>
                              <SpaceStyled top={10}>{item?.phone}</SpaceStyled>
                            </td>
                            <td>
                              <SpaceStyled top={5}>
                                <Typography.Paragraph
                                  ellipsis={{
                                    tooltip: item?.lastChat,
                                    rows: 1,
                                  }}
                                  style={{ width: 600, color: "white" }}
                                >
                                  {item?.lastChat}
                                </Typography.Paragraph>
                              </SpaceStyled>
                            </td>
                            <td>
                              <SpaceStyled top={10}>
                                {item?.lastChatDate}
                              </SpaceStyled>
                            </td>
                            <td>
                              <Pointer onClick={() => setUser(item?._id)}>
                                <SpaceStyled top={10}>نمایش</SpaceStyled>
                              </Pointer>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <CustomPaging
            pageId={users?.pageId}
            eachPerPage={users?.eachPerPage}
            total={users?.total}
            onPageChange={(page) => {
              setFilter({
                ...users,
                pageId: page,
              });
            }}
          />
        </div>
      )}
    </>
  );
};
export default UsersChats;

import { useEffect, useState } from "react";

const UsersChats = () => {
  const [users, setUsers] = useState<Array<any>>();
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {};
};
export default UsersChats;

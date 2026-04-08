import { UserInfo } from "./UserInfo";

export const UserCard = (id, rest) => {
  return (
    <>
      <h2> User {id} Info Card</h2>
      <UserInfo {...rest} />
    </>
  );
};

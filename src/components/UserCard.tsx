import { IUser } from "../interfaces/IUser";

interface IUserCardProps {
  user: IUser;
}

const UserCard = ({ user }: IUserCardProps) => {
  return (
    <div className="user-card">
      <h1>User {user.id}</h1>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;

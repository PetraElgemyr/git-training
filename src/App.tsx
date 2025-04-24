import { useState } from "react";
import "./App.css";
import { IUser } from "./interfaces/IUser";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: 1,
      firstName: "Cecilia",
      lastName: "Sporrong",
      email: "blabla@gmail.com",
    },
    {
      id: 2,
      firstName: "Arvid",
      lastName: "Berlin",
      email: "hejhej@domain.com",
    },
  ]);

  return (
    <div className="users-container">
      {users.map((user) => (
        <UserCard key={user.id} user={user}></UserCard>
      ))}
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { Card } from "../card/card";
import { useUsers } from "../../hooks/use.users";

export default function List() {
  const { users, handleLoadUsers } = useUsers();

  useEffect(() => {
    handleLoadUsers();
  }, [handleLoadUsers]);

  return (
    <>
      <h2>Users</h2>
      <ul className="users-list">
        {users.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </ul>
    </>
  );
}

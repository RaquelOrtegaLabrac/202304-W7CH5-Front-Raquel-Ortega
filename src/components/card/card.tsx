import { User } from "../../models/user";

type PropsType = {
  item: User;
};

export function Card({ item }: PropsType) {
  return (
    <>
      <li key={item.id} className="user">
        <p>{item.userName}</p>
        <p>{item.email}</p>
        <ul>
          {item.friends.map((item) => (
            <li key={item.id}>{item.userName}</li>
          ))}
        </ul>
      </li>
    </>
  );
}

export type User = {
  id: string;
  userName: string;
  email: string;
  password: string;
  friends: User[];
  enemies: User[];
};

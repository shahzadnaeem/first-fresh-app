export interface UserData {
  email: string;
}

export interface User extends UserData {
  id: number;
}

export const USERS: User[] = [
  {
    id: 1,
    email: "user1@example.com",
  },
  {
    id: 2,
    email: "user2@example.com",
  },
];

export const getUserById = (id: number) => {
  return USERS.find((u) => u.id === id);
};

export const getUserByEmail = (email: string) => {
  return USERS.find((u) => u.email === email);
};

const nextId = () => {
  return USERS.reduce((prev: number, user: User) => {
    if (user.id > prev) {
      return user.id;
    } else {
      return prev;
    }
  }, 0) + 1;
};

export const createUser = (userData: UserData): User => {
  const id = nextId();

  const newUser: User = {
    id,
    email: userData.email,
  };

  USERS.push(newUser);

  return newUser;
};

export enum AGE {
  BABY = "Baby",
  TODDLER = "Toddler",
  YOUTH = "Youth",
  PRIME = "Prime of Life",
  AGED = "Creaking",
}

export interface UserData {
  name: string;
  email: string;
  age: AGE;
}

export interface User extends UserData {
  id: number;
}

class UserException extends Error {}
export class UserInvalidException extends UserException {}
export class UserExistsException extends UserException {}
export class UserNotFoundException extends UserException {}

export const USERS: User[] = [
  {
    id: 1,
    name: "User 1",
    email: "user1@example.com",
    age: AGE.YOUTH,
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@example.com",
    age: AGE.PRIME,
  },
];

export const getUsers = () => {
  return USERS;
};

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
  if (!userData.email) {
    throw new UserInvalidException(
      `Invalid user data supplied`,
    );
  }

  if (getUserByEmail(userData.email)) {
    throw new UserExistsException(
      `User with email: '${userData.email}' already exists`,
    );
  }

  const id = nextId();

  const newUser: User = {
    id,
    name: userData.name || "Anon",
    email: userData.email,
    age: userData.age || AGE.AGED,
  };

  USERS.push(newUser);

  return newUser;
};

export const updateUser = (id: number, userData: UserData): User => {
  const validatedUser = getUserById(id);

  if (!validatedUser) {
    throw new UserNotFoundException(
      `User with id: '${id}' not found`,
    );
  }

  const userWithTargetEmail = getUserByEmail(userData.email);

  if (userWithTargetEmail && userWithTargetEmail.id !== id) {
    throw new UserExistsException(
      `User with email: '${userData.email}' already exists`,
    );
  }

  validatedUser.email = userData.email;

  return validatedUser;
};

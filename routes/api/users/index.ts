import { Handlers } from "$fresh/server.ts";

import {
  createUser,
  getUsers,
  UserData,
  UserExistsException,
  UserInvalidException,
} from "../../../data/users.ts";

export const handler: Handlers = {
  GET() {
    return new Response(JSON.stringify({
      users: getUsers(),
    }));
  },
  async POST(req) {
    const userData: UserData = await req.json();

    try {
      const user = createUser(userData);

      return new Response(JSON.stringify({
        user,
      }));
    } catch (e) {
      if (e instanceof UserExistsException) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 409,
        });
      } else if (e instanceof UserInvalidException) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 400,
        });
      } else {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
        });
      }
    }
  },
};

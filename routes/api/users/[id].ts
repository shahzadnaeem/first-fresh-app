import { Handlers } from "$fresh/server.ts";

import {
  getUserById,
  updateUser,
  UserData,
  UserInvalidException,
  UserNotFoundException,
} from "../../../data/users.ts";

export const handler: Handlers = {
  GET(_, ctx) {
    const id = Number(ctx.params.id);

    const user = getUserById(id);

    if (user) {
      return new Response(JSON.stringify({
        user,
      }));
    } else {
      return new Response(
        JSON.stringify({ error: `User with id: ${id} NOT FOUND` }),
        {
          status: 404,
        },
      );
    }
  },
  async PUT(req, ctx) {
    const id = Number(ctx.params.id);
    const userData: UserData = await req.json();

    try {
      const user = updateUser(id, userData);
      return new Response(JSON.stringify({
        user,
      }));
    } catch (e) {
      if (e instanceof UserNotFoundException) {
        return new Response(JSON.stringify({ error: e.message }), {
          status: 404,
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

import { Handlers } from "$fresh/server.ts";

import {
  createUser,
  getUserByEmail,
  getUserById,
  User,
  UserData,
} from "../../../data/users.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const id = Number(ctx.params.id);

    const user = getUserById(id);

    if (user) {
      return new Response(JSON.stringify({
        user,
      }));
    } else {
      return new Response(null, { status: 404 });
    }
  },
  async POST(req, ctx) {
    const body = await req.json();

    if (body.email) {
      const userData: UserData = {
        email: body.email,
      };

      if (!getUserByEmail(body.email)) {
        const user = createUser(userData);

        return new Response(JSON.stringify({
          user,
        }));
      } else {
        return new Response(null, { status: 409 });
      }
    } else {
      return new Response(null, { status: 400 });
    }
  },
};

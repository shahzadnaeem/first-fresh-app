import { HandlerContext, Handlers } from "$fresh/server.ts";

import { USERS } from "../../../data/users.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    return new Response(JSON.stringify({
      users: USERS,
    }));
  },
  async POST(req, ctx) {
    const body = await req.json();

    return new Response(JSON.stringify({
      hey: "You POSTed",
      posted: body,
    }));
  },
};

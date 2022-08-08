// routes/about.tsx

/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";
import { tw } from "../utils/twind.ts";
import Home from "../components/Home.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <main class={tw`grid gap-4 mx-auto mt-4 max-w-md`}>
      <h1 class={tw`text-2xl mt-4 text-center`}>About</h1>
      <p>This is the about page.</p>

      <Home />
    </main>
  );
}

// routes/github/[username].tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { User } from "../data/users.ts";
import Home from "../components/Home.tsx";

interface Users {
  users: User[];
}

export const handler: Handlers<Users | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`http://localhost:8000/api/users`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const users: Users = await resp.json();
    return ctx.render(users);
  },
};

export default function Page({ data }: PageProps<Users>) {
  return (
    <div
      class={tw
        `bg-pink-100 border-1 border-pink-800 outline-1 grid gap-4 mx-auto mt-4 max-w-lg`}
    >
      <h1 class={tw`text-2xl mt-4 text-center`}>Users from own API</h1>
      <p class={tw`px-4`}>See `request.http` for API requests</p>

      <div
        class={tw`bg-pink-50 grid grid-cols-2 gap-4 p-4`}
      >
        {data.users.map((user) => (
          <div key={user.id} class={tw`border-1 border-black p-2`}>
            <div class={tw``}>
              <h1>{user.name} (#{user.id})</h1>
              <ul>
                <li>{user.email}</li>
                <li>{user.age}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Home />
    </div>
  );
}

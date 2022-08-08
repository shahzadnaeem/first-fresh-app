// routes/github/[username].tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import Home from "../../components/Home.tsx";

interface User {
  login: string;
  name: string;
  html_url: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    // console.log(user);
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div class={tw`grid gap-4 mx-auto mt-4 max-w-md`}>
      <h1 class={tw`text-2xl mb-4 text-center`}>{data.name}</h1>
      <img class={tw`mx-auto`} src={data.avatar_url} width={64} height={64} />
      <h2 class={tw`text-lg mb-4 text-center`}>{data.login}</h2>
      <a
        class={tw
          `w-1/2 p-4 bg-indigo-600 rounded-md hover:bg-indigo-400 text-white font-weight-bold text-center text-lg`}
        href={data.html_url}
      >
        {data.name}'s GitHub
      </a>

      <Home />
    </div>
  );
}

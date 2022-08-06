// routes/search.tsx

/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import Home from "../components/Home.tsx";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
  req: Request;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query, req });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query, req } = data;
  return (
    <div class={tw`grid gap-4 mx-auto mt-4 max-w-md`}>
      <h1 class={tw`text-2xl`}>Search page ...</h1>

      <form class={tw`grid grid-cols-2 gap-2`}>
        <input
          class={tw`border-2`}
          type="text"
          name="q"
          value={query}
          placeholder="Type here..."
        />
        <button class={tw`ring-2`} type="submit">Search</button>
      </form>

      <ul class={tw`grid grid-flow-col gap-4 justify-evenly`}>
        {results.map((name) => <li key={name}>{name}</li>)}
      </ul>
      <Home />
    </div>
  );
}

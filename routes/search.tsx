// routes/search.tsx

/** @jsx h */
import { ComponentChildren, h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import Home from "../components/Home.tsx";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  inputs: string[];
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) =>
      name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    return ctx.render({ inputs: NAMES, results, query });
  },
};

interface HxProps {
  children: ComponentChildren;
}

function H1(props: HxProps) {
  return <h1 class={tw`text-2xl`}>{props.children}</h1>;
}

function H2(props: HxProps) {
  return <h2 class={tw`text-xl`}>{props.children}</h2>;
}

interface UlProps {
  data: string[];
  italics?: boolean | undefined;
}

function UL(props: UlProps) {
  return (
    <ul class={tw`grid grid-cols-4 gap-4 justify-evenly`}>
      {props.data.map((name) => (
        <li
          class={tw`border-2 p-2 ${
            props.italics ? "italic border-blue-200" : "border-pink-200"
          }`}
          key={name}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function Page({ data }: PageProps<Data>) {
  const { inputs, results, query } = data;
  return (
    <div class={tw`grid gap-4 mx-auto mt-4 max-w-md`}>
      <H1>Search</H1>

      <p>Using standard HTTP {"<form>"} behaviour - look for '?q=' in URL</p>

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

      <H2>Inputs</H2>
      <UL data={inputs} italics={true}></UL>

      <H2>Query</H2>
      <p>{query}</p>

      <H2>Results</H2>

      <UL data={results}></UL>
      <Home />
    </div>
  );
}

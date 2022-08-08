/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Home from "../components/Home.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <main class={tw`grid gap-4 mx-auto mt-4 max-w-md`}>
      <h1 class={tw`text-2xl mt-4 text-center`}>Hello {props.params.name}</h1>
      <p>{`props=${JSON.stringify(props, null, 2)}`}</p>

      <Home />
    </main>
  );
}

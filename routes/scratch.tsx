/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Home from "../islands/Home.tsx";

export default function Page() {
  return (
    <div class={tw`bg-green-500 m-4 p-2`}>
      <h1 class={tw`text-2xl`}>Scratch page ...</h1>

      <div
        class={tw`h-56 bg-yellow-100 grid grid-cols-4 gap-4 content-center p-4`}
      >
        <p class={tw`border border-dashed border-blue-600 rounded-full p-2`}>
          Stuff for you!
        </p>
        <p class={tw`border border-dashed border-blue-600 rounded-full p-2`}>
          Stuff for you!
        </p>
        <p class={tw`border border-dashed border-blue-600 rounded-full p-2`}>
          Stuff for you!
        </p>
        <p class={tw`border border-dashed border-blue-600 rounded-full p-2`}>
          Stuff for you!
        </p>
        <p class={tw`border border-dashed border-blue-600 rounded-full p-2`}>
          Stuff for you!
        </p>
        <p class={tw`border border-dashed border-blue-600 rounded-full p-2`}>
          Stuff for you!
        </p>
        <p class={tw`border border-dashed border-blue-600 rounded-full p-2`}>
          Stuff for you!
        </p>
        <p class={tw`border border-dashed border-blue-600 rounded-full p-2`}>
          Stuff for you!
        </p>
      </div>

      <Home />
    </div>
  );
}

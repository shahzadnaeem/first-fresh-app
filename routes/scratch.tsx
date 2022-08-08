/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Home from "../components/Home.tsx";

function Para() {
  return (
    <p
      class={tw
        `border border-dashed border-blue-600 rounded-full p-2 text-center`}
    >
      Stuff for you!
    </p>
  );
}

export default function Page() {
  return (
    <div
      class={tw
        `bg-green-100 border-1 border-green-800 outline-1 grid gap-4 mx-auto mt-4 max-w-md`}
    >
      <h1 class={tw`text-2xl mt-4 text-center`}>Scratch</h1>

      <h1 class={tw`text-center text-2xl font-extrabold whoa-plugin`}>
        Mooooove!
      </h1>

      <div
        class={tw`bg-yellow-50 grid grid-cols-2 gap-4 p-4`}
      >
        <Para />
        <Para />
        <Para />
        <Para />
        <Para />
        <Para />
        <Para />
        <Para />
        <Para />
        <Para />
        <Para />
      </div>

      <Home />
    </div>
  );
}

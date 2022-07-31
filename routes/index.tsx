/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <div class={tw`p-4 mx-auto max-w-md`}>
        <img
          src="/logo.svg"
          height="100px"
          width="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-6`}>
          Welcome to `fresh`. Try update this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>

      <div class={tw`p-4 mx-auto max-w-md bg-blue-50`}>
        <h1 class={tw`text-2xl mb-4`}>Links</h1>
        <div className={tw`grid grid-auto-rows gap-4`}>
          <a href="/scratch">Scratch page</a>
        </div>
      </div>
    </>
  );
}

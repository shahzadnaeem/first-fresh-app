/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import LinkTo from "../components/LinkTo.tsx";

export default function Home() {
  return (
    <>
      <div
        class={tw`grid gap-4 mx-auto mt-4 max-w-md`}
      >
        <img
          class={tw`mx-auto`}
          src="/logo.svg"
          height="100px"
          width="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p>
          Welcome to `fresh`. Try update this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />

        <div class={tw`p-4 w-full bg-blue-50`}>
          <h1 class={tw`text-2xl mb-4`}>Links</h1>
          <div className={tw`grid grid-auto-rows gap-4`}>
            <LinkTo link="/scratch">Scratch Page</LinkTo>
          </div>
        </div>
      </div>
    </>
  );
}

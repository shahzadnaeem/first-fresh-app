/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import LinkTo from "./LinkTo.tsx";

export default function Home() {
  return (
    <div
      class={tw`bg-gray-100 p-4 flex gap-2`}
    >
      <LinkTo link="/">🏠 Home</LinkTo>
    </div>
  );
}

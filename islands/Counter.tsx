/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const btn = tw`px-2 py-1 w-8 rounded-full bg-green-500 hover:bg-green-400 focus:border-none`;
  return (
    <div class={tw`bg-gray-100 p-4 flex gap-2 place-items-center justify-around`}>
      <button
        class={btn}
        onClick={() => setCount(count - 1)}
        disabled={!IS_BROWSER}
      >-</button>
      <p class={tw`w-1/5 font-bold text-center text-xl`}>{count}</p>
      <button
        class={btn}
        onClick={() => setCount(count + 1)}
        disabled={!IS_BROWSER}
      >+</button>
    </div>
  );
}

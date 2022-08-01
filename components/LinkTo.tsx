/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

interface LinkProps {
  link: string;
  children: ComponentChildren;
}

export default function LinkTo(props: LinkProps) {
  return (
    <a
      class={tw`border-2 border-blue-400 bg-blue-100 p-2 cursor-pointer`}
      href={props.link}
    >
      {props.children}
    </a>
  );
}

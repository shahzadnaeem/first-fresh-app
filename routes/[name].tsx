/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>
    <p>Hello {props.params.name}</p>
    <p>{`props=${JSON.stringify(props,null,2)}`}</p>
  </div>;
}

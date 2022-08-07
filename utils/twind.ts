import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";

//xSN TODO: Does not work as this package isn't in esm.sh ...
// import typography from "twind/typography";

export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  // plugins: { ...typography() },
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: {
    // TODO: Just a very simple example. Need to do more reading ...
    "whoa-plugin": {
      "background-color": "firebrick",
      color: "yellow",
      transition: "all 200ms ease-in-out",
      "&:focus, &:hover": {
        padding: "1em",
        // "text-align": "center",
        transition: "all 200ms ease-in-out",
      },
    },
  },
};

if (IS_BROWSER) setup(config);

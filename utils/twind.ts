import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";

//xSN TODO: Does not work as this package isn't in esm.sh ...
// import typography from "twind/typography";

export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  // plugins: { ...typography() },
};

if (IS_BROWSER) setup(config);

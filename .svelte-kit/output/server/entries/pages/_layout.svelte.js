import { d as slot } from "../../chunks/index.js";
/* empty css               */
function _layout($$payload, $$props) {
  $$payload.out += `<header class="mt-2 flex items-center justify-center gap-4 sm:!mt-12 sm:gap-4"><img alt="Vue logo" class="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" src="playground-white.svg"> <p class="text-4xl text-white md:text-5xl">Lekeplasser</p></header> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};

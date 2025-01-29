import "clsx";
/* empty css               */
import { e as bind_props, c as pop, p as push } from "../../chunks/index.js";
import { p as public_env } from "../../chunks/shared-server.js";
import { f as fallback } from "../../chunks/utils.js";
function Map($$payload, $$props) {
  push();
  public_env.PUBLIC_GOOGLE_MAPS_API_KEY;
  let center = fallback($$props["center"], () => ({ lat: 58.97, lng: 5.73 }), true);
  let zoom = fallback($$props["zoom"], 14);
  $$payload.out += `<div class="space-y-4"><div class="overflow-hidden rounded-xl"><div class="h-[40rem] w-full sm:h-[50rem]"></div></div> <div class="flex justify-center"><button class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">Fjern lagrede lekeplasser</button></div></div>`;
  bind_props($$props, { center, zoom });
  pop();
}
function _page($$payload) {
  $$payload.out += `<div class="mt-8"><p class="text-md mb-4 text-center">Finn lekeplasser i Stavanger. Hver lekeplass er markert med et grønt polygon.</p> `;
  Map($$payload, {});
  $$payload.out += `<!----> <p class="mt-2 text-center text-sm text-gray-500">Kilde: <a class="text-blue-500 underline" href="https://opencom.no/dataset/offentlige-leke-og-moteplasser/resource/7417b7a0-cfd8-492b-9f2d-275d61e3fc0f?view_id=cc79e018-4e24-46d2-91b1-4273e67a30cc">Offentlige leke- og møteplasser i Norge 2023</a></p></div>`;
}
export {
  _page as default
};

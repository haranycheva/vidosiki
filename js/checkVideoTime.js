import localStorage from "./localStorage.js";
import { refs } from "./refs.js";
import { loadAdd } from "./loadAdd.js";
import { KEY__TIME } from "./localStorage.js";

export async function checkVideoTime() {
  if ((await refs.player.getPaused()) === false) {
    const currTime = await refs.player.getCurrentTime();
    localStorage.save(currTime.toFixed(0), KEY__TIME);
    if (
      currTime.toFixed(0) === "15" ||
      currTime.toFixed(0) === "31" ||
      currTime.toFixed(0) === "44" ||
      currTime.toFixed(0) === "61"
    ) {
      loadAdd();
    }
  }
}

import { refs } from "./refs.js";
import localStorage from "./localStorage.js";
import { KEY__DONATE } from "./localStorage.js";

let addCount = 0;
const loaded = [];
let donated =  localStorage.load(KEY__DONATE) ?  localStorage.load(KEY__DONATE) : false;

export async function loadAdd() {
  if (!donated) {
    const currTime = await refs.player.getCurrentTime();
    if (!loaded.includes(currTime.toFixed(0))) {
      refs.player.pause();
      refs.addModal.classList.remove("is-hidden");
      refs.form.addEventListener("submit", donate);
      refs.addModalCloseBtn.addEventListener(
        "click",
        async function () {
          refs.addModal.classList.add("is-hidden");
          addCount += 1;
          if (addCount !== 3) {
            setTimeout(loadAdd, 1000);
            return;
          }
          loaded.push(currTime.toFixed(0));
          addCount = 0;
          refs.player.play();
        },
        { once: true }
      );
    }
  }
}

function donate(e) {
  e.preventDefault();
  const formData = new FormData(refs.form);
  const saveData = {};
  formData.forEach((v, k) => {
    saveData[k] = v;
  });
  for (const i in saveData) {
    if (!saveData[i]) {
      alert("enter all properties");
      return;
    }
  }
  donated = true;
  localStorage.save(donated, KEY__DONATE)
  refs.addModal.classList.add("is-hidden");
  refs.form.reset();
}

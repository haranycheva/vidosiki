import { refs } from "./refs.js";

export function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    if(!refs.modal.classList.contains("is-hidden")){
        refs.player.pause()
    }
  }
import { refs } from "./js/refs.js";
import { toggleModal } from "./js/toggleModal.js";
import { checkVideoTime } from "./js/checkVideoTime.js";
import localStorage from "./js/localStorage.js";

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    const videoTime = localStorage.load() ? localStorage.load() : 0;
    refs.player.setCurrentTime(videoTime)

    setInterval(checkVideoTime, 1000)
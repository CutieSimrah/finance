const videoTitleEl = document.getElementById("video-title");
const mainVideoEl = document.getElementById("main-video");
const mainSourceEl = document.getElementById("main-source");
const galleryEl = document.getElementById("video-gallery");

function loadRandomFeaturedVideo() {
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  videoTitleEl.innerText = randomVideo.title;
  mainSourceEl.src = randomVideo.link;
  mainVideoEl.load();
}

function renderGallery() {
  galleryEl.innerHTML = "";
  videos.forEach((video) => {
    const thumbWrapper = document.createElement("div");
    thumbWrapper.classList.add("video-thumbnail");

    const thumbVideo = document.createElement("video");
    thumbVideo.src = video.link;
    thumbVideo.muted = true;
    thumbVideo.playsInline = true;
    thumbVideo.preload = "metadata";

    const titleEl = document.createElement("div");
    titleEl.className = "video-thumb-title";
    titleEl.innerText = video.title;

    thumbWrapper.appendChild(thumbVideo);
    thumbWrapper.appendChild(titleEl);

    thumbWrapper.addEventListener("click", () => {
      mainSourceEl.src = video.link;
      videoTitleEl.innerText = video.title;
      mainVideoEl.load();
      mainVideoEl.scrollIntoView({ behavior: "smooth" });
    });

    galleryEl.appendChild(thumbWrapper);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadRandomFeaturedVideo();
  renderGallery();
});

let hasTriggeredFullscreen = false;

function tryFullscreenOnFirstInteraction() {
  if (hasTriggeredFullscreen) return;
  hasTriggeredFullscreen = true;

  const video = document.getElementById("main-video");
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}

document.addEventListener("click", tryFullscreenOnFirstInteraction, {
  once: true,
});

document.addEventListener("click", () => {
  const hint = document.getElementById("fullscreen-hint");
  if (hint) hint.style.display = "none";
});

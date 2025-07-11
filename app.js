let currentVideoIndex = -1;

function loadVideo(index) {
  const video = videos[index];

  const titleEl = document.getElementById("video-title");
  const sourceEl = document.getElementById("video-source");
  const playerEl = document.getElementById("video-player");

  if (titleEl && sourceEl && playerEl) {
    titleEl.innerText = video.title;
    sourceEl.src = video.link;
    playerEl.load();
  } else {
    console.warn("Video player elements not found in DOM yet.");
  }
}


function scrollToVideo() {
  document.getElementById('video-player').scrollIntoView({ behavior: 'smooth' });
}

function loadRandomVideo() {
  currentVideoIndex = Math.floor(Math.random() * videos.length);
  loadVideo(currentVideoIndex);
}

function playNextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  loadVideo(currentVideoIndex);
  document
    .getElementById("video-player")
    .scrollIntoView({ behavior: "smooth" });
}

function populateRelatedVideos() {
  const container = document.getElementById("related-videos");
  container.innerHTML = "";
  videos.forEach((video, index) => {
    const btn = document.createElement("button");
    btn.innerText = video.title;
    btn.onclick = () => {
      currentVideoIndex = index;
      loadVideo(index);
      document
        .getElementById("video-player")
        .scrollIntoView({ behavior: "smooth" });
    };
    container.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderArticles(); // Inject articles + video player into DOM

  setTimeout(() => {
    loadRandomVideo(); // Load random video safely
  }, 50);

  // Scroll animation ONLY for #video
  document.querySelectorAll(".btn-scroll").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#video")?.scrollIntoView({ behavior: "smooth" });
    });
  });
});


const scrollHintHTML = `
  <div class="scroll-down-hint" onclick="scrollToVideo()">⬇ Scroll Down for Video ⬇</div>
`;

const videoPlayerHTML = `
  <div class="video-player">
    <h3 id="video-title"></h3>
    <video id="video-player" controls autoplay>
      <source id="video-source" src="" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <br />
    <button class="next-video-btn" onclick="playNextVideo()">Next Video</button>
  </div>
`;

function renderArticles() {
  const container = document.getElementById("articles-container");
  container.innerHTML = "";

  articles.forEach((article, index) => {
    const section = document.createElement("section");
    section.classList.add("article-section");

    // scroll hint only for the first article
    let html = `
      <h2>${article.title}</h2>
      <div class="slug">${article.slug}</div>
      <div class="summary">${article.summary}</div>
      ${index === 0 ? '' : ""}
    `;

    article.sections.forEach(sec => {
      if (sec.heading) html += `<h3>${sec.heading}</h3>`;
      if (sec.paragraphs) sec.paragraphs.forEach(p => html += `<p>${p}</p>`);
      if (sec.bulletPoints) {
        html += "<ul>";
        sec.bulletPoints.forEach(b => html += `<li>${b}</li>`);
        html += "</ul>";
      }
      if (sec.subsections) {
        sec.subsections.forEach(sub => {
          html += `<h4>${sub.title}</h4><p>${sub.paragraph}</p>`;
          if (sub.bullets) {
            html += "<ul>";
            sub.bullets.forEach(b => html += `<li>${b}</li>`);
            html += "</ul>";
          }
        });
      }
      if (sec.paragraph) html += `<p>${sec.paragraph}</p>`;
    });

    // if (index === 0) {
    //   html += videoPlayerHTML;
    // }

    section.innerHTML = html;
    container.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", renderArticles);

let url = window.location.href;
if (url.includes("youtube.com")) {
  setInterval(() => {
    var skip = document.getElementsByClassName("ytp-ad-skip-button-modern");
    if (skip[0] != null) {
      // console.log("exists");
      skip[0].click();
    } else {
      // console.log("not found");
    }
  }, 1000);
}

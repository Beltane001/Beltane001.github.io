// Carica l'API iframe di YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    videoId: 'mfYVeQq24b4',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'loop': 1,
      'playlist': 'mfYVeQq24b4',
      'mute': 1,
      'playsinline': 1,
      'showinfo': 0,
      'rel': 0,
      'vq': 'hd1080' // Suggerimento qualità HD1080
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.mute();
  event.target.setPlaybackQuality('hd1080'); // Forzatura a 1080p
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  // Quando il video inizia a riprodursi, ri-applica i 1080p per sicurezza
  if (event.data == YT.PlayerState.PLAYING) {
    event.target.setPlaybackQuality('hd1080');
  }
}

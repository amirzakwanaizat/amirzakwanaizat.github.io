  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '260',
      playerVars: {
        version: 1,
        autoplay: 1,        // Auto-play the video on load
        controls: 0,        // Show pause/play buttons in player
        showinfo: 0,        // Hide the video title
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 1,            // Run the video in a loop
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 0,         // Hide video controls when playing      
        playlist: 'GDGPs3dJeIM'
      },
      videoId: 'GDGPs3dJeIM',
      events: {
        onReady: function(e) {
          e.target.mute();
        }
      }
    });
  }
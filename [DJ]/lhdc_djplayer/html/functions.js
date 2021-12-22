$(function () {
  let initSongs = 30 //-----------------------------NUMBER OF SONGS IN USE---------------------------------
  let listContainer = document.getElementById('list');
  for (let i = 0; i < initSongs; i++) {
    let newSong = '<div class="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="' + i + '">' +
      '<span class="song-number-now-playing">' +
      '<span class="number">' + (i+1) + '</span>' +
      '<img class="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/now-playing.svg"/>' +
      '</span>' +
      '<div class="song-meta-container">' +
      '<span class="song-name" data-amplitude-song-info="name" data-amplitude-song-index="' + i + '"></span>' +
      '<span class="song-artist-album"><span data-amplitude-song-info="artist" data-amplitude-song-index="' + i + '"></span> <span data-amplitude-song-info="album" data-amplitude-song-index="' + i + '"></span></span>' +
      '</div>' +
    '</div>';

    listContainer.innerHTML = listContainer.innerHTML + newSong
  }
  Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "volume": 10,
    "default_album_art": "sounds/covers/No_cover.jpg",

//-------------------------------ADD YOUR SONGS HERE (FOLLOW THE TEMPLATE)-------------------------------
songs: [
//---1
      {
	"name": "Elektro",
	"artist": "Dynoro",
	"url": "sounds/elektro.mp3",
	"cover_art_url": "sounds/covers/elektro.jpg"
      },
//---2
      {
	"name": "Sandstorm",
	"artist": "Darude",
	"url": "sounds/Sandstorm.mp3",
	"cover_art_url": "sounds/covers/Sandstorm.jpg"
      },
//---3
      {
	"name": "All Fall Down",
	"artist": "Camo & Krooked ft Shaz Sparks",
	"url": "sounds/All_Fall_Down.mp3",
	"cover_art_url": "sounds/covers/All_Fall_Down.jpg"
      },
//---4
      {
	"name": "Adagio (Phynn Remix)",
	"artist": "DJ Tiesto",
	"url": "sounds/Adagio.mp3",
	"cover_art_url": "sounds/covers/Adagio.jpg"
      },
//---5
      {
	"name": "Aerodynamic",
	"artist": "Daft Punk",
	"url": "sounds/Aerodynamic.mp3",
	"cover_art_url": "sounds/covers/Aerodynamic.jpg"
      },
//---6
      {
	"name": "Crush (PVD Album Remix)",
	"artist": "Paul Van Dyk",
	"url": "sounds/Crush.mp3",
	"cover_art_url": "sounds/covers/Crush.jpg"
      },
//---7
      {
	"name": "Karma (FK Remix)",
	"artist": "Sami Zreik",
	"url": "sounds/Karma.mp3",
	"cover_art_url": "sounds/covers/Karma.jpg"
      },
//---8
      {
	"name": "Crush (PVD Album Remix)",
	"artist": "Paul Van Dyk",
	"url": "sounds/Crush.mp3",
	"cover_art_url": "sounds/covers/Crush.jpg"
      },
//---9
      {
	"name": "Ghost in the Machine",
	"artist": "Blasterjaxx",
	"url": "sounds/Ghost_in_the_Machine.mp3",
	"cover_art_url": "sounds/covers/Ghost_in_the_Machine.png"
      },
//--10
      {
	"name": "Spectre",
	"artist": "Alan Waler",
	"url": "sounds/Spectre.mp3",
	"cover_art_url": "sounds/covers/Spectre.jpg"
      },
//--11
      {
	"name": "Movin Melodies",
	"artist": "ATB",
	"url": "sounds/Movin_Melodies.mp3",
	"cover_art_url": "sounds/covers/Movin_Melodies.jpg"
      },
//--12
      {
	"name": "Children",
	"artist": "Robert Miles",
	"url": "sounds/Children.mp3",
	"cover_art_url": "sounds/covers/Children.jpg"
      },
//--13
      {
	"name": "DotA",
	"artist": "Basshunter",
	"url": "sounds/DotA.mp3",
	"cover_art_url": "sounds/covers/DotA.jpg"
      },
//--14
      {
	"name": "Overdrive (With Ummet Ozcan)",
	"artist": "Calvin Harris",
	"url": "sounds/Overdrive.mp3",
	"cover_art_url": "sounds/covers/Overdrive.jpg"
      },
//--15
      {
	"name": "Played-A-Live (The Bongo Song)",
	"artist": "Safri Duo",
	"url": "sounds/Played-A-Live.mp3",
	"cover_art_url": "sounds/covers/Played-A-Live.jpg"
      },
//--16
      {
	"name": "Exceptionally Beautiful",
	"artist": "Loop Control",
	"url": "sounds/Exceptionally_Beautiful.mp3",
	"cover_art_url": "sounds/covers/Exceptionally_Beautiful.jpg"
      },
//--17
      {
	"name": "The Devils Den (Skrillex & Wolfgang Gartner",
	"artist": "Skrillex",
	"url": "sounds/The_Devils_Den.mp3",
	"cover_art_url": "sounds/covers/The_Devils_Den.jpg"
      },
//--18
      {
	"name": "Sparkles (Transa Remix)",
	"artist": "DJ Tiesto",
	"url": "sounds/Sparkles.mp3",
	"cover_art_url": "sounds/covers/Sparkles.jpg"
      },
//--19
      {
	"name": "Voodoo",
	"artist": "Jay Hardway",
	"url": "sounds/Voodoo.mp3",
	"cover_art_url": "sounds/covers/Voodoo.jpg"
      },
//--20
      {
	"name": "Alone",
	"artist": "MarshMello",
	"url": "sounds/Alone.mp3",
	"cover_art_url": "sounds/covers/Alone.jpg"
      },
//--21
      {
	"name": "Go On(Smoke Edit)",
	"artist": "Skrillex",
	"url": "sounds/Go_On.mp3",
	"cover_art_url": "sounds/covers/Go_On.jpg"
      },
//--22
      {
	"name": "Addicted to You",
	"artist": "Aviicii",
	"url": "sounds/Addicted_To_You.mp3",
	"cover_art_url": "sounds/covers/Addicted_To_You.jpg"
      },
//--23
      {
	"name": "Animals",
	"artist": "Martin Garrix",
	"url": "sounds/Animals.mp3",
	"cover_art_url": "sounds/covers/Animals.jpg"
      },
//--24
      {
	"name": "Next to You",
	"artist": "Darude",
	"url": "sounds/Next_to_You.mp3",
	"cover_art_url": "sounds/covers/Next_to_You.jpg"
      },
//--25
      {
	"name": "Encoded",
	"artist": "Hardwell",
	"url": "sounds/Encoded.mp3",
	"cover_art_url": "sounds/covers/Encoded.jpg"
      },
//--26
      {
	"name": "October",
	"artist": "deadmau5",
	"url": "sounds/October.mp3",
	"cover_art_url": "sounds/covers/October.jpg"
      },
//--27
      {
	"name": "United We Are (feat. Amba Shepherd)",
	"artist": "Hardwell",
	"url": "sounds/Spectre.mp3",
	"cover_art_url": "sounds/covers/Spectre.jpg"
      },
//--28
      {
	"name": "Flash Funk",
	"artist": "Marshmello",
	"url": "sounds/Flash_Funk.mp3",
	"cover_art_url": "sounds/covers/Flash_Funk.jpg"
      },
//--29
      {
	"name": "Samb-Adagio",
	"artist": "Safri Duo",
	"url": "sounds/Samb-Adagio.mp3",
	"cover_art_url": "sounds/covers/Samb-Adagio.jpg"
      },
//--30
      {
	"name": "Summer",
	"artist": "Calvin Harris",
	"url": "sounds/Summer.mp3",
	"cover_art_url": "sounds/covers/Summer.jpg"
      },

],
    
    callbacks: {
      song_change: function(){
        Amplitude.setVolume(0)
        $.post("http://lhdc_djplayer/newsong", JSON.stringify({
          song: Amplitude.getActiveIndex()
        }))
        return
      },
      // play: function(){
      //   $.post('http://lhdc_djplayer/play', JSON.stringify({}));
      //   return
      // },

      // pause: function(){
      //   $.post('http://lhdc_djplayer/pause', JSON.stringify({}));
      //   return
      // },
    }
  });
  function display(bool) {
      if (bool) {
          $("#flat-black-player-container").show();
      } else {
          $("#flat-black-player-container").hide();
      }
  }
  display(false)
  window.addEventListener('message', function(event) {
      var item = event.data;
      if (item.type === "ui") {
          if (item.status == true) {
              display(true)
          } else {
              display(false)
          }
  }
  if (item.musiccommand == 'playsong') {
    if (Amplitude.getActiveIndex() !== item.songname) {
      Amplitude.setVolume(0)
      Amplitude.playSongAtIndex(item.songname)
      Amplitude.setVolume(0)
    }
  } else if (item.musiccommand == 'pause') {
    Amplitude.pause()
  } else if (item.musiccommand == 'play') {
    Amplitude.play()
  } else if (item.musiccommand == 'seek') {
    Amplitude.setSongPlayedPercentage(item.songname)
  } else if (item.setvolume !== undefined) {
  if (item.setvolume >= 0.0 && item.setvolume <= 1.0) {
    var vol = item.setvolume;
    var corrigir = vol.toFixed(2);
    var resultado = (corrigir).replace('.','');
    var menosum = (resultado).substr(1);
    Amplitude.setVolume(menosum)
    }
  }
})
  document.onkeyup = function (data) {
      if (data.key == "Escape") {
          $.post('http://lhdc_djplayer/exit', JSON.stringify({}));
          return
      }
  };
  document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
      var list = document.getElementById('list');
      list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';
      document.getElementById('list-screen').classList.remove('slide-out-top');
      document.getElementById('list-screen').classList.add('slide-in-top');
      document.getElementById('list-screen').style.display = "block";
    });
  document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
      document.getElementById('list-screen').classList.remove('slide-in-top');
      document.getElementById('list-screen').classList.add('slide-out-top');
      document.getElementById('list-screen').style.display = "none";
    });
    
  document.getElementById('song-played-progress').addEventListener('click', function( e ){
      var offset = this.getBoundingClientRect();
      var x = e.pageX - offset.left;
      Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
      $.post("http://lhdc_djplayer/seek", JSON.stringify({
        pos: ((parseFloat(x) / parseFloat(this.offsetWidth)) * 100)
    }))
    });
  document.getElementById('previous').addEventListener('click', function( e ){
      Amplitude.setVolume(0)
      $.post("http://lhdc_djplayer/newsong", JSON.stringify({
        song: Amplitude.getActiveIndex()
      }))
    });
  document.getElementById('next').addEventListener('click', function( e ){
      Amplitude.setVolume(0)
      $.post("http://lhdc_djplayer/newsong", JSON.stringify({
        song: Amplitude.getActiveIndex()
      }))
    });
  document.getElementById('play-pause').addEventListener('click', function( e ){
      let playPauseButtonClass = document.getElementById('play-pause').className
      if (playPauseButtonClass.includes("paused")) {
          $.post('http://lhdc_djplayer/pause', JSON.stringify({}));
          return
      } else {
          $.post('http://lhdc_djplayer/play', JSON.stringify({}));
          return
      }
    });
    // document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';
})
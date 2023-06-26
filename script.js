// // let sound = () =>{
// // let snd = new Audio('song/Aashiqui aa gai.mp3');
// // snd.play()
// // }

// const playButtons = document.querySelectorAll('.part-3');

// // Attach click event listener to each play button
// playButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         // Retrieve the audio file URL associated with the play button
//         const audioURL = button.dataset.audio;

//         // Create an Audio object and play the audio
//         const audio = new Audio(audioURL);
//         audio.play();
//     });
// });


const playButtons = document.querySelectorAll('.part-3');
let currentAudio = null;
let currentButton = null;

playButtons.forEach(button => {
  let isPlaying = false;
  let audio = null;
  const icon = button.querySelector('.btn');

  button.addEventListener('click', function() {
    const audioURL = button.dataset.audio;

    if (currentAudio && currentAudio !== audio) {
      // Stop the currently playing audio if it's different from the new audio
      currentAudio.pause();
      currentAudio.currentTime = 0;
      isPlaying = false;
      currentButton.querySelector('.btn').src = 'play-button.png';
    }

    if (!isPlaying) {
      audio = new Audio(audioURL);
      audio.play();
      isPlaying = true;
      icon.src = 'pause.png';
      currentAudio = audio;
      currentButton = button;
    } else {
      audio.pause();
      isPlaying = false;
      icon.src = 'play-button.png';
      currentAudio = null;
      currentButton = null;
    }
    audio.addEventListener('ended', function() {
        isPlaying = false;
        icon.src = 'play-button.png';
        currentAudio = null;
        currentButton = null;
        });
    });
});

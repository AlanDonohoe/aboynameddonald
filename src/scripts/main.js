const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const buttonClose = document.querySelector('.modal-close-button');
const buttonOpen = document.querySelector('.modal-open-button');
const videoPlayer = document.querySelector('.video-player');

const hideModalPauseVideo = function() {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
  videoPlayer.pause();
};

const showModalPlayVideo = function(){
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
  videoPlayer.play();
};

buttonClose.addEventListener('click', function() {
  hideModalPauseVideo();
});

buttonOpen.addEventListener('click', function() {
  showModalPlayVideo();
});

modalOverlay.addEventListener('click', function() {
  hideModalPauseVideo();
});
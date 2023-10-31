const gymVideo = () => {
  const videoContainer = document.querySelector('[data-video-wrapper]');
  const videoPoster = videoContainer.querySelector('[data-poster]');
  const videoButton = videoContainer.querySelector('[data-button]');

  const createIframe = () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw';
    iframe.width = '364';
    iframe.height = '228';
    iframe.title = 'Видео из тренажерного зала.';
    videoContainer.appendChild(iframe);
  };

  const onVideoButtonClick = () => {
    createIframe();
    videoPoster.style.display = 'none';
    videoButton.style.display = 'none';
  };

  videoButton.addEventListener('click', onVideoButtonClick);
};

export {gymVideo};

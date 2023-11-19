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
    iframe.style.display = 'none';

    // Показываем индикатор загрузки
    const loadingIndicator = document.createElement('div');
    loadingIndicator.textContent = 'Загрузка видео...';
    loadingIndicator.style.maxWidth = '364px';
    videoContainer.appendChild(loadingIndicator);

    // Добавляем слушатель события "load" к iframe
    iframe.addEventListener('load', () => {
      // После загрузки видео скрываем индикатор загрузки
      loadingIndicator.remove();

      iframe.style.display = 'block';
      // После загрузки видео скрываем videoPoster и videoButton
      videoPoster.style.display = 'none';
      videoButton.style.display = 'none';
    });

    videoContainer.appendChild(iframe);
  };

  const onVideoButtonClick = () => {
    videoButton.disabled = true;
    createIframe();
  };

  videoButton.addEventListener('click', onVideoButtonClick);
};

export {gymVideo};

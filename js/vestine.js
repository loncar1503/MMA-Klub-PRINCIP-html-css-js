const images = document.querySelectorAll('.skill-image');

images.forEach((image) => {
  image.addEventListener('click', (e) => {
    if (e.target.style.transform == 'rotate(180deg)')
      e.target.style.transform = 'rotate(0deg)';
    else e.target.style.transform = 'rotate(180deg)';

    if (
      images[0].style.transform == 'rotate(180deg)' &&
      images[1].style.transform == 'rotate(180deg)' &&
      images[2].style.transform == 'rotate(180deg)'
    )
      setTimeout(() => alert('Sve tri slike su okrenute!'), 0);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const profileAvatar = document.querySelector('.profile-avatar');
  const heroCopy = document.querySelector('.hero-copy h1');

  if (profileAvatar) {
    profileAvatar.addEventListener('mouseenter', () => {
      profileAvatar.style.transform = 'translateY(-4px) scale(1.02)';
      profileAvatar.style.transition = 'transform 0.25s ease';
    });

    profileAvatar.addEventListener('mouseleave', () => {
      profileAvatar.style.transform = 'translateY(0) scale(1)';
    });
  }

  if (heroCopy) {
    heroCopy.style.textShadow = '0 0 24px rgba(103, 232, 249, 0.15)';
  }
});

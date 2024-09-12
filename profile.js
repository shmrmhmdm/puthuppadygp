const viewProfileLink = document.querySelector('.view-profile-link');
const presidentProfile = document.querySelector('.president-profile');

viewProfileLink.addEventListener('click', () => {
    // Toggle the visibility of the profile container
    presidentProfile.style.display = presidentProfile.style.display === 'block' ? 'none' : 'block';
});
const profile = document.querySelector('.card__content__profile');
const shareIcons = document.querySelector('.card__content__share-icons');
const shareBtn = document.querySelector('.card__content__button');

shareBtn.addEventListener('click', ()=>{
	console.log('click')
	profile.classList.toggle('hidden');
	shareIcons.classList.toggle('show');
	shareBtn.classList.toggle('rotate');
});
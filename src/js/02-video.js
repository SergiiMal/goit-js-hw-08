	 import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time'; 

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
	localStorage.setItem(LOCALSTORAGE_KEY, seconds)
};


function load() {
	const dataStoreage = localStorage.getItem(LOCALSTORAGE_KEY)
	if (dataStoreage) {
		player.setCurrentTime(dataStoreage);
	}
};


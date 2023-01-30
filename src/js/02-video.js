	 import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
	localStorage.setItem('videoplayer-current-time', seconds)
};


function load() {
	const dataStoreage = localStorage.getItem('videoplayer-current-time')
	if (dataStoreage) {
		player.setCurrentTime(dataStoreage);
	}
}
// const load = key => {
  
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };


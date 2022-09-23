
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const SECONDS = 'videoplayer-current-time'
  
        const iframe = document.querySelector('iframe');
        const player = new Player(iframe);

    player.on('timeupdate',throttle(onPlayer, 1000));
   
function onPlayer({seconds}) {

    localStorage.setItem(SECONDS, seconds) 

}
 
 player.setCurrentTime(localStorage.getItem(SECONDS)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});



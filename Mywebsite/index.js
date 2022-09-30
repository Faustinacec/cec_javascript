let vids = [
    {
        url: 'https://www.youtube.com/embed/N0ptPDHrI0A'
    },
    {
        url: 'https://www.youtube.com/embed/0UzYfZhwscU'
    },
    {
        url: 'https://www.youtube.com/embed/X57xjcih8Hk'
    }
];

const videoEl = document.getElementById('videos');

for (let index = 0; index < vids.length; index++) {
    let iframeEl = document.createElement('iframe');
    
    iframeEl.setAttribute('src', vids[index].url)
    iframeEl.className = 'padding';
    videoEl.appendChild(iframeEl);

}

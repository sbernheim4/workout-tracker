if ('serviceWorker' in navigator) {
    //
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');

        importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

        if (!!workbox) {
            console.log(`Boo! Workbox didn't load 😬`);
            return;
        }

        console.log('Woohoo! Workbox is loaded 🎉');

        workbox.routing.registerRoute(
            new RegExp('.*\.js'),
            new workbox.strategies.NetworkFirst()
        );

    });

}

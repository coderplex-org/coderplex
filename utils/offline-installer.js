if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', {
      scope: './',
    })
    .then(reg => {
      console.log('sw rules here');
      reg.onupdatefound = function() {
        const installingWorker = reg.installing;

        installingWorker.onstatechange = function() {
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                console.log('New or updated content is available.');
              } else {
                console.log('Content is now available offline!');
              }
              break;
            case 'redundant':
              console.log('The installing serviceWorker became redundant.');
              break;
            default:
              console.log('default case');
          }
        };
      };
    })
    .catch(err => {
      console.error('Error during service worker registration:', err);
    });
}

const publicVapidKey = "BMlsZvecrJfZdsIBuVDRgko3xbUvNR3ibpYwEjeh4FDZDr5lfRaHsYfMud83rFP5hVqXWCEJ6e3BigVTEbLU";

if('serviceWorker' in navigator) {

    send().catch(err => console.error(err))

}

async function send() {
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    });

    console.log('registerd sw')

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey
    });

    console.log('registerd push')
}
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Dies muss die gleiche Konfiguration wie in der index.html sein
firebase.initializeApp({
  apiKey: "DEIN_API_KEY",
  projectId: "DEIN_PROJEKT",
  messagingSenderId: "DEINE_SENDER_ID",
  appId: "DEINE_APP_ID"
});

const messaging = firebase.messaging();

// Hintergrund-Nachrichten verarbeiten
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // Optional: Ein Icon-Bild in dein GitHub Repo legen
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

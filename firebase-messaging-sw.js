importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const urlParams = new URLSearchParams(self.location.search);
firebase.initializeApp({
  apiKey: urlParams.get('apiKey'),
  projectId: urlParams.get('projectId'),
  messagingSenderId: urlParams.get('senderId'),
  appId: urlParams.get('appId')
});
const messaging = firebase.messaging();
// Mehr braucht diese Datei nicht! Firebase übernimmt den Rest automatisch.

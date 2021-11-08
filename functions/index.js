const siteServerFunction = require('./site_server');
const firebase = require('firebase');

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBafCuZ4jZnO4Vw0r8gw-Ggw5Cdf7pwmSg",
    authDomain: "stock-funnel.firebaseapp.com",
    projectId: "stock-funnel",
    storageBucket: "stock-funnel.appspot.com",
    messagingSenderId: "91550278246",
    appId: "1:91550278246:web:ab14148c241955c62c43a7"
};

if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
}

const functions = require('firebase-functions');
const db = firebase.firestore();

const runtimeOpts = {
    timeoutSeconds: 100,
    memory: '1GB'
}

exports.siteServerFunction = functions.runWith(runtimeOpts).https.onRequest(async (req, res) => {
    answer = await siteServerFunction.handler(req, res, db); 
});
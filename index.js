/**
 * Webpush
 */
const publicVapidKey = 'BMlsZvecrJfZdsIBuVDRgko3xbUvNR3ibpYwEjeh4FDZDr5lfRaHsYfMud83rFP5hVqXWCEJ6e3BigVTEbLU-pg';
const privateVapidKey = 'R4t2026d0mYkOwi3ZSB6C9KJFKOM3pHIXbCixmRRTIU';

const webpush = require('web-push');
webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    publicVapidKey,
    privateVapidKey
);

/**
 * Express
 */

const express = require('express');
const app = express();

//
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));

//
app.post('/subscribe', (req, res) => {
    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ title: 'Push test' });

    webpush.sendNotification(subscription, payload).catch(err => console.error(err))
})

//
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
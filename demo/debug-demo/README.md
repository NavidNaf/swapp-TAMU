# SWAPP Debug Demo

This demo shows a minimal web app using SWAPP with verbose console logging to help understand the request and response pipeline.

## Getting started

1. Serve the repository root (for example with `npx serve .` or any static HTTP server).
2. Visit `http://localhost:<port>/demo/debug-demo/index.html`.
3. Open the browser DevTools console to follow the logs produced by the page script, service worker, and SWAPP debug logger app.
4. Click **Fetch sample text** to issue a request that flows through SWAPP; inspect the console to observe each stage.

## Files

- `index.html` – Registers the service worker and exposes a button to trigger fetches while logging activity.
- `sw.js` – Imports `Storage.js`, `swapp.js`, and the demo logger app, and adds console debugging to lifecycle and fetch events.
- `apps/debug_logger.js` – Minimal SWAPP app that logs request/response processing and injects a document-side handler for additional debugging.
- `sample.txt` – Static resource used to demonstrate SW intercepts.

# Welcome to The Progressive Web App Template

This template is a “batteries not included” starting point for web projects. There’s very few decisions made in advance for developers to allow for more adoptability across use cases. The few choices that made will be covered the subsequent sections.

## The HTML(s)

The decision to include HTML content, inline styling, and svg was done intentionally for the purpose of creating an application shell (or app shell). The app shell is a minimal required HTML, CSS, and JavaScript to display the user interface and when cache ensure reliably good performance to users on subsequent visits.

**Other Benefits**

- Improve perceived performance as measured by the First Contentful Paint score.
- One less server request (minor benefit).

### Offline HTML

The `offline.html` file is included as a navigation fallback in the case of network failure. This is done with the help of a service worker created in the build process using Workbox.

## PWA & Service Worker Usage

The progressive web app and service worker capabilities are implemented using the `vite-plugin-pwa` package which partially uses Workbox under the hood.

## Commands

- To run development: `npm run dev`
- To build: `npm run build`
- To test PWA & service worker capabilities run: `npm run build && npm run https-preview`
- Check bundle size: `npm run bundle-size`

## Resources

1. Understanding Workbox  [https://developers.google.com/web/tools/workbox/guides/get-started](https://developers.google.com/web/tools/workbox/guides/get-started)


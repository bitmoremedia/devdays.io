# devdays.io

Bookmarkable and shareable development day countdown timer

## Features

* Show the dev days left until a given event
* Show the calendar days/weeks/months/years until a given event
* Bookmark timer dashboards for easy access
* Share timer dashbards with others (via URL)
* Serveless (app state is held in the URL)
* Offline capable

## Tech Stack

* Create React App (un ejected)
* React App Rewired (to apply webpack overrides without ejecting CRA)
* Styled Components (with babel-plugin-styled-components for debugging)
* Hosted on github pages with a custom domain https://devdays.io
* Cloudflare CDN (to enable https for custom domain)
* Custom 404.html using [spa-github-pages](https://github.com/rafrex/spa-github-pages) (to enable SPA on github pages)
* Prettier
* VSCode config (recommended extensions, snippets and debug launch config)
* Yarn

## Notable Dependencies

* [react-scripts](https://github.com/facebook/create-react-app)
* [react-app-rewired](https://github.com/timarney/react-app-rewired)
* [styled-components](https://github.com/styled-components/styled-components)
* [react-app-rewire-styled-components](https://github.com/withspectrum/react-app-rewire-styled-components)
* [react-animations](https://github.com/FormidableLabs/react-animations)
* [moment](https://github.com/moment/moment)
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* [react-helmet](https://github.com/nfl/react-helmet)
* [gh-pages](https://github.com/tschaub/gh-pages)

## Notes

* The cache setting for the service-worker.js file (set on Cloudflare) is to expire after 10 minutes

## Scripts

| Script | Usage                                            |
| ------ | ------------------------------------------------ |
| start  | run local development environment                |
| build  | generate production build to public folder       |
| test   | run e2e tests                                    |
| format | run prettier against all files in /src folder    |
| deploy | publish current app to github on gh-pages branch |

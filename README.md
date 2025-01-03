# GA_Universe Docs

This website provides documentation for the [No 1 Low-Code/No-Code Platform](https://ga-universe.com) GA Universe.

### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

#### Local Development with specified host

```
$ npx docusaurus start --host IPADDRESS
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve

```
$ npx docusaurus serve --host IPADDRESS
```

This command serves the build directory on the specified IP Address.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### TypeSense DocSearch

Indexes are currently hosted locally. TypeSense uses the DocSearch scraper, [here](https://typesense.org/docs/guide/docsearch.html#step-1-set-up-docsearch-scraper) is a guide on how to use it.

In general for the search to work, every time a markdown file is edited/added, indexes must be regenerated, this can be done by doing the following:
- Add the new URLs to the `config.json` file, specifically under `site_urls` array
- Run the scraper as per the guide linked

> To run the scraper, clone [this repo](https://github.com/PupilTong/typesense-docsearch-scraper), add the Dockerfile that is in this repo to the newly cloned typesense-docsearch-scraper repo, build using `docker build .`, then run the image as per the following command.
> > Note: This was used because typesense-docsearch-scraper docker image doesn't have support for ARM64 architecture

```bash
docker run -it --env-file=/path/to/your/.env -e "CONFIG=$(cat config.json | jq -r tostring)" <IMAGE-ID>

```

#### Future work for the search

Automate the process of adding URLs to the `config.json` every time the project is built

FROM pupiltong/typesense-docsearch-scraper-base

WORKDIR /root

COPY scraper/src ./src

ENTRYPOINT ["pipenv", "run", "python", "-m", "src.index"]

# 2023 modern react with redux

version 2

## books-react - list of books persisted with outside API

    "scripts": {
        "server": "json-server -p 3001 --watch db.json"
    }

**Note: `-p 3001` changes the port the server listens to (alternate syntax --port)**

**Note: `--watch db.json` tells the server to store data in the db.json file**

## Standalone API client

We will be using `Standalone API Client` that is built into VSCode - install the extension `rest client` - create a file `api.http` in the root

## in the case of a possible RequestError: connect ECONNREFUSED

**Note: some students ran into a RequestError: connect ECONNREFUSED 127.0.0.1:3001 - a work around is updating the script to**

    "scripts": {
        "server": "json-server -p 3001 --watch db.json --host 127.0.0.1"
    }

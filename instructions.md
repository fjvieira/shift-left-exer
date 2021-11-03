# Instructions

## Requirements

- Node v14 or higher. Use nvm to manage node installations. Install using:
    ```
    https://github.com/nvm-sh/nvm#install--update-script
    ```

- NPM dependencies:

    ```bash
    npm install
    ```

## Runtime

Check index.js to see port and routes. Command to start the server:

```bash
npm start
```

## Scripts with data samples

POST some SPO2 values

```bash
bash test/post-spo2.sh 97
bash test/post-spo2.sh 98
bash test/post-spo2.sh 99
```

GET the statistics

```bash
 bash test/fetch-stats.sh
```

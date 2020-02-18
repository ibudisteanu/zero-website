# PandoraPay Website

Just the landing page for PandoraPay
Developed with Server Side Rendering (SSR) in Vue2.js

## Requirements

Node.js

## Installation

```
npm install
```

## Running

```
npm run dev
```

## Deploy

```
npm run build
npm run start
```


## Deploy PM2

install PM2
```
npm install pm2 -g
```

build it

```
npm run build
pm2 start npm -- start
pm2 restart 'processId' --name front
```

new version

```
npm run build
pm2 restart front
```
#!/bin/bash
set -e

if [ "$NODE_ENV" = "development" ]; then
    npm i 
    npx prisma migrate dev
    npm run dev
elif [ "$NODE_ENV" = "homolog" ]; then
    npm run build
    npx prisma migrate deploy
    node build/global/infra/http/server.js
else 
    npm run build
fi

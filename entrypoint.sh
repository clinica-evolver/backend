#!/bin/bash
set -e

npm i 
npx prisma migrate dev
npm run dev
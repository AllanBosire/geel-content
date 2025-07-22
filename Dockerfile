FROM node:22-alpine

WORKDIR /

COPY package.json pnpm-*.yaml ./
RUN corepack enable

RUN pnpm install

COPY . .

RUN pnpm nuxt prepare && pnpm run build && pnpm prune --prod --ignore-scripts

CMD ["node", ".output/server/index.mjs"]
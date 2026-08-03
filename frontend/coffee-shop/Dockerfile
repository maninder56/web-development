# 1. Install dependencies
FROM dhi.io/node:26-alpine3.23-dev AS dependencies

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --no-audit --no-fund


# 2. Build the Next.js application
FROM dhi.io/node:26-alpine3.23-dev AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

ENV NODE_ENV=production

RUN npm run build


# 3. Run NEXT.js application
FROM dhi.io/node:26-alpine3.23-dev AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder --chown=node:node /app/public ./public

RUN mkdir .next
RUN chown node:node .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static


# Switch to non-root user for security best practices
USER node

EXPOSE 3000 


# Start Next.js standalone server
CMD ["node", "server.js"]
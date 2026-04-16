# Multi-stage Dockerfile for JMM Alumínios site (TanStack Start on Node).
# Builds a minimal production image suitable for EasyPanel.

# ---------- Stage 1: build ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install deps with the lockfile for reproducible builds
COPY package.json package-lock.json* bun.lockb* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy source and build
COPY . .
RUN npm run build

# ---------- Stage 2: runtime ----------
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy the self-contained .output produced by the build
COPY --from=build /app/.output ./.output

# Install only runtime deps (srvx) inside .output
WORKDIR /app/.output
RUN npm install --omit=dev --no-audit --no-fund

WORKDIR /app
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

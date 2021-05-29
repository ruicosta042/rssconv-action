#!/usr/bin/env bash

rimraf ./bin
esbuild src/index.ts --bundle --platform=node --outfile=bin/index.js

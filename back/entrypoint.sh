#!/bin/bash

npm install --quiet --save-dev

# this next line runs the docker command
exec "$@"

#!/bin/bash
set -e

spo2value=${1:-96}
curl http://localhost:3000/pm-params -H 'Content-type: application/json' -d '{"spo2": '$spo2value}

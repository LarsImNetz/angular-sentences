#!/bin/sh

HOSTNAME=$(hostname)

if [ "$HOSTNAME" == "pandemonium" ]; then
    curl http://localhost:8008/sentences-rest-server/satz/test
    FAILURE=$?
    echo "FAILURE: $FAILURE"
    # elif [ "$HOSTNAME" == "w7e186" ]; then
fi

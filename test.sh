#!/bin/sh

HOSTNAME=$(hostname)

if [ "$HOSTNAME" == "pandemonium" ]; then
    curl http://localhost:8008/sentences-rest-server/satz/test
    FAILURE=$?
    echo "FAILURE: $FAILURE"
elif [ "$HOSTNAME" == "iapetus" ]; then
    curl http://localhost:8080/sentences-rest-server/satz/test
fi

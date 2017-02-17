#!/bin/sh

HOSTNAME=$(hostname)
HOSTTOTEST=${1:-$HOSTNAME}

if [ "$HOSTTOTEST" == "pandemonium" ]; then
    curl http://localhost:8008/sentences-rest-server/satz/test
    FAILURE=$?
    echo "FAILURE: $FAILURE"
elif [ "$HOSTTOTEST" == "moon" ]; then
    curl http://moonserver.homenet.org:8080/sentencesrestbeanserver/satz/test
fi

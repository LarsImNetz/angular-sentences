#!/bin/bash
#
# npm build helper
#

HOSTNAME=$(hostname)

if [ "$HOSTNAME" == "W7E186" ]; then
    npm run build-local
elif [ "$HOSTNAME" == "pandemonium" -o "$HOSTNAME" == "iapetus" ]; then
    npm run build-home
else
    echo "ERROR: unknown System $HOSTNAME"
    exit 1
fi


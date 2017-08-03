#!/bin/sh

DISTFILES=$(pwd)/dist
APP="sentences"

if [ ! -e $DISTFILES ]; then
    DISTFILES=
fi

if [ -z "$DISTFILES" ]; then
    echo "Auch suchen hat keine DIST files gefunden, Abbruch!"
    exit 1
fi

FINDMOON=$(L findmoon)

echo "deliver $WARFILES to $FINDMOON with $USER"
PATHNAME=/var/www/moonserver/htdocs/$APP
SSH_OPT='-p 21007'
SCP_OPT='-P 21007'

USERNAME=lars

rsync -avz -e "ssh $SSH_OPT" ${DISTFILES}/ $USERNAME@${FINDMOON}:$PATHNAME

#!/bin/bash

CERT_PATH="/etc/letsencrypt/live/default"

if [[ ! -f "$CERT_PATH/privkey.pem" || ! -f "$CERT_PATH/fullchain.pem" ]]; then
    openssl req -x509 -nodes -newkey rsa:2048 -days 1 -keyout "$CERT_PATH/privkey.pem" -out "$CERT_PATH/fullchain.pem" -subj '/CN=localhost'
    chown -R 1000:1000 $CERT_PATH
fi

nginx

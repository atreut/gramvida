FROM node:20

RUN \
  apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y build-essential make gcc g++ python3 python3-dev python3-pip python3-virtualenv python-is-python3 && \
  apt-get -y install ghostscript && apt-get clean && \
  apt-get install -y libgs-dev && \
  apt-get install poppler-utils -y
FROM nginx:alpine

COPY nginx.conf /etc/nginx/

RUN apk update \
    && apk upgrade \
    && apk add --no-cache openssl \
    && apk add --no-cache bash \
    && apk add --no-cache curl

RUN set -x ; \
    addgroup -g 82 -S www-data ; \
    adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

RUN rm /etc/nginx/conf.d/default.conf

ADD ./startup.sh /opt/startup.sh
RUN sed -i 's/\r//g' /opt/startup.sh && chmod +x /opt/startup.sh
CMD /bin/sh -c 'while :; do sleep 6h & wait ${!}; nginx -s reload; done & /opt/startup.sh'

EXPOSE 80 443

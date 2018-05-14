FROM nginx:alpine

LABEL author="Anthony Norton"

WORKDIR /usr/share/nginx/html

#COPY .//docker/nginx.conf /etc/nginx/nginx.conf
copy ./dist .

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g" "deamon off;"]
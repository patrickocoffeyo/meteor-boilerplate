# Example Dockerfile for meteor
# The following env vars are required (example values):
# -e MONGO_URL=mongodb://xxx.xx.xx.x:27017/appname
# -e ROOT_URL=http://appurl.com
# -e PORT=80
# -e MAIL_URL=smtp://username:password@smtp.sendgrid.net:587

# Installing on Ubuntu Saucy
FROM ubuntu:saucy

RUN apt-get update

# Install NodeJS
RUN apt-get install -y software-properties-common
RUN /usr/bin/apt-add-repository -y ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y nodejs

# Unpack app
ADD ./bundle.tar /root/

# Run app
CMD ["node", "/root/bundle/main.js"]


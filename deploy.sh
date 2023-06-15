#!/bin/bash

echo "Starting deployment..."

# FTP connection details
FTP_HOST="ftp.maxime-dore.com"
FTP_USERNAME=$FTP_USERNAME_SECRET
FTP_PASSWORD=$FTP_PASSWORD_SECRET

# Local build directory
LOCAL_DIR="./dist"

# Remote directory on the cPanel account
REMOTE_DIR="/public_html"

# FTP deployment
lftp -c "set ftp:ssl-allow no; open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_HOST; mirror -R $LOCAL_DIR $REMOTE_DIR"

# Upload .htaccess.production as .htaccess
lftp -c "set ftp:ssl-allow no; open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_HOST; put -O $REMOTE_DIR/.htaccess $LOCAL_DIR/.htaccess.production"

echo "Deployment completed."

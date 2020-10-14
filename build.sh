docker build -t cloud_run_connect_mysql .  
docker tag cloud_run_connect_mysql gcr.io/serverless-vpc-access/cloud_run_connect_mysql
docker push gcr.io/serverless-vpc-access/cloud_run_connect_mysql

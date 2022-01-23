docker build -t star-wars-nginx .

docker run --rm -it  -p 80:80/tcp star-wars-nginx:latest
DOCKER_IMAGE := greed-landing:latest
CONTAINER_NAME := greed-website

.PHONY: build run stop clean

build:
	docker build -t $(DOCKER_IMAGE) .

run:
	docker run -d --name $(CONTAINER_NAME) -p 3000:3000 $(DOCKER_IMAGE)

stop:
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true

clean:
	docker rmi $(DOCKER_IMAGE)

rebuild: stop clean build run
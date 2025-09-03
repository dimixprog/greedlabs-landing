SERVICE_NAME := greedlabs-web

.PHONY: build run stop clean up down

build:
	docker compose build

run:
	docker compose up -d

up:
	docker compose up -d

down:
	docker compose down

stop:
	docker compose stop

clean:
	docker compose down --rmi all --volumes --remove-orphans

rebuild: down build up

logs:
	docker compose logs -f $(SERVICE_NAME)

restart:
	docker compose restart $(SERVICE_NAME)
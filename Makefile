DOCKER_COMPOSE := docker compose
	
ps:
	${DOCKER_COMPOSE} ps

install i:
	${DOCKER_COMPOSE} up -d --build

install-debug id:
	${DOCKER_COMPOSE} up --build

start start-back sb s:
	${DOCKER_COMPOSE} start

stop:
	${DOCKER_COMPOSE} stop

start-front sf:
	cd front && npm run dev

restart r: stop start

logs l:
	$(DOCKER_COMPOSE) logs -f

logs-backend lb:
	$(DOCKER_COMPOSE) logs -f backend

bash-backend bb:
	${DOCKER_COMPOSE} run backend bash

test-back tb:
	${DOCKER_COMPOSE} exec backend npm run test

build-front f:
	cd front && npm run build && rm -rf ../back/front && cp -r dist ../back/front

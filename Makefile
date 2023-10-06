DOCKER_COMPOSE := docker compose
	
ps:
	${DOCKER_COMPOSE} ps

install i:
	${DOCKER_COMPOSE} up --build

start start-back sb:
	${DOCKER_COMPOSE} start

stop:
	${DOCKER_COMPOSE} stop

start-front sf:
	cd front && npm run dev

restart r: stop start

logs l:
	$(DOCKER_COMPOSE) logs -f

bash-backend bb:
	${DOCKER_COMPOSE} run backend bash

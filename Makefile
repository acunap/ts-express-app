run-local:
	docker-compose up -d

stop-local:
	docker-compose stop

down-local:
	docker-compose down

run-tests:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml up

down-tests:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml down
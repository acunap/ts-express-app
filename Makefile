run-local:
	docker-compose up -d --build

stop-local:
	docker-compose stop

down-local:
	docker-compose down --rmi local

run-tests:
	docker-compose -f docker-compose.test.yml up --build

run-e2e-tests:
	docker-compose -f docker-compose.test.yml up api-e2e-tests --build

run-serve-e2e-tests:
	docker-compose -f docker-compose.test.yml up api-e2e-tests-serve --build

down-tests:
	docker-compose -f docker-compose.test.yml down --rmi local
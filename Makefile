run-local:
	docker-compose up -d

stop-local:
	docker-compose stop

down-local:
	docker-compose down --rmi local

run-tests:
	make run-unit-tests
	make run-e2e-tests

run-unit-tests:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml up api-unit-tests

run-e2e-tests:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml up api-e2e-tests

run-serve-e2e-tests:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml up api-e2e-tests-serve

down-tests:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml down --rmi local
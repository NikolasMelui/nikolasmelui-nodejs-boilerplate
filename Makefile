install: ;@echo "Installing dependencies...\n"; \
	npm i;
start: ;@echo "Starting the project...\n"; \
	node ./src/index.js
develop: ;@echo "Starting the project in develop mode with nodemon...\n"; \
	./node_modules/.bin/nodemon ./src/index.js
debug: ;@echo "Starting the project in debug mode with nodemon...\n"; \
	./node_modules/.bin/nodemon . --inspect ./src/index.js
eslint: ;@echo "Eslinting the project...\n"; \
	./node_modules/.bin/eslint ./src/ --max-warnings=0
prettier: ;@echo "Prettiering the project...\n"; \
	./node_modules/.bin/prettier ./src/ --wtire
test: ;@echo "Testing the project...\n"; \
	node ./src/tests

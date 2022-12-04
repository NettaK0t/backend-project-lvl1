#Makefile

brain-games:
	node bin/brain-games.js;
publish: 
	npm publish --dry-run --registry myregistry;
install:
	npm ci;
lint:
	npx eslint .

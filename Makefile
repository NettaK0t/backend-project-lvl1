#Makefile

brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
publish: 
	npm publish --dry-run --registry myregistry
install:
	npm install
lint:
	npx eslint .

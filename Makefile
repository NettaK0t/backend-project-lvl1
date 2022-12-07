#Makefile

brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
publish: 
	npm publish --dry-run --registry myregistry
install:
	npm install
	npm ci
lint:
	npx eslint .
lintfix:
	npx eslint --fix .

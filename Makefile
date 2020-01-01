install:
	npm install

start:
	@npx babel-node src/bin/brain-games.js

even:
	@npx babel-node src/bin/brain-even.js

pub:
	npm publish --dry-run

lint:
	npx eslint .

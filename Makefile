lint:
	npx eslint .

test-with-coverage:
	npm test -- --coverage --coverageProvider=v8

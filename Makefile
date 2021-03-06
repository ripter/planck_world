.PHONY: all build dev-server server lint clean

all: build lint dev-server

build: node_modules/
	npx webpack

dev-server: build
	npx webpack-dev-server --open

server: build
	npx http-server --open

node_modules/: package.json
	npm install
	-touch node_modules/

lint: node_modules/
	npx eslint --fix src/

clean:
	-rm -f package-lock.json
	-rm -r ./node_modules
	-npm cache verify

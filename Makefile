
build:
	@rm -rf dist
	@mkdir dist
	@sed "s/seajs-log/seajs-log-debug/" src/seajs-log.js >dist/seajs-log-debug.js
	@uglifyjs src/seajs-log.js -o dist/seajs-log.js -mc
	@make size

test:
	@make test -C ../seajs

size:
	@../seajs/tools/size.sh seajs-log

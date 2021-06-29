dev: patch
	REACT_APP_DOMAIN=http://localhost:3000 npm start

build: patch
	REACT_APP_DOMAIN=http://localhost:5000 npm run build

release: patch
	REACT_APP_DOMAIN=https://www.heinthanth.com npm run build

host: patch
	REACT_APP_DOMAIN=https://www.heinthanth.com npm run host

patch:
	bash -c 'patch -N --dry-run --silent node_modules/bootstrap-icons/font/bootstrap-icons.css -i icons.patch &>/dev/null && patch node_modules/bootstrap-icons/font/bootstrap-icons.css < icons.patch || exit 0'

serve:
	serve -s build

.PHONY: all dev build release host

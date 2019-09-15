DEPLOY_REPO="oshou/awesome-music-front"

build_local:
	yarn 

deploy:
	yarn build
	docker build -t $(DEPLOY_REPO) .
	docker push $(DEPLOY_REPO):latest

run:
	yarn start
#export GOROOT=/usr/local/go
#export GOPATH=/root/go
#export GOBIN=/root/go/bin
export GO111MODULE=on

GOCMD=/usr/local/go/bin/go
BINARY_NAME=main

## 各環境別ビルドコマンド
build_local:
	yarn 

deploy_hub:
	yarn build
	docker build -t oshou/awesome-music-front .
	docker push oshou/awesome-music-front:latest

run:
	yarn start
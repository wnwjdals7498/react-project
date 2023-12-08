개요
	- 서버 셋팅
		1. OS: Rocky Linux 8.7
		2. NVM(node version manager) version 0.39.1
			curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
			nvm install 20.10.0
			.bashrc 내용 수정 [커맨드라인 세션을 다시 켜야 적용]
------------------------------------------------------------------------------------------------------------
export NVM_DIR="/usr/local/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
------------------------------------------------------------------------------------------------------------
			
			sshfs 접근 후 https://github.com/coreybutler/nvm-windows/releases 에서 window nvm 설치
			버전 일치화 후 환경 구축
		3. git 설치 및 github 연결
			dnf -y install git
			
			github 키 등록: https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls
			
			git config user.name "Your Name"
			git config user.email "your_email@example.com"
			
			git config --global credential.helper store
			vim ~/.git-credentials 파일 생성 -> https://username:token@github.com 내용 저장
			
		4. docker 설치
			dnf -y install docker
			
	- typescript & react 기본환경 구축
    1. package.json 파일 작성
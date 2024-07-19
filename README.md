# Gulp.js Modern Web Starter kit

이 프로젝트는 Gulp를 사용하여 Sass 컴파일, jQuery, 이미지, JS 파일 복사를 통한 Assets 파일 관리, BrowserSync를 포함한 모던 웹 개발 작업을 편리하게 자동화합니다.

기존 Github에 올라와 있던 Gulp 스타터 킷들은 최신 버전의 노드에서 호환이 안되는 등의 문제로 불편을 겪어 도움이 되고자 작성하여 올립니다.
사용하시는 프로젝트에 맞게 라이브러리를 추가하고 프로젝트를 수정하여 사용하시기 바랍니다.


## 사용된 도구 및 라이브러리

- Gulp: 자동화 도구
- gulp-sass: Sass 컴파일러
- browser-sync: 개발 서버 및 브라우저 싱크
- jQuery: 제이쿼리 라이브러리


## 설치

프로젝트를 실행하기 전에 다음 명령어를 사용하여 의존성을 설치해야 합니다.

```bash
npm install
```


## 실행

프로젝트를 실행하려면 다음 명령어를 사용하세요.

- `gulp` or `npm start`: 모든 gulp 명령을 실행합니다.
- `gulp sass`: Sass 파일을 컴파일하고 결과물을 dist/assets/css에 저장합니다.
- `gulp jquery`: jQuery 라이브러리를 dist/assets/js에 복사합니다.
- `gulp images`: 이미지 파일을 dist/assets/images로 복사합니다.
- `gulp js`: JS 파일을 dist/assets/js로 복사합니다.
- `gulp browser-sync`: BrowserSync를 초기화하고 개발 라이브 서버를 시작합니다.

`gulp` 명령을 실행 시 `src` 디렉토리의 리소스가 `dist` 디렉토리로 build 됩니다.


## 주의 및 참고사항

- 프로젝트에서 사용하는 모든 리소스는 src 디렉토리 내에 위치해야 합니다.
- 작업이 실행되면 변경 사항이 실시간으로 브라우저에 반영됩니다.


## 배포

최종 코딩이 끝나면 빌드된 `dist` 디렉토리를 원하는 형태로 배포합니다.

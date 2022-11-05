---
# 서비스 간단 소개

![sgt - bannner](https://user-images.githubusercontent.com/107985535/199933761-ae36b7c2-db64-4231-beb6-d058ff614d45.JPG)

* SGT Market은 중고거래 사이트이자 나눔을 하는 사이트입니다.

## SGT Market
* 포스코 X 코딩온 KDT - 2차 프로젝트
* 2022.09.19 ~ 2022.10.03
* 사용 기술: CSS, JavaScript, jQuery, node.js, ejs. MySQL

## 제작 인원(4명)
* 윤동희, 안수지, 윤경민, 정구영

## 주요 기능

> Front : (윤경민)
* 회원가입, 로그인, 마이페이지 구현.

회원가입

* 아이디, 비밀번호, 이름, 이메일, 휴대폰에 유효성 검사( 정규표현식 및 required 활용)를 넣어둠.
* 아이디 중복 검사
* **다음 우편번호 찾기 api 사용**.
* 모든 유효성 검사 통과 시 사용자 정보를 **axios**를 활용하여 서버로 전송.

<img src="https://user-images.githubusercontent.com/107985535/199935191-306b9f78-27cd-4bbf-8fcb-ccd44ed21420.png" width="600" height="500">

로그인

* 클라이언트가 입력한 정보를 **axios**를 활용하여 서버로 전송.
* **네이버, 카카오로그인 api 사용**
* 네이버, 카카오로그인 버튼 클릭 시 네이버와 카카오에 가입한 이메일로 회원가입 진행

![sgt-login](https://user-images.githubusercontent.com/107985535/196098682-40823c74-acf5-4b20-bf42-6f80342d9b07.gif)


상품등록

* 상품 등록 시 가격에 **유효성 검사를 넣어두어 숫자만 입력 가능**.
* 이미지 업로드 시 **이미지 미리보기 기능 구현.**
* 등록한 상품의 수정, 삭제 기능 구현.

![sgt-item](https://user-images.githubusercontent.com/107985535/196099432-9298c31c-1745-42e1-aa64-a1f3daef5c99.gif)

개인정보수정

* **개인 정보 수정**
    - 비밀번호를 알맞게 입력 시 회원 정보 수정 페이지로 이동, 그렇지 않은 경우 오류 메시지 발생.
    
* **회원 정보 수정**
    * 아이디, 이름, 이메일은 DB에 저장되어있는 값이 기본으로 입력되어 있음. (아이디 수정 불가능)
    * 수정 버튼 클릭 시 클라이언트가 작성한 정보 서버에 전송.

![sgt-fixinfo](https://user-images.githubusercontent.com/107985535/196099527-74815493-ebe3-44a3-81ea-82a027b3273c.gif)

* 노션 링크 : https://obsidian-tapir-ca1.notion.site/SGT-Market-14fa3e9449054d54a6a641bc334a5f1a


# My Little Library — 웹 버전

iOS 앱과 **같은 Firebase(Firestore)** 를 써서, 폰에서 추가한 책이 웹에서도 실시간으로 보이고 수정됩니다.

## 1) Firebase 웹 앱 등록 (한 번만)
1. [Firebase 콘솔](https://console.firebase.google.com/project/mylittlelibrary-4ce11) → **설정(톱니) → 프로젝트 설정 → 일반**
2. 아래 **내 앱** → **`</>`(웹) 아이콘** 클릭 → 앱 닉네임(예: `web`) 입력 → **앱 등록**
3. 화면에 나오는 **`firebaseConfig`** 객체(apiKey, messagingSenderId, appId 등)를 복사
4. `web/firebase-config.js` 파일을 열어 값을 붙여넣기 (이 파일은 git에 안 올라감)

## 2) 로컬에서 실행
터미널에서:
```
cd "<이 프로젝트>/web"
python3 -m http.server 8765
```
→ 브라우저에서 **http://localhost:8765** 접속 → Google 로그인 → 폰과 같은 책들이 보임.
(로컬호스트는 Firebase가 기본 허용하므로 Google 로그인이 바로 됩니다.)

## 3) (선택) 인터넷에 올려서 어디서든 쓰기 — Firebase Hosting
```
npm install -g firebase-tools
firebase login
cd "<이 프로젝트>/web"
firebase init hosting     # 기존 프로젝트 선택, public 디렉터리는 . (현재 폴더)
firebase deploy --only hosting
```
→ `https://mylittlelibrary-4ce11.web.app` 같은 주소가 나옴.
배포 후 **Firebase 콘솔 → Authentication → 설정 → 승인된 도메인**에 그 주소가 있는지 확인(보통 자동 추가됨).

## ★ 깃헙 Pages로 폰에서 쓰기 (USB·유료 계정 필요 없음)
아이폰 브라우저로 열어서 "홈 화면에 추가"하면 앱처럼 쓸 수 있어요.

1. **Firebase 웹 설정 붙여넣기** (위 1번) — `web/firebase-config.js` 채우기
2. **깃헙에 web 폴더 올리기**
   - github.com 로그인 → **New repository** (예: `mylittlelibrary-web`, **Public**)
   - `web/` 폴더 안의 파일들(`index.html`, `firebase-config.js`, `apple-touch-icon.png`, ...)을 저장소 **루트에 드래그해서 업로드** (Add file → Upload files)
3. **Pages 켜기**: 저장소 **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**
   - 1~2분 뒤 주소가 나옴: `https://<내아이디>.github.io/mylittlelibrary-web/`
4. **로그인 도메인 허용**: [Firebase 콘솔 → Authentication → 설정 → 승인된 도메인](https://console.firebase.google.com/project/mylittlelibrary-4ce11/authentication/settings) → **도메인 추가** → `<내아이디>.github.io`
5. **폰에서 열기**: 아이폰 **Safari**로 그 주소 접속 → Google 로그인 → 폰과 같은 책들이 보임
6. **홈 화면에 추가**: Safari 하단 **공유 버튼 → "홈 화면에 추가"** → 아이콘 생기고 앱처럼 실행 ✅

> 더 간단하게 하려면 깃헙 대신 **Firebase Hosting**(위 3번)을 쓰면 `*.web.app` 주소가 자동으로 로그인 허용돼서 4번 단계도 생략돼요.

## 기능
- Google 로그인, 월별 책 목록(표지·별점·한줄평), 추가/수정/삭제, 정렬(읽은순/평점순/이름순), 실시간 동기화
- 책 검색(알라딘)은 브라우저 CORS 때문에 웹에선 아직 없음 → 웹에선 표지 URL을 직접 넣거나 제목만 입력. (검색은 iOS, 또는 추후 Cloud Function 프록시로 웹에도 추가 가능)

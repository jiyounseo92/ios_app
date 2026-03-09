# DOER Worship 공용 모드 설정

## 1) 로컬 실행 (필수)
`file://` 로 열면 브라우저 보안(CORS) 때문에 일부 기능이 막힙니다.

```bash
cd "/Users/jiyoun/Library/CloudStorage/OneDrive-Cedars-SinaiHealthSystem/Jiyoun Lab/MyApp/DoerWorship"
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173` 열기

## 2) Supabase (공용 데이터)
1. Supabase 프로젝트 생성
2. SQL Editor에서 `/Users/jiyoun/Library/CloudStorage/OneDrive-Cedars-SinaiHealthSystem/Jiyoun Lab/MyApp/DoerWorship/supabase_setup.sql` 실행
3. `Project URL`, `anon key` 복사
4. `config.js`에 입력

## 3) Google Drive (악보 파일)
1. Google Cloud에서 Drive API 활성화
2. OAuth Web Client 생성 (Authorized JavaScript origin에 `http://localhost:4173` 추가)
3. API key 생성
4. 공용 악보 폴더 생성 후 폴더 ID 복사
5. `config.js`의 `drive.enabled=true` 및 값 입력

## 4) 현재 저장 구조
- 예배/송리스트/캘린더/로테이션/불가능일정: Supabase 테이블 단일 JSON
- 악보 PDF 파일: Google Drive 폴더
- 오프라인/미설정 시: 자동 로컬 저장 fallback

// 1) 이 파일을 참고해 config.js 값을 채우면 공용 모드가 켜집니다.
// 2) 값이 비어 있으면 자동으로 로컬 모드로 동작합니다.
window.DOER_CONFIG = {
  sync: {
    // 다른 사용자 변경사항을 주기적으로 가져오는 간격(ms)
    pullIntervalMs: 60000,
  },
  supabase: {
    // 예: https://YOUR_PROJECT.supabase.co
    url: "",
    // Supabase 프로젝트의 anon key
    anonKey: "",
    // JSON 상태를 저장할 테이블 이름
    table: "doer_worship_state",
    // 단일 행 식별자
    rowId: "main",
  },
  drive: {
    enabled: true,
    // Google Cloud API key (Drive API 사용)
    apiKey: "",
    // Google OAuth Web Client ID
    clientId: "",
    // 공용 악보 폴더 ID
    folderId: "",
    scope: "https://www.googleapis.com/auth/drive",
  },
};

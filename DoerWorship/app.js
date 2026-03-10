const STORAGE_KEY = "doer_worship_data_v1";
const INTRO_DONE_KEY = "doer_worship_intro_done";
const SHEET_DB_NAME = "doer_worship_sheet_files";
const SHEET_DB_STORE = "files";
const CLOUD_PUSH_DEBOUNCE_MS = 900;

const DEFAULT_RUNTIME_CONFIG = {
  sync: {
    pullIntervalMs: 60000,
  },
  supabase: {
    url: "",
    anonKey: "",
    table: "doer_worship_state",
    rowId: "main",
  },
  drive: {
    enabled: false,
    apiKey: "",
    clientId: "",
    folderId: "",
    scope: "https://www.googleapis.com/auth/drive",
  },
};

const ROLE_NAMES = [
  "인도",
  "메인건반",
  "세컨건반",
  "드럼",
  "베이스",
  "일렉기타",
  "어쿠스틱기타",
  "여자싱어",
  "남자싱어",
  "음향",
  "자막",
  "카메라",
];

const WEEKDAY_KO = ["일", "월", "화", "수", "목", "금", "토"];
const WEEKDAY_KO_MON = ["월", "화", "수", "목", "금", "토", "일"];
const HOME_TIMEZONE = "America/Los_Angeles";
const APP_BUILD_ID = "20260310-01";
const BIBLE_CACHE_REV = "r8";
const BIBLE_VERSION_ID = 4639;
const BIBLE_VERSION_CODE = "WB";
const BIBLE_VERSION_LABEL = "우리말성경 (두란노)";
const BIBLE_LOCAL_TEXT_PATH = "./assets/data/duranno_wb_utf8.txt";
const BIBLE_BOOK_CODE_TO_KO = {
  gen: "창세기",
  exo: "출애굽기",
  lev: "레위기",
  num: "민수기",
  deu: "신명기",
  jos: "여호수아",
  jdg: "사사기",
  rut: "룻기",
  "1sa": "사무엘상",
  "2sa": "사무엘하",
  "1ki": "열왕기상",
  "2ki": "열왕기하",
  "1ch": "역대상",
  "2ch": "역대하",
  ezr: "에스라",
  neh: "느헤미야",
  est: "에스더",
  job: "욥기",
  psa: "시편",
  pro: "잠언",
  ecc: "전도서",
  sng: "아가",
  isa: "이사야",
  jer: "예레미야",
  lam: "예레미야애가",
  ezk: "에스겔",
  dan: "다니엘",
  hos: "호세아",
  jol: "요엘",
  amo: "아모스",
  oba: "오바댜",
  jon: "요나",
  mic: "미가",
  nam: "나훔",
  hab: "하박국",
  zep: "스바냐",
  hag: "학개",
  zec: "스가랴",
  mal: "말라기",
  mat: "마태복음",
  mrk: "마가복음",
  luk: "누가복음",
  jhn: "요한복음",
  act: "사도행전",
  rom: "로마서",
  "1co": "고린도전서",
  "2co": "고린도후서",
  gal: "갈라디아서",
  eph: "에베소서",
  php: "빌립보서",
  col: "골로새서",
  "1th": "데살로니가전서",
  "2th": "데살로니가후서",
  "1ti": "디모데전서",
  "2ti": "디모데후서",
  tit: "디도서",
  phm: "빌레몬서",
  heb: "히브리서",
  jas: "야고보서",
  "1pe": "베드로전서",
  "2pe": "베드로후서",
  "1jn": "요한일서",
  "2jn": "요한이서",
  "3jn": "요한삼서",
  jud: "유다서",
  rev: "요한계시록",
};
const BIBLE_BOOK_ALIASES = {
  창세기: "gen",
  창: "gen",
  출애굽기: "exo",
  출: "exo",
  레위기: "lev",
  레: "lev",
  민수기: "num",
  민: "num",
  신명기: "deu",
  신: "deu",
  여호수아: "jos",
  수: "jos",
  사사기: "jdg",
  삿: "jdg",
  룻기: "rut",
  룻: "rut",
  사무엘상: "1sa",
  삼상: "1sa",
  사무엘하: "2sa",
  삼하: "2sa",
  열왕기상: "1ki",
  왕상: "1ki",
  열왕기하: "2ki",
  왕하: "2ki",
  역대상: "1ch",
  대상: "1ch",
  역대하: "2ch",
  대하: "2ch",
  에스라: "ezr",
  스: "ezr",
  느헤미야: "neh",
  느: "neh",
  에스더: "est",
  에: "est",
  욥기: "job",
  욥: "job",
  시편: "psa",
  시: "psa",
  잠언: "pro",
  잠: "pro",
  전도서: "ecc",
  전: "ecc",
  아가: "sng",
  이사야: "isa",
  사: "isa",
  예레미야: "jer",
  렘: "jer",
  예레미야애가: "lam",
  애: "lam",
  에스겔: "ezk",
  겔: "ezk",
  다니엘: "dan",
  단: "dan",
  호세아: "hos",
  호: "hos",
  요엘: "jol",
  욜: "jol",
  아모스: "amo",
  암: "amo",
  오바댜: "oba",
  옵: "oba",
  요나: "jon",
  욘: "jon",
  미가: "mic",
  미: "mic",
  나훔: "nam",
  나: "nam",
  하박국: "hab",
  합: "hab",
  스바냐: "zep",
  습: "zep",
  학개: "hag",
  학: "hag",
  스가랴: "zec",
  슥: "zec",
  말라기: "mal",
  말: "mal",
  마태복음: "mat",
  마: "mat",
  마가복음: "mrk",
  막: "mrk",
  누가복음: "luk",
  눅: "luk",
  요한복음: "jhn",
  요: "jhn",
  사도행전: "act",
  행: "act",
  로마서: "rom",
  롬: "rom",
  고린도전서: "1co",
  고전: "1co",
  고린도후서: "2co",
  고후: "2co",
  갈라디아서: "gal",
  갈: "gal",
  에베소서: "eph",
  엡: "eph",
  빌립보서: "php",
  빌: "php",
  골로새서: "col",
  골: "col",
  데살로니가전서: "1th",
  살전: "1th",
  데살로니가후서: "2th",
  살후: "2th",
  디모데전서: "1ti",
  딤전: "1ti",
  디모데후서: "2ti",
  딤후: "2ti",
  디도서: "tit",
  딛: "tit",
  빌레몬서: "phm",
  몬: "phm",
  히브리서: "heb",
  히: "heb",
  야고보서: "jas",
  약: "jas",
  베드로전서: "1pe",
  벧전: "1pe",
  베드로후서: "2pe",
  벧후: "2pe",
  요한일서: "1jn",
  요한1서: "1jn",
  요일: "1jn",
  요한이서: "2jn",
  요한2서: "2jn",
  요이: "2jn",
  요한삼서: "3jn",
  요한3서: "3jn",
  요삼: "3jn",
  유다서: "jud",
  유: "jud",
  요한계시록: "rev",
  계: "rev",
};
const BIBLE_BOOK_CODE_ORDER = Object.keys(BIBLE_BOOK_CODE_TO_KO);
const BIBLE_BOOK_CODE_TO_LOCAL_ID = BIBLE_BOOK_CODE_ORDER.reduce((acc, code, index) => {
  acc[code] = String(index + 1).padStart(2, "0");
  return acc;
}, {});

const state = {
  config: getRuntimeConfig(),
  data: loadData(),
  page: "home",
  calendarMonth: toMonthStart(new Date()),
  rotationMonth: toMonthStart(new Date()),
  rotationEditMode: false,
  helperSortMode: "date",
  homeWeeklySundayDate: "",
  homeWeekKey: "",
  homeWeekTimer: null,
  serviceFormSongs: [],
  serviceFormSheetSearch: {},
  serviceFormDriveHits: {},
  serviceFormDriveTimers: {},
  serviceFormDriveSeq: {},
  serviceFormSheetAddMode: {},
  serviceFormDragSongId: "",
  serviceFormDragSheet: { songId: "", sheetId: "" },
  serviceFormWeeklyPacket: null,
  serviceEditorOriginPage: "home",
  serviceInlinePreviewUrl: "",
  serviceInlinePreviewSongId: "",
  serviceInlinePreviewTitle: "",
  homePacketPreviewUrl: "",
  meditationSelectionRange: null,
  servicePacketMessage: "",
  weeklyPacketMessage: "",
  previewUrl: "",
  sheetDbPromise: null,
  pdfjsPromise: null,
  ocrWorkerPromise: null,
  bibleChapterCache: {},
  bibleLocalTextLoaded: false,
  bibleLocalTextLoadPromise: null,
  bibleLocalChapterMap: {},
  bibleLocalBookMetaById: {},
  sheetLibraryDriveHits: [],
  sheetLibraryDriveLoading: false,
  sheetLibraryDriveError: "",
  sheetLibraryDriveQuery: "",
  sheetLibraryDriveSeq: 0,
  sheetLibraryDriveTimer: null,
  sheetUpload: {
    mode: "single",
    singlePreviewUrl: "",
    singleDroppedFile: null,
    singleDroppedFiles: [],
    mergedFile: null,
    mergedDroppedFile: null,
    mergedFileBytes: null,
    mergedPageCount: 0,
    mergedPreviewUrl: "",
    mergedSelectedPages: new Set(),
    mergedDrafts: [],
    duplicateHintSeq: 0,
    duplicateHintTimer: null,
  },
  cloud: {
    mode: "local",
    statusText: "로컬 모드",
    supabaseClient: null,
    pushTimer: null,
    pushInFlight: false,
    pullInFlight: false,
    pullTimer: null,
    isApplyingRemote: false,
    lastRemoteUpdatedAt: "",
    driveTokenClient: null,
    driveAccessToken: "",
    driveTokenExpiryAt: 0,
    hasRequestedDriveConsent: false,
    driveFileIndexCache: null,
  },
  startup: {
    slides: [],
    index: 0,
    inTransition: false,
  },
  bibleViewer: {
    refs: [],
    activeRefKey: "",
    bookCode: "",
    chapter: 0,
    loading: false,
    error: "",
    verses: [],
    requestSeq: 0,
  },
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  ensureSelectedDate();
  syncAllServiceRotation();
  refreshWeeklySundayTarget(true);
  bindEvents();
  renderAll();
  renderSyncStatus();
  setPage("about");
  setFabMenuOpen(false);
  runStartupFlow();
  registerServiceWorker();
  void initializeCloudSync();
});

function cacheElements() {
  els.app = document.getElementById("app");
  els.syncStatus = document.getElementById("sync-status");
  els.openServiceEditor = document.getElementById("open-service-editor");
  els.homeServiceDate = document.getElementById("home-service-date");
  els.homePracticeInfo = document.getElementById("home-practice-info");
  els.homeVersePanel = document.getElementById("home-verse-panel");
  els.homeVerseOpenLink = document.getElementById("home-verse-open-link");
  els.homeVerse = document.getElementById("home-verse");
  els.homeMeditation = document.getElementById("home-meditation");
  els.homeSongList = document.getElementById("home-song-list");
  els.homePlaylist = document.getElementById("home-playlist");
  els.weeklySheetStatus = document.getElementById("weekly-sheet-status");
  els.homePacketPreviewWrap = document.getElementById("home-packet-preview-wrap");
  els.homePacketPreviewFrame = document.getElementById("home-packet-preview-frame");
  els.homePacketPreviewClose = document.getElementById("home-packet-preview-close");

  els.pages = Array.from(document.querySelectorAll(".page"));
  els.appFooter = document.querySelector(".app-footer");

  els.fabToggle = document.getElementById("fab-toggle");
  els.fabIcon = document.getElementById("fab-icon");
  els.fabMenu = document.getElementById("fab-menu");

  els.startupOverlay = document.getElementById("startup-overlay");
  els.startupTouch = document.getElementById("startup-touch");
  els.startupSlide = document.getElementById("startup-slide");
  els.startupInstruction = document.getElementById("startup-instruction");

  els.calendarPrev = document.getElementById("calendar-prev");
  els.calendarNext = document.getElementById("calendar-next");
  els.calendarMonthLabel = document.getElementById("calendar-month-label");
  els.calendarWeekdays = document.getElementById("calendar-weekdays");
  els.calendarGrid = document.getElementById("calendar-grid");
  els.calendarDetail = document.getElementById("calendar-detail");

  els.helperQuery = document.getElementById("helper-query");
  els.helperViewButtons = Array.from(document.querySelectorAll("[data-helper-view]"));
  els.helperResults = document.getElementById("helper-results");

  els.sheetModeButtons = Array.from(document.querySelectorAll("[data-sheet-mode]"));
  els.sheetOpStatus = document.getElementById("sheet-op-status");
  els.sheetStatusSlotSingle = document.getElementById("sheet-status-slot-single");
  els.sheetStatusSlotMerged = document.getElementById("sheet-status-slot-merged");

  els.sheetSingleForm = document.getElementById("sheet-single-form");
  els.sheetSingleDropzone = document.getElementById("sheet-single-dropzone");
  els.sheetSingleFile = document.getElementById("sheet-single-file");
  els.sheetSingleFileName = document.getElementById("sheet-single-file-name");
  els.loadSinglePreview = document.getElementById("load-single-preview");
  els.clearSinglePreview = document.getElementById("clear-single-preview");
  els.singlePreviewWrap = document.getElementById("single-preview-wrap");
  els.singlePreviewFrame = document.getElementById("single-preview-frame");
  els.sheetSingleTitle = document.getElementById("sheet-single-title");
  els.sheetSingleKey = document.getElementById("sheet-single-key");
  els.sheetSingleDuplicate = document.getElementById("sheet-single-duplicate");
  els.sheetSingleDuplicateList = document.getElementById("sheet-single-duplicate-list");

  els.sheetMergedForm = document.getElementById("sheet-merged-form");
  els.sheetMergedDropzone = document.getElementById("sheet-merged-dropzone");
  els.sheetMergedFile = document.getElementById("sheet-merged-file");
  els.sheetMergedFileName = document.getElementById("sheet-merged-file-name");
  els.loadMergedPreview = document.getElementById("load-merged-preview");
  els.resetMergedUpload = document.getElementById("reset-merged-upload");
  els.mergedPreviewWrap = document.getElementById("merged-preview-wrap");
  els.mergedPreviewFrame = document.getElementById("merged-preview-frame");
  els.mergedPageTools = document.getElementById("merged-page-tools");
  els.mergedSelectAll = document.getElementById("merged-select-all");
  els.mergedClearSelection = document.getElementById("merged-clear-selection");
  els.mergedPageGrid = document.getElementById("merged-page-grid");
  els.mergedSelectedSummary = document.getElementById("merged-selected-summary");
  els.mergedSongTitle = document.getElementById("merged-song-title");
  els.mergedSongKey = document.getElementById("merged-song-key");
  els.mergedDuplicateHint = document.getElementById("merged-duplicate-hint");
  els.mergedDuplicateList = document.getElementById("merged-duplicate-list");
  els.addMergedSegment = document.getElementById("add-merged-segment");
  els.mergedDraftList = document.getElementById("merged-draft-list");
  els.saveMergedSegments = document.getElementById("save-merged-segments");

  els.sheetSearch = document.getElementById("sheet-search");
  els.sheetLibrary = document.getElementById("sheet-library");

  els.rotationUnavailability = document.getElementById("rotation-unavailability");
  els.rotationList = document.getElementById("rotation-list");
  els.rotationPrev = document.getElementById("rotation-prev");
  els.rotationNext = document.getElementById("rotation-next");
  els.rotationMonthLabel = document.getElementById("rotation-month-label");
  els.toggleRotationEdit = document.getElementById("toggle-rotation-edit");
  els.addRotationColumn = document.getElementById("add-rotation-column");
  els.openUnavailabilityEditor = document.getElementById("open-unavailability-editor");

  els.serviceForm = document.getElementById("service-form");
  els.serviceDate = document.getElementById("service-date");
  els.servicePracticeDate = document.getElementById("service-practice-date");
  els.servicePracticeDay = document.getElementById("service-practice-day");
  els.servicePracticeTime = document.getElementById("service-practice-time");
  els.serviceVerseRef = document.getElementById("service-verse-ref");
  els.autoFillVerse = document.getElementById("auto-fill-verse");
  els.serviceVerse = document.getElementById("service-verse");
  els.serviceMeditation = document.getElementById("service-meditation");
  els.serviceMeditationEditor = document.getElementById("service-meditation-editor");
  els.meditationToolbar = document.getElementById("meditation-toolbar");
  els.servicePlaylist = document.getElementById("service-playlist");
  els.songEditorList = document.getElementById("song-editor-list");
  els.addSongRow = document.getElementById("add-song-row");
  els.buildWeeklyPacket = document.getElementById("build-weekly-packet");
  els.servicePacketStatus = document.getElementById("service-packet-status");

  els.unavailabilityForm = document.getElementById("unavailability-form");
  els.unavailableId = document.getElementById("unavailable-id");
  els.unavailableName = document.getElementById("unavailable-name");
  els.unavailableRole = document.getElementById("unavailable-role");
  els.unavailableStart = document.getElementById("unavailable-start");
  els.unavailableEnd = document.getElementById("unavailable-end");
  els.unavailabilitySubmit = document.getElementById("unavailability-submit");

  els.generateWeeklyPdf = document.getElementById("generate-weekly-pdf");
  els.previewWeeklyPdf = document.getElementById("preview-weekly-pdf");

  els.serviceEditorDialog = document.getElementById("service-editor-dialog");
  els.serviceEditorClose = document.getElementById("service-editor-close");
  els.serviceEditorSaveTop = document.getElementById("service-editor-save-top");
  els.serviceInlinePreviewWrap = document.getElementById("service-inline-preview-wrap");
  els.serviceInlinePreviewFrame = document.getElementById("service-inline-preview-frame");
  els.serviceInlinePreviewTitle = document.getElementById("service-inline-preview-title");
  els.serviceInlinePreviewClose = document.getElementById("service-inline-preview-close");
  els.unavailabilityDialog = document.getElementById("unavailability-dialog");
  els.unavailabilityClose = document.getElementById("unavailability-close");
  els.rotationAddDialog = document.getElementById("rotation-add-dialog");
  els.rotationAddClose = document.getElementById("rotation-add-close");
  els.rotationAddForm = document.getElementById("rotation-add-form");
  els.rotationAddDate = document.getElementById("rotation-add-date");
  els.bibleViewerDialog = document.getElementById("bible-viewer-dialog");
  els.bibleViewerClose = document.getElementById("bible-viewer-close");
  els.bibleViewerTitle = document.getElementById("bible-viewer-title");
  els.bibleViewerChapterLabel = document.getElementById("bible-viewer-chapter-label");
  els.bibleViewerRefList = document.getElementById("bible-viewer-ref-list");
  els.bibleViewerContent = document.getElementById("bible-viewer-content");
  els.biblePrevChapter = document.getElementById("bible-prev-chapter");
  els.bibleNextChapter = document.getElementById("bible-next-chapter");

  els.pdfPreviewDialog = document.getElementById("pdf-preview-dialog");
  els.pdfPreviewFrame = document.getElementById("pdf-preview-frame");
  els.pdfPreviewTitle = document.getElementById("pdf-preview-title");
  els.pdfPreviewClose = document.getElementById("pdf-preview-close");
}

function bindEvents() {
  document.addEventListener("click", onGlobalClick);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      refreshWeeklySundayTarget(true);
      void pullCloudState();
    }
  });

  els.fabToggle.addEventListener("click", () => {
    setFabMenuOpen(!isFabOpen());
  });

  els.openServiceEditor.addEventListener("click", () => {
    const date = getHomeWeeklySundayDate();
    openServiceEditorForDate(date);
  });

  els.serviceEditorClose.addEventListener("click", () => {
    closeServiceInlinePreview();
    closeDialog(els.serviceEditorDialog);
  });
  if (els.serviceInlinePreviewClose) {
    els.serviceInlinePreviewClose.addEventListener("click", () => {
      closeServiceInlinePreview();
    });
  }
  if (els.serviceEditorDialog) {
    els.serviceEditorDialog.addEventListener("close", () => {
      closeServiceInlinePreview();
    });
  }
  if (els.homePacketPreviewClose) {
    els.homePacketPreviewClose.addEventListener("click", () => {
      closeHomePacketPreview();
    });
  }

  els.toggleRotationEdit.addEventListener("click", () => {
    state.rotationEditMode = !state.rotationEditMode;
    if (state.rotationEditMode) {
      normalizeRotationsForMonth(state.rotationMonth);
      saveData();
    }
    renderRotation();
  });

  if (els.addRotationColumn) {
    els.addRotationColumn.addEventListener("click", () => {
      if (!state.rotationEditMode) {
        return;
      }
      openRotationAddDialog();
    });
  }

  els.openUnavailabilityEditor.addEventListener("click", () => {
    resetUnavailabilityForm();
    openDialog(els.unavailabilityDialog);
  });

  els.unavailabilityClose.addEventListener("click", () => {
    resetUnavailabilityForm();
    closeDialog(els.unavailabilityDialog);
  });

  if (els.rotationAddClose) {
    els.rotationAddClose.addEventListener("click", () => {
      closeDialog(els.rotationAddDialog);
    });
  }

  if (els.rotationAddForm) {
    els.rotationAddForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const raw = String(els.rotationAddDate.value || "").trim();
      const parsed = parseIsoDate(raw);
      if (!parsed) {
        window.alert("날짜를 선택해주세요.");
        return;
      }
      addRotationDateAndSync(toIsoDate(parsed));
      closeDialog(els.rotationAddDialog);
    });
  }

  els.homeServiceDate.addEventListener("change", () => {
    els.homeServiceDate.value = getHomeWeeklySundayDate();
  });

  if (els.homeVersePanel) {
    els.homeVersePanel.addEventListener("click", () => {
      openBibleViewerForDate(getHomeWeeklySundayDate());
    });
    els.homeVersePanel.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openBibleViewerForDate(getHomeWeeklySundayDate());
      }
    });
  }
  if (els.homeVerseOpenLink) {
    els.homeVerseOpenLink.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openBibleViewerForDate(getHomeWeeklySundayDate());
    });
  }

  els.calendarPrev.addEventListener("click", () => {
    const next = new Date(state.calendarMonth);
    next.setMonth(next.getMonth() - 1);
    state.calendarMonth = toMonthStart(next);
    renderCalendar();
  });

  els.calendarNext.addEventListener("click", () => {
    const next = new Date(state.calendarMonth);
    next.setMonth(next.getMonth() + 1);
    state.calendarMonth = toMonthStart(next);
    renderCalendar();
  });

  els.rotationPrev.addEventListener("click", () => {
    const next = new Date(state.rotationMonth);
    next.setMonth(next.getMonth() - 1);
    state.rotationMonth = toMonthStart(next);
    renderRotation();
  });

  els.rotationNext.addEventListener("click", () => {
    const next = new Date(state.rotationMonth);
    next.setMonth(next.getMonth() + 1);
    state.rotationMonth = toMonthStart(next);
    renderRotation();
  });

  els.rotationList.addEventListener("input", onRotationInlineInput);
  els.rotationList.addEventListener("change", onRotationInlineInput);
  els.rotationList.addEventListener("click", (event) => {
    const removeButton = event.target.closest("button[data-rotation-remove-date]");
    if (!removeButton) {
      return;
    }
    const date = String(removeButton.dataset.rotationRemoveDate || "");
    if (!date) {
      return;
    }
    if (window.confirm(`${formatDate(date)} 컬럼을 삭제할까요?`)) {
      removeRotationDateAndSync(date);
    }
  });

  els.calendarGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-date]");
    if (button) {
      const date = button.dataset.date;
      state.data.selectedServiceDate = state.data.selectedServiceDate === date ? "" : date;
      saveData();
      renderHeader();
      renderCalendar();
      renderHome();
      return;
    }

    const emptyCell = event.target.closest(".calendar-day.empty");
    if (emptyCell || event.target === els.calendarGrid) {
      if (state.data.selectedServiceDate) {
        state.data.selectedServiceDate = "";
        saveData();
        renderHeader();
        renderCalendar();
        renderHome();
      }
    }
  });

  els.calendarDetail.addEventListener("click", (event) => {
    const packetButton = event.target.closest("button[data-calendar-packet-download]");
    if (packetButton) {
      const date = String(packetButton.dataset.calendarPacketDownload || "");
      if (date) {
        void downloadCalendarPacketByDate(date);
      }
      return;
    }

    const button = event.target.closest("button[data-calendar-edit-date]");
    if (button) {
      const date = String(button.dataset.calendarEditDate || "");
      if (!date) {
        return;
      }
      openServiceEditorForDate(date);
      return;
    }

    const versePanel = event.target.closest("[data-calendar-verse-date]");
    if (versePanel) {
      const date = String(versePanel.dataset.calendarVerseDate || "");
      if (date) {
        openBibleViewerForDate(date);
      }
    }
  });

  els.calendarDetail.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    const versePanel = event.target.closest("[data-calendar-verse-date]");
    if (!versePanel) {
      return;
    }
    event.preventDefault();
    const date = String(versePanel.dataset.calendarVerseDate || "");
    if (date) {
      openBibleViewerForDate(date);
    }
  });

  if (els.helperQuery) {
    els.helperQuery.addEventListener("input", renderHelper);
  }
  els.helperViewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.helperSortMode = button.dataset.helperView || "date";
      renderHelper();
    });
  });

  els.sheetModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setSheetUploadMode(button.dataset.sheetMode);
    });
  });

  els.sheetSingleForm.addEventListener("submit", onSingleSheetUpload);
  els.sheetSingleFile.addEventListener("change", () => {
    state.sheetUpload.singleDroppedFile = null;
    const files = Array.from(els.sheetSingleFile.files || []);
    state.sheetUpload.singleDroppedFiles = files;
    if (files.some((file) => !isSheetUploadFile(file))) {
      els.sheetSingleFile.value = "";
      state.sheetUpload.singleDroppedFiles = [];
      setDropzoneFileName(els.sheetSingleFileName, null);
      setSheetOperationStatus("PDF, PNG, JPG 파일만 업로드할 수 있습니다.", false);
      return;
    }
    setDropzoneFileName(els.sheetSingleFileName, files);
    if (files.length) {
      setSheetOperationStatus(
        files.length > 1
          ? `개별 악보 파일 ${files.length}개 선택 (저장 시 1개의 PDF로 합쳐집니다).`
          : `개별 악보 파일 선택: ${files[0].name}`,
        false
      );
    }
    void onSingleFileSelected(files);
  });
  els.loadSinglePreview.addEventListener("click", async () => {
    await loadSinglePreview();
  });
  els.clearSinglePreview.addEventListener("click", () => {
    clearSingleUploadSelection();
    setDuplicateHint(els.sheetSingleDuplicate, els.sheetSingleDuplicateList, null);
    setSheetOperationStatus("개별 업로드 파일을 초기화했습니다.", false);
  });
  bindPdfDropzone(
    els.sheetSingleDropzone,
    els.sheetSingleFile,
    (files) => {
      const picked = Array.isArray(files) ? files : files ? [files] : [];
      state.sheetUpload.singleDroppedFile = picked[0] || null;
      state.sheetUpload.singleDroppedFiles = picked;
      setDropzoneFileName(els.sheetSingleFileName, picked);
      if (picked.length) {
        setSheetOperationStatus(
          picked.length > 1
            ? `개별 악보 파일 ${picked.length}개 선택 (저장 시 1개의 PDF로 합쳐집니다).`
            : `개별 악보 파일 선택: ${picked[0].name}`,
          false
        );
      }
      void onSingleFileSelected(picked);
    },
    { multiple: true }
  );

  [els.sheetSingleTitle, els.sheetSingleKey].forEach((input) => {
    input.addEventListener("input", () => {
      void updateDuplicateHintForSingle();
    });
  });

  bindPdfDropzone(els.sheetMergedDropzone, els.sheetMergedFile, (file) => {
    state.sheetUpload.mergedDroppedFile = file;
    setDropzoneFileName(els.sheetMergedFileName, file);
    resetMergedUploadState(false);
    setSheetOperationStatus(`합쳐진 악보 파일 선택: ${file.name}`, false);
    void loadMergedPreview();
  });
  els.sheetMergedFile.addEventListener("change", () => {
    state.sheetUpload.mergedDroppedFile = null;
    const file = els.sheetMergedFile.files && els.sheetMergedFile.files[0];
    if (file && !isSheetUploadFile(file)) {
      els.sheetMergedFile.value = "";
      setDropzoneFileName(els.sheetMergedFileName, null);
      resetMergedUploadState(false);
      setSheetOperationStatus("PDF, PNG, JPG 파일만 업로드할 수 있습니다.", false);
      return;
    }
    setDropzoneFileName(els.sheetMergedFileName, file || null);
    resetMergedUploadState(false);
    if (file) {
      setSheetOperationStatus(`합쳐진 악보 파일 선택: ${file.name}`, false);
      void loadMergedPreview();
    }
  });

  els.loadMergedPreview.addEventListener("click", async () => {
    await loadMergedPreview();
  });

  els.resetMergedUpload.addEventListener("click", () => {
    resetMergedUploadState(true);
  });

  els.mergedSelectAll.addEventListener("click", () => {
    selectAllUnassignedMergedPages();
  });

  els.mergedClearSelection.addEventListener("click", () => {
    clearMergedSelection();
  });

  els.mergedPageGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-page-no]");
    if (!button || button.disabled) {
      return;
    }
    const pageNo = Number(button.dataset.pageNo);
    toggleMergedPageSelection(pageNo);
  });

  [els.mergedSongTitle, els.mergedSongKey].forEach((input) => {
    input.addEventListener("input", () => {
      void updateDuplicateHintForMergedComposer();
    });
  });

  els.addMergedSegment.addEventListener("click", async () => {
    await addMergedDraftFromSelection();
  });

  els.sheetMergedForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveMergedDrafts();
  });

  els.mergedDraftList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-remove-draft-id]");
    if (!button) {
      return;
    }
    removeMergedDraft(button.dataset.removeDraftId);
  });

  els.sheetSearch.addEventListener("input", () => {
    scheduleSheetLibraryDriveSearch(els.sheetSearch.value || "");
    renderSheetLibrary();
  });

  els.sheetLibrary.addEventListener("click", async (event) => {
    const driveButton = event.target.closest("button[data-sheet-drive-action]");
    if (driveButton) {
      const action = String(driveButton.dataset.sheetDriveAction || "");
      const driveFileId = String(driveButton.dataset.driveFileId || "");
      const driveName = String(driveButton.dataset.driveName || "");
      if (!driveFileId) {
        return;
      }

      if (action === "preview") {
        await openSheetPreview(makeVirtualDriveSheet(driveFileId, driveName));
        return;
      }
      if (action === "download") {
        await downloadSheet(makeVirtualDriveSheet(driveFileId, driveName));
        return;
      }
      if (action === "delete") {
        const ok = window.confirm("Drive에서 이 악보를 삭제할까요?");
        if (!ok) {
          return;
        }
        await deleteDriveFile(driveFileId);
        state.data.sheets = state.data.sheets.filter((sheet) => sheet.driveFileId !== driveFileId);
        saveData();
        invalidateDriveFileIndexCache();
        scheduleSheetLibraryDriveSearch(els.sheetSearch.value || "");
        renderSheetLibrary();
        return;
      }
    }

    const button = event.target.closest("button[data-sheet-action]");
    if (!button) {
      return;
    }

    const sheetId = button.dataset.sheetId;
    const action = button.dataset.sheetAction;
    const sheet = state.data.sheets.find((item) => item.id === sheetId);
    if (!sheet) {
      return;
    }

    if (action === "preview") {
      await openSheetPreview(sheet);
      return;
    }

    if (action === "download") {
      await downloadSheet(sheet);
      return;
    }

    if (action === "delete") {
      await removeSheet(sheet);
      renderAll();
    }
  });

  els.generateWeeklyPdf.addEventListener("click", async () => {
    await downloadOrGenerateWeeklyPacket();
  });
  if (els.previewWeeklyPdf) {
    els.previewWeeklyPdf.addEventListener("click", async () => {
      await previewWeeklyPacket();
    });
  }

  els.serviceDate.addEventListener("change", () => {
    const date = els.serviceDate.value;
    if (!date) {
      return;
    }
    loadServiceForm(date);
    renderSongEditorRows();
  });

  els.servicePracticeDate.addEventListener("change", () => {
    els.servicePracticeDay.value = computePracticeDayLabel(els.servicePracticeDate.value);
  });

  if (els.autoFillVerse) {
    els.autoFillVerse.addEventListener("click", () => {
      void autoFillVerseByReferences();
    });
  }

  if (els.serviceVerseRef) {
    els.serviceVerseRef.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        void autoFillVerseByReferences();
      }
    });
  }

  els.addSongRow.addEventListener("click", () => {
    const song = makeEmptySong();
    state.serviceFormSongs.push(song);
    state.serviceFormSheetSearch[song.id] = "";
    state.serviceFormDriveHits[song.id] = { queryKey: "", items: [], loading: false, error: "" };
    state.serviceFormDriveSeq[song.id] = 0;
    renderSongEditorRows();
  });

  els.songEditorList.addEventListener("dragstart", (event) => {
    const sheetItem = event.target.closest("[data-song-sheet-item]");
    if (sheetItem) {
      const row = sheetItem.closest(".song-editor-row");
      const songId = String((row && row.dataset.songId) || "");
      const sheetId = String(sheetItem.dataset.sheetId || "");
      if (!songId || !sheetId) {
        return;
      }
      state.serviceFormDragSheet = { songId, sheetId };
      sheetItem.classList.add("dragging");
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", `${songId}:${sheetId}`);
      }
      return;
    }

    const handle = event.target.closest("[data-song-drag-handle]");
    if (!handle) {
      return;
    }
    const row = handle.closest(".song-editor-row");
    if (!row) {
      return;
    }
    const songId = String(row.dataset.songId || "");
    if (!songId) {
      return;
    }
    state.serviceFormDragSongId = songId;
    row.classList.add("dragging");
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", songId);
    }
  });

  els.songEditorList.addEventListener("dragover", (event) => {
    if (state.serviceFormDragSheet && state.serviceFormDragSheet.sheetId) {
      const targetList = event.target.closest("[data-song-selected-list]");
      const targetItem = event.target.closest("[data-song-sheet-item]");
      const row = targetList ? targetList.closest(".song-editor-row") : null;
      const songId = String((row && row.dataset.songId) || "");
      if (!targetList || !songId || songId !== state.serviceFormDragSheet.songId) {
        return;
      }
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      els.songEditorList.querySelectorAll(".song-selected-sheet-item.drag-over").forEach((node) => {
        node.classList.remove("drag-over");
      });
      if (targetItem && String(targetItem.dataset.sheetId || "") !== state.serviceFormDragSheet.sheetId) {
        targetItem.classList.add("drag-over");
      }
      return;
    }

    if (!state.serviceFormDragSongId) {
      return;
    }
    const row = event.target.closest(".song-editor-row");
    if (!row) {
      return;
    }
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    els.songEditorList.querySelectorAll(".song-editor-row.drag-over").forEach((node) => {
      node.classList.remove("drag-over");
    });
    row.classList.add("drag-over");
  });

  els.songEditorList.addEventListener("drop", (event) => {
    if (state.serviceFormDragSheet && state.serviceFormDragSheet.sheetId) {
      const targetList = event.target.closest("[data-song-selected-list]");
      const row = targetList ? targetList.closest(".song-editor-row") : null;
      const songId = String((row && row.dataset.songId) || "");
      if (!targetList || !row || !songId || songId !== state.serviceFormDragSheet.songId) {
        return;
      }
      event.preventDefault();
      const index = Number(row.dataset.index);
      if (Number.isNaN(index) || !state.serviceFormSongs[index]) {
        return;
      }

      const song = state.serviceFormSongs[index];
      const dragId = String(state.serviceFormDragSheet.sheetId || "");
      const targetItem = event.target.closest("[data-song-sheet-item]");
      const targetId = targetItem ? String(targetItem.dataset.sheetId || "") : "";
      const current = getSongSheetIds(song).filter((id) => id !== dragId);
      if (!current.length && dragId) {
        setSongSheetIds(song, [dragId]);
      } else if (dragId) {
        if (targetId && current.includes(targetId)) {
          const targetIdx = current.indexOf(targetId);
          current.splice(targetIdx, 0, dragId);
        } else {
          current.push(dragId);
        }
        setSongSheetIds(song, current);
      }
      state.serviceFormDragSheet = { songId: "", sheetId: "" };
      renderSongEditorRows();
      return;
    }

    const targetRow = event.target.closest(".song-editor-row");
    if (!targetRow || !state.serviceFormDragSongId) {
      return;
    }
    event.preventDefault();
    const targetSongId = String(targetRow.dataset.songId || "");
    if (!targetSongId || targetSongId === state.serviceFormDragSongId) {
      return;
    }
    const fromIndex = state.serviceFormSongs.findIndex((song) => song.id === state.serviceFormDragSongId);
    const toIndex = state.serviceFormSongs.findIndex((song) => song.id === targetSongId);
    if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) {
      return;
    }
    const [moved] = state.serviceFormSongs.splice(fromIndex, 1);
    state.serviceFormSongs.splice(toIndex, 0, moved);
    state.serviceFormDragSongId = "";
    renderSongEditorRows();
  });

  els.songEditorList.addEventListener("dragend", () => {
    state.serviceFormDragSongId = "";
    state.serviceFormDragSheet = { songId: "", sheetId: "" };
    els.songEditorList.querySelectorAll(".song-editor-row.drag-over, .song-editor-row.dragging").forEach((node) => {
      node.classList.remove("drag-over", "dragging");
    });
    els.songEditorList.querySelectorAll(".song-selected-sheet-item.drag-over, .song-selected-sheet-item.dragging").forEach((node) => {
      node.classList.remove("drag-over", "dragging");
    });
  });

  els.songEditorList.addEventListener("input", (event) => {
    const searchInput = event.target.closest("input[data-song-sheet-search]");
    if (searchInput) {
      const row = searchInput.closest(".song-editor-row");
      const index = row ? Number(row.dataset.index) : Number.NaN;
      if (!Number.isNaN(index) && state.serviceFormSongs[index]) {
        const song = state.serviceFormSongs[index];
        state.serviceFormSheetSearch[song.id] = String(searchInput.value || "").trim();
        renderSongSheetSearchResultsIntoRow(row, index);
        if (isDriveEnabled() && !state.cloud.driveAccessToken) {
          void ensureDriveAccessToken().catch(() => {
            setServicePacketStatus("Drive 로그인 후 악보 검색이 가능합니다.", true);
          });
        }
        scheduleSongSheetDriveSearch(index, searchInput.value || "");
      }
      return;
    }

    const control = event.target.closest("input[data-field], select[data-field], textarea[data-field]");
    if (!control) {
      return;
    }
    const row = control.closest(".song-editor-row");
    if (!row) {
      return;
    }
    const index = Number(row.dataset.index);
    const field = control.dataset.field;
    if (!Number.isNaN(index) && state.serviceFormSongs[index] && field) {
      state.serviceFormSongs[index][field] = field === "sheetId"
        ? String(control.value || "")
        : String(control.value || "").trim();
    }
  });

  els.songEditorList.addEventListener("change", (event) => {
    const packetToggle = event.target.closest('input[data-song-action="toggle-packet"]');
    if (packetToggle) {
      const index = Number(packetToggle.dataset.songIndex);
      if (!Number.isNaN(index) && state.serviceFormSongs[index]) {
        state.serviceFormSongs[index].packetSelected = Boolean(packetToggle.checked);
      }
      updateBuildWeeklyPacketButtonState();
      return;
    }

    const textField = event.target.closest(
      'input[data-field="title"], input[data-field="key"], input[data-field="tempo"], input[data-field="referenceUrl"]'
    );
    if (textField) {
      const row = textField.closest(".song-editor-row");
      const index = row ? Number(row.dataset.index) : Number.NaN;
      const field = textField.dataset.field;
      if (!Number.isNaN(index) && field && state.serviceFormSongs[index]) {
        state.serviceFormSongs[index][field] = String(textField.value || "").trim();
      }
      renderSongEditorRows();
      return;
    }

    const sheetSelect = event.target.closest('select[data-field="sheetId"]');
    if (sheetSelect) {
      const row = sheetSelect.closest(".song-editor-row");
      const index = row ? Number(row.dataset.index) : Number.NaN;
      if (!Number.isNaN(index) && state.serviceFormSongs[index]) {
        state.serviceFormSongs[index].sheetId = String(sheetSelect.value || "");
      }
      renderSongEditorRows();
      return;
    }

    const uploadInput = event.target.closest("input.song-sheet-upload-input[data-song-upload-index]");
    if (!uploadInput) {
      return;
    }
    void handleSongSheetUploadInput(uploadInput);
  });

  els.songEditorList.addEventListener("click", (event) => {
    const drivePickButton = event.target.closest("button[data-song-drive-pick]");
    if (drivePickButton) {
      const index = Number(drivePickButton.dataset.songIndex);
      const driveFileId = String(drivePickButton.dataset.driveFileId || "");
      const driveName = String(drivePickButton.dataset.driveName || "");
      if (!Number.isNaN(index) && driveFileId && state.serviceFormSongs[index]) {
        const song = state.serviceFormSongs[index];
        const record = ensureSheetRecordFromDriveMatch(
          { id: driveFileId, name: driveName },
          song.title,
          song.key
        );
        if (record) {
          attachSheetToSong(song, record.id, { append: isSongSheetAddMode(song) });
          state.serviceFormSheetSearch[song.id] = "";
          setSongSheetAddMode(song, false);
          setServicePacketStatus(`"${song.title || "곡"}" 악보를 Drive에서 연결했습니다.`);
          renderSongEditorRows();
        }
      }
      return;
    }

    const pickButton = event.target.closest("button[data-song-sheet-pick]");
    if (pickButton) {
      const index = Number(pickButton.dataset.songIndex);
      const sheetId = String(pickButton.dataset.sheetId || "");
      if (!Number.isNaN(index) && sheetId && state.serviceFormSongs[index]) {
        const song = state.serviceFormSongs[index];
        attachSheetToSong(song, sheetId, { append: isSongSheetAddMode(song) });
        state.serviceFormSheetSearch[song.id] = "";
        setSongSheetAddMode(song, false);
        setServicePacketStatus(`"${song.title || "곡"}" 악보를 연결했습니다.`);
        renderSongEditorRows();
      }
      return;
    }

    const actionButton = event.target.closest("button[data-song-action]");
    if (actionButton) {
      void handleSongRowAction(actionButton);
      return;
    }

    const button = event.target.closest("button[data-remove-song-index]");
    if (!button) {
      return;
    }
    const index = Number(button.dataset.removeSongIndex);
    if (Number.isNaN(index)) {
      return;
    }
    const removedId = state.serviceFormSongs[index] && state.serviceFormSongs[index].id;
    state.serviceFormSongs.splice(index, 1);
    if (removedId) {
      clearSongSheetSearchState(removedId);
    }
    renderSongEditorRows();
  });

  els.buildWeeklyPacket.addEventListener("click", () => {
    void buildWeeklyPacketForEditor();
  });

  if (els.serviceMeditationEditor) {
    els.serviceMeditationEditor.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        document.execCommand("insertLineBreak");
      }
    });
    els.serviceMeditationEditor.addEventListener("input", () => {
      els.serviceMeditation.value = els.serviceMeditationEditor.innerHTML;
      saveMeditationSelection();
      updateMeditationToolbarState();
    });
    els.serviceMeditationEditor.addEventListener("keyup", () => {
      saveMeditationSelection();
      updateMeditationToolbarState();
    });
    els.serviceMeditationEditor.addEventListener("mouseup", () => {
      saveMeditationSelection();
      updateMeditationToolbarState();
    });
    els.serviceMeditationEditor.addEventListener("click", () => {
      saveMeditationSelection();
      updateMeditationToolbarState();
    });
    els.serviceMeditationEditor.addEventListener("focus", () => {
      saveMeditationSelection();
      updateMeditationToolbarState();
    });
    els.serviceMeditationEditor.addEventListener("blur", () => {
      saveMeditationSelection();
      updateMeditationToolbarState();
    });
  }

  if (els.meditationToolbar) {
    els.meditationToolbar.addEventListener("mousedown", (event) => {
      const button = event.target.closest("button[data-meditation-cmd]");
      if (!button) {
        return;
      }
      event.preventDefault();
      saveMeditationSelection();
    });

    els.meditationToolbar.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-meditation-cmd]");
      if (!button) {
        return;
      }
      event.preventDefault();
      const cmd = String(button.dataset.meditationCmd || "");
      applyMeditationCommand(cmd);
    });
  }

  document.addEventListener("selectionchange", () => {
    saveMeditationSelection();
    updateMeditationToolbarState();
  });

  els.serviceForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const date = els.serviceDate.value;
    if (!date) {
      return;
    }

    const songs = state.serviceFormSongs
      .map((song) => ({
        ...song,
        title: song.title.trim(),
        key: song.key.trim(),
        tempo: song.tempo.trim(),
        referenceUrl: song.referenceUrl.trim(),
        comment: String(song.comment || "").trim(),
        sheetIds: getSongSheetIds(song),
        sheetId: getSongSheetIds(song)[0] || "",
        packetSelected: song.packetSelected !== false,
      }))
      .filter((song) => Boolean(song.title));

    const next = {
      date,
      practiceDate: els.servicePracticeDate.value || "",
      practiceDay:
        computePracticeDayLabel(els.servicePracticeDate.value) || els.servicePracticeDay.value.trim(),
      practiceTime: els.servicePracticeTime.value.trim(),
      verseRefs: els.serviceVerseRef ? els.serviceVerseRef.value.trim() : "",
      verse: normalizeVerseTextareaText(els.serviceVerse.value),
      meditation: getMeditationForSave(),
      playlistUrl: els.servicePlaylist.value.trim(),
      songs,
      weeklyPacket: cloneWeeklyPacket(state.serviceFormWeeklyPacket),
    };

    const returnPage = String(state.serviceEditorOriginPage || state.page || "home");

    state.data.services[date] = next;
    syncServiceToRotation(date);
    state.data.selectedServiceDate = date;
    saveData();

    state.weeklyPacketMessage = "";
    renderAll();
    closeDialog(els.serviceEditorDialog);
    setPage(returnPage);
  });

  els.serviceForm.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) {
      return;
    }
    if (target.closest('textarea[data-field="comment"]') || target.closest("#service-meditation-editor")) {
      event.stopPropagation();
    }
  });

  els.unavailabilityForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const id = els.unavailableId.value.trim();
    const name = els.unavailableName.value.trim();
    const role = els.unavailableRole.value.trim();
    const startDate = els.unavailableStart.value;
    const endDate = els.unavailableEnd.value;

    if (!name || !role || !startDate || !endDate) {
      return;
    }

    const start = startDate <= endDate ? startDate : endDate;
    const end = startDate <= endDate ? endDate : startDate;

    const payload = {
      id: id || generateId(),
      name,
      role,
      startDate: start,
      endDate: end,
    };

    const targetIndex = state.data.unavailability.findIndex((item) => item.id === payload.id);
    if (targetIndex >= 0) {
      state.data.unavailability[targetIndex] = payload;
    } else {
      state.data.unavailability.push(payload);
    }

    saveData();
    resetUnavailabilityForm();
    renderAll();
    closeDialog(els.unavailabilityDialog);
  });

  els.rotationUnavailability.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-unavailability-action]");
    if (!button) {
      return;
    }
    const id = button.dataset.unavailableId;
    const action = button.dataset.unavailabilityAction;
    const target = state.data.unavailability.find((item) => item.id === id);
    if (!target) {
      return;
    }

    if (action === "edit") {
      fillUnavailabilityForm(target);
      openDialog(els.unavailabilityDialog);
      return;
    }

    if (action === "delete") {
      state.data.unavailability = state.data.unavailability.filter((item) => item.id !== id);
      saveData();
      renderAll();
    }
  });

  els.pdfPreviewClose.addEventListener("click", () => {
    closePreviewDialog();
  });

  els.pdfPreviewDialog.addEventListener("close", () => {
    closePreviewDialog();
  });

  if (els.bibleViewerClose) {
    els.bibleViewerClose.addEventListener("click", () => {
      closeDialog(els.bibleViewerDialog);
    });
  }

  if (els.biblePrevChapter) {
    els.biblePrevChapter.addEventListener("click", () => {
      void shiftBibleViewerChapter(-1);
    });
  }

  if (els.bibleNextChapter) {
    els.bibleNextChapter.addEventListener("click", () => {
      void shiftBibleViewerChapter(1);
    });
  }

  if (els.bibleViewerRefList) {
    els.bibleViewerRefList.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-bible-ref-key]");
      if (!button) {
        return;
      }
      const refKey = String(button.dataset.bibleRefKey || "");
      if (!refKey) {
        return;
      }
      void setBibleViewerReference(refKey);
    });
  }

  if (els.bibleViewerDialog) {
    els.bibleViewerDialog.addEventListener("close", () => {
      resetBibleViewerState();
    });
  }

  els.startupTouch.addEventListener("click", onStartupTouch);

  bindDialogBackdropClose(els.serviceEditorDialog);
  bindDialogBackdropClose(els.unavailabilityDialog);
  bindDialogBackdropClose(els.rotationAddDialog);
  bindDialogBackdropClose(els.bibleViewerDialog);
  bindDialogBackdropClose(els.pdfPreviewDialog);

  if (state.homeWeekTimer) {
    window.clearInterval(state.homeWeekTimer);
  }
  state.homeWeekTimer = window.setInterval(() => {
    refreshWeeklySundayTarget(true);
  }, 60 * 1000);
}

function openServiceEditorForDate(rawDate) {
  const date = String(rawDate || "").trim();
  if (!date) {
    return;
  }
  state.serviceEditorOriginPage = state.page || "home";
  ensureService(date);
  syncRotationToService(date);
  els.serviceDate.value = date;
  loadServiceForm(date);
  renderSongEditorRows();
  openDialog(els.serviceEditorDialog);
}

function openRotationAddDialog() {
  if (!els.rotationAddDialog || !els.rotationAddDate) {
    return;
  }
  const base = toIsoDate(new Date(state.rotationMonth.getFullYear(), state.rotationMonth.getMonth(), 1));
  els.rotationAddDate.value = base;
  openDialog(els.rotationAddDialog);
}

function addRotationDateAndSync(date) {
  const parsed = parseIsoDate(date);
  if (!parsed) {
    return;
  }
  const isoDate = toIsoDate(parsed);
  getOrCreateRotationByDate(isoDate);
  syncRotationToService(isoDate);
  state.rotationMonth = toMonthStart(parsed);
  state.data.selectedServiceDate = isoDate;
  saveData();
  renderAll();
}

function refreshWeeklySundayTarget(renderIfChanged = false) {
  const context = getLAWeekContext();
  if (!context.sundayIso) {
    return false;
  }

  const changed =
    state.homeWeeklySundayDate !== context.sundayIso || state.homeWeekKey !== context.weekKey;

  state.homeWeeklySundayDate = context.sundayIso;
  state.homeWeekKey = context.weekKey;

  if (renderIfChanged && changed) {
    renderHeader();
    renderHome();
  }
  return changed;
}

function getHomeWeeklySundayDate() {
  if (!state.homeWeeklySundayDate) {
    refreshWeeklySundayTarget(false);
  }
  return state.homeWeeklySundayDate || "";
}

function getLAWeekContext(now = new Date()) {
  const local = getZonedDateInfo(now, HOME_TIMEZONE);
  if (!local.isoDate) {
    return {
      todayIso: "",
      mondayIso: "",
      sundayIso: "",
      weekKey: "",
    };
  }
  const mondayDelta = local.weekdayIndex === 0 ? -6 : 1 - local.weekdayIndex;
  const mondayIso = addDaysToIso(local.isoDate, mondayDelta);
  const sundayIso = addDaysToIso(mondayIso, 6);
  return {
    todayIso: local.isoDate,
    mondayIso,
    sundayIso,
    weekKey: mondayIso,
  };
}

function resolveWeeklySundayDate(now = new Date()) {
  return getLAWeekContext(now).sundayIso;
}

function getZonedDateInfo(now, timeZone) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
  const parts = formatter.formatToParts(now);
  const map = {};
  parts.forEach((part) => {
    map[part.type] = part.value;
  });
  const year = Number(map.year || 0);
  const month = Number(map.month || 0);
  const day = Number(map.day || 0);
  const weekdayShort = String(map.weekday || "");
  const weekdayMap = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const weekdayIndex = Number.isInteger(weekdayMap[weekdayShort]) ? weekdayMap[weekdayShort] : 0;
  const isoDate =
    year && month && day
      ? `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      : "";
  return {
    year,
    month,
    day,
    weekdayIndex,
    isoDate,
  };
}

function addDaysToIso(isoDate, days) {
  const date = parseIsoDate(isoDate);
  if (!date) {
    return "";
  }
  const copy = new Date(date);
  copy.setDate(copy.getDate() + Number(days || 0));
  return toIsoDate(copy);
}

function syncServiceToRotation(date) {
  const isoDate = String(date || "");
  const service = state.data.services[isoDate];
  if (!isoDate || !service) {
    return null;
  }
  const rotation = getOrCreateRotationByDate(isoDate);
  if (!rotation) {
    return null;
  }

  const practiceDate = String(service.practiceDate || "");
  rotation.practiceDate = practiceDate;
  rotation.practiceDay = practiceDate
    ? computePracticeDayLabel(practiceDate)
    : String(service.practiceDay || rotation.practiceDay || "");
  if (!rotation.name) {
    rotation.name = "주일예배";
  }
  return rotation;
}

function syncRotationToService(date) {
  const isoDate = String(date || "");
  if (!isoDate) {
    return null;
  }
  const rotation = aggregateRotationForDate(isoDate);
  if (!rotation) {
    return null;
  }

  ensureService(isoDate);
  const service = state.data.services[isoDate];
  service.date = isoDate;
  service.practiceDate = String(rotation.practiceDate || "");
  service.practiceDay = service.practiceDate
    ? computePracticeDayLabel(service.practiceDate)
    : String(rotation.practiceDay || "");
  return service;
}

function syncAllServiceRotation() {
  Object.keys(state.data.services || {}).forEach((date) => {
    syncServiceToRotation(date);
  });
  (state.data.rotations || []).forEach((rotation) => {
    if (rotation && rotation.worshipDate) {
      syncRotationToService(rotation.worshipDate);
    }
  });
}

function onGlobalClick(event) {
  const pageBtn = event.target.closest("[data-go-page]");
  if (pageBtn) {
    const page = pageBtn.dataset.goPage;
    setPage(page);
    setFabMenuOpen(false);
  }
}

function onRotationInlineInput(event) {
  if (!state.rotationEditMode) {
    return;
  }
  const input = event.target.closest("input[data-rotation-field]");
  if (!input) {
    return;
  }
  const date = input.dataset.date;
  const field = input.dataset.rotationField;
  const role = input.dataset.role || "";
  applyRotationInlineUpdate(date, field, input.value, role);
}

function renderAll() {
  renderHeader();
  renderHome();
  renderCalendar();
  renderHelper();
  renderSheetUploadUi();
  renderSheetLibrary();
  renderRotation();
  setDropzoneFileName(els.sheetSingleFileName, getSelectedSingleUploadFiles());
  setDropzoneFileName(els.sheetMergedFileName, getSelectedMergedUploadFile() || null);
}

function renderHeader() {
  els.homeServiceDate.value = getHomeWeeklySundayDate();
}

function renderHome() {
  const homeDate = getHomeWeeklySundayDate();
  const service = homeDate ? state.data.services[homeDate] || null : null;
  els.homeServiceDate.value = homeDate || "";

  if (!service) {
    closeHomePacketPreview();
    els.homePracticeInfo.textContent = "연습 일정 없음";
    els.homeVerse.innerHTML = renderVerseMarkup("");
    els.homeMeditation.innerHTML = renderMeditationMarkup("");
    els.homeSongList.innerHTML = `<p class="empty-note">아직 등록된 곡 리스트가 없습니다.</p>`;
    els.homePlaylist.innerHTML = `<p class="empty-note">아직 등록된 플레이리스트가 없습니다.</p>`;
    renderWeeklySheetStatus(null);
    return;
  }

  els.homePracticeInfo.textContent = formatHomePracticeSummary(service);
  els.homeVerse.innerHTML = renderVerseMarkup(service.verse || "");
  els.homeMeditation.innerHTML = renderMeditationMarkup(service.meditation || "");
  els.homePlaylist.innerHTML = renderPlaylistMarkup(service.playlistUrl);

  const visibleSongs = service.songs.filter((song) => song.title && song.title.trim());

  if (!visibleSongs.length) {
    els.homeSongList.innerHTML = `<p class="empty-note">아직 등록된 곡 리스트가 없습니다.</p>`;
    renderWeeklySheetStatus(service);
    return;
  }

  els.homeSongList.innerHTML = visibleSongs
    .map((song) => renderServiceSongCard(song))
    .join("");

  renderWeeklySheetStatus(service);
}

function renderWeeklySheetStatus(service) {
  const rows = [];

  const packet = service && service.weeklyPacket ? service.weeklyPacket : null;
  if (packet && packet.fileName) {
    rows.push({ text: `저장된 이번주 악보: ${packet.fileName}`, className: "strong" });
    if (packet.createdAt) {
      rows.push({ text: `최근 생성: ${formatDateTime(packet.createdAt)}`, className: "subtle" });
    }
  } else {
    rows.push({ text: "다운로드할 이번주 악보가 아직 없습니다.", className: "" });
  }

  els.weeklySheetStatus.innerHTML = rows
    .map((row) => `<li class="${escapeHtml(row.className || "")}">${escapeHtml(row.text || "")}</li>`)
    .join("");

  if (els.previewWeeklyPdf) {
    els.previewWeeklyPdf.disabled = !(packet && packet.fileName);
  }
  if (!packet || !packet.fileName) {
    closeHomePacketPreview();
  }
}

function renderMeditationMarkup(rawMeditation) {
  const html = normalizeMeditationHtml(rawMeditation);
  if (!html) {
    return '<p class="empty-note">아직 등록된 묵상이 없습니다.</p>';
  }
  return `<div class="text-content meditation-rich">${html}</div>`;
}

function saveMeditationSelection() {
  if (!els.serviceMeditationEditor) {
    return;
  }
  const selection = window.getSelection ? window.getSelection() : null;
  if (!selection || selection.rangeCount < 1) {
    return;
  }
  const range = selection.getRangeAt(0);
  if (!range || !els.serviceMeditationEditor.contains(range.commonAncestorContainer)) {
    return;
  }
  state.meditationSelectionRange = range.cloneRange();
}

function getMeditationToolbarButtons() {
  if (!els.meditationToolbar) {
    return [];
  }
  return Array.from(els.meditationToolbar.querySelectorAll("button[data-meditation-cmd]"));
}

function isSelectionInsideMeditationEditor() {
  if (!els.serviceMeditationEditor || !window.getSelection) {
    return false;
  }
  const selection = window.getSelection();
  if (!selection || selection.rangeCount < 1) {
    return false;
  }
  const range = selection.getRangeAt(0);
  return Boolean(range && els.serviceMeditationEditor.contains(range.commonAncestorContainer));
}

function updateMeditationToolbarState() {
  const buttons = getMeditationToolbarButtons();
  if (!buttons.length) {
    return;
  }
  const inEditor = isSelectionInsideMeditationEditor();
  let boldActive = false;
  if (inEditor) {
    try {
      boldActive = Boolean(document.queryCommandState("bold"));
    } catch {
      boldActive = false;
    }
  }
  buttons.forEach((button) => {
    const cmd = String(button.dataset.meditationCmd || "");
    const active = cmd === "bold" && boldActive;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function restoreMeditationSelection() {
  if (!els.serviceMeditationEditor) {
    return false;
  }
  els.serviceMeditationEditor.focus();
  const selection = window.getSelection ? window.getSelection() : null;
  if (!selection) {
    return false;
  }

  const saved = state.meditationSelectionRange;
  if (saved && els.serviceMeditationEditor.contains(saved.commonAncestorContainer)) {
    selection.removeAllRanges();
    selection.addRange(saved);
    return true;
  }

  const endRange = document.createRange();
  endRange.selectNodeContents(els.serviceMeditationEditor);
  endRange.collapse(false);
  selection.removeAllRanges();
  selection.addRange(endRange);
  return false;
}

function applyMeditationCommand(command) {
  if (!els.serviceMeditationEditor) {
    return;
  }
  const cmd = String(command || "").trim();
  if (!cmd || cmd !== "bold") {
    return;
  }

  const hasLiveSelection = isSelectionInsideMeditationEditor();
  if (!hasLiveSelection) {
    restoreMeditationSelection();
  } else {
    els.serviceMeditationEditor.focus();
  }

  try {
    document.execCommand("styleWithCSS", false, false);
    document.execCommand("bold", false, null);
  } catch {
    // no-op
  }

  saveMeditationSelection();
  els.serviceMeditation.value = els.serviceMeditationEditor.innerHTML;
  updateMeditationToolbarState();
}

function getMeditationForSave() {
  if (!els.serviceMeditationEditor) {
    return String(els.serviceMeditation.value || "").trim();
  }

  const html = normalizeMeditationHtml(els.serviceMeditationEditor.innerHTML || "");
  els.serviceMeditationEditor.innerHTML = html;
  els.serviceMeditation.value = html;
  return html;
}

function setMeditationEditorValue(value) {
  const html = normalizeMeditationHtml(value || "");
  if (els.serviceMeditationEditor) {
    els.serviceMeditationEditor.innerHTML = html;
  }
  if (els.serviceMeditation) {
    els.serviceMeditation.value = html;
  }
  state.meditationSelectionRange = null;
  updateMeditationToolbarState();
}

function normalizeMeditationHtml(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return "";
  }

  const hasTag = /<\/?[a-z][\s\S]*>/i.test(raw);
  const htmlSource = hasTag ? raw : escapeHtml(raw).replace(/\r?\n/g, "<br>");
  return sanitizeMeditationHtml(htmlSource);
}

function sanitizeMeditationHtml(rawHtml) {
  const source = String(rawHtml || "");
  if (!source.trim()) {
    return "";
  }

  const doc = new DOMParser().parseFromString(`<div id="meditation-root">${source}</div>`, "text/html");
  const root = doc.getElementById("meditation-root");
  if (!root) {
    return "";
  }

  const outDoc = document.implementation.createHTMLDocument("");
  const wrapper = outDoc.createElement("div");
  const allowedTags = new Set(["B", "STRONG", "I", "EM", "U", "BR", "P", "DIV", "SPAN", "FONT"]);

  const appendClean = (node, parent) => {
    if (node.nodeType === Node.TEXT_NODE) {
      parent.appendChild(outDoc.createTextNode(node.nodeValue || ""));
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const tag = node.tagName.toUpperCase();
    if (!allowedTags.has(tag)) {
      Array.from(node.childNodes).forEach((child) => appendClean(child, parent));
      return;
    }

    let outEl;
    let wrapBold = false;
    let wrapItalic = false;
    let wrapUnderline = false;
    if (tag === "FONT") {
      outEl = outDoc.createElement("span");
      const fontSize = normalizeMeditationFontSize(node.getAttribute("size"));
      if (fontSize) {
        outEl.style.fontSize = fontSize;
      }
    } else if (tag === "DIV") {
      outEl = outDoc.createElement("p");
    } else {
      outEl = outDoc.createElement(tag.toLowerCase());
    }

    if (tag === "SPAN") {
      const styleText = node.getAttribute("style") || "";
      const fontSize = extractFontSizeFromStyle(styleText);
      const fontWeight = extractFontWeightFromStyle(styleText);
      const fontStyle = extractFontStyleFromStyle(styleText);
      const textDecoration = extractTextDecorationFromStyle(styleText);
      if (fontSize) {
        outEl.style.fontSize = fontSize;
      }
      wrapBold = isBoldFontWeight(fontWeight);
      wrapItalic = isItalicFontStyle(fontStyle);
      wrapUnderline = hasUnderlineTextDecoration(textDecoration);
    }

    Array.from(node.childNodes).forEach((child) => appendClean(child, outEl));
    let finalEl = outEl;
    if (wrapUnderline) {
      const underlineEl = outDoc.createElement("u");
      underlineEl.appendChild(finalEl);
      finalEl = underlineEl;
    }
    if (wrapItalic) {
      const italicEl = outDoc.createElement("em");
      italicEl.appendChild(finalEl);
      finalEl = italicEl;
    }
    if (wrapBold) {
      const boldEl = outDoc.createElement("strong");
      boldEl.appendChild(finalEl);
      finalEl = boldEl;
    }
    parent.appendChild(finalEl);
  };

  Array.from(root.childNodes).forEach((child) => appendClean(child, wrapper));

  return wrapper.innerHTML
    .replace(/(<br>\s*){3,}/g, "<br><br>")
    .replace(/(<p>\s*<\/p>)+/g, "")
    .trim();
}

function normalizeMeditationFontSize(value) {
  const raw = String(value || "").trim().toLowerCase();
  const fontSizeMap = {
    "1": "12px",
    "2": "14px",
    "3": "16px",
    "4": "18px",
    "5": "22px",
    "6": "28px",
    "7": "34px",
  };
  if (fontSizeMap[raw]) {
    return fontSizeMap[raw];
  }

  const match = raw.match(/^(\d+(?:\.\d+)?)(px|em|rem|%)$/);
  if (!match) {
    return "";
  }
  return `${match[1]}${match[2]}`;
}

function extractFontSizeFromStyle(styleText) {
  const source = String(styleText || "");
  const match = source.match(/font-size\s*:\s*([^;]+)/i);
  if (!match) {
    return "";
  }
  return normalizeMeditationFontSize(match[1].trim());
}

function extractFontWeightFromStyle(styleText) {
  const source = String(styleText || "");
  const match = source.match(/font-weight\s*:\s*([^;]+)/i);
  if (!match) {
    return "";
  }
  return String(match[1] || "").trim().toLowerCase();
}

function isBoldFontWeight(weightText) {
  const value = String(weightText || "").trim().toLowerCase();
  if (!value) {
    return false;
  }
  if (value.includes("bold")) {
    return true;
  }
  const numeric = Number(value.replace(/[^\d.]/g, ""));
  if (!Number.isFinite(numeric)) {
    return false;
  }
  return numeric >= 600;
}

function extractFontStyleFromStyle(styleText) {
  const source = String(styleText || "");
  const match = source.match(/font-style\s*:\s*([^;]+)/i);
  if (!match) {
    return "";
  }
  return String(match[1] || "").trim().toLowerCase();
}

function isItalicFontStyle(styleText) {
  const value = String(styleText || "").trim().toLowerCase();
  return value === "italic" || value === "oblique";
}

function extractTextDecorationFromStyle(styleText) {
  const source = String(styleText || "");
  const match = source.match(/text-decoration(?:-line)?\s*:\s*([^;]+)/i);
  if (!match) {
    return "";
  }
  return String(match[1] || "").trim().toLowerCase();
}

function hasUnderlineTextDecoration(decorationText) {
  return /\bunderline\b/i.test(String(decorationText || ""));
}

function renderVerseMarkup(rawVerse) {
  const text = String(rawVerse || "")
    .replace(/\(\s*(우리말성경(?:\s*\(두란노\))?|새번역)\s*\)/g, "")
    .trim();
  if (!text) {
    return '<p class="empty-note">아직 등록된 주제 말씀이 없습니다.</p>';
  }

  const blocks = text
    .split(/\n\s*\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  const verseRefStyle = "font-family:'ChosunNm','GmarketSansBold',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-weight:700;color:var(--doer-blue);";
  const verseLineStyle = "font-family:'ChosunNm','GmarketSansLight',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;";

  const markup = blocks
    .map((block) => {
      const lines = block
        .split(/\r?\n+/)
        .map((line) => line.trim())
        .filter(Boolean);
      if (!lines.length) {
        return "";
      }

      const firstLine = lines[0];
      const hasHeading = isBibleReferenceHeading(firstLine);
      const verseLines = hasHeading ? lines.slice(1) : lines;
      const verseMarkup = verseLines
        .map((line) => `<p class="verse-line" style="${verseLineStyle}">${escapeHtml(formatVerseDisplayLine(line))}</p>`)
        .join("");

      if (hasHeading) {
        return `
          <div class="verse-block">
            <p class="verse-ref" style="${verseRefStyle}">${escapeHtml(firstLine)}</p>
            ${verseMarkup ? `<div class="verse-lines">${verseMarkup}</div>` : ""}
          </div>
        `;
      }

      return `
        <div class="verse-block">
          <div class="verse-lines">${verseMarkup}</div>
        </div>
      `;
    })
    .filter(Boolean)
    .join("");

  return `<div class="verse-rich">${markup}</div>`;
}

function isBibleReferenceHeading(value) {
  const line = String(value || "").trim();
  if (!line) {
    return false;
  }
  return (
    parseBibleReferencesInput(line).length > 0 ||
    scanBibleReferencesFromText(line).length > 0 ||
    scanBibleChapterOnlyReferencesFromText(line).length > 0
  );
}

function formatVerseDisplayLine(value) {
  const source = String(value || "").trim();
  if (!source) {
    return "";
  }
  const numbered = source.match(/^(\d+\.\s*)(.*)$/);
  if (!numbered) {
    return normalizeBibleVerseText(source);
  }
  return `${numbered[1]}${normalizeBibleVerseText(numbered[2])}`;
}

function normalizeVerseTextareaText(value) {
  const source = String(value || "").trim();
  if (!source) {
    return "";
  }
  const blocks = source
    .split(/\n\s*\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks
    .map((block) => {
      const lines = block
        .split(/\r?\n+/)
        .map((line) => line.trim())
        .filter(Boolean);
      if (!lines.length) {
        return "";
      }
      const hasHeading = isBibleReferenceHeading(lines[0]);
      const head = hasHeading ? [lines[0]] : [];
      const bodyLines = hasHeading ? lines.slice(1) : lines;
      const normalizedBody = bodyLines.map((line) => formatVerseDisplayLine(line));
      return [...head, ...normalizedBody].join("\n").trim();
    })
    .filter(Boolean)
    .join("\n\n");
}

function renderServiceSongCard(song) {
  const title = String(song.title || "").trim();
  const key = String(song.key || "").trim();
  const tempo = String(song.tempo || "").trim();
  const referenceUrl = String(song.referenceUrl || "").trim();
  const thumb = getYouTubeThumbnail(referenceUrl);
  const hasRef = isValidUrl(referenceUrl);
  const commentHtml = String(song.comment || "")
    .split(/\r?\n/)
    .map((line) => escapeHtml(line))
    .join("<br />");

  const thumbMarkup = hasRef && thumb
    ? `<a class="song-thumb-link" href="${escapeHtml(referenceUrl)}" target="_blank" rel="noopener noreferrer"><img class="song-thumb" src="${escapeHtml(
        thumb
      )}" alt="${escapeHtml(title || "레퍼런스")} 썸네일" loading="lazy" /></a>`
    : '<span class="song-thumb-link is-empty" aria-hidden="true"></span>';

  return `
    <article class="song-card">
      <div class="song-compact-row">
        <div class="song-compact-main">
          <div class="song-card-head">
            <h4 class="song-title">${escapeHtml(title)}</h4>
          </div>
          <div class="song-meta">
            <span>키: ${escapeHtml(key || "-")}</span>
            <span>템포: ${escapeHtml(tempo || "-")}</span>
            ${hasRef ? `<a class="inline-link" href="${escapeHtml(referenceUrl)}" target="_blank" rel="noopener noreferrer">레퍼런스</a>` : ""}
          </div>
          ${song.comment ? `<p class="song-comment">${commentHtml}</p>` : ""}
        </div>
        ${thumbMarkup}
      </div>
    </article>
  `;
}

function renderCalendar() {
  const month = state.calendarMonth;
  const year = month.getFullYear();
  const monthIndex = month.getMonth();

  els.calendarMonthLabel.textContent = `${year}년 ${monthIndex + 1}월`;
  els.calendarWeekdays.innerHTML = WEEKDAY_KO_MON
    .map((day) => `<div class="calendar-weekday">${day}</div>`)
    .join("");

  const firstDay = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const offset = (firstDay.getDay() + 6) % 7;
  const dayFlags = buildCalendarScheduleFlags(year, monthIndex);

  const cells = [];

  for (let i = 0; i < offset; i += 1) {
    cells.push('<div class="calendar-day empty"></div>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const isoDate = toIsoDate(new Date(year, monthIndex, day));
    const flags = dayFlags.get(isoDate) || { worship: false, practice: false };
    const hasWorship = flags.worship;
    const hasPractice = flags.practice;
    const hasBoth = hasWorship && hasPractice;
    const isSelected = isoDate === state.data.selectedServiceDate;
    const classNames = [
      "calendar-day",
      hasWorship ? "has-worship" : "",
      hasPractice ? "has-practice" : "",
      hasBoth ? "has-both" : "",
      isSelected ? "selected" : "",
    ]
      .filter(Boolean)
      .join(" ");

    cells.push(`
      <button class="${classNames}" data-date="${isoDate}" type="button">
        ${day}
      </button>
    `);
  }

  els.calendarGrid.innerHTML = cells.join("");
  renderCalendarDetail();
}

function buildCalendarScheduleFlags(year, monthIndex) {
  const map = new Map();
  const mark = (isoDate, type) => {
    if (!isIsoDateInMonth(isoDate, year, monthIndex)) {
      return;
    }
    const current = map.get(isoDate) || { worship: false, practice: false };
    current[type] = true;
    map.set(isoDate, current);
  };

  Object.keys(state.data.services || {}).forEach((date) => {
    mark(date, "worship");
  });

  Object.values(state.data.services || {}).forEach((service) => {
    mark(service.practiceDate, "practice");
  });

  (state.data.rotations || []).forEach((rotation) => {
    mark(rotation.worshipDate, "worship");
    mark(rotation.practiceDate, "practice");
  });

  return map;
}

function isIsoDateInMonth(isoDate, year, monthIndex) {
  const date = parseIsoDate(isoDate);
  if (!date) {
    return false;
  }
  return date.getFullYear() === year && date.getMonth() === monthIndex;
}

function renderCalendarDetail() {
  const selectedDate = String(state.data.selectedServiceDate || "");
  if (!selectedDate) {
    els.calendarDetail.innerHTML = '<p class="empty-note">날짜를 선택하면 예배 기록을 볼 수 있습니다.</p>';
    return;
  }

  const service = state.data.services[selectedDate] || null;
  if (!service) {
    els.calendarDetail.innerHTML = `
      <div class="calendar-detail-empty-row">
        <p class="empty-note">선택한 날짜(${formatDate(selectedDate)})에 저장된 기록이 없습니다.</p>
        <button id="calendar-detail-edit-btn" class="ghost-btn compact-btn" type="button" data-calendar-edit-date="${escapeHtmlAttr(selectedDate)}">입력/수정</button>
      </div>
    `;
    return;
  }

  const visibleSongs = service.songs.filter((song) => song.title && song.title.trim());
  const songList = visibleSongs.length
    ? visibleSongs.map((song) => renderServiceSongCard(song)).join("")
    : `<p class="empty-note">아직 등록된 곡 리스트가 없습니다.</p>`;
  const packet = normalizeWeeklyPacket(service.weeklyPacket);
  const packetMarkup = packet
    ? `
      <article class="panel sheet-packet-panel">
        <div class="panel-head-row">
          <h3>전체악보</h3>
          <button class="ghost-btn compact-btn" type="button" data-calendar-packet-download="${escapeHtmlAttr(selectedDate)}">악보 다운로드</button>
        </div>
        <p class="muted">${escapeHtml(packet.fileName || "이번주악보.pdf")}</p>
      </article>
    `
    : "";

  els.calendarDetail.innerHTML = `
    <article class="panel date-switch">
      <div class="panel-head-row">
        <h3>예배 정보</h3>
        <button id="calendar-detail-edit-btn" class="ghost-btn compact-btn" type="button" data-calendar-edit-date="${escapeHtmlAttr(selectedDate)}">입력/수정</button>
      </div>
      <div class="date-main-row">
        <h3 class="date-heading">예배 날짜</h3>
        <p class="text-content">${formatDate(service.date)}</p>
      </div>
      <p class="practice-note">${escapeHtml(formatPracticeSummary(service))}</p>
    </article>
    <article class="panel verse-panel verse-openable" role="button" tabindex="0" aria-label="주제 말씀 성경에서 보기" data-calendar-verse-date="${escapeHtmlAttr(
      selectedDate
    )}">
      <h3>주제 말씀</h3>
      <div class="text-content">${renderVerseMarkup(service.verse || "")}</div>
    </article>
    <article class="panel meditation-panel">
      <h3>묵상</h3>
      ${renderMeditationMarkup(service.meditation || "")}
    </article>
    <article class="panel song-panel">
      <h3>곡 리스트</h3>
      <div class="song-list">${songList}</div>
    </article>
    ${packetMarkup}
  `;
}

function renderHelper() {
  const query = normalizeText(els.helperQuery.value || "");
  const mode = state.helperSortMode || "date";
  const bank = buildSongBank();

  els.helperViewButtons.forEach((button) => {
    const active = button.dataset.helperView === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (!query) {
    els.helperResults.innerHTML = "";
    return;
  }

  const filtered = bank.filter((entry) => {
    const inTitle = normalizeText(entry.title).includes(query);
    const inKey = entry.keys.some((item) => normalizeText(item).includes(query));
    const inTempo = entry.tempos.some((item) => normalizeText(item).includes(query));
    return inTitle || inKey || inTempo;
  });

  sortHelperEntries(filtered, mode);

  if (!filtered.length) {
    els.helperResults.innerHTML = '<p class="empty-note">검색 결과가 없습니다.</p>';
    return;
  }

  els.helperResults.innerHTML = filtered
    .map((entry) => {
      const dateText = entry.dates.map((date) => formatBankDate(date)).join(", ");
      const keyText = entry.keys.length ? entry.keys.join(", ") : "-";
      const tempoText = entry.tempos.length ? entry.tempos.join(", ") : "-";
      const thumb = entry.youtubeThumb
        ? `<img class="helper-thumb" src="${escapeHtml(entry.youtubeThumb)}" alt="레퍼런스 썸네일" loading="lazy" />`
        : `<div class="helper-thumb helper-thumb-empty">NO REF</div>`;
      const refMarkup = entry.referenceUrl
        ? `<a class="inline-link" href="${escapeHtml(entry.referenceUrl)}" target="_blank" rel="noopener noreferrer">레퍼런스 열기</a>`
        : `<span class="muted">레퍼런스 없음</span>`;
      return `
        <article class="helper-card helper-card-compact">
          <div class="helper-compact-row">
            <div class="helper-compact-main">
              <h4>${escapeHtml(entry.title)}</h4>
              <p class="muted">예배 날짜: ${escapeHtml(dateText || "-")}</p>
              <p class="muted">키: ${escapeHtml(keyText)} / 템포: ${escapeHtml(tempoText)}</p>
              ${refMarkup}
            </div>
            <div class="helper-thumb-wrap">
              ${thumb}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function sortHelperEntries(entries, mode) {
  if (mode === "name") {
    entries.sort((a, b) => a.title.localeCompare(b.title));
    return;
  }
  if (mode === "key") {
    entries.sort((a, b) => {
      const aKey = (a.keys[0] || "ZZZ").toUpperCase();
      const bKey = (b.keys[0] || "ZZZ").toUpperCase();
      if (aKey !== bKey) {
        return aKey.localeCompare(bKey);
      }
      return a.title.localeCompare(b.title);
    });
    return;
  }
  if (mode === "tempo") {
    entries.sort((a, b) => {
      const aTempo = firstTempoNumber(a.tempos);
      const bTempo = firstTempoNumber(b.tempos);
      if (aTempo !== bTempo) {
        return aTempo - bTempo;
      }
      return a.title.localeCompare(b.title);
    });
    return;
  }
  entries.sort((a, b) => b.latestDate.localeCompare(a.latestDate));
}

function firstTempoNumber(values) {
  for (const value of values || []) {
    const match = String(value || "").match(/\d+/);
    if (match) {
      return Number(match[0]);
    }
  }
  return Number.POSITIVE_INFINITY;
}

function renderSheetUploadUi() {
  const mode = state.sheetUpload.mode === "merged" ? "merged" : "single";
  els.sheetSingleForm.hidden = mode !== "single";
  els.sheetMergedForm.hidden = mode !== "merged";

  if (els.sheetOpStatus) {
    const slot = mode === "merged" ? els.sheetStatusSlotMerged : els.sheetStatusSlotSingle;
    if (slot && els.sheetOpStatus.parentElement !== slot) {
      slot.appendChild(els.sheetOpStatus);
    }
  }

  els.sheetModeButtons.forEach((button) => {
    const active = button.dataset.sheetMode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderMergedPageGrid();
  renderMergedSelectionSummary();
  renderMergedDraftList();
}

function setSheetUploadMode(mode) {
  state.sheetUpload.mode = mode === "merged" ? "merged" : "single";
  renderSheetUploadUi();
}

function setSheetOperationStatus(message, busy = false) {
  if (!message) {
    els.sheetOpStatus.hidden = true;
    els.sheetOpStatus.textContent = "";
    els.sheetOpStatus.dataset.busy = "false";
    return;
  }

  els.sheetOpStatus.hidden = false;
  els.sheetOpStatus.textContent = message;
  els.sheetOpStatus.dataset.busy = busy ? "true" : "false";
}

function bindPdfDropzone(dropzone, input, onFileSelected = null, options = {}) {
  if (!dropzone || !input) {
    return;
  }
  const allowMultiple = Boolean(options && options.multiple);

  let depth = 0;
  const activate = (on) => {
    dropzone.classList.toggle("is-dragover", Boolean(on));
  };

  dropzone.addEventListener("click", () => {
    input.click();
  });

  dropzone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      input.click();
    }
  });

  dropzone.addEventListener("dragenter", (event) => {
    event.preventDefault();
    depth += 1;
    activate(true);
  });

  dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    activate(true);
  });

  dropzone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    depth = Math.max(0, depth - 1);
    if (depth === 0) {
      activate(false);
    }
  });

  dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    depth = 0;
    activate(false);

    const list = event.dataTransfer && event.dataTransfer.files;
    const picked = Array.from(list || []).filter(Boolean);
    const files = allowMultiple ? picked : picked.slice(0, 1);
    if (!files.length) {
      return;
    }

    if (files.some((file) => !isSheetUploadFile(file))) {
      setSheetOperationStatus("PDF, PNG, JPG 파일만 업로드할 수 있습니다.", false);
      return;
    }

    if (typeof onFileSelected === "function") {
      onFileSelected(allowMultiple ? files : files[0]);
    }

    try {
      const transfer = new DataTransfer();
      files.forEach((file) => transfer.items.add(file));
      input.files = transfer.files;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    } catch {
      setSheetOperationStatus(
        files.length > 1 ? `파일 선택: ${files.length}개` : `파일 선택: ${files[0].name}`,
        false
      );
    }
  });
}

function isPdfFile(file) {
  if (!file) {
    return false;
  }
  const type = String(file.type || "").toLowerCase();
  const name = String(file.name || "").toLowerCase();
  return type === "application/pdf" || name.endsWith(".pdf");
}

function isImageFile(file) {
  if (!file) {
    return false;
  }
  const type = String(file.type || "").toLowerCase();
  const name = String(file.name || "").toLowerCase();
  if (type === "image/png" || type === "image/jpeg" || type === "image/jpg") {
    return true;
  }
  return name.endsWith(".png") || name.endsWith(".jpg") || name.endsWith(".jpeg");
}

function isSheetUploadFile(file) {
  return isPdfFile(file) || isImageFile(file);
}

async function convertImageFileToPdf(file, fallbackTitle = "악보") {
  if (!isImageFile(file)) {
    return file;
  }
  if (!window.PDFLib || !window.PDFLib.PDFDocument) {
    throw new Error("이미지 변환을 위해 PDF 라이브러리가 필요합니다.");
  }

  const bytes = await file.arrayBuffer();
  const pdfDoc = await window.PDFLib.PDFDocument.create();
  const lowerName = String(file.name || "").toLowerCase();
  const isPng = String(file.type || "").toLowerCase() === "image/png" || lowerName.endsWith(".png");
  const embedded = isPng ? await pdfDoc.embedPng(bytes) : await pdfDoc.embedJpg(bytes);
  const width = embedded.width;
  const height = embedded.height;
  const page = pdfDoc.addPage([width, height]);
  page.drawImage(embedded, {
    x: 0,
    y: 0,
    width,
    height,
  });

  const pdfBytes = await pdfDoc.save();
  const parsed = extractTitleKeyFromFilename(file.name || "");
  const baseTitle = String(parsed.title || fallbackTitle || "악보").trim() || "악보";
  const pdfName = sanitizeFilename(`${baseTitle}.pdf`);
  return new File([pdfBytes], pdfName, { type: "application/pdf" });
}

function normalizeSheetUploadFiles(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }
  if (!value) {
    return [];
  }
  return [value];
}

async function mergeSheetUploadFilesToPdf(filesInput, fallbackTitle = "악보") {
  const files = normalizeSheetUploadFiles(filesInput);
  if (!files.length) {
    throw new Error("병합할 파일이 없습니다.");
  }
  if (!window.PDFLib || !window.PDFLib.PDFDocument) {
    throw new Error("PDF 라이브러리를 찾을 수 없습니다.");
  }

  const merged = await window.PDFLib.PDFDocument.create();
  for (const file of files) {
    if (!isSheetUploadFile(file)) {
      throw new Error("PDF, PNG, JPG 파일만 병합할 수 있습니다.");
    }
    const pdfSource = isImageFile(file) ? await convertImageFileToPdf(file, fallbackTitle) : file;
    const sourceBytes = await pdfSource.arrayBuffer();
    const source = await window.PDFLib.PDFDocument.load(sourceBytes);
    const pageIndices = source.getPageIndices();
    if (!pageIndices.length) {
      continue;
    }
    const copied = await merged.copyPages(source, pageIndices);
    copied.forEach((page) => merged.addPage(page));
  }

  if (!merged.getPageCount()) {
    throw new Error("병합할 페이지가 없습니다.");
  }

  const mergedBytes = await merged.save();
  const baseTitle = String(fallbackTitle || "").trim() || "악보";
  const fileName = sanitizeFilename(`${baseTitle}.pdf`);
  return new File([mergedBytes], fileName, { type: "application/pdf" });
}

async function onSingleFileSelected(fileOverride = null) {
  const files = normalizeSheetUploadFiles(fileOverride || getSelectedSingleUploadFiles());
  resetSinglePreview(false);
  if (!files.length) {
    return;
  }

  if (files.some((file) => !isSheetUploadFile(file))) {
    setSheetOperationStatus("PDF, PNG, JPG 파일만 업로드할 수 있습니다.", false);
    return;
  }

  const file = files[0];
  if (!els.sheetSingleTitle.value.trim() || !els.sheetSingleKey.value.trim()) {
    const parsed = extractTitleKeyFromFilename(file.name);
    if (!els.sheetSingleTitle.value.trim()) {
      els.sheetSingleTitle.value = parsed.title || "";
    }
    if (!els.sheetSingleKey.value.trim()) {
      els.sheetSingleKey.value = parsed.key || "";
    }
  }
  try {
    await loadSinglePreview(files, true);
    void updateDuplicateHintForSingle();
  } catch (error) {
    setSheetOperationStatus(`개별 미리보기 로딩 실패: ${error.message}`, false);
  }
}

async function loadSinglePreview(fileOrFiles = null, silent = false) {
  const targets = normalizeSheetUploadFiles(fileOrFiles || getSelectedSingleUploadFiles());
  if (!targets.length) {
    if (!silent) {
      setSheetOperationStatus("개별 업로드 파일을 먼저 선택하세요.", false);
    }
    return;
  }

  resetSinglePreview(false);
  let previewFile;
  if (targets.length > 1) {
    const fallbackTitle = els.sheetSingleTitle.value.trim() || "개별악보";
    previewFile = await mergeSheetUploadFilesToPdf(targets, fallbackTitle);
  } else if (isImageFile(targets[0])) {
    previewFile = await convertImageFileToPdf(targets[0], "개별악보");
  } else {
    previewFile = targets[0];
  }
  state.sheetUpload.singlePreviewUrl = URL.createObjectURL(previewFile);
  els.singlePreviewFrame.src = state.sheetUpload.singlePreviewUrl;
  els.singlePreviewWrap.hidden = false;
  if (!silent) {
    const first = targets[0];
    setSheetOperationStatus(
      targets.length > 1
        ? `파일 ${targets.length}개를 하나의 PDF로 합쳐 미리보기를 불러왔습니다.`
        : isImageFile(first)
          ? "개별 이미지 악보를 PDF로 변환해 미리보기를 불러왔습니다."
          : "개별 악보 미리보기를 불러왔습니다.",
      false
    );
  }
}

function resetSinglePreview(clearFile = false) {
  if (state.sheetUpload.singlePreviewUrl) {
    URL.revokeObjectURL(state.sheetUpload.singlePreviewUrl);
    state.sheetUpload.singlePreviewUrl = "";
  }

  if (els.singlePreviewFrame) {
    els.singlePreviewFrame.src = "";
  }
  if (els.singlePreviewWrap) {
    els.singlePreviewWrap.hidden = true;
  }

  if (clearFile && els.sheetSingleFile) {
    els.sheetSingleFile.value = "";
  }
}

function clearSingleUploadSelection() {
  state.sheetUpload.singleDroppedFile = null;
  state.sheetUpload.singleDroppedFiles = [];
  if (els.sheetSingleFile) {
    els.sheetSingleFile.value = "";
  }
  setDropzoneFileName(els.sheetSingleFileName, null);
  resetSinglePreview(false);
}

function getSelectedSingleUploadFile() {
  const files = getSelectedSingleUploadFiles();
  return files[0] || null;
}

function getSelectedSingleUploadFiles() {
  if (Array.isArray(state.sheetUpload.singleDroppedFiles) && state.sheetUpload.singleDroppedFiles.length) {
    return [...state.sheetUpload.singleDroppedFiles];
  }
  if (state.sheetUpload.singleDroppedFile) {
    return [state.sheetUpload.singleDroppedFile];
  }
  return Array.from((els.sheetSingleFile && els.sheetSingleFile.files) || []);
}

function getSelectedMergedUploadFile() {
  if (state.sheetUpload.mergedDroppedFile) {
    return state.sheetUpload.mergedDroppedFile;
  }
  return els.sheetMergedFile.files && els.sheetMergedFile.files[0];
}

function setDropzoneFileName(element, fileOrFiles) {
  if (!element) {
    return;
  }
  const files = normalizeSheetUploadFiles(fileOrFiles);
  if (!files.length) {
    element.textContent = "선택된 파일 없음";
    return;
  }
  if (files.length === 1) {
    element.textContent = `선택된 파일: ${files[0].name}`;
    return;
  }
  element.textContent = `선택된 파일: ${files.length}개 (첫 파일: ${files[0].name})`;
}

function resetMergedUploadState(clearFile = false) {
  if (state.sheetUpload.mergedPreviewUrl) {
    URL.revokeObjectURL(state.sheetUpload.mergedPreviewUrl);
    state.sheetUpload.mergedPreviewUrl = "";
  }

  if (clearFile) {
    state.sheetUpload.mergedDroppedFile = null;
    els.sheetMergedFile.value = "";
    setDropzoneFileName(els.sheetMergedFileName, null);
  }

  const selected = clearFile ? null : getSelectedMergedUploadFile();
  state.sheetUpload.mergedFile = selected || null;
  state.sheetUpload.mergedFileBytes = null;
  state.sheetUpload.mergedPageCount = 0;
  state.sheetUpload.mergedSelectedPages = new Set();
  state.sheetUpload.mergedDrafts = [];

  els.mergedPreviewFrame.src = "";
  els.mergedPreviewWrap.hidden = true;
  els.mergedPageTools.hidden = true;
  els.mergedSongTitle.value = "";
  els.mergedSongKey.value = "";
  setDuplicateHint(els.mergedDuplicateHint, els.mergedDuplicateList, null);
  if (!clearFile) {
    setDropzoneFileName(els.sheetMergedFileName, selected || null);
  }

  renderSheetUploadUi();
}

async function loadMergedPreview() {
  const selected = getSelectedMergedUploadFile();
  if (!selected) {
    setSheetOperationStatus("먼저 합쳐진 악보 파일을 선택하세요.", false);
    return;
  }

  if (!window.PDFLib || !window.PDFLib.PDFDocument) {
    setSheetOperationStatus("PDF 라이브러리를 찾을 수 없습니다.", false);
    return;
  }

  setSheetOperationStatus("합쳐진 악보 파일을 읽는 중...", true);

  try {
    const file = isImageFile(selected)
      ? await convertImageFileToPdf(selected, extractTitleKeyFromFilename(selected.name || "").title || "합쳐진악보")
      : selected;
    const bytes = new Uint8Array(await file.arrayBuffer());
    const source = await window.PDFLib.PDFDocument.load(bytes);
    const pageCount = source.getPageCount();

    if (!pageCount) {
      setSheetOperationStatus("PDF 페이지를 읽지 못했습니다.", false);
      return;
    }

    if (state.sheetUpload.mergedPreviewUrl) {
      URL.revokeObjectURL(state.sheetUpload.mergedPreviewUrl);
    }

    state.sheetUpload.mergedFile = file;
    state.sheetUpload.mergedDroppedFile = file;
    state.sheetUpload.mergedFileBytes = bytes;
    state.sheetUpload.mergedPageCount = pageCount;
    state.sheetUpload.mergedSelectedPages = new Set();
    state.sheetUpload.mergedDrafts = [];
    state.sheetUpload.mergedPreviewUrl = URL.createObjectURL(file);

    els.mergedPreviewFrame.src = state.sheetUpload.mergedPreviewUrl;
    els.mergedPreviewWrap.hidden = false;
    els.mergedPageTools.hidden = false;

    renderSheetUploadUi();
    setSheetOperationStatus(
      `${pageCount}페이지를 불러왔습니다.${isImageFile(selected) ? " (이미지 -> 1페이지 PDF 자동 변환)" : ""} 페이지를 선택해 곡으로 등록하세요.`,
      false
    );
  } catch (error) {
    setSheetOperationStatus(`미리보기 로딩 실패: ${error.message}`, false);
  }
}

function getAssignedMergedPageSet() {
  const used = new Set();
  state.sheetUpload.mergedDrafts.forEach((draft) => {
    draft.pages.forEach((page) => used.add(page));
  });
  return used;
}

function renderMergedPageGrid() {
  const count = state.sheetUpload.mergedPageCount;
  if (!count) {
    els.mergedPageGrid.innerHTML = '<p class="empty-note">미리보기를 먼저 불러오세요.</p>';
    return;
  }

  const selected = state.sheetUpload.mergedSelectedPages;
  const assigned = getAssignedMergedPageSet();

  els.mergedPageGrid.innerHTML = Array.from({ length: count }, (_, i) => {
    const pageNo = i + 1;
    const isAssigned = assigned.has(pageNo);
    const isSelected = selected.has(pageNo);
    const classes = [
      "merged-page-chip",
      isAssigned ? "is-assigned" : "",
      isSelected ? "is-selected" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return `<button class="${classes}" type="button" data-page-no="${pageNo}" ${isAssigned ? "disabled" : ""}>${pageNo}p</button>`;
  }).join("");
}

function renderMergedSelectionSummary() {
  const pages = Array.from(state.sheetUpload.mergedSelectedPages).sort((a, b) => a - b);
  els.mergedSelectedSummary.textContent = pages.length
    ? `선택된 페이지: ${formatPageRanges(pages)}`
    : "선택된 페이지 없음";
}

function toggleMergedPageSelection(pageNo) {
  if (!Number.isInteger(pageNo) || pageNo < 1 || pageNo > state.sheetUpload.mergedPageCount) {
    return;
  }
  const assigned = getAssignedMergedPageSet();
  if (assigned.has(pageNo)) {
    return;
  }

  if (state.sheetUpload.mergedSelectedPages.has(pageNo)) {
    state.sheetUpload.mergedSelectedPages.delete(pageNo);
  } else {
    state.sheetUpload.mergedSelectedPages.add(pageNo);
  }

  renderMergedPageGrid();
  renderMergedSelectionSummary();
}

function selectAllUnassignedMergedPages() {
  const assigned = getAssignedMergedPageSet();
  const selected = new Set();
  for (let i = 1; i <= state.sheetUpload.mergedPageCount; i += 1) {
    if (!assigned.has(i)) {
      selected.add(i);
    }
  }
  state.sheetUpload.mergedSelectedPages = selected;
  renderMergedPageGrid();
  renderMergedSelectionSummary();
}

function clearMergedSelection() {
  state.sheetUpload.mergedSelectedPages = new Set();
  renderMergedPageGrid();
  renderMergedSelectionSummary();
}

function renderMergedDraftList() {
  const drafts = state.sheetUpload.mergedDrafts;
  if (!drafts.length) {
    els.mergedDraftList.innerHTML = '<p class="empty-note">아직 등록된 곡이 없습니다.</p>';
    return;
  }

  els.mergedDraftList.innerHTML = drafts
    .map((draft) => {
      const duplicateText = draft.duplicateCount
        ? `중복 의심 ${draft.duplicateCount}건 (저장 시 자동 건너뜀)`
        : "중복 없음";
      const duplicateClass = draft.duplicateCount ? "warn" : "ok";
      return `
        <article class="merged-draft-item">
          <div class="merged-draft-head">
            <strong>${escapeHtml(draft.title)} ${draft.key ? `(${escapeHtml(draft.key)})` : ""}</strong>
            <button class="ghost-btn" type="button" data-remove-draft-id="${draft.id}">삭제</button>
          </div>
          <p class="muted">페이지: ${escapeHtml(formatPageRanges(draft.pages))}</p>
          <p class="duplicate-hint ${duplicateClass}">${duplicateText}</p>
        </article>
      `;
    })
    .join("");
}

function removeMergedDraft(id) {
  state.sheetUpload.mergedDrafts = state.sheetUpload.mergedDrafts.filter((draft) => draft.id !== id);
  renderSheetUploadUi();
}

function updateDuplicateHintForSingle() {
  scheduleDuplicateHintSearch("single");
}

function updateDuplicateHintForMergedComposer() {
  scheduleDuplicateHintSearch("merged");
}

function scheduleDuplicateHintSearch(type) {
  if (state.sheetUpload.duplicateHintTimer) {
    window.clearTimeout(state.sheetUpload.duplicateHintTimer);
    state.sheetUpload.duplicateHintTimer = null;
  }

  state.sheetUpload.duplicateHintTimer = window.setTimeout(async () => {
    if (type === "single") {
      await runDuplicateHintForSingle();
    } else {
      await runDuplicateHintForMergedComposer();
    }
  }, 420);
}

async function runDuplicateHintForSingle() {
  const title = els.sheetSingleTitle.value.trim();
  const key = els.sheetSingleKey.value.trim();
  if (!title) {
    setDuplicateHint(els.sheetSingleDuplicate, els.sheetSingleDuplicateList, null);
    return;
  }

  const seq = ++state.sheetUpload.duplicateHintSeq;
  setDuplicateHint(els.sheetSingleDuplicate, els.sheetSingleDuplicateList, { busy: true });
  const result = await findDuplicateSheets({ title, key });
  if (seq !== state.sheetUpload.duplicateHintSeq) {
    return;
  }
  setDuplicateHint(els.sheetSingleDuplicate, els.sheetSingleDuplicateList, result);
}

async function runDuplicateHintForMergedComposer() {
  const title = els.mergedSongTitle.value.trim();
  const key = els.mergedSongKey.value.trim();
  if (!title) {
    setDuplicateHint(els.mergedDuplicateHint, els.mergedDuplicateList, null);
    return;
  }

  const seq = ++state.sheetUpload.duplicateHintSeq;
  setDuplicateHint(els.mergedDuplicateHint, els.mergedDuplicateList, { busy: true });
  const result = await findDuplicateSheets({ title, key });
  if (seq !== state.sheetUpload.duplicateHintSeq) {
    return;
  }
  setDuplicateHint(els.mergedDuplicateHint, els.mergedDuplicateList, result);
}

function setDuplicateHint(element, listElement, result) {
  if (!element) {
    return;
  }
  element.classList.remove("warn", "ok");

  if (!result) {
    element.textContent = "";
    renderDuplicateMatchList(listElement, null);
    return;
  }

  if (result.busy) {
    element.textContent = "중복 악보 검색 중...";
    renderDuplicateMatchList(listElement, null);
    return;
  }

  const count = Number(result.exactCount || 0);
  const similarCount = Number(result.similarCount || 0);
  if (count > 0) {
    element.textContent = `같은 곡 악보가 ${count}개 있습니다.`;
    element.classList.add("warn");
    renderDuplicateMatchList(listElement, result);
    return;
  }

  if (similarCount > 0) {
    element.textContent = `유사 제목 악보 ${similarCount}개가 있습니다.`;
    renderDuplicateMatchList(listElement, result);
    return;
  }

  element.textContent = "중복 악보 없음";
  element.classList.add("ok");
  renderDuplicateMatchList(listElement, result);
}

function renderDuplicateMatchList(listElement, result) {
  if (!listElement) {
    return;
  }
  if (!result || result.busy) {
    listElement.innerHTML = "";
    return;
  }

  const rows = [];
  const localMatches = Array.isArray(result.localSimilarMatches)
    ? result.localSimilarMatches
    : Array.isArray(result.localMatches)
      ? result.localMatches
      : [];
  const driveMatches = Array.isArray(result.driveSimilarMatches)
    ? result.driveSimilarMatches
    : Array.isArray(result.driveMatches)
      ? result.driveMatches
      : [];

  localMatches.slice(0, 12).forEach((item) => {
    rows.push({
      source: "로컬",
      title: item.title || stripPdfExtension(item.fileName || "악보"),
      key: item.key || "",
      fileName: item.fileName || "",
    });
  });

  driveMatches.slice(0, 12).forEach((item) => {
    const parsed = extractTitleKeyFromFilename(item.name || "");
    rows.push({
      source: "Drive",
      title: parsed.title || stripPdfExtension(item.name || "악보"),
      key: parsed.key || "",
      fileName: item.name || "",
    });
  });

  if (!rows.length) {
    listElement.innerHTML = "";
    return;
  }

  listElement.innerHTML = rows
    .slice(0, 14)
    .map(
      (row) => `<div class="duplicate-match-item"><span class="duplicate-source">${escapeHtml(
        row.source
      )}</span><span>${escapeHtml(row.title)}${row.key ? ` (${escapeHtml(row.key)})` : ""}</span><span class="duplicate-file">${escapeHtml(
        row.fileName
      )}</span></div>`
    )
    .join("");
}

async function addMergedDraftFromSelection() {
  if (!state.sheetUpload.mergedPageCount) {
    setSheetOperationStatus("합쳐진 PDF 미리보기를 먼저 불러오세요.", false);
    return;
  }

  const title = els.mergedSongTitle.value.trim();
  const key = els.mergedSongKey.value.trim();
  const pages = Array.from(state.sheetUpload.mergedSelectedPages).sort((a, b) => a - b);

  if (!pages.length) {
    setSheetOperationStatus("곡으로 등록할 페이지를 먼저 선택하세요.", false);
    return;
  }
  if (!title) {
    setSheetOperationStatus("곡 제목을 입력하세요.", false);
    return;
  }

  setSheetOperationStatus(`"${title}" 중복 여부 확인 중...`, true);
  const duplicate = await findDuplicateSheets({ title, key });

  state.sheetUpload.mergedDrafts.push({
    id: generateId(),
    title,
    key,
    pages,
    duplicateCount: duplicate.exactCount,
  });

  els.mergedSongTitle.value = "";
  els.mergedSongKey.value = "";
  setDuplicateHint(els.mergedDuplicateHint, els.mergedDuplicateList, null);
  clearMergedSelection();
  renderMergedDraftList();

  if (duplicate.exactCount > 0) {
    setSheetOperationStatus(`"${title}"는 중복 의심(${duplicate.exactCount})으로 저장 시 자동 건너뜁니다.`, false);
  } else {
    setSheetOperationStatus(`"${title}"가 저장 대기 목록에 추가되었습니다.`, false);
  }
}

async function saveMergedDrafts() {
  const drafts = state.sheetUpload.mergedDrafts.slice();
  if (!drafts.length) {
    setSheetOperationStatus("저장할 곡 목록이 없습니다.", false);
    return;
  }

  if (!state.sheetUpload.mergedFileBytes || !window.PDFLib || !window.PDFLib.PDFDocument) {
    setSheetOperationStatus("합쳐진 PDF를 다시 불러오세요.", false);
    return;
  }

  setSheetOperationStatus("곡별 악보 파일 생성 및 저장 중...", true);

  try {
    const source = await window.PDFLib.PDFDocument.load(state.sheetUpload.mergedFileBytes);
    const uploadedAt = new Date().toISOString();
    let savedCount = 0;
    const skippedTitles = [];

    for (let i = 0; i < drafts.length; i += 1) {
      const draft = drafts[i];
      setSheetOperationStatus(`[${i + 1}/${drafts.length}] ${draft.title} 처리 중...`, true);

      const duplicate = await findDuplicateSheets({ title: draft.title, key: draft.key });
      if (duplicate.exactCount > 0) {
        skippedTitles.push(draft.title);
        continue;
      }

      const segmentBytes = await buildSegmentPdfBytes(source, draft.pages);
      const segmentName = sanitizeFilename(`${draft.title}${draft.key ? `_${draft.key}` : ""}.pdf`);
      const segmentFile = new File([segmentBytes], segmentName, { type: "application/pdf" });

      const fileId = generateId();
      const storage = await saveSheetFile(fileId, segmentFile);

      state.data.sheets.push(
        createSheetRecord({
          fileId,
          fileName: segmentName,
          uploadedAt,
          title: draft.title,
          key: draft.key,
          pageStart: 1,
          pageEnd: null,
          storage: storage.storage,
          driveFileId: storage.driveFileId,
        })
      );
      savedCount += 1;
    }

    saveData();
    state.sheetUpload.mergedDrafts = [];
    clearMergedSelection();
    renderSheetUploadUi();
    renderSheetLibrary();

    const skipText = skippedTitles.length
      ? ` / 중복으로 건너뜀: ${skippedTitles.join(", ")}`
      : "";
    setSheetOperationStatus(`저장 완료: ${savedCount}곡${skipText}`, false);
  } catch (error) {
    setSheetOperationStatus(`합쳐진 악보 저장 실패: ${error.message}`, false);
  }
}

async function buildSegmentPdfBytes(sourcePdf, pages) {
  const target = await window.PDFLib.PDFDocument.create();
  const indices = pages.map((page) => Math.max(0, page - 1));
  const copied = await target.copyPages(sourcePdf, indices);
  copied.forEach((page) => target.addPage(page));
  return target.save();
}

function formatPageRanges(pages) {
  if (!pages.length) {
    return "-";
  }

  const sorted = Array.from(new Set(pages)).sort((a, b) => a - b);
  const ranges = [];
  let start = sorted[0];
  let end = sorted[0];

  for (let i = 1; i < sorted.length; i += 1) {
    const current = sorted[i];
    if (current === end + 1) {
      end = current;
      continue;
    }
    ranges.push(start === end ? `${start}` : `${start}-${end}`);
    start = current;
    end = current;
  }

  ranges.push(start === end ? `${start}` : `${start}-${end}`);
  return ranges.join(", ");
}

async function findDuplicateSheets({ title, key }) {
  const normalizedTitle = normalizeSheetLookup(title);
  if (!normalizedTitle) {
    return {
      exactCount: 0,
      similarCount: 0,
      localMatches: [],
      driveMatches: [],
      localSimilarMatches: [],
      driveSimilarMatches: [],
    };
  }

  const normalizedKey = normalizeKeyText(key || "");
  const localScored = scoreLocalSheetCandidates(normalizedTitle, normalizedKey);
  const driveScored = await searchDriveDuplicateCandidates(normalizedTitle, normalizedKey, {
    allowPartial: true,
  });

  const localMatches = localScored.filter((item) => item.matchType === "exact").map((item) => item.sheet);
  const driveMatches = driveScored
    .filter((item) => item.matchType === "exact")
    .map((item) => ({ id: item.id, name: item.name }));
  const localSimilarMatches = uniqueByKey(localScored.map((item) => item.sheet), (sheet) => sheet.id);
  const driveSimilarMatches = uniqueByKey(
    driveScored.map((item) => ({ id: item.id, name: item.name })),
    (item) => item.id
  );

  return {
    exactCount: localMatches.length + driveMatches.length,
    similarCount: localSimilarMatches.length + driveSimilarMatches.length,
    localMatches,
    driveMatches,
    localSimilarMatches,
    driveSimilarMatches,
  };
}

function normalizeSheetLookup(value) {
  return normalizeUnicodeString(value)
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9가-힣#bm]/g, "");
}

function getSheetCandidateTitleTokens(sheet) {
  const title = String(sheet.title || "");
  const fileName = stripPdfExtension(sheet.fileName || "");
  return [
    normalizeSheetLookup(title),
    normalizeSheetLookup(stripKeySuffixFromTitleText(title)),
    normalizeSheetLookup(fileName),
    normalizeSheetLookup(stripKeySuffixFromTitleText(fileName)),
  ].filter(Boolean);
}

function scoreLocalSheetCandidates(normalizedTitle, normalizedKey) {
  return state.data.sheets
    .map((sheet) => {
      const tokens = getSheetCandidateTitleTokens(sheet);
      const titleMatch = getBestTitleMatch(tokens, normalizedTitle);
      if (titleMatch === "none") {
        return null;
      }

      const sheetKey = normalizeKeyText(sheet.key || "");
      const hasMismatchedKey = Boolean(normalizedKey && sheetKey && sheetKey !== normalizedKey);
      const matchType = titleMatch === "exact" && !hasMismatchedKey ? "exact" : "partial";
      return { sheet, matchType };
    })
    .filter(Boolean);
}

function getBestTitleMatch(tokens, normalizedTitle) {
  let best = "none";
  tokens.forEach((token) => {
    if (!token || !normalizedTitle) {
      return;
    }
    if (token === normalizedTitle) {
      best = "exact";
      return;
    }
    if (best !== "exact" && (token.includes(normalizedTitle) || normalizedTitle.includes(token))) {
      best = "partial";
    }
  });
  return best;
}

function uniqueByKey(items, keyFn) {
  const map = new Map();
  (items || []).forEach((item) => {
    const key = keyFn(item);
    if (!key || map.has(key)) {
      return;
    }
    map.set(key, item);
  });
  return Array.from(map.values());
}

async function searchDriveDuplicateCandidates(normalizedTitle, normalizedKey, options = {}) {
  if (!isDriveEnabled() || !normalizedTitle) {
    return [];
  }

  const allowPartial = options.allowPartial !== false;

  try {
    const files = await listDrivePdfFilesForLookup();
    return files
      .map((file) => {
        const name = stripPdfExtension(file.name || "");
        const titleTokens = [
          normalizeSheetLookup(name),
          normalizeSheetLookup(stripKeySuffixFromTitleText(name)),
        ].filter(Boolean);
        const titleMatch = getBestTitleMatch(titleTokens, normalizedTitle);
        if (titleMatch === "none") {
          return null;
        }

        if (!allowPartial && titleMatch !== "exact") {
          return null;
        }

        const parsed = extractTitleKeyFromFilename(name);
        const parsedKey = normalizeKeyText(parsed.key || "");
        const hasMismatchedKey = Boolean(normalizedKey && parsedKey && parsedKey !== normalizedKey);
        const matchType = titleMatch === "exact" && !hasMismatchedKey ? "exact" : "partial";

        if (!allowPartial && matchType !== "exact") {
          return null;
        }

        return {
          id: file.id,
          name: file.name,
          matchType,
        };
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

async function listDrivePdfFilesForLookup() {
  if (!isDriveEnabled()) {
    return [];
  }

  const cache = state.cloud.driveFileIndexCache;
  const now = Date.now();
  if (cache && Array.isArray(cache.files) && now - cache.fetchedAt < 90 * 1000) {
    return cache.files;
  }

  const token = await ensureDriveAccessToken();
  if (!token) {
    return [];
  }

  const folderId = state.config.drive.folderId;
  const query = `'${folderId}' in parents and trashed=false and mimeType='application/pdf'`;
  let pageToken = "";
  const files = [];

  do {
    const params = new URLSearchParams({
      fields: "nextPageToken,files(id,name)",
      pageSize: "1000",
      q: query,
      includeItemsFromAllDrives: "true",
      supportsAllDrives: "true",
    });
    if (pageToken) {
      params.set("pageToken", pageToken);
    }
    if (state.config.drive.apiKey) {
      params.set("key", state.config.drive.apiKey);
    }

    const response = await fetch(`https://www.googleapis.com/drive/v3/files?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Drive 목록 조회 실패 (${response.status})`);
    }
    const data = await response.json();
    const list = Array.isArray(data.files) ? data.files : [];
    list.forEach((item) => {
      if (item && item.id && item.name) {
        files.push({ id: item.id, name: item.name });
      }
    });
    pageToken = String(data.nextPageToken || "");
  } while (pageToken && files.length < 4000);

  state.cloud.driveFileIndexCache = {
    fetchedAt: now,
    files,
  };
  return files;
}

function stripPdfExtension(name) {
  return normalizeUnicodeString(name).replace(/\.(pdf|png|jpe?g)$/i, "");
}

function stripKeySuffixFromTitleText(name) {
  return normalizeUnicodeString(name)
    .replace(/\((?:[A-G](?:#|b)?m?)\)\s*$/i, "")
    .replace(/[\s_-]+(?:[A-G](?:#|b)?m?)\s*$/i, "")
    .trim();
}

async function onSingleSheetUpload(event) {
  event.preventDefault();

  const selectedFiles = getSelectedSingleUploadFiles();
  const selected = selectedFiles[0] || null;
  if (!selectedFiles.length || !selected) {
    setSheetOperationStatus("업로드 파일을 먼저 선택하세요.", false);
    return;
  }
  if (selectedFiles.some((file) => !isSheetUploadFile(file))) {
    setSheetOperationStatus("PDF, PNG, JPG 파일만 업로드할 수 있습니다.", false);
    return;
  }

  const parsed = extractTitleKeyFromFilename(selected.name);
  const title = els.sheetSingleTitle.value.trim() || parsed.title;
  const key = els.sheetSingleKey.value.trim() || parsed.key;

  if (!title) {
    setSheetOperationStatus("곡 제목을 입력하세요.", false);
    return;
  }

  setSheetOperationStatus("중복 악보 확인 중...", true);
  const duplicate = await findDuplicateSheets({ title, key });
  setDuplicateHint(els.sheetSingleDuplicate, els.sheetSingleDuplicateList, duplicate);

  if (duplicate.exactCount > 0) {
    window.alert(`같은 악보가 ${duplicate.exactCount}개 있어 업로드를 건너뜁니다.`);
    setSheetOperationStatus(`같은 악보 ${duplicate.exactCount}개가 있어 업로드를 건너뜁니다.`, false);
    return;
  }

  setSheetOperationStatus("악보 업로드 중...", true);
  try {
    const file =
      selectedFiles.length > 1
        ? await mergeSheetUploadFilesToPdf(selectedFiles, title || "악보")
        : isImageFile(selected)
          ? await convertImageFileToPdf(selected, title || "악보")
          : selected;
    const fileId = generateId();
    const storage = await saveSheetFile(fileId, file);
    state.data.sheets.push(
      createSheetRecord({
        fileId,
        fileName: file.name,
        uploadedAt: new Date().toISOString(),
        title,
        key,
        pageStart: null,
        pageEnd: null,
        storage: storage.storage,
        driveFileId: storage.driveFileId,
      })
    );
    saveData();
    els.sheetSingleForm.reset();
    state.sheetUpload.singleDroppedFile = null;
    state.sheetUpload.singleDroppedFiles = [];
    setDropzoneFileName(els.sheetSingleFileName, null);
    resetSinglePreview(false);
    setDuplicateHint(els.sheetSingleDuplicate, els.sheetSingleDuplicateList, null);
    renderSheetLibrary();
    setSheetOperationStatus(
      selectedFiles.length > 1
        ? `개별 악보 ${selectedFiles.length}개를 PDF 1개로 합쳐 저장 완료`
        : isImageFile(selected)
          ? "개별 이미지 악보를 PDF로 변환 후 저장 완료"
          : "개별 악보 저장 완료",
      false
    );
  } catch (error) {
    setSheetOperationStatus(`개별 악보 저장 실패: ${error.message}`, false);
  }
}

function renderSheetLibrary() {
  const keyword = normalizeSheetLookup(els.sheetSearch.value || "");
  if (!keyword) {
    els.sheetLibrary.innerHTML = "";
    return;
  }

  if (state.sheetLibraryDriveLoading) {
    els.sheetLibrary.innerHTML = '<p class="empty-note">Drive 검색 중...</p>';
    return;
  }

  if (state.sheetLibraryDriveError) {
    els.sheetLibrary.innerHTML = `<p class="empty-note">${escapeHtml(state.sheetLibraryDriveError)}</p>`;
    return;
  }

  const hits = Array.isArray(state.sheetLibraryDriveHits) ? state.sheetLibraryDriveHits : [];
  if (!hits.length) {
    els.sheetLibrary.innerHTML = '<p class="empty-note">검색 결과가 없습니다.</p>';
    return;
  }

  els.sheetLibrary.innerHTML = hits
    .map((item) => {
      const parsed = extractTitleKeyFromFilename(item.name || "");
      const title = parsed.title || stripPdfExtension(item.name || "악보");
      const key = parsed.key || "-";
      return `
        <article class="sheet-item">
          <div class="sheet-meta">
            <strong>${escapeHtml(title)}</strong>
            <span>${escapeHtml(key)} / Drive</span>
          </div>
          <div class="sheet-meta">
            <span>${escapeHtml(item.name || "")}</span>
          </div>
          <div class="sheet-actions">
            <button class="ghost-btn" type="button" data-sheet-drive-action="preview" data-drive-file-id="${escapeHtmlAttr(item.id)}" data-drive-name="${escapeHtmlAttr(item.name || "")}">미리보기</button>
            <button class="ghost-btn" type="button" data-sheet-drive-action="download" data-drive-file-id="${escapeHtmlAttr(item.id)}" data-drive-name="${escapeHtmlAttr(item.name || "")}">다운로드</button>
            <button class="ghost-btn" type="button" data-sheet-drive-action="delete" data-drive-file-id="${escapeHtmlAttr(item.id)}">삭제</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function scheduleSheetLibraryDriveSearch(rawQuery) {
  const query = normalizeSheetLookup(rawQuery || "");
  state.sheetLibraryDriveQuery = query;
  state.sheetLibraryDriveError = "";
  state.sheetLibraryDriveHits = [];

  if (state.sheetLibraryDriveTimer) {
    window.clearTimeout(state.sheetLibraryDriveTimer);
    state.sheetLibraryDriveTimer = null;
  }

  if (!query) {
    state.sheetLibraryDriveLoading = false;
    return;
  }

  state.sheetLibraryDriveLoading = true;
  const seq = Number(state.sheetLibraryDriveSeq || 0) + 1;
  state.sheetLibraryDriveSeq = seq;
  state.sheetLibraryDriveTimer = window.setTimeout(() => {
    void runSheetLibraryDriveSearch(query, seq);
  }, 260);
}

async function runSheetLibraryDriveSearch(query, seq) {
  if (!isDriveEnabled()) {
    state.sheetLibraryDriveLoading = false;
    state.sheetLibraryDriveError = "Drive 설정이 필요합니다.";
    renderSheetLibrary();
    return;
  }

  try {
    await ensureDriveAccessToken();
    const files = await listDrivePdfFilesForLookup();
    if (Number(state.sheetLibraryDriveSeq || 0) !== seq) {
      return;
    }
    const filtered = files
      .filter((file) => {
        const keyA = normalizeSheetLookup(file.name || "");
        const keyB = normalizeSheetLookup(stripKeySuffixFromTitleText(stripPdfExtension(file.name || "")));
        return keyA.includes(query) || keyB.includes(query);
      })
      .slice(0, 300);
    state.sheetLibraryDriveHits = filtered;
    state.sheetLibraryDriveError = "";
  } catch {
    if (Number(state.sheetLibraryDriveSeq || 0) !== seq) {
      return;
    }
    state.sheetLibraryDriveHits = [];
    state.sheetLibraryDriveError = "Drive 검색 실패 (로그인/권한 확인)";
  } finally {
    if (Number(state.sheetLibraryDriveSeq || 0) === seq) {
      state.sheetLibraryDriveLoading = false;
      renderSheetLibrary();
    }
  }
}

function makeVirtualDriveSheet(fileId, fileName) {
  const parsed = extractTitleKeyFromFilename(fileName || "");
  return {
    id: `drive-${fileId}`,
    fileId: "",
    fileName: fileName || "",
    title: parsed.title || stripPdfExtension(fileName || "악보"),
    key: parsed.key || "",
    pageStart: null,
    pageEnd: null,
    uploadedAt: "",
    storage: "drive",
    driveFileId: String(fileId || ""),
  };
}

function renderRotation() {
  const month = state.rotationMonth;
  els.rotationMonthLabel.textContent = `${month.getFullYear()}년 ${month.getMonth() + 1}월`;
  els.toggleRotationEdit.setAttribute("aria-pressed", String(state.rotationEditMode));
  els.toggleRotationEdit.textContent = state.rotationEditMode ? "완료" : "입력/수정";
  if (els.addRotationColumn) {
    els.addRotationColumn.hidden = !state.rotationEditMode;
  }

  const unavailabilities = state.data.unavailability
    .slice()
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

  if (!unavailabilities.length) {
    els.rotationUnavailability.innerHTML = '<p class="empty-note">등록된 불가능 일정이 없습니다.</p>';
  } else {
    els.rotationUnavailability.innerHTML = unavailabilities
      .map(
        (item) =>
          `<span class="chip">${escapeHtml(item.name)} / ${escapeHtml(item.role || "전체")} / ${formatDate(
            item.startDate
          )} ~ ${formatDate(item.endDate)} <button class="ghost-btn" data-unavailability-action="edit" data-unavailable-id="${item.id}" type="button">수정</button><button class="ghost-btn" data-unavailability-action="delete" data-unavailable-id="${item.id}" type="button">삭제</button></span>`
      )
      .join("");
  }

  const columns = getRotationColumnsForMonth(month);
  if (!columns.length) {
    els.rotationList.innerHTML = '<p class="empty-note">선택한 달에 로테이션이 없습니다.</p>';
    return;
  }

  const headerCells = columns
    .map((column) => {
      const canRemove = state.rotationEditMode && isRemovableRotationDate(column.date);
      return `
        <th>
          <div class="rotation-date-head">
            <span>${escapeHtml(formatShortDate(column.date))}</span>
            ${
              canRemove
                ? `<button class="ghost-btn compact-btn rotation-date-remove" type="button" data-rotation-remove-date="${escapeHtmlAttr(
                    column.date
                  )}" aria-label="${escapeHtmlAttr(formatDate(column.date))} 삭제">삭제</button>`
                : ""
            }
          </div>
        </th>
      `;
    })
    .join("");

  const addHeaderCell = state.rotationEditMode
    ? '<th class="rotation-add-col-cell"><button class="ghost-btn compact-btn" type="button" id="rotation-inline-add">+</button></th>'
    : "";

  const eventCells = columns
    .map((column) => {
      if (!state.rotationEditMode) {
        return `<td>${escapeHtml(column.rotation ? column.rotation.name : "-")}</td>`;
      }
      const value = column.rotation ? column.rotation.name || "주일예배" : "주일예배";
      return `<td>${renderRotationEditInput(column.date, "name", value, "일정 이름")}</td>`;
    })
    .join("");
  const addEventCell = state.rotationEditMode ? '<td class="rotation-add-col-cell"></td>' : "";

  const practiceCells = columns
    .map((column) => {
      if (!state.rotationEditMode) {
        return `<td>${escapeHtml(formatRotationPractice(column.rotation))}</td>`;
      }
      const value = column.rotation ? column.rotation.practiceDate || "" : "";
      return `<td>${renderRotationPracticeDateInput(column.date, value)}</td>`;
    })
    .join("");
  const addPracticeCell = state.rotationEditMode ? '<td class="rotation-add-col-cell"></td>' : "";

  const roleGroupStarts = new Set(["인도", "메인건반", "여자싱어", "음향"]);
  const roleRows = ROLE_NAMES.map((role) => {
    const cells = columns
      .map((column) => {
        const unavailableNames = getUnavailableNamesForRoleDate(role, column.date);
        const unavailableHtml = renderUnavailableCellNotices(unavailableNames);

        if (state.rotationEditMode) {
          const raw = column.rotation ? column.rotation.assignments[role] || "" : "";
          return `<td class="rotation-cell">${renderRotationEditInput(column.date, "assignment", raw, `${role} 담당`, role)}${unavailableHtml}</td>`;
        }

        if (!column.rotation && !unavailableNames.length) {
          return '<td class="rotation-cell rotation-cell-empty">-</td>';
        }
        const raw = column.rotation ? column.rotation.assignments[role] || "" : "";
        const marked = annotateNames(raw, column.date, role);
        return `<td class="rotation-cell">${marked || '<span class="rotation-cell-empty">-</span>'}${unavailableHtml}</td>`;
      })
      .join("");
    const addRoleCell = state.rotationEditMode ? '<td class="rotation-add-col-cell"></td>' : "";
    return `<tr class="${roleGroupStarts.has(role) ? "group-start" : ""}"><th class="rotation-role-cell">${escapeHtml(
      role
    )}</th>${cells}${addRoleCell}</tr>`;
  }).join("");

  els.rotationList.innerHTML = `
    <table class=\"rotation-month-table ${state.rotationEditMode ? "is-editing" : ""}\">
      <thead>
        <tr>
          <th>파트</th>
          ${headerCells}
          ${addHeaderCell}
        </tr>
        <tr class=\"month-sub-row\">
          <th>예배</th>
          ${eventCells}
          ${addEventCell}
        </tr>
        <tr class=\"month-sub-row\">
          <th>연습</th>
          ${practiceCells}
          ${addPracticeCell}
        </tr>
      </thead>
      <tbody>
        ${roleRows}
      </tbody>
    </table>
  `;

  const inlineAdd = document.getElementById("rotation-inline-add");
  if (inlineAdd) {
    inlineAdd.addEventListener("click", () => {
      if (els.addRotationColumn) {
        els.addRotationColumn.click();
      }
    });
  }
}

function renderRotationEditInput(date, field, value, placeholder, role = "") {
  const roleAttr = role ? ` data-role="${escapeHtmlAttr(role)}"` : "";
  return `<input class="rotation-edit-input" data-date="${escapeHtmlAttr(date)}" data-rotation-field="${escapeHtmlAttr(
    field
  )}"${roleAttr} type="text" placeholder="${escapeHtmlAttr(placeholder)}" value="${escapeHtmlAttr(value || "")}" />`;
}

function renderRotationPracticeDateInput(date, value) {
  const weekday = computePracticeShortDay(value);
  return `
    <div class="rotation-practice-edit">
      <input class="rotation-edit-input" data-date="${escapeHtmlAttr(date)}" data-rotation-field="practiceDate" type="date" value="${escapeHtmlAttr(
        value || ""
      )}" />
      <span class="rotation-practice-weekday">${escapeHtml(weekday || "-")}</span>
    </div>
  `;
}

function formatRotationPractice(rotation) {
  if (!rotation) {
    return "-";
  }
  if (rotation.practiceDate) {
    const short = formatShortDate(rotation.practiceDate);
    const day = computePracticeShortDay(rotation.practiceDate);
    if (short !== "-" && day) {
      return `${short} (${day})`;
    }
  }
  return rotation.practiceDay || "-";
}

function getRotationColumnsForMonth(month) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const monthEnd = new Date(year, monthIndex + 1, 0).getDate();
  const dateSet = new Set();

  for (let day = 1; day <= monthEnd; day += 1) {
    const date = new Date(year, monthIndex, day);
    if (date.getDay() === 0) {
      dateSet.add(toIsoDate(date));
    }
  }

  state.data.rotations.forEach((rotation) => {
    const date = parseIsoDate(rotation.worshipDate);
    if (!date) {
      return;
    }
    if (date.getFullYear() === year && date.getMonth() === monthIndex) {
      dateSet.add(rotation.worshipDate);
    }
  });

  return Array.from(dateSet)
    .sort()
    .map((date) => ({
      date,
      rotation: aggregateRotationForDate(date),
    }));
}

function isRemovableRotationDate(date) {
  const parsed = parseIsoDate(date);
  if (!parsed) {
    return false;
  }
  return parsed.getDay() !== 0;
}

function removeRotationDateAndSync(date) {
  if (!date || !isRemovableRotationDate(date)) {
    return;
  }

  state.data.rotations = state.data.rotations.filter((rotation) => rotation.worshipDate !== date);
  if (state.data.services && state.data.services[date]) {
    delete state.data.services[date];
  }
  if (state.data.selectedServiceDate === date) {
    state.data.selectedServiceDate = "";
  }
  sortRotations();
  saveData();
  renderAll();
}

function aggregateRotationForDate(date) {
  const rows = state.data.rotations
    .filter((rotation) => rotation.worshipDate === date)
    .sort((a, b) => a.name.localeCompare(b.name));

  if (!rows.length) {
    return null;
  }

  const assignments = {};
  ROLE_NAMES.forEach((role) => {
    const values = rows
      .map((row) => splitNames(row.assignments[role] || ""))
      .flat();
    assignments[role] = uniqueJoin(values);
  });

  const practiceDates = rows
    .map((row) => String(row.practiceDate || ""))
    .filter(Boolean);
  const normalizedPracticeDate = practiceDates.length ? practiceDates.sort()[0] : "";
  const practiceDay = normalizedPracticeDate
    ? computePracticeDayLabel(normalizedPracticeDate)
    : uniqueJoin(rows.map((row) => row.practiceDay).filter(Boolean));

  return {
    name: uniqueJoin(rows.map((row) => row.name)) || "주일예배",
    practiceDate: normalizedPracticeDate,
    practiceDay,
    assignments,
  };
}

function applyRotationInlineUpdate(date, field, value, role) {
  if (!date || !field) {
    return;
  }

  const target = getOrCreateRotationByDate(date);
  if (!target) {
    return;
  }

  const nextValue = String(value || "").trim();

  if (field === "name") {
    target.name = nextValue || "주일예배";
  } else if (field === "practiceDay") {
    target.practiceDay = nextValue;
  } else if (field === "practiceDate") {
    target.practiceDate = nextValue;
    target.practiceDay = computePracticeDayLabel(nextValue);
  } else if (field === "assignment" && role) {
    target.assignments[role] = nextValue;
  }

  syncRotationToService(date);
  sortRotations();
  saveData();
  if (field === "practiceDate" || field === "practiceDay" || field === "name") {
    renderHeader();
    renderHome();
    renderCalendar();
  }
}

function getOrCreateRotationByDate(date) {
  const rows = state.data.rotations.filter((rotation) => rotation.worshipDate === date);

  if (!rows.length) {
    const created = {
      id: generateId(),
      name: "주일예배",
      practiceDate: "",
      practiceDay: "",
      worshipDate: date,
      assignments: ROLE_NAMES.reduce((acc, role) => {
        acc[role] = "";
        return acc;
      }, {}),
    };
    state.data.rotations.push(created);
    return created;
  }

  const primary = rows[0];
  if (!primary.assignments || typeof primary.assignments !== "object") {
    primary.assignments = {};
  }

  ROLE_NAMES.forEach((name) => {
    if (typeof primary.assignments[name] !== "string") {
      primary.assignments[name] = "";
    }
  });

  if (rows.length > 1) {
    primary.name = uniqueJoin(rows.map((row) => row.name || "").filter(Boolean)) || "주일예배";
    const practiceDates = Array.from(new Set(rows.map((row) => row.practiceDate || "").filter(Boolean))).sort();
    primary.practiceDate = practiceDates[0] || "";
    primary.practiceDay = primary.practiceDate
      ? computePracticeDayLabel(primary.practiceDate)
      : uniqueJoin(rows.map((row) => row.practiceDay || "").filter(Boolean));

    ROLE_NAMES.forEach((role) => {
      const merged = rows
        .map((row) => splitNames((row.assignments && row.assignments[role]) || ""))
        .flat();
      primary.assignments[role] = uniqueJoin(merged);
    });

    const keepId = primary.id;
    state.data.rotations = state.data.rotations.filter((row) => row.worshipDate !== date || row.id === keepId);
  }

  if (!primary.name) {
    primary.name = "주일예배";
  }
  if (typeof primary.practiceDate !== "string") {
    primary.practiceDate = "";
  }
  if (!primary.practiceDay && primary.practiceDate) {
    primary.practiceDay = computePracticeDayLabel(primary.practiceDate);
  }

  return primary;
}

function normalizeRotationsForMonth(month) {
  const columns = getRotationColumnsForMonth(month);
  columns.forEach((column) => {
    getOrCreateRotationByDate(column.date);
  });
  sortRotations();
}

function splitNames(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function uniqueJoin(values) {
  const unique = Array.from(new Set(values.filter(Boolean)));
  return unique.join(", ");
}

function renderSongEditorRows() {
  if (!state.serviceFormSongs.length) {
    els.songEditorList.innerHTML = '<p class="empty-note">곡 추가 버튼으로 시작하세요.</p>';
    updateBuildWeeklyPacketButtonState();
    return;
  }

  els.songEditorList.innerHTML = state.serviceFormSongs
    .map((song, index) => {
      const selectedSheetIds = getSongSheetIds(song);
      const selectedSheets = selectedSheetIds
        .map((id) => state.data.sheets.find((item) => item.id === id))
        .filter(Boolean);
      const hasSheet = Boolean(selectedSheets.length && song.title);
      const includeInPacket = song.packetSelected !== false;
      const sheetSearchQuery = getServiceFormSheetSearchQuery(song, selectedSheets[0] || null);
      const searchResults = renderSongSheetSearchResults(song, index, sheetSearchQuery);
      const addMode = isSongSheetAddMode(song);
      const searchPlaceholder = addMode ? "추가할 악보 검색하기" : "악보 검색하기";
      const showInlinePreview = Boolean(
        state.serviceInlinePreviewUrl && state.serviceInlinePreviewSongId === song.id
      );
      const selectedListMarkup = selectedSheets.length
        ? `
          <div class="song-selected-sheet-list" data-song-selected-list="${index}">
            ${selectedSheets
              .map(
                (sheet) => `
                  <div class="song-selected-sheet-item" draggable="true" data-song-sheet-item="1" data-song-index="${index}" data-sheet-id="${sheet.id}">
                    <span class="song-sheet-item-drag" title="드래그해서 악보 순서 변경">↕</span>
                    <span class="song-selected-sheet-title">${escapeHtml(formatSongSheetLabel(sheet))}</span>
                    <button class="ghost-btn compact-btn" type="button" data-song-action="preview-sheet" data-song-index="${index}" data-sheet-id="${sheet.id}">미리보기</button>
                    <button class="ghost-btn compact-btn" type="button" data-song-action="remove-attached-sheet" data-song-index="${index}" data-sheet-id="${sheet.id}">삭제</button>
                  </div>
                `
              )
              .join("")}
          </div>
        `
        : '<p class="muted">선택된 악보 없음</p>';
      return `
      <div class="song-editor-row ${hasSheet ? "is-ready" : ""} ${addMode ? "is-sheet-add-mode" : ""}" data-index="${index}" data-song-id="${escapeHtmlAttr(song.id)}">
        <div class="song-editor-top">
          <span class="muted">곡 ${index + 1}</span>
          <div class="song-editor-top-actions">
            <button class="ghost-btn compact-btn song-drag-handle" type="button" draggable="true" data-song-drag-handle="1" title="드래그해서 순서 변경">순서 이동</button>
            <button class="ghost-btn compact-btn song-remove-btn" data-remove-song-index="${index}" type="button">삭제</button>
          </div>
        </div>
        <div class="song-editor-grid">
          <input data-field="title" type="text" placeholder="곡 제목" value="${escapeHtmlAttr(song.title)}" />
          <input data-field="key" type="text" placeholder="키" value="${escapeHtmlAttr(song.key)}" />
          <input data-field="tempo" type="text" placeholder="템포" value="${escapeHtmlAttr(song.tempo)}" />
          <input data-field="referenceUrl" type="url" placeholder="유튜브 링크" value="${escapeHtmlAttr(song.referenceUrl)}" />
          <textarea data-field="comment" class="song-comment-input" placeholder="송폼/코멘트">${escapeHtml(
            song.comment || ""
          )}</textarea>
        </div>
        <div class="song-sheet-grid">
          <input class="song-sheet-search-input" data-song-sheet-search="${index}" type="text" placeholder="${escapeHtmlAttr(searchPlaceholder)}" value="${escapeHtmlAttr(
            sheetSearchQuery
          )}" />
          <label class="sheet-merge-toggle">
            <input type="checkbox" data-song-action="toggle-packet" data-song-index="${index}" ${includeInPacket ? "checked" : ""} />
            합치기
          </label>
          <button class="ghost-btn compact-btn ${addMode ? "is-active" : ""}" type="button" data-song-action="toggle-add-sheet" data-song-index="${index}">
            악보추가
          </button>
          <button class="ghost-btn compact-btn" type="button" data-song-action="upload" data-song-index="${index}">악보 업로드</button>
          <button class="ghost-btn compact-btn" type="button" data-song-action="preview" data-song-index="${index}" ${selectedSheets.length ? "" : "disabled"}>대표 미리보기</button>
          <input class="song-sheet-upload-input" data-song-upload-index="${index}" type="file" accept="application/pdf,image/png,image/jpeg" />
        </div>
        ${
          showInlinePreview
            ? `<div class="inline-preview-wrap song-row-inline-preview">
                <div class="inline-preview-head">
                  <span>${escapeHtml(state.serviceInlinePreviewTitle || "악보 미리보기")}</span>
                  <button class="ghost-btn compact-btn" type="button" data-song-action="close-inline-preview" data-song-index="${index}">미리보기 닫기</button>
                </div>
                <iframe class="song-row-preview-frame" src="${escapeHtmlAttr(state.serviceInlinePreviewUrl)}" title="악보 미리보기"></iframe>
              </div>`
            : ""
        }
        <div class="song-sheet-search-results" data-song-sheet-results="${index}">
          ${searchResults}
        </div>
        ${addMode ? '<p class="song-sheet-add-hint">추가 모드: 검색 결과에서 선택하면 기존 악보 뒤에 이어서 추가됩니다.</p>' : ""}
        ${selectedListMarkup}
      </div>
    `
    })
    .join("");

  updateBuildWeeklyPacketButtonState();
}

function getServiceFormSheetSearchQuery(song, selectedSheet = null) {
  if (!song || !song.id) {
    return "";
  }
  const existing = state.serviceFormSheetSearch[song.id];
  if (typeof existing === "string") {
    return existing;
  }
  return selectedSheet ? formatSongSheetLabel(selectedSheet) : "";
}

function renderSongSheetSearchResultsIntoRow(row, index) {
  if (!row || Number.isNaN(index) || !state.serviceFormSongs[index]) {
    return;
  }
  const song = state.serviceFormSongs[index];
  const input = row.querySelector("input[data-song-sheet-search]");
  const container = row.querySelector("[data-song-sheet-results]");
  if (!input || !container) {
    return;
  }
  const query = String(input.value || "").trim();
  state.serviceFormSheetSearch[song.id] = query;
  container.innerHTML = renderSongSheetSearchResults(song, index, query);
}

function renderSongSheetSearchResults(song, index, query) {
  const keyword = String(query || "").trim();
  const addMode = isSongSheetAddMode(song);
  if (!keyword) {
    return "";
  }

  const selectedIds = new Set(getSongSheetIds(song));
  const keywordKey = normalizeSheetLookup(keyword);
  const localCandidates = listSongSheetSearchCandidates(song, keyword).slice(0, 8);
  const localDriveIds = new Set(localCandidates.map((item) => String(item.driveFileId || "")).filter(Boolean));
  const driveState = state.serviceFormDriveHits[song.id];
  const hasDriveForQuery = Boolean(driveState && driveState.queryKey === keywordKey);

  const localMarkup = localCandidates
    .map((sheet) => {
      const selected = selectedIds.has(sheet.id);
      return `
        <button class="sheet-search-hit ${selected ? "is-selected" : ""}" type="button" data-song-sheet-pick="1" data-song-index="${index}" data-sheet-id="${sheet.id}">
          <span class="sheet-search-hit-title">${escapeHtml(formatSongSheetLabel(sheet))}</span>
          <span class="sheet-search-hit-meta">${escapeHtml(formatDateTime(sheet.uploadedAt) || "-")}</span>
        </button>
      `;
    })
    .join("");

  let driveMarkup = "";
  if (hasDriveForQuery && Array.isArray(driveState.items)) {
    driveMarkup = driveState.items
      .filter((item) => item && item.id && !localDriveIds.has(item.id))
      .slice(0, 8)
      .map((item) => {
        const parsed = extractTitleKeyFromFilename(item.name || "");
        const title = parsed.title || stripPdfExtension(item.name || "Drive 악보");
        const key = parsed.key || "";
        const label = key ? `${title} (${key})` : title;
        return `
          <button class="sheet-search-hit sheet-search-hit-drive" type="button" data-song-drive-pick="1" data-song-index="${index}" data-drive-file-id="${escapeHtmlAttr(item.id)}" data-drive-name="${escapeHtmlAttr(item.name || "")}">
            <span class="sheet-search-hit-title">${escapeHtml(label)}</span>
            <span class="sheet-search-hit-meta">Drive</span>
          </button>
        `;
      })
      .join("");
  }

  let statusMarkup = "";
  if (hasDriveForQuery && driveState.loading) {
    statusMarkup = '<p class="muted">Drive 검색 중...</p>';
  } else if (hasDriveForQuery && driveState.error) {
    statusMarkup = `<p class="muted warn">${escapeHtml(driveState.error)}</p>`;
  }

  const driveDone = !isDriveEnabled() || (hasDriveForQuery && !driveState.loading);
  if (selectedIds.size > 0 && !statusMarkup && !localMarkup && !driveMarkup && !addMode) {
    return "";
  }
  if (!localMarkup && !driveMarkup && !statusMarkup && driveDone && addMode) {
    return '<p class="muted">추가할 악보를 찾는 중입니다. 제목을 더 입력해보세요.</p>';
  }
  if (!localMarkup && !driveMarkup && !statusMarkup && driveDone && selectedIds.size === 0) {
    return '<p class="muted warn">검색 결과 없음. 악보 업로드로 추가하세요.</p>';
  }

  return `${statusMarkup}${localMarkup}${driveMarkup}`;
}

function resetServiceFormSheetSearchState() {
  Object.values(state.serviceFormDriveTimers || {}).forEach((timerId) => {
    if (timerId) {
      window.clearTimeout(timerId);
    }
  });
  state.serviceFormSheetSearch = {};
  state.serviceFormDriveHits = {};
  state.serviceFormDriveTimers = {};
  state.serviceFormDriveSeq = {};
  state.serviceFormSheetAddMode = {};
  state.serviceFormDragSongId = "";
}

function clearSongSheetSearchState(songId) {
  const key = String(songId || "");
  if (!key) {
    return;
  }
  const timerId = state.serviceFormDriveTimers[key];
  if (timerId) {
    window.clearTimeout(timerId);
  }
  delete state.serviceFormDriveTimers[key];
  delete state.serviceFormSheetSearch[key];
  delete state.serviceFormDriveHits[key];
  delete state.serviceFormDriveSeq[key];
  delete state.serviceFormSheetAddMode[key];
}

function scheduleSongSheetDriveSearch(index, query) {
  if (!isDriveEnabled() || Number.isNaN(index) || !state.serviceFormSongs[index]) {
    return;
  }
  const song = state.serviceFormSongs[index];
  const songId = String(song.id || "");
  if (!songId) {
    return;
  }
  const queryKey = normalizeSheetLookup(query);
  if (!queryKey) {
    state.serviceFormDriveHits[songId] = { queryKey: "", items: [], loading: false, error: "" };
    updateSongSheetSearchResultsBySongId(songId);
    return;
  }

  const prevTimer = state.serviceFormDriveTimers[songId];
  if (prevTimer) {
    window.clearTimeout(prevTimer);
  }

  const seq = Number(state.serviceFormDriveSeq[songId] || 0) + 1;
  state.serviceFormDriveSeq[songId] = seq;
  state.serviceFormDriveHits[songId] = { queryKey, items: [], loading: true, error: "" };
  updateSongSheetSearchResultsBySongId(songId);

  state.serviceFormDriveTimers[songId] = window.setTimeout(() => {
    void runSongSheetDriveSearch(songId, queryKey, seq);
  }, 280);
}

async function runSongSheetDriveSearch(songId, queryKey, seq) {
  const activeSeq = Number(state.serviceFormDriveSeq[songId] || 0);
  if (activeSeq !== seq) {
    return;
  }

  const currentQuery = normalizeSheetLookup(state.serviceFormSheetSearch[songId] || "");
  if (!currentQuery || currentQuery !== queryKey) {
    return;
  }

  try {
    const matches = await searchDriveDuplicateCandidates(queryKey, "", { allowPartial: true });
    if (Number(state.serviceFormDriveSeq[songId] || 0) !== seq) {
      return;
    }
    const items = uniqueByKey(
      matches.map((item) => ({ id: item.id, name: item.name || "" })),
      (item) => item.id
    );
    state.serviceFormDriveHits[songId] = { queryKey, items, loading: false, error: "" };
  } catch {
    if (Number(state.serviceFormDriveSeq[songId] || 0) !== seq) {
      return;
    }
    state.serviceFormDriveHits[songId] = {
      queryKey,
      items: [],
      loading: false,
      error: "Drive 검색 실패 (로그인 또는 권한 확인)",
    };
  }

  updateSongSheetSearchResultsBySongId(songId);
}

function updateSongSheetSearchResultsBySongId(songId) {
  const rows = Array.from(els.songEditorList.querySelectorAll(".song-editor-row"));
  const row = rows.find((item) => item.dataset.songId === songId);
  if (!row) {
    return;
  }
  const index = Number(row.dataset.index);
  if (Number.isNaN(index) || !state.serviceFormSongs[index]) {
    return;
  }
  renderSongSheetSearchResultsIntoRow(row, index);
}

function listSongSheetSearchCandidates(song, query) {
  const keyword = normalizeSheetLookup(query);
  if (!keyword) {
    return [];
  }
  const primarySheetId = getSongSheetIds(song)[0] || "";

  return state.data.sheets
    .filter((sheet) => {
      return (
        normalizeSheetLookup(sheet.title).includes(keyword) ||
        normalizeSheetLookup(sheet.key || "").includes(keyword) ||
        normalizeSheetLookup(sheet.fileName || "").includes(keyword)
      );
    })
    .sort((left, right) => {
      if (left.id === primarySheetId && right.id !== primarySheetId) {
        return -1;
      }
      if (right.id === primarySheetId && left.id !== primarySheetId) {
        return 1;
      }
      return String(right.uploadedAt || "").localeCompare(String(left.uploadedAt || ""));
    });
}

function updateBuildWeeklyPacketButtonState() {
  const targets = state.serviceFormSongs.filter(
    (song) => String(song.title || "").trim() && song.packetSelected !== false
  );
  const canBuild = targets.length > 0 && targets.every((song) => getSongSheetIds(song).length > 0);
  els.buildWeeklyPacket.disabled = !canBuild;
  els.buildWeeklyPacket.title = canBuild
    ? "준비된 곡 악보를 하나로 합칩니다."
    : "합칠 곡을 체크하고, 각 곡에 악보를 연결하세요.";
}

function renderSongSheetOptions(song, selectedId) {
  const titleKey = normalizeText(song.title);
  const keyText = normalizeKeyText(song.key || "");
  const ranked = state.data.sheets
    .slice()
    .sort((left, right) => {
      const leftScore = scoreSheetForSong(left, titleKey, keyText);
      const rightScore = scoreSheetForSong(right, titleKey, keyText);
      if (leftScore !== rightScore) {
        return rightScore - leftScore;
      }
      return String(right.uploadedAt || "").localeCompare(String(left.uploadedAt || ""));
    })
    .slice(0, 60);

  return ranked
    .map((sheet) => {
      const selected = sheet.id === selectedId ? "selected" : "";
      return `<option value="${escapeHtmlAttr(sheet.id)}" ${selected}>${escapeHtml(
        formatSongSheetLabel(sheet)
      )}</option>`;
    })
    .join("");
}

function scoreSheetForSong(sheet, titleKey, keyText) {
  let score = 0;
  const sheetTitle = normalizeText(sheet.title);
  if (titleKey) {
    if (sheetTitle === titleKey) {
      score += 30;
    } else if (sheetTitle.includes(titleKey) || titleKey.includes(sheetTitle)) {
      score += 14;
    }
  }

  if (keyText) {
    const sheetKey = normalizeKeyText(sheet.key || "");
    if (sheetKey && sheetKey === keyText) {
      score += 8;
    }
  }

  return score;
}

function formatSongSheetLabel(sheet) {
  return sheet.key ? `${sheet.title} (${sheet.key})` : sheet.title;
}

function ensureSelectedDate() {
  const dates = Object.keys(state.data.services).sort();
  if (state.data.selectedServiceDate && state.data.services[state.data.selectedServiceDate]) {
    return;
  }

  if (state.data.selectedServiceDate && !state.data.services[state.data.selectedServiceDate]) {
    state.data.selectedServiceDate = dates.length ? dates[dates.length - 1] : "";
    return;
  }

  if (dates.length) {
    return;
  }

  const sunday = nextSundayIso();
  const initial = makeDefaultService(sunday);
  state.data.services[sunday] = initial;
  state.data.selectedServiceDate = sunday;
  saveData();
}

function ensureService(date) {
  if (!date) {
    return;
  }
  if (!state.data.services[date]) {
    state.data.services[date] = makeDefaultService(date);
  }
}

function getSelectedService() {
  const date = getHomeWeeklySundayDate();
  if (!date) {
    return null;
  }
  return state.data.services[date] || null;
}

function loadServiceForm(date) {
  resetServiceFormSheetSearchState();
  closeServiceInlinePreview(false);

  if (!date) {
    els.servicePracticeDate.value = "";
    els.servicePracticeDay.value = "";
    els.servicePracticeTime.value = "";
    if (els.serviceVerseRef) {
      els.serviceVerseRef.value = "";
    }
    els.serviceVerse.value = "";
    setMeditationEditorValue("");
    els.servicePlaylist.value = "";
    state.serviceFormSongs = [];
    state.serviceFormSheetSearch = {};
    state.serviceFormWeeklyPacket = null;
    setServicePacketStatus("");
    return;
  }

  ensureService(date);
  syncRotationToService(date);
  const service = state.data.services[date];
  els.servicePracticeDate.value = service.practiceDate || "";
  els.servicePracticeDay.value =
    service.practiceDay || computePracticeDayLabel(service.practiceDate) || "";
  els.servicePracticeTime.value = service.practiceTime || "";
  if (els.serviceVerseRef) {
    els.serviceVerseRef.value = service.verseRefs || "";
  }
  els.serviceVerse.value = normalizeVerseTextareaText(service.verse || "");
  setMeditationEditorValue(service.meditation || "");
  els.servicePlaylist.value = service.playlistUrl || "";
  state.serviceFormSongs = (service.songs || []).map((song) => ({
    ...makeEmptySong(),
    ...(song || {}),
  }));
  state.serviceFormSheetSearch = {};
  state.serviceFormSongs.forEach((song) => {
    getSongSheetIds(song);
    state.serviceFormSheetSearch[song.id] = "";
    state.serviceFormDriveHits[song.id] = { queryKey: "", items: [], loading: false, error: "" };
    state.serviceFormDriveSeq[song.id] = 0;
  });
  state.serviceFormWeeklyPacket = cloneWeeklyPacket(service.weeklyPacket);
  const packet = state.serviceFormWeeklyPacket;
  if (packet && packet.fileName) {
    setServicePacketStatus(`현재 저장된 이번주 악보: ${packet.fileName} · 새로 만들면 기존 파일이 업데이트됩니다.`);
  } else {
    setServicePacketStatus("새로 만들면 기존 이번주 악보(있는 경우)가 업데이트됩니다.");
  }
}

function resetUnavailabilityForm() {
  els.unavailabilityForm.reset();
  els.unavailableId.value = "";
  els.unavailabilitySubmit.textContent = "등록";
}

function fillUnavailabilityForm(item) {
  els.unavailableId.value = item.id || "";
  els.unavailableName.value = item.name || "";
  els.unavailableRole.value = item.role || "";
  els.unavailableStart.value = item.startDate || "";
  els.unavailableEnd.value = item.endDate || "";
  els.unavailabilitySubmit.textContent = "수정 저장";
}

function sortRotations() {
  state.data.rotations.sort((a, b) => a.worshipDate.localeCompare(b.worshipDate));
}

function setPage(page) {
  if (!page) {
    return;
  }

  state.page = page;
  els.pages.forEach((section) => {
    const active = section.dataset.page === page;
    section.hidden = !active;
    section.classList.toggle("active", active);
  });
  if (els.appFooter) {
    els.appFooter.hidden = page === "about";
  }

  if (page === "calendar") {
    const selected = parseIsoDate(state.data.selectedServiceDate);
    if (selected) {
      state.calendarMonth = toMonthStart(selected);
    }
    renderCalendar();
  }

  if (page === "rotation") {
    state.rotationEditMode = false;
    const selected = parseIsoDate(state.data.selectedServiceDate);
    if (selected) {
      state.rotationMonth = toMonthStart(selected);
    }
    renderRotation();
  }
}

function isFabOpen() {
  return els.fabToggle.getAttribute("aria-expanded") === "true";
}

function setFabMenuOpen(open) {
  els.fabToggle.setAttribute("aria-expanded", String(open));
  els.fabMenu.hidden = !open;
  els.fabIcon.src = open ? "assets/brand/icon-2.png" : "assets/brand/icon-1.png";
}

function extractTitleKeyFromFilename(filename) {
  const normalizedName = normalizeUnicodeString(filename);
  const base = stripPdfExtension(normalizedName).trim();
  const keyMatch =
    base.match(/\(\s*([A-G](?:#|b)?m?)\s*\)\s*$/i) ||
    base.match(/(?:^|[\s_-])([A-G](?:#|b)?m?)\s*$/i) ||
    base.match(/\b([A-G](?:#|b)?m?)\b/i);
  const key = keyMatch ? keyMatch[1] : "";
  let title = base
    .replace(/\(\s*[A-G](?:#|b)?m?\s*\)\s*$/i, "")
    .replace(/[\s_-]+[A-G](?:#|b)?m?\s*$/i, "")
    .replace(/[_-]+/g, " ")
    .trim();
  if (!title) {
    title = base;
  }

  return {
    title,
    key,
  };
}

function parseSplitEntries(raw) {
  if (!raw.trim()) {
    return [];
  }

  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [titleRaw = "", keyRaw = "", pageRaw = ""] = line.split("|").map((part) => part.trim());
      const page = parsePageRange(pageRaw);
      return {
        title: titleRaw,
        key: keyRaw,
        pageStart: page ? page.pageStart : null,
        pageEnd: page ? page.pageEnd : null,
      };
    })
    .filter((item) => Boolean(item.title));
}

function parsePageRange(raw) {
  if (!raw) {
    return null;
  }

  const clean = raw.replace(/\s+/g, "");
  const match = clean.match(/^(\d+)(?:-(\d+))?$/);
  if (!match) {
    return null;
  }

  const first = Number(match[1]);
  const second = Number(match[2] || match[1]);

  if (!first || !second) {
    return null;
  }

  return {
    pageStart: Math.min(first, second),
    pageEnd: Math.max(first, second),
  };
}

function createSheetRecord({ fileId, fileName, uploadedAt, title, key, pageStart, pageEnd, storage, driveFileId }) {
  return {
    id: generateId(),
    fileId,
    fileName,
    title: title || "제목 미확인",
    key: key || "",
    pageStart: Number.isInteger(pageStart) ? pageStart : null,
    pageEnd: Number.isInteger(pageEnd) ? pageEnd : null,
    uploadedAt,
    storage: storage === "drive" ? "drive" : "local",
    driveFileId: driveFileId || "",
  };
}

async function tryAutoDetectSheetEntries(file) {
  try {
    const textPages = await extractPdfPageMetaFromFile(file);
    if (!textPages.length) {
      return [];
    }

    const textEntries = collapsePageMetaToEntries(textPages);
    if (textEntries.length > 1) {
      return textEntries;
    }

    const ocrPages = await extractPdfPageMetaWithOcr(file);
    if (!ocrPages.length) {
      return textEntries;
    }

    const ocrEntries = collapsePageMetaToEntries(ocrPages);
    if (ocrEntries.length > 1) {
      return ocrEntries;
    }

    const fallbackEntries = splitByPageWithContinuationHeuristic(ocrPages);
    if (fallbackEntries.length > 1) {
      return fallbackEntries;
    }

    return ocrEntries.length ? ocrEntries : textEntries;
  } catch {
    return [];
  }
}

async function getPdfJsLib() {
  if (state.pdfjsPromise) {
    return state.pdfjsPromise;
  }

  state.pdfjsPromise = import("./lib/pdfjs.mjs").then((mod) => {
    if (mod && mod.GlobalWorkerOptions) {
      mod.GlobalWorkerOptions.workerSrc = "./lib/pdf.worker.mjs";
    }
    return mod;
  });

  return state.pdfjsPromise;
}

async function extractPdfPageMetaFromFile(file) {
  const pdfjs = await getPdfJsLib();
  if (!pdfjs || typeof pdfjs.getDocument !== "function") {
    return [];
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  const loadingTask = pdfjs.getDocument({ data: bytes });
  const pdf = await loadingTask.promise;
  const pages = [];

  for (let pageNo = 1; pageNo <= pdf.numPages; pageNo += 1) {
    const page = await pdf.getPage(pageNo);
    const viewport = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();
    const lines = linesFromPdfTextItems(content.items || []);
    const joinedText = lines.map((line) => line.text).join("\n");

    pages.push({
      page: pageNo,
      title: detectSongTitleFromPageLines(lines, viewport.height || 0),
      key: detectSongKeyFromPageText(joinedText),
    });
  }

  if (typeof loadingTask.destroy === "function") {
    loadingTask.destroy();
  }

  return pages;
}

async function extractPdfPageMetaWithOcr(file) {
  const pdfjs = await getPdfJsLib();
  if (!pdfjs || typeof pdfjs.getDocument !== "function") {
    return [];
  }

  const worker = await getOcrWorker();
  if (!worker) {
    return [];
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  const loadingTask = pdfjs.getDocument({ data: bytes });
  const pdf = await loadingTask.promise;
  const pages = [];

  for (let pageNo = 1; pageNo <= pdf.numPages; pageNo += 1) {
    const page = await pdf.getPage(pageNo);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
      continue;
    }

    await page.render({ canvasContext: context, viewport }).promise;
    const result = await worker.recognize(canvas);
    const text = String((result && result.data && result.data.text) || "");

    pages.push({
      page: pageNo,
      title: detectSongTitleFromOcrText(text),
      key: detectSongKeyFromPageText(text),
    });

    canvas.width = 0;
    canvas.height = 0;
  }

  if (typeof loadingTask.destroy === "function") {
    loadingTask.destroy();
  }

  return pages;
}

async function getOcrWorker() {
  if (state.ocrWorkerPromise) {
    return state.ocrWorkerPromise;
  }

  if (!window.Tesseract || typeof window.Tesseract.createWorker !== "function") {
    return null;
  }

  state.ocrWorkerPromise = (async () => {
    try {
      return await window.Tesseract.createWorker("kor+eng");
    } catch {
      try {
        return await window.Tesseract.createWorker("eng");
      } catch {
        return null;
      }
    }
  })();

  return state.ocrWorkerPromise;
}

function detectSongTitleFromOcrText(text) {
  const lines = String(text || "")
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, 28);

  let bestTitle = "";
  let bestScore = -1;

  lines.forEach((line) => {
    const title = sanitizeSongTitleCandidate(line);
    if (!title) {
      return;
    }

    const score = scoreSongTitleCandidate(title);
    if (score > bestScore) {
      bestScore = score;
      bestTitle = title;
    }
  });

  return bestScore >= 12 ? bestTitle : "";
}

function linesFromPdfTextItems(items) {
  const rows = [];
  items.forEach((item) => {
    const text = String(item && item.str ? item.str : "")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) {
      return;
    }

    const transform = Array.isArray(item.transform) ? item.transform : [0, 0, 0, 0, 0, 0];
    rows.push({
      text,
      x: Number(transform[4] || 0),
      y: Number(transform[5] || 0),
    });
  });

  if (!rows.length) {
    return [];
  }

  rows.sort((a, b) => b.y - a.y || a.x - b.x);

  const lines = [];
  const tolerance = 3;
  rows.forEach((row) => {
    const last = lines[lines.length - 1];
    if (!last || Math.abs(last.y - row.y) > tolerance) {
      lines.push({ y: row.y, parts: [row] });
      return;
    }
    last.parts.push(row);
  });

  return lines
    .map((line) => ({
      y: line.y,
      text: line.parts
        .sort((a, b) => a.x - b.x)
        .map((part) => part.text)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim(),
    }))
    .filter((line) => Boolean(line.text));
}

function detectSongTitleFromPageLines(lines, pageHeight) {
  if (!lines.length) {
    return "";
  }

  const topCut = pageHeight > 0 ? pageHeight * 0.48 : Number.POSITIVE_INFINITY;
  const candidates = lines.filter((line) => line.y >= topCut).slice(0, 14);

  let bestTitle = "";
  let bestScore = -1;
  candidates.forEach((line) => {
    const title = sanitizeSongTitleCandidate(line.text);
    if (!title) {
      return;
    }
    const score = scoreSongTitleCandidate(title);
    if (score > bestScore) {
      bestScore = score;
      bestTitle = title;
    }
  });

  return bestScore >= 16 ? bestTitle : "";
}

function sanitizeSongTitleCandidate(text) {
  const cleaned = String(text || "")
    .replace(/[|•●■□]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned || cleaned.length < 2 || cleaned.length > 52) {
    return "";
  }

  if (looksLikeChordLine(cleaned)) {
    return "";
  }

  if (/copyright|ccli|all rights|arranged|transcribed|www\.|page\s*\d+/i.test(cleaned)) {
    return "";
  }

  if (/^(verse|chorus|bridge|intro|ending|tag|pre-chorus)\b/i.test(cleaned)) {
    return "";
  }

  if (/^[\d\s().\-_/]+$/.test(cleaned)) {
    return "";
  }

  return cleaned;
}

function scoreSongTitleCandidate(title) {
  let score = 0;

  if (/[가-힣]/.test(title)) {
    score += 40;
  }
  if (/[A-Za-z]/.test(title)) {
    score += 16;
  }
  if (title.length >= 4 && title.length <= 24) {
    score += 20;
  }
  if (!/[:;]/.test(title)) {
    score += 6;
  }
  if (/\s/.test(title)) {
    score += 4;
  }
  if (looksLikeChordLine(title)) {
    score -= 40;
  }
  if (/^[A-Z0-9\s#bm]+$/.test(title) && !/[가-힣]/.test(title)) {
    score -= 18;
  }

  return score;
}

function looksLikeChordLine(text) {
  const tokens = String(text || "")
    .split(/\s+/)
    .filter(Boolean);
  if (!tokens.length) {
    return false;
  }

  const chordLikeCount = tokens.filter((token) =>
    /^[A-G](?:#|b)?(?:m|maj7?|m7?|sus[24]?|dim|aug|add\d+|7|9|11|13)?(?:\/[A-G](?:#|b)?)?$/i.test(token)
  ).length;

  return chordLikeCount >= 2 && chordLikeCount / tokens.length >= 0.6;
}

function detectSongKeyFromPageText(text) {
  const source = String(text || "");
  if (!source) {
    return "";
  }

  const rules = [
    /(?:\bkey\b|키|조)\s*[:：]?\s*([A-G](?:#|b)?(?:m|maj7?|m7?|sus[24]?|dim|aug|add\d+|7|9|11|13)?)/i,
    /\(([A-G](?:#|b)?m?)\s*(?:key|키)\)/i,
  ];

  for (const rule of rules) {
    const match = source.match(rule);
    if (match && match[1]) {
      return normalizeKeyText(match[1]);
    }
  }

  return "";
}

function normalizeKeyText(value) {
  const raw = normalizeUnicodeString(value).replace(/\s+/g, "");
  const match = raw.match(/^([A-Ga-g])([#b]?)(.*)$/);
  if (!match) {
    return raw;
  }

  const root = match[1].toUpperCase();
  const accidental = match[2] || "";
  const suffix = match[3] || "";
  return `${root}${accidental}${suffix}`;
}

function collapsePageMetaToEntries(pages) {
  const entries = [];
  let current = null;

  pages.forEach((pageMeta) => {
    const normalizedTitle = normalizeSongTitle(pageMeta.title);
    if (!current) {
      current = {
        title: pageMeta.title || "",
        normalizedTitle,
        key: pageMeta.key || "",
        pageStart: pageMeta.page,
        pageEnd: pageMeta.page,
      };
      return;
    }

    const hasNewTitle =
      Boolean(normalizedTitle) &&
      Boolean(current.normalizedTitle) &&
      !areLikelySameTitle(normalizedTitle, current.normalizedTitle);
    const hasNewKey =
      Boolean(pageMeta.key) &&
      Boolean(current.key) &&
      normalizeKeyText(pageMeta.key) !== normalizeKeyText(current.key);

    if (hasNewTitle || hasNewKey) {
      entries.push({
        title: current.title,
        key: current.key,
        pageStart: current.pageStart,
        pageEnd: current.pageEnd,
      });
      current = {
        title: pageMeta.title || "",
        normalizedTitle,
        key: pageMeta.key || "",
        pageStart: pageMeta.page,
        pageEnd: pageMeta.page,
      };
      return;
    }

    current.pageEnd = pageMeta.page;
    if (!current.title && pageMeta.title) {
      current.title = pageMeta.title;
      current.normalizedTitle = normalizedTitle;
    }
    if (!current.key && pageMeta.key) {
      current.key = pageMeta.key;
    }
  });

  if (current) {
    entries.push({
      title: current.title,
      key: current.key,
      pageStart: current.pageStart,
      pageEnd: current.pageEnd,
    });
  }

  return entries.map((entry, index) => ({
    ...entry,
    title: entry.title || `곡 ${index + 1}`,
  }));
}

function splitByPageWithContinuationHeuristic(pages) {
  if (!Array.isArray(pages) || !pages.length) {
    return [];
  }

  const entries = [];
  let current = null;

  pages.forEach((pageMeta, index) => {
    const normalizedTitle = normalizeSongTitle(pageMeta.title);
    if (!current) {
      current = {
        title: pageMeta.title || "",
        normalizedTitle,
        key: pageMeta.key || "",
        pageStart: pageMeta.page,
        pageEnd: pageMeta.page,
      };
      return;
    }

    const currentHasTitle = Boolean(current.normalizedTitle);
    const nextHasTitle = Boolean(normalizedTitle);
    const sameTitle =
      currentHasTitle &&
      nextHasTitle &&
      areLikelySameTitle(current.normalizedTitle, normalizedTitle);
    const keyChanged =
      Boolean(pageMeta.key) &&
      Boolean(current.key) &&
      normalizeKeyText(pageMeta.key) !== normalizeKeyText(current.key);

    const shouldStartNew =
      keyChanged ||
      (nextHasTitle && currentHasTitle && !sameTitle) ||
      (nextHasTitle && !currentHasTitle) ||
      (!nextHasTitle && !currentHasTitle && index > 0);

    if (shouldStartNew) {
      entries.push({
        title: current.title,
        key: current.key,
        pageStart: current.pageStart,
        pageEnd: current.pageEnd,
      });
      current = {
        title: pageMeta.title || "",
        normalizedTitle,
        key: pageMeta.key || "",
        pageStart: pageMeta.page,
        pageEnd: pageMeta.page,
      };
      return;
    }

    current.pageEnd = pageMeta.page;
    if (!current.title && pageMeta.title) {
      current.title = pageMeta.title;
      current.normalizedTitle = normalizedTitle;
    }
    if (!current.key && pageMeta.key) {
      current.key = pageMeta.key;
    }
  });

  if (current) {
    entries.push({
      title: current.title,
      key: current.key,
      pageStart: current.pageStart,
      pageEnd: current.pageEnd,
    });
  }

  return entries.map((entry, idx) => ({
    ...entry,
    title: entry.title || `곡 ${idx + 1}`,
  }));
}

function normalizeSongTitle(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, "");
}

function areLikelySameTitle(left, right) {
  const a = String(left || "");
  const b = String(right || "");
  if (!a || !b) {
    return false;
  }

  if (a === b) {
    return true;
  }

  if (a.length >= 4 && b.length >= 4 && (a.includes(b) || b.includes(a))) {
    return true;
  }

  const distance = levenshteinDistance(a, b);
  const longest = Math.max(a.length, b.length);
  return longest > 0 ? distance / longest <= 0.28 : false;
}

function levenshteinDistance(a, b) {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i += 1) {
    dp[i][0] = i;
  }
  for (let j = 0; j < cols; j += 1) {
    dp[0][j] = j;
  }

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[rows - 1][cols - 1];
}

async function openSheetPreview(sheet) {
  const blob = await resolveSheetBlob(sheet);
  if (!blob) {
    state.weeklyPacketMessage = "악보 파일을 찾을 수 없습니다.";
    renderHome();
    return;
  }

  closePreviewDialog();

  state.previewUrl = URL.createObjectURL(blob);
  els.pdfPreviewFrame.src = state.previewUrl;
  els.pdfPreviewTitle.textContent = `${sheet.title} 미리보기`;

  if (!els.pdfPreviewDialog.open) {
    els.pdfPreviewDialog.showModal();
  }
}

function closeServiceInlinePreview(shouldRenderRows = true) {
  const hadPreview = Boolean(state.serviceInlinePreviewUrl);
  if (state.serviceInlinePreviewUrl) {
    URL.revokeObjectURL(state.serviceInlinePreviewUrl);
    state.serviceInlinePreviewUrl = "";
  }
  state.serviceInlinePreviewSongId = "";
  state.serviceInlinePreviewTitle = "";
  if (els.serviceInlinePreviewFrame) {
    els.serviceInlinePreviewFrame.src = "";
  }
  if (els.serviceInlinePreviewWrap) {
    els.serviceInlinePreviewWrap.hidden = true;
  }
  if (shouldRenderRows && hadPreview && els.serviceEditorDialog && els.serviceEditorDialog.open) {
    renderSongEditorRows();
  }
}

async function openServiceInlinePreview(sheet, titleText = "", songId = "") {
  const blob = await resolveSheetBlob(sheet);
  if (!blob) {
    setServicePacketStatus("미리볼 악보 파일을 찾지 못했습니다.", true);
    return;
  }
  closeServiceInlinePreview(false);
  state.serviceInlinePreviewUrl = URL.createObjectURL(blob);
  state.serviceInlinePreviewSongId = String(songId || "");
  state.serviceInlinePreviewTitle = titleText || `${sheet.title || "악보"} 미리보기`;
  if (els.serviceInlinePreviewFrame) {
    els.serviceInlinePreviewFrame.src = "";
  }
  if (els.serviceInlinePreviewWrap) {
    els.serviceInlinePreviewWrap.hidden = true;
  }
  renderSongEditorRows();
}

function closeHomePacketPreview() {
  if (state.homePacketPreviewUrl) {
    URL.revokeObjectURL(state.homePacketPreviewUrl);
    state.homePacketPreviewUrl = "";
  }
  if (els.homePacketPreviewFrame) {
    els.homePacketPreviewFrame.src = "";
  }
  if (els.homePacketPreviewWrap) {
    els.homePacketPreviewWrap.hidden = true;
  }
}

function openHomePacketPreview(blob) {
  closeHomePacketPreview();
  state.homePacketPreviewUrl = URL.createObjectURL(blob);
  if (els.homePacketPreviewFrame) {
    els.homePacketPreviewFrame.src = state.homePacketPreviewUrl;
  }
  if (els.homePacketPreviewWrap) {
    els.homePacketPreviewWrap.hidden = false;
  }
}

async function downloadSheet(sheet) {
  const blob = await resolveSheetBlob(sheet);
  if (!blob) {
    state.weeklyPacketMessage = "악보 파일을 찾을 수 없습니다.";
    renderHome();
    return;
  }

  const name = `${sheet.title || "sheet"}${sheet.key ? `_${sheet.key}` : ""}.pdf`;
  downloadBlob(blob, sanitizeFilename(name));
}

async function removeSheet(sheet) {
  state.data.sheets = state.data.sheets.filter((item) => item.id !== sheet.id);

  const stillLinked = state.data.sheets.some(
    (item) =>
      item.fileId === sheet.fileId ||
      (item.driveFileId && item.driveFileId === sheet.driveFileId)
  );

  if (!stillLinked && sheet.storage === "drive" && sheet.driveFileId) {
    await deleteDriveFile(sheet.driveFileId);
  }

  if (!stillLinked && sheet.fileId) {
    await deleteSheetFileBlob(sheet.fileId);
  }

  saveData();
}

async function downloadOrGenerateWeeklyPacket() {
  state.weeklyPacketMessage = "";
  const service = getSelectedService();
  if (!service) {
    state.weeklyPacketMessage = "선택된 예배가 없습니다.";
    renderHome();
    return;
  }

  const packet = normalizeWeeklyPacket(service.weeklyPacket);
  if (packet) {
    const blob = await resolveSheetBlob(packet);
    if (blob) {
      downloadBlob(blob, packet.fileName || "이번주악보.pdf");
      state.weeklyPacketMessage = "저장된 이번주 악보를 다운로드했습니다.";
      renderHome();
      return;
    }
    state.weeklyPacketMessage = "저장된 이번주 악보 파일을 찾을 수 없어 새로 생성합니다.";
  }

  await generateWeeklyPacket();
}

async function previewWeeklyPacket() {
  state.weeklyPacketMessage = "";
  const service = getSelectedService();
  if (!service) {
    state.weeklyPacketMessage = "선택된 예배가 없습니다.";
    renderHome();
    return;
  }

  const packet = normalizeWeeklyPacket(service.weeklyPacket);
  if (!packet) {
    state.weeklyPacketMessage = "미리볼 이번주 악보가 없습니다.";
    renderHome();
    return;
  }

  const blob = await resolveSheetBlob(packet);
  if (!blob) {
    state.weeklyPacketMessage = "이번주 악보 파일을 찾을 수 없습니다.";
    renderHome();
    return;
  }
  openHomePacketPreview(blob);
}

async function downloadCalendarPacketByDate(date) {
  const service = state.data.services[String(date || "")];
  if (!service) {
    window.alert("해당 날짜 예배 기록을 찾을 수 없습니다.");
    return;
  }
  const packet = normalizeWeeklyPacket(service.weeklyPacket);
  if (!packet) {
    window.alert("해당 날짜에는 저장된 악보가 없습니다.");
    return;
  }
  const blob = await resolveSheetBlob(packet);
  if (!blob) {
    window.alert("악보 파일을 찾을 수 없습니다.");
    return;
  }
  downloadBlob(blob, packet.fileName || "이번주악보.pdf");
}

async function generateWeeklyPacket() {
  const service = getSelectedService();
  const selectedSongs = service
    ? service.songs.filter((song) => song.title && song.title.trim())
    : [];
  const packetSongs = selectedSongs.filter((song) => song.packetSelected !== false);

  if (!service || !selectedSongs.length) {
    state.weeklyPacketMessage = "이번주 곡이 없어 PDF를 만들 수 없습니다.";
    renderHome();
    return;
  }

  if (!packetSongs.length) {
    state.weeklyPacketMessage = "합칠 곡이 선택되지 않았습니다.";
    renderHome();
    return;
  }

  if (!window.PDFLib || !window.PDFLib.PDFDocument) {
    state.weeklyPacketMessage = "PDF 라이브러리를 찾지 못했습니다.";
    renderHome();
    return;
  }

  const picked = collectSongSheetsForPacket(packetSongs);
  if (picked.missingSongs.length) {
    state.weeklyPacketMessage = `악보 선택 필요: ${picked.missingSongs.join(", ")}`;
    saveData();
    renderHome();
    return;
  }

  try {
    const mergedBlob = await buildMergedSheetBlob(picked.selectedSheets, { coverService: service });
    const filename = buildWeeklyPacketFilename(service.date, getServiceEventName(service.date));
    downloadBlob(mergedBlob, filename);

    saveData();
    state.weeklyPacketMessage = "이번주 악보 PDF가 생성되었습니다.";
    renderHome();
  } catch (error) {
    state.weeklyPacketMessage = `PDF 생성 오류: ${error.message}`;
    renderHome();
  }
}

async function buildWeeklyPacketForEditor() {
  const date = String(els.serviceDate.value || "");
  if (!date) {
    setServicePacketStatus("예배 날짜를 먼저 입력하세요.", true);
    return;
  }

  state.serviceFormSongs = state.serviceFormSongs.map((song) => ({
    ...song,
    title: String(song.title || "").trim(),
    key: String(song.key || "").trim(),
    sheetIds: normalizeSongSheetIds(song),
    sheetId: normalizeSongSheetIds(song)[0] || "",
    packetSelected: song.packetSelected !== false,
  }));
  const songs = state.serviceFormSongs.filter((song) => Boolean(song.title));
  const selectedSongs = songs.filter((song) => song.packetSelected !== false);

  if (!songs.length) {
    setServicePacketStatus("곡 목록이 비어 있어 악보를 합칠 수 없습니다.", true);
    return;
  }

  if (!selectedSongs.length) {
    setServicePacketStatus("합칠 곡을 먼저 선택하세요.", true);
    return;
  }

  const notReady = selectedSongs.filter((song) => getSongSheetIds(song).length === 0);
  if (notReady.length) {
    setServicePacketStatus("선택한 곡에 악보를 연결한 뒤 다시 시도하세요.", true);
    return;
  }

  if (!window.PDFLib || !window.PDFLib.PDFDocument) {
    setServicePacketStatus("PDF 라이브러리를 찾지 못했습니다.", true);
    return;
  }

  const picked = collectSongSheetsForPacket(selectedSongs);
  if (picked.missingSongs.length) {
    renderSongEditorRows();
    setServicePacketStatus(`악보 선택 필요: ${picked.missingSongs.join(", ")}`, true);
    return;
  }

  try {
    setServicePacketStatus("악보 합치는 중...", false);
    const coverService = {
      date,
      practiceDate: els.servicePracticeDate.value || "",
      practiceTime: String(els.servicePracticeTime.value || "").trim(),
      verse: normalizeVerseTextareaText(els.serviceVerse.value),
      meditation: getMeditationForSave(),
    };
    const mergedBlob = await buildMergedSheetBlob(picked.selectedSheets, { coverService });
    const serviceName = getServiceEventName(date);
    const fileName = buildWeeklyPacketFilename(date, serviceName);
    const packetFile = new File([mergedBlob], fileName, { type: "application/pdf" });
    const nextFileId = generateId();
    const storage = await saveSheetFile(nextFileId, packetFile);

    const previousPacket = cloneWeeklyPacket(state.serviceFormWeeklyPacket);
    state.serviceFormWeeklyPacket = {
      id: previousPacket && previousPacket.id ? previousPacket.id : generateId(),
      fileId: nextFileId,
      fileName,
      storage: storage.storage,
      driveFileId: storage.driveFileId,
      createdAt: new Date().toISOString(),
      serviceName,
      songSheetIds: picked.selectedSheets.map((item) => item.sheet.id),
    };

    if (previousPacket) {
      const replacedLocal = previousPacket.fileId && previousPacket.fileId !== nextFileId;
      const replacedDrive =
        previousPacket.driveFileId &&
        (!storage.driveFileId || previousPacket.driveFileId !== storage.driveFileId);
      if (replacedDrive) {
        try {
          await deleteDriveFile(previousPacket.driveFileId);
        } catch {
          // no-op
        }
      }
      if (replacedLocal) {
        try {
          await deleteSheetFileBlob(previousPacket.fileId);
        } catch {
          // no-op
        }
      }
    }

    renderSongEditorRows();
    setServicePacketStatus(`새 이번주 악보를 만들었습니다. 저장하면 기존 파일이 업데이트됩니다. (${fileName})`);
  } catch (error) {
    setServicePacketStatus(`악보 합치기 실패: ${error.message}`, true);
  }
}

async function buildMergedSheetBlob(selectedSheets, options = {}) {
  const merged = await window.PDFLib.PDFDocument.create();
  const coverService = options && options.coverService ? options.coverService : null;

  if (coverService) {
    const coverBytes = await createWeeklyPacketCoverPdfBytes(coverService);
    if (coverBytes && coverBytes.length) {
      const coverDoc = await window.PDFLib.PDFDocument.load(coverBytes);
      const coverPages = await merged.copyPages(coverDoc, coverDoc.getPageIndices());
      coverPages.forEach((page) => merged.addPage(page));
    }
  }

  for (const item of selectedSheets) {
    const blob = await resolveSheetBlob(item.sheet);
    if (!blob) {
      throw new Error(`악보 파일 없음: ${item.sheet.title}`);
    }

    const bytes = await blob.arrayBuffer();
    const source = await window.PDFLib.PDFDocument.load(bytes);
    const pageIndices = makePageIndices(item.sheet, source.getPageCount());

    if (!pageIndices.length) {
      continue;
    }

    const commentRaw = extractPlainTextFromHtml(item.song && item.song.comment ? item.song.comment : "");
    const hasComment = Boolean(commentRaw.trim());

    for (let pos = 0; pos < pageIndices.length; pos += 1) {
      const pageIndex = pageIndices[pos];
      const isFirstPage = pos === 0;

      if (isFirstPage && hasComment) {
        const sourcePage = source.getPage(pageIndex);
        const sourceWidth = sourcePage.getWidth();
        const sourceHeight = sourcePage.getHeight();
        const embeddedSourcePage = await merged.embedPage(sourcePage);
        const headerImage = await createSongCommentHeaderPng(commentRaw, sourceWidth, sourceHeight);
        if (!headerImage || !headerImage.bytes || !headerImage.height) {
          const [copiedFallback] = await merged.copyPages(source, [pageIndex]);
          merged.addPage(copiedFallback);
          continue;
        }
        const embeddedHeaderImage = await merged.embedPng(headerImage.bytes);
        const headerHeight = headerImage.height;
        const targetPage = merged.addPage([sourceWidth, sourceHeight + headerHeight]);
        targetPage.drawPage(embeddedSourcePage, {
          x: 0,
          y: 0,
          width: sourceWidth,
          height: sourceHeight,
        });
        targetPage.drawImage(embeddedHeaderImage, {
          x: 0,
          y: sourceHeight,
          width: sourceWidth,
          height: headerHeight,
        });
        continue;
      }

      const [copiedPage] = await merged.copyPages(source, [pageIndex]);
      merged.addPage(copiedPage);
    }
  }

  if (!merged.getPageCount()) {
    throw new Error("합칠 페이지가 없습니다.");
  }

  const mergedBytes = await merged.save();
  return new Blob([mergedBytes], { type: "application/pdf" });
}

async function createSongCommentHeaderPng(commentText, pageWidth, pageHeight) {
  const sourceLines = String(commentText || "")
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim());
  const hasVisibleLine = sourceLines.some((line) => Boolean(line));
  if (!hasVisibleLine) {
    return null;
  }

  const widthPt = Math.max(360, Number(pageWidth || 0) || 1200);
  const heightPt = Math.max(480, Number(pageHeight || 0) || 1700);
  const scale = 2;
  const canvasWidth = Math.round(widthPt * scale);
  const sidePad = Math.max(30, Math.round(canvasWidth * 0.045));
  const maxTextWidth = canvasWidth - sidePad * 2;
  const baseFont = Math.max(30, Math.round(canvasWidth * 0.07));

  const canvas = document.createElement("canvas");
  canvas.width = canvasWidth;
  canvas.height = 10;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }

  const longestLine = sourceLines.reduce((acc, line) => {
    return line.length > acc.length ? line : acc;
  }, "");
  let sharedSize = baseFont;
  while (sharedSize > 12) {
    ctx.font = `700 ${sharedSize}px GmarketSansBold, GmarketSansTTFBold, sans-serif`;
    if (ctx.measureText(longestLine || " ").width <= maxTextWidth) {
      break;
    }
    sharedSize -= 1;
  }
  sharedSize = Math.max(12, sharedSize);

  const lineGap = Math.max(8, Math.round(canvasWidth * 0.012));
  const topPad = Math.max(16, Math.round(canvasWidth * 0.02));
  const bottomPad = Math.max(16, Math.round(canvasWidth * 0.02));
  const renderedLineHeight = Math.round(sharedSize * 1.1);
  const totalTextHeight = sourceLines.length * renderedLineHeight + Math.max(0, sourceLines.length - 1) * lineGap;
  const targetHeaderPt = Math.min(heightPt * 0.24, Math.max(46, (topPad + bottomPad + totalTextHeight) / scale));
  const canvasHeight = Math.max(Math.round(targetHeaderPt * scale), topPad + bottomPad + totalTextHeight);
  canvas.height = canvasHeight;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.strokeStyle = "rgba(214,223,241,1)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, canvasHeight - 1);
  ctx.lineTo(canvasWidth, canvasHeight - 1);
  ctx.stroke();

  let cursorY = topPad;
  ctx.fillStyle = "#1a44c5";
  sourceLines.forEach((line, idx) => {
    ctx.font = `700 ${sharedSize}px GmarketSansBold, GmarketSansTTFBold, sans-serif`;
    cursorY += sharedSize;
    ctx.fillText(line || " ", sidePad, cursorY);
    cursorY += Math.round(sharedSize * 0.1);
    if (idx < sourceLines.length - 1) {
      cursorY += lineGap;
    }
  });

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) {
    return null;
  }
  return {
    bytes: new Uint8Array(await blob.arrayBuffer()),
    height: Math.round(canvasHeight / scale),
  };
}

function extractPlainTextFromHtml(rawHtml) {
  const source = String(rawHtml || "").trim();
  if (!source) {
    return "";
  }
  const withBreaks = source
    .replace(/<\s*br\s*\/?>/gi, "\n")
    .replace(/<\/\s*(p|div|li|h[1-6])\s*>/gi, "\n");
  const stripped = withBreaks.replace(/<[^>]+>/g, "");
  const textarea = document.createElement("textarea");
  textarea.innerHTML = stripped;
  return String(textarea.value || "")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function wrapCanvasTextByWidth(ctx, text, maxWidth) {
  const lines = [];
  const paragraphs = String(text || "").replace(/\r/g, "").split("\n");
  paragraphs.forEach((paragraph, index) => {
    const raw = String(paragraph || "");
    if (!raw) {
      lines.push("");
    } else {
      let line = "";
      for (const ch of raw) {
        const candidate = `${line}${ch}`;
        if (line && ctx.measureText(candidate).width > maxWidth) {
          lines.push(line);
          line = ch;
        } else {
          line = candidate;
        }
      }
      if (line) {
        lines.push(line);
      }
    }
    if (index < paragraphs.length - 1 && raw) {
      lines.push("");
    }
  });
  return lines;
}

function clampCanvasLines(ctx, lines, maxWidth, maxLines) {
  const safe = Array.isArray(lines) ? [...lines] : [];
  if (safe.length <= maxLines) {
    return safe;
  }
  const clamped = safe.slice(0, maxLines);
  let tail = String(clamped[maxLines - 1] || "").trim();
  if (!tail) {
    tail = "...";
  } else {
    const ellipsis = "...";
    while (tail && ctx.measureText(`${tail}${ellipsis}`).width > maxWidth) {
      tail = tail.slice(0, -1);
    }
    tail = `${tail}${ellipsis}`;
  }
  clamped[maxLines - 1] = tail;
  return clamped;
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("이미지를 불러오지 못했습니다."));
    image.src = src;
  });
}

function measureOpaqueImageBounds(image) {
  const w = Math.max(1, Number(image && image.width) || 1);
  const h = Math.max(1, Number(image && image.height) || 1);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { x: 0, y: 0, width: w, height: h };
  }
  ctx.drawImage(image, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h).data;
  let minX = w;
  let minY = h;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < h; y += 1) {
    const rowOffset = y * w * 4;
    for (let x = 0; x < w; x += 1) {
      const alpha = data[rowOffset + x * 4 + 3];
      if (alpha > 12) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < minX || maxY < minY) {
    return { x: 0, y: 0, width: w, height: h };
  }
  return {
    x: minX,
    y: minY,
    width: Math.max(1, maxX - minX + 1),
    height: Math.max(1, maxY - minY + 1),
  };
}

function buildCoverVerseItems(verseText) {
  const rawLines = String(verseText || "").replace(/\r/g, "").split("\n");
  const items = [];
  rawLines.forEach((line) => {
    const trimmed = String(line || "").trim();
    if (!trimmed) {
      items.push({ type: "blank" });
      return;
    }
    if (isBibleReferenceHeading(trimmed)) {
      items.push({ type: "heading", text: trimmed });
      return;
    }
    const verseMatch = trimmed.match(/^(\d+)\s*[\.\)]?\s*(.+)$/);
    if (verseMatch) {
      items.push({ type: "verse", number: verseMatch[1], text: verseMatch[2] });
      return;
    }
    items.push({ type: "text", text: trimmed });
  });
  return items;
}

function measureCoverVerseLayout(ctx, items, options) {
  const {
    width,
    headingSize,
    bodySize,
    headingGap,
    lineGap,
    numberColWidth,
  } = options;
  const bodyLineHeight = Math.max(bodySize + 2, bodySize * 1.36);
  const headingLineHeight = Math.max(headingSize + 3, headingSize * 1.3);
  const flows = [];
  let totalHeight = 0;

  items.forEach((item) => {
    if (item.type === "blank") {
      totalHeight += Math.max(5, lineGap);
      flows.push({ type: "blank", height: Math.max(5, lineGap) });
      return;
    }

    if (item.type === "heading") {
      totalHeight += headingLineHeight;
      flows.push({ type: "heading", text: item.text, height: headingLineHeight });
      totalHeight += headingGap;
      flows.push({ type: "gap", height: headingGap });
      return;
    }

    if (item.type === "verse") {
      ctx.font = `400 ${bodySize}px ChosunNm, GmarketSansLight, sans-serif`;
      const wrapped = wrapCanvasTextByWidth(
        ctx,
        item.text,
        Math.max(40, width - numberColWidth - 8)
      );
      const lines = wrapped.length ? wrapped : [item.text];
      const height = lines.length * bodyLineHeight + lineGap;
      totalHeight += height;
      flows.push({
        type: "verse",
        number: item.number,
        lines,
        bodyLineHeight,
        height,
      });
      return;
    }

    ctx.font = `400 ${bodySize}px ChosunNm, GmarketSansLight, sans-serif`;
    const wrapped = wrapCanvasTextByWidth(ctx, item.text, Math.max(40, width - numberColWidth - 8));
    const lines = wrapped.length ? wrapped : [item.text];
    const height = lines.length * bodyLineHeight + lineGap;
    totalHeight += height;
    flows.push({
      type: "text",
      lines,
      bodyLineHeight,
      height,
    });
  });

  return { totalHeight, flows, bodyLineHeight, headingLineHeight };
}

async function createSongCommentBannerPng(commentText, widthHint = 1200) {
  const text = extractPlainTextFromHtml(commentText)
    .replace(/\n+/g, " / ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) {
    return null;
  }

  const canvasWidth = Math.max(1200, Math.floor(Number(widthHint || 1200) * 1.7));
  const canvasHeight = 150;
  const canvas = document.createElement("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }

  ctx.fillStyle = "rgba(255,255,255,0.96)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.strokeStyle = "rgba(26,68,197,0.26)";
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, canvasWidth - 2, canvasHeight - 2);

  const baseLabel = "송폼/코멘트";
  ctx.fillStyle = "#1a44c5";
  ctx.font = "700 44px GmarketSansBold, sans-serif";
  let composed = `${baseLabel}: ${text}`;
  const maxWidth = canvasWidth - 64;
  while (ctx.measureText(composed).width > maxWidth && composed.length > 16) {
    composed = `${composed.slice(0, -2)}…`;
  }
  ctx.fillText(composed, 32, 94);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) {
    return null;
  }
  return new Uint8Array(await blob.arrayBuffer());
}

async function createWeeklyPacketCoverPdfBytes(service) {
  if (!window.PDFLib || !window.PDFLib.PDFDocument) {
    return null;
  }

  const pageWidth = 1240;
  const pageHeight = 1754;
  const renderScale = 2;
  const marginX = 96;
  const canvas = document.createElement("canvas");
  canvas.width = pageWidth * renderScale;
  canvas.height = pageHeight * renderScale;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }
  ctx.scale(renderScale, renderScale);
  ctx.imageSmoothingEnabled = true;
  if ("imageSmoothingQuality" in ctx) {
    ctx.imageSmoothingQuality = "high";
  }

  const headingColor = "#1a44c5";
  const textColor = "#12161f";
  const subtleColor = "#5f6678";
  const contentWidth = pageWidth - marginX * 2;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, pageWidth, pageHeight);

  const serviceName = getServiceEventName(service.date || "");
  const worshipDateText = service.date ? formatDate(service.date) : "-";
  const practiceDateText = service.practiceDate ? formatDate(service.practiceDate) : "-";
  const practiceTimeText = String(service.practiceTime || "").trim() || "-";

  const sectionTopY = 92;
  const rightX = pageWidth - marginX;
  const infoLabelSize = 24;
  const infoValueSize = 24;
  const infoLineGap = 30;
  const infoBlockGap = 48;
  const infoBlockHeight = infoLineGap + infoBlockGap + infoLineGap;

  let y = sectionTopY;
  try {
    const logoImage = await loadImageElement(`assets/logo/simple-1.png?v=${encodeURIComponent(APP_BUILD_ID)}`);
    const bounds = measureOpaqueImageBounds(logoImage);
    const logoRatio = bounds.width / bounds.height;
    const logoH = Math.max(90, Math.round(infoBlockHeight * 1.02));
    const logoW = Math.max(110, Math.round(logoH * logoRatio));
    const logoY = sectionTopY + Math.round((infoBlockHeight - logoH) / 2);
    ctx.drawImage(
      logoImage,
      bounds.x,
      bounds.y,
      bounds.width,
      bounds.height,
      marginX,
      logoY,
      logoW,
      logoH
    );
    y = sectionTopY + infoBlockHeight + 28;
  } catch {
    y = sectionTopY + infoBlockHeight + 28;
  }

  let rightY = sectionTopY;
  ctx.textAlign = "right";
  ctx.fillStyle = headingColor;
  ctx.font = `700 ${infoLabelSize}px GmarketSansBold, sans-serif`;
  ctx.fillText("예배 날짜", rightX, rightY);
  rightY += infoLineGap;
  ctx.fillStyle = textColor;
  ctx.font = `400 ${infoValueSize}px GmarketSansLight, sans-serif`;
  ctx.fillText(`${worshipDateText} (${serviceName})`, rightX, rightY);
  rightY += infoBlockGap;
  ctx.fillStyle = headingColor;
  ctx.font = `700 ${infoLabelSize}px GmarketSansBold, sans-serif`;
  ctx.fillText("연습 일시", rightX, rightY);
  rightY += infoLineGap;
  ctx.fillStyle = textColor;
  ctx.font = `400 ${infoValueSize}px GmarketSansLight, sans-serif`;
  ctx.fillText(`${practiceDateText} · ${practiceTimeText}`, rightX, rightY);

  ctx.textAlign = "left";
  y = Math.max(y, rightY + 30);
  ctx.strokeStyle = "#d7dceb";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(marginX, y);
  ctx.lineTo(pageWidth - marginX, y);
  ctx.stroke();
  y += 28;

  const sectionTop = y;
  const sectionBottom = pageHeight - 72;
  const sectionHeight = sectionBottom - sectionTop;
  const columnGap = 30;
  const columnWidth = Math.floor((contentWidth - columnGap) / 2);
  const leftX = marginX;
  const rightColX = marginX + columnWidth + columnGap;

  ctx.fillStyle = headingColor;
  ctx.font = "700 30px GmarketSansBold, sans-serif";
  ctx.fillText("주제 말씀", leftX, sectionTop + 34);
  ctx.fillText("설교 노트", rightColX, sectionTop + 34);

  const boxTop = sectionTop + 54;
  const boxHeight = sectionHeight - 54;
  ctx.strokeStyle = "#dfe5f4";
  ctx.lineWidth = 2;
  ctx.strokeRect(leftX, boxTop, columnWidth, boxHeight);
  ctx.strokeRect(rightColX, boxTop, columnWidth, boxHeight);

  const versePadding = 16;
  const verseText = normalizeVerseTextareaText(service.verse || "").trim() || "입력된 주제 말씀이 없습니다.";
  const verseWidth = columnWidth - versePadding * 2;
  const verseHeight = boxHeight - versePadding * 2;
  const verseItems = buildCoverVerseItems(verseText);
  let bodySize = 24;
  let headingSize = 29;
  let numberColWidth = 48;
  let lineGap = 8;
  let headingGap = 14;
  let verseLayout = null;
  while (bodySize >= 12) {
    headingSize = Math.max(bodySize + 4, 15);
    numberColWidth = Math.max(34, Math.round(bodySize * 1.8));
    lineGap = Math.max(4, Math.round(bodySize * 0.24));
    headingGap = Math.max(8, Math.round(bodySize * 0.45));
    verseLayout = measureCoverVerseLayout(ctx, verseItems, {
      width: verseWidth,
      headingSize,
      bodySize,
      headingGap,
      lineGap,
      numberColWidth,
    });
    if (verseLayout.totalHeight <= verseHeight) {
      break;
    }
    bodySize -= 1;
  }
  if (!verseLayout) {
    verseLayout = measureCoverVerseLayout(ctx, verseItems, {
      width: verseWidth,
      headingSize,
      bodySize: Math.max(12, bodySize),
      headingGap,
      lineGap,
      numberColWidth,
    });
  }

  const maxContentBottom = boxTop + boxHeight - versePadding;
  let verseY = boxTop + versePadding;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  verseLayout.flows.forEach((flow) => {
    if (verseY >= maxContentBottom) {
      return;
    }
    if (flow.type === "blank" || flow.type === "gap") {
      verseY += flow.height;
      return;
    }
    if (flow.type === "heading") {
      ctx.fillStyle = headingColor;
      ctx.font = `700 ${headingSize}px ChosunNm, GmarketSansBold, sans-serif`;
      ctx.fillText(flow.text, leftX + versePadding, verseY);
      verseY += flow.height;
      return;
    }
    if (flow.type === "verse") {
      ctx.fillStyle = textColor;
      ctx.font = `400 ${bodySize}px ChosunNm, GmarketSansLight, sans-serif`;
      flow.lines.forEach((line, idx) => {
        if (verseY >= maxContentBottom) {
          return;
        }
        if (idx === 0) {
          ctx.fillText(`${flow.number}.`, leftX + versePadding, verseY);
        }
        ctx.fillText(line || " ", leftX + versePadding + numberColWidth, verseY);
        verseY += flow.bodyLineHeight;
      });
      verseY += Math.max(0, flow.height - flow.lines.length * flow.bodyLineHeight);
      return;
    }
    if (flow.type === "text") {
      ctx.fillStyle = textColor;
      ctx.font = `400 ${bodySize}px ChosunNm, GmarketSansLight, sans-serif`;
      flow.lines.forEach((line) => {
        if (verseY >= maxContentBottom) {
          return;
        }
        ctx.fillText(line || " ", leftX + versePadding, verseY);
        verseY += flow.bodyLineHeight;
      });
      verseY += Math.max(0, flow.height - flow.lines.length * flow.bodyLineHeight);
    }
  });
  ctx.textBaseline = "alphabetic";

  ctx.strokeStyle = "#e7ebf6";
  ctx.lineWidth = 1;
  const noteInnerTop = boxTop + 18;
  const noteInnerBottom = boxTop + boxHeight - 16;
  for (let lineY = noteInnerTop; lineY <= noteInnerBottom; lineY += 36) {
    ctx.beginPath();
    ctx.moveTo(rightColX + 14, lineY);
    ctx.lineTo(rightColX + columnWidth - 14, lineY);
    ctx.stroke();
  }

  ctx.fillStyle = subtleColor;
  ctx.font = "400 20px GmarketSansLight, sans-serif";
  const generatedAt = formatDateTime(new Date().toISOString());
  ctx.fillText(`Generated by DOER Worship · ${generatedAt}`, marginX, pageHeight - 32);

  const imageBlob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!imageBlob) {
    return null;
  }

  const imageBytes = await imageBlob.arrayBuffer();
  const pdfDoc = await window.PDFLib.PDFDocument.create();
  const image = await pdfDoc.embedPng(imageBytes);
  const page = pdfDoc.addPage([pageWidth, pageHeight]);
  page.drawImage(image, { x: 0, y: 0, width: pageWidth, height: pageHeight });
  return pdfDoc.save();
}

function collectSongSheetsForPacket(songs) {
  const selectedSheets = [];
  const missingSongs = [];

  songs.forEach((song, index) => {
    const sheetIds = getSongSheetIds(song);
    if (!sheetIds.length) {
      missingSongs.push(song.title || `곡 ${index + 1}`);
      return;
    }
    const matched = sheetIds
      .map((id) => state.data.sheets.find((item) => item.id === id) || null)
      .filter(Boolean);
    if (!matched.length) {
      missingSongs.push(song.title || `곡 ${index + 1}`);
      return;
    }
    matched.forEach((sheet) => {
      selectedSheets.push({ song, sheet });
    });
  });

  return {
    selectedSheets,
    missingSongs,
  };
}

function findBestSheetCandidateForSong(title, key = "") {
  const titleKey = normalizeText(title);
  const keyText = normalizeKeyText(key);
  if (!titleKey) {
    return null;
  }

  const ranked = state.data.sheets
    .slice()
    .sort((left, right) => {
      const leftScore = scoreSheetForSong(left, titleKey, keyText);
      const rightScore = scoreSheetForSong(right, titleKey, keyText);
      if (leftScore !== rightScore) {
        return rightScore - leftScore;
      }
      return String(right.uploadedAt || "").localeCompare(String(left.uploadedAt || ""));
    });

  return ranked.length && scoreSheetForSong(ranked[0], titleKey, keyText) > 0 ? ranked[0] : null;
}

async function handleSongRowAction(button) {
  const action = String(button.dataset.songAction || "");
  const index = Number(button.dataset.songIndex);
  if (Number.isNaN(index) || !state.serviceFormSongs[index]) {
    return;
  }
  const song = state.serviceFormSongs[index];

  if (action === "find") {
    await findAndAttachSheetForSong(index);
    return;
  }

  if (action === "toggle-add-sheet") {
    const nextOn = !isSongSheetAddMode(song);
    setSongSheetAddMode(song, nextOn);
    renderSongEditorRows();
    return;
  }

  if (action === "upload") {
    const input = els.songEditorList.querySelector(
      `input.song-sheet-upload-input[data-song-upload-index="${index}"]`
    );
    if (!input) {
      return;
    }
    input.value = "";
    input.click();
    return;
  }

  if (action === "preview") {
    const firstSheetId = getSongSheetIds(song)[0] || "";
    const sheet = state.data.sheets.find((item) => item.id === firstSheetId);
    if (!sheet) {
      setServicePacketStatus("미리볼 악보가 선택되지 않았습니다.", true);
      return;
    }
    await openServiceInlinePreview(sheet, `${song.title || sheet.title || "악보"} 미리보기`, song.id);
    return;
  }

  if (action === "preview-sheet") {
    const sheetId = String(button.dataset.sheetId || "");
    const sheet = state.data.sheets.find((item) => item.id === sheetId);
    if (!sheet) {
      setServicePacketStatus("미리볼 악보를 찾지 못했습니다.", true);
      return;
    }
    await openServiceInlinePreview(sheet, `${song.title || sheet.title || "악보"} 미리보기`, song.id);
    return;
  }

  if (action === "close-inline-preview") {
    closeServiceInlinePreview();
    return;
  }

  if (action === "remove-attached-sheet") {
    const sheetId = String(button.dataset.sheetId || "");
    detachSheetFromSong(song, sheetId);
    renderSongEditorRows();
    setServicePacketStatus(`"${song.title || "곡"}" 악보 연결을 일부 해제했습니다.`);
    return;
  }

  if (action === "clear-sheet") {
    setSongSheetIds(song, []);
    setSongSheetAddMode(song, false);
    state.serviceFormSheetSearch[song.id] = "";
    renderSongEditorRows();
    setServicePacketStatus(`"${song.title || "곡"}" 악보 연결을 해제했습니다.`);
  }
}

async function findAndAttachSheetForSong(index) {
  const song = state.serviceFormSongs[index];
  const title = String(song.title || "").trim();
  const key = String(song.key || "").trim();

  if (!title) {
    setServicePacketStatus("곡 제목을 먼저 입력한 뒤 악보 불러오기를 눌러주세요.", true);
    return;
  }

  setServicePacketStatus(`"${title}" 악보를 검색 중...`);
  const result = await findDuplicateSheets({ title, key });

  if (!result.exactCount) {
    setServicePacketStatus(`"${title}"와 일치하는 악보를 찾지 못했습니다.`, true);
    return;
  }

  const localMatches = Array.isArray(result.localMatches) ? result.localMatches : [];
  const driveMatches = Array.isArray(result.driveMatches) ? result.driveMatches : [];

  const attached = [];
  localMatches.forEach((item) => attached.push(item));
  driveMatches.forEach((item) => {
    const ensured = ensureSheetRecordFromDriveMatch(item, title, key);
    if (ensured) {
      attached.push(ensured);
    }
  });

  if (!attached.length) {
    setServicePacketStatus(`"${title}" 악보 검색 결과를 연결할 수 없습니다.`, true);
    return;
  }

  attached.sort((left, right) => String(right.uploadedAt || "").localeCompare(String(left.uploadedAt || "")));
  attachSheetToSong(song, attached[0].id, { append: isSongSheetAddMode(song) });
  state.serviceFormSheetSearch[song.id] = "";
  setSongSheetAddMode(song, false);
  renderSongEditorRows();
  setServicePacketStatus(
    attached.length === 1
      ? `"${title}" 악보를 연결했습니다.`
      : `"${title}" 관련 악보 ${attached.length}개를 찾았습니다. 선택해 연결하세요.`
  );
}

function ensureSheetRecordFromDriveMatch(match, fallbackTitle = "", fallbackKey = "") {
  if (!match || !match.id) {
    return null;
  }
  const existingByDrive = state.data.sheets.find((sheet) => sheet.driveFileId === match.id);
  if (existingByDrive) {
    return existingByDrive;
  }

  const parsed = extractTitleKeyFromFilename(match.name || "");
  const title = parsed.title || fallbackTitle || stripPdfExtension(match.name || "악보");
  const key = parsed.key || fallbackKey || "";

  const record = createSheetRecord({
    fileId: "",
    fileName: String(match.name || `${title}.pdf`),
    uploadedAt: new Date().toISOString(),
    title,
    key,
    pageStart: null,
    pageEnd: null,
    storage: "drive",
    driveFileId: match.id,
  });
  state.data.sheets.push(record);
  return record;
}

async function handleSongSheetUploadInput(uploadInput) {
  const index = Number(uploadInput.dataset.songUploadIndex);
  const selected = uploadInput.files && uploadInput.files[0];
  uploadInput.value = "";

  if (Number.isNaN(index) || !state.serviceFormSongs[index] || !selected) {
    return;
  }

  if (!isSheetUploadFile(selected)) {
    setServicePacketStatus("PDF, PNG, JPG 파일만 업로드할 수 있습니다.", true);
    return;
  }

  const song = state.serviceFormSongs[index];
  const parsed = extractTitleKeyFromFilename(selected.name);
  const title = String(song.title || "").trim() || parsed.title || `곡 ${index + 1}`;
  const key = String(song.key || "").trim() || parsed.key || "";

  try {
    setServicePacketStatus(`"${title}" 중복 악보 확인 중...`);
    const duplicate = await findDuplicateSheets({ title, key });
    if (duplicate.exactCount > 0) {
      const linked = findBestSheetCandidateForSong(title, key);
      if (linked) {
        attachSheetToSong(song, linked.id, { append: isSongSheetAddMode(song) });
        state.serviceFormSheetSearch[song.id] = "";
        setSongSheetAddMode(song, false);
        renderSongEditorRows();
      }
      setServicePacketStatus(`"${title}"는 이미 있어 기존 악보로 연결했습니다.`);
      return;
    }

    const fileName = sanitizeFilename(`${title}${key ? `_${key}` : ""}.pdf`);
    const normalized = isImageFile(selected)
      ? await convertImageFileToPdf(selected, title || `곡${index + 1}`)
      : selected;
    const fileToSave = new File([normalized], fileName, { type: "application/pdf" });
    const fileId = generateId();
    const storage = await saveSheetFile(fileId, fileToSave);

    const record = createSheetRecord({
      fileId,
      fileName,
      uploadedAt: new Date().toISOString(),
      title,
      key,
      pageStart: null,
      pageEnd: null,
      storage: storage.storage,
      driveFileId: storage.driveFileId,
    });

    state.data.sheets.push(record);
    attachSheetToSong(song, record.id, { append: isSongSheetAddMode(song) });
    state.serviceFormSheetSearch[song.id] = "";
    setSongSheetAddMode(song, false);
    if (!song.title) {
      song.title = title;
    }
    if (!song.key) {
      song.key = key;
    }
    saveData();

    renderSongEditorRows();
    renderSheetLibrary();
    setServicePacketStatus(
      isImageFile(selected)
        ? `"${title}" 이미지 악보를 PDF로 변환 후 곡에 연결했습니다.`
        : `"${title}" 악보 업로드 후 곡에 연결했습니다.`
    );
  } catch (error) {
    setServicePacketStatus(`악보 업로드 실패: ${error.message}`, true);
  }
}

function setServicePacketStatus(message, isError = false) {
  state.servicePacketMessage = String(message || "");
  els.servicePacketStatus.textContent = state.servicePacketMessage;
  els.servicePacketStatus.classList.toggle("warn", Boolean(isError && state.servicePacketMessage));
}

function setVerseAutoFillLoading(loading) {
  if (!els.autoFillVerse) {
    return;
  }
  const active = Boolean(loading);
  els.autoFillVerse.classList.toggle("is-loading", active);
  els.autoFillVerse.disabled = active;
}

function buildWeeklyPacketFilename(isoDate, serviceName) {
  const date = parseIsoDate(isoDate);
  if (!date) {
    return sanitizeFilename(`weekly_${Date.now()}.pdf`);
  }

  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yy = String(date.getFullYear()).slice(-2);
  const cleanServiceName = String(serviceName || "주일예배")
    .replace(/\s+/g, "")
    .trim() || "주일예배";

  return sanitizeFilename(`${mm}${dd}${yy}_${cleanServiceName}악보.pdf`);
}

function getServiceEventName(date) {
  const rotation = aggregateRotationForDate(date);
  const name = rotation && rotation.name ? String(rotation.name).trim() : "";
  return name || "주일예배";
}

function makePageIndices(sheet, pageCount) {
  const start = sheet.pageStart ? Math.max(1, sheet.pageStart) : 1;
  const end = sheet.pageEnd ? Math.min(pageCount, sheet.pageEnd) : pageCount;

  if (end < start) {
    return [];
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start - 1 + index);
}

function findSheetCandidates(songTitle) {
  const keyword = normalizeText(songTitle);
  if (!keyword) {
    return [];
  }

  return state.data.sheets
    .filter((sheet) => normalizeText(sheet.title).includes(keyword))
    .sort((a, b) => {
      const aExact = normalizeText(a.title) === keyword ? -1 : 0;
      const bExact = normalizeText(b.title) === keyword ? -1 : 0;
      return aExact - bExact;
    });
}

async function saveSheetFile(fileId, file) {
  if (isDriveEnabled()) {
    const uploaded = await uploadFileToDrive(file);
    if (uploaded && uploaded.id) {
      return {
        storage: "drive",
        driveFileId: uploaded.id,
      };
    }
  }

  await setSheetFileBlob(fileId, file);
  return {
    storage: "local",
    driveFileId: "",
  };
}

async function resolveSheetBlob(sheet) {
  if (!sheet) {
    return null;
  }

  if (sheet.storage === "drive" && sheet.driveFileId) {
    const driveBlob = await downloadDriveFileBlob(sheet.driveFileId);
    if (driveBlob) {
      return driveBlob;
    }
  }

  if (sheet.fileId) {
    return getSheetFileBlob(sheet.fileId);
  }

  return null;
}

function buildSongBank() {
  const map = new Map();

  Object.values(state.data.services).forEach((service) => {
    service.songs.forEach((song) => {
      if (!song.title) {
        return;
      }

      const normalizedTitle = normalizeText(song.title);
      const referenceKey = normalizeReferenceKey(song.referenceUrl);
      const groupKey = `${normalizedTitle}__${referenceKey || "no_ref"}`;
      if (!map.has(groupKey)) {
        map.set(groupKey, {
          id: groupKey,
          title: song.title,
          referenceUrl: song.referenceUrl || "",
          youtubeThumb: getYouTubeThumbnail(song.referenceUrl),
          dates: [],
          keys: [],
          tempos: [],
          latestDate: service.date || "",
        });
      }

      const entry = map.get(groupKey);
      if (!entry.referenceUrl && song.referenceUrl) {
        entry.referenceUrl = song.referenceUrl;
      }
      if (!entry.youtubeThumb && song.referenceUrl) {
        entry.youtubeThumb = getYouTubeThumbnail(song.referenceUrl);
      }

      entry.dates.push(service.date);
      if (song.key) {
        entry.keys.push(song.key);
      }
      if (song.tempo) {
        entry.tempos.push(song.tempo);
      }
      if (!entry.latestDate || String(service.date || "") > entry.latestDate) {
        entry.latestDate = String(service.date || "");
      }
    });
  });

  return Array.from(map.values())
    .map((entry) => ({
      ...entry,
      dates: Array.from(new Set(entry.dates.filter(Boolean))).sort((a, b) => a.localeCompare(b)),
      keys: Array.from(new Set(entry.keys.filter(Boolean))),
      tempos: Array.from(new Set(entry.tempos.filter(Boolean))),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

function normalizeReferenceKey(url) {
  const ytId = extractYouTubeVideoId(url);
  if (ytId) {
    return `yt:${ytId}`;
  }
  if (!isValidUrl(url)) {
    return "";
  }
  try {
    const parsed = new URL(url);
    parsed.hash = "";
    return `${parsed.origin}${parsed.pathname}${parsed.search}`.toLowerCase();
  } catch {
    return "";
  }
}

function extractYouTubeVideoId(url) {
  if (!isValidUrl(url)) {
    return "";
  }
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./i, "").toLowerCase();
    if (host === "youtu.be") {
      return parsed.pathname.replace(/\//g, "").trim();
    }
    if (host.endsWith("youtube.com")) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v") || "";
      }
      const parts = parsed.pathname.split("/").filter(Boolean);
      if (parts.length >= 2 && ["embed", "shorts", "live", "v"].includes(parts[0])) {
        return parts[1];
      }
    }
    return "";
  } catch {
    return "";
  }
}

function getYouTubeThumbnail(url) {
  const id = extractYouTubeVideoId(url);
  if (!id) {
    return "";
  }
  return `https://img.youtube.com/vi/${encodeURIComponent(id)}/mqdefault.jpg`;
}

function renderUnavailableCellNotices(names) {
  const uniqueNames = Array.from(new Set((names || []).map((name) => String(name || "").trim()).filter(Boolean)));
  if (!uniqueNames.length) {
    return "";
  }

  return `<div class="unavailable-note-list"><span class="unavailable-note">(${escapeHtml(
    uniqueNames.join(", ")
  )}) 불가능</span></div>`;
}

function getUnavailableNamesForRoleDate(role, date) {
  if (!role || !date) {
    return [];
  }

  return state.data.unavailability
    .filter((item) => {
      const sameRole = !item.role || item.role === role;
      return sameRole && date >= item.startDate && date <= item.endDate;
    })
    .map((item) => item.name)
    .filter(Boolean)
    .filter((name, index, array) => array.indexOf(name) === index);
}

function annotateNames(raw, date, role = "") {
  const names = raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!names.length) {
    return "";
  }

  return names
    .map((name) => {
      const blocked = isUnavailable(name, date, role);
      return `<span class="name-token ${blocked ? "unavailable" : ""}">${escapeHtml(name)}${
        blocked ? " <small>(x)</small>" : ""
      }</span>`;
    })
    .join("");
}

function isUnavailable(name, date, role = "") {
  const key = normalizeText(name);
  return state.data.unavailability.some((item) => {
    if (normalizeText(item.name) !== key) {
      return false;
    }
    if (item.role && role && item.role !== role) {
      return false;
    }
    return date >= item.startDate && date <= item.endDate;
  });
}

function onStartupTouch() {
  if (state.startup.inTransition) {
    return;
  }

  const lastIndex = state.startup.slides.length - 1;
  if (state.startup.index >= lastIndex) {
    finishStartupFlow();
    return;
  }

  state.startup.inTransition = true;
  els.startupSlide.classList.add("is-fading");

  window.setTimeout(() => {
    state.startup.index += 1;
    renderStartupSlide();
    els.startupSlide.classList.remove("is-fading");
    state.startup.inTransition = false;
  }, 820);
}

function runStartupFlow() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("intro") === "1") {
    localStorage.removeItem(INTRO_DONE_KEY);
    params.delete("intro");
    const cleanQuery = params.toString();
    const nextUrl = `${window.location.pathname}${cleanQuery ? `?${cleanQuery}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", nextUrl);
  }

  const introDone = localStorage.getItem(INTRO_DONE_KEY) === "true";
  state.startup.slides = introDone ? buildAlwaysSlide() : buildFirstRunSlides();
  state.startup.index = 0;

  renderStartupSlide();

  if (state.startup.slides.length <= 1) {
    els.startupInstruction.textContent = "화면을 터치해 시작";
  }
}

function renderStartupSlide() {
  const slide = state.startup.slides[state.startup.index];
  if (!slide) {
    return;
  }

  els.startupSlide.classList.toggle("is-always", slide.variant === "always");
  els.startupSlide.innerHTML = slide.html;
  els.startupInstruction.textContent =
    state.startup.index >= state.startup.slides.length - 1
      ? "화면을 터치해 앱 시작"
      : "화면을 터치해 다음";
}

function finishStartupFlow() {
  const firstRun = localStorage.getItem(INTRO_DONE_KEY) !== "true";
  if (firstRun) {
    localStorage.setItem(INTRO_DONE_KEY, "true");
  }

  els.startupSlide.classList.add("is-fading");
  els.startupOverlay.style.transition = "opacity 920ms ease";
  els.startupOverlay.style.opacity = "0";

  window.setTimeout(() => {
    els.startupOverlay.hidden = true;
    els.app.hidden = false;
  }, 920);
}

function buildFirstRunSlides() {
  return [
    makeStartupImageSlide("assets/startup/start-1.png", "시작파일 1"),
    makeStartupImageSlide("assets/startup/start-2.png", "시작파일 2"),
    makeStartupImageSlide("assets/startup/start-3.png", "시작파일 3"),
    makeStartupImageSlide("assets/startup/start-4.png", "시작파일 4"),
  ];
}

function buildAlwaysSlide() {
  return [
    makeStartupImageSlide("assets/startup/always-start.png", "항상시작", "always"),
  ];
}

function makeStartupImageSlide(src, alt, variant = "default") {
  return {
    variant,
    html: `<img class="startup-image" src="${src}" alt="${alt}" />`,
  };
}

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return makeDefaultData();
  }

  try {
    const parsed = JSON.parse(raw);
    return normalizeLoadedData(parsed);
  } catch {
    return makeDefaultData();
  }
}

function normalizeLoadedData(parsed) {
  const normalizedServices = Object.fromEntries(
    Object.entries(parsed.services || {}).map(([date, service]) => [date, normalizeServiceEntry(service, date)])
  );

  const data = {
    services: normalizedServices,
    selectedServiceDate: parsed.selectedServiceDate || "",
    sheets: Array.isArray(parsed.sheets) ? parsed.sheets.map(normalizeSheetEntry) : [],
    rotations: (parsed.rotations || []).map((rotation) => {
      const assignments = { ...(rotation.assignments || {}) };
      const practiceDate = String(rotation.practiceDate || "");
      const practiceDay = String(rotation.practiceDay || computePracticeDayLabel(practiceDate));
      if (assignments["싱어"] && !assignments["여자싱어"] && !assignments["남자싱어"]) {
        assignments["여자싱어"] = assignments["싱어"];
      }

      ROLE_NAMES.forEach((role) => {
        if (typeof assignments[role] !== "string") {
          assignments[role] = "";
        }
      });

      return {
        ...rotation,
        name: String(rotation.name || "주일예배"),
        practiceDate,
        practiceDay,
        assignments,
      };
    }),
    unavailability: (parsed.unavailability || []).map((item) => ({
      id: item.id || generateId(),
      name: item.name || "",
      role: item.role || "",
      startDate: item.startDate || "",
      endDate: item.endDate || "",
    })),
  };

  return data;
}

function makeDefaultData() {
  const date = nextSundayIso();

  return {
    services: {
      [date]: makeDefaultService(date),
    },
    selectedServiceDate: date,
    sheets: [],
    rotations: [
      {
        id: generateId(),
        name: "주일예배",
        practiceDate: "",
        practiceDay: "금요일",
        worshipDate: date,
        assignments: ROLE_NAMES.reduce((acc, role) => {
          acc[role] = "";
          return acc;
        }, {}),
      },
    ],
    unavailability: [],
  };
}

function makeDefaultService(date) {
  return {
    date,
    practiceDate: "",
    practiceDay: "",
    practiceTime: "",
    verseRefs: "",
    verse: "",
    meditation: "",
    playlistUrl: "",
    songs: [],
    weeklyPacket: null,
  };
}

function normalizeServiceEntry(service, date) {
  const source = service && typeof service === "object" ? service : {};
  const practiceDate = source.practiceDate || "";
  return {
    date: source.date || date,
    practiceDate,
    practiceDay: source.practiceDay || computePracticeDayLabel(practiceDate),
    practiceTime: source.practiceTime || "",
    verseRefs: source.verseRefs || "",
    verse: source.verse || "",
    meditation: source.meditation || "",
    playlistUrl: source.playlistUrl || "",
    songs: Array.isArray(source.songs)
      ? source.songs.map((song) => ({
          ...makeEmptySong(),
          ...(song || {}),
          title: String((song && song.title) || ""),
          key: String((song && song.key) || ""),
          tempo: String((song && song.tempo) || ""),
          referenceUrl: String((song && song.referenceUrl) || ""),
          comment: String((song && song.comment) || ""),
          sheetIds: normalizeSongSheetIds(song),
          sheetId: normalizeSongSheetIds(song)[0] || "",
          packetSelected: song && Object.prototype.hasOwnProperty.call(song, "packetSelected")
            ? Boolean(song.packetSelected)
            : true,
        }))
      : [],
    weeklyPacket: normalizeWeeklyPacket(source.weeklyPacket),
  };
}

function normalizeWeeklyPacket(packet) {
  if (!packet || typeof packet !== "object") {
    return null;
  }

  const fileName = String(packet.fileName || "");
  const fileId = String(packet.fileId || "");
  const driveFileId = String(packet.driveFileId || "");
  if (!fileName || (!fileId && !driveFileId)) {
    return null;
  }

  return {
    id: String(packet.id || generateId()),
    fileId,
    fileName,
    storage: packet.storage === "drive" ? "drive" : "local",
    driveFileId,
    createdAt: String(packet.createdAt || ""),
    serviceName: String(packet.serviceName || ""),
    songSheetIds: Array.isArray(packet.songSheetIds)
      ? packet.songSheetIds.map((id) => String(id || "")).filter(Boolean)
      : [],
  };
}

function cloneWeeklyPacket(packet) {
  const normalized = normalizeWeeklyPacket(packet);
  if (!normalized) {
    return null;
  }
  return {
    ...normalized,
    songSheetIds: [...normalized.songSheetIds],
  };
}

function normalizeSongSheetIds(song) {
  const source = song && typeof song === "object" ? song : {};
  const list = [];
  if (Array.isArray(source.sheetIds)) {
    source.sheetIds.forEach((id) => list.push(String(id || "")));
  }
  if (source.sheetId) {
    list.push(String(source.sheetId || ""));
  }
  return Array.from(new Set(list.map((id) => id.trim()).filter(Boolean)));
}

function getSongSheetIds(song) {
  const ids = normalizeSongSheetIds(song);
  if (song && typeof song === "object") {
    song.sheetIds = [...ids];
    song.sheetId = ids[0] || "";
  }
  return ids;
}

function setSongSheetIds(song, ids) {
  if (!song || typeof song !== "object") {
    return;
  }
  const normalized = Array.from(new Set((ids || []).map((id) => String(id || "").trim()).filter(Boolean)));
  song.sheetIds = normalized;
  song.sheetId = normalized[0] || "";
}

function attachSheetToSong(song, sheetId, options = {}) {
  const id = String(sheetId || "").trim();
  if (!song || !id) {
    return;
  }
  const append = options.append === true;
  const current = getSongSheetIds(song);
  if (!append) {
    setSongSheetIds(song, [id]);
    return;
  }
  setSongSheetIds(song, [...current, id]);
}

function detachSheetFromSong(song, sheetId) {
  const id = String(sheetId || "").trim();
  if (!song || !id) {
    return;
  }
  const current = getSongSheetIds(song).filter((item) => item !== id);
  setSongSheetIds(song, current);
}

function isSongSheetAddMode(song) {
  if (!song || !song.id) {
    return false;
  }
  return Boolean(state.serviceFormSheetAddMode[song.id]);
}

function setSongSheetAddMode(song, on) {
  if (!song || !song.id) {
    return;
  }
  state.serviceFormSheetAddMode[song.id] = Boolean(on);
}

function normalizeSheetEntry(sheet) {
  const source = sheet && typeof sheet === "object" ? sheet : {};
  const pageStart = Number(source.pageStart);
  const pageEnd = Number(source.pageEnd);
  return {
    id: String(source.id || generateId()),
    fileId: String(source.fileId || ""),
    fileName: String(source.fileName || ""),
    title: String(source.title || "제목 미확인"),
    key: String(source.key || ""),
    pageStart: Number.isFinite(pageStart) && pageStart > 0 ? Math.trunc(pageStart) : null,
    pageEnd: Number.isFinite(pageEnd) && pageEnd > 0 ? Math.trunc(pageEnd) : null,
    uploadedAt: String(source.uploadedAt || ""),
    storage: source.storage === "drive" ? "drive" : "local",
    driveFileId: String(source.driveFileId || ""),
  };
}

function makeEmptySong() {
  return {
    id: generateId(),
    title: "",
    key: "",
    tempo: "",
    referenceUrl: "",
    comment: "",
    sheetIds: [],
    sheetId: "",
    packetSelected: true,
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  scheduleCloudPush();
}

function normalizeText(value) {
  return normalizeUnicodeString(value)
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function normalizeUnicodeString(value) {
  try {
    return String(value || "").normalize("NFC");
  } catch {
    return String(value || "");
  }
}

function parseIsoDate(value) {
  if (!value) {
    return null;
  }
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function toMonthStart(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function nextSundayIso() {
  return resolveWeeklySundayDate(new Date());
}

function formatDate(value) {
  const date = parseIsoDate(value);
  if (!date) {
    return "미정";
  }
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(
    date.getDate()
  ).padStart(2, "0")} (${WEEKDAY_KO[date.getDay()]})`;
}

function formatShortDate(value) {
  const date = parseIsoDate(value);
  if (!date) {
    return "-";
  }
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function formatBankDate(value) {
  const date = parseIsoDate(value);
  if (!date) {
    return "-";
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

async function autoFillVerseByReferences() {
  if (!els.serviceVerseRef || !els.serviceVerse) {
    return;
  }

  const refs = parseBibleReferencesInput(els.serviceVerseRef.value || "");
  if (!refs.length) {
    setServicePacketStatus("성경 구절 형식으로 입력해주세요. 예: 시편 90:12, 에베소서 5:15-16", true);
    return;
  }

  setVerseAutoFillLoading(true);
  setServicePacketStatus(`${BIBLE_VERSION_LABEL} 말씀을 불러오는 중...`);

  try {
    const blocks = [];
    const failed = [];
    for (const ref of refs) {
      try {
        const verses = await fetchBibleVerses(ref);
        if (!verses.length) {
          failed.push(ref.display);
          continue;
        }
        blocks.push(formatBibleVerseBlock(ref, verses));
      } catch {
        failed.push(ref.display);
      }
    }

    if (!blocks.length) {
      setServicePacketStatus(`${BIBLE_VERSION_LABEL} 말씀을 불러오지 못했습니다.`, true);
      return;
    }

    const nextText = blocks.join("\n\n");
    if (els.serviceVerse.value.trim()) {
      const ok = window.confirm("기존 주제 말씀 내용을 새로 불러온 말씀으로 바꿀까요?");
      if (!ok) {
        return;
      }
    }

    els.serviceVerse.value = normalizeVerseTextareaText(nextText);
    if (failed.length) {
      setServicePacketStatus(
        `일부 구절을 불러오지 못했습니다: ${failed.join(", ")} (나머지는 입력 완료)`,
        true
      );
    } else {
      setServicePacketStatus(`${BIBLE_VERSION_LABEL} 말씀을 자동 입력했습니다.`);
    }
  } finally {
    setVerseAutoFillLoading(false);
  }
}

function parseBibleReferencesInput(raw) {
  return String(raw || "")
    .split(/[\n,;，]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map(parseSingleBibleReference)
    .filter(Boolean);
}

function parseSingleBibleReference(text) {
  const source = String(text || "").trim();
  const match = source.match(/([1-3]?\s*[가-힣]+(?:\s*[가-힣]+)*)\s*(\d+)\s*[:：]\s*(\d+)(?:\s*-\s*(\d+))?/);
  if (!match) {
    return null;
  }

  const rawBook = String(match[1] || "").replace(/\s+/g, "");
  const chapter = Number(match[2]);
  const verseStart = Number(match[3]);
  const verseEnd = match[4] ? Number(match[4]) : verseStart;
  if (!chapter || !verseStart || !verseEnd || verseEnd < verseStart) {
    return null;
  }

  const normalizedBook = normalizeKoreanBookAlias(rawBook);
  const code = BIBLE_BOOK_ALIASES[normalizedBook];
  if (!code) {
    return null;
  }
  const bookKo = BIBLE_BOOK_CODE_TO_KO[code] || rawBook;
  return {
    code,
    chapter,
    verseStart,
    verseEnd,
    display: `${bookKo} ${chapter}:${verseStart}${verseEnd !== verseStart ? `-${verseEnd}` : ""}`,
  };
}

function scanBibleReferencesFromText(raw) {
  const source = String(raw || "");
  const pattern = /([1-3]?\s*[가-힣]+(?:\s*[가-힣]+)*)\s*(\d+)\s*[:：]\s*(\d+)(?:\s*-\s*(\d+))?/g;
  const refs = [];
  let match;
  while ((match = pattern.exec(source)) !== null) {
    const token = String(match[0] || "").trim();
    const parsed = parseSingleBibleReference(token);
    if (parsed) {
      refs.push(parsed);
    }
  }
  return refs;
}

function scanBibleChapterOnlyReferencesFromText(raw) {
  const source = String(raw || "");
  const pattern = /([1-3]?\s*[가-힣]+(?:\s*[가-힣]+)*)\s*(\d+)\s*장/g;
  const refs = [];
  let match;
  while ((match = pattern.exec(source)) !== null) {
    const rawBook = String(match[1] || "").replace(/\s+/g, "");
    const chapter = Number(match[2] || 0);
    if (!rawBook || !chapter) {
      continue;
    }
    const normalizedBook = normalizeKoreanBookAlias(rawBook);
    const code = BIBLE_BOOK_ALIASES[normalizedBook];
    if (!code) {
      continue;
    }
    const bookKo = BIBLE_BOOK_CODE_TO_KO[code] || rawBook;
    refs.push({
      code,
      chapter,
      verseStart: 1,
      verseEnd: 999,
      display: `${bookKo} ${chapter}장`,
    });
  }
  return refs;
}

function normalizeKoreanBookAlias(value) {
  return String(value || "")
    .replace(/\s+/g, "")
    .replace(/제/g, "")
    .replace(/요한1서/g, "요한일서")
    .replace(/요한2서/g, "요한이서")
    .replace(/요한3서/g, "요한삼서");
}

async function fetchBibleVerses(ref) {
  const chapter = await fetchBibleChapter(ref.code, ref.chapter, BIBLE_VERSION_CODE);
  return chapter.filter((item) => item.number >= ref.verseStart && item.number <= ref.verseEnd);
}

async function ensureLocalBibleTextLoaded() {
  if (state.bibleLocalTextLoaded && Object.keys(state.bibleLocalChapterMap || {}).length) {
    return;
  }
  if (state.bibleLocalTextLoadPromise) {
    await state.bibleLocalTextLoadPromise;
    return;
  }

  state.bibleLocalTextLoadPromise = (async () => {
    const response = await fetch(`${BIBLE_LOCAL_TEXT_PATH}?v=${encodeURIComponent(APP_BUILD_ID)}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Local bible text missing (HTTP ${response.status})`);
    }
    const source = await response.text();
    const parsed = parseLocalBibleText(source);
    if (!Object.keys(parsed.chapterMap).length) {
      throw new Error("Local bible text parse failed");
    }
    state.bibleLocalChapterMap = parsed.chapterMap;
    state.bibleLocalBookMetaById = parsed.bookMetaById;
    state.bibleLocalTextLoaded = true;
  })();

  try {
    await state.bibleLocalTextLoadPromise;
  } finally {
    state.bibleLocalTextLoadPromise = null;
  }
}

function parseLocalBibleText(rawText) {
  const source = String(rawText || "");
  const lines = source.split(/\r?\n/);
  const chapterMap = {};
  const bookMetaById = {};

  lines.forEach((line) => {
    const cleaned = String(line || "").trim();
    if (!cleaned) {
      return;
    }

    const bookMetaMatch = cleaned.match(/^(\d{2})\s+0:0\s+([^,]*),([^,]*),(\d+)/);
    if (bookMetaMatch) {
      const bookId = bookMetaMatch[1];
      bookMetaById[bookId] = {
        shortName: String(bookMetaMatch[2] || "").trim(),
        fullName: String(bookMetaMatch[3] || "").trim(),
        chapterCount: Number(bookMetaMatch[4] || 0),
      };
      return;
    }

    const verseMatch = cleaned.match(/^(\d{2})\s+(\d+):(\d+)\s+([\s\S]+)$/);
    if (!verseMatch) {
      return;
    }
    const bookId = verseMatch[1];
    const chapter = Number(verseMatch[2] || 0);
    const verse = Number(verseMatch[3] || 0);
    const text = normalizeLocalBibleVerseText(verseMatch[4] || "");
    if (!chapter || !verse || !text) {
      return;
    }

    const key = `${bookId}:${chapter}`;
    if (!Array.isArray(chapterMap[key])) {
      chapterMap[key] = [];
    }
    chapterMap[key].push({ number: verse, text });
  });

  Object.keys(chapterMap).forEach((key) => {
    chapterMap[key].sort((left, right) => Number(left.number) - Number(right.number));
  });

  return {
    chapterMap,
    bookMetaById,
  };
}

function normalizeLocalBibleVerseText(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchBibleChapter(bookCode, chapterNo, versionCode) {
  const cacheKey = `${BIBLE_CACHE_REV}:${versionCode}:${bookCode}:${chapterNo}`;
  if (Array.isArray(state.bibleChapterCache[cacheKey])) {
    return state.bibleChapterCache[cacheKey];
  }

  const code = String(bookCode || "").trim().toLowerCase();
  const chapter = Number(chapterNo || 0);
  if (!code || !chapter) {
    throw new Error("Invalid bible chapter request");
  }

  const localBookId = BIBLE_BOOK_CODE_TO_LOCAL_ID[code];
  if (!localBookId) {
    throw new Error("Unsupported Bible book code");
  }

  await ensureLocalBibleTextLoaded();

  const chapterKey = `${localBookId}:${chapter}`;
  const verses = Array.isArray(state.bibleLocalChapterMap[chapterKey]) ? state.bibleLocalChapterMap[chapterKey] : [];
  if (!verses.length) {
    throw new Error("Bible chapter not found");
  }

  const safeVerses = verses.map((item) => ({
    number: Number(item.number),
    text: String(item.text || ""),
  }));
  state.bibleChapterCache[cacheKey] = safeVerses;
  return safeVerses;
}

async function fetchBibleChapterSourceText(codetabsUrl, versionCode) {
  const expectedVersionCode = String(versionCode || "").trim().toUpperCase();
  const candidates = [
    {
      label: "codetabs",
      kind: "text",
      url: codetabsUrl,
      timeoutMs: 12000,
    },
  ];

  const errors = [];
  for (const candidate of candidates) {
    let lastError = null;
    for (let attempt = 1; attempt <= 2; attempt += 1) {
      try {
        const text = await fetchTextWithTimeout(candidate.url, candidate.timeoutMs);
        if (!text.trim()) {
          throw new Error("empty body");
        }
        if (!matchesBibleVersion(text, expectedVersionCode)) {
          throw new Error("version mismatch");
        }
        return text;
      } catch (error) {
        lastError = error;
        if (attempt < 2 && isRetryableBibleFetchError(error)) {
          await wait(220 * attempt);
          continue;
        }
        break;
      }
    }

    const message = lastError && lastError.message ? lastError.message : "unknown error";
    errors.push(`${candidate.label}:${message}`);
  }

  throw new Error(errors.join(" / "));
}

function matchesBibleVersion(rawText, expectedVersionCode) {
  const expected = String(expectedVersionCode || "").trim().toUpperCase();
  if (!expected) {
    return true;
  }
  const detected = extractBibleComVersionAbbreviation(rawText);
  if (!detected) {
    return false;
  }
  return detected === expected;
}

function extractBibleComVersionAbbreviation(rawText) {
  const source = String(rawText || "");
  if (!source.trim()) {
    return "";
  }

  const nextDataMatch = source.match(
    /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/i
  );
  if (nextDataMatch && nextDataMatch[1]) {
    try {
      const payload = JSON.parse(nextDataMatch[1]);
      const abbr = payload?.props?.pageProps?.versionData?.local_abbreviation;
      if (abbr) {
        return String(abbr).trim().toUpperCase();
      }
    } catch {
      // ignore parse error and use fallback regex checks
    }
  }

  const fromPath = source.match(/\/bible\/\d+\/[A-Z0-9]{2,5}\.\d{1,3}\.([A-Z0-9]{2,10})/i);
  if (fromPath && fromPath[1]) {
    return String(fromPath[1]).trim().toUpperCase();
  }

  return "";
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, Math.max(0, Number(ms || 0)));
  });
}

function isRetryableBibleFetchError(error) {
  const message = String((error && error.message) || "").toLowerCase();
  if (!message) {
    return false;
  }
  if (
    message.includes("abort") ||
    message.includes("timeout") ||
    message.includes("networkerror") ||
    message.includes("failed to fetch")
  ) {
    return true;
  }
  const codeMatch = message.match(/http\s+(\d{3})/i);
  if (!codeMatch) {
    return false;
  }
  const code = Number(codeMatch[1]);
  return code === 408 || code === 409 || code === 425 || code === 429 || (code >= 500 && code <= 599);
}

async function fetchTextWithTimeout(url, timeoutMs = 10000) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.text();
  } finally {
    window.clearTimeout(timer);
  }
}

function parseBsKoreaVersesFromHtml(html) {
  const doc = new DOMParser().parseFromString(String(html || ""), "text/html");
  const container = doc.querySelector("#tdBible1");
  if (!container) {
    return [];
  }

  const verseMap = new Map();
  const verseNodes = Array.from(container.children).filter((child) => child.tagName === "SPAN");
  verseNodes.forEach((verseNode) => {
    const numberNode = verseNode.querySelector("span.number");
    const verseNo = numberNode
      ? Number(String(numberNode.textContent || "").replace(/[^\d]/g, ""))
      : 0;
    if (!verseNo || verseMap.has(verseNo)) {
      return;
    }

    const cleanNode = verseNode.cloneNode(true);
    cleanNode.querySelectorAll("div.D2, a.comment, span.number").forEach((node) => node.remove());
    const content = extractVisibleVerseText(cleanNode, doc);
    if (!content) {
      return;
    }
    verseMap.set(verseNo, content);
  });

  return Array.from(verseMap.entries())
    .sort((left, right) => left[0] - right[0])
    .map(([number, text]) => ({ number, text }));
}

function toBibleComUsfmCode(bookCode) {
  const source = String(bookCode || "").trim().toUpperCase();
  if (!source) {
    return "";
  }
  return source;
}

function extractBibleComVerseNumbers(rawUsfm, usfmCode, chapterNo) {
  const source = String(rawUsfm || "").trim().toUpperCase();
  if (!source) {
    return [];
  }
  const targetBook = String(usfmCode || "").trim().toUpperCase();
  const targetChapter = Number(chapterNo || 0);
  const numbers = [];
  const seen = new Set();
  const matches = source.matchAll(/([1-3]?[A-Z]{2,3})\.(\d{1,3})\.(\d{1,3})/g);
  for (const match of matches) {
    const book = String(match[1] || "").toUpperCase();
    const chapter = Number(match[2] || 0);
    const verse = Number(match[3] || 0);
    if (!verse) {
      continue;
    }
    if (targetBook && book !== targetBook) {
      continue;
    }
    if (targetChapter && chapter !== targetChapter) {
      continue;
    }
    if (seen.has(verse)) {
      continue;
    }
    seen.add(verse);
    numbers.push(verse);
  }
  return numbers.sort((left, right) => left - right);
}

function parseBibleComVersesFromHtml(html, usfmCode, chapterNo) {
  const doc = new DOMParser().parseFromString(String(html || ""), "text/html");
  const verseNodes = Array.from(doc.querySelectorAll("[data-usfm]"));
  if (!verseNodes.length) {
    return [];
  }

  const verseMap = new Map();
  verseNodes.forEach((verseNode) => {
    const dataUsfm = String(verseNode.getAttribute("data-usfm") || "").trim();
    if (!dataUsfm) {
      return;
    }
    const numbers = extractBibleComVerseNumbers(dataUsfm, usfmCode, chapterNo);
    if (!numbers.length) {
      return;
    }

    const cleanNode = verseNode.cloneNode(true);
    cleanNode.querySelectorAll('[class*="note"], .ft, sup').forEach((node) => {
      node.replaceWith(doc.createTextNode(" "));
    });
    const contentNodes = Array.from(cleanNode.querySelectorAll('[class*="content"]'));
    const textNodes = contentNodes.length ? contentNodes : [cleanNode];
    const chunks = textNodes
      .map((node) => normalizeBibleVerseText(node.textContent || ""))
      .filter(Boolean);
    const content = normalizeBibleVerseText(chunks.join(" "));
    if (!content) {
      return;
    }

    numbers.forEach((number) => {
      const current = String(verseMap.get(number) || "").trim();
      if (!current) {
        verseMap.set(number, content);
        return;
      }
      if (current === content || current.includes(content)) {
        return;
      }
      verseMap.set(number, `${current} ${content}`.replace(/\s+/g, " ").trim());
    });
  });

  return Array.from(verseMap.entries())
    .sort((left, right) => left[0] - right[0])
    .map(([number, text]) => ({ number, text }));
}

function normalizeBibleVerseText(value) {
  const normalized = String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/[\u2000-\u200f\u2028-\u202f\u205f\u2060\ufeff]/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/([“‘"'([{])\s+/g, "$1")
    .replace(/\s+([”’"')\]}])/g, "$1")
    .trim();

  if (!needsKoreanSpacingRepair(normalized)) {
    return normalized;
  }
  return repairKoreanBibleSpacing(normalized);
}

function needsKoreanSpacingRepair(text) {
  const source = String(text || "").trim();
  if (!source) {
    return false;
  }
  const hangulCount = (source.match(/[가-힣]/g) || []).length;
  if (hangulCount < 14) {
    return false;
  }
  const spaceCount = (source.match(/\s/g) || []).length;
  return spaceCount <= Math.floor(hangulCount / 14);
}

function repairKoreanBibleSpacing(text) {
  let output = String(text || "");

  output = output.replace(/([가-힣])위에(?=[가-힣])/g, "$1 위에 ");

  // 조사 뒤 공백 복원
  const particleTokens = [
    "께서",
    "에게서",
    "에게",
    "에서",
    "으로",
    "로",
    "부터",
    "까지",
    "처럼",
    "보다",
    "와",
    "과",
    "을",
    "를",
    "은",
    "는",
    "의",
    "도",
    "만",
    "에",
  ];
  particleTokens.forEach((token) => {
    const pattern = new RegExp(`([가-힣]{1,}?${token})(?=[가-힣])`, "g");
    output = output.replace(pattern, "$1 ");
  });

  // 붙어 있는 주격 조사(이/가) 보정 - 동사 시작 패턴에서만 제한적으로 적용
  output = output.replace(
    /([가-힣]{1,6}(?:이|가))(?=[없있하되생좋깊비모드날나보부움식차])/g,
    "$1 "
  );

  // 성경 문체에서 자주 붙는 연결 어미 보정
  const endingTokens = [
    "말씀하시기를",
    "하셨습니다",
    "하시니",
    "하시고",
    "하셨고",
    "했습니다",
    "되었습니다",
    "됐습니다",
    "있었습니다",
    "있었고",
    "없었고",
    "생겼습니다",
    "나누셨습니다",
    "부르셨습니다",
    "부르시고",
    "보시기에",
    "모이고",
    "드러나라",
    "움직이고",
    "비어",
    "고",
    "며",
  ];
  endingTokens.forEach((token) => {
    const pattern = new RegExp(`(${token})(?=[가-힣“‘"'(])`, "g");
    output = output.replace(pattern, "$1 ");
  });

  output = output
    .replace(/([가-힣])([“‘"'(])/g, "$1 $2")
    .replace(/([”’"')])([가-힣])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();

  return output;
}

function parseBsKoreaVersesFromMarkdown(markdown) {
  const source = String(markdown || "");
  if (!source.trim()) {
    return [];
  }

  const lines = source.split(/\r?\n/);
  const versionMarkers = [`**${BIBLE_VERSION_LABEL}**`, "**새번역**"];
  let start = lines.findIndex((line) => versionMarkers.some((marker) => line.includes(marker)));
  if (start < 0) {
    start = lines.findIndex((line) => line.includes("Markdown Content:"));
  }
  if (start < 0) {
    return [];
  }

  const verseMap = new Map();
  let currentNumber = 0;
  let currentText = "";

  const flush = () => {
    if (!currentNumber) {
      return;
    }
    const cleaned = String(currentText || "")
      .replace(/\[\d+\)\]\([^)]+\)/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (cleaned && !verseMap.has(currentNumber)) {
      verseMap.set(currentNumber, cleaned);
    }
    currentNumber = 0;
    currentText = "";
  };

  for (let i = start + 1; i < lines.length; i += 1) {
    const raw = String(lines[i] || "").trim();
    if (!raw) {
      continue;
    }
    if (/^\[\!\[Image/i.test(raw) || raw.startsWith("성경 단어 검색")) {
      flush();
      break;
    }
    if (raw === "**새번역**" || /^제\s*\d+\s*장$/.test(raw)) {
      continue;
    }

    const cleanedLine = raw
      .replace(/\[\d+\)\]\([^)]+\)/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!cleanedLine) {
      continue;
    }

    const startMatch = cleanedLine.match(/^(\d{1,3})(?=[\s가-힣A-Za-z"'“‘(])/);
    if (startMatch) {
      flush();
      currentNumber = Number(startMatch[1]);
      currentText = cleanedLine.slice(startMatch[1].length).trim();
      continue;
    }

    if (currentNumber) {
      currentText = `${currentText} ${cleanedLine}`.trim();
    }
  }

  flush();
  return Array.from(verseMap.entries())
    .sort((left, right) => left[0] - right[0])
    .map(([number, text]) => ({ number, text }));
}

function extractVisibleVerseText(rootNode, doc) {
  if (!rootNode || !doc) {
    return "";
  }
  const walker = doc.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT);
  const chunks = [];

  while (walker.nextNode()) {
    const current = walker.currentNode;
    if (!current) {
      continue;
    }
    const parent = current.parentElement;
    if (!parent) {
      continue;
    }
    if (parent.closest("div.D2, a.comment, span.number")) {
      continue;
    }

    const value = String(current.nodeValue || "").replace(/\u00a0/g, " ").trim();
    if (!value) {
      continue;
    }
    chunks.push(value);
  }

  return chunks
    .join(" ")
    .replace(/\d+\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatBibleVerseBlock(ref, verses) {
  const heading = `${ref.display}`;
  if (verses.length === 1) {
    return `${heading}\n${verses[0].text}`;
  }
  const lines = verses.map((item) => `${item.number}. ${item.text}`).join("\n");
  return `${heading}\n${lines}`;
}

function extractBibleChapterReferencesFromVerse(rawVerse, rawVerseRefs = "") {
  const refs = [];
  const seen = new Set();
  const pushRef = (ref) => {
    if (!ref) {
      return;
    }
    const key = `${ref.code}:${ref.chapter}:${ref.verseStart}:${ref.verseEnd}`;
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    refs.push({
      key,
      code: ref.code,
      chapter: ref.chapter,
      verseStart: ref.verseStart,
      verseEnd: ref.verseEnd,
      label: ref.display || `${BIBLE_BOOK_CODE_TO_KO[ref.code] || ref.code} ${ref.chapter}:${ref.verseStart}`,
    });
  };

  parseBibleReferencesInput(rawVerseRefs).forEach(pushRef);
  parseBibleReferencesInput(rawVerse).forEach(pushRef);
  scanBibleReferencesFromText(rawVerse).forEach(pushRef);
  scanBibleChapterOnlyReferencesFromText(rawVerseRefs).forEach(pushRef);
  scanBibleChapterOnlyReferencesFromText(rawVerse).forEach(pushRef);
  return refs;
}

function resetBibleViewerState() {
  state.bibleViewer = {
    refs: [],
    activeRefKey: "",
    bookCode: "",
    chapter: 0,
    loading: false,
    error: "",
    verses: [],
    requestSeq: 0,
  };
  renderBibleViewer();
}

function openBibleViewerForDate(date) {
  if (!els.bibleViewerDialog) {
    return;
  }
  const isoDate = String(date || "").trim();
  if (!isoDate) {
    return;
  }
  const service = state.data.services[isoDate];
  if (!service) {
    window.alert("등록된 주제 말씀이 없습니다.");
    return;
  }
  const refs = extractBibleChapterReferencesFromVerse(service.verse || "", service.verseRefs || "");
  if (!refs.length) {
    window.alert("말씀 구절 정보를 찾지 못했습니다.");
    return;
  }

  state.bibleViewer.refs = refs;
  state.bibleViewer.activeRefKey = refs[0].key;
  state.bibleViewer.error = "";
  state.bibleViewer.verses = [];
  renderBibleViewer();
  openDialog(els.bibleViewerDialog);
  void loadBibleViewerChapter(refs[0].code, refs[0].chapter, refs[0].key);
}

async function setBibleViewerReference(refKey) {
  const key = String(refKey || "");
  const target = state.bibleViewer.refs.find((ref) => ref.key === key);
  if (!target) {
    return;
  }

  if (
    target.code === state.bibleViewer.bookCode &&
    target.chapter === state.bibleViewer.chapter &&
    Array.isArray(state.bibleViewer.verses) &&
    state.bibleViewer.verses.length
  ) {
    state.bibleViewer.activeRefKey = target.key;
    state.bibleViewer.error = "";
    renderBibleViewer();
    return;
  }

  state.bibleViewer.activeRefKey = target.key;
  await loadBibleViewerChapter(target.code, target.chapter, target.key);
}

async function shiftBibleViewerChapter(delta) {
  if (state.bibleViewer.loading) {
    return;
  }
  const baseChapter = Number(state.bibleViewer.chapter || 0);
  const targetChapter = baseChapter + Number(delta || 0);
  if (!state.bibleViewer.bookCode || targetChapter < 1) {
    return;
  }
  const ok = await loadBibleViewerChapter(state.bibleViewer.bookCode, targetChapter);
  if (!ok) {
    window.alert("해당 장을 불러오지 못했습니다.");
  }
}

async function loadBibleViewerChapter(bookCode, chapterNo, refKey = "") {
  const code = String(bookCode || "").trim();
  const chapter = Number(chapterNo || 0);
  if (!code || !chapter) {
    return false;
  }

  const requestSeq = Number(state.bibleViewer.requestSeq || 0) + 1;
  state.bibleViewer.requestSeq = requestSeq;
  state.bibleViewer.loading = true;
  state.bibleViewer.error = "";
  renderBibleViewer();

  try {
    const verses = await fetchBibleChapter(code, chapter, BIBLE_VERSION_CODE);
    if (state.bibleViewer.requestSeq !== requestSeq) {
      return false;
    }
    if (!Array.isArray(verses) || !verses.length) {
      throw new Error("no verses");
    }
    state.bibleViewer.bookCode = code;
    state.bibleViewer.chapter = chapter;
    state.bibleViewer.verses = verses;
    state.bibleViewer.error = "";
    if (refKey) {
      state.bibleViewer.activeRefKey = refKey;
    } else {
      const matched = state.bibleViewer.refs.find((ref) => ref.code === code && ref.chapter === chapter);
      state.bibleViewer.activeRefKey = matched ? matched.key : "";
    }
    return true;
  } catch {
    if (state.bibleViewer.requestSeq !== requestSeq) {
      return false;
    }
    state.bibleViewer.error = "해당 장을 불러오지 못했습니다.";
    return false;
  } finally {
    if (state.bibleViewer.requestSeq === requestSeq) {
      state.bibleViewer.loading = false;
      renderBibleViewer();
    }
  }
}

function renderBibleViewer() {
  if (!els.bibleViewerChapterLabel || !els.bibleViewerContent || !els.bibleViewerRefList) {
    return;
  }

  const code = state.bibleViewer.bookCode;
  const chapter = Number(state.bibleViewer.chapter || 0);
  const bookLabel = code ? BIBLE_BOOK_CODE_TO_KO[code] || code : "";
  const chapterLabel = bookLabel && chapter ? `${bookLabel} ${chapter}장` : "성경 장을 선택하세요";
  els.bibleViewerChapterLabel.textContent = chapterLabel;
  if (els.bibleViewerTitle) {
    els.bibleViewerTitle.textContent = chapterLabel || "성경 보기";
  }

  const refs = Array.isArray(state.bibleViewer.refs) ? state.bibleViewer.refs : [];
  els.bibleViewerRefList.innerHTML = refs
    .map((ref) => {
      const active = ref.key === state.bibleViewer.activeRefKey;
      return `<button class="ghost-btn compact-btn ${active ? "is-active" : ""}" type="button" data-bible-ref-key="${escapeHtmlAttr(
        ref.key
      )}">${escapeHtml(ref.label)}</button>`;
    })
    .join("");

  if (els.biblePrevChapter) {
    els.biblePrevChapter.disabled = state.bibleViewer.loading || chapter <= 1;
  }
  if (els.bibleNextChapter) {
    els.bibleNextChapter.disabled = state.bibleViewer.loading || !chapter;
  }

  if (state.bibleViewer.loading) {
    els.bibleViewerContent.innerHTML = '<p class="empty-note">성경 장을 불러오는 중...</p>';
    return;
  }

  if (state.bibleViewer.error) {
    els.bibleViewerContent.innerHTML = `<p class="empty-note">${escapeHtml(state.bibleViewer.error)}</p>`;
    return;
  }

  const verses = Array.isArray(state.bibleViewer.verses) ? state.bibleViewer.verses : [];
  if (!verses.length) {
    els.bibleViewerContent.innerHTML = '<p class="empty-note">표시할 말씀이 없습니다.</p>';
    return;
  }

  const activeRef = state.bibleViewer.refs.find((ref) => ref.key === state.bibleViewer.activeRefKey);
  const hasActiveRange = Boolean(
    activeRef &&
      activeRef.code === state.bibleViewer.bookCode &&
      activeRef.chapter === state.bibleViewer.chapter
  );

  els.bibleViewerContent.innerHTML = verses
    .map(
      (item) => `
        <p class="bible-viewer-verse ${hasActiveRange &&
          Number(item.number) >= Number(activeRef.verseStart) &&
          Number(item.number) <= Number(activeRef.verseEnd)
          ? "is-in-range"
          : ""}">
          <span class="bible-viewer-verse-no">${escapeHtml(item.number)}</span>
          <span>${escapeHtml(item.text || "")}</span>
        </p>
      `
    )
    .join("");
}

function computePracticeDayLabel(isoDate) {
  const date = parseIsoDate(isoDate);
  if (!date) {
    return "";
  }
  return `${WEEKDAY_KO[date.getDay()]}요일`;
}

function computePracticeShortDay(isoDate) {
  const date = parseIsoDate(isoDate);
  if (!date) {
    return "";
  }
  return WEEKDAY_KO[date.getDay()];
}

function formatPracticeSummary(service) {
  const dateText = service.practiceDate ? formatDate(service.practiceDate) : "";
  const dayText = service.practiceDay || computePracticeDayLabel(service.practiceDate);
  const timeText = service.practiceTime || "";

  const chunks = [
    dateText && `연습 날짜: ${dateText}`,
    dayText && `연습 요일: ${dayText}`,
    timeText && `연습 시간: ${timeText}`,
  ].filter(Boolean);

  return chunks.length ? chunks.join("\n") : "연습 일정이 아직 없습니다.";
}

function formatHomePracticeSummary(service) {
  const dateText = service && service.practiceDate ? formatDate(service.practiceDate) : "";
  const timeText = service && service.practiceTime ? String(service.practiceTime || "").trim() : "";
  const chunks = [dateText && `연습: ${dateText}`, timeText && `시간: ${timeText}`].filter(Boolean);
  return chunks.length ? chunks.join(" / ") : "연습 일정 없음";
}

function renderPlaylistMarkup(url) {
  if (!isValidUrl(url)) {
    return '<p class="empty-note">아직 등록된 플레이리스트가 없습니다.</p>';
  }

  return `<a class="playlist-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">이번주 플레이리스트 열기</a>`;
}

function formatDateTime(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${d} ${hh}:${mm}`;
}

function isValidUrl(value) {
  if (!value) {
    return false;
  }
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeHtmlAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

function sanitizeFilename(value) {
  return value.replace(/[\\/:*?"<>|]/g, "_");
}

function generateId() {
  if (window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1200);
}

function closePreviewDialog() {
  if (state.previewUrl) {
    URL.revokeObjectURL(state.previewUrl);
    state.previewUrl = "";
  }

  els.pdfPreviewFrame.src = "";

  if (els.pdfPreviewDialog.open) {
    els.pdfPreviewDialog.close();
  }
}

function openDialog(dialog) {
  if (!dialog) {
    return;
  }
  if (typeof dialog.showModal === "function" && !dialog.open) {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "open");
  }
}

function closeDialog(dialog) {
  if (!dialog) {
    return;
  }
  if (typeof dialog.close === "function" && dialog.open) {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function bindDialogBackdropClose(dialog) {
  if (!dialog) {
    return;
  }
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog(dialog);
    }
  });
}

function getRuntimeConfig() {
  const source = window.DOER_CONFIG && typeof window.DOER_CONFIG === "object" ? window.DOER_CONFIG : {};
  return {
    sync: {
      ...DEFAULT_RUNTIME_CONFIG.sync,
      ...(source.sync || {}),
    },
    supabase: {
      ...DEFAULT_RUNTIME_CONFIG.supabase,
      ...(source.supabase || {}),
    },
    drive: {
      ...DEFAULT_RUNTIME_CONFIG.drive,
      ...(source.drive || {}),
    },
  };
}

function isSupabaseEnabled() {
  const cfg = state.config.supabase;
  return Boolean(cfg.url && cfg.anonKey && cfg.table && cfg.rowId);
}

function isDriveEnabled() {
  const cfg = state.config.drive;
  return Boolean(cfg.enabled && cfg.clientId && cfg.folderId);
}

function renderSyncStatus() {
  if (!els.syncStatus) {
    return;
  }
  els.syncStatus.textContent = `${state.cloud.statusText} · v${APP_BUILD_ID}`;
  els.syncStatus.dataset.mode = state.cloud.mode;
}

function setCloudStatus(mode, text) {
  state.cloud.mode = mode;
  state.cloud.statusText = text;
  renderSyncStatus();
}

async function initializeCloudSync() {
  const driveOn = isDriveEnabled();
  const syncOn = isSupabaseEnabled();

  if (!driveOn && !syncOn) {
    setCloudStatus("local", "로컬 모드");
    return;
  }

  if (driveOn && !syncOn) {
    setCloudStatus("drive-only", "Drive 파일 모드 / 데이터 로컬");
    return;
  }

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    setCloudStatus("error", "Supabase SDK 로드 실패");
    return;
  }

  try {
    const client = window.supabase.createClient(state.config.supabase.url, state.config.supabase.anonKey, {
      auth: {
        persistSession: false,
      },
    });

    state.cloud.supabaseClient = client;
    setCloudStatus("syncing", "공용 데이터 연결 중");

    const remoteRow = await fetchRemoteStateRow();
    if (remoteRow && remoteRow.payload) {
      applyRemoteState(remoteRow.payload, remoteRow.updated_at || "");
      setCloudStatus(
        "shared",
        driveOn ? "공용 모드 (데이터+Drive)" : "공용 모드 (데이터)"
      );
    } else {
      await pushCloudState("bootstrap");
      setCloudStatus(
        "shared",
        driveOn ? "공용 모드 (데이터+Drive)" : "공용 모드 (데이터)"
      );
    }

    startCloudPullTimer();
  } catch (error) {
    setCloudStatus("error", `공용 연결 실패: ${error.message}`);
  }
}

function startCloudPullTimer() {
  if (state.cloud.pullTimer) {
    window.clearInterval(state.cloud.pullTimer);
    state.cloud.pullTimer = null;
  }

  if (!state.cloud.supabaseClient) {
    return;
  }

  const interval = Math.max(3000, Number(state.config.sync.pullIntervalMs) || DEFAULT_RUNTIME_CONFIG.sync.pullIntervalMs);
  state.cloud.pullTimer = window.setInterval(() => {
    if (document.hidden) {
      return;
    }
    void pullCloudState();
  }, interval);
}

function scheduleCloudPush() {
  if (!state.cloud.supabaseClient || state.cloud.isApplyingRemote) {
    return;
  }

  if (state.cloud.pushTimer) {
    window.clearTimeout(state.cloud.pushTimer);
  }

  state.cloud.pushTimer = window.setTimeout(() => {
    void pushCloudState("local-save");
  }, CLOUD_PUSH_DEBOUNCE_MS);
}

async function pushCloudState(reason = "") {
  const client = state.cloud.supabaseClient;
  if (!client || state.cloud.isApplyingRemote) {
    return;
  }
  if (state.cloud.pushInFlight) {
    return;
  }

  state.cloud.pushInFlight = true;
  setCloudStatus("syncing", "공용 데이터 저장 중");

  try {
    const payload = JSON.parse(JSON.stringify(state.data));
    const updatedAt = new Date().toISOString();
    const { error } = await client
      .from(state.config.supabase.table)
      .upsert(
        {
          id: state.config.supabase.rowId,
          payload,
          updated_at: updatedAt,
          source: reason || "app",
        },
        {
          onConflict: "id",
        }
      );

    if (error) {
      throw error;
    }

    state.cloud.lastRemoteUpdatedAt = updatedAt;
    setCloudStatus(
      "shared",
      isDriveEnabled() ? "공용 모드 (데이터+Drive)" : "공용 모드 (데이터)"
    );
  } catch (error) {
    setCloudStatus("error", `저장 실패: ${error.message}`);
  } finally {
    state.cloud.pushInFlight = false;
  }
}

async function pullCloudState() {
  const client = state.cloud.supabaseClient;
  if (!client || state.cloud.pullInFlight || state.cloud.pushInFlight) {
    return;
  }

  state.cloud.pullInFlight = true;
  try {
    const remoteRow = await fetchRemoteStateRow();
    if (!remoteRow || !remoteRow.payload) {
      return;
    }

    const updatedAt = String(remoteRow.updated_at || "");
    if (updatedAt && state.cloud.lastRemoteUpdatedAt && updatedAt <= state.cloud.lastRemoteUpdatedAt) {
      return;
    }

    applyRemoteState(remoteRow.payload, updatedAt);
    setCloudStatus(
      "shared",
      isDriveEnabled() ? "공용 모드 (데이터+Drive)" : "공용 모드 (데이터)"
    );
  } catch (error) {
    setCloudStatus("error", `불러오기 실패: ${error.message}`);
  } finally {
    state.cloud.pullInFlight = false;
  }
}

async function fetchRemoteStateRow() {
  const client = state.cloud.supabaseClient;
  if (!client) {
    return null;
  }

  const { data, error } = await client
    .from(state.config.supabase.table)
    .select("id,payload,updated_at")
    .eq("id", state.config.supabase.rowId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data || null;
}

function applyRemoteState(payload, updatedAt = "") {
  if (!payload || typeof payload !== "object") {
    return;
  }

  state.cloud.isApplyingRemote = true;
  try {
    state.data = normalizeLoadedData(payload);
    ensureSelectedDate();
    syncAllServiceRotation();
    refreshWeeklySundayTarget(false);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
    if (updatedAt) {
      state.cloud.lastRemoteUpdatedAt = updatedAt;
    }
  } finally {
    state.cloud.isApplyingRemote = false;
  }

  renderAll();
}

function invalidateDriveFileIndexCache() {
  state.cloud.driveFileIndexCache = null;
}

async function ensureDriveAccessToken() {
  if (!isDriveEnabled()) {
    return "";
  }

  if (state.cloud.driveAccessToken && Date.now() < state.cloud.driveTokenExpiryAt - 60 * 1000) {
    return state.cloud.driveAccessToken;
  }

  if (!window.google || !window.google.accounts || !window.google.accounts.oauth2) {
    return "";
  }

  if (!state.cloud.driveTokenClient) {
    state.cloud.driveTokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: state.config.drive.clientId,
      scope: state.config.drive.scope || DEFAULT_RUNTIME_CONFIG.drive.scope,
      callback: () => {},
      error_callback: () => {},
    });
  }

  return new Promise((resolve, reject) => {
    let settled = false;
    const timeoutId = window.setTimeout(() => {
      if (settled) {
        return;
      }
      settled = true;
      reject(
        new Error(
          `Drive 로그인 시간이 초과되었습니다. Google Cloud > OAuth 클라이언트의 승인된 JavaScript 원본에 현재 주소(${window.location.origin})를 추가하세요.`
        )
      );
    }, 25000);

    state.cloud.driveTokenClient.callback = (tokenResponse) => {
      if (settled) {
        return;
      }
      settled = true;
      window.clearTimeout(timeoutId);
      if (tokenResponse && tokenResponse.access_token) {
        state.cloud.driveAccessToken = tokenResponse.access_token;
        const expiresIn = Number(tokenResponse.expires_in || 3600);
        state.cloud.driveTokenExpiryAt = Date.now() + expiresIn * 1000;
        resolve(tokenResponse.access_token);
        return;
      }
      reject(new Error((tokenResponse && tokenResponse.error) || "Drive 인증 실패"));
    };
    state.cloud.driveTokenClient.error_callback = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      window.clearTimeout(timeoutId);
      const detail = error && typeof error === "object" ? String(error.type || error.message || "") : "";
      reject(
        new Error(
          detail
            ? `Drive 인증 실패: ${detail}`
            : `Drive 인증 실패. Google Cloud > OAuth 클라이언트의 승인된 JavaScript 원본에 ${window.location.origin} 이 등록되어 있는지 확인하세요.`
        )
      );
    };

    state.cloud.driveTokenClient.requestAccessToken({
      prompt: state.cloud.hasRequestedDriveConsent ? "" : "consent",
    });
    state.cloud.hasRequestedDriveConsent = true;
  });
}

async function uploadFileToDrive(file) {
  try {
    const token = await ensureDriveAccessToken();
    if (!token) {
      return null;
    }

    const boundary = `doer-upload-${Date.now()}`;
    const metadata = {
      name: file.name || `sheet_${Date.now()}.pdf`,
      parents: [state.config.drive.folderId],
    };

    const body = new Blob(
      [
        `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n`,
        JSON.stringify(metadata),
        `\r\n--${boundary}\r\nContent-Type: ${file.type || "application/pdf"}\r\n\r\n`,
        file,
        `\r\n--${boundary}--`,
      ],
      { type: `multipart/related; boundary=${boundary}` }
    );

    const uploadUrl =
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name" +
      (state.config.drive.apiKey ? `&key=${encodeURIComponent(state.config.drive.apiKey)}` : "");

    const response = await fetch(
      uploadUrl,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }
    );

    if (!response.ok) {
      throw new Error(`Drive 업로드 실패 (${response.status})`);
    }

    invalidateDriveFileIndexCache();
    return response.json();
  } catch {
    return null;
  }
}

async function downloadDriveFileBlob(fileId) {
  if (!fileId || !isDriveEnabled()) {
    return null;
  }

  try {
    const token = await ensureDriveAccessToken();
    if (!token) {
      return null;
    }

    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?alt=media`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Drive 다운로드 실패 (${response.status})`);
    }

    return response.blob();
  } catch {
    return null;
  }
}

async function deleteDriveFile(fileId) {
  if (!fileId || !isDriveEnabled()) {
    return;
  }

  try {
    const token = await ensureDriveAccessToken();
    if (!token) {
      return;
    }

    await fetch(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    invalidateDriveFileIndexCache();
  } catch {
    // no-op
  }
}

function openSheetDb() {
  if (state.sheetDbPromise) {
    return state.sheetDbPromise;
  }

  state.sheetDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(SHEET_DB_NAME, 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(SHEET_DB_STORE)) {
        db.createObjectStore(SHEET_DB_STORE, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  return state.sheetDbPromise;
}

async function setSheetFileBlob(id, blob) {
  const db = await openSheetDb();

  await new Promise((resolve, reject) => {
    const tx = db.transaction(SHEET_DB_STORE, "readwrite");
    tx.objectStore(SHEET_DB_STORE).put({ id, blob });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getSheetFileBlob(id) {
  const db = await openSheetDb();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(SHEET_DB_STORE, "readonly");
    const req = tx.objectStore(SHEET_DB_STORE).get(id);

    req.onsuccess = () => {
      const result = req.result;
      resolve(result ? result.blob : null);
    };
    req.onerror = () => reject(req.error);
  });
}

async function deleteSheetFileBlob(id) {
  const db = await openSheetDb();

  await new Promise((resolve, reject) => {
    const tx = db.transaction(SHEET_DB_STORE, "readwrite");
    tx.objectStore(SHEET_DB_STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  if (!window.location.protocol.startsWith("http")) {
    return;
  }

  const host = String(window.location.hostname || "");
  const isLocalHost = host === "localhost" || host === "127.0.0.1";

  if (isLocalHost) {
    void clearDoerCachesForLocal();
    return;
  }

  let reloadedByController = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloadedByController) {
      return;
    }
    reloadedByController = true;
    window.location.reload();
  });

  navigator.serviceWorker
    .register(`sw.js?v=${encodeURIComponent(APP_BUILD_ID)}`)
    .then((registration) => {
      registration.update().catch(() => Promise.resolve());

      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }

      registration.addEventListener("updatefound", () => {
        const installing = registration.installing;
        if (!installing) {
          return;
        }
        installing.addEventListener("statechange", () => {
          if (installing.state === "installed" && navigator.serviceWorker.controller) {
            installing.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });
    })
    .catch(() => {
      // no-op
    });
}

async function clearDoerCachesForLocal() {
  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));
  } catch (_error) {
    // no-op
  }

  if (!("caches" in window)) {
    return;
  }

  try {
    const keys = await caches.keys();
    const targets = keys.filter((key) => key.startsWith("doer-worship-"));
    await Promise.all(targets.map((key) => caches.delete(key)));
  } catch (_error) {
    // no-op
  }
}

const STORAGE_KEY = "mongle-ledger-flex-v1";
const LEGACY_STORAGE_KEY = "mongle-ledger-flex-legacy-v0";
const SETTINGS_KEY = "mongle-ledger-flex-settings-v1";
const FRIENDS_HIDDEN_KEY = "mongle-ledger-flex-friends-hidden-v1";
const SYNC_CONFIG_KEY = "mongle-ledger-flex-sync-config-v1";
const SYNC_META_KEY = "mongle-ledger-flex-sync-meta-v1";
const DEVICE_ID_KEY = "mongle-ledger-flex-device-id-v1";
const SYNC_APP_VERSION = "inmypocket-sync-v1";
const GITHUB_GIST_SYNC_FILE = "inmypocket-sync.json";
const CURRENCY = "USD";

const PERSONAL_ACCOUNTS = ["personalChecking", "personalSavings", "personalCash"];
const FLOWER_ACCOUNTS = ["flowerChecking", "flowerCash"];
const NON_TRANSFER_ACCOUNTS = [...PERSONAL_ACCOUNTS, ...FLOWER_ACCOUNTS];
const CARD_TARGET_PREFIX = "card:";

const CATEGORY_COLORS = {
  Grocery: "#F6C039",
  Dining: "#FC5F1F",
  Cafe: "#E8B5B4",
  Transport: "#106AA9",
  Shopping: "#9F7346",
  Subscription: "#346D4A",
  Health: "#346D4A",
  Housing: "#9F7346",
  Fun: "#E8B5B4",
  Other: "#106AA9",
  Income: "#346D4A",
  "Account Transfer": "#106AA9",
};

const PALETTE = ["#F6C039", "#106AA9", "#E8B5B4", "#346D4A", "#FC5F1F", "#9F7346"];

const LEDGER_LABEL = {
  personal: "개인",
  flower: "Blessom Flower",
};

const ACCOUNT_LABEL = {
  personalChecking: "개인 소비통장",
  personalSavings: "개인 세이브통장",
  personalCash: "개인 현금",
  flowerChecking: "꽃 소비통장",
  flowerCash: "꽃 현금",
  flowerMain: "꽃 소비통장",
};

const KIND_LABEL = {
  expense: "지출",
  income: "입금",
  transfer: "이체",
};

const KIND_COLOR = {
  expense: "#FC5F1F",
  income: "#346D4A",
  transfer: "#106AA9",
};

const QUICK_KIND_PRESETS = {
  auto: { kind: null, account: null, ledger: null },
  "personal-income": { kind: "income", account: "personalChecking", ledger: "personal" },
  "personal-expense": { kind: "expense", account: "personalChecking", ledger: "personal" },
  "personal-cash": { kind: null, account: "personalCash", ledger: "personal" },
  "flower-income": { kind: "income", account: "flowerChecking", ledger: "flower" },
  "flower-expense": { kind: "expense", account: "flowerChecking", ledger: "flower" },
  "flower-cash": { kind: null, account: "flowerCash", ledger: "flower" },
};

const QUICK_KIND_ORDER = [
  "auto",
  "personal-income",
  "personal-expense",
  "personal-cash",
  "flower-income",
  "flower-expense",
  "flower-cash",
];

const QUICK_KIND_LABEL = {
  auto: "자동",
  "personal-income": "개인 수입",
  "personal-expense": "개인 지출",
  "personal-cash": "개인 현금",
  "flower-income": "Blessom Flower 수입",
  "flower-expense": "Blessom Flower 지출",
  "flower-cash": "Blessom Flower 현금",
};

const DEFAULT_USER_PROFILE = {
  onboardingDone: false,
  records: ["개인", "Blessom Flower"],
  combinedConfigs: [],
  personalLedgerName: "개인",
  flowerLedgerName: "Blessom Flower",
  accountsTabName: "통장/카드",
  combinedEnabled: false,
  combinedLedgerName: "총 장부",
};

const CARD_DEFAULT_COLORS = {
  "monthly-outflow": "#F6C039",
  "monthly-inflow": "#106AA9",
  "monthly-net": "#E8B5B4",
  "balance-checking": "#346D4A",
  "balance-savings": "#FC5F1F",
  "balance-cash": "#9F7346",
  "flower-monthly-outflow": "#FC5F1F",
  "flower-monthly-inflow": "#346D4A",
  "balance-flower": "#106AA9",
  "balance-flower-cash": "#E8B5B4",
  "card-due": "#9F7346",
};

const SCOPE_CARD_MAP = {
  personal: ["monthly-outflow", "monthly-inflow", "monthly-net"],
  flower: ["flower-monthly-outflow", "flower-monthly-inflow", "balance-flower", "balance-flower-cash"],
  combined: ["monthly-outflow", "monthly-inflow", "monthly-net"],
  accounts: [],
};

const FRIEND_KEYS = ["friendA", "friendB", "friendC", "friendD"];

const FRIEND_KEY_META = {
  friendA: { name: "홈 버튼", color: "#106AA9" },
  friendB: { name: "장부 버튼", color: "#E8B5B4" },
  friendC: { name: "설정 버튼", color: "#346D4A" },
  friendD: { name: "날짜 버튼", color: "#F6C039" },
};

const FRIEND_ACTION_LABEL = {
  "open-home": "홈 화면 열기",
  "open-ledger": "장부보기 열기",
  "open-settings": "설정 탭 열기",
  "date-prefix": "오늘 날짜 붙이기",
  "scope-personal": "개인 장부 열기",
  "scope-flower": "꽃 장부 열기",
  "cash-prefix": "현금 입력 시작",
  "toggle-friends": "캐릭터 보이기/숨기기",
};

const FRIEND_ACTION_BADGE = {
  "open-home": "홈",
  "open-ledger": "장부보기",
  "open-settings": "설정",
  "date-prefix": "오늘 날짜",
  "scope-personal": "개인 장부",
  "scope-flower": "꽃 장부",
  "cash-prefix": "현금 입력",
  "toggle-friends": "캐릭터 숨김",
};

const FRIEND_ACTION_ORDER = [
  "open-home",
  "open-ledger",
  "open-settings",
  "date-prefix",
];

const GOAL_TYPE_LABEL = {
  travel: "여행",
  emergency: "비상금",
  home: "집/차",
  business: "사업",
  other: "기타",
};

const GOAL_TYPE_CHARACTER = {
  travel: "assets/chars/blue.svg",
  emergency: "assets/chars/yellow.svg",
  home: "assets/chars/green.svg",
  business: "assets/chars/pink.svg",
  other: "assets/chars/yellow.svg",
};

const RECORD_MANAGER_CONFIG = {
  "balance-checking": {
    type: "cardDebts",
    title: "Credit Card 목록 관리",
    namePlaceholder: "예: BOA Travel Card",
    amountPlaceholder: "남은 카드금(음수/양수 입력 가능)",
    emptyMessage: "등록된 카드가 없어요.",
  },
  "balance-savings": {
    type: "personalSavings",
    title: "세이브통장 목록 관리",
    namePlaceholder: "예: HYSA",
    amountPlaceholder: "초기잔액",
    emptyMessage: "등록된 세이브통장이 없어요.",
  },
  "balance-flower": {
    type: "flowerChecking",
    title: "꽃 소비통장 목록 관리",
    namePlaceholder: "예: Flower Business Checking",
    amountPlaceholder: "초기잔액",
    emptyMessage: "등록된 꽃 소비통장이 없어요.",
  },
  "card-due": {
    type: "cardDebts",
    title: "미납 카드 목록 관리",
    namePlaceholder: "예: BOA Travel",
    amountPlaceholder: "미납금",
    emptyMessage: "등록된 미납 카드가 없어요.",
  },
};

const ACCOUNTS_MANAGER_CONFIG = [
  {
    type: "cardDebts",
    title: "Credit Card 목록 관리",
    accent: "#FC5F1F",
    namePlaceholder: "카드 이름",
    amountPlaceholder: "남은 금액(음수/양수 가능)",
    emptyMessage: "등록된 카드가 없어요.",
  },
  {
    type: "personalSavings",
    title: "개인 세이브통장 관리",
    accent: "#346D4A",
    namePlaceholder: "통장 이름",
    amountPlaceholder: "잔액",
    emptyMessage: "등록된 세이브통장이 없어요.",
  },
  {
    type: "flowerChecking",
    title: "꽃 소비통장 관리",
    accent: "#106AA9",
    namePlaceholder: "통장 이름",
    amountPlaceholder: "잔액",
    emptyMessage: "등록된 꽃 소비통장이 없어요.",
  },
];

const DEFAULT_MERCHANT_PATTERNS = [
  { aliases: ["트조", "트레이더조", "trader joe", "traderjoes"], merchant: "Trader Joe's", category: "Grocery" },
  { aliases: ["스벅", "스타벅", "starbucks"], merchant: "Starbucks", category: "Cafe" },
  { aliases: ["코스트코", "costco"], merchant: "Costco", category: "Grocery" },
  { aliases: ["홀푸드", "whole foods"], merchant: "Whole Foods", category: "Grocery" },
  { aliases: ["우버", "uber"], merchant: "Uber", category: "Transport" },
  { aliases: ["리프트", "lyft"], merchant: "Lyft", category: "Transport" },
  { aliases: ["아마존", "amazon"], merchant: "Amazon", category: "Shopping" },
  { aliases: ["타겟", "target"], merchant: "Target", category: "Shopping" },
  { aliases: ["월마트", "walmart"], merchant: "Walmart", category: "Shopping" },
  { aliases: ["넷플", "netflix"], merchant: "Netflix", category: "Subscription" },
  { aliases: ["유튜브", "youtube"], merchant: "YouTube Premium", category: "Subscription" },
  { aliases: ["스포티", "spotify"], merchant: "Spotify", category: "Subscription" },
  { aliases: ["칩토틀", "chipotle"], merchant: "Chipotle", category: "Dining" },
  { aliases: ["도어대시", "doordash"], merchant: "DoorDash", category: "Dining" },
  { aliases: ["우버이츠", "ubereats"], merchant: "Uber Eats", category: "Dining" },
];

const CATEGORY_RULES = [
  { category: "Subscription", pattern: /(구독|subscription|넷플|netflix|youtube|spotify|prime|icloud)/i },
  { category: "Grocery", pattern: /(장보기|마트|식재료|grocer|trader joe|costco|whole foods)/i },
  { category: "Cafe", pattern: /(카페|커피|coffee|latte|스타벅|스벅)/i },
  { category: "Dining", pattern: /(점심|저녁|아침|식사|meal|lunch|dinner|restaurant|치킨|피자|버거|밥)/i },
  { category: "Transport", pattern: /(우버|리프트|taxi|택시|버스|지하철|주차|주유|gas|parking|uber|lyft)/i },
  { category: "Health", pattern: /(병원|약|약국|health|clinic|gym|운동|헬스)/i },
  { category: "Housing", pattern: /(월세|렌트|관리비|전기|수도|가스비|internet|인터넷|공과금)/i },
  { category: "Fun", pattern: /(영화|게임|concert|놀이|travel|여행|공연|전시)/i },
  { category: "Shopping", pattern: /(쇼핑|옷|쿠팡|amazon|target|walmart|세포라|sephora)/i },
];

const DEFAULT_CATEGORY_LIST = [
  "Grocery",
  "Dining",
  "Cafe",
  "Transport",
  "Shopping",
  "Subscription",
  "Health",
  "Housing",
  "Fun",
  "Income",
  "Other",
];

const DEFAULT_CATEGORY_KEYWORDS = {
  Grocery: ["트조", "trader joe", "코스트코", "costco", "whole foods", "마트", "장보기", "grocer"],
  Dining: ["식사", "점심", "저녁", "restaurant", "doordash", "ubereats", "chipotle", "피자", "버거"],
  Cafe: ["카페", "커피", "스타벅", "스벅", "coffee", "latte", "starbucks"],
  Transport: ["우버", "리프트", "택시", "지하철", "버스", "주유", "parking", "uber", "lyft"],
  Shopping: ["쇼핑", "amazon", "target", "walmart", "쿠팡", "옷", "sephora"],
  Subscription: ["구독", "subscription", "netflix", "youtube", "spotify", "prime", "icloud"],
  Health: ["병원", "약국", "약", "clinic", "health", "gym", "운동"],
  Housing: ["월세", "렌트", "관리비", "전기", "수도", "인터넷", "공과금", "internet"],
  Fun: ["영화", "게임", "여행", "concert", "공연", "전시"],
  Income: ["입금", "수입", "salary", "bonus", "refund", "리워드", "reward", "cashback"],
  Other: [],
};

const BLOCKED_CATEGORY_NAMES = new Set(["blessom flower", "용", "yong"]);

const DEFAULT_SETTINGS = {
  flowerKeywords: [
    "꽃",
    "꽃시장",
    "mayesh",
    "flower",
    "floral",
    "꽃 재료",
    "웨딩재료",
    "화병",
    "리본",
    "부케",
    "센터피스",
  ],
  incomeKeywords: [
    "입금",
    "수입",
    "정산",
    "매출",
    "받음",
    "income",
    "deposit",
    "refund",
    "환불",
    "리워드",
    "reward",
    "캐시백",
    "cashback",
    "boa",
    "+",
  ],
  transferKeywords: ["이체", "옮김", "이동", "transfer", "move", "->", "→"],
  savingsKeywords: ["세이브", "저축", "적금", "savings", "save"],
  cashKeywords: ["현금", "cash", "캐시"],
  cardDueKeywords: ["카드값", "카드대금", "지난달 카드", "미납", "카드 미납", "statement", "청구서", "결제대금"],
  openingBalances: {
    personalChecking: 0,
    personalSavings: 0,
    personalCash: 0,
    flowerChecking: 0,
    flowerCash: 0,
  },
  cardDue: 0,
  managedBalances: {
    personalChecking: [],
    personalSavings: [],
    flowerChecking: [],
  },
  accountScopedManagers: {},
  categories: [...DEFAULT_CATEGORY_LIST],
  categoryKeywords: cloneDefaults(DEFAULT_CATEGORY_KEYWORDS),
  cardDebts: [],
  cardColors: cloneDefaults(CARD_DEFAULT_COLORS),
  categoryColors: cloneDefaults(CATEGORY_COLORS),
  friendShortcuts: {
    friendA: "open-home",
    friendB: "open-ledger",
    friendC: "open-settings",
    friendD: "date-prefix",
  },
  savingGoals: [],
  customRules: [],
  userProfile: cloneDefaults(DEFAULT_USER_PROFILE),
};

const DEFAULT_SYNC_CONFIG = {
  enabled: false,
  endpoint: "",
  token: "",
  intervalSec: 30,
};

const DEFAULT_SYNC_META = {
  deviceId: "",
  lastLocalUpdatedAt: 0,
  lastSyncAt: 0,
  lastResult: "idle",
  lastError: "",
};

let suppressLocalSyncMark = false;

const state = {
  transactions: loadTransactions(),
  settings: loadSettings(),
  selectedScope: "personal",
  selectedCategory: null,
  selectedSettingsCategory: null,
  selectedColorCategory: null,
  friendsHidden: loadFriendsHidden(),
  currentView: "home",
  currentDetailCard: null,
  recordsMonthByCard: {},
  currentEditId: null,
  donutHitRegions: [],
  onboardingStep: 0,
  onboardingSettingsOnly: false,
};

const syncRuntime = {
  config: loadSyncConfig(),
  meta: loadSyncMeta(),
  scheduleTimer: null,
  pollTimer: null,
  inFlight: false,
  pending: false,
};

const quickForm = document.getElementById("quick-form");
const quickKindSelect = document.getElementById("quick-kind");
const quickKindPickerEl = document.getElementById("quick-kind-picker");
const quickKindButtonEl = document.getElementById("quick-kind-button");
const quickKindLabelEl = document.getElementById("quick-kind-label");
const quickKindMenuEl = document.getElementById("quick-kind-menu");
const quickInput = document.getElementById("quick-input");
const quickAccountEl = document.getElementById("quick-account");
const quickAccountToggleEl = document.getElementById("quick-account-toggle");
const quickCardEl = document.getElementById("quick-card");
const quickCategoryEl = document.getElementById("quick-category");
const quickCategoryToggleEl = document.getElementById("quick-category-toggle");
const parserPreview = document.getElementById("parser-preview");
const pageTabs = document.getElementById("page-tabs");
const scopeButtons = document.getElementById("scope-buttons");
const friendLayer = document.getElementById("friend-layer");
const homeFriendDock = document.getElementById("home-friend-dock");
const homeFriendToggle = document.getElementById("home-friend-toggle");
const homeFriendMenu = document.getElementById("home-friend-menu");
const mobileFriendDock = document.getElementById("mobile-friend-dock");
const mobileFriendToggle = document.getElementById("mobile-friend-toggle");
const mobileFriendMenu = document.getElementById("mobile-friend-menu");
const statsGrid = document.querySelector(".stats-grid");
const homeSections = Array.from(document.querySelectorAll(".view-home"));
const ledgerSections = Array.from(document.querySelectorAll(".view-ledger"));
const settingsSections = Array.from(document.querySelectorAll(".view-settings"));
const setupForm = document.getElementById("setup-form");
const setupCheckingEl = document.getElementById("setup-checking");
const setupSavingsEl = document.getElementById("setup-savings");
const setupCashEl = document.getElementById("setup-cash");
const setupFlowerCheckingEl = document.getElementById("setup-flower-checking");
const setupFlowerCashEl = document.getElementById("setup-flower-cash");
const setupCardDueEl = document.getElementById("setup-card-due");

const monthlyOutflowEl = document.getElementById("monthly-outflow");
const monthlyInflowEl = document.getElementById("monthly-inflow");
const monthlyNetEl = document.getElementById("monthly-net");
const balanceCheckingEl = document.getElementById("balance-checking");
const balanceSavingsEl = document.getElementById("balance-savings");
const balanceCashEl = document.getElementById("balance-cash");
const balanceFlowerEl = document.getElementById("balance-flower");
const balanceFlowerCashEl = document.getElementById("balance-flower-cash");
const flowerMonthlyOutflowEl = document.getElementById("flower-monthly-outflow");
const flowerMonthlyInflowEl = document.getElementById("flower-monthly-inflow");

const trendCanvas = document.getElementById("trend-canvas");
const donutCanvas = document.getElementById("donut-canvas");
const categoryListEl = document.getElementById("category-list");
const detailTitleEl = document.getElementById("detail-title");
const detailSummaryEl = document.getElementById("detail-summary");
const detailCanvas = document.getElementById("detail-canvas");
const detailMerchantDateEl = document.getElementById("detail-merchant-date");
const detailMerchantsEl = document.getElementById("detail-merchants");
const historyCardEl = document.getElementById("history-card");
const historyListEl = document.getElementById("history-list");
const accountsBreakdownCardEl = document.getElementById("accounts-breakdown-card");
const accountsBreakdownGridEl = document.getElementById("accounts-breakdown-grid");
const accountsManageGridEl = document.getElementById("accounts-manage-grid");
const settingsAccountsManageGridEl = document.getElementById("settings-accounts-manage-grid");
const onboardingAccountManagerNoteEl = document.getElementById("onboarding-account-manager-note");
const onboardingAccountManagerActionsEl = document.getElementById("onboarding-account-manager-actions");
const onboardingAccountManagerDoneEl = document.getElementById("onboarding-account-manager-done");
const goalPlannerCardEl = document.getElementById("goal-planner-card");
const goalFormEl = document.getElementById("goal-form");
const goalListEl = document.getElementById("goal-list");
const goalNameEl = document.getElementById("goal-name");
const goalTypeEl = document.getElementById("goal-type");
const goalTargetEl = document.getElementById("goal-target");
const goalYearsEl = document.getElementById("goal-years");
const goalSavedEl = document.getElementById("goal-saved");
const goalMonthlySavedEl = document.getElementById("goal-monthly-saved");
const recordsPageEl = document.getElementById("records-page");
const recordsTitleEl = document.getElementById("records-title");
const recordsSubtitleEl = document.getElementById("records-subtitle");
const recordsListEl = document.getElementById("records-list");
const recordsBackEl = document.getElementById("records-back");
const recordsMonthSelectEl = document.getElementById("records-month-select");
const recordsColorBoxEl = document.getElementById("records-color-box");
const recordsColorSwatchesEl = document.getElementById("records-color-swatches");
const recordsColorResetEl = document.getElementById("records-color-reset");
const recordsSummaryMetricsEl = document.getElementById("records-summary-metrics");
const recordsSummaryChartTitleEl = document.getElementById("records-summary-chart-title");
const recordsSummaryCanvasEl = document.getElementById("records-summary-canvas");
const recordsSummaryCategoriesEl = document.getElementById("records-summary-categories");
const recordsManagerEl = document.getElementById("records-manager");
const recordsManagerTitleEl = document.getElementById("records-manager-title");
const recordsManagerFormEl = document.getElementById("records-manager-form");
const recordsManagerNameEl = document.getElementById("records-manager-name");
const recordsManagerAmountEl = document.getElementById("records-manager-amount");
const recordsManagerListEl = document.getElementById("records-manager-list");
const recordsTransferBoxEl = document.getElementById("records-transfer-box");
const recordsTransferFormEl = document.getElementById("records-transfer-form");
const recordsTransferFromEl = document.getElementById("records-transfer-from");
const recordsTransferToEl = document.getElementById("records-transfer-to");
const recordsTransferAmountEl = document.getElementById("records-transfer-amount");
const recordsTransferNoteEl = document.getElementById("records-transfer-note");

const editModalEl = document.getElementById("edit-modal");
const editFormEl = document.getElementById("edit-form");
const editCloseEl = document.getElementById("edit-close");
const editCancelEl = document.getElementById("edit-cancel");
const editIdEl = document.getElementById("edit-id");
const editDateEl = document.getElementById("edit-date");
const editAmountEl = document.getElementById("edit-amount");
const editMerchantWrapEl = document.getElementById("edit-merchant-wrap");
const editMerchantEl = document.getElementById("edit-merchant");
const editCategoryWrapEl = document.getElementById("edit-category-wrap");
const editCategoryEl = document.getElementById("edit-category");
const editCategoryToggleEl = document.getElementById("edit-category-toggle");
const editCategoryCustomWrapEl = document.getElementById("edit-category-custom-wrap");
const editCategoryCustomEl = document.getElementById("edit-category-custom");
const editKindWrapEl = document.getElementById("edit-kind-wrap");
const editKindEl = document.getElementById("edit-kind");
const editKindToggleEl = document.getElementById("edit-kind-toggle");
const editLedgerWrapEl = document.getElementById("edit-ledger-wrap");
const editLedgerEl = document.getElementById("edit-ledger");
const editLedgerToggleEl = document.getElementById("edit-ledger-toggle");
const editAccountWrapEl = document.getElementById("edit-account-wrap");
const editAccountToggleEl = document.getElementById("edit-account-toggle");
const editAccountEl = document.getElementById("edit-account");
const editCardWrapEl = document.getElementById("edit-card-wrap");
const editCardEl = document.getElementById("edit-card");
const editTransferHintEl = document.getElementById("edit-transfer-hint");
const editFromWrapEl = document.getElementById("edit-from-wrap");
const editFromEl = document.getElementById("edit-from-account");
const editToWrapEl = document.getElementById("edit-to-wrap");
const editToEl = document.getElementById("edit-to-account");

const flowerKeywordForm = document.getElementById("flower-keyword-form");
const flowerKeywordInput = document.getElementById("flower-keyword-input");
const flowerKeywordListEl = document.getElementById("flower-keyword-list");
const categoryManageTabsEl = document.getElementById("category-manage-tabs");
const categoryManageEditorEl = document.getElementById("category-manage-editor");
const categoryAddFormEl = document.getElementById("category-add-form");
const categoryAddInputEl = document.getElementById("category-add-input");
const categoryNameInputEl = document.getElementById("category-name-input");
const categoryNameSaveEl = document.getElementById("category-name-save");
const categoryDeleteEl = document.getElementById("category-delete");
const categoryKeywordFormEl = document.getElementById("category-keyword-form");
const categoryKeywordInputEl = document.getElementById("category-keyword-input");
const categoryKeywordListEl = document.getElementById("category-keyword-list");
const categoryColorListEl = document.getElementById("category-color-list");
const friendShortcutListEl = document.getElementById("friend-shortcut-list");
const syncFormEl = document.getElementById("sync-form");
const syncEndpointEl = document.getElementById("sync-endpoint");
const syncTokenEl = document.getElementById("sync-token");
const syncIntervalEl = document.getElementById("sync-interval");
const syncEnabledEl = document.getElementById("sync-enabled");
const syncNowEl = document.getElementById("sync-now");
const syncStatusEl = document.getElementById("sync-status");

const onboardingOverlayEl = document.getElementById("onboarding-overlay");
const onboardingIntroEl = document.getElementById("onboarding-intro");
const onboardingSetupEl = document.getElementById("onboarding-setup");
const onboardingTitleCharEl = document.getElementById("onboarding-title-char");
const onboardingTitleEl = document.getElementById("onboarding-title");
const onboardingSubEl = document.getElementById("onboarding-sub");
const onboardingNextBtnEl = document.getElementById("onboarding-next-btn");
const onboardingFormEl = document.getElementById("onboarding-form");
const onboardingSubmitBtnEl = document.getElementById("onboarding-submit-btn");
const onboardLedgerRowsEl = document.getElementById("onboard-ledger-rows");
const onboardLedgerAddEl = document.getElementById("onboard-ledger-add");
const onboardCombinedRowsEl = document.getElementById("onboard-combined-rows");
const onboardCombinedAddEl = document.getElementById("onboard-combined-add");
const onboardCardRowsEl = document.getElementById("onboard-card-rows");
const onboardBankRowsEl = document.getElementById("onboard-bank-rows");
const onboardCardAddEl = document.getElementById("onboard-card-add");
const onboardBankAddEl = document.getElementById("onboard-bank-add");
const onboardEntryRowTemplateEl = document.getElementById("onboard-entry-row-template");
const onboardLedgerRowTemplateEl = document.getElementById("onboard-ledger-row-template");
const onboardCombinedRowTemplateEl = document.getElementById("onboard-combined-row-template");
const profileFormEl = document.getElementById("profile-form");
const profileLedgerRowsEl = document.getElementById("profile-ledger-rows");
const profileLedgerAddEl = document.getElementById("profile-ledger-add");
const profileCombinedRowsEl = document.getElementById("profile-combined-rows");
const profileCombinedAddEl = document.getElementById("profile-combined-add");
const profileLedgerRowTemplateEl = document.getElementById("profile-ledger-row-template");
const profileCombinedRowTemplateEl = document.getElementById("profile-combined-row-template");
const profileAccountsNameEl = document.getElementById("profile-accounts-name");

const ruleForm = document.getElementById("rule-form");
const ruleKeywordInput = document.getElementById("rule-keyword");
const ruleMerchantInput = document.getElementById("rule-merchant");
const ruleCategoryInput = document.getElementById("rule-category");
const ruleLedgerInput = document.getElementById("rule-ledger");
const ruleKindInput = document.getElementById("rule-kind");
const ruleListEl = document.getElementById("rule-list");

const ONBOARDING_STEPS = [
  { title: "환영합니다!", sub: "" },
  { title: "설정을 시작해 볼까요?", sub: "" },
  {
    title: "사용할 계정을 설정해주세요!",
    sub: "<span class=\"onboarding-sub-small\">‘설정’ 탭에서 언제든 변경할 수 있습니다.</span>",
  },
];
const ONBOARDING_STEP_CHARS = ["assets/chars/yellow.svg", "assets/chars/blue.svg", "assets/chars/pink.svg"];
const ONBOARDING_SKIP_INTRO_BY_DEFAULT = true;
let onboardingTransitioning = false;
let onboardingLastAdvanceAt = 0;
const ONBOARDING_TRANSITION_MS = 780;
const ONBOARDING_ADVANCE_GUARD_MS = 180;

function populateOnboardingSetupRows() {
  const profile = getUserProfile();
  if (onboardLedgerRowsEl) {
    onboardLedgerRowsEl.innerHTML = "";
    const records = profile.onboardingDone && Array.isArray(profile.records) ? profile.records : [];
    if (records.length) {
      for (const name of records) {
        appendOnboardLedgerRow(name);
      }
    } else {
      appendOnboardLedgerRow("");
    }
  }
  if (onboardCombinedRowsEl) {
    onboardCombinedRowsEl.innerHTML = "";
    const combined = profile.onboardingDone && Array.isArray(profile.combinedConfigs) ? profile.combinedConfigs : [];
    if (combined.length) {
      for (const config of combined) {
        appendOnboardCombinedRow(config);
      }
    } else {
      appendOnboardCombinedRow(null);
    }
  }
}

function cleanText(value, fallback = "") {
  const text = String(value || "").trim();
  return text || fallback;
}

function getUserProfile() {
  const source = normalizeUserProfile(state.settings?.userProfile || {});
  const records = Array.isArray(source.records) && source.records.length
    ? source.records
    : [source.personalLedgerName, source.flowerLedgerName].filter(Boolean);
  const combinedConfigs =
    Array.isArray(source.combinedConfigs) && source.combinedConfigs.length
      ? source.combinedConfigs
      : source.combinedEnabled
        ? [{ name: source.combinedLedgerName, members: [records[0], records[1]].filter(Boolean) }]
        : [];
  const primaryCombined = combinedConfigs[0] || null;
  return {
    onboardingDone: Boolean(source.onboardingDone),
    records,
    combinedConfigs,
    personalLedgerName: cleanText(records[0], DEFAULT_USER_PROFILE.personalLedgerName),
    flowerLedgerName: cleanText(records[1], DEFAULT_USER_PROFILE.flowerLedgerName),
    accountsTabName: cleanText(source.accountsTabName, DEFAULT_USER_PROFILE.accountsTabName),
    combinedEnabled: Boolean(primaryCombined),
    combinedLedgerName: cleanText(primaryCombined?.name, DEFAULT_USER_PROFILE.combinedLedgerName),
  };
}

function getLedgerDefinitions() {
  const profile = getUserProfile();
  const records = Array.isArray(profile.records) && profile.records.length
    ? profile.records
    : [profile.personalLedgerName, profile.flowerLedgerName];
  return records.map((name, index) => ({
    id: index === 0 ? "personal" : index === 1 ? "flower" : `extra-${index + 1}`,
    name,
    accountGroup: index === 1 ? "flower" : "personal",
  }));
}

function getLedgerNameById(ledgerId) {
  const found = getLedgerDefinitions().find((ledger) => ledger.id === ledgerId);
  return found?.name || cleanText(ledgerId, DEFAULT_USER_PROFILE.personalLedgerName);
}

function parseManagedType(type) {
  const raw = String(type || "");
  if (raw.startsWith("accountCards:")) {
    return { kind: "accountCards", ledgerId: raw.slice("accountCards:".length) || "personal" };
  }
  if (raw.startsWith("accountBanks:")) {
    return { kind: "accountBanks", ledgerId: raw.slice("accountBanks:".length) || "personal" };
  }
  return { kind: raw, ledgerId: "" };
}

function isCardManagerType(type) {
  const parsed = parseManagedType(type);
  return parsed.kind === "cardDebts" || parsed.kind === "accountCards";
}

function getAccountManagerConfigs() {
  const ledgers = getLedgerDefinitions();
  return ledgers.flatMap((ledger, index) => {
    const cardAccent = PALETTE[index % PALETTE.length] || "#FC5F1F";
    const bankAccent = PALETTE[(index + 3) % PALETTE.length] || "#346D4A";
    return [
      {
        type: `accountCards:${ledger.id}`,
        title: `${ledger.name} 카드 관리`,
        accent: cardAccent,
        namePlaceholder: "카드 이름",
        amountPlaceholder: ledger.id === "personal" ? "남은 카드금" : "카드 금액",
        emptyMessage: `등록된 ${ledger.name} 카드가 없어요.`,
      },
      {
        type: `accountBanks:${ledger.id}`,
        title: `${ledger.name} 통장 관리`,
        accent: bankAccent,
        namePlaceholder: "통장 이름",
        amountPlaceholder: "잔액",
        emptyMessage: `등록된 ${ledger.name} 통장이 없어요.`,
      },
    ];
  });
}

function normalizeQuickKindValue(rawValue) {
  const value = String(rawValue || "auto");
  const legacyMap = {
    "personal-income": "personal:income",
    "personal-expense": "personal:expense",
    "personal-cash": "personal:cash",
    "flower-income": "flower:income",
    "flower-expense": "flower:expense",
    "flower-cash": "flower:cash",
  };
  return legacyMap[value] || value;
}

function getQuickKindValues() {
  const values = ["auto"];
  for (const ledger of getLedgerDefinitions()) {
    values.push(`${ledger.id}:income`, `${ledger.id}:expense`, `${ledger.id}:cash`);
  }
  return values;
}

function isCombinedScope(scope) {
  return scope === "combined" || /^combined-\d+$/.test(String(scope || ""));
}

function getCombinedScopeConfigs() {
  const combined = Array.isArray(getUserProfile().combinedConfigs) ? getUserProfile().combinedConfigs : [];
  return combined.map((config, index) => ({
    ...config,
    scope: index === 0 ? "combined" : `combined-${index + 1}`,
  }));
}

function getCombinedConfigByScope(scope) {
  return getCombinedScopeConfigs().find((config) => config.scope === scope) || null;
}

function getQuickKindLabel(value) {
  const normalized = normalizeQuickKindValue(value);
  if (normalized === "auto") {
    return "자동";
  }
  const match = normalized.match(/^([^:]+):(income|expense|cash)$/);
  if (!match) {
    return QUICK_KIND_LABEL[value] || value;
  }
  const ledgerName = getLedgerNameById(match[1]);
  const suffixMap = {
    income: "수입",
    expense: "지출",
    cash: "현금",
  };
  return `${ledgerName} ${suffixMap[match[2]] || ""}`.trim();
}

function applyDynamicLabels() {
  const profile = getUserProfile();
  const ledgers = getLedgerDefinitions();
  for (const ledger of ledgers) {
    LEDGER_LABEL[ledger.id] = ledger.name;
  }

  LEDGER_LABEL.personal = profile.personalLedgerName;
  LEDGER_LABEL.flower = profile.flowerLedgerName;

  ACCOUNT_LABEL.personalChecking = `${profile.personalLedgerName} 소비통장`;
  ACCOUNT_LABEL.personalSavings = `${profile.personalLedgerName} 세이브통장`;
  ACCOUNT_LABEL.personalCash = `${profile.personalLedgerName} 현금`;
  ACCOUNT_LABEL.flowerChecking = `${profile.flowerLedgerName} 소비통장`;
  ACCOUNT_LABEL.flowerCash = `${profile.flowerLedgerName} 현금`;
  ACCOUNT_LABEL.flowerMain = `${profile.flowerLedgerName} 소비통장`;

  FRIEND_ACTION_LABEL["scope-personal"] = `${profile.personalLedgerName} 장부 열기`;
  FRIEND_ACTION_LABEL["scope-flower"] = `${profile.flowerLedgerName} 장부 열기`;
  FRIEND_ACTION_BADGE["scope-personal"] = profile.personalLedgerName;
  FRIEND_ACTION_BADGE["scope-flower"] = profile.flowerLedgerName;

  if (scopeButtons) {
    const dynamicButtons = scopeButtons.querySelectorAll("button[data-dynamic-scope='true']");
    for (const button of dynamicButtons) {
      button.remove();
    }
    const dynamicCombinedButtons = scopeButtons.querySelectorAll("button[data-dynamic-combined='true']");
    for (const button of dynamicCombinedButtons) {
      button.remove();
    }
  }

  const scopePersonal = scopeButtons?.querySelector('button[data-scope="personal"]');
  const scopeFlower = scopeButtons?.querySelector('button[data-scope="flower"]');
  const scopeCombined = scopeButtons?.querySelector('button[data-scope="combined"]');
  const scopeAccounts = scopeButtons?.querySelector('button[data-scope="accounts"]');

  if (scopePersonal) scopePersonal.textContent = `${profile.personalLedgerName} 장부`;
  if (scopeFlower) scopeFlower.textContent = profile.flowerLedgerName;
  const combinedConfigs = getCombinedScopeConfigs();
  if (scopeCombined) {
    const firstCombined = combinedConfigs[0] || null;
    scopeCombined.hidden = !firstCombined;
    scopeCombined.textContent = firstCombined?.name || profile.combinedLedgerName;
  }
  if (scopeButtons) {
    const insertBefore = scopeAccounts || null;
    const extraLedgers = ledgers.filter((ledger) => !["personal", "flower"].includes(ledger.id));
    for (const ledger of extraLedgers) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "scope-btn";
      button.dataset.scope = ledger.id;
      button.dataset.dynamicScope = "true";
      button.textContent = ledger.name;
      scopeButtons.insertBefore(button, scopeCombined || insertBefore);
    }
    const extraCombined = combinedConfigs.slice(1);
    for (const config of extraCombined) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "scope-btn";
      button.dataset.scope = config.scope;
      button.dataset.dynamicCombined = "true";
      button.textContent = config.name;
      scopeButtons.insertBefore(button, insertBefore);
    }
  }
  if (scopeAccounts) scopeAccounts.textContent = profile.accountsTabName;

  const availableScopes = new Set([
    ...ledgers.map((ledger) => ledger.id),
    "accounts",
    ...combinedConfigs.map((config) => config.scope),
  ]);
  if (!availableScopes.has(state.selectedScope)) {
    state.selectedScope = "personal";
  }

  const quickValues = getQuickKindValues();
  const previousQuickValue = normalizeQuickKindValue(String(quickKindSelect?.value || "auto"));
  const selectedQuickValue = quickValues.includes(previousQuickValue) ? previousQuickValue : "auto";

  if (quickKindMenuEl) {
    quickKindMenuEl.innerHTML = quickValues
      .map(
        (value) =>
          `<button type="button" class="quick-kind-option" data-quick-kind-option="${escapeHtml(value)}">${escapeHtml(
            getQuickKindLabel(value)
          )}</button>`
      )
      .join("");
  }

  if (quickKindSelect) {
    quickKindSelect.innerHTML = quickValues
      .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(getQuickKindLabel(value))}</option>`)
      .join("");
    quickKindSelect.value = selectedQuickValue;
  }

  if (ruleLedgerInput) {
    const previous = String(ruleLedgerInput.value || "auto");
    const ledgerOptions = getLedgerDefinitions()
      .map((ledger) => `<option value="${escapeHtml(ledger.id)}">${escapeHtml(ledger.name)} 계정</option>`)
      .join("");
    ruleLedgerInput.innerHTML = `<option value="auto">자동</option>${ledgerOptions}`;
    const valid = previous === "auto" || getLedgerDefinitions().some((ledger) => ledger.id === previous);
    ruleLedgerInput.value = valid ? previous : "auto";
  }

  if (editLedgerEl) {
    const previous = String(editLedgerEl.value || "personal");
    const ledgerOptions = getLedgerDefinitions()
      .map((ledger) => `<option value="${escapeHtml(ledger.id)}">${escapeHtml(ledger.name)}</option>`)
      .join("");
    editLedgerEl.innerHTML = ledgerOptions;
    const valid = getLedgerDefinitions().some((ledger) => ledger.id === previous);
    editLedgerEl.value = valid ? previous : "personal";
  }

  const updateStatLabel = (cardKey, text) => {
    const card = document.querySelector(`.stat-card[data-card="${cardKey}"]`);
    if (!card) return;
    const label = card.querySelector(".label");
    if (label) {
      label.textContent = text;
    }
  };

  updateStatLabel("monthly-outflow", `${profile.personalLedgerName} 이번 달 지출`);
  updateStatLabel("monthly-inflow", `${profile.personalLedgerName} 이번 달 입금`);
  updateStatLabel("monthly-net", `${profile.personalLedgerName} 이번 달 잔액 변화`);
  updateStatLabel("balance-savings", `${profile.personalLedgerName} 세이브통장`);
  updateStatLabel("balance-cash", `${profile.personalLedgerName} 현금`);
  updateStatLabel("flower-monthly-outflow", `${profile.flowerLedgerName} 이번 달 지출`);
  updateStatLabel("flower-monthly-inflow", `${profile.flowerLedgerName} 이번 달 입금`);
  updateStatLabel("balance-flower", `${profile.flowerLedgerName} 소비통장`);
  updateStatLabel("balance-flower-cash", `${profile.flowerLedgerName} 현금`);

  RECORD_MANAGER_CONFIG["balance-savings"].title = `${profile.personalLedgerName} 세이브통장 목록 관리`;
  RECORD_MANAGER_CONFIG["balance-savings"].emptyMessage = `등록된 ${profile.personalLedgerName} 세이브통장이 없어요.`;
  RECORD_MANAGER_CONFIG["balance-flower"].title = `${profile.flowerLedgerName} 소비통장 목록 관리`;
  RECORD_MANAGER_CONFIG["balance-flower"].emptyMessage = `등록된 ${profile.flowerLedgerName} 소비통장이 없어요.`;
}

function parseNamedAmountLines(raw, { liability = false } = {}) {
  const lines = String(raw || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  const items = [];
  for (const line of lines) {
    const matched = line.match(/^(.+?)[,:]\s*([-+]?\d+(?:[.,]\d+)?)$/);
    if (!matched) {
      continue;
    }
    const name = cleanText(matched[1]);
    const amount = liability ? normalizeLiabilityAmount(matched[2]) : normalizeAmount(matched[2]);
    if (!name || amount <= 0) {
      continue;
    }
    items.push({ id: createId(), name, amount: roundMoney(amount) });
  }
  return items;
}

function createOnboardEntryRow(name = "", amount = "") {
  if (!onboardEntryRowTemplateEl) {
    return null;
  }
  const row = onboardEntryRowTemplateEl.cloneNode(true);
  row.removeAttribute("id");
  row.hidden = false;
  const nameInput = row.querySelector("input[data-onboard-entry-name]");
  const amountInput = row.querySelector("input[data-onboard-entry-amount]");
  if (nameInput) {
    nameInput.value = name;
  }
  if (amountInput) {
    amountInput.value = amount ? String(amount) : "";
  }
  return row;
}

function appendOnboardEntryRow(type, name = "", amount = "") {
  const container = type === "card" ? onboardCardRowsEl : onboardBankRowsEl;
  if (!container) {
    return;
  }
  const row = createOnboardEntryRow(name, amount);
  if (!row) {
    return;
  }
  container.appendChild(row);
}

function ensureOnboardEntryRowExists(type) {
  const container = type === "card" ? onboardCardRowsEl : onboardBankRowsEl;
  if (!container) {
    return;
  }
  if (!container.querySelector(".onboard-entry-row")) {
    appendOnboardEntryRow(type);
  }
}

function collectOnboardEntryRows(container, { liability = false } = {}) {
  if (!container) {
    return [];
  }
  const rows = Array.from(container.querySelectorAll(".onboard-entry-row"));
  const items = [];
  for (const row of rows) {
    const nameInput = row.querySelector("input[data-onboard-entry-name]");
    const amountInput = row.querySelector("input[data-onboard-entry-amount]");
    const name = cleanText(nameInput?.value, "");
    const rawAmount = String(amountInput?.value || "");
    const amount = liability ? normalizeLiabilityAmount(rawAmount) : normalizeAmount(rawAmount);
    if (!name || amount <= 0) {
      continue;
    }
    items.push({ id: createId(), name, amount: roundMoney(amount) });
  }
  return items;
}

function handleOnboardEntryRemove(event) {
  const removeButton = event.target.closest("button[data-onboard-entry-remove]");
  if (!removeButton) {
    return;
  }
  const row = removeButton.closest(".onboard-entry-row");
  const container = removeButton.closest(".onboard-entry-list");
  if (!row || !container) {
    return;
  }
  const rows = container.querySelectorAll(".onboard-entry-row");
  if (rows.length <= 1) {
    const nameInput = row.querySelector("input[data-onboard-entry-name]");
    const amountInput = row.querySelector("input[data-onboard-entry-amount]");
    if (nameInput) nameInput.value = "";
    if (amountInput) amountInput.value = "";
    return;
  }
  row.remove();
}

function createOnboardLedgerRow(name = "") {
  if (!onboardLedgerRowTemplateEl) {
    return null;
  }
  const row = onboardLedgerRowTemplateEl.cloneNode(true);
  row.removeAttribute("id");
  row.hidden = false;
  row.dataset.recordId = createId();
  const input = row.querySelector("input[data-onboard-ledger-name]");
  if (input) {
    input.value = name;
  }
  return row;
}

function appendOnboardLedgerRow(name = "") {
  if (!onboardLedgerRowsEl) {
    return;
  }
  const row = createOnboardLedgerRow(name);
  if (!row) {
    return;
  }
  onboardLedgerRowsEl.appendChild(row);
  rebuildOnboardCombinedMemberOptions();
}

function collectOnboardLedgerRows() {
  if (!onboardLedgerRowsEl) {
    return [];
  }
  const rows = Array.from(onboardLedgerRowsEl.querySelectorAll(".onboard-ledger-row"));
  return rows
    .map((row) => {
      const input = row.querySelector("input[data-onboard-ledger-name]");
      return {
        id: String(row.dataset.recordId || createId()),
        name: cleanText(input?.value, ""),
      };
    })
    .filter((row) => row.name);
}

function handleOnboardLedgerRemove(event) {
  const button = event.target.closest("button[data-onboard-ledger-remove]");
  if (!button || !onboardLedgerRowsEl) {
    return;
  }
  const row = button.closest(".onboard-ledger-row");
  if (!row) {
    return;
  }
  const rows = onboardLedgerRowsEl.querySelectorAll(".onboard-ledger-row");
  if (rows.length <= 1) {
    const input = row.querySelector("input[data-onboard-ledger-name]");
    if (input) {
      input.value = "";
    }
    return;
  }
  row.remove();
  rebuildOnboardCombinedMemberOptions();
}

function createOnboardCombinedRow(config = null) {
  if (!onboardCombinedRowTemplateEl) {
    return null;
  }
  const row = onboardCombinedRowTemplateEl.cloneNode(true);
  row.removeAttribute("id");
  row.hidden = false;
  const nameInput = row.querySelector("input[data-onboard-combined-name]");
  if (nameInput) {
    nameInput.value = cleanText(config?.name, "");
  }
  row.dataset.memberNames = Array.isArray(config?.members) ? config.members.join("||") : "";
  return row;
}

function appendOnboardCombinedRow(config = null) {
  if (!onboardCombinedRowsEl) {
    return;
  }
  const row = createOnboardCombinedRow(config);
  if (!row) {
    return;
  }
  onboardCombinedRowsEl.appendChild(row);
  rebuildOnboardCombinedMemberOptions();
}

function rebuildOnboardCombinedMemberOptions() {
  if (!onboardCombinedRowsEl) {
    return;
  }
  const ledgers = collectOnboardLedgerRows();
  const ledgerById = new Map(ledgers.map((item) => [item.id, item.name]));
  const combinedRows = onboardCombinedRowsEl.querySelectorAll(".onboard-combined-row");
  for (const row of combinedRows) {
    const membersWrap = row.querySelector("[data-onboard-combined-members]");
    if (!membersWrap) {
      continue;
    }
    const previousIds = new Set(
      Array.from(membersWrap.querySelectorAll("input[type='checkbox']:checked")).map((el) => String(el.value || ""))
    );
    const previousNames = String(row.dataset.memberNames || "")
      .split("||")
      .map((name) => cleanText(name, ""))
      .filter(Boolean);

    membersWrap.innerHTML = "";
    for (const ledger of ledgers) {
      const label = document.createElement("label");
      label.className = "onboard-member-chip";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = ledger.id;
      if (previousIds.has(ledger.id) || previousNames.includes(ledger.name)) {
        input.checked = true;
      }
      const span = document.createElement("span");
      span.textContent = ledger.name;
      label.appendChild(input);
      label.appendChild(span);
      membersWrap.appendChild(label);
    }
    row.dataset.memberNames = Array.from(previousIds)
      .map((id) => ledgerById.get(id))
      .filter(Boolean)
      .join("||");
  }
}

function collectOnboardCombinedConfigs() {
  if (!onboardCombinedRowsEl) {
    return [];
  }
  const ledgerRows = collectOnboardLedgerRows();
  const ledgerById = new Map(ledgerRows.map((row) => [row.id, row.name]));
  const rows = Array.from(onboardCombinedRowsEl.querySelectorAll(".onboard-combined-row"));
  return rows
    .map((row) => {
      const nameInput = row.querySelector("input[data-onboard-combined-name]");
      const memberIds = Array.from(row.querySelectorAll("[data-onboard-combined-members] input:checked")).map((el) =>
        String(el.value || "")
      );
      const members = memberIds.map((id) => ledgerById.get(id)).filter(Boolean);
      return {
        name: cleanText(nameInput?.value, ""),
        members,
      };
    })
    .filter((cfg) => cfg.name && cfg.members.length >= 2);
}

function handleOnboardCombinedRemove(event) {
  const button = event.target.closest("button[data-onboard-combined-remove]");
  if (!button || !onboardCombinedRowsEl) {
    return;
  }
  const row = button.closest(".onboard-combined-row");
  if (!row) {
    return;
  }
  const rows = onboardCombinedRowsEl.querySelectorAll(".onboard-combined-row");
  if (rows.length <= 1) {
    const nameInput = row.querySelector("input[data-onboard-combined-name]");
    if (nameInput) {
      nameInput.value = "";
    }
    row.querySelectorAll("[data-onboard-combined-members] input").forEach((input) => {
      input.checked = false;
    });
    return;
  }
  row.remove();
}

function createProfileLedgerRow(name = "") {
  if (!profileLedgerRowTemplateEl) {
    return null;
  }
  const row = profileLedgerRowTemplateEl.cloneNode(true);
  row.removeAttribute("id");
  row.hidden = false;
  row.dataset.recordId = createId();
  const input = row.querySelector("input[data-profile-ledger-name]");
  if (input) {
    input.value = name;
  }
  return row;
}

function appendProfileLedgerRow(name = "") {
  if (!profileLedgerRowsEl) {
    return;
  }
  const row = createProfileLedgerRow(name);
  if (!row) {
    return;
  }
  profileLedgerRowsEl.appendChild(row);
  rebuildProfileCombinedMemberOptions();
}

function collectProfileLedgerRows() {
  if (!profileLedgerRowsEl) {
    return [];
  }
  const rows = Array.from(profileLedgerRowsEl.querySelectorAll(".profile-ledger-row"));
  return rows
    .map((row) => {
      const input = row.querySelector("input[data-profile-ledger-name]");
      return {
        id: String(row.dataset.recordId || createId()),
        name: cleanText(input?.value, ""),
      };
    })
    .filter((row) => row.name);
}

function handleProfileLedgerRemove(event) {
  const button = event.target.closest("button[data-profile-ledger-remove]");
  if (!button || !profileLedgerRowsEl) {
    return;
  }
  const row = button.closest(".profile-ledger-row");
  if (!row) {
    return;
  }
  const rows = profileLedgerRowsEl.querySelectorAll(".profile-ledger-row");
  if (rows.length <= 1) {
    const input = row.querySelector("input[data-profile-ledger-name]");
    if (input) {
      input.value = "";
    }
    return;
  }
  row.remove();
  rebuildProfileCombinedMemberOptions();
}

function createProfileCombinedRow(config = null) {
  if (!profileCombinedRowTemplateEl) {
    return null;
  }
  const row = profileCombinedRowTemplateEl.cloneNode(true);
  row.removeAttribute("id");
  row.hidden = false;
  const nameInput = row.querySelector("input[data-profile-combined-name]");
  if (nameInput) {
    nameInput.value = cleanText(config?.name, "");
  }
  row.dataset.memberNames = Array.isArray(config?.members) ? config.members.join("||") : "";
  return row;
}

function appendProfileCombinedRow(config = null) {
  if (!profileCombinedRowsEl) {
    return;
  }
  const row = createProfileCombinedRow(config);
  if (!row) {
    return;
  }
  profileCombinedRowsEl.appendChild(row);
  rebuildProfileCombinedMemberOptions();
}

function rebuildProfileCombinedMemberOptions() {
  if (!profileCombinedRowsEl) {
    return;
  }
  const ledgers = collectProfileLedgerRows();
  const ledgerById = new Map(ledgers.map((item) => [item.id, item.name]));
  const combinedRows = profileCombinedRowsEl.querySelectorAll(".profile-combined-row");
  for (const row of combinedRows) {
    const membersWrap = row.querySelector("[data-profile-combined-members]");
    if (!membersWrap) {
      continue;
    }
    const previousIds = new Set(
      Array.from(membersWrap.querySelectorAll("input[type='checkbox']:checked")).map((el) => String(el.value || ""))
    );
    const previousNames = String(row.dataset.memberNames || "")
      .split("||")
      .map((name) => cleanText(name, ""))
      .filter(Boolean);

    membersWrap.innerHTML = "";
    for (const ledger of ledgers) {
      const label = document.createElement("label");
      label.className = "profile-member-chip";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = ledger.id;
      if (previousIds.has(ledger.id) || previousNames.includes(ledger.name)) {
        input.checked = true;
      }
      const span = document.createElement("span");
      span.textContent = ledger.name;
      label.appendChild(input);
      label.appendChild(span);
      membersWrap.appendChild(label);
    }
    row.dataset.memberNames = Array.from(previousIds)
      .map((id) => ledgerById.get(id))
      .filter(Boolean)
      .join("||");
  }
}

function collectProfileCombinedConfigs() {
  if (!profileCombinedRowsEl) {
    return [];
  }
  const ledgerRows = collectProfileLedgerRows();
  const ledgerById = new Map(ledgerRows.map((row) => [row.id, row.name]));
  const rows = Array.from(profileCombinedRowsEl.querySelectorAll(".profile-combined-row"));
  return rows
    .map((row) => {
      const nameInput = row.querySelector("input[data-profile-combined-name]");
      const memberIds = Array.from(row.querySelectorAll("[data-profile-combined-members] input:checked")).map((el) =>
        String(el.value || "")
      );
      const members = memberIds.map((id) => ledgerById.get(id)).filter(Boolean);
      return {
        name: cleanText(nameInput?.value, ""),
        members,
      };
    })
    .filter((cfg) => cfg.name && cfg.members.length >= 2);
}

function handleProfileCombinedRemove(event) {
  const button = event.target.closest("button[data-profile-combined-remove]");
  if (!button || !profileCombinedRowsEl) {
    return;
  }
  const row = button.closest(".profile-combined-row");
  if (!row) {
    return;
  }
  const rows = profileCombinedRowsEl.querySelectorAll(".profile-combined-row");
  if (rows.length <= 1) {
    const nameInput = row.querySelector("input[data-profile-combined-name]");
    if (nameInput) {
      nameInput.value = "";
    }
    row.querySelectorAll("[data-profile-combined-members] input").forEach((input) => {
      input.checked = false;
    });
    return;
  }
  row.remove();
}

function renderOnboardingStep() {
  if (!onboardingTitleEl || !onboardingSubEl) {
    return;
  }
  const index = Math.max(0, Math.min(state.onboardingStep, ONBOARDING_STEPS.length - 1));
  const step = ONBOARDING_STEPS[index];
  onboardingTitleEl.textContent = step.title;
  onboardingSubEl.innerHTML = step.sub || "";
  if (onboardingTitleCharEl) {
    onboardingTitleCharEl.src = ONBOARDING_STEP_CHARS[index] || ONBOARDING_STEP_CHARS[0];
  }
}

function openOnboarding() {
  if (!onboardingOverlayEl || !onboardingIntroEl || !onboardingSetupEl) {
    return;
  }
  onboardingTransitioning = false;
  onboardingLastAdvanceAt = 0;
  state.currentView = "home";
  applyCurrentView();
  state.onboardingStep = 0;
  onboardingOverlayEl.hidden = false;
  onboardingOverlayEl.classList.remove("show-setup");
  onboardingIntroEl.hidden = false;
  onboardingIntroEl.classList.remove("is-transitioning", "is-hiding");
  onboardingSetupEl.hidden = true;
  document.body.classList.add("onboarding-active");
  renderOnboardingStep();
  const params = new URLSearchParams(window.location.search);
  const shouldSkipIntro =
    params.get("forceSetup") === "1" ||
    (ONBOARDING_SKIP_INTRO_BY_DEFAULT && params.get("showIntro") !== "1");
  if (shouldSkipIntro) {
    onboardingIntroEl.hidden = true;
    onboardingSetupEl.hidden = false;
    onboardingOverlayEl.classList.add("show-setup");
    populateOnboardingSetupRows();
  }
}

function openOnboardingForm() {
  if (!onboardingIntroEl || !onboardingSetupEl) {
    return;
  }
  if (onboardingTransitioning) {
    return;
  }
  onboardingTransitioning = true;
  onboardingIntroEl.classList.remove("is-transitioning");
  onboardingIntroEl.classList.add("is-hiding");

  window.setTimeout(() => {
    onboardingIntroEl.hidden = true;
    onboardingIntroEl.classList.remove("is-hiding");
    onboardingSetupEl.hidden = false;
    if (onboardingOverlayEl) {
      onboardingOverlayEl.classList.add("show-setup");
    }
    populateOnboardingSetupRows();
    onboardingTransitioning = false;
  }, ONBOARDING_TRANSITION_MS);
}

function closeOnboarding() {
  if (!onboardingOverlayEl) {
    return;
  }
  onboardingOverlayEl.hidden = true;
  onboardingOverlayEl.classList.remove("show-setup");
  onboardingTransitioning = false;
  if (onboardingIntroEl) {
    onboardingIntroEl.classList.remove("is-transitioning", "is-hiding");
  }
  document.body.classList.remove("onboarding-active");
}

function advanceOnboardingStep(event) {
  if (event && typeof event.preventDefault === "function") {
    event.preventDefault();
  }
  if (event && typeof event.stopPropagation === "function") {
    event.stopPropagation();
  }
  if (!onboardingOverlayEl || onboardingOverlayEl.hidden || !onboardingIntroEl) {
    return;
  }
  const now = Date.now();
  if (now - onboardingLastAdvanceAt < ONBOARDING_ADVANCE_GUARD_MS) {
    return;
  }
  onboardingLastAdvanceAt = now;
  if (onboardingTransitioning) {
    return;
  }
  const nextStep = state.onboardingStep + 1;
  if (nextStep >= ONBOARDING_STEPS.length) {
    openOnboardingForm();
    return;
  }
  onboardingTransitioning = true;
  onboardingIntroEl.classList.add("is-transitioning");
  window.setTimeout(() => {
    state.onboardingStep = nextStep;
    renderOnboardingStep();
    onboardingIntroEl.classList.remove("is-transitioning");
    onboardingTransitioning = false;
  }, ONBOARDING_TRANSITION_MS);
}

function handleOnboardingIntroClick(event) {
  advanceOnboardingStep(event);
}

function handleOnboardingOverlayTap(event) {
  if (!onboardingOverlayEl || onboardingOverlayEl.hidden || !onboardingIntroEl || onboardingIntroEl.hidden) {
    return;
  }
  if (onboardingSetupEl && !onboardingSetupEl.hidden && onboardingSetupEl.contains(event.target)) {
    return;
  }
  advanceOnboardingStep(event);
}

function handleOnboardingIntroKeydown(event) {
  if (!event) {
    return;
  }
  if (event.key === "Enter" || event.key === " ") {
    advanceOnboardingStep(event);
  }
}

window.__goOnboardingNext = (event) => {
  advanceOnboardingStep(event);
};

function handleOnboardingSubmit(event) {
  event.preventDefault();
  let finished = false;
  try {
    const recordRows = collectOnboardLedgerRows();
    const records = recordRows.length
      ? recordRows.map((row) => row.name)
      : [DEFAULT_USER_PROFILE.personalLedgerName, DEFAULT_USER_PROFILE.flowerLedgerName];
    const personalName = cleanText(records[0], DEFAULT_USER_PROFILE.personalLedgerName);
    const flowerName = cleanText(records[1], DEFAULT_USER_PROFILE.flowerLedgerName);
    const combinedConfigs = collectOnboardCombinedConfigs();
    const combinedEnabled = combinedConfigs.length > 0;
    const combinedName = cleanText(combinedConfigs[0]?.name, DEFAULT_USER_PROFILE.combinedLedgerName);

    state.settings.userProfile = {
      onboardingDone: true,
      records,
      combinedConfigs,
      personalLedgerName: personalName,
      flowerLedgerName: flowerName,
      accountsTabName: DEFAULT_USER_PROFILE.accountsTabName,
      combinedEnabled,
      combinedLedgerName: combinedName,
    };

    const nameTokens = uniqueStrings(
      `${flowerName} ${flowerName.replace(/[^a-zA-Z0-9가-힣\s]/g, " ")}`.split(/\s+/)
    ).filter((token) => token.length >= 2);
    if (nameTokens.length) {
      state.settings.flowerKeywords = uniqueStrings([...(state.settings.flowerKeywords || []), ...nameTokens]);
    }

    saveSettings();
    applyDynamicLabels();
    closeOnboarding();
    syncSetupForm();
    renderQuickAccountToggle();
    renderQuickKindPicker();
    renderQuickCardOptions();
    renderQuickCategoryToggle();
    render();
    state.onboardingSettingsOnly = true;
    setCurrentView("settings");
    window.requestAnimationFrame(() => {
      settingsAccountsManageGridEl?.closest(".card")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    if (parserPreview) {
      parserPreview.textContent = "첫 설정 저장 완료. 다음으로 계정별 통장/카드를 설정해주세요.";
    }
    finished = true;
  } catch (error) {
    console.error("onboarding submit failed", error);
    if (parserPreview) {
      parserPreview.textContent = "설정 저장 중 오류가 발생했어요. 다시 눌러주세요.";
    }
  } finally {
    if (!finished) {
      closeOnboarding();
      setCurrentView("settings");
    }
  }
}

function syncProfileForm() {
  if (!profileFormEl || !profileAccountsNameEl || !profileLedgerRowsEl || !profileCombinedRowsEl) {
    return;
  }
  const profile = getUserProfile();
  profileAccountsNameEl.value = profile.accountsTabName;

  profileLedgerRowsEl.innerHTML = "";
  const records = profile.onboardingDone && Array.isArray(profile.records) ? profile.records : [];
  if (records.length) {
    for (const name of records) {
      appendProfileLedgerRow(name);
    }
  } else {
    appendProfileLedgerRow("");
  }

  profileCombinedRowsEl.innerHTML = "";
  const combined = profile.onboardingDone && Array.isArray(profile.combinedConfigs) ? profile.combinedConfigs : [];
  if (combined.length) {
    for (const config of combined) {
      appendProfileCombinedRow(config);
    }
  } else {
    appendProfileCombinedRow(null);
  }
}

function handleOnboardingAccountManagerDone() {
  state.onboardingSettingsOnly = false;
  setCurrentView("home");
  if (parserPreview) {
    parserPreview.textContent = "나머지 설정은 설정 탭에서 언제든 수정할 수 있어요.";
  }
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const recordRows = collectProfileLedgerRows();
  const records = recordRows.length
    ? recordRows.map((row) => row.name)
    : [DEFAULT_USER_PROFILE.personalLedgerName, DEFAULT_USER_PROFILE.flowerLedgerName];
  const personalName = cleanText(records[0], DEFAULT_USER_PROFILE.personalLedgerName);
  const flowerName = cleanText(records[1], DEFAULT_USER_PROFILE.flowerLedgerName);
  const combinedConfigs = collectProfileCombinedConfigs();
  const combinedEnabled = combinedConfigs.length > 0;
  const combinedName = cleanText(combinedConfigs[0]?.name, DEFAULT_USER_PROFILE.combinedLedgerName);
  const nextProfile = {
    onboardingDone: true,
    records,
    combinedConfigs,
    personalLedgerName: personalName,
    flowerLedgerName: flowerName,
    accountsTabName: cleanText(profileAccountsNameEl?.value, DEFAULT_USER_PROFILE.accountsTabName),
    combinedEnabled,
    combinedLedgerName: combinedName,
  };
  state.settings.userProfile = normalizeUserProfile(nextProfile);
  saveSettings();
  applyDynamicLabels();
  applyFriendShortcuts();
  renderQuickKindPicker();
  renderQuickAccountToggle();
  render();
  parserPreview.textContent = "계정 유형 설정을 저장했어요.";
}

init();

function init() {
  const bootParams = new URLSearchParams(window.location.search);
  const bootView = String(bootParams.get("view") || "").trim();
  if (["home", "ledger", "settings"].includes(bootView)) {
    state.currentView = bootView;
  }

  quickForm.addEventListener("submit", handleSubmit);
  quickInput.addEventListener("input", handlePreview);
  if (quickKindSelect) {
    quickKindSelect.addEventListener("change", handleQuickKindChange);
  }
  if (quickKindButtonEl) {
    quickKindButtonEl.addEventListener("click", handleQuickKindButtonClick);
  }
  if (quickKindMenuEl) {
    quickKindMenuEl.addEventListener("click", handleQuickKindMenuClick);
  }
  if (quickAccountToggleEl) {
    quickAccountToggleEl.addEventListener("click", handleQuickAccountToggle);
  }
  if (quickCardEl) {
    quickCardEl.addEventListener("change", handlePreview);
  }
  if (quickCategoryToggleEl) {
    quickCategoryToggleEl.addEventListener("click", handleQuickCategoryToggle);
  }
  if (pageTabs) {
    pageTabs.addEventListener("click", handlePageTabClick);
  }
  scopeButtons.addEventListener("click", handleScopeClick);
  categoryListEl.addEventListener("click", handleCategoryClick);
  categoryListEl.addEventListener("dragover", handleCategoryDragOver);
  categoryListEl.addEventListener("dragleave", handleCategoryDragLeave);
  categoryListEl.addEventListener("drop", handleCategoryDrop);
  if (detailMerchantsEl) {
    detailMerchantsEl.addEventListener("dragstart", handleDetailMerchantDragStart);
    detailMerchantsEl.addEventListener("dragend", clearCategoryDropHighlights);
    detailMerchantsEl.addEventListener("click", handleDetailMerchantClick);
  }
  historyListEl.addEventListener("click", handleHistoryAction);
  if (goalFormEl) {
    goalFormEl.addEventListener("submit", handleGoalSubmit);
  }
  if (goalListEl) {
    goalListEl.addEventListener("click", handleGoalListClick);
  }
  statsGrid.addEventListener("click", handleStatCardClick);
  statsGrid.addEventListener("keydown", handleStatCardKeydown);
  if (donutCanvas) {
    donutCanvas.addEventListener("click", handleDonutCanvasClick);
  }
  recordsListEl.addEventListener("click", handleRecordsAction);
  recordsBackEl.addEventListener("click", closeRecordsPage);
  if (recordsMonthSelectEl) {
    recordsMonthSelectEl.addEventListener("change", handleRecordsMonthChange);
  }
  if (recordsColorSwatchesEl) {
    recordsColorSwatchesEl.addEventListener("click", handleRecordsColorChange);
  }
  if (recordsColorResetEl) {
    recordsColorResetEl.addEventListener("click", handleRecordsColorReset);
  }
  if (recordsManagerFormEl) {
    recordsManagerFormEl.addEventListener("submit", handleRecordsManagerSubmit);
  }
  if (recordsManagerListEl) {
    recordsManagerListEl.addEventListener("click", handleRecordsManagerAction);
  }
  if (recordsTransferFormEl) {
    recordsTransferFormEl.addEventListener("submit", handleRecordsTransferSubmit);
  }
  if (accountsManageGridEl) {
    accountsManageGridEl.addEventListener("submit", handleAccountsManagerSubmit);
    accountsManageGridEl.addEventListener("click", handleAccountsManagerAction);
  }
  if (settingsAccountsManageGridEl) {
    settingsAccountsManageGridEl.addEventListener("submit", handleAccountsManagerSubmit);
    settingsAccountsManageGridEl.addEventListener("click", handleAccountsManagerAction);
  }
  if (onboardingAccountManagerDoneEl) {
    onboardingAccountManagerDoneEl.addEventListener("click", handleOnboardingAccountManagerDone);
  }
  if (friendLayer) {
    friendLayer.addEventListener("click", handleFriendAction);
  }
  if (mobileFriendMenu) {
    mobileFriendMenu.addEventListener("click", handleFriendAction);
  }
  if (homeFriendMenu) {
    homeFriendMenu.addEventListener("click", handleFriendAction);
  }
  if (mobileFriendToggle) {
    mobileFriendToggle.addEventListener("click", handleMobileFriendToggle);
  }
  if (homeFriendToggle) {
    homeFriendToggle.addEventListener("click", handleHomeFriendToggle);
  }
  if (mobileFriendDock) {
    document.addEventListener("click", (event) => {
      const isMobileOpen = mobileFriendMenu && !mobileFriendMenu.hidden;
      const isHomeOpen = homeFriendMenu && !homeFriendMenu.hidden;
      if (!isMobileOpen && !isHomeOpen) {
        return;
      }
      if ((mobileFriendDock && mobileFriendDock.contains(event.target)) || (homeFriendDock && homeFriendDock.contains(event.target))) {
        return;
      }
      setAllFriendMenus(false);
    });
  }
  document.addEventListener("click", (event) => {
    if (!quickKindPickerEl || !quickKindMenuEl || quickKindMenuEl.hidden) {
      return;
    }
    if (quickKindPickerEl.contains(event.target)) {
      return;
    }
    setQuickKindMenu(false);
  });
  if (setupForm) {
    setupForm.addEventListener("submit", handleSetupSubmit);
  }
  if (onboardingIntroEl) {
    onboardingIntroEl.addEventListener("click", handleOnboardingIntroClick);
    onboardingIntroEl.addEventListener("touchend", handleOnboardingIntroClick, { passive: false });
    onboardingIntroEl.addEventListener("keydown", handleOnboardingIntroKeydown);
  }
  if (onboardingNextBtnEl) {
    onboardingNextBtnEl.addEventListener("click", handleOnboardingIntroClick);
    onboardingNextBtnEl.addEventListener("touchend", handleOnboardingIntroClick, { passive: false });
  }
  if (onboardingOverlayEl) {
    onboardingOverlayEl.addEventListener("click", handleOnboardingOverlayTap);
    onboardingOverlayEl.addEventListener("touchend", handleOnboardingOverlayTap, { passive: false });
  }
  if (onboardingFormEl) {
    onboardingFormEl.noValidate = true;
    onboardingFormEl.addEventListener("submit", handleOnboardingSubmit);
  }
  if (onboardingSubmitBtnEl) {
    onboardingSubmitBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      handleOnboardingSubmit(event);
    });
  }
  if (onboardLedgerAddEl) {
    onboardLedgerAddEl.addEventListener("click", () => {
      appendOnboardLedgerRow("");
      const rows = onboardLedgerRowsEl?.querySelectorAll(".onboard-ledger-row");
      const lastInput = rows && rows.length
        ? rows[rows.length - 1].querySelector("input[data-onboard-ledger-name]")
        : null;
      if (lastInput) {
        lastInput.focus();
      }
    });
  }
  if (onboardCombinedAddEl) {
    onboardCombinedAddEl.addEventListener("click", () => appendOnboardCombinedRow(null));
  }
  if (onboardCardAddEl) {
    onboardCardAddEl.addEventListener("click", () => appendOnboardEntryRow("card"));
  }
  if (onboardBankAddEl) {
    onboardBankAddEl.addEventListener("click", () => appendOnboardEntryRow("bank"));
  }
  if (onboardLedgerRowsEl) {
    onboardLedgerRowsEl.addEventListener("click", handleOnboardLedgerRemove);
    onboardLedgerRowsEl.addEventListener("input", () => rebuildOnboardCombinedMemberOptions());
  }
  if (onboardCombinedRowsEl) {
    onboardCombinedRowsEl.addEventListener("click", handleOnboardCombinedRemove);
  }
  if (onboardCardRowsEl) {
    onboardCardRowsEl.addEventListener("click", handleOnboardEntryRemove);
  }
  if (onboardBankRowsEl) {
    onboardBankRowsEl.addEventListener("click", handleOnboardEntryRemove);
  }
  if (profileFormEl) {
    profileFormEl.addEventListener("submit", handleProfileFormSubmit);
  }
  if (profileLedgerAddEl) {
    profileLedgerAddEl.addEventListener("click", () => {
      appendProfileLedgerRow("");
      const rows = profileLedgerRowsEl?.querySelectorAll(".profile-ledger-row");
      const lastInput = rows && rows.length
        ? rows[rows.length - 1].querySelector("input[data-profile-ledger-name]")
        : null;
      if (lastInput) {
        lastInput.focus();
      }
    });
  }
  if (profileCombinedAddEl) {
    profileCombinedAddEl.addEventListener("click", () => appendProfileCombinedRow(null));
  }
  if (profileLedgerRowsEl) {
    profileLedgerRowsEl.addEventListener("click", handleProfileLedgerRemove);
    profileLedgerRowsEl.addEventListener("input", () => rebuildProfileCombinedMemberOptions());
  }
  if (profileCombinedRowsEl) {
    profileCombinedRowsEl.addEventListener("click", handleProfileCombinedRemove);
  }

  if (flowerKeywordForm) {
    flowerKeywordForm.addEventListener("submit", handleFlowerKeywordSubmit);
  }
  if (flowerKeywordListEl) {
    flowerKeywordListEl.addEventListener("click", handleFlowerKeywordRemove);
  }
  if (categoryManageTabsEl) {
    categoryManageTabsEl.addEventListener("click", handleCategoryManageTabClick);
  }
  if (categoryAddFormEl) {
    categoryAddFormEl.addEventListener("submit", handleCategoryAddSubmit);
  }
  if (categoryNameSaveEl) {
    categoryNameSaveEl.addEventListener("click", handleCategoryRenameSave);
  }
  if (categoryDeleteEl) {
    categoryDeleteEl.addEventListener("click", handleCategoryDelete);
  }
  if (categoryKeywordFormEl) {
    categoryKeywordFormEl.addEventListener("submit", handleCategoryKeywordSubmit);
  }
  if (categoryKeywordListEl) {
    categoryKeywordListEl.addEventListener("click", handleCategoryKeywordRemove);
  }
  if (categoryColorListEl) {
    categoryColorListEl.addEventListener("click", handleCategoryColorChange);
  }
  if (friendShortcutListEl) {
    friendShortcutListEl.addEventListener("change", handleFriendShortcutChange);
  }
  if (syncFormEl) {
    syncFormEl.addEventListener("submit", handleSyncFormSubmit);
  }
  if (syncNowEl) {
    syncNowEl.addEventListener("click", handleSyncNowClick);
  }
  ruleForm.addEventListener("submit", handleRuleSubmit);
  ruleListEl.addEventListener("click", handleRuleRemove);
  editKindEl.addEventListener("change", handleEditKindChange);
  editLedgerEl.addEventListener("change", handleEditLedgerChange);
  if (editKindToggleEl) {
    editKindToggleEl.addEventListener("click", handleEditKindToggle);
  }
  if (editLedgerToggleEl) {
    editLedgerToggleEl.addEventListener("click", handleEditLedgerToggle);
  }
  if (editFormEl) {
    editFormEl.addEventListener("click", handleEditToggleDelegated);
  }
  if (editCategoryEl) {
    editCategoryEl.addEventListener("change", applyEditCategoryOptionStyles);
    editCategoryEl.addEventListener("input", applyEditCategoryOptionStyles);
    editCategoryEl.addEventListener("click", queueApplyEditCategoryOptionStyles);
    editCategoryEl.addEventListener("mousedown", queueApplyEditCategoryOptionStyles);
    editCategoryEl.addEventListener("keyup", queueApplyEditCategoryOptionStyles);
  }
  if (editCategoryToggleEl) {
    editCategoryToggleEl.addEventListener("click", handleEditCategoryToggleClick);
  }
  if (editAccountToggleEl) {
    editAccountToggleEl.addEventListener("click", handleEditAccountToggle);
  }
  editFormEl.addEventListener("submit", handleEditSubmit);
  editCloseEl.addEventListener("click", closeEditModal);
  editCancelEl.addEventListener("click", closeEditModal);
  editModalEl.addEventListener("click", (event) => {
    const kindButton = event.target.closest("button[data-edit-kind]");
    if (kindButton) {
      event.preventDefault();
      const value = String(kindButton.dataset.editKind || "");
      if (["expense", "income", "transfer"].includes(value)) {
        editKindEl.value = value;
        syncEditFormMode();
      }
      return;
    }
    const ledgerButton = event.target.closest("button[data-edit-ledger]");
    if (ledgerButton) {
      event.preventDefault();
      if (!ledgerButton.disabled) {
        const value = String(ledgerButton.dataset.editLedger || "");
        const validLedgers = new Set(getLedgerDefinitions().map((ledger) => ledger.id));
        if (validLedgers.has(value)) {
          editLedgerEl.value = value;
          syncEditFormMode();
        }
      }
      return;
    }
    if (event.target === editModalEl) {
      closeEditModal();
    }
  });

  window.addEventListener("resize", () => render());

  if ("serviceWorker" in navigator) {
    const isLocalDev = ["127.0.0.1", "localhost"].includes(window.location.hostname);
    if (isLocalDev) {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
        .catch(() => {});
    } else {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
    }
  }

  initScrollFriends();
  applyDynamicLabels();
  applyFriendLayerVisibility();
  applyFriendShortcuts();
  initializeSyncRuntime();
  applyCurrentView();
  setAllFriendMenus(false);
  closeRecordsPage();
  closeEditModal();
  syncSetupForm();
  syncProfileForm();
  renderQuickAccountToggle();
  syncQuickAccountToggleState();
  renderQuickKindPicker();
  renderQuickCardOptions();
  renderQuickCategoryToggle();
  if (goalYearsEl && !goalYearsEl.value) {
    goalYearsEl.value = "1";
  }
  render();
  const forceOnboarding = bootParams.get("forceSetup") === "1" || bootParams.get("forceOnboarding") === "1";
  const profile = getUserProfile();
  if (forceOnboarding || !profile.onboardingDone) {
    openOnboarding();
  }
  startSyncPolling();
  if (syncRuntime.config.enabled) {
    triggerSync({ reason: "startup", urgent: true });
  }
}

function handlePageTabClick(event) {
  const button = event.target.closest("button[data-page]");
  if (!button) {
    return;
  }
  setCurrentView(button.dataset.page);
}

function setCurrentView(view) {
  if (!["home", "ledger", "settings"].includes(view)) {
    return;
  }
  if (view !== "settings") {
    state.onboardingSettingsOnly = false;
  }
  state.currentView = view;
  setAllFriendMenus(false);
  setQuickKindMenu(false);
  applyCurrentView();
  if (view !== "ledger") {
    closeRecordsPage();
  }
  render();
  if (view === "ledger") {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        render();
      });
    });
  }
}

function applyCurrentView() {
  const isHome = state.currentView === "home";
  const isLedger = state.currentView === "ledger";
  const isSettings = state.currentView === "settings";
  const isOnboardingSettingsOnly = isSettings && state.onboardingSettingsOnly;
  document.body.classList.toggle("view-home-mode", isHome);
  for (const section of homeSections) {
    section.hidden = !isHome;
  }
  for (const section of ledgerSections) {
    section.hidden = !isLedger;
  }
  for (const section of settingsSections) {
    if (!isSettings) {
      section.hidden = true;
      continue;
    }
    if (!isOnboardingSettingsOnly) {
      section.hidden = false;
      continue;
    }
    section.hidden = section.id !== "settings-account-manager-card";
  }
  if (onboardingAccountManagerNoteEl) {
    onboardingAccountManagerNoteEl.hidden = !isOnboardingSettingsOnly;
  }
  if (onboardingAccountManagerActionsEl) {
    onboardingAccountManagerActionsEl.hidden = !isOnboardingSettingsOnly;
  }

  if (pageTabs) {
    const tabButtons = pageTabs.querySelectorAll("button[data-page]");
    for (const button of tabButtons) {
      button.classList.toggle("active", button.dataset.page === state.currentView);
    }
  }
}

function handleMobileFriendToggle() {
  if (!mobileFriendMenu) {
    return;
  }
  const next = mobileFriendMenu.hidden;
  setFriendMenu(homeFriendMenu, homeFriendToggle, false);
  setFriendMenu(mobileFriendMenu, mobileFriendToggle, next);
}

function handleHomeFriendToggle() {
  if (!homeFriendMenu) {
    return;
  }
  const next = homeFriendMenu.hidden;
  setFriendMenu(mobileFriendMenu, mobileFriendToggle, false);
  setFriendMenu(homeFriendMenu, homeFriendToggle, next);
}

function setFriendMenu(menuEl, toggleEl, open) {
  if (!menuEl || !toggleEl) {
    return;
  }
  menuEl.hidden = !open;
  toggleEl.setAttribute("aria-expanded", open ? "true" : "false");
}

function setAllFriendMenus(open) {
  setFriendMenu(mobileFriendMenu, mobileFriendToggle, open);
  setFriendMenu(homeFriendMenu, homeFriendToggle, open);
}

function initScrollFriends() {
  const friends = Array.from(document.querySelectorAll(".scroll-friend"));
  if (!friends.length) {
    return;
  }

  let ticking = false;
  const update = () => {
    const y = window.scrollY || 0;
    friends.forEach((friend, index) => {
      if (state.friendsHidden) {
        if (friend.classList.contains("friend-e")) {
          friend.style.transform = "none";
        } else {
          friend.style.transform = "translate3d(0, 0, 0)";
        }
        return;
      }

      const speed = Number(friend.dataset.speed || 0.1);
      const floatY = ((y * speed) % 120) - 60;
      const floatX = Math.sin(y * 0.008 + index * 1.7) * 9;
      const rotate = Math.sin(y * 0.006 + index) * 6;
      friend.style.transform = `translate3d(${floatX}px, ${floatY}px, 0) rotate(${rotate}deg)`;
    });
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function handleFriendAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const action = button.dataset.action;
  if (action === "open-home") {
    setCurrentView("home");
    quickInput.focus();
  } else if (action === "open-ledger") {
    setCurrentView("ledger");
  } else if (action === "open-settings") {
    setCurrentView("settings");
  } else if (action === "scope-personal") {
    setCurrentView("ledger");
    state.selectedScope = "personal";
    state.selectedCategory = null;
    render();
  } else if (action === "scope-flower") {
    setCurrentView("ledger");
    state.selectedScope = "flower";
    state.selectedCategory = null;
    render();
  } else if (action === "date-prefix") {
    setCurrentView("home");
    const prefix = getTodayPrefix();
    const current = quickInput.value.trim();
    quickInput.value = /^\d{1,2}[\/.\-]\d{1,2}\b/.test(current) ? current : `${prefix} ${current}`.trim();
    quickInput.focus();
    quickInput.dispatchEvent(new Event("input"));
  } else if (action === "cash-prefix") {
    setCurrentView("home");
    const current = quickInput.value.trim();
    quickInput.value = current ? `${current} 현금` : "현금 ";
    quickInput.focus();
    quickInput.dispatchEvent(new Event("input"));
  } else if (action === "toggle-friends") {
    state.friendsHidden = !state.friendsHidden;
    saveFriendsHidden();
    applyFriendLayerVisibility();
  }

  if ((mobileFriendMenu && !mobileFriendMenu.hidden) || (homeFriendMenu && !homeFriendMenu.hidden)) {
    setAllFriendMenus(false);
  }
}

function getTodayPrefix() {
  const now = new Date();
  return `${now.getMonth() + 1}/${now.getDate()}`;
}

function applyFriendLayerVisibility() {
  if (!friendLayer) {
    return;
  }
  friendLayer.classList.toggle("hidden", state.friendsHidden);
  window.requestAnimationFrame(() => {
    window.dispatchEvent(new Event("scroll"));
  });
}

function applyFriendShortcuts() {
  state.settings.friendShortcuts = ensureDateShortcut(state.settings.friendShortcuts);
  for (const key of FRIEND_KEYS) {
    const action = state.settings.friendShortcuts[key];
    const label = FRIEND_ACTION_BADGE[action] || FRIEND_ACTION_LABEL[action] || "숏컷";
    const title = FRIEND_ACTION_LABEL[action] || "숏컷";
    const targets = document.querySelectorAll(`button[data-friend="${key}"]`);
    for (const target of targets) {
      target.dataset.action = action;
      target.dataset.label = label;
      target.title = title;
      const textEl = target.querySelector(".mobile-friend-label");
      if (textEl) {
        textEl.textContent = label;
      }
    }
  }
  renderFriendShortcutSettings();
}

function handleFriendShortcutChange(event) {
  const select = event.target.closest("select[data-friend-key]");
  if (!select) {
    return;
  }

  const key = select.dataset.friendKey;
  if (!FRIEND_KEYS.includes(key)) {
    return;
  }

  state.settings.friendShortcuts = {
    ...state.settings.friendShortcuts,
    [key]: select.value,
  };
  state.settings.friendShortcuts = ensureDateShortcut(state.settings.friendShortcuts);
  saveSettings();
  applyFriendShortcuts();
  parserPreview.textContent = "캐릭터 숏컷 설정을 저장했어요.";
}

function ensureDateShortcut(shortcuts) {
  const merged = {
    ...DEFAULT_SETTINGS.friendShortcuts,
    ...(shortcuts || {}),
  };
  const normalized = {};

  for (const key of FRIEND_KEYS) {
    const action = FRIEND_ACTION_ORDER.includes(merged[key]) ? merged[key] : DEFAULT_SETTINGS.friendShortcuts[key];
    normalized[key] = action;
  }

  if (!Object.values(normalized).includes("date-prefix")) {
    normalized.friendD = "date-prefix";
  }
  for (const required of FRIEND_ACTION_ORDER) {
    if (Object.values(normalized).includes(required)) {
      continue;
    }
    const targetKey = FRIEND_KEYS.find((key) => DEFAULT_SETTINGS.friendShortcuts[key] === required) || FRIEND_KEYS[0];
    normalized[targetKey] = required;
  }
  return normalized;
}

function syncSetupForm() {
  if (!setupForm) {
    return;
  }
  const opening = getOpeningBalances();
  setupCheckingEl.value = String(opening.personalChecking || 0);
  setupSavingsEl.value = String(opening.personalSavings || 0);
  setupCashEl.value = String(opening.personalCash || 0);
  setupFlowerCheckingEl.value = String(opening.flowerChecking || 0);
  setupFlowerCashEl.value = String(opening.flowerCash || 0);
  setupCardDueEl.value = String(getCardDueAmount());
}

function handleSetupSubmit(event) {
  event.preventDefault();
  state.settings.openingBalances = {
    personalChecking: normalizeAmount(setupCheckingEl.value),
    personalSavings: normalizeAmount(setupSavingsEl.value),
    personalCash: normalizeAmount(setupCashEl.value),
    flowerChecking: normalizeAmount(setupFlowerCheckingEl.value),
    flowerCash: normalizeAmount(setupFlowerCashEl.value),
  };
  state.settings.cardDue = normalizeAmount(setupCardDueEl.value);
  saveSettings();
  render();
  const usesManaged =
    getManagedItems("personalSavings").length > 0 ||
    getManagedItems("flowerChecking").length > 0 ||
    getManagedItems("cardDebts").length > 0;
  parserPreview.textContent = usesManaged
    ? "저장했어요. 세이브/꽃 통장/Credit Card는 상세 목록 합계가 우선 적용돼요."
    : "초기금액/미납금 정보를 저장했어요.";
}

function handleSubmit(event) {
  event.preventDefault();
  const rawInput = quickInput.value.trim();
  if (!rawInput) {
    return;
  }

  const parsed = parseQuickEntry(rawInput, buildQuickParseOptions());
  if (!parsed.amount || parsed.amount <= 0) {
    parserPreview.textContent = "금액을 찾지 못했어요. 예: 3/5 트조 38불";
    return;
  }

  const transaction = {
    id: createId(),
    date: parsed.date,
    ledger: parsed.ledger,
    kind: parsed.kind,
    amount: parsed.amount,
    merchant: parsed.merchant,
    category: parsed.category,
    account: parsed.account,
    fromAccount: parsed.fromAccount,
    toAccount: parsed.toAccount,
    cardId: parsed.cardId || null,
    rawInput,
  };

  state.transactions.push(transaction);
  saveTransactions();

  if (applyCardDebtForAddedTransaction(transaction)) {
    saveSettings();
    syncSetupForm();
  }

  quickInput.value = "";
  parserPreview.textContent = `저장: ${parsed.preview}`;

  state.selectedScope = parsed.ledger;
  state.selectedCategory = parsed.kind === "expense" ? parsed.category : null;
  render();
}

function handlePreview() {
  const rawInput = quickInput.value.trim();
  if (!rawInput) {
    parserPreview.textContent = "입력하면 자동 해석 결과가 여기에 보여요.";
    return;
  }

  const parsed = parseQuickEntry(rawInput, buildQuickParseOptions());
  if (!parsed.amount || parsed.amount <= 0) {
    parserPreview.textContent = `해석: ${parsed.dateLabel} · ${LEDGER_LABEL[parsed.ledger]} · 금액 없음`;
    return;
  }

  parserPreview.textContent = `해석: ${parsed.preview}`;
}

function getQuickTypePreset() {
  const value = normalizeQuickKindValue(String(quickKindSelect?.value || "auto"));
  if (value === "auto") {
    return { kind: null, account: null, ledger: null };
  }
  const match = value.match(/^([^:]+):(income|expense|cash)$/);
  if (!match) {
    return { kind: null, account: null, ledger: null };
  }
  const [, ledgerId, action] = match;
  const isFlower = ledgerId === "flower";
  if (action === "cash") {
    return {
      kind: null,
      account: isFlower ? "flowerCash" : "personalCash",
      ledger: ledgerId,
    };
  }
  return {
    kind: action,
    account: isFlower ? "flowerChecking" : "personalChecking",
    ledger: ledgerId,
  };
}

function buildQuickParseOptions() {
  return {
    forcedKind: getQuickForcedKind(),
    forcedAccount: getQuickForcedAccount(),
    forcedLedger: getQuickForcedLedger(),
    forcedCardId: getQuickForcedCardId(),
    forcedCategory: getQuickForcedCategory(),
  };
}

function getQuickForcedKind() {
  return getQuickTypePreset().kind;
}

function getQuickForcedLedger() {
  return getQuickTypePreset().ledger;
}

function getQuickForcedAccount() {
  const preset = getQuickTypePreset();
  if (preset.account) {
    return preset.account;
  }
  if (!quickAccountEl) {
    return null;
  }
  const value = String(quickAccountEl.value || "");
  if (value === "auto") {
    return null;
  }
  return NON_TRANSFER_ACCOUNTS.includes(value) ? value : null;
}

function getQuickForcedCategory() {
  if (!quickCategoryEl) {
    return null;
  }
  const value = String(quickCategoryEl.value || "");
  if (!value || value === "auto") {
    return null;
  }
  return getConfiguredCategories().includes(value) ? value : null;
}

function getQuickForcedCardId() {
  if (!quickCardEl) {
    return null;
  }
  const value = String(quickCardEl.value || "auto");
  if (value === "auto") {
    return null;
  }
  return getCardNameById(value) ? value : null;
}

function handleQuickKindButtonClick() {
  if (!quickKindMenuEl) {
    return;
  }
  setQuickKindMenu(quickKindMenuEl.hidden);
}

function handleQuickKindMenuClick(event) {
  const button = event.target.closest("button[data-quick-kind-option]");
  if (!button || !quickKindSelect) {
    return;
  }
  const value = normalizeQuickKindValue(String(button.dataset.quickKindOption || ""));
  if (!getQuickKindValues().includes(value)) {
    return;
  }
  quickKindSelect.value = value;
  setQuickKindMenu(false);
  handleQuickKindChange();
}

function setQuickKindMenu(open) {
  if (!quickKindMenuEl || !quickKindButtonEl) {
    return;
  }
  quickKindMenuEl.hidden = !open;
  quickKindButtonEl.setAttribute("aria-expanded", open ? "true" : "false");
}

function renderQuickKindPicker() {
  if (!quickKindSelect || !quickKindLabelEl || !quickKindMenuEl) {
    return;
  }
  const allowedValues = getQuickKindValues();
  const normalizedValue = normalizeQuickKindValue(String(quickKindSelect.value || "auto"));
  const value = allowedValues.includes(normalizedValue) ? normalizedValue : "auto";
  quickKindSelect.value = value;
  quickKindLabelEl.textContent = getQuickKindLabel(value);
  const options = quickKindMenuEl.querySelectorAll("button[data-quick-kind-option]");
  for (const option of options) {
    const active = option.dataset.quickKindOption === value;
    option.classList.toggle("active", active);
    option.setAttribute("aria-selected", active ? "true" : "false");
  }
}

function handleQuickKindChange() {
  if (quickAccountEl) {
    const preset = getQuickTypePreset();
    quickAccountEl.value = preset.account || "auto";
  }
  syncQuickCardState();
  renderQuickKindPicker();
  syncQuickAccountToggleState();
  syncQuickCategoryToggleState();
  handlePreview();
}

function handleQuickAccountToggle(event) {
  const button = event.target.closest("button[data-quick-kind]");
  if (!button || !quickKindSelect) {
    return;
  }
  const value = normalizeQuickKindValue(String(button.dataset.quickKind || ""));
  if (!value || !getQuickKindValues().includes(value)) {
    return;
  }
  quickKindSelect.value = value;
  handleQuickKindChange();
}

function syncQuickAccountToggleState() {
  if (!quickAccountEl) {
    return;
  }
  renderQuickAccountToggle();
}

function handleQuickCategoryToggle(event) {
  const button = event.target.closest("button[data-quick-category]");
  if (!button || !quickCategoryEl) {
    return;
  }
  const value = String(button.dataset.quickCategory || "auto");
  quickCategoryEl.value = value;
  renderQuickCategoryToggle();
  handlePreview();
}

function syncQuickCategoryToggleState() {
  if (!quickCategoryEl) {
    return;
  }
  if (getQuickForcedKind() === "transfer") {
    quickCategoryEl.value = "auto";
  }
  renderQuickCategoryToggle();
}

function renderQuickAccountToggle() {
  if (!quickAccountToggleEl || !quickAccountEl || !quickKindSelect) {
    return;
  }
  const preset = getQuickTypePreset();
  quickAccountEl.value = preset.account || "auto";
  const selected = normalizeQuickKindValue(String(quickKindSelect.value || "auto"));
  const buttons = getQuickKindValues().map(
    (value) =>
      `<button type="button" class="account-toggle-btn ${value === selected ? "active" : ""}" data-quick-kind="${value}">${escapeHtml(
        getQuickKindLabel(value)
      )}</button>`
  );
  quickAccountToggleEl.innerHTML = buttons.join("");
  const rendered = quickAccountToggleEl.querySelectorAll("button[data-quick-kind]");
  for (const button of rendered) {
    const value = button.dataset.quickKind;
    const active = value === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
    button.disabled = false;
  }
}

function renderQuickCardOptions() {
  if (!quickCardEl) {
    return;
  }
  const ledgerId = getPreferredQuickCardLedgerId();
  const cards = getManagedCardsForLedger(ledgerId);
  const previous = String(quickCardEl.value || "auto");
  const defaultCardId = getDefaultQuickCardId(cards, ledgerId);
  const options = ['<option value="auto">카드 미선택</option>'];
  for (const card of cards) {
    options.push(
      `<option value="${escapeHtml(card.id)}">${escapeHtml(card.name)} (${formatMoney(card.amount)})</option>`
    );
  }
  quickCardEl.innerHTML = options.join("");
  if (cards.some((card) => card.id === previous) && previous !== "auto") {
    quickCardEl.value = previous;
  } else if (defaultCardId) {
    quickCardEl.value = defaultCardId;
  } else {
    quickCardEl.value = "auto";
  }
  syncQuickCardState();
}

function syncQuickCardState() {
  if (!quickCardEl) {
    return;
  }
  const preset = getQuickTypePreset();
  const forcedKind = getQuickForcedKind();
  const disabled = forcedKind === "transfer" || String(preset.account || "").toLowerCase().includes("cash");
  quickCardEl.disabled = disabled;
  if (disabled) {
    quickCardEl.value = "auto";
    return;
  }
  const selected = String(quickCardEl.value || "auto");
  if (selected === "auto") {
    const defaultCardId = getDefaultQuickCardId(getManagedCardsForLedger(getPreferredQuickCardLedgerId()), getPreferredQuickCardLedgerId());
    if (defaultCardId) {
      quickCardEl.value = defaultCardId;
    }
  }
}

function getPreferredQuickCardLedgerId() {
  const forcedLedger = getQuickForcedLedger();
  if (forcedLedger) {
    return forcedLedger;
  }
  const account = String(quickAccountEl?.value || "");
  if (FLOWER_ACCOUNTS.includes(account)) {
    return "flower";
  }
  if (PERSONAL_ACCOUNTS.includes(account)) {
    return "personal";
  }
  return "personal";
}

function renderQuickCategoryToggle() {
  if (!quickCategoryToggleEl || !quickCategoryEl) {
    return;
  }
  const categories = getConfiguredCategories();
  const disabled = getQuickForcedKind() === "transfer";
  if (disabled) {
    quickCategoryEl.value = "auto";
  }
  if (quickCategoryEl.value !== "auto" && !categories.includes(quickCategoryEl.value)) {
    quickCategoryEl.value = "auto";
  }
  const selected = String(quickCategoryEl.value || "auto");
  const buttons = [
    '<button type="button" class="category-toggle-btn" data-quick-category="auto">자동</button>',
    ...categories.map(
      (category) =>
        `<button type="button" class="category-toggle-btn" data-quick-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`
    ),
  ];
  quickCategoryToggleEl.innerHTML = buttons.join("");
  const renderedButtons = quickCategoryToggleEl.querySelectorAll("button[data-quick-category]");
  for (const button of renderedButtons) {
    const active = button.dataset.quickCategory === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
    button.disabled = disabled;
  }
}

function handleScopeClick(event) {
  const button = event.target.closest("button[data-scope]");
  if (!button) {
    return;
  }

  state.selectedScope = button.dataset.scope;
  state.selectedCategory = null;
  render();
}

function handleCategoryClick(event) {
  const button = event.target.closest("button[data-category]");
  if (!button) {
    return;
  }

  const category = decodeURIComponent(button.dataset.category);
  state.selectedCategory = state.selectedCategory === category ? null : category;
  render();
}

function handleDetailMerchantDragStart(event) {
  const chip = event.target.closest("button[data-drag-merchant]");
  if (!chip || !event.dataTransfer) {
    return;
  }
  const merchant = decodeURIComponent(String(chip.dataset.dragMerchant || ""));
  const fromCategory = decodeURIComponent(String(chip.dataset.dragCategory || state.selectedCategory || ""));
  if (!merchant || !fromCategory) {
    return;
  }
  const payload = JSON.stringify({ merchant, fromCategory });
  event.dataTransfer.setData("text/plain", payload);
  event.dataTransfer.effectAllowed = "move";
}

function handleDetailMerchantClick(event) {
  const chip = event.target.closest("button[data-drag-merchant]");
  if (!chip || !detailMerchantDateEl) {
    return;
  }
  const date = decodeURIComponent(String(chip.dataset.dragDate || ""));
  if (!date) {
    detailMerchantDateEl.textContent = "";
    return;
  }
  detailMerchantDateEl.textContent = `선택 내역 날짜: ${date}`;
}

function handleCategoryDragOver(event) {
  const target = event.target.closest("button[data-category]");
  if (!target) {
    return;
  }
  event.preventDefault();
  clearCategoryDropHighlights();
  target.classList.add("drop-target");
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
}

function handleCategoryDragLeave(event) {
  const nextTarget = event.relatedTarget;
  if (nextTarget && categoryListEl.contains(nextTarget)) {
    return;
  }
  clearCategoryDropHighlights();
}

function handleCategoryDrop(event) {
  const target = event.target.closest("button[data-category]");
  if (!target || !event.dataTransfer) {
    return;
  }
  event.preventDefault();
  clearCategoryDropHighlights();
  const raw = event.dataTransfer.getData("text/plain");
  if (!raw) {
    return;
  }
  let payload;
  try {
    payload = JSON.parse(raw);
  } catch {
    return;
  }
  const merchant = String(payload?.merchant || "");
  const fromCategory = String(payload?.fromCategory || "");
  const toCategory = decodeURIComponent(target.dataset.category || "");
  if (!merchant || !fromCategory || !toCategory || fromCategory === toCategory) {
    return;
  }

  const monthTransactions = getCurrentMonthTransactions(state.transactions);
  const scopeTx = getScopeTransactions(monthTransactions, state.selectedScope);
  const scopeIds = new Set(scopeTx.map((tx) => tx.id));
  let changed = 0;
  state.transactions = state.transactions.map((tx) => {
    if (!scopeIds.has(tx.id)) {
      return tx;
    }
    if (tx.kind === "transfer") {
      return tx;
    }
    if (tx.category !== fromCategory) {
      return tx;
    }
    if (normalizeText(tx.merchant) !== normalizeText(merchant)) {
      return tx;
    }
    changed += 1;
    return { ...tx, category: toCategory };
  });

  if (!changed) {
    parserPreview.textContent = "드래그로 이동할 항목을 찾지 못했어요.";
    return;
  }
  saveTransactions();
  const stillHasFromCategory = state.transactions.some(
    (tx) =>
      tx.kind !== "transfer" &&
      tx.category === fromCategory &&
      scopeIds.has(tx.id)
  );
  state.selectedCategory = stillHasFromCategory ? fromCategory : toCategory;
  render();
  parserPreview.textContent = `${merchant} ${changed}건을 ${toCategory}로 이동했어요.`;
}

function clearCategoryDropHighlights() {
  if (!categoryListEl) {
    return;
  }
  const buttons = categoryListEl.querySelectorAll("button[data-category]");
  for (const button of buttons) {
    button.classList.remove("drop-target");
  }
}

function handleDonutCanvasClick(event) {
  if (!state.donutHitRegions || !state.donutHitRegions.length) {
    return;
  }
  const rect = donutCanvas.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return;
  }
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const hit = state.donutHitRegions.find((region) => {
    const dx = x - region.centerX;
    const dy = y - region.centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < region.innerRadius || distance > region.outerRadius) {
      return false;
    }

    const angle = normalizeRadian(Math.atan2(dy, dx));
    const start = region.startNorm;
    const end = region.endNorm;
    return start <= end ? angle >= start && angle <= end : angle >= start || angle <= end;
  });

  if (!hit) {
    return;
  }
  state.selectedCategory = hit.category;
  render();
}

function handleHistoryAction(event) {
  const editButton = event.target.closest("button[data-edit-id]");
  if (editButton) {
    openEditModal(editButton.dataset.editId);
    return;
  }

  const deleteButton = event.target.closest("button[data-delete-id]");
  if (deleteButton) {
    deleteTransactionById(deleteButton.dataset.deleteId);
  }
}

function handleGoalSubmit(event) {
  event.preventDefault();
  if (!goalNameEl || !goalTypeEl || !goalTargetEl || !goalYearsEl || !goalSavedEl || !goalMonthlySavedEl || !goalFormEl) {
    return;
  }

  const name = goalNameEl.value.trim();
  const type = Object.prototype.hasOwnProperty.call(GOAL_TYPE_LABEL, goalTypeEl.value) ? goalTypeEl.value : "other";
  const targetAmount = normalizeAmount(goalTargetEl.value);
  const years = normalizeGoalYears(goalYearsEl.value);
  const savedAmount = roundMoney(Math.max(0, Number(goalSavedEl.value) || 0));
  const monthlySavedAmount = roundMoney(Math.max(0, Number(goalMonthlySavedEl.value) || 0));

  if (!name || targetAmount <= 0 || years <= 0) {
    parserPreview.textContent = "목표 이름, 목표 금액, 목표 기간(년)을 확인해주세요.";
    return;
  }

  state.settings.savingGoals = normalizeSavingGoals([
    ...(state.settings.savingGoals || []),
    {
      id: createId(),
      name,
      type,
      targetAmount,
      years,
      savedAmount,
      monthlySavedAmount,
    },
  ]);
  saveSettings();
  render();
  goalFormEl.reset();
  goalTypeEl.value = "travel";
  goalYearsEl.value = "1";
  parserPreview.textContent = "목표를 추가했어요.";
}

function handleGoalListClick(event) {
  const row = event.target.closest("li[data-goal-id]");
  if (!row) {
    return;
  }
  const goalId = row.dataset.goalId;
  if (!goalId) {
    return;
  }

  const deleteButton = event.target.closest("button[data-goal-delete]");
  if (deleteButton) {
    state.settings.savingGoals = normalizeSavingGoals((state.settings.savingGoals || []).filter((goal) => goal.id !== goalId));
    saveSettings();
    render();
    parserPreview.textContent = "목표를 삭제했어요.";
    return;
  }

  const saveButton = event.target.closest("button[data-goal-save]");
  if (!saveButton) {
    return;
  }

  const nameInput = row.querySelector("input[data-goal-name]");
  const typeSelect = row.querySelector("select[data-goal-type]");
  const targetInput = row.querySelector("input[data-goal-target]");
  const yearsInput = row.querySelector("input[data-goal-years]");
  const savedInput = row.querySelector("input[data-goal-saved]");
  const monthlySavedInput = row.querySelector("input[data-goal-monthly-saved]");
  if (!nameInput || !typeSelect || !targetInput || !yearsInput || !savedInput || !monthlySavedInput) {
    return;
  }

  const nextName = nameInput.value.trim();
  const nextType = Object.prototype.hasOwnProperty.call(GOAL_TYPE_LABEL, typeSelect.value) ? typeSelect.value : "other";
  const nextTarget = normalizeAmount(targetInput.value);
  const nextYears = normalizeGoalYears(yearsInput.value);
  const nextSaved = roundMoney(Math.max(0, Number(savedInput.value) || 0));
  const nextMonthlySaved = roundMoney(Math.max(0, Number(monthlySavedInput.value) || 0));
  if (!nextName || nextTarget <= 0 || nextYears <= 0) {
    parserPreview.textContent = "수정 실패: 목표 이름/금액/기간(년)을 확인해주세요.";
    return;
  }

  state.settings.savingGoals = normalizeSavingGoals(
    (state.settings.savingGoals || []).map((goal) =>
      goal.id === goalId
        ? {
            ...goal,
            name: nextName,
            type: nextType,
            targetAmount: nextTarget,
            years: nextYears,
            savedAmount: nextSaved,
            monthlySavedAmount: nextMonthlySaved,
          }
        : goal
    )
  );
  saveSettings();
  render();
  parserPreview.textContent = "목표를 수정했어요.";
}

function handleRecordsAction(event) {
  const editButton = event.target.closest("button[data-edit-id]");
  if (editButton) {
    openEditModal(editButton.dataset.editId);
    return;
  }

  const deleteButton = event.target.closest("button[data-delete-id]");
  if (deleteButton) {
    deleteTransactionById(deleteButton.dataset.deleteId);
    renderRecordsPage();
  }
}

function handleRecordsColorChange(event) {
  const button = event.target.closest("button[data-record-card-color]");
  if (!button || !state.currentDetailCard) {
    return;
  }

  const color = normalizeHexColor(button.dataset.recordCardColor);
  if (!color) {
    return;
  }

  state.settings.cardColors = {
    ...state.settings.cardColors,
    [state.currentDetailCard]: color,
  };
  saveSettings();
  render();
  renderRecordsPage();
  parserPreview.textContent = "카드 색상을 저장했어요.";
}

function handleRecordsColorReset() {
  if (!state.currentDetailCard) {
    return;
  }
  state.settings.cardColors = {
    ...state.settings.cardColors,
    [state.currentDetailCard]: CARD_DEFAULT_COLORS[state.currentDetailCard] || PALETTE[0],
  };
  saveSettings();
  render();
  renderRecordsPage();
  parserPreview.textContent = "카드 색상을 기본색으로 돌렸어요.";
}

function handleRecordsMonthChange() {
  if (!state.currentDetailCard || !recordsMonthSelectEl) {
    return;
  }
  state.recordsMonthByCard = {
    ...state.recordsMonthByCard,
    [state.currentDetailCard]: recordsMonthSelectEl.value,
  };
  renderRecordsPage();
}

function handleRecordsManagerSubmit(event) {
  event.preventDefault();
  if (!recordsManagerNameEl || !recordsManagerAmountEl || !recordsManagerFormEl) {
    return;
  }
  const config = getCurrentRecordsManagerConfig();
  if (!config) {
    return;
  }

  const name = recordsManagerNameEl.value.trim();
  const amount = normalizeManagedAmount(config.type, recordsManagerAmountEl.value);
  if (!name || amount <= 0) {
    parserPreview.textContent = "항목 이름과 금액을 확인해주세요.";
    return;
  }

  const list = getManagedItems(config.type);
  list.push({ id: createId(), name, amount: roundMoney(amount) });
  setManagedItems(config.type, list);
  saveSettings();
  state.settings = loadSettings();
  syncSetupForm();
  render();
  renderRecordsPage();
  recordsManagerFormEl.reset();
  parserPreview.textContent = "관리 항목을 추가했어요.";
}

function handleRecordsManagerAction(event) {
  if (!recordsManagerListEl) {
    return;
  }
  const row = event.target.closest("li[data-managed-id]");
  if (!row) {
    return;
  }
  const config = getCurrentRecordsManagerConfig();
  if (!config) {
    return;
  }

  const itemId = row.dataset.managedId;
  const deleteButton = event.target.closest("button[data-managed-delete]");
  if (deleteButton) {
    const list = getManagedItems(config.type).filter((item) => item.id !== itemId);
    setManagedItems(config.type, list);
    saveSettings();
    state.settings = loadSettings();
    syncSetupForm();
    render();
    renderRecordsPage();
    parserPreview.textContent = "관리 항목을 삭제했어요.";
    return;
  }

  const saveButton = event.target.closest("button[data-managed-save]");
  if (!saveButton) {
    return;
  }

  const nameInput = row.querySelector("input[data-managed-name]");
  const amountInput = row.querySelector("input[data-managed-amount]");
  const name = nameInput.value.trim();
  const allowZero = isCardManagerType(config.type);
  const amount = normalizeManagedAmount(config.type, amountInput.value, { allowZero });
  if (!name || amount < 0 || (!allowZero && amount <= 0)) {
    parserPreview.textContent = "수정 실패: 이름/금액을 확인해주세요.";
    return;
  }

  const list = getManagedItems(config.type).map((item) =>
    item.id === itemId ? { ...item, name, amount: roundMoney(amount) } : item
  );
  setManagedItems(config.type, list);
  saveSettings();
  state.settings = loadSettings();
  syncSetupForm();
  render();
  renderRecordsPage();
  parserPreview.textContent = "관리 항목을 수정했어요.";
}

function handleAccountsManagerSubmit(event) {
  const form = event.target.closest("form[data-accounts-add-form]");
  if (!form) {
    return;
  }
  event.preventDefault();
  const type = String(form.dataset.manageType || "");
  if (!type) {
    return;
  }

  const nameInput = form.querySelector("input[data-manage-new-name]");
  const amountInput = form.querySelector("input[data-manage-new-amount]");
  const name = String(nameInput?.value || "").trim();
  const amount = normalizeManagedAmount(type, String(amountInput?.value || ""));
  if (!name || amount <= 0) {
    parserPreview.textContent = "항목 이름과 금액을 확인해주세요.";
    return;
  }

  const next = [...getManagedItems(type), { id: createId(), name, amount: roundMoney(amount) }];
  setManagedItems(type, next);
  saveSettings();
  state.settings = loadSettings();
  syncSetupForm();
  render();
  if (typeof form.reset === "function") {
    form.reset();
  }
  parserPreview.textContent = "목록에 항목을 추가했어요.";
}

function handleAccountsManagerAction(event) {
  const row = event.target.closest("li[data-managed-id][data-manage-type]");
  if (!row) {
    return;
  }

  const type = String(row.dataset.manageType || "");
  const itemId = String(row.dataset.managedId || "");
  if (!type || !itemId) {
    return;
  }

  const deleteButton = event.target.closest("button[data-managed-delete]");
  if (deleteButton) {
    const next = getManagedItems(type).filter((item) => item.id !== itemId);
    setManagedItems(type, next);
    saveSettings();
    state.settings = loadSettings();
    syncSetupForm();
    render();
    parserPreview.textContent = "항목을 삭제했어요.";
    return;
  }

  const saveButton = event.target.closest("button[data-managed-save]");
  if (!saveButton) {
    return;
  }

  const nameInput = row.querySelector("input[data-managed-name]");
  const amountInput = row.querySelector("input[data-managed-amount]");
  const name = String(nameInput?.value || "").trim();
  const allowZero = isCardManagerType(type);
  const amount = normalizeManagedAmount(type, String(amountInput?.value || ""), { allowZero });
  if (!name || amount < 0 || (!allowZero && amount <= 0)) {
    parserPreview.textContent = "수정 실패: 이름/금액을 확인해주세요.";
    return;
  }

  const next = getManagedItems(type).map((item) => (item.id === itemId ? { ...item, name, amount: roundMoney(amount) } : item));
  setManagedItems(type, next);
  saveSettings();
  state.settings = loadSettings();
  syncSetupForm();
  render();
  parserPreview.textContent = "항목을 수정했어요.";
}

function getCurrentRecordsManagerConfig() {
  if (!state.currentDetailCard) {
    return null;
  }
  return RECORD_MANAGER_CONFIG[state.currentDetailCard] || null;
}

function handleRecordsTransferSubmit(event) {
  event.preventDefault();
  if (!recordsTransferFromEl || !recordsTransferToEl || !recordsTransferAmountEl) {
    return;
  }

  const fromAccount = recordsTransferFromEl.value;
  const toAccount = recordsTransferToEl.value;
  const amount = normalizeAmount(recordsTransferAmountEl.value);
  const note = recordsTransferNoteEl ? recordsTransferNoteEl.value.trim() : "";
  const cardId = getCardIdFromTargetValue(toAccount);
  const isCardPayment = Boolean(cardId);

  if (fromAccount === toAccount) {
    parserPreview.textContent = "이체 실패: 보내는 통장과 받는 통장이 같아요.";
    return;
  }
  if (!PERSONAL_ACCOUNTS.includes(fromAccount) || amount <= 0) {
    parserPreview.textContent = "이체 실패: 통장/금액을 확인해주세요.";
    return;
  }
  if (!isCardPayment && !PERSONAL_ACCOUNTS.includes(toAccount)) {
    parserPreview.textContent = "이체 실패: 받는 통장을 확인해주세요.";
    return;
  }
  if (isCardPayment && !getCardNameById(cardId)) {
    parserPreview.textContent = "이체 실패: 결제할 카드를 먼저 등록해주세요.";
    return;
  }

  const isCardTransfer = isCardPayment;
  const merchant = note || (isCardTransfer ? "카드값 결제 이체" : "통장 이체");
  const category = isCardTransfer ? "Card Payment Transfer" : "Account Transfer";

  const transaction = {
    id: createId(),
    date: toIsoDate(new Date()),
    ledger: "personal",
    kind: "transfer",
    amount,
    merchant,
    category,
    account: null,
    fromAccount,
    toAccount,
    cardId: cardId || null,
    rawInput: note || merchant,
  };

  state.transactions.push(transaction);
  saveTransactions();
  if (applyCardDebtForAddedTransaction(transaction)) {
    saveSettings();
    syncSetupForm();
  }
  render();
  renderRecordsPage();
  recordsTransferFormEl.reset();
  recordsTransferFromEl.value = "personalSavings";
  populateRecordsTransferTargets(getDefaultCardTransferTarget());
  parserPreview.textContent = isCardPayment ? "카드 결제 이체를 저장했고 Credit Card 잔액에서 자동 차감했어요." : "통장 이체를 저장했어요.";
}

function deleteTransactionById(id) {
  const targetId = String(id || "");
  const targetTransaction = state.transactions.find((transaction) => String(transaction.id) === targetId);
  const beforeCount = state.transactions.length;
  state.transactions = state.transactions.filter((transaction) => String(transaction.id) !== targetId);
  if (state.transactions.length === beforeCount) {
    parserPreview.textContent = "삭제할 내역을 찾지 못했어요. 화면을 새로고침 후 다시 시도해주세요.";
    return;
  }
  if (targetTransaction && revertCardDebtForRemovedTransaction(targetTransaction)) {
    saveSettings();
    syncSetupForm();
  }
  if (String(state.currentEditId || "") === targetId) {
    closeEditModal();
  }
  saveTransactions();
  state.transactions = loadTransactions();
  render();
  parserPreview.textContent = "내역을 삭제했고, 개인장부/통장 화면 전체에 반영했어요.";
}

function handleStatCardClick(event) {
  const card = event.target.closest("[data-card]");
  if (!card) {
    return;
  }
  openRecordsPage(card.dataset.card);
}

function handleStatCardKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }
  const card = event.target.closest("[data-card]");
  if (!card) {
    return;
  }
  event.preventDefault();
  openRecordsPage(card.dataset.card);
}

function handleFlowerKeywordSubmit(event) {
  event.preventDefault();
  const keyword = flowerKeywordInput.value.trim().toLowerCase();
  if (!keyword) {
    return;
  }

  if (!state.settings.flowerKeywords.includes(keyword)) {
    state.settings.flowerKeywords.push(keyword);
    state.settings.flowerKeywords.sort((a, b) => a.localeCompare(b, "ko"));
    saveSettings();
  }

  flowerKeywordInput.value = "";
  renderKeywordSettings();
}

function handleFlowerKeywordRemove(event) {
  const button = event.target.closest("button[data-remove-flower]");
  if (!button) {
    return;
  }

  const keyword = decodeURIComponent(button.dataset.removeFlower);
  state.settings.flowerKeywords = state.settings.flowerKeywords.filter((item) => item !== keyword);
  saveSettings();
  renderKeywordSettings();
}

function handleRuleSubmit(event) {
  event.preventDefault();

  const keyword = ruleKeywordInput.value.trim().toLowerCase();
  if (!keyword) {
    return;
  }

  const newRule = {
    id: createId(),
    keyword,
    merchant: ruleMerchantInput.value.trim(),
    category: ruleCategoryInput.value.trim(),
    ledger: ruleLedgerInput.value,
    kind: ruleKindInput.value,
  };

  state.settings.customRules.push(newRule);
  saveSettings();

  ruleForm.reset();
  renderKeywordSettings();
}

function handleRuleRemove(event) {
  const button = event.target.closest("button[data-remove-rule]");
  if (!button) {
    return;
  }

  const ruleId = button.dataset.removeRule;
  state.settings.customRules = state.settings.customRules.filter((rule) => rule.id !== ruleId);
  saveSettings();
  renderKeywordSettings();
}

function handleCategoryColorChange(event) {
  const pickButton = event.target.closest("button[data-color-pick-category]");
  if (pickButton) {
    const category = decodeURIComponent(pickButton.dataset.colorPickCategory || "");
    if (category) {
      state.selectedColorCategory = category;
      state.selectedSettingsCategory = category;
      renderCategoryColorSettings();
      renderCategoryManageSettings();
    }
    return;
  }

  const button = event.target.closest("button[data-color-category][data-color-value]");
  if (!button) {
    return;
  }

  const category = decodeURIComponent(button.dataset.colorCategory || "");
  if (!category) {
    return;
  }

  const color = normalizeHexColor(button.dataset.colorValue) || PALETTE[0];
  state.settings.categoryColors = {
    ...state.settings.categoryColors,
    [category]: color,
  };
  saveSettings();
  render();
}

function renderCategoryColorSettings() {
  if (!categoryColorListEl) {
    return;
  }
  const categories = getConfiguredCategories();
  if (!categories.length) {
    categoryColorListEl.innerHTML = '<p class="empty">색상을 바꿀 카테고리가 아직 없어요.</p>';
    return;
  }

  if (!state.selectedColorCategory || !categories.includes(state.selectedColorCategory)) {
    state.selectedColorCategory = state.selectedSettingsCategory && categories.includes(state.selectedSettingsCategory)
      ? state.selectedSettingsCategory
      : categories[0];
  }

  const selected = state.selectedColorCategory;
  const activeColor = getCategoryColor(selected);
  const categoryButtons = categories
    .map((category) => {
      const active = category === selected ? "active" : "";
      return `<button type="button" class="category-toggle-btn ${active}" data-color-pick-category="${encodeURIComponent(
        category
      )}">${escapeHtml(category)}</button>`;
    })
    .join("");

  const swatches = buildPaletteOptions(activeColor)
    .map(
      (color) =>
        `<button
          type="button"
          class="color-swatch-btn ${color === activeColor ? "active" : ""}"
          data-color-category="${encodeURIComponent(selected)}"
          data-color-value="${color}"
          style="background:${color}"
          aria-label="${escapeHtml(selected)} 색상 ${color.toUpperCase()}"
          title="${color.toUpperCase()}"
        ></button>`
    )
    .join("");

  categoryColorListEl.innerHTML = `
    <div class="category-color-compact">
      <div class="category-color-pills">${categoryButtons}</div>
      <div class="category-color-palette">
        <span class="category-color-name">
          <span class="dot" style="background:${activeColor}"></span>${escapeHtml(selected)}
        </span>
        <div class="color-swatch-row" role="group" aria-label="${escapeHtml(selected)} 색상 선택">${swatches}</div>
      </div>
    </div>
  `;
}

function getKnownCategories() {
  return getConfiguredCategories();
}

function buildPaletteOptions(activeColor) {
  const normalizedActive = normalizeHexColor(activeColor);
  const colors = [...PALETTE];
  if (normalizedActive && !colors.includes(normalizedActive)) {
    colors.push(normalizedActive);
  }
  return colors;
}

function renderFriendShortcutSettings() {
  if (!friendShortcutListEl) {
    return;
  }

  const rows = FRIEND_KEYS.map((key) => {
    const action = state.settings.friendShortcuts[key];
    const meta = FRIEND_KEY_META[key];
    const options = FRIEND_ACTION_ORDER.map(
      (option) =>
        `<option value="${option}" ${option === action ? "selected" : ""}>${escapeHtml(FRIEND_ACTION_LABEL[option])}</option>`
    ).join("");

    return `
      <label class="friend-shortcut-item">
        <span class="friend-shortcut-name">
          <span class="friend-dot" style="background:${meta.color}"></span>${escapeHtml(meta.name)}
        </span>
        <select data-friend-key="${key}">
          ${options}
        </select>
      </label>
    `;
  });

  friendShortcutListEl.innerHTML = rows.join("");
}

function initializeSyncRuntime() {
  syncRuntime.config = loadSyncConfig();
  syncRuntime.meta = loadSyncMeta();
  if (!syncRuntime.meta.deviceId) {
    syncRuntime.meta.deviceId = getOrCreateSyncDeviceId();
    saveSyncMeta();
  }
  if (!Number.isFinite(syncRuntime.meta.lastLocalUpdatedAt) || syncRuntime.meta.lastLocalUpdatedAt < 0) {
    syncRuntime.meta.lastLocalUpdatedAt = 0;
    saveSyncMeta();
  }
  if (syncRuntime.meta.lastLocalUpdatedAt === 0 && hasExistingLocalLedgerData()) {
    // First sync on an existing device: keep a tiny revision so remote data can still win if newer.
    syncRuntime.meta.lastLocalUpdatedAt = 1;
    saveSyncMeta();
  }
  populateSyncForm();
  renderSyncStatus();
}

function hasExistingLocalLedgerData() {
  if (state.transactions.length > 0) {
    return true;
  }
  try {
    const rawTx = localStorage.getItem(STORAGE_KEY);
    const rawLegacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    const rawSettings = localStorage.getItem(SETTINGS_KEY);
    const rawHidden = localStorage.getItem(FRIENDS_HIDDEN_KEY);
    if (rawTx && rawTx !== "[]") {
      return true;
    }
    if (rawLegacy && rawLegacy !== "[]") {
      return true;
    }
    if (rawSettings) {
      return true;
    }
    return rawHidden === "1";
  } catch {
    return true;
  }
}

function populateSyncForm() {
  if (!syncFormEl || !syncEndpointEl || !syncTokenEl || !syncIntervalEl || !syncEnabledEl) {
    return;
  }
  syncEndpointEl.value = syncRuntime.config.endpoint || "";
  syncTokenEl.value = syncRuntime.config.token || "";
  syncIntervalEl.value = String(syncRuntime.config.intervalSec || DEFAULT_SYNC_CONFIG.intervalSec);
  syncEnabledEl.checked = Boolean(syncRuntime.config.enabled);
}

function renderSyncStatus() {
  if (!syncStatusEl) {
    return;
  }
  const config = syncRuntime.config || DEFAULT_SYNC_CONFIG;
  const meta = syncRuntime.meta || DEFAULT_SYNC_META;
  syncStatusEl.classList.remove("is-error");

  if (!config.enabled) {
    syncStatusEl.textContent = "연동이 꺼져 있어요.";
    return;
  }
  if (!config.endpoint) {
    syncStatusEl.textContent = "Sync URL을 입력하면 자동 연동이 시작돼요.";
    return;
  }
  if (meta.lastError) {
    syncStatusEl.classList.add("is-error");
    syncStatusEl.textContent = `연동 실패: ${meta.lastError}`;
    return;
  }
  if (!meta.lastSyncAt) {
    syncStatusEl.textContent = "연동 준비 완료. 잠시 후 첫 동기화를 시도해요.";
    return;
  }

  const actionMap = {
    push: "업로드 완료",
    pull: "다운로드 완료",
    "pull+push": "양방향 동기화 완료",
    "up-to-date": "이미 최신 상태",
  };
  const actionLabel = actionMap[meta.lastResult] || "동기화 완료";
  syncStatusEl.textContent = `${actionLabel} (${formatSyncDateTime(meta.lastSyncAt)})`;
}

function formatSyncDateTime(timestamp) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }
  return date.toLocaleString("ko-KR", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function handleSyncFormSubmit(event) {
  event.preventDefault();
  if (!syncEndpointEl || !syncTokenEl || !syncIntervalEl || !syncEnabledEl) {
    return;
  }
  syncRuntime.config = normalizeSyncConfig({
    enabled: syncEnabledEl.checked,
    endpoint: syncEndpointEl.value,
    token: syncTokenEl.value,
    intervalSec: Number(syncIntervalEl.value),
  });
  saveSyncConfig();
  populateSyncForm();
  renderSyncStatus();
  parserPreview.textContent = "자동 연동 설정을 저장했어요.";
  startSyncPolling();
  if (syncRuntime.config.enabled) {
    triggerSync({ reason: "config-save", urgent: true });
  }
}

function handleSyncNowClick() {
  if (!syncRuntime.config.enabled) {
    parserPreview.textContent = "자동 연동을 먼저 켜주세요.";
    return;
  }
  triggerSync({ reason: "manual", urgent: true });
}

function startSyncPolling() {
  if (syncRuntime.pollTimer) {
    window.clearInterval(syncRuntime.pollTimer);
    syncRuntime.pollTimer = null;
  }
  if (!syncRuntime.config.enabled || !syncRuntime.config.endpoint) {
    return;
  }
  const intervalSec = Math.max(10, Math.min(600, Number(syncRuntime.config.intervalSec) || DEFAULT_SYNC_CONFIG.intervalSec));
  syncRuntime.pollTimer = window.setInterval(() => {
    triggerSync({ reason: "poll", urgent: true });
  }, intervalSec * 1000);
}

function triggerSync({ reason = "manual", urgent = false } = {}) {
  if (!syncRuntime.config.enabled || !syncRuntime.config.endpoint) {
    renderSyncStatus();
    return;
  }
  if (urgent) {
    if (syncRuntime.scheduleTimer) {
      window.clearTimeout(syncRuntime.scheduleTimer);
    }
    syncRuntime.scheduleTimer = window.setTimeout(() => {
      syncRuntime.scheduleTimer = null;
      runSync(reason);
    }, 40);
    return;
  }
  if (syncRuntime.scheduleTimer) {
    return;
  }
  syncRuntime.scheduleTimer = window.setTimeout(() => {
    syncRuntime.scheduleTimer = null;
    runSync(reason);
  }, 1000);
}

async function runSync(reason = "auto") {
  if (!syncRuntime.config.enabled || !syncRuntime.config.endpoint) {
    renderSyncStatus();
    return;
  }
  if (syncRuntime.inFlight) {
    syncRuntime.pending = true;
    return;
  }
  syncRuntime.inFlight = true;
  if (syncStatusEl) {
    syncStatusEl.classList.remove("is-error");
    syncStatusEl.textContent = "동기화 중...";
  }

  try {
    const remoteEnvelope = await fetchRemoteEnvelope();
    const localEnvelope = buildLocalEnvelope();
    let action = "up-to-date";

    if (remoteEnvelope && remoteEnvelope.updatedAt > Number(localEnvelope.updatedAt || 0)) {
      applyRemoteEnvelope(remoteEnvelope);
      action = "pull";
    }

    const latestLocal = buildLocalEnvelope();
    const remoteStamp = remoteEnvelope ? Number(remoteEnvelope.updatedAt || 0) : 0;
    if (!remoteEnvelope || Number(latestLocal.updatedAt || 0) > remoteStamp) {
      await pushRemoteEnvelope(latestLocal);
      action = action === "pull" ? "pull+push" : "push";
    }

    syncRuntime.meta.lastSyncAt = Date.now();
    syncRuntime.meta.lastResult = action;
    syncRuntime.meta.lastError = "";
    saveSyncMeta();
    renderSyncStatus();
    if (action.includes("pull")) {
      parserPreview.textContent = "다른 기기 변경사항을 불러와서 맞췄어요.";
    }
  } catch (error) {
    syncRuntime.meta.lastSyncAt = Date.now();
    syncRuntime.meta.lastResult = "error";
    syncRuntime.meta.lastError = getSyncErrorMessage(error);
    saveSyncMeta();
    renderSyncStatus();
    parserPreview.textContent = `동기화 실패: ${syncRuntime.meta.lastError}`;
  } finally {
    syncRuntime.inFlight = false;
    if (syncRuntime.pending) {
      syncRuntime.pending = false;
      triggerSync({ reason: `${reason}-pending`, urgent: true });
    }
  }
}

function buildLocalEnvelope() {
  return {
    app: SYNC_APP_VERSION,
    updatedAt: Number(syncRuntime.meta.lastLocalUpdatedAt || 0),
    deviceId: syncRuntime.meta.deviceId || getOrCreateSyncDeviceId(),
    data: {
      transactions: state.transactions,
      settings: state.settings,
      friendsHidden: state.friendsHidden,
    },
  };
}

function normalizeRemoteEnvelope(input) {
  if (!input || typeof input !== "object") {
    return null;
  }
  const updatedAt = Number(input.updatedAt);
  if (!Number.isFinite(updatedAt) || updatedAt < 0) {
    return null;
  }
  return {
    app: String(input.app || ""),
    updatedAt,
    deviceId: String(input.deviceId || ""),
    data: input.data && typeof input.data === "object" ? input.data : {},
  };
}

async function fetchRemoteEnvelope() {
  const endpoint = syncRuntime.config.endpoint;
  const gistId = getGitHubGistId(endpoint);
  if (gistId) {
    return fetchRemoteEnvelopeFromGitHubGist(gistId);
  }
  const response = await fetch(endpoint, {
    method: "GET",
    headers: buildSyncHeaders(),
    cache: "no-store",
  });
  if (response.status === 404 || response.status === 204) {
    return null;
  }
  if (!response.ok) {
    throw new Error(`서버 읽기 실패 (${response.status})`);
  }
  const payload = await response.json();
  return normalizeRemoteEnvelope(payload);
}

async function pushRemoteEnvelope(envelope) {
  const endpoint = syncRuntime.config.endpoint;
  const gistId = getGitHubGistId(endpoint);
  if (gistId) {
    await pushRemoteEnvelopeToGitHubGist(gistId, envelope);
    return;
  }
  const headers = buildSyncHeaders({ json: true });
  let response = await fetch(endpoint, {
    method: "PUT",
    headers,
    body: JSON.stringify(envelope),
  });

  if (response.status === 405 || response.status === 404) {
    response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(envelope),
    });
  }

  if (!response.ok) {
    throw new Error(`서버 저장 실패 (${response.status})`);
  }
}

function buildSyncHeaders(options = {}) {
  const headers = {
    Accept: options.github ? "application/vnd.github+json" : "application/json",
  };
  if (options.json) {
    headers["Content-Type"] = "application/json";
  }
  if (options.github) {
    headers["X-GitHub-Api-Version"] = "2022-11-28";
  }
  const token = String(syncRuntime.config.token || "").trim();
  if (token) {
    if (/^(Bearer|token)\s+/i.test(token)) {
      headers.Authorization = token;
    } else if (options.github) {
      headers.Authorization = `token ${token}`;
    } else {
      headers.Authorization = `Bearer ${token}`;
    }
  }
  return headers;
}

function getGitHubGistId(endpoint) {
  const normalized = String(endpoint || "").trim();
  const match = normalized.match(/^https?:\/\/api\.github\.com\/gists\/([0-9a-f]+)(?:[/?#].*)?$/i);
  return match ? match[1] : null;
}

async function fetchRemoteEnvelopeFromGitHubGist(gistId) {
  const endpoint = `https://api.github.com/gists/${gistId}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: buildSyncHeaders({ github: true }),
    cache: "no-store",
  });
  if (response.status === 404 || response.status === 204) {
    return null;
  }
  if (!response.ok) {
    throw new Error(`GitHub Gist 읽기 실패 (${response.status})`);
  }

  const gistPayload = await response.json();
  const files = gistPayload?.files && typeof gistPayload.files === "object" ? gistPayload.files : {};
  return extractRemoteEnvelopeFromGistFiles(files);
}

async function extractRemoteEnvelopeFromGistFiles(files) {
  const preferred = files[GITHUB_GIST_SYNC_FILE];
  if (preferred) {
    const envelope = await parseEnvelopeFromGistFile(preferred);
    if (envelope) {
      return envelope;
    }
  }

  for (const file of Object.values(files || {})) {
    const envelope = await parseEnvelopeFromGistFile(file);
    if (envelope) {
      return envelope;
    }
  }
  return null;
}

async function parseEnvelopeFromGistFile(file) {
  if (!file || typeof file !== "object") {
    return null;
  }

  let content = typeof file.content === "string" ? file.content : "";
  if ((!content || file.truncated) && file.raw_url) {
    const rawResponse = await fetch(file.raw_url, {
      method: "GET",
      headers: buildSyncHeaders({ github: true }),
      cache: "no-store",
    });
    if (rawResponse.ok) {
      content = await rawResponse.text();
    }
  }

  if (!content) {
    return null;
  }
  const parsed = safeParseJson(content);
  return normalizeRemoteEnvelope(parsed);
}

async function pushRemoteEnvelopeToGitHubGist(gistId, envelope) {
  const endpoint = `https://api.github.com/gists/${gistId}`;
  const response = await fetch(endpoint, {
    method: "PATCH",
    headers: buildSyncHeaders({ github: true, json: true }),
    body: JSON.stringify({
      files: {
        [GITHUB_GIST_SYNC_FILE]: {
          content: JSON.stringify(envelope),
        },
      },
    }),
  });
  if (!response.ok) {
    throw new Error(`GitHub Gist 저장 실패 (${response.status})`);
  }
}

function applyRemoteEnvelope(remoteEnvelope) {
  const remoteTransactions = Array.isArray(remoteEnvelope?.data?.transactions)
    ? remoteEnvelope.data.transactions.map(normalizeTransaction).filter(Boolean)
    : [];
  const nextTransactions = mergeTransactionsForSync(state.transactions, remoteTransactions);
  const addedFromLocal = Math.max(0, nextTransactions.length - remoteTransactions.length);
  const nextSettings = normalizeSettings(remoteEnvelope?.data?.settings);
  const nextFriendsHidden = Boolean(remoteEnvelope?.data?.friendsHidden);

  suppressLocalSyncMark = true;
  try {
    state.transactions = nextTransactions;
    state.settings = nextSettings;
    state.friendsHidden = nextFriendsHidden;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTransactions));
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(nextSettings));
    localStorage.setItem(FRIENDS_HIDDEN_KEY, nextFriendsHidden ? "1" : "0");
  } finally {
    suppressLocalSyncMark = false;
  }

  // If remote data looked older/incomplete, keep local transactions and re-push merged copy.
  syncRuntime.meta.lastLocalUpdatedAt =
    addedFromLocal > 0 ? Date.now() : Number(remoteEnvelope.updatedAt || Date.now());
  saveSyncMeta();
  syncSetupForm();
  applyFriendLayerVisibility();
  applyFriendShortcuts();
  renderQuickAccountToggle();
  syncQuickAccountToggleState();
  renderQuickKindPicker();
  renderQuickCardOptions();
  renderQuickCategoryToggle();
  renderCategoryColorSettings();
  renderFriendShortcutSettings();
  render();
}

function mergeTransactionsForSync(localTransactions, remoteTransactions) {
  const map = new Map();

  for (const tx of remoteTransactions || []) {
    if (tx && tx.id) {
      map.set(String(tx.id), tx);
    }
  }
  for (const tx of localTransactions || []) {
    if (tx && tx.id && !map.has(String(tx.id))) {
      map.set(String(tx.id), tx);
    }
  }

  const merged = Array.from(map.values());
  merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return merged;
}

function getSyncErrorMessage(error) {
  if (!error) {
    return "알 수 없는 오류";
  }
  const raw = String(error.message || error);
  if (/\(401\)|\(403\)/.test(raw)) {
    return "토큰 권한을 확인해주세요 (GitHub는 gist 권한 필요).";
  }
  if (/failed to fetch|networkerror|load failed/i.test(raw)) {
    return "네트워크 또는 CORS 설정을 확인해주세요.";
  }
  return raw;
}

function render() {
  applyDynamicLabels();
  const profile = getUserProfile();
  const combinedScopeActive = isCombinedScope(state.selectedScope);
  const activeCombinedConfig = combinedScopeActive ? getCombinedConfigByScope(state.selectedScope) : null;
  const monthlyTransactions = getCurrentMonthTransactions(state.transactions);
  const personalMonthlyTransactions = monthlyTransactions.filter((transaction) => transaction.ledger === "personal");
  const flowerMonthlyTransactions = monthlyTransactions.filter((transaction) => transaction.ledger === "flower");
  const personalCheckingMonthly = personalMonthlyTransactions.filter(
    (transaction) => transaction.kind !== "transfer" && transaction.account === "personalChecking"
  );
  const flowerCheckingMonthly = flowerMonthlyTransactions.filter(
    (transaction) => transaction.kind !== "transfer" && transaction.account === "flowerChecking"
  );
  const scopeTransactions = getScopeTransactions(monthlyTransactions, state.selectedScope);

  const personalExpenseTransactions = personalCheckingMonthly.filter((transaction) => transaction.kind === "expense");
  const personalIncomeTransactions = personalCheckingMonthly.filter((transaction) => transaction.kind === "income");
  const personalOutflowTotal = sumAmounts(personalExpenseTransactions);
  const personalInflowTotal = sumAmounts(personalIncomeTransactions);
  const personalNet = personalInflowTotal - personalOutflowTotal;

  const flowerExpenseTransactions = flowerCheckingMonthly.filter((transaction) => transaction.kind === "expense");
  const flowerIncomeTransactions = flowerCheckingMonthly.filter((transaction) => transaction.kind === "income");
  const flowerOutflow = sumAmounts(flowerExpenseTransactions);
  const flowerInflow = sumAmounts(flowerIncomeTransactions);
  const combinedMonthlyTransactions = combinedScopeActive
    ? getScopeTransactions(monthlyTransactions, state.selectedScope)
    : [];
  const combinedCheckingMonthly = combinedMonthlyTransactions.filter(
    (transaction) =>
      transaction.kind !== "transfer" && transaction.account === getPrimaryCheckingAccountForLedger(transaction.ledger)
  );
  const combinedExpenseTransactions = combinedCheckingMonthly.filter((transaction) => transaction.kind === "expense");
  const combinedIncomeTransactions = combinedCheckingMonthly.filter((transaction) => transaction.kind === "income");
  const combinedOutflowTotal = sumAmounts(combinedExpenseTransactions);
  const combinedInflowTotal = sumAmounts(combinedIncomeTransactions);
  const combinedNet = combinedInflowTotal - combinedOutflowTotal;
  const selectedCheckingAccount = getPrimaryCheckingAccountForLedger(state.selectedScope);
  const selectedLedgerMonthly = monthlyTransactions.filter((transaction) => transaction.ledger === state.selectedScope);
  const selectedCheckingMonthly = selectedLedgerMonthly.filter(
    (transaction) => transaction.kind !== "transfer" && transaction.account === selectedCheckingAccount
  );
  const selectedExpenseTransactions = selectedCheckingMonthly.filter((transaction) => transaction.kind === "expense");
  const selectedIncomeTransactions = selectedCheckingMonthly.filter((transaction) => transaction.kind === "income");
  const selectedOutflowTotal = sumAmounts(selectedExpenseTransactions);
  const selectedInflowTotal = sumAmounts(selectedIncomeTransactions);
  const selectedNet = selectedInflowTotal - selectedOutflowTotal;

  const scopeBaseForCharts =
    state.selectedScope === "accounts"
      ? []
      : combinedScopeActive
        ? combinedCheckingMonthly
        : selectedCheckingMonthly;
  const scopeExpenseTransactions = scopeBaseForCharts.filter((transaction) => transaction.kind === "expense");
  const categoryEntries = getCategoryEntries(scopeExpenseTransactions);
  if (state.selectedCategory && !categoryEntries.some(([category]) => category === state.selectedCategory)) {
    state.selectedCategory = null;
  }
  if (state.selectedScope === "accounts") {
    state.selectedCategory = null;
  } else if (!state.selectedCategory && categoryEntries.length) {
    state.selectedCategory = categoryEntries[0][0];
  }

  const txBalances = computeBalances(state.transactions);
  const balances = mergeWithOpeningBalances(txBalances, getOpeningBalances());

  applyStatCardColors();
  renderScopeCards();

  const currentScopeName =
    combinedScopeActive
      ? activeCombinedConfig?.name || profile.combinedLedgerName
      : getLedgerNameById(state.selectedScope);
  const monthlyOutflowLabelEl = document.querySelector('.stat-card[data-card="monthly-outflow"] .label');
  const monthlyInflowLabelEl = document.querySelector('.stat-card[data-card="monthly-inflow"] .label');
  const monthlyNetLabelEl = document.querySelector('.stat-card[data-card="monthly-net"] .label');
  if (monthlyOutflowLabelEl) monthlyOutflowLabelEl.textContent = `${currentScopeName} 이번 달 지출`;
  if (monthlyInflowLabelEl) monthlyInflowLabelEl.textContent = `${currentScopeName} 이번 달 입금`;
  if (monthlyNetLabelEl) monthlyNetLabelEl.textContent = `${currentScopeName} 이번 달 잔액 변화`;

  const displayOutflow =
    combinedScopeActive
      ? combinedOutflowTotal
      : state.selectedScope === "accounts"
        ? personalOutflowTotal
        : selectedOutflowTotal;
  const displayInflow =
    combinedScopeActive
      ? combinedInflowTotal
      : state.selectedScope === "accounts"
        ? personalInflowTotal
        : selectedInflowTotal;
  const displayNet =
    combinedScopeActive
      ? combinedNet
      : state.selectedScope === "accounts"
        ? personalNet
        : selectedNet;

  monthlyOutflowEl.textContent = formatMoney(displayOutflow);
  monthlyInflowEl.textContent = formatMoney(displayInflow);
  monthlyNetEl.textContent = formatSignedMoney(displayNet);
  flowerMonthlyOutflowEl.textContent = formatMoney(flowerOutflow);
  flowerMonthlyInflowEl.textContent = formatMoney(flowerInflow);
  monthlyNetEl.classList.toggle("is-positive", displayNet > 0);
  monthlyNetEl.classList.toggle("is-negative", displayNet < 0);
  monthlyNetEl.style.color = getContrastText(getCardColor("monthly-net"));

  setBalanceText(balanceCheckingEl, -getCardDueAmount(), "balance-checking");
  setBalanceText(balanceSavingsEl, balances.personalSavings, "balance-savings");
  setBalanceText(balanceCashEl, balances.personalCash, "balance-cash");
  setBalanceText(balanceFlowerEl, balances.flowerChecking, "balance-flower");
  setBalanceText(balanceFlowerCashEl, balances.flowerCash, "balance-flower-cash");

  renderScopeButtons();
  renderScopeDataPanels();
  renderAccountsBreakdown(balances);
  renderAccountsManagers();
  renderGoalPlanner();
  if (state.selectedScope !== "accounts") {
    drawTrendChart(trendCanvas, scopeBaseForCharts);
    drawDonutChart(donutCanvas, categoryEntries, state.selectedCategory);
    renderCategoryList(categoryEntries);
    renderCategoryDetail(scopeExpenseTransactions);
  }
  renderHistoryList(scopeTransactions);
  renderKeywordSettings();
  renderQuickCardOptions();
  renderQuickCategoryToggle();
  renderCategoryColorSettings();
  renderFriendShortcutSettings();
  syncProfileForm();
  if (state.currentDetailCard) {
    renderRecordsPage();
  }
}

function renderScopeCards() {
  const scopeKey = isCombinedScope(state.selectedScope) ? "combined" : state.selectedScope;
  const allowed = new Set(SCOPE_CARD_MAP[scopeKey] || SCOPE_CARD_MAP.personal);
  const cards = document.querySelectorAll(".stat-card[data-card]");
  for (const card of cards) {
    card.classList.toggle("scope-hidden", !allowed.has(card.dataset.card));
  }
}

function renderScopeDataPanels() {
  const charts = document.querySelector(".viz-grid");
  const isAccounts = state.selectedScope === "accounts";
  if (charts) {
    charts.classList.toggle("scope-hidden", isAccounts);
  }
  if (historyCardEl) {
    historyCardEl.classList.toggle("scope-hidden", isAccounts);
  }
  if (accountsBreakdownCardEl) {
    accountsBreakdownCardEl.classList.toggle("scope-hidden", !isAccounts);
  }
  if (goalPlannerCardEl) {
    goalPlannerCardEl.classList.toggle("scope-hidden", !isAccounts);
  }
}

function renderAccountsBreakdown(balances) {
  if (!accountsBreakdownGridEl) {
    return;
  }
  if (state.selectedScope !== "accounts") {
    accountsBreakdownGridEl.innerHTML = "";
    return;
  }
  void balances;

  const ledgers = getLedgerDefinitions();
  const panels = [];

  for (let index = 0; index < ledgers.length; index += 1) {
    const ledger = ledgers[index];
    const cardItems = getManagedItems(`accountCards:${ledger.id}`)
      .map((item) => ({ name: item.name, amount: roundMoney(item.amount) }))
      .filter((item) => item.amount > 0);
    const bankItems = getManagedItems(`accountBanks:${ledger.id}`)
      .map((item) => ({ name: item.name, amount: roundMoney(item.amount) }))
      .filter((item) => item.amount > 0);

    if (cardItems.length) {
      panels.push(
        renderBreakdownList({
          title: `${ledger.name} 카드`,
          empty: `등록된 ${ledger.name} 카드가 없어요.`,
          items: cardItems,
          total: cardItems.reduce((sum, item) => sum + item.amount, 0),
          color: PALETTE[index % PALETTE.length] || "#FC5F1F",
          negativePrefix: true,
        })
      );
    }

    if (bankItems.length) {
      panels.push(
        renderBreakdownList({
          title: `${ledger.name} 통장`,
          empty: `등록된 ${ledger.name} 통장이 없어요.`,
          items: bankItems,
          total: bankItems.reduce((sum, item) => sum + item.amount, 0),
          color: PALETTE[(index + 3) % PALETTE.length] || "#346D4A",
          negativePrefix: false,
        })
      );
    }
  }

  if (!panels.length) {
    accountsBreakdownGridEl.innerHTML = '<article class="accounts-breakdown-panel"><p class="empty">설정 탭에서 계정별 통장/카드를 먼저 추가해주세요.</p></article>';
    return;
  }

  accountsBreakdownGridEl.innerHTML = panels.join("");
}

function renderAccountsManagerGrid(container, options = {}) {
  if (!container) {
    return;
  }
  const { onlyWhenAccountsScope = false } = options;
  if (onlyWhenAccountsScope && state.selectedScope !== "accounts") {
    container.innerHTML = "";
    return;
  }
  const configs = getAccountManagerConfigs();
  container.innerHTML = configs.map((config) => {
    const items = getManagedItems(config.type);
    const isCardType = isCardManagerType(config.type);
    const rows = items.length
      ? items
          .map((item) => {
            const amountValue = isCardType ? (item.amount ? -item.amount : 0) : item.amount;
            return `
              <li class="accounts-manager-item" data-managed-id="${item.id}" data-manage-type="${config.type}">
                <input class="manage-name-input" type="text" data-managed-name value="${escapeHtml(item.name)}" />
                <input class="manage-amount-input" type="number" step="0.01" data-managed-amount value="${amountValue}" />
                <div class="accounts-manager-actions">
                  <button type="button" class="edit-btn" data-managed-save>저장</button>
                  <button type="button" class="delete-btn" data-managed-delete>삭제</button>
                </div>
              </li>
            `;
          })
          .join("")
      : `<li class="empty">${config.emptyMessage}</li>`;

    return `
      <article class="accounts-manager-panel" style="--manager-accent:${config.accent}">
        <h3>${escapeHtml(config.title)}</h3>
        <form class="accounts-manager-form" data-accounts-add-form data-manage-type="${config.type}" autocomplete="off">
          <input class="manage-name-input" type="text" data-manage-new-name placeholder="${escapeHtml(config.namePlaceholder)}" required />
          <input class="manage-amount-input" type="number" step="0.01" data-manage-new-amount placeholder="${escapeHtml(config.amountPlaceholder)}" required />
          <button type="submit">추가</button>
        </form>
        <ul class="accounts-manager-list">${rows}</ul>
      </article>
    `;
  }).join("");
}

function renderAccountsManagers() {
  renderAccountsManagerGrid(accountsManageGridEl, { onlyWhenAccountsScope: true });
  renderAccountsManagerGrid(settingsAccountsManageGridEl, { onlyWhenAccountsScope: false });
}

function renderBreakdownList(config) {
  const { title, empty, items, total, color, negativePrefix } = config;
  if (!items.length) {
    return `
      <article class="accounts-breakdown-panel">
        <div class="section-title-row"><h3>${escapeHtml(title)}</h3></div>
        <p class="empty">${escapeHtml(empty)}</p>
      </article>
    `;
  }

  const rows = items
    .map((item) => {
      const ratio = total > 0 ? Math.max(4, Math.round((item.amount / total) * 100)) : 0;
      const valueText = negativePrefix ? `-${formatMoney(item.amount)}` : formatMoney(item.amount);
      return `
        <li class="accounts-breakdown-item">
          <div class="accounts-breakdown-head">
            <span>${escapeHtml(item.name)}</span>
            <strong>${valueText}</strong>
          </div>
          <div class="accounts-breakdown-bar">
            <span style="width:${ratio}%;background:${color}"></span>
          </div>
        </li>
      `;
    })
    .join("");

  const totalText = negativePrefix ? `-${formatMoney(total)}` : formatMoney(total);
  return `
    <article class="accounts-breakdown-panel">
      <div class="section-title-row">
        <h3>${escapeHtml(title)}</h3>
        <p class="hint">합계 ${totalText}</p>
      </div>
      <ul class="accounts-breakdown-list">${rows}</ul>
    </article>
  `;
}

function applyStatCardColors() {
  const cards = document.querySelectorAll(".stat-card[data-card]");
  for (const card of cards) {
    const cardKey = card.dataset.card;
    const color = getCardColor(cardKey);
    const text = getContrastText(color);
    card.style.background = color;
    card.style.color = text;
  }
}

function setBalanceText(element, value, cardKey) {
  if (!element) {
    return;
  }
  element.textContent = formatSignedMoney(value);
  element.classList.toggle("balance-positive", value > 0);
  element.classList.toggle("balance-negative", value < 0);
  element.style.color = getContrastText(getCardColor(cardKey));
}

function renderScopeButtons() {
  const buttons = scopeButtons.querySelectorAll("button[data-scope]");
  for (const button of buttons) {
    button.classList.toggle("active", button.dataset.scope === state.selectedScope);
  }
}

function renderCategoryList(categoryEntries) {
  if (!categoryEntries.length) {
    categoryListEl.innerHTML = '<p class="empty">이번 달 지출 카테고리가 아직 없어요.</p>';
    return;
  }

  const total = categoryEntries.reduce((sum, entry) => sum + entry[1], 0);
  categoryListEl.innerHTML = categoryEntries
    .map(([category, amount]) => {
      const color = getCategoryColor(category);
      const percent = total ? Math.round((amount / total) * 100) : 0;
      const activeClass = state.selectedCategory === category ? "active" : "";
      return `
        <button type="button" class="category-btn ${activeClass}" data-category="${encodeURIComponent(category)}">
          <span><span class="dot" style="background:${color}"></span>${escapeHtml(category)}</span>
          <span>${formatMoney(amount)} · ${percent}%</span>
        </button>
      `;
    })
    .join("");
}

function renderCategoryDetail(expenseTransactions) {
  if (!state.selectedCategory) {
    detailTitleEl.textContent = "카테고리 상세";
    detailSummaryEl.textContent = "카테고리를 선택하면 소비 패턴을 보여줘요.";
    if (detailMerchantDateEl) {
      detailMerchantDateEl.textContent = "";
    }
    detailMerchantsEl.innerHTML = "";
    drawLineChart(detailCanvas, buildDailyArray([], getToday().getDate()), "#9F7346");
    return;
  }

  const categoryTransactions = expenseTransactions.filter(
    (transaction) => transaction.category === state.selectedCategory
  );

  const total = sumAmounts(categoryTransactions);
  const average = categoryTransactions.length ? total / categoryTransactions.length : 0;

  detailTitleEl.textContent = `${state.selectedCategory} 패턴`;
  detailSummaryEl.textContent = `총 ${formatMoney(total)} · ${categoryTransactions.length}건 · 평균 ${formatMoney(average)}`;

  drawLineChart(
    detailCanvas,
    buildDailyArray(categoryTransactions, getToday().getDate()),
    getCategoryColor(state.selectedCategory)
  );

  const merchantTotals = new Map();
  const merchantDates = new Map();
  for (const transaction of categoryTransactions) {
    merchantTotals.set(transaction.merchant, (merchantTotals.get(transaction.merchant) || 0) + transaction.amount);
    if (!merchantDates.has(transaction.merchant)) {
      merchantDates.set(transaction.merchant, transaction.date);
    }
  }

  const merchantEntries = Array.from(merchantTotals.entries()).sort((a, b) => b[1] - a[1]).slice(0, 4);
  if (detailMerchantDateEl) {
    detailMerchantDateEl.textContent = "아래 항목을 클릭하면 날짜가 보이고, 오른쪽 카테고리로 드래그해서 이동할 수 있어요.";
  }
  detailMerchantsEl.innerHTML = merchantEntries.length
    ? merchantEntries
        .map(([merchant, amount]) => {
          const date = merchantDates.get(merchant) ? formatDate(merchantDates.get(merchant)) : "";
          return `<button type="button" class="chip drag-chip" draggable="true" data-drag-merchant="${encodeURIComponent(
            merchant
          )}" data-drag-category="${encodeURIComponent(state.selectedCategory)}" data-drag-date="${escapeHtml(
            date
          )}">${escapeHtml(merchant)} <strong>${formatMoney(amount)}</strong></button>`;
        })
        .join("")
    : '<p class="empty">선택한 카테고리 데이터가 없어요.</p>';
}

function renderGoalPlanner() {
  if (!goalListEl) {
    return;
  }
  if (state.selectedScope !== "accounts") {
    return;
  }

  const goals = normalizeSavingGoals(state.settings.savingGoals);
  state.settings.savingGoals = goals;

  if (!goals.length) {
    goalListEl.innerHTML = `
      <li class="empty">
        <img src="assets/chars/yellow.svg" alt="" class="goal-char" />
        목표를 추가하면 기간(년) 기준으로 연/월/이번달 남은 금액을 자동 계산해줘요.
      </li>
    `;
    return;
  }

  goalListEl.innerHTML = goals
    .map((goal) => {
      const plan = buildSavingPlan(goal);
      const typeOptions = Object.entries(GOAL_TYPE_LABEL)
        .map(([value, label]) => `<option value="${value}" ${goal.type === value ? "selected" : ""}>${label}</option>`)
        .join("");

      return `
        <li class="goal-item" data-goal-id="${goal.id}">
          <div class="goal-row">
            <img class="goal-char" src="${GOAL_TYPE_CHARACTER[goal.type] || GOAL_TYPE_CHARACTER.other}" alt="" />
            <div>
              <p class="goal-name">${escapeHtml(goal.name)}</p>
              <p class="goal-type">${escapeHtml(GOAL_TYPE_LABEL[goal.type] || GOAL_TYPE_LABEL.other)} · ${goal.years}년 목표</p>
            </div>
            <div class="goal-actions">
              <button type="button" class="edit-btn" data-goal-save>저장</button>
              <button type="button" class="delete-btn" data-goal-delete>삭제</button>
            </div>
          </div>

          <div class="goal-grid">
            <label>목표 이름<input type="text" data-goal-name value="${escapeHtml(goal.name)}" /></label>
            <label>목표 종류
              <select data-goal-type>
                ${typeOptions}
              </select>
            </label>
            <label>목표 금액<input type="number" data-goal-target min="0.01" step="0.01" value="${goal.targetAmount}" /></label>
            <label>목표 기간(년)<input type="number" data-goal-years min="1" step="1" value="${goal.years}" /></label>
            <label>이미 모은 금액<input type="number" data-goal-saved min="0" step="0.01" value="${goal.savedAmount}" /></label>
            <label>이번달 모은 금액<input type="number" data-goal-monthly-saved min="0" step="0.01" value="${goal.monthlySavedAmount}" /></label>
          </div>

          <div class="goal-stats">
            <div class="goal-stat">
              <p class="goal-stat-title">${goal.years}년 기준 남은 금액</p>
              <p class="goal-stat-value">${formatMoney(plan.remainingAmount)}</p>
            </div>
            <div class="goal-stat">
              <p class="goal-stat-title">1년에 모아야 할 금액</p>
              <p class="goal-stat-value">${formatMoney(plan.annualNeed)}</p>
            </div>
            <div class="goal-stat">
              <p class="goal-stat-title">한 달에 모아야 할 금액</p>
              <p class="goal-stat-value">${formatMoney(plan.monthlyNeed)}</p>
            </div>
            <div class="goal-stat">
              <p class="goal-stat-title">이번달 더 모아야 할 금액</p>
              <p class="goal-stat-value">${formatMoney(plan.monthlyLeft)}</p>
            </div>
          </div>

          <div class="goal-progress-wrap">
            <div class="goal-progress-line">
              <div class="goal-progress-head">
                <span>전체 진행률</span>
                <strong>${plan.totalProgressPercent.toFixed(0)}%</strong>
              </div>
              <div class="goal-progress-track">
                <div class="goal-progress-fill total" style="width:${plan.totalProgressPercent.toFixed(2)}%"></div>
              </div>
            </div>
            <div class="goal-progress-line">
              <div class="goal-progress-head">
                <span>이번달 목표 달성률</span>
                <strong>${plan.monthlyProgressPercent.toFixed(0)}%</strong>
              </div>
              <div class="goal-progress-track">
                <div class="goal-progress-fill month" style="width:${plan.monthlyProgressPercent.toFixed(2)}%"></div>
              </div>
            </div>
            <p class="hint">이번달 목표 기준 남은 비율: ${plan.monthlyRemainPercent.toFixed(0)}%</p>
          </div>
        </li>
      `;
    })
    .join("");
}

function buildSavingPlan(goal) {
  const targetAmount = normalizeAmount(goal.targetAmount);
  const years = normalizeGoalYears(goal.years);
  const savedAmount = roundMoney(Math.max(0, Number(goal.savedAmount) || 0));
  const monthlySavedAmount = roundMoney(Math.max(0, Number(goal.monthlySavedAmount) || 0));
  const cappedSaved = Math.min(savedAmount, targetAmount);
  const remainingAmount = roundMoney(Math.max(0, targetAmount - cappedSaved));
  const rawAnnualNeed = remainingAmount / years;
  const annualNeed = roundMoney(rawAnnualNeed);
  const rawMonthlyNeed = remainingAmount / (years * 12);
  const monthlyNeed = roundMoney(rawMonthlyNeed);
  const monthlyLeft = roundMoney(Math.max(0, rawMonthlyNeed - monthlySavedAmount));
  const totalProgressPercent = targetAmount ? Math.min(100, (cappedSaved / targetAmount) * 100) : 0;
  const monthlyProgressPercent =
    rawMonthlyNeed > 0 ? Math.min(100, (monthlySavedAmount / rawMonthlyNeed) * 100) : remainingAmount === 0 ? 100 : 0;
  const monthlyRemainPercent =
    rawMonthlyNeed > 0 ? Math.max(0, 100 - monthlyProgressPercent) : remainingAmount === 0 ? 0 : 100;

  return {
    remainingAmount,
    annualNeed,
    monthlyNeed,
    monthlyLeft,
    totalProgressPercent,
    monthlyProgressPercent,
    monthlyRemainPercent,
  };
}

function renderHistoryList(scopeTransactions) {
  if (!scopeTransactions.length) {
    historyListEl.innerHTML = '<li class="empty">이번 달 기록이 아직 없어요.</li>';
    return;
  }

  const sorted = [...scopeTransactions].sort((a, b) => new Date(b.date) - new Date(a.date));

  historyListEl.innerHTML = sorted
    .map((transaction) => {
      const kindColor = KIND_COLOR[transaction.kind] || "#9F7346";
      const kindTextColor = getContrastText(kindColor);
      const amountText = formatTransactionAmount(transaction);
      const subText = buildTransactionSubText(transaction);

      return `
        <li class="history-item">
          <div class="history-top">
            <span class="history-date">${formatDate(transaction.date)}</span>
            <span class="badge" style="background:${kindColor};color:${kindTextColor}">${KIND_LABEL[transaction.kind]}</span>
          </div>
          <span class="history-merchant">${escapeHtml(transaction.merchant)}</span>
          <span class="history-sub">${subText}</span>
          <span class="history-amount is-${transaction.kind}">${amountText}</span>
          <div class="history-actions">
            <button class="edit-btn" type="button" data-edit-id="${transaction.id}">수정</button>
            <button class="delete-btn" type="button" data-delete-id="${transaction.id}">삭제</button>
          </div>
        </li>
      `;
    })
    .join("");
}

function openRecordsPage(cardKey) {
  state.currentDetailCard = cardKey;
  recordsPageEl.classList.add("open");
  recordsPageEl.setAttribute("aria-hidden", "false");
  renderRecordsPage();
  recordsPageEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeRecordsPage() {
  state.currentDetailCard = null;
  recordsPageEl.classList.remove("open");
  recordsPageEl.setAttribute("aria-hidden", "true");
  if (recordsColorBoxEl) {
    recordsColorBoxEl.hidden = true;
  }
  if (recordsManagerEl) {
    recordsManagerEl.hidden = true;
  }
  if (recordsTransferBoxEl) {
    recordsTransferBoxEl.hidden = true;
  }
  closeEditModal();
}

function renderRecordsPage() {
  if (!state.currentDetailCard) {
    return;
  }

  const view = getCardDetailView(state.currentDetailCard);
  const monthKeys = getAvailableMonthKeys(view.allTransactions);
  const currentMonth = getMonthKey(getToday());
  const preferredMonth = state.recordsMonthByCard[state.currentDetailCard];
  const selectedMonth =
    preferredMonth && monthKeys.includes(preferredMonth)
      ? preferredMonth
      : monthKeys[0] || currentMonth;
  const monthTransactions = view.allTransactions.filter((transaction) => getMonthKey(transaction.date) === selectedMonth);
  state.recordsMonthByCard = {
    ...state.recordsMonthByCard,
    [state.currentDetailCard]: selectedMonth,
  };

  recordsTitleEl.textContent = view.title;
  recordsSubtitleEl.textContent = `${view.subtitle} · ${formatMonthLabel(selectedMonth)}`;
  renderRecordsMonthSelect(monthKeys, selectedMonth);
  renderRecordsColorControl(state.currentDetailCard);
  renderRecordsManager(state.currentDetailCard);
  renderRecordsTransferBox(state.currentDetailCard);
  renderRecordsSummary(monthTransactions, selectedMonth, state.currentDetailCard);

  if (!monthTransactions.length) {
    recordsListEl.innerHTML = '<li class="empty">표시할 내역이 아직 없어요.</li>';
    return;
  }

  const sorted = [...monthTransactions].sort((a, b) => new Date(b.date) - new Date(a.date));
  recordsListEl.innerHTML = sorted
    .map((transaction) => {
      const kindColor = KIND_COLOR[transaction.kind] || "#9F7346";
      const kindTextColor = getContrastText(kindColor);
      const amountText = formatTransactionAmount(transaction);
      const subText = buildTransactionSubText(transaction);

      return `
        <li class="records-item">
          <span class="badge" style="background:${kindColor};color:${kindTextColor}">${KIND_LABEL[transaction.kind]}</span>
          <div class="record-main">
            <strong>${formatDate(transaction.date)} · ${escapeHtml(transaction.merchant)}</strong>
            <span class="record-sub">${subText}</span>
          </div>
          <span class="history-amount is-${transaction.kind}">${amountText}</span>
          <div class="record-actions">
            <button type="button" class="edit-btn" data-edit-id="${transaction.id}">수정</button>
            <button type="button" class="delete-btn" data-delete-id="${transaction.id}">삭제</button>
          </div>
        </li>
      `;
    })
    .join("");
}

function renderRecordsMonthSelect(monthKeys, selectedMonth) {
  if (!recordsMonthSelectEl) {
    return;
  }
  const keys = monthKeys.length ? monthKeys : [selectedMonth || getMonthKey(getToday())];
  recordsMonthSelectEl.innerHTML = keys
    .map((key) => `<option value="${escapeHtml(key)}">${escapeHtml(formatMonthLabel(key))}</option>`)
    .join("");
  recordsMonthSelectEl.value = keys.includes(selectedMonth) ? selectedMonth : keys[0];
}

function renderRecordsSummary(transactions, selectedMonth, cardKey) {
  if (!recordsSummaryMetricsEl || !recordsSummaryCategoriesEl) {
    return;
  }

  const expense = sumAmounts(transactions.filter((transaction) => transaction.kind === "expense"));
  const income = sumAmounts(transactions.filter((transaction) => transaction.kind === "income"));
  const net = roundMoney(income - expense);

  recordsSummaryMetricsEl.innerHTML = `
    <article class="records-summary-metric">
      <span>지출</span>
      <strong class="is-expense">${formatMoney(expense)}</strong>
    </article>
    <article class="records-summary-metric">
      <span>입금</span>
      <strong class="is-income">${formatMoney(income)}</strong>
    </article>
    <article class="records-summary-metric">
      <span>변화</span>
      <strong class="${net >= 0 ? "is-income" : "is-expense"}">${formatSignedMoney(net)}</strong>
    </article>
  `;

  renderRecordsMonthPattern(transactions, selectedMonth, cardKey);

  const categoryEntries = getCategoryEntries(transactions.filter((transaction) => transaction.kind === "expense"));
  if (!categoryEntries.length) {
    recordsSummaryCategoriesEl.innerHTML = '<p class="empty">선택한 월의 카테고리 지출이 없어요.</p>';
    return;
  }

  const categoryTotal = categoryEntries.reduce((sum, entry) => sum + entry[1], 0);
  recordsSummaryCategoriesEl.innerHTML = categoryEntries
    .slice(0, 5)
    .map(([category, amount]) => {
      const percent = categoryTotal ? Math.round((amount / categoryTotal) * 100) : 0;
      return `
        <article class="records-summary-category">
          <div class="records-summary-category-head">
            <strong>${escapeHtml(category)}</strong>
            <span>${formatMoney(amount)} · ${percent}%</span>
          </div>
          <div class="records-summary-category-bar">
            <span style="width:${percent}%;background:${getCategoryColor(category)}"></span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderRecordsMonthPattern(transactions, selectedMonth, cardKey) {
  if (!recordsSummaryCanvasEl) {
    return;
  }
  const [yearValue, monthValue] = String(selectedMonth || "").split("-").map((value) => Number(value));
  const year = Number.isFinite(yearValue) && yearValue > 0 ? yearValue : getToday().getFullYear();
  const month = Number.isFinite(monthValue) && monthValue > 0 ? monthValue : getToday().getMonth() + 1;
  const dayCount = new Date(year, month, 0).getDate();
  const expenseValues = Array.from({ length: dayCount }, () => 0);
  const incomeValues = Array.from({ length: dayCount }, () => 0);

  for (const transaction of transactions) {
    const date = new Date(transaction.date);
    const day = date.getDate();
    if (day < 1 || day > dayCount) {
      continue;
    }
    const index = day - 1;
    const amount = Number(transaction.amount) || 0;
    if (transaction.kind === "expense") {
      expenseValues[index] += amount;
    } else if (transaction.kind === "income") {
      incomeValues[index] += amount;
    } else {
      expenseValues[index] += amount;
    }
  }

  const showDual = cardKey === "monthly-net";
  if (recordsSummaryChartTitleEl) {
    recordsSummaryChartTitleEl.textContent = showDual
      ? "선택한 월 일별 입금/지출 추이 (파랑: 지출 · 초록: 입금)"
      : "선택한 월 일별 금액 추이";
  }
  if (showDual) {
    drawDualLineChart(recordsSummaryCanvasEl, expenseValues, incomeValues, "#106AA9", "#346D4A");
    return;
  }

  const values = expenseValues.map((value, index) => value + incomeValues[index]);
  drawLineChart(recordsSummaryCanvasEl, values, "#106AA9");
}

function renderRecordsColorControl(cardKey) {
  if (!recordsColorBoxEl || !recordsColorSwatchesEl) {
    return;
  }

  recordsColorBoxEl.hidden = false;
  const currentColor = getCardColor(cardKey);
  const swatches = buildPaletteOptions(currentColor)
    .map(
      (color) => `<button
        type="button"
        class="color-swatch-btn ${color === currentColor ? "active" : ""}"
        data-record-card-color="${color}"
        style="background:${color}"
        aria-label="카드 색상 ${color.toUpperCase()}"
        title="${color.toUpperCase()}"
      ></button>`
    )
    .join("");

  recordsColorSwatchesEl.innerHTML = swatches;
}

function renderRecordsManager(cardKey) {
  if (
    !recordsManagerEl ||
    !recordsManagerTitleEl ||
    !recordsManagerNameEl ||
    !recordsManagerAmountEl ||
    !recordsManagerListEl
  ) {
    return;
  }
  const config = RECORD_MANAGER_CONFIG[cardKey];
  if (!config) {
    recordsManagerEl.hidden = true;
    return;
  }

  recordsManagerEl.hidden = false;
  recordsManagerTitleEl.textContent = config.title;
  recordsManagerNameEl.placeholder = config.namePlaceholder;
  recordsManagerAmountEl.placeholder = config.amountPlaceholder;
  if (config.type === "cardDebts") {
    recordsManagerAmountEl.removeAttribute("min");
  } else {
    recordsManagerAmountEl.setAttribute("min", "0.01");
  }

  const list = getManagedItems(config.type);
  if (!list.length) {
    recordsManagerListEl.innerHTML = `<li class="empty">${config.emptyMessage}</li>`;
    return;
  }

  recordsManagerListEl.innerHTML = list
    .map((item) => {
      const amountValue = config.type === "cardDebts" ? (item.amount ? -item.amount : 0) : item.amount;
      const amountAttrs =
        config.type === "cardDebts" ? 'type="number" step="0.01"' : 'type="number" min="0.01" step="0.01"';
      return `
        <li class="manager-item" data-managed-id="${item.id}">
          <input type="text" data-managed-name value="${escapeHtml(item.name)}" />
          <input ${amountAttrs} data-managed-amount value="${amountValue}" />
          <button type="button" class="edit-btn" data-managed-save>저장</button>
          <button type="button" class="delete-btn" data-managed-delete>삭제</button>
        </li>
      `;
    })
    .join("");
}

function renderRecordsTransferBox(cardKey) {
  if (!recordsTransferBoxEl || !recordsTransferFromEl || !recordsTransferToEl) {
    return;
  }

  const isAccountCard = ["balance-checking", "balance-savings"].includes(cardKey);
  recordsTransferBoxEl.hidden = !isAccountCard;
  if (!isAccountCard) {
    return;
  }

  const preferredTarget = cardKey === "balance-checking" ? getDefaultCardTransferTarget() : "personalChecking";
  populateRecordsTransferTargets(preferredTarget);
  recordsTransferFromEl.value = "personalSavings";
}

function populateRecordsTransferTargets(preferredTarget) {
  if (!recordsTransferToEl) {
    return;
  }
  const previous = preferredTarget || recordsTransferToEl.value || "personalChecking";
  const options = buildTransferTargetOptions();
  recordsTransferToEl.innerHTML = options
    .map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`)
    .join("");
  const valid = options.some((option) => option.value === previous);
  recordsTransferToEl.value = valid ? previous : options[0]?.value || "personalChecking";
}

function getDefaultCardTransferTarget() {
  const cards = getManagedItems("cardDebts");
  if (!cards.length) {
    return "personalChecking";
  }
  return toCardTargetValue(cards[0].id);
}

function getCardDetailView(cardKey) {
  const profile = getUserProfile();
  const personalLabel = profile.personalLedgerName;
  const flowerLabel = profile.flowerLedgerName;
  const combinedScopeActive = isCombinedScope(state.selectedScope);
  const activeCombinedConfig = combinedScopeActive ? getCombinedConfigByScope(state.selectedScope) : null;
  const combinedLabel = activeCombinedConfig?.name || profile.combinedLedgerName;
  const isAccountsScope = state.selectedScope === "accounts";
  const selectedScopeLabel = combinedScopeActive ? combinedLabel : getLedgerNameById(state.selectedScope);
  const allTransactions = [...state.transactions];
  const personalAll = allTransactions.filter((transaction) => transaction.ledger === "personal");
  const flowerAll = allTransactions.filter((transaction) => transaction.ledger === "flower");
  const personalCheckingAll = personalAll.filter(
    (transaction) => transaction.kind !== "transfer" && transaction.account === "personalChecking"
  );
  const flowerCheckingAll = flowerAll.filter(
    (transaction) => transaction.kind !== "transfer" && transaction.account === "flowerChecking"
  );
  const combinedAll = combinedScopeActive ? getScopeTransactions(allTransactions, state.selectedScope) : [];
  const combinedCheckingAll = combinedAll.filter(
    (transaction) =>
      transaction.kind !== "transfer" && transaction.account === getPrimaryCheckingAccountForLedger(transaction.ledger)
  );
  const selectedCheckingAll =
    combinedScopeActive || isAccountsScope
      ? combinedScopeActive
        ? combinedCheckingAll
        : personalCheckingAll
      : allTransactions.filter(
          (transaction) =>
            transaction.ledger === state.selectedScope &&
            transaction.kind !== "transfer" &&
            transaction.account === getPrimaryCheckingAccountForLedger(state.selectedScope)
        );

  const cases = {
    "monthly-outflow": {
      title: `${selectedScopeLabel} 지출 내역`,
      subtitle: `${selectedScopeLabel} 소비통장 기준`,
      allTransactions: selectedCheckingAll.filter((transaction) => transaction.kind === "expense"),
    },
    "monthly-inflow": {
      title: `${selectedScopeLabel} 입금 내역`,
      subtitle: `${selectedScopeLabel} 소비통장 기준`,
      allTransactions: selectedCheckingAll.filter((transaction) => transaction.kind === "income"),
    },
    "monthly-net": {
      title: `${selectedScopeLabel} 잔액 변화 내역`,
      subtitle: `${selectedScopeLabel} 소비통장 기준 · 입금/지출`,
      allTransactions: selectedCheckingAll,
    },
    "balance-checking": {
      title: "Credit Card 내역",
      subtitle: `남은 Credit Card ${formatMoney(getCardDueAmount())} · 카드 사용/결제`,
      allTransactions: getCardLinkedTransactions(personalAll),
    },
    "balance-savings": {
      title: `${personalLabel} 세이브통장 내역`,
      subtitle: `${personalLabel} 장부와 동기화`,
      allTransactions: getAccountTransactions(personalAll, "personalSavings"),
    },
    "balance-cash": {
      title: `${personalLabel} 현금 내역`,
      subtitle: `${personalLabel} 장부와 동기화`,
      allTransactions: getAccountTransactions(personalAll, "personalCash"),
    },
    "balance-flower": {
      title: `${flowerLabel} 소비통장 내역`,
      subtitle: `${flowerLabel} 장부와 동기화`,
      allTransactions: getAccountTransactions(flowerAll, "flowerChecking"),
    },
    "balance-flower-cash": {
      title: `${flowerLabel} 현금 내역`,
      subtitle: `${flowerLabel} 장부와 동기화`,
      allTransactions: getAccountTransactions(flowerAll, "flowerCash"),
    },
    "flower-monthly-outflow": {
      title: `${flowerLabel} 지출 내역`,
      subtitle: `${flowerLabel} 소비통장 기준`,
      allTransactions: flowerCheckingAll.filter((transaction) => transaction.kind === "expense"),
    },
    "flower-monthly-inflow": {
      title: `${flowerLabel} 입금 내역`,
      subtitle: `${flowerLabel} 소비통장 기준`,
      allTransactions: flowerCheckingAll.filter((transaction) => transaction.kind === "income"),
    },
    "card-due": {
      title: "미납 카드/미납금 정리 내역",
      subtitle: `남은 미납 ${formatMoney(getCardDueAmount())}`,
      allTransactions: allTransactions.filter((transaction) => isCardDueTransaction(transaction)),
    },
  };

  return (
    cases[cardKey] || {
      title: "내역 페이지",
      subtitle: "선택한 카드의 내역",
      allTransactions: [],
    }
  );
}

function getAvailableMonthKeys(transactions) {
  if (!transactions.length) {
    return [];
  }
  const set = new Set();
  for (const transaction of transactions) {
    set.add(getMonthKey(transaction.date));
  }
  return Array.from(set).sort((a, b) => b.localeCompare(a));
}

function isCardDueTransaction(transaction) {
  if (!transaction || transaction.kind !== "expense" || transaction.ledger !== "personal") {
    return false;
  }

  const normalized = normalizeText(
    `${transaction.merchant || ""} ${transaction.category || ""} ${transaction.rawInput || ""}`
  );
  return (
    transaction.category === "Card Bill Payment" ||
    containsAny(normalized, state.settings.cardDueKeywords || DEFAULT_SETTINGS.cardDueKeywords)
  );
}

function getAccountTransactions(transactions, account) {
  return transactions.filter((transaction) => {
    if (transaction.kind === "transfer") {
      return transaction.fromAccount === account || transaction.toAccount === account;
    }
    return transaction.account === account;
  });
}

function formatTransactionAmount(transaction) {
  if (transaction.kind === "expense") {
    return `-${formatMoney(transaction.amount)}`;
  }
  if (transaction.kind === "income") {
    return `+${formatMoney(transaction.amount)}`;
  }
  if (isCardPaymentTransfer(transaction)) {
    return `-${formatMoney(transaction.amount)}`;
  }
  return `↔ ${formatMoney(transaction.amount)}`;
}

function buildTransactionSubText(transaction) {
  if (transaction.kind === "transfer") {
    const fromLabel = escapeHtml(ACCOUNT_LABEL[transaction.fromAccount] || "출금계좌");
    const cardId = getTransactionCardId(transaction);
    const cardName = cardId ? getCardNameById(cardId) || "등록해제 카드" : "";
    if (isCardPaymentTransfer(transaction)) {
      return `${fromLabel} → ${escapeHtml(cardName || "카드")} 결제`;
    }
    const toLabel = escapeHtml(ACCOUNT_LABEL[transaction.toAccount] || "입금계좌");
    return `${fromLabel} → ${toLabel}`;
  }

  const accountLabel = escapeHtml(ACCOUNT_LABEL[transaction.account] || "계좌");
  const category = escapeHtml(transaction.category || "Other");
  const cardName = transaction.cardId ? getCardNameById(transaction.cardId) || "등록해제 카드" : "";
  if (cardName) {
    return `${accountLabel} · ${category} · 카드 ${escapeHtml(cardName)}`;
  }
  return `${accountLabel} · ${category}`;
}

function getCardLinkedTransactions(transactions) {
  return transactions.filter((transaction) => {
    if (transaction.kind === "transfer") {
      return isCardPaymentTransfer(transaction);
    }
    return transaction.ledger === "personal" && Boolean(transaction.cardId);
  });
}

function openEditModal(transactionId) {
  const transaction = state.transactions.find((item) => item.id === transactionId);
  if (!transaction) {
    return;
  }

  state.currentEditId = transactionId;
  editIdEl.value = transaction.id;
  editDateEl.value = toInputDate(transaction.date);
  editAmountEl.value = String(transaction.amount);
  editMerchantEl.value = transaction.merchant;
  editCategoryCustomEl.value = "";
  editKindEl.value = transaction.kind;
  editLedgerEl.value = transaction.ledger;
  editFromEl.value = transaction.fromAccount || "personalChecking";
  editToEl.value = transaction.toAccount || "personalSavings";

  syncEditFormMode();
  setEditCategoryValue(transaction.category);
  if (transaction.kind !== "transfer") {
    editAccountEl.value = transaction.account || "personalChecking";
    syncEditAccountToggleSelected();
    populateEditCardOptions(transaction.ledger, transaction.account);
    const selectedCard = getCardNameById(transaction.cardId) ? transaction.cardId : "auto";
    if (editCardEl) {
      editCardEl.value = selectedCard;
    }
  } else {
    const options = Array.from(editToEl.options).map((option) => option.value);
    const nextTo = options.includes(transaction.toAccount) ? transaction.toAccount : options[0] || "personalSavings";
    editToEl.value = nextTo;
  }

  editModalEl.hidden = false;
}

function closeEditModal() {
  state.currentEditId = null;
  editModalEl.hidden = true;
}

function handleEditKindChange() {
  syncEditFormMode();
}

function handleEditLedgerChange() {
  syncEditFormMode();
}

function renderEditKindToggle() {
  if (!editKindToggleEl || !editKindEl) {
    return;
  }
  const options = [
    { value: "expense", label: "지출" },
    { value: "income", label: "입금" },
    { value: "transfer", label: "이체" },
  ];
  const selected = editKindEl.value;
  editKindToggleEl.innerHTML = options
    .map(
      (option) =>
        `<button type="button" class="account-toggle-btn ${selected === option.value ? "active" : ""}" data-edit-kind="${option.value}">${escapeHtml(
          option.label
        )}</button>`
    )
    .join("");
}

function renderEditLedgerToggle(disabled = false) {
  if (!editLedgerToggleEl || !editLedgerEl) {
    return;
  }
  const options = getLedgerDefinitions().map((ledger) => ({ value: ledger.id, label: ledger.name }));
  const selected = editLedgerEl.value;
  editLedgerToggleEl.innerHTML = options
    .map(
      (option) =>
        `<button type="button" class="account-toggle-btn ${selected === option.value ? "active" : ""}" data-edit-ledger="${option.value}" ${
          disabled ? "disabled" : ""
        }>${escapeHtml(option.label)}</button>`
    )
    .join("");
}

function handleEditKindToggle(event) {
  const button = event.target.closest("button[data-edit-kind]");
  if (!button || !editKindEl) {
    return;
  }
  const value = String(button.dataset.editKind || "");
  if (!["expense", "income", "transfer"].includes(value)) {
    return;
  }
  editKindEl.value = value;
  syncEditFormMode();
}

function handleEditLedgerToggle(event) {
  const button = event.target.closest("button[data-edit-ledger]");
  if (!button || !editLedgerEl || button.disabled) {
    return;
  }
  const value = String(button.dataset.editLedger || "");
  const validLedgers = new Set(getLedgerDefinitions().map((ledger) => ledger.id));
  if (!validLedgers.has(value)) {
    return;
  }
  editLedgerEl.value = value;
  syncEditFormMode();
}

function handleEditToggleDelegated(event) {
  const kindButton = event.target.closest("button[data-edit-kind]");
  if (kindButton) {
    handleEditKindToggle(event);
    return;
  }
  const ledgerButton = event.target.closest("button[data-edit-ledger]");
  if (ledgerButton) {
    handleEditLedgerToggle(event);
  }
}

function queueApplyEditCategoryOptionStyles() {
  window.requestAnimationFrame(() => {
    applyEditCategoryOptionStyles();
  });
}

function syncEditFormMode() {
  const kind = editKindEl.value;
  const ledger = editLedgerEl.value;
  if (editKindWrapEl) {
    editKindWrapEl.hidden = false;
  }
  if (editLedgerWrapEl) {
    editLedgerWrapEl.hidden = false;
  }

  if (kind === "transfer") {
    editLedgerEl.value = "personal";
    editAccountWrapEl.hidden = true;
    if (editCardWrapEl) {
      editCardWrapEl.hidden = false;
    }
    editFromWrapEl.hidden = false;
    editToWrapEl.hidden = false;
    if (editTransferHintEl) {
      editTransferHintEl.hidden = false;
    }
    if (editMerchantWrapEl) {
      editMerchantWrapEl.hidden = true;
    }
    if (editMerchantEl) {
      editMerchantEl.required = false;
    }
    if (editCategoryWrapEl) {
      editCategoryWrapEl.hidden = true;
    }
    editCategoryCustomWrapEl.hidden = true;
    populateEditTransferTargetOptions();
    populateEditCategoryOptions({ kind, ledger: "personal" });
    editCategoryEl.value = "Account Transfer";
    renderEditKindToggle();
    renderEditLedgerToggle(true);
    applyEditCategoryOptionStyles();
    return;
  }

  editAccountWrapEl.hidden = false;
  if (editCardWrapEl) {
    editCardWrapEl.hidden = false;
  }
  editFromWrapEl.hidden = true;
  editToWrapEl.hidden = true;
  if (editTransferHintEl) {
    editTransferHintEl.hidden = true;
  }
  if (editMerchantWrapEl) {
    editMerchantWrapEl.hidden = false;
  }
  if (editMerchantEl) {
    editMerchantEl.required = true;
  }
  if (editCategoryWrapEl) {
    editCategoryWrapEl.hidden = false;
  }
  editCategoryCustomWrapEl.hidden = false;
  populateEditCategoryOptions({ kind, ledger });
  populateEditAccountOptions(ledger);
  populateEditCardOptions(ledger, editAccountEl.value);
  renderEditKindToggle();
  renderEditLedgerToggle(false);
  applyEditCategoryOptionStyles();
}

function populateEditAccountOptions(ledger) {
  const options =
    ledger === "flower"
      ? [
          { value: "flowerChecking", label: ACCOUNT_LABEL.flowerChecking },
          { value: "flowerCash", label: ACCOUNT_LABEL.flowerCash },
        ]
      : [
          { value: "personalChecking", label: ACCOUNT_LABEL.personalChecking },
          { value: "personalSavings", label: ACCOUNT_LABEL.personalSavings },
          { value: "personalCash", label: ACCOUNT_LABEL.personalCash },
        ];

  const previous = editAccountEl.value;
  editAccountEl.innerHTML = options
    .map((option) => `<option value="${option.value}">${escapeHtml(option.label)}</option>`)
    .join("");

  const matched = options.some((option) => option.value === previous) ? previous : options[0].value;
  editAccountEl.value = matched;
  renderEditAccountToggle(options);
  syncEditAccountToggleSelected();
}

function populateEditTransferTargetOptions() {
  if (!editToEl) {
    return;
  }
  const previous = editToEl.value || "personalSavings";
  const options = buildTransferTargetOptions();
  editToEl.innerHTML = options
    .map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`)
    .join("");
  const valid = options.some((option) => option.value === previous);
  editToEl.value = valid ? previous : options[0]?.value || "personalSavings";
}

function populateEditCardOptions(ledger, account) {
  if (!editCardEl) {
    return;
  }
  const previous = String(editCardEl.value || "auto");
  const disabled = String(account || "").toLowerCase().includes("cash");
  const cards = getManagedCardsForLedger(ledger);
  const options = ['<option value="auto">카드 미선택</option>'];
  for (const card of cards) {
    options.push(
      `<option value="${escapeHtml(card.id)}">${escapeHtml(card.name)} (${formatMoney(card.amount)})</option>`
    );
  }
  editCardEl.innerHTML = options.join("");
  editCardEl.disabled = disabled;
  if (disabled) {
    editCardEl.value = "auto";
    return;
  }
  editCardEl.value = cards.some((card) => card.id === previous) ? previous : "auto";
}

function renderEditAccountToggle(options) {
  if (!editAccountToggleEl) {
    return;
  }
  editAccountToggleEl.innerHTML = options
    .map(
      (option) =>
        `<button type="button" class="account-toggle-btn" data-edit-account="${option.value}">${escapeHtml(option.label)}</button>`
    )
    .join("");
}

function syncEditAccountToggleSelected() {
  if (!editAccountToggleEl || !editAccountEl) {
    return;
  }
  const selected = editAccountEl.value;
  const buttons = editAccountToggleEl.querySelectorAll("button[data-edit-account]");
  for (const button of buttons) {
    const active = button.dataset.editAccount === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  }
}

function handleEditAccountToggle(event) {
  const button = event.target.closest("button[data-edit-account]");
  if (!button || !editAccountEl) {
    return;
  }
  const value = button.dataset.editAccount;
  if (!value) {
    return;
  }
  editAccountEl.value = value;
  syncEditAccountToggleSelected();
  populateEditCardOptions(editLedgerEl.value, value);
}

function populateEditCategoryOptions({ kind, ledger }) {
  const options = getEditCategoryCandidates({ kind, ledger });
  const previous = editCategoryEl.value;
  editCategoryEl.innerHTML = options.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
  if (!options.length) {
    editCategoryEl.innerHTML = '<option value="Other">Other</option>';
  }
  const available = options.length ? options : ["Other"];
  editCategoryEl.value = available.includes(previous) ? previous : available[0];
  renderEditCategoryToggle();
  applyEditCategoryOptionStyles();
}

function setEditCategoryValue(category) {
  if (!category) {
    return;
  }
  const options = Array.from(editCategoryEl.options).map((option) => option.value);
  if (!options.includes(category)) {
    editCategoryEl.insertAdjacentHTML(
      "afterbegin",
      `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`
    );
  }
  editCategoryEl.value = category;
  renderEditCategoryToggle();
  applyEditCategoryOptionStyles();
}

function renderEditCategoryToggle() {
  if (!editCategoryToggleEl || !editCategoryEl) {
    return;
  }
  const selected = String(editCategoryEl.value || "");
  const options = Array.from(editCategoryEl.options).map((option) => option.value);
  editCategoryToggleEl.innerHTML = options
    .map(
      (value) =>
        `<button type="button" class="category-toggle-btn ${selected === value ? "active" : ""}" data-edit-category="${escapeHtml(
          value
        )}">${escapeHtml(value)}</button>`
    )
    .join("");
}

function handleEditCategoryToggleClick(event) {
  const button = event.target.closest("button[data-edit-category]");
  if (!button || !editCategoryEl) {
    return;
  }
  const value = String(button.dataset.editCategory || "");
  const exists = Array.from(editCategoryEl.options).some((option) => option.value === value);
  if (!exists) {
    return;
  }
  editCategoryEl.value = value;
  renderEditCategoryToggle();
  applyEditCategoryOptionStyles();
}

function applyEditCategoryOptionStyles() {
  if (!editCategoryEl) {
    return;
  }
  const selected = editCategoryEl.value;
  const options = Array.from(editCategoryEl.options);
  for (const option of options) {
    const active = option.value === selected;
    option.style.backgroundColor = active ? "#106AA9" : "#FFFFFF";
    option.style.color = active ? "#FFFFFF" : "#111111";
    option.style.fontFamily = '"JejuDoldam", "Pretendard", sans-serif';
    option.style.fontSize = "13px";
  }
  renderEditCategoryToggle();
}

function getEditCategoryCandidates({ kind, ledger }) {
  if (kind === "transfer") {
    return ["Account Transfer"];
  }

  const basePersonalExpense = [
    "Grocery",
    "Dining",
    "Cafe",
    "Transport",
    "Shopping",
    "Subscription",
    "Health",
    "Housing",
    "Fun",
    "Other",
  ];
  const basePersonalIncome = ["Income", "Reward", "Refund", "Salary", "Bonus", "Other"];
  const flowerName = getUserProfile().flowerLedgerName;
  const baseFlower = [flowerName, "Flower Income", "Flower Expense", "Wedding", "Material", "Other"];

  const base =
    ledger === "flower" ? baseFlower : kind === "income" ? basePersonalIncome : basePersonalExpense;

  const known = state.transactions
    .filter((transaction) => transaction.kind !== "transfer")
    .filter((transaction) => transaction.ledger === ledger)
    .map((transaction) => transaction.category)
    .filter(Boolean);

  return uniqueOrdered([...base, ...getConfiguredCategories(), ...known]);
}

function uniqueOrdered(values) {
  const set = new Set();
  const output = [];
  for (const value of values) {
    if (set.has(value)) {
      continue;
    }
    set.add(value);
    output.push(value);
  }
  return output;
}

function handleEditSubmit(event) {
  event.preventDefault();
  const targetId = editIdEl.value;
  const transaction = state.transactions.find((item) => item.id === targetId);
  if (!transaction) {
    return;
  }
  const beforeTransaction = { ...transaction };

  const amount = Math.abs(Number(editAmountEl.value));
  if (!Number.isFinite(amount) || amount <= 0) {
    parserPreview.textContent = "수정 실패: 금액을 확인해주세요.";
    return;
  }

  const dateIso = dateInputToIso(editDateEl.value);
  if (!dateIso) {
    parserPreview.textContent = "수정 실패: 날짜를 확인해주세요.";
    return;
  }

  const kind = editKindEl.value;
  const merchant = editMerchantEl.value.trim() || "Quick Entry";
  const category =
    editKindEl.value === "transfer"
      ? "Account Transfer"
      : editCategoryCustomEl.value.trim() || editCategoryEl.value || "Other";

  transaction.date = dateIso;
  transaction.kind = kind;
  transaction.merchant = merchant;
  transaction.category = category;
  transaction.amount = amount;

  if (kind === "transfer") {
    const fromAccount = editFromEl.value;
    const toAccount = editToEl.value;
    const toCardId = getCardIdFromTargetValue(toAccount);
    const isCardPayment = Boolean(toCardId);
    if (!PERSONAL_ACCOUNTS.includes(fromAccount)) {
      parserPreview.textContent = "수정 실패: 보낸 계정을 확인해주세요.";
      return;
    }
    if (!isCardPayment && !PERSONAL_ACCOUNTS.includes(toAccount)) {
      parserPreview.textContent = "수정 실패: 받는 계정을 확인해주세요.";
      return;
    }
    if (!isCardPayment && fromAccount === toAccount) {
      parserPreview.textContent = "수정 실패: 보낸 계정과 받는 계정이 같을 수 없어요.";
      return;
    }
    if (isCardPayment && !getCardNameById(toCardId)) {
      parserPreview.textContent = "수정 실패: 결제 카드가 유효하지 않아요.";
      return;
    }
    transaction.ledger = "personal";
    transaction.account = null;
    transaction.fromAccount = fromAccount;
    transaction.toAccount = toAccount;
    transaction.cardId = toCardId || null;
    transaction.category = isCardPayment ? "Card Payment Transfer" : "Account Transfer";
    if (!merchant || merchant === "Quick Entry") {
      transaction.merchant = isCardPayment ? "카드값 결제 이체" : "통장 이체";
    }
  } else {
    transaction.ledger = editLedgerEl.value;
    transaction.fromAccount = null;
    transaction.toAccount = null;
    transaction.account =
      transaction.ledger === "flower"
        ? editAccountEl.value || "flowerChecking"
        : editAccountEl.value || "personalChecking";
    transaction.cardId =
      transaction.ledger === "personal" &&
      transaction.account !== "personalCash" &&
      editCardEl &&
      getCardNameById(editCardEl.value)
        ? editCardEl.value
        : null;
  }

  const reverted = revertCardDebtForRemovedTransaction(beforeTransaction);
  const applied = applyCardDebtForAddedTransaction(transaction);
  if (reverted || applied) {
    saveSettings();
    syncSetupForm();
  }
  saveTransactions();
  closeEditModal();
  render();
  renderRecordsPage();
  parserPreview.textContent = "내역을 수정했어요.";
}

function toInputDate(isoDate) {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateInputToIso(inputValue) {
  if (!inputValue) {
    return null;
  }
  const [year, month, day] = inputValue.split("-").map((value) => Number(value));
  if (!year || !month || !day) {
    return null;
  }
  const date = new Date(year, month - 1, day, 12, 0, 0);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null;
  }
  return date.toISOString();
}

function renderKeywordSettings() {
  if (flowerKeywordListEl) {
    if (state.settings.flowerKeywords.length) {
      flowerKeywordListEl.innerHTML = state.settings.flowerKeywords
        .map(
          (keyword) =>
            `<span class="keyword-chip">${escapeHtml(keyword)}<button type="button" data-remove-flower="${encodeURIComponent(keyword)}">삭제</button></span>`
        )
        .join("");
    } else {
      flowerKeywordListEl.innerHTML = '<p class="empty">등록된 꽃사업 키워드가 없어요.</p>';
    }
  }

  renderCategoryManageSettings();

  if (!ruleListEl) {
    return;
  }
  if (!state.settings.customRules.length) {
    ruleListEl.innerHTML = '<li class="empty">커스텀 규칙이 아직 없어요.</li>';
    return;
  }

  ruleListEl.innerHTML = state.settings.customRules
    .map((rule) => {
      const ledgerLabel = rule.ledger === "auto" ? "장부 자동" : LEDGER_LABEL[rule.ledger];
      const kindLabel = rule.kind === "auto" ? "유형 자동" : KIND_LABEL[rule.kind];
      const merchant = rule.merchant || "(상호 자동)";
      const category = rule.category || "(카테고리 자동)";

      return `
        <li class="rule-item">
          <div>
            <strong>${escapeHtml(rule.keyword)}</strong> → ${escapeHtml(merchant)} / ${escapeHtml(category)}
            <div class="rule-meta">
              <span>${ledgerLabel}</span>
              <span>${kindLabel}</span>
            </div>
          </div>
          <button class="rule-remove" type="button" data-remove-rule="${rule.id}">삭제</button>
        </li>
      `;
    })
    .join("");
}

function getConfiguredCategories() {
  const fromSettings = Array.isArray(state.settings.categories) ? state.settings.categories : [];
  const base = fromSettings.length ? fromSettings : DEFAULT_CATEGORY_LIST;
  const profileFlowerCategory = getUserProfile().flowerLedgerName;
  const fromTransactions = state.transactions
    .filter((transaction) => transaction.kind !== "transfer")
    .map((transaction) => String(transaction.category || "").trim())
    .filter((category) => Boolean(category));
  const combined = normalizeCategoryList([
    profileFlowerCategory,
    ...base,
    ...fromTransactions,
  ]);
  return combined;
}

function renderCategoryManageSettings() {
  if (
    !categoryManageTabsEl ||
    !categoryManageEditorEl ||
    !categoryNameInputEl ||
    !categoryKeywordListEl ||
    !categoryKeywordInputEl ||
    !categoryDeleteEl
  ) {
    return;
  }

  const categories = getConfiguredCategories();
  state.settings.categories = categories;
  state.settings.categoryKeywords = normalizeCategoryKeywordMap(state.settings.categoryKeywords, categories);

  if (!state.selectedSettingsCategory || !categories.includes(state.selectedSettingsCategory)) {
    state.selectedSettingsCategory = categories[0] || "Other";
  }
  if (!state.selectedColorCategory || !categories.includes(state.selectedColorCategory)) {
    state.selectedColorCategory = state.selectedSettingsCategory;
  }

  categoryManageTabsEl.innerHTML = categories
    .map((category) => {
      const active = category === state.selectedSettingsCategory ? "active" : "";
      return `<button type="button" class="category-toggle-btn ${active}" data-manage-category="${encodeURIComponent(category)}">${escapeHtml(
        category
      )}</button>`;
    })
    .join("");

  const selected = state.selectedSettingsCategory;
  if (!selected) {
    categoryManageEditorEl.hidden = true;
    return;
  }

  categoryManageEditorEl.hidden = false;
  categoryNameInputEl.value = selected;
  categoryKeywordInputEl.placeholder = `${selected} 키워드 추가`;
  categoryDeleteEl.disabled = selected === "Other";

  const keywords = normalizeKeywordList(state.settings.categoryKeywords?.[selected]);
  categoryKeywordListEl.innerHTML = keywords.length
    ? keywords
        .map(
          (keyword) =>
            `<span class="keyword-chip">${escapeHtml(keyword)}<button type="button" data-remove-category-keyword="${encodeURIComponent(
              keyword
            )}">삭제</button></span>`
        )
        .join("")
    : '<p class="empty">아직 키워드가 없어요.</p>';
}

function handleCategoryManageTabClick(event) {
  const button = event.target.closest("button[data-manage-category]");
  if (!button) {
    return;
  }
  const category = decodeURIComponent(button.dataset.manageCategory || "");
  if (!category) {
    return;
  }
  state.selectedSettingsCategory = category;
  state.selectedColorCategory = category;
  renderCategoryManageSettings();
  renderCategoryColorSettings();
}

function handleCategoryAddSubmit(event) {
  event.preventDefault();
  if (!categoryAddInputEl) {
    return;
  }
  const name = String(categoryAddInputEl.value || "").trim();
  if (!name) {
    parserPreview.textContent = "카테고리 이름을 입력해주세요.";
    return;
  }
  const categories = getConfiguredCategories();
  const duplicate = categories.some((category) => normalizeText(category) === normalizeText(name));
  if (duplicate) {
    parserPreview.textContent = "이미 있는 카테고리예요.";
    return;
  }

  state.settings.categories = normalizeCategoryList([...categories, name]);
  state.settings.categoryKeywords = normalizeCategoryKeywordMap(state.settings.categoryKeywords, state.settings.categories);
  state.settings.categoryKeywords[name] = normalizeKeywordList(state.settings.categoryKeywords[name]);
  state.selectedSettingsCategory = name;
  state.selectedColorCategory = name;
  saveSettings();
  categoryAddInputEl.value = "";
  render();
  parserPreview.textContent = "카테고리를 추가했어요.";
}

function handleCategoryRenameSave() {
  if (!categoryNameInputEl || !state.selectedSettingsCategory) {
    return;
  }
  const previous = state.selectedSettingsCategory;
  const nextName = String(categoryNameInputEl.value || "").trim();
  if (!nextName) {
    parserPreview.textContent = "카테고리 이름을 입력해주세요.";
    return;
  }
  if (previous === "Other" && nextName !== "Other") {
    parserPreview.textContent = "Other 카테고리는 기본 카테고리라 이름을 바꿀 수 없어요.";
    categoryNameInputEl.value = previous;
    return;
  }
  if (previous === nextName) {
    return;
  }

  const duplicate = getConfiguredCategories().some(
    (category) => category !== previous && normalizeText(category) === normalizeText(nextName)
  );
  if (duplicate) {
    parserPreview.textContent = "같은 이름의 카테고리가 이미 있어요.";
    return;
  }

  state.settings.categories = normalizeCategoryList(state.settings.categories.map((category) => (category === previous ? nextName : category)));
  const keywordMap = { ...(state.settings.categoryKeywords || {}) };
  const movedKeywords = normalizeKeywordList(keywordMap[previous]);
  delete keywordMap[previous];
  keywordMap[nextName] = normalizeKeywordList([...(keywordMap[nextName] || []), ...movedKeywords]);
  state.settings.categoryKeywords = normalizeCategoryKeywordMap(keywordMap, state.settings.categories);

  const colorMap = { ...(state.settings.categoryColors || {}) };
  if (Object.prototype.hasOwnProperty.call(colorMap, previous)) {
    colorMap[nextName] = colorMap[previous];
    delete colorMap[previous];
  }
  state.settings.categoryColors = colorMap;

  state.transactions = state.transactions.map((transaction) =>
    transaction.category === previous ? { ...transaction, category: nextName } : transaction
  );
  if (state.selectedCategory === previous) {
    state.selectedCategory = nextName;
  }
  if (quickCategoryEl && quickCategoryEl.value === previous) {
    quickCategoryEl.value = nextName;
  }
  state.selectedSettingsCategory = nextName;
  state.selectedColorCategory = nextName;

  saveTransactions();
  saveSettings();
  render();
  parserPreview.textContent = "카테고리 이름을 변경했어요.";
}

function handleCategoryDelete() {
  const selected = state.selectedSettingsCategory;
  if (!selected) {
    return;
  }
  if (selected === "Other") {
    parserPreview.textContent = "Other 카테고리는 삭제할 수 없어요.";
    return;
  }

  state.settings.categories = normalizeCategoryList(state.settings.categories.filter((category) => category !== selected));
  const keywordMap = { ...(state.settings.categoryKeywords || {}) };
  delete keywordMap[selected];
  state.settings.categoryKeywords = normalizeCategoryKeywordMap(keywordMap, state.settings.categories);
  const colorMap = { ...(state.settings.categoryColors || {}) };
  delete colorMap[selected];
  state.settings.categoryColors = colorMap;

  state.transactions = state.transactions.map((transaction) =>
    transaction.category === selected ? { ...transaction, category: "Other" } : transaction
  );
  if (state.selectedCategory === selected) {
    state.selectedCategory = null;
  }
  if (quickCategoryEl && quickCategoryEl.value === selected) {
    quickCategoryEl.value = "auto";
  }

  const fallback = state.settings.categories.includes("Other")
    ? "Other"
    : state.settings.categories[0] || "Other";
  state.selectedSettingsCategory = fallback;
  state.selectedColorCategory = fallback;

  saveTransactions();
  saveSettings();
  render();
  parserPreview.textContent = "카테고리를 삭제했어요. 기존 내역은 Other로 이동했어요.";
}

function handleCategoryKeywordSubmit(event) {
  event.preventDefault();
  if (!categoryKeywordInputEl || !state.selectedSettingsCategory) {
    return;
  }
  const selected = state.selectedSettingsCategory;
  const keyword = String(categoryKeywordInputEl.value || "").trim();
  if (!keyword) {
    return;
  }

  state.settings.categoryKeywords = normalizeCategoryKeywordMap(state.settings.categoryKeywords, getConfiguredCategories());
  state.settings.categoryKeywords[selected] = normalizeKeywordList([
    ...(state.settings.categoryKeywords[selected] || []),
    keyword,
  ]);
  categoryKeywordInputEl.value = "";
  saveSettings();
  renderCategoryManageSettings();
  parserPreview.textContent = "카테고리 키워드를 추가했어요.";
}

function handleCategoryKeywordRemove(event) {
  const button = event.target.closest("button[data-remove-category-keyword]");
  if (!button || !state.selectedSettingsCategory) {
    return;
  }
  const selected = state.selectedSettingsCategory;
  const keyword = decodeURIComponent(button.dataset.removeCategoryKeyword || "");
  if (!keyword) {
    return;
  }
  state.settings.categoryKeywords = normalizeCategoryKeywordMap(state.settings.categoryKeywords, getConfiguredCategories());
  state.settings.categoryKeywords[selected] = normalizeKeywordList(
    (state.settings.categoryKeywords[selected] || []).filter((item) => item !== keyword)
  );
  saveSettings();
  renderCategoryManageSettings();
}

function drawTrendChart(canvas, transactions) {
  const dayCount = getToday().getDate();
  const expenseValues = buildDailyArray(transactions.filter((transaction) => transaction.kind === "expense"), dayCount);
  const incomeValues = buildDailyArray(transactions.filter((transaction) => transaction.kind === "income"), dayCount);
  drawDualLineChart(canvas, expenseValues, incomeValues, "#106AA9", "#346D4A");
}

function drawLineChart(canvas, values, lineColor) {
  const setup = prepareCanvas(canvas);
  if (!setup) {
    return;
  }

  const { ctx, width, height } = setup;
  const padding = { top: 7, right: 8, bottom: 14, left: 78 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxValue = Math.max(...values, 1);
  const gridSteps = 2;

  ctx.strokeStyle = "rgba(17, 17, 17, 0.18)";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#111111";
  ctx.font = '10px "GmarketSans Light", "Pretendard", sans-serif';
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";

  for (let i = 0; i <= gridSteps; i += 1) {
    const y = padding.top + (chartHeight * i) / gridSteps;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
    const tickValue = maxValue * ((gridSteps - i) / gridSteps);
    ctx.fillText(formatAxisMoney(tickValue), 2, y);
  }

  if (!values.some((value) => value > 0)) {
    ctx.fillStyle = "#111111";
    ctx.font = '11px "GmarketSans Light", "Pretendard", sans-serif';
    ctx.textBaseline = "alphabetic";
    ctx.fillText("아직 데이터가 없어요", padding.left, height / 2);
    return;
  }

  const points = values.map((value, index) => {
    const x = padding.left + (index / Math.max(values.length - 1, 1)) * chartWidth;
    const y = padding.top + chartHeight - (value / maxValue) * chartHeight;
    return { x, y };
  });

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i += 1) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2.7;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(points[0].x, padding.top + chartHeight);
  for (const point of points) {
    ctx.lineTo(point.x, point.y);
  }
  ctx.lineTo(points[points.length - 1].x, padding.top + chartHeight);
  ctx.closePath();
  ctx.fillStyle = `${lineColor}33`;
  ctx.fill();

  const markerIndexes = [0, Math.floor((values.length - 1) / 2), values.length - 1];
  ctx.fillStyle = "#111111";
  ctx.font = '10px "GmarketSans Light", "Pretendard", sans-serif';
  ctx.textBaseline = "alphabetic";
  for (const index of markerIndexes) {
    const x = padding.left + (index / Math.max(values.length - 1, 1)) * chartWidth;
    ctx.fillText(`${index + 1}일`, x - 9, height - 2);
  }
}

function drawDualLineChart(canvas, firstValues, secondValues, firstColor, secondColor) {
  const setup = prepareCanvas(canvas);
  if (!setup) {
    return;
  }

  const { ctx, width, height } = setup;
  const padding = { top: 7, right: 8, bottom: 14, left: 78 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const merged = [...firstValues, ...secondValues];
  const maxValue = Math.max(...merged, 1);
  const gridSteps = 2;

  ctx.strokeStyle = "rgba(17, 17, 17, 0.18)";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#111111";
  ctx.font = '10px "GmarketSans Light", "Pretendard", sans-serif';
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";

  for (let i = 0; i <= gridSteps; i += 1) {
    const y = padding.top + (chartHeight * i) / gridSteps;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
    const tickValue = maxValue * ((gridSteps - i) / gridSteps);
    ctx.fillText(formatAxisMoney(tickValue), 2, y);
  }

  if (!merged.some((value) => value > 0)) {
    ctx.fillStyle = "#111111";
    ctx.font = '11px "GmarketSans Light", "Pretendard", sans-serif';
    ctx.textBaseline = "alphabetic";
    ctx.fillText("아직 데이터가 없어요", padding.left, height / 2);
    return;
  }

  const drawSeries = (values, color) => {
    const points = values.map((value, index) => {
      const x = padding.left + (index / Math.max(values.length - 1, 1)) * chartWidth;
      const y = padding.top + chartHeight - (value / maxValue) * chartHeight;
      return { x, y };
    });
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i += 1) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.stroke();
  };

  drawSeries(firstValues, firstColor);
  drawSeries(secondValues, secondColor);

  const markerIndexes = [0, Math.floor((Math.max(firstValues.length, secondValues.length) - 1) / 2), firstValues.length - 1];
  ctx.fillStyle = "#111111";
  ctx.font = '10px "GmarketSans Light", "Pretendard", sans-serif';
  ctx.textBaseline = "alphabetic";
  for (const index of markerIndexes) {
    const x = padding.left + (index / Math.max(firstValues.length - 1, 1)) * chartWidth;
    ctx.fillText(`${index + 1}일`, x - 9, height - 2);
  }
}

function formatAxisMoney(value) {
  const abs = Math.abs(value);
  if (abs >= 1000) {
    return `$${(abs / 1000).toFixed(abs >= 10000 ? 0 : 1)}k ${CURRENCY}`;
  }
  if (abs >= 100) {
    return `$${Math.round(abs)} ${CURRENCY}`;
  }
  if (abs >= 10) {
    return `$${(Math.round(abs * 10) / 10).toFixed(1)} ${CURRENCY}`;
  }
  return `$${(Math.round(abs * 100) / 100).toFixed(2)} ${CURRENCY}`;
}

function drawDonutChart(canvas, categoryEntries, selectedCategory) {
  const setup = prepareCanvas(canvas);
  if (!setup) {
    return;
  }

  const { ctx, width, height } = setup;
  state.donutHitRegions = [];
  if (!categoryEntries.length) {
    ctx.fillStyle = "#111111";
    ctx.font = "13px sans-serif";
    ctx.fillText("이번 달 지출 카테고리가 없어요", 12, height / 2);
    return;
  }

  const total = categoryEntries.reduce((sum, entry) => sum + entry[1], 0);
  const radius = Math.min(width, height) * 0.26;
  const lineWidth = radius * 0.42;
  const centerX = width / 2;
  const centerY = height / 2;
  let startAngle = -Math.PI / 2;

  for (const [category, amount] of categoryEntries) {
    const angle = (amount / total) * Math.PI * 2;
    const endAngle = startAngle + angle;
    const isActive = selectedCategory === category;
    const expand = isActive ? 5 : 0;
    const mid = startAngle + angle / 2;

    ctx.beginPath();
    ctx.arc(
      centerX + Math.cos(mid) * expand,
      centerY + Math.sin(mid) * expand,
      radius,
      startAngle,
      endAngle
    );
    ctx.strokeStyle = getCategoryColor(category);
    ctx.lineWidth = lineWidth;
    ctx.stroke();

    state.donutHitRegions.push({
      category,
      centerX: centerX + Math.cos(mid) * expand,
      centerY: centerY + Math.sin(mid) * expand,
      innerRadius: radius - lineWidth / 2,
      outerRadius: radius + lineWidth / 2,
      startNorm: normalizeRadian(startAngle),
      endNorm: normalizeRadian(endAngle),
    });

    const isSmallSlice = angle < 0.42;
    const labelRadius = radius + lineWidth * (isSmallSlice ? 1.0 : 0.72);
    const rawLabelX = centerX + Math.cos(mid) * labelRadius;
    const rawLabelY = centerY + Math.sin(mid) * labelRadius;
    const labelX = Math.max(14, Math.min(width - 14, rawLabelX));
    const labelY = Math.max(14, Math.min(height - 14, rawLabelY));
    const alignRightSide = Math.cos(mid) >= 0;

    if (isSmallSlice) {
      const elbowRadius = radius + lineWidth * 0.58;
      const elbowX = centerX + Math.cos(mid) * elbowRadius;
      const elbowY = centerY + Math.sin(mid) * elbowRadius;
      const endX = elbowX + (alignRightSide ? 18 : -18);
      ctx.beginPath();
      ctx.moveTo(centerX + Math.cos(mid) * (radius + lineWidth / 2), centerY + Math.sin(mid) * (radius + lineWidth / 2));
      ctx.lineTo(elbowX, elbowY);
      ctx.lineTo(endX, elbowY);
      ctx.strokeStyle = "#111111";
      ctx.lineWidth = 1.1;
      ctx.stroke();
    }

    ctx.font = '13px "BMKkubulim", "Pretendard", sans-serif';
    ctx.fillStyle = "#111111";
    ctx.textAlign = alignRightSide ? "left" : "right";
    ctx.textBaseline = "middle";
    ctx.fillText(category, labelX, labelY - 8);
    ctx.fillText(formatMoney(amount), labelX, labelY + 9);

    startAngle = endAngle;
  }

  ctx.fillStyle = "#111";
  ctx.textAlign = "center";
  ctx.font = "700 15px sans-serif";
  ctx.fillText(formatMoney(total), centerX, centerY - 4);
  ctx.font = "12px sans-serif";
  ctx.fillStyle = "#111111";
  ctx.fillText("Total", centerX, centerY + 16);
}

function normalizeRadian(angle) {
  const circle = Math.PI * 2;
  let normalized = angle % circle;
  if (normalized < 0) {
    normalized += circle;
  }
  return normalized;
}

function prepareCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return null;
  }

  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);
  return { ctx, width: rect.width, height: rect.height };
}

function parseQuickEntry(rawInput, options = {}) {
  const dateData = extractDatePrefix(rawInput);
  const normalized = normalizeText(dateData.text);
  const amountData = extractAmount(normalized);
  const rewardLike = /(reward|리워드|캐시백|cashback|boa)/i.test(normalized);
  const cardDueLike = containsAny(normalized, state.settings.cardDueKeywords || DEFAULT_SETTINGS.cardDueKeywords);

  const matchedRule = findCustomRule(normalized);

  const forceLedger = matchedRule && matchedRule.ledger !== "auto" ? matchedRule.ledger : null;
  const forceKind = matchedRule && matchedRule.kind !== "auto" ? matchedRule.kind : null;
  const forcedLedger =
    typeof options.forcedLedger === "string" && String(options.forcedLedger).trim()
      ? String(options.forcedLedger).trim()
      : null;
  const forcedAccount = NON_TRANSFER_ACCOUNTS.includes(options.forcedAccount) ? options.forcedAccount : null;
  const forcedCardId = getCardNameById(options.forcedCardId) ? String(options.forcedCardId) : null;
  const forcedCategory = getConfiguredCategories().includes(options.forcedCategory) ? options.forcedCategory : null;

  const containsFlowerKeyword = containsAny(normalized, state.settings.flowerKeywords);
  let ledger = forcedLedger || forceLedger || (containsFlowerKeyword ? "flower" : "personal");

  let kind = options.forcedKind || forceKind || inferKind(normalized, rawInput);
  if (kind === "transfer") {
    ledger = "personal";
  }

  const defaultMatch = findMerchantMatch(normalized, DEFAULT_MERCHANT_PATTERNS);

  let merchant = matchedRule && matchedRule.merchant ? matchedRule.merchant : "";
  let category = matchedRule && matchedRule.category ? matchedRule.category : "";
  let account = null;
  let fromAccount = null;
  let toAccount = null;
  let cardId = null;

  if (kind === "transfer") {
    const transferDirection = inferTransferDirection(normalized);
    fromAccount = transferDirection.fromAccount;
    toAccount = forcedCardId ? toCardTargetValue(forcedCardId) : transferDirection.toAccount;
    cardId = forcedCardId;
    merchant = merchant || "통장 이체";
    category = category || "Account Transfer";
  } else {
    if (forcedAccount) {
      account = forcedAccount;
      ledger = FLOWER_ACCOUNTS.includes(forcedAccount) ? "flower" : "personal";
    } else {
      account = inferAccount(normalized, ledger);
    }

    if (ledger === "flower") {
      merchant = merchant || getUserProfile().flowerLedgerName;
      category = category || "Other";
    } else {
      merchant = merchant || (defaultMatch ? defaultMatch.merchant : inferMerchant(dateData.text, amountData ? amountData.token : ""));
      category = category || (defaultMatch ? defaultMatch.category : inferCategory(normalized, merchant));

      if (kind === "income" && !matchedRule?.category) {
        if (rewardLike) {
          category = "Reward";
          merchant = /(boa)/i.test(normalized) ? "BOA Reward" : merchant;
        } else {
          category = category === "Other" ? "Income" : category || "Income";
        }
      }

      if (kind === "expense" && cardDueLike && !matchedRule?.category) {
        category = "Card Bill Payment";
        merchant = merchant === "Quick Entry" ? "Card Bill" : merchant;
      }
    }

    if (forcedCategory) {
      category = forcedCategory;
    }

    if (ledger === "personal" && account !== "personalCash" && forcedCardId) {
      cardId = forcedCardId;
    }
  }

  if (!merchant) {
    merchant = kind === "transfer" ? "통장 이체" : "Quick Entry";
  }
  if (!category) {
    category = "Other";
  }
  if (isBlockedCategoryName(category)) {
    category = "Other";
  }

  const amount = amountData ? amountData.value : 0;
  const dateIso = toIsoDate(dateData.date);
  const accountLabel =
    kind === "transfer"
      ? isCardTargetValue(toAccount)
        ? "카드 결제 이체"
        : "통장 이체"
      : ACCOUNT_LABEL[account] || "계정";
  const cardLabel = getCardNameById(cardId);
  const cardPreview = cardLabel ? ` · 카드 ${cardLabel}` : "";

  return {
    date: dateIso,
    dateLabel: formatDate(dateIso),
    ledger,
    kind,
    merchant,
    category,
    amount,
    account,
    fromAccount,
    toAccount,
    cardId,
    preview: `${formatDate(dateIso)} · ${LEDGER_LABEL[ledger]} · ${KIND_LABEL[kind]} · ${accountLabel} · ${merchant} · ${category}${cardPreview} · ${formatMoney(amount)}`,
  };
}

function extractDatePrefix(rawInput) {
  const trimmed = rawInput.trim();
  const match = trimmed.match(/^(\d{1,2})[\/.\-](\d{1,2})(?:\s+|$)/);

  if (!match) {
    return { date: new Date(), text: trimmed };
  }

  const month = Number(match[1]);
  const day = Number(match[2]);
  const now = new Date();
  const date = new Date(now.getFullYear(), month - 1, day, 12, 0, 0);

  if (date.getMonth() !== month - 1 || date.getDate() !== day) {
    return { date: new Date(), text: trimmed };
  }

  const rest = trimmed.slice(match[0].length).trim();
  return { date, text: rest || trimmed };
}

function inferKind(normalizedText, rawInput) {
  if (containsAny(normalizedText, state.settings.transferKeywords) || /->|→/.test(normalizedText)) {
    return "transfer";
  }

  if (containsAny(normalizedText, state.settings.incomeKeywords) || /^\+/.test(rawInput.trim())) {
    return "income";
  }

  return "expense";
}

function inferAccount(normalizedText, ledger) {
  if (ledger === "flower") {
    if (containsAny(normalizedText, state.settings.cashKeywords)) {
      return "flowerCash";
    }
    return "flowerChecking";
  }

  if (containsAny(normalizedText, state.settings.cashKeywords)) {
    return "personalCash";
  }

  if (containsAny(normalizedText, state.settings.savingsKeywords)) {
    return "personalSavings";
  }

  return "personalChecking";
}

function inferTransferDirection(normalizedText) {
  const arrow = normalizedText.split(/->|→/);
  if (arrow.length === 2) {
    const fromAccount = inferPersonalAccountFromText(arrow[0]);
    const toAccount = inferPersonalAccountFromText(arrow[1]);
    if (fromAccount && toAccount && fromAccount !== toAccount) {
      return { fromAccount, toAccount };
    }
  }

  if (/(현금에서|from cash|cash from|캐시에서)/i.test(normalizedText)) {
    const toAccount = containsAny(normalizedText, state.settings.savingsKeywords)
      ? "personalSavings"
      : "personalChecking";
    return { fromAccount: "personalCash", toAccount };
  }

  if (/(현금으로|to cash|cash to|캐시로)/i.test(normalizedText)) {
    const fromAccount = containsAny(normalizedText, state.settings.savingsKeywords)
      ? "personalSavings"
      : "personalChecking";
    return { fromAccount, toAccount: "personalCash" };
  }

  if (containsAny(normalizedText, state.settings.cashKeywords)) {
    return { fromAccount: "personalChecking", toAccount: "personalCash" };
  }

  if (/(세이브로|저축으로|to savings|save to)/i.test(normalizedText)) {
    return { fromAccount: "personalChecking", toAccount: "personalSavings" };
  }

  if (/(세이브에서|저축에서|from savings|savings to|세이브\s*출금)/i.test(normalizedText)) {
    return { fromAccount: "personalSavings", toAccount: "personalChecking" };
  }

  return { fromAccount: "personalChecking", toAccount: "personalSavings" };
}

function inferPersonalAccountFromText(text) {
  if (containsAny(text, state.settings.cashKeywords)) {
    return "personalCash";
  }
  if (containsAny(text, state.settings.savingsKeywords)) {
    return "personalSavings";
  }
  return "personalChecking";
}

function findCustomRule(normalizedText) {
  for (const rule of state.settings.customRules) {
    if (normalizedText.includes(rule.keyword)) {
      return rule;
    }
  }
  return null;
}

function findMerchantMatch(normalizedText, patterns) {
  for (const pattern of patterns) {
    for (const alias of pattern.aliases) {
      if (normalizedText.includes(alias.toLowerCase())) {
        return pattern;
      }
    }
  }
  return null;
}

function inferMerchant(rawInput, amountToken) {
  let cleaned = rawInput;
  if (amountToken) {
    const escaped = amountToken.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    cleaned = cleaned.replace(new RegExp(escaped, "gi"), " ");
  }

  cleaned = cleaned
    .replace(/[$]/g, " ")
    .replace(/(불|달러|usd|bucks)/gi, " ")
    .replace(/(\d+(?:[.,]\d+)?)/g, " ")
    .replace(/(입금|지출|이체|세이브|저축|현금|cash|transfer|income|expense)/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) {
    return "Quick Entry";
  }

  if (/[a-zA-Z]/.test(cleaned)) {
    return cleaned
      .split(" ")
      .map((token) => token.charAt(0).toUpperCase() + token.slice(1).toLowerCase())
      .join(" ");
  }

  return cleaned;
}

function inferCategory(normalizedText, merchant) {
  const keywordBased = inferCategoryByKeywords(`${normalizedText} ${normalizeText(merchant)}`);
  if (keywordBased) {
    return keywordBased;
  }
  for (const rule of CATEGORY_RULES) {
    if (rule.pattern.test(normalizedText) || rule.pattern.test(merchant)) {
      return rule.category;
    }
  }
  return "Other";
}

function inferCategoryByKeywords(text) {
  const normalized = normalizeText(text);
  const categories = getConfiguredCategories();
  for (const category of categories) {
    const keywords = normalizeKeywordList(state.settings.categoryKeywords?.[category]);
    if (!keywords.length) {
      continue;
    }
    if (keywords.some((keyword) => normalized.includes(keyword.toLowerCase()))) {
      return category;
    }
  }
  return null;
}

function extractAmount(normalizedText) {
  const withCurrency = normalizedText.match(/([+-]?\d+(?:[.,]\d+)?)\s*(불|달러|usd|bucks)/i);
  const withDollar = normalizedText.match(/\$\s*([+-]?\d+(?:[.,]\d+)?)/i);
  const plainNumber = normalizedText.match(/([+-]?\d+(?:[.,]\d+)?)/);
  const match = withCurrency || withDollar || plainNumber;

  if (!match) {
    return null;
  }

  const value = Math.abs(Number(match[1].replace(/,/g, "")));
  if (!Number.isFinite(value)) {
    return null;
  }

  return { value, token: match[0] };
}

function getCurrentMonthTransactions(transactions) {
  const today = getToday();
  const start = new Date(today.getFullYear(), today.getMonth(), 1);

  return transactions.filter((transaction) => {
    const date = new Date(transaction.date);
    return date >= start && date <= today;
  });
}

function getScopeTransactions(transactions, scope) {
  if (isCombinedScope(scope)) {
    const combinedConfig = getCombinedConfigByScope(scope);
    const combinedMembers = Array.isArray(combinedConfig?.members) ? combinedConfig.members : [];
    const memberLedgers = new Set(
      getLedgerDefinitions()
        .filter((ledger) => combinedMembers.includes(ledger.name))
        .map((ledger) => ledger.id)
    );
    return transactions.filter((transaction) => memberLedgers.has(transaction.ledger));
  }
  if (scope === "accounts") {
    return transactions.filter((transaction) => transaction.ledger === "personal");
  }
  return transactions.filter((transaction) => transaction.ledger === scope);
}

function getPrimaryCheckingAccountForLedger(ledgerId) {
  return ledgerId === "flower" ? "flowerChecking" : "personalChecking";
}

function getCategoryEntries(expenseTransactions) {
  const totals = new Map();
  for (const transaction of expenseTransactions) {
    totals.set(transaction.category, (totals.get(transaction.category) || 0) + transaction.amount);
  }
  return Array.from(totals.entries()).sort((a, b) => b[1] - a[1]);
}

function sumAmounts(transactions) {
  return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
}

function buildDailyArray(transactions, dayCount) {
  const daily = Array.from({ length: dayCount }, () => 0);
  for (const transaction of transactions) {
    const date = new Date(transaction.date);
    const index = date.getDate() - 1;
    if (index >= 0 && index < dayCount) {
      daily[index] += transaction.amount;
    }
  }
  return daily;
}

function computeBalances(transactions) {
  const balances = {
    personalChecking: 0,
    personalSavings: 0,
    personalCash: 0,
    flowerChecking: 0,
    flowerCash: 0,
  };

  const sorted = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));

  for (const transaction of sorted) {
    if (transaction.kind === "transfer") {
      if (balances[transaction.fromAccount] === undefined) {
        continue;
      }
      if (isCardPaymentTransfer(transaction)) {
        balances[transaction.fromAccount] -= transaction.amount;
        continue;
      }
      if (balances[transaction.toAccount] === undefined) {
        continue;
      }
      balances[transaction.fromAccount] -= transaction.amount;
      balances[transaction.toAccount] += transaction.amount;
      continue;
    }

    if (balances[transaction.account] === undefined) {
      continue;
    }

    if (transaction.kind === "expense") {
      balances[transaction.account] -= transaction.amount;
    } else {
      balances[transaction.account] += transaction.amount;
    }
  }

  return balances;
}

function getCategoryColor(category) {
  const customColor = normalizeHexColor(state.settings.categoryColors?.[category]);
  if (customColor) {
    return customColor;
  }

  if (CATEGORY_COLORS[category]) {
    return CATEGORY_COLORS[category];
  }

  const index = Math.abs(hashText(category)) % PALETTE.length;
  return PALETTE[index];
}

function getCardColor(cardKey) {
  const customColor = normalizeHexColor(state.settings.cardColors?.[cardKey]);
  if (customColor) {
    return customColor;
  }
  return CARD_DEFAULT_COLORS[cardKey] || PALETTE[0];
}

function hashText(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function getContrastText(hexColor) {
  const hex = hexColor.replace("#", "");
  const full =
    hex.length === 3
      ? hex
          .split("")
          .map((ch) => ch + ch)
          .join("")
      : hex;

  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 150 ? "#111111" : "#ffffff";
}

function toCardTargetValue(cardId) {
  const id = String(cardId || "").trim();
  if (!id) {
    return "";
  }
  return `${CARD_TARGET_PREFIX}${id}`;
}

function isCardTargetValue(value) {
  return typeof value === "string" && value.startsWith(CARD_TARGET_PREFIX);
}

function getCardIdFromTargetValue(value) {
  if (!isCardTargetValue(value)) {
    return null;
  }
  const id = String(value).slice(CARD_TARGET_PREFIX.length).trim();
  return id || null;
}

function getManagedCardsForLedger(ledgerId) {
  const id = cleanText(ledgerId, "personal");
  if (id === "personal") {
    return getManagedItems("cardDebts");
  }
  return getManagedItems(`accountCards:${id}`);
}

function getAllManagedCardItems() {
  const ledgers = getLedgerDefinitions();
  const scopedKeys = Object.keys(state.settings.accountScopedManagers || {});
  const ledgerIds = Array.from(new Set([...ledgers.map((ledger) => ledger.id), ...scopedKeys]));
  const all = [];
  for (const ledgerId of ledgerIds) {
    const cards = getManagedCardsForLedger(ledgerId);
    for (const card of cards) {
      all.push(card);
    }
  }
  return all;
}

function getCardNameById(cardId) {
  const id = String(cardId || "").trim();
  if (!id) {
    return "";
  }
  const match = getAllManagedCardItems().find((item) => item.id === id);
  return match ? match.name : "";
}

function getDefaultQuickCardId(cards = getManagedCardsForLedger("personal")) {
  return cards[0]?.id || null;
}

function getTransactionCardId(transaction) {
  if (!transaction) {
    return null;
  }
  if (transaction.cardId) {
    return String(transaction.cardId);
  }
  return getCardIdFromTargetValue(transaction.toAccount);
}

function buildTransferTargetOptions() {
  const accountOptions = PERSONAL_ACCOUNTS.map((account) => ({
    value: account,
    label: ACCOUNT_LABEL[account] || account,
  }));
  const cardOptions = getManagedItems("cardDebts").map((card) => ({
    value: toCardTargetValue(card.id),
    label: `${card.name} 카드 결제 (${formatMoney(card.amount)})`,
  }));
  return [...accountOptions, ...cardOptions];
}

function containsAny(text, keywords) {
  const normalized = text.toLowerCase();
  return keywords.some((keyword) => normalized.includes(keyword.toLowerCase()));
}

function normalizeHexColor(value) {
  const string = String(value || "").trim();
  if (!string) {
    return null;
  }
  const shortMatch = string.match(/^#([0-9a-fA-F]{3})$/);
  if (shortMatch) {
    const [r, g, b] = shortMatch[1].split("");
    return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
  }
  if (/^#[0-9a-fA-F]{6}$/.test(string)) {
    return string.toUpperCase();
  }
  return null;
}

function normalizeAmount(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return 0;
  }
  return roundMoney(numeric);
}

function normalizeLiabilityAmount(value, options = {}) {
  const { allowZero = false } = options;
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return 0;
  }
  const absolute = roundMoney(Math.abs(numeric));
  if (allowZero) {
    return absolute;
  }
  if (absolute <= 0) {
    return 0;
  }
  return absolute;
}

function normalizeGoalYears(value) {
  const numeric = Math.floor(Number(value));
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return 1;
  }
  return numeric;
}

function normalizeCategoryKey(value) {
  return String(value || "").trim().toLowerCase();
}

function isBlockedCategoryName(value) {
  return BLOCKED_CATEGORY_NAMES.has(normalizeCategoryKey(value));
}

function normalizeCategoryList(values) {
  const list = Array.isArray(values) ? values : [];
  const normalized = uniqueOrdered(
    list
      .map((value) => String(value || "").trim())
      .filter((value) => Boolean(value) && !isBlockedCategoryName(value))
  );
  if (!normalized.includes("Other")) {
    normalized.push("Other");
  }
  return normalized;
}

function normalizeKeywordList(values) {
  if (!Array.isArray(values)) {
    return [];
  }
  return uniqueStrings(values).sort((a, b) => a.localeCompare(b, "ko"));
}

function normalizeCategoryKeywordMap(input, categories) {
  const source = input && typeof input === "object" ? input : {};
  const targetCategories = normalizeCategoryList(
    Array.isArray(categories) && categories.length ? categories : Object.keys(source)
  );

  const output = {};
  for (const category of targetCategories) {
    const hasStoredKeywords = Object.prototype.hasOwnProperty.call(source, category);
    output[category] = hasStoredKeywords
      ? normalizeKeywordList(source[category])
      : normalizeKeywordList(DEFAULT_CATEGORY_KEYWORDS[category] || []);
  }
  return output;
}

function roundMoney(value) {
  return Math.round(Number(value) * 100) / 100;
}

function normalizeNamedAmountList(values, options = {}) {
  const { allowZero = false, amountParser = normalizeAmount } = options;
  if (!Array.isArray(values)) {
    return [];
  }

  return values
    .map((item) => ({
      id: String(item?.id || createId()),
      name: String(item?.name || "").trim(),
      amount: amountParser(item?.amount, { allowZero }),
    }))
    .filter((item) => item.name && (allowZero ? item.amount >= 0 : item.amount > 0));
}

function normalizeManagedAmount(type, value, options = {}) {
  if (isCardManagerType(type)) {
    return normalizeLiabilityAmount(value, options);
  }
  return normalizeAmount(value);
}

function normalizeAccountScopedManagers(input) {
  const source = input && typeof input === "object" ? input : {};
  const output = {};
  for (const [ledgerIdRaw, payload] of Object.entries(source)) {
    const ledgerId = String(ledgerIdRaw || "").trim();
    if (!ledgerId || !payload || typeof payload !== "object") {
      continue;
    }
    const cards = normalizeNamedAmountList(payload.cards, {
      allowZero: true,
      amountParser: normalizeLiabilityAmount,
    });
    const banks = normalizeNamedAmountList(payload.banks);
    if (!cards.length && !banks.length) {
      continue;
    }
    output[ledgerId] = { cards, banks };
  }
  return output;
}

function normalizeSavingGoals(values) {
  if (!Array.isArray(values)) {
    return [];
  }

  return values
    .map((item) => {
      const targetAmount = normalizeAmount(item?.targetAmount);
      const savedAmount = roundMoney(Math.max(0, Number(item?.savedAmount) || 0));
      const monthlySavedAmount = roundMoney(Math.max(0, Number(item?.monthlySavedAmount) || 0));
      const type = Object.prototype.hasOwnProperty.call(GOAL_TYPE_LABEL, item?.type) ? item.type : "other";
      return {
        id: String(item?.id || createId()),
        name: String(item?.name || "").trim(),
        type,
        targetAmount,
        years: normalizeGoalYears(item?.years ?? item?.periodYears),
        savedAmount,
        monthlySavedAmount,
      };
    })
    .filter((item) => item.name && item.targetAmount > 0);
}

function getManagedItems(type) {
  const parsed = parseManagedType(type);
  if (parsed.kind === "cardDebts") {
    return getManagedItems("accountCards:personal");
  }
  if (parsed.kind === "personalSavings") {
    return getManagedItems("accountBanks:personal");
  }
  if (parsed.kind === "flowerChecking") {
    return getManagedItems("accountBanks:flower");
  }
  if (parsed.kind === "accountCards") {
    if (parsed.ledgerId === "personal") {
      return normalizeNamedAmountList(state.settings.cardDebts, {
        allowZero: true,
        amountParser: normalizeLiabilityAmount,
      });
    }
    const scoped = state.settings.accountScopedManagers?.[parsed.ledgerId]?.cards;
    return normalizeNamedAmountList(scoped, {
      allowZero: true,
      amountParser: normalizeLiabilityAmount,
    });
  }
  if (parsed.kind === "accountBanks") {
    if (parsed.ledgerId === "personal") {
      return normalizeNamedAmountList(state.settings.managedBalances?.personalSavings);
    }
    if (parsed.ledgerId === "flower") {
      return normalizeNamedAmountList(state.settings.managedBalances?.flowerChecking);
    }
    const scoped = state.settings.accountScopedManagers?.[parsed.ledgerId]?.banks;
    return normalizeNamedAmountList(scoped);
  }
  if (parsed.kind === "personalChecking") {
    return normalizeNamedAmountList(state.settings.managedBalances?.personalChecking);
  }
  return [];
}

function setManagedItems(type, items) {
  const parsed = parseManagedType(type);
  if (parsed.kind === "cardDebts") {
    setManagedItems("accountCards:personal", items);
    return;
  }
  if (parsed.kind === "personalSavings") {
    setManagedItems("accountBanks:personal", items);
    return;
  }
  if (parsed.kind === "flowerChecking") {
    setManagedItems("accountBanks:flower", items);
    return;
  }
  if (parsed.kind === "accountCards") {
    const normalized = normalizeNamedAmountList(items, {
      allowZero: true,
      amountParser: normalizeLiabilityAmount,
    });
    if (parsed.ledgerId === "personal") {
      state.settings.cardDebts = normalized;
      state.settings.cardDue = normalized.length ? sumNamedAmountList(normalized) : 0;
      return;
    }
    const scoped = normalizeAccountScopedManagers(state.settings.accountScopedManagers);
    state.settings.accountScopedManagers = {
      ...scoped,
      [parsed.ledgerId]: {
        cards: normalized,
        banks: normalizeNamedAmountList(scoped?.[parsed.ledgerId]?.banks),
      },
    };
    return;
  }
  if (parsed.kind === "accountBanks") {
    const normalized = normalizeNamedAmountList(items);
    if (parsed.ledgerId === "personal") {
      state.settings.managedBalances = {
        ...state.settings.managedBalances,
        personalSavings: normalized,
      };
      state.settings.openingBalances = {
        ...state.settings.openingBalances,
        personalSavings: normalized.length ? sumNamedAmountList(normalized) : 0,
      };
      return;
    }
    if (parsed.ledgerId === "flower") {
      state.settings.managedBalances = {
        ...state.settings.managedBalances,
        flowerChecking: normalized,
      };
      state.settings.openingBalances = {
        ...state.settings.openingBalances,
        flowerChecking: normalized.length ? sumNamedAmountList(normalized) : 0,
      };
      return;
    }
    const scoped = normalizeAccountScopedManagers(state.settings.accountScopedManagers);
    state.settings.accountScopedManagers = {
      ...scoped,
      [parsed.ledgerId]: {
        cards: normalizeNamedAmountList(scoped?.[parsed.ledgerId]?.cards, {
          allowZero: true,
          amountParser: normalizeLiabilityAmount,
        }),
        banks: normalized,
      },
    };
    return;
  }
  if (parsed.kind === "personalChecking") {
    const normalized = normalizeNamedAmountList(items);
    state.settings.managedBalances = {
      ...state.settings.managedBalances,
      personalChecking: normalized,
    };
    state.settings.openingBalances = {
      ...state.settings.openingBalances,
      personalChecking: normalized.length ? sumNamedAmountList(normalized) : 0,
    };
  }
}

function getManagedTotal(type) {
  const list = getManagedItems(type);
  if (!list.length) {
    return null;
  }
  return sumNamedAmountList(list);
}

function sumNamedAmountList(list) {
  return roundMoney(list.reduce((sum, item) => sum + item.amount, 0));
}

function getCardDueAmount() {
  const managed = getManagedTotal("cardDebts");
  if (managed !== null) {
    return managed;
  }
  return normalizeAmount(state.settings.cardDue);
}

function reduceCardDueAmount(amount, cardId = null) {
  let remaining = normalizeLiabilityAmount(amount);
  const cardDebts = getManagedItems("cardDebts");
  if (cardDebts.length) {
    const next = cardDebts.map((item) => ({ ...item }));
    if (cardId) {
      const targetIndex = next.findIndex((item) => item.id === cardId);
      if (targetIndex >= 0) {
        const target = next[targetIndex];
        const used = Math.min(target.amount, remaining);
        target.amount = roundMoney(Math.max(0, target.amount - used));
        remaining = roundMoney(remaining - used);
      }
    }

    for (const debt of next) {
      if (remaining <= 0) {
        break;
      }
      const used = Math.min(debt.amount, remaining);
      debt.amount = roundMoney(Math.max(0, debt.amount - used));
      remaining = roundMoney(remaining - used);
    }
    setManagedItems("cardDebts", next);
    return;
  }

  state.settings.cardDue = Math.max(0, roundMoney(normalizeAmount(state.settings.cardDue) - remaining));
}

function increaseCardDueAmount(amount, cardId = null) {
  const addition = normalizeLiabilityAmount(amount);
  if (addition <= 0) {
    return;
  }
  const cardDebts = getManagedItems("cardDebts");
  if (cardDebts.length) {
    let applied = false;
    const next = cardDebts.map((item) => {
      if (cardId && item.id === cardId) {
        applied = true;
        return { ...item, amount: roundMoney(item.amount + addition) };
      }
      return { ...item };
    });

    if (!applied) {
      if (cardId) {
        next.push({
          id: cardId,
          name: getCardNameById(cardId) || "카드",
          amount: addition,
        });
      } else if (next.length) {
        next[0] = { ...next[0], amount: roundMoney(next[0].amount + addition) };
      }
    }

    setManagedItems("cardDebts", next);
    return;
  }

  state.settings.cardDue = roundMoney(normalizeAmount(state.settings.cardDue) + addition);
}

function isCardPaymentTransfer(transaction) {
  return Boolean(transaction && transaction.kind === "transfer" && isCardTargetValue(transaction.toAccount));
}

function applyCardDebtForAddedTransaction(transaction) {
  if (!transaction) {
    return false;
  }
  if (isCardPaymentTransfer(transaction)) {
    reduceCardDueAmount(transaction.amount, getTransactionCardId(transaction));
    return true;
  }
  if (isCardDueTransaction(transaction)) {
    reduceCardDueAmount(transaction.amount, getTransactionCardId(transaction));
    return true;
  }
  return false;
}

function revertCardDebtForRemovedTransaction(transaction) {
  if (!transaction) {
    return false;
  }
  if (isCardPaymentTransfer(transaction)) {
    increaseCardDueAmount(transaction.amount, getTransactionCardId(transaction));
    return true;
  }
  if (isCardDueTransaction(transaction)) {
    increaseCardDueAmount(transaction.amount, getTransactionCardId(transaction));
    return true;
  }
  return false;
}

function getOpeningBalances() {
  const opening = state.settings.openingBalances || {};
  const managedSavings = getManagedTotal("personalSavings");
  const managedFlowerChecking = getManagedTotal("flowerChecking");
  return {
    personalChecking: normalizeAmount(opening.personalChecking),
    personalSavings:
      managedSavings !== null ? managedSavings : normalizeAmount(opening.personalSavings),
    personalCash: normalizeAmount(opening.personalCash),
    flowerChecking:
      managedFlowerChecking !== null
        ? managedFlowerChecking
        : normalizeAmount(opening.flowerChecking ?? opening.flowerMain),
    flowerCash: normalizeAmount(opening.flowerCash),
  };
}

function mergeWithOpeningBalances(txBalances, openingBalances) {
  return {
    personalChecking: txBalances.personalChecking + openingBalances.personalChecking,
    personalSavings: txBalances.personalSavings + openingBalances.personalSavings,
    personalCash: txBalances.personalCash + openingBalances.personalCash,
    flowerChecking: txBalances.flowerChecking + openingBalances.flowerChecking,
    flowerCash: txBalances.flowerCash + openingBalances.flowerCash,
  };
}

function loadFriendsHidden() {
  try {
    return localStorage.getItem(FRIENDS_HIDDEN_KEY) === "1";
  } catch {
    return false;
  }
}

function saveFriendsHidden(options = {}) {
  try {
    localStorage.setItem(FRIENDS_HIDDEN_KEY, state.friendsHidden ? "1" : "0");
    if (!options.silent) {
      markLocalDataChanged("friends-hidden");
    }
  } catch {
    // ignore storage errors
  }
}

function loadSyncConfig() {
  try {
    const raw = localStorage.getItem(SYNC_CONFIG_KEY);
    if (!raw) {
      return { ...DEFAULT_SYNC_CONFIG };
    }
    const parsed = JSON.parse(raw);
    return normalizeSyncConfig(parsed);
  } catch {
    return { ...DEFAULT_SYNC_CONFIG };
  }
}

function saveSyncConfig() {
  try {
    localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify(syncRuntime.config || DEFAULT_SYNC_CONFIG));
  } catch {
    // ignore storage errors
  }
}

function normalizeSyncConfig(input) {
  const endpoint = normalizeSyncEndpoint(input?.endpoint);
  const token = String(input?.token || "").trim();
  const intervalSec = Math.max(10, Math.min(600, Number(input?.intervalSec) || DEFAULT_SYNC_CONFIG.intervalSec));
  return {
    enabled: Boolean(input?.enabled) && Boolean(endpoint),
    endpoint,
    token,
    intervalSec,
  };
}

function normalizeSyncEndpoint(rawEndpoint) {
  let endpoint = String(rawEndpoint || "").trim();
  if (!endpoint) {
    return "";
  }

  if (/^gist:/i.test(endpoint)) {
    endpoint = endpoint.replace(/^gist:/i, "").trim();
  }
  if (/^[0-9a-f]{20,}$/i.test(endpoint)) {
    return `https://api.github.com/gists/${endpoint}`;
  }

  const webMatch = endpoint.match(/^https?:\/\/gist\.github\.com\/[^/]+\/([0-9a-f]+)(?:[/?#].*)?$/i);
  if (webMatch) {
    return `https://api.github.com/gists/${webMatch[1]}`;
  }

  const apiMatch = endpoint.match(/^https?:\/\/api\.github\.com\/gists\/([0-9a-f]+)(?:[/?#].*)?$/i);
  if (apiMatch) {
    return `https://api.github.com/gists/${apiMatch[1]}`;
  }

  return endpoint;
}

function loadSyncMeta() {
  try {
    const raw = localStorage.getItem(SYNC_META_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return normalizeSyncMeta(parsed);
  } catch {
    return normalizeSyncMeta({});
  }
}

function saveSyncMeta() {
  try {
    localStorage.setItem(SYNC_META_KEY, JSON.stringify(syncRuntime.meta || DEFAULT_SYNC_META));
  } catch {
    // ignore storage errors
  }
}

function normalizeSyncMeta(input) {
  return {
    deviceId: String(input?.deviceId || getOrCreateSyncDeviceId()),
    lastLocalUpdatedAt: Math.max(0, Number(input?.lastLocalUpdatedAt) || 0),
    lastSyncAt: Math.max(0, Number(input?.lastSyncAt) || 0),
    lastResult: String(input?.lastResult || "idle"),
    lastError: String(input?.lastError || ""),
  };
}

function getOrCreateSyncDeviceId() {
  try {
    const existing = localStorage.getItem(DEVICE_ID_KEY);
    if (existing) {
      return existing;
    }
    const generated = createId();
    localStorage.setItem(DEVICE_ID_KEY, generated);
    return generated;
  } catch {
    return `device-${Math.floor(Math.random() * 1000000000)}`;
  }
}

function markLocalDataChanged(reason = "local-change") {
  if (suppressLocalSyncMark || !syncRuntime.meta) {
    return;
  }
  syncRuntime.meta.lastLocalUpdatedAt = Date.now();
  syncRuntime.meta.lastResult = reason;
  syncRuntime.meta.lastError = "";
  saveSyncMeta();
  renderSyncStatus();
  triggerSync({ reason });
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) {
      return cloneDefaults(DEFAULT_SETTINGS);
    }

    const parsed = JSON.parse(raw);
    return normalizeSettings(parsed);
  } catch {
    return cloneDefaults(DEFAULT_SETTINGS);
  }
}

function normalizeSettings(input) {
  const settings = cloneDefaults(DEFAULT_SETTINGS);

  if (Array.isArray(input?.flowerKeywords)) {
    settings.flowerKeywords = uniqueStrings([...DEFAULT_SETTINGS.flowerKeywords, ...input.flowerKeywords]);
  }
  if (Array.isArray(input?.incomeKeywords)) {
    settings.incomeKeywords = uniqueStrings([...DEFAULT_SETTINGS.incomeKeywords, ...input.incomeKeywords]);
  }
  if (Array.isArray(input?.transferKeywords)) {
    settings.transferKeywords = uniqueStrings([...DEFAULT_SETTINGS.transferKeywords, ...input.transferKeywords]);
  }
  if (Array.isArray(input?.savingsKeywords)) {
    settings.savingsKeywords = uniqueStrings([...DEFAULT_SETTINGS.savingsKeywords, ...input.savingsKeywords]);
  }
  if (Array.isArray(input?.cashKeywords)) {
    settings.cashKeywords = uniqueStrings([...DEFAULT_SETTINGS.cashKeywords, ...input.cashKeywords]);
  }
  if (Array.isArray(input?.cardDueKeywords)) {
    settings.cardDueKeywords = uniqueStrings([...DEFAULT_SETTINGS.cardDueKeywords, ...input.cardDueKeywords]);
  }
  if (input?.openingBalances && typeof input.openingBalances === "object") {
    settings.openingBalances = {
      personalChecking: normalizeAmount(input.openingBalances.personalChecking),
      personalSavings: normalizeAmount(input.openingBalances.personalSavings),
      personalCash: normalizeAmount(input.openingBalances.personalCash),
      flowerChecking: normalizeAmount(input.openingBalances.flowerChecking ?? input.openingBalances.flowerMain),
      flowerCash: normalizeAmount(input.openingBalances.flowerCash),
    };
  }
  if (input?.cardDue !== undefined) {
    settings.cardDue = normalizeAmount(input.cardDue);
  }
  const legacyManagedChecking = normalizeNamedAmountList(input?.managedBalances?.personalChecking);
  if (input?.managedBalances && typeof input.managedBalances === "object") {
    settings.managedBalances = {
      personalChecking: [],
      personalSavings: normalizeNamedAmountList(input.managedBalances.personalSavings),
      flowerChecking: normalizeNamedAmountList(input.managedBalances.flowerChecking),
    };
  }
  if (Array.isArray(input?.cardDebts)) {
    settings.cardDebts = normalizeNamedAmountList(input.cardDebts, {
      allowZero: true,
      amountParser: normalizeLiabilityAmount,
    });
  }
  if (input?.accountScopedManagers && typeof input.accountScopedManagers === "object") {
    settings.accountScopedManagers = normalizeAccountScopedManagers(input.accountScopedManagers);
  }
  if (!settings.cardDebts.length && legacyManagedChecking.length) {
    settings.cardDebts = normalizeNamedAmountList(legacyManagedChecking, {
      allowZero: true,
      amountParser: normalizeLiabilityAmount,
    });
  }
  if (input?.cardColors && typeof input.cardColors === "object") {
    const nextColors = {};
    for (const [cardKey, color] of Object.entries(input.cardColors)) {
      const normalizedColor = normalizeHexColor(color);
      if (!normalizedColor) {
        continue;
      }
      nextColors[String(cardKey)] = normalizedColor;
    }
    settings.cardColors = {
      ...settings.cardColors,
      ...nextColors,
    };
  }
  if (input?.categoryColors && typeof input.categoryColors === "object") {
    const nextColors = {};
    for (const [category, color] of Object.entries(input.categoryColors)) {
      const normalizedColor = normalizeHexColor(color);
      if (!normalizedColor) {
        continue;
      }
      nextColors[String(category)] = normalizedColor;
    }
    settings.categoryColors = {
      ...settings.categoryColors,
      ...nextColors,
    };
  }
  if (Array.isArray(input?.categories)) {
    settings.categories = normalizeCategoryList(input.categories);
  }
  if (input?.categoryKeywords && typeof input.categoryKeywords === "object") {
    settings.categoryKeywords = normalizeCategoryKeywordMap(input.categoryKeywords, settings.categories);
  }
  if (input?.friendShortcuts && typeof input.friendShortcuts === "object") {
    settings.friendShortcuts = ensureDateShortcut(input.friendShortcuts);
  }
  if (Array.isArray(input?.savingGoals)) {
    settings.savingGoals = normalizeSavingGoals(input.savingGoals);
  }
  if (Array.isArray(input?.customRules)) {
    settings.customRules = input.customRules
      .map((rule) => ({
        id: rule.id || createId(),
        keyword: String(rule.keyword || "").trim().toLowerCase(),
        merchant: String(rule.merchant || "").trim(),
        category: String(rule.category || "").trim(),
        ledger: cleanText(rule.ledger, "auto"),
        kind: ["auto", "expense", "income", "transfer"].includes(rule.kind) ? rule.kind : "auto",
      }))
      .filter((rule) => rule.keyword)
      .map((rule) => ({
        ...rule,
        ledger: rule.ledger === "auto" ? "auto" : cleanText(rule.ledger, "auto"),
      }));
  }
  if (input?.userProfile && typeof input.userProfile === "object") {
    settings.userProfile = normalizeUserProfile(input.userProfile);
  } else {
    settings.userProfile = normalizeUserProfile(settings.userProfile);
  }

  settings.categories = normalizeCategoryList(settings.categories);
  settings.categoryKeywords = normalizeCategoryKeywordMap(settings.categoryKeywords, settings.categories);

  return settings;
}

function normalizeUserProfile(input) {
  const merged = {
    ...DEFAULT_USER_PROFILE,
    ...(input || {}),
  };
  const records = Array.isArray(merged.records)
    ? merged.records.map((name) => cleanText(name, "")).filter(Boolean)
    : [];
  const normalizedRecords = records.length
    ? records
    : [
        cleanText(merged.personalLedgerName, DEFAULT_USER_PROFILE.personalLedgerName),
        cleanText(merged.flowerLedgerName, DEFAULT_USER_PROFILE.flowerLedgerName),
      ];

  const combinedConfigs = Array.isArray(merged.combinedConfigs)
    ? merged.combinedConfigs
        .map((cfg) => ({
          name: cleanText(cfg?.name, ""),
          members: Array.isArray(cfg?.members)
            ? cfg.members.map((member) => cleanText(member, "")).filter((member) => normalizedRecords.includes(member))
            : [],
        }))
        .filter((cfg) => cfg.name && cfg.members.length >= 2)
    : [];

  const fallbackCombined =
    Boolean(merged.combinedEnabled) && cleanText(merged.combinedLedgerName, "")
      ? [
          {
            name: cleanText(merged.combinedLedgerName, DEFAULT_USER_PROFILE.combinedLedgerName),
            members: normalizedRecords.slice(0, 2),
          },
        ]
      : [];
  const resolvedCombined = combinedConfigs.length ? combinedConfigs : fallbackCombined;

  const normalizedAccountsTabName = (() => {
    const raw = cleanText(merged.accountsTabName, DEFAULT_USER_PROFILE.accountsTabName);
    return raw === "통장" ? DEFAULT_USER_PROFILE.accountsTabName : raw;
  })();

  return {
    onboardingDone: Boolean(merged.onboardingDone),
    records: normalizedRecords,
    combinedConfigs: resolvedCombined,
    personalLedgerName: cleanText(normalizedRecords[0], DEFAULT_USER_PROFILE.personalLedgerName),
    flowerLedgerName: cleanText(normalizedRecords[1], DEFAULT_USER_PROFILE.flowerLedgerName),
    accountsTabName: normalizedAccountsTabName,
    combinedEnabled: Boolean(resolvedCombined.length),
    combinedLedgerName: cleanText(resolvedCombined[0]?.name, DEFAULT_USER_PROFILE.combinedLedgerName),
  };
}

function uniqueStrings(values) {
  return Array.from(
    new Set(values.map((value) => String(value || "").trim().toLowerCase()).filter((value) => Boolean(value)))
  );
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
  markLocalDataChanged("settings");
}

function loadTransactions() {
  const rawCurrent = localStorage.getItem(STORAGE_KEY);
  if (rawCurrent !== null) {
    const parsedCurrent = safeParseJson(rawCurrent);
    if (Array.isArray(parsedCurrent)) {
      return parsedCurrent.map(normalizeTransaction).filter(Boolean);
    }
    return [];
  }

  const rawLegacy = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (rawLegacy === null) {
    return [];
  }

  const parsedLegacy = safeParseJson(rawLegacy);
  if (!Array.isArray(parsedLegacy)) {
    return [];
  }

  const migrated = parsedLegacy.map(migrateLegacyTransaction).filter(Boolean);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
  return migrated;
}

function normalizeTransaction(item) {
  if (!item || !item.id || !item.date) {
    return null;
  }

  const kind = ["expense", "income", "transfer"].includes(item.kind) ? item.kind : "expense";
  const ledger = cleanText(item.ledger, "personal");
  const amount = Math.abs(Number(item.amount));
  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }

  const parsedDate = new Date(item.date);
  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  const transaction = {
    id: String(item.id),
    date: parsedDate.toISOString(),
    ledger,
    kind,
    amount,
    merchant: String(item.merchant || "Quick Entry"),
    category: String(item.category || "Other"),
    rawInput: String(item.rawInput || ""),
    account: null,
    fromAccount: null,
    toAccount: null,
    cardId: null,
  };

  if (kind === "transfer") {
    transaction.fromAccount = PERSONAL_ACCOUNTS.includes(item.fromAccount)
      ? item.fromAccount
      : "personalChecking";
    transaction.toAccount =
      PERSONAL_ACCOUNTS.includes(item.toAccount) || isCardTargetValue(item.toAccount)
        ? String(item.toAccount)
        : "personalSavings";
    const cardIdFromTarget = getCardIdFromTargetValue(transaction.toAccount);
    transaction.cardId =
      cardIdFromTarget ||
      (typeof item.cardId === "string" && item.cardId.trim() ? item.cardId.trim() : null);
  } else if (ledger === "flower") {
    transaction.account = FLOWER_ACCOUNTS.includes(item.account)
      ? item.account
      : item.account === "flowerMain"
        ? "flowerChecking"
        : "flowerChecking";
    transaction.cardId = null;
  } else {
    transaction.account = PERSONAL_ACCOUNTS.includes(item.account)
      ? item.account
      : "personalChecking";
    transaction.cardId = typeof item.cardId === "string" && item.cardId.trim() ? item.cardId.trim() : null;
  }

  return transaction;
}

function migrateLegacyTransaction(item) {
  if (!item || !item.id || !item.date || typeof item.amount !== "number") {
    return null;
  }

  const amount = Math.abs(Number(item.amount));
  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }

  const parsedDate = new Date(item.date);
  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return {
    id: String(item.id),
    date: parsedDate.toISOString(),
    ledger: "personal",
    kind: "expense",
    amount,
    merchant: String(item.merchant || "Quick Entry"),
    category: String(item.category || "Other"),
    account: "personalChecking",
    fromAccount: null,
    toAccount: null,
    cardId: null,
    rawInput: String(item.rawInput || ""),
  };
}

function saveTransactions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.transactions));
  markLocalDataChanged("transactions");
}

function safeParseJson(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function cloneDefaults(value) {
  return JSON.parse(JSON.stringify(value));
}

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
}

function formatMoney(amount) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: CURRENCY }).format(amount);
}

function formatSignedMoney(amount) {
  const abs = formatMoney(Math.abs(amount));
  if (amount > 0) {
    return `+${abs}`;
  }
  if (amount < 0) {
    return `-${abs}`;
  }
  return abs;
}

function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("ko-KR", { month: "numeric", day: "numeric" });
}

function getMonthKey(input) {
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) {
    return getMonthKey(getToday());
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function formatMonthLabel(monthKey) {
  const [yearRaw, monthRaw] = String(monthKey || "").split("-");
  const year = Number(yearRaw);
  const month = Number(monthRaw);
  if (!Number.isFinite(year) || !Number.isFinite(month) || month < 1 || month > 12) {
    const today = getToday();
    return `${today.getFullYear()}년 ${today.getMonth() + 1}월`;
  }
  return `${year}년 ${month}월`;
}

function toIsoDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0).toISOString();
}

function normalizeText(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function getToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

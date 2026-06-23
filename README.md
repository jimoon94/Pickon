# Pickon

수많은 아이콘 중 내가 원하는 것만 빠르게 **픽**해서 쓰는 아이콘 탐색 도구입니다.  
GCP · AWS · Tabler · Lucide · Material 아이콘을 한 곳에서 탐색, 커스터마이징, 복사할 수 있습니다.

## 주요 기능

### 탭
- **Icons** — 전체 아이콘 탐색. 세트/카테고리 필터 + 한국어·영어 퍼지 검색
- **Favorites** — 즐겨찾기한 아이콘 모음. 필터·검색 동일 적용
- **Packs** — 유스케이스 기반 큐레이션 팩 (이커머스, 대시보드, 소셜, 인증, 파일 등 11종)

### 검색
- 한국어·영어 퍼지 검색 (fuse.js + QUERY_MAP alias)
- 검색 히스토리 — 최근 검색어 드롭다운, 개별/전체 삭제
- 팩 탭에서 검색 시 선택된 팩 내에서만 검색

### 아이콘 상세 패널
- **Copy 탭 UI** — SVG / ID / Import / Component 탭으로 코드 미리보기 후 복사
- **Download SVG** — 설정값 반영하여 다운로드
- **커스터마이저** — Color, Stroke width, Size 실시간 조절 (localStorage에 기억)
- 세트 배지 + 카테고리 표시

### 기타
- 그리드 / 리스트 뷰 전환 (전 탭 지원)
- 다크 / 라이트 테마 토글
- URL 쿼리 파라미터로 탭 상태 유지 (`?tab=favorites`)
- 즐겨찾기 localStorage 영속
- 가상 스크롤 (10,000+ 아이콘 부드럽게 렌더링)

## 아이콘 현황

| 세트 | 개수 |
|---|---|
| Tabler | 6,203 |
| Material | 2,131 |
| Lucide | 1,981 |
| AWS | 776 |
| GCP | 252 |
| **합계** | **11,343** |

## Copy 기능 지원 범위

| 아이콘 | SVG | ID | Import | Component |
|---|---|---|---|---|
| Tabler | ✅ | ✅ | ✅ | ✅ |
| Lucide | ✅ | ✅ | ✅ | ✅ |
| Material | ✅ | ✅ | ✅ | ✅ |
| GCP / AWS | ✅ | ✅ | — | — |

## 스택

| 항목 | 버전 |
|---|---|
| Next.js | 16 (Turbopack) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| @tanstack/react-virtual | 3 |
| fuse.js | 7 |
| next-themes | 0.4 |
| @tabler/icons-react | 3 |
| lucide-react | 1 |
| @mui/icons-material | 5 |

## 시작하기

```bash
pnpm install
pnpm dev
```

http://localhost:3000 에서 확인합니다.

## 빌드

```bash
pnpm build
pnpm start
```

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx             # 메인 레이아웃 (탭, 검색, 필터)
│   ├── icon.svg             # 파비콘 (다크모드 대응)
│   └── globals.css
├── components/
│   ├── IconGrid.tsx          # 가상 스크롤 그리드/리스트
│   ├── IconCard.tsx          # 개별 아이콘 카드
│   ├── IconDetailPanel.tsx   # 우측 상세 패널 (커스터마이저, 복사)
│   ├── Sidebar.tsx           # 세트/카테고리 필터
│   ├── SearchBar.tsx         # 검색창 + 히스토리 드롭다운
│   ├── FavoritesPage.tsx     # 즐겨찾기 탭
│   ├── PackPage.tsx          # 팩 탭
│   ├── ThemeToggle.tsx       # 라이트/다크 토글
│   └── LogoIcon.tsx          # 로고 (다크모드 색상 전환)
├── data/
│   ├── icons.ts              # 전체 아이콘 집합
│   ├── packs.ts              # 큐레이션 팩 정의
│   ├── aws-icons.ts
│   ├── gcp-icons.ts
│   ├── tabler-icons.ts
│   ├── lucide-icons.ts
│   └── material-icons.ts
├── lib/
│   ├── iconLoader.ts         # 동적 임포트 + 모듈 캐싱
│   ├── search.ts             # fuse.js 퍼지 검색 + 한국어/영어 alias
│   ├── getPackIcons.ts       # 팩 아이콘 필터링
│   ├── useFavorites.ts       # 즐겨찾기 훅
│   └── useSearchHistory.ts   # 검색 히스토리 훅
└── types/
    └── icon.ts
```

## 검색 예시

| 입력 | 검색 결과 |
|---|---|
| `보안` | security, lock, shield 관련 아이콘 |
| `날씨` / `weather` | sun, cloud, rain, snow 등 |
| `SNS` | facebook, instagram, twitter 등 |
| `화살표` | arrow, chevron, move 계열 |
| `설정` | settings, configuration 관련 |

`src/lib/search.ts`의 `QUERY_MAP`에 키워드를 추가해 확장할 수 있습니다.

## 아이콘 소스

| 세트 | 출처 |
|---|---|
| GCP | [Google Cloud Icons](https://cloud.google.com/icons) |
| AWS | [AWS Architecture Icons](https://aws.amazon.com/architecture/icons/) |
| Tabler | [@tabler/icons-react](https://tabler.io/icons) |
| Lucide | [lucide-react](https://lucide.dev) |
| Material | [@mui/icons-material](https://mui.com/material-ui/material-icons/) |

import { ProjectDetail, ProjectSlug } from "@/app/types/project"

export const PROJECT_DETAILS: Record<ProjectSlug, ProjectDetail> = {
  // 같이달림 Trun 팀 프로젝트
  trun: {
    description:
      "사용자가 러닝 모임을 탐색하고 참여할 수 있으며, 직접 모임을 개설하고 리뷰를 작성할 수 있는 러닝 커뮤니티 플랫폼입니다.",

    features: [
      "마이페이지 전반 UI 및 기능 개발 담당",
      "참여 모임, 생성 모임, 작성 리뷰를 통합 관리할 수 있는 사용자 대시보드 개발",
      "프로필 수정 기능 구현 및 TanStack Query 기반 데이터 동기화 처리",
      "useInfiniteQuery와 Intersection Observer를 활용한 무한 스크롤 구현",
      "TanStack Query 기반 서버 상태 관리 및 캐싱 구조 설계",
    ],

    troubleshooting: [
      {
        title: "React Query queryKey 설계를 통한 캐시 충돌 문제 개선",

        problem:
          "마이페이지는 사용자별 데이터뿐만 아니라 탭, 정렬, 완료 여부, 리뷰 작성 여부 등 조회 조건에 따라 서로 다른 결과를 반환하는 구조였습니다. 하지만 queryKey가 이러한 조건을 충분히 반영하지 않아 서로 다른 조회 결과가 동일한 캐시에 저장되면서 데이터가 섞여 보이는 문제가 발생했습니다.",

        solution:
          '사용자 ID, 데이터 유형, 조회 조건을 모두 queryKey에 포함하도록 ["mypage", domain, "infinite", userId, params] 구조로 재설계했습니다. 이를 통해 동일한 API라도 사용자와 조회 조건마다 독립적인 캐시가 생성되도록 구성했습니다.',

        beforeImage: "/images/ts1_trun_before.png",
        beforeCaption: "기존 queryKey 구조",

        afterImage: "/images/ts1_trun_after.png",
        afterCaption: "개선된 queryKey 구조",

        result:
          "사용자와 조회 조건별로 캐시가 분리되어 데이터 일관성을 확보하고 캐시 충돌을 방지했습니다. 또한 기존 캐시를 효율적으로 재사용하여 불필요한 API 요청을 줄이고 안정적인 데이터 조회 환경을 구축했습니다.",
      },

      {
        title: "인증 구조 변경에 따른 마이페이지 데이터 조회 로직 대응",

        problem:
          "팀 프로젝트 진행 중 인증 구조가 LocalStorage 기반에서 NextAuth, 이후 Auth BFF 기반으로 변경되었습니다. 이에 따라 기존 인증 상태에 의존하던 마이페이지 데이터 조회 로직도 새로운 인증 구조에 맞게 재구성해야 했습니다.",

        solution:
          "변경된 Auth BFF 기반 인증 흐름에 맞춰 마이페이지 데이터 조회 로직을 수정했습니다. useSession 기반 인증 상태 확인 대신 useUserProfileQuery를 통해 user.id를 기준으로 데이터를 조회하도록 변경하여 새로운 인증 구조에 대응했습니다.",

        afterImage: "/images/ts2_trun_bff.png",

        result:
          "인증 구조 변경 이후에도 마이페이지 데이터 조회가 안정적으로 동작하도록 대응했으며, 인증 방식과 마이페이지 데이터 조회 흐름을 분리하여 유지보수하기 쉬운 구조로 개선했습니다.",
      },

      {
        title: "프로필 수정 후 서버 상태 동기화 개선",

        problem:
          "프로필 수정 후 서버 데이터와 화면에 표시되는 정보가 즉시 동기화되지 않아 사용자가 변경 결과를 바로 확인하기 어려운 문제가 있었습니다.",

        solution:
          "프로필 수정 mutation 성공 후 invalidateQueries를 호출하여 기존 프로필 캐시를 무효화하고, 최신 사용자 정보를 자동으로 재조회하도록 개선했습니다.",

        result:
          "프로필 수정 완료 후 별도의 새로고침 없이 변경된 정보가 즉시 반영되도록 개선하여 서버 상태와 UI 상태의 일관성을 유지했습니다.",
      },
    ],

    achievements: [
      "Service Layer 분리를 통해 API 요청 로직과 UI 로직을 분리하는 구조 설계의 중요성",
      "TanStack Query 기반 서버 상태 관리에서 queryKey 설계와 캐시 전략의 중요성",
      "사용자별 데이터 조회 시 캐시 충돌 방지를 위한 명확한 queryKey 구성 방식",
      "useInfiniteQuery와 Intersection Observer를 활용한 효율적인 무한 스크롤 구현 방식",
      "인증 구조 변경 시 데이터 조회 로직을 독립적으로 관리하는 구조의 필요성",
    ],
  },

  // EXPERIA 팀 프로젝트
  experia: {
    description:
      "사용자가 다양한 지역 체험 활동을 탐색하고 예약할 수 있으며, 호스트는 체험 상품을 등록하고 관리할 수 있는 체험 예약 플랫폼입니다.",

    features: [
      "메인 페이지 인기 체험 영역 UI 및 데이터 조회 기능 구현",
      "SSR/CSR 기반 데이터 페칭 구조 설계 및 적용",
      "Debounce 기반 검색 기능 구현",
      "TanStack Query와 Intersection Observer를 활용한 무한 스크롤 구현",
      "React Hook Form + Zod 기반 회원가입 및 입력 검증 기능 구현",
      "회원가입 후 자동 로그인 UX 구현",
    ],

    troubleshooting: [
      {
        title: "SSR/CSR 기반 초기 로딩 최적화 및 데이터 페칭 구조 개선",

        problem:
          "인기 체험 영역은 사용자가 메인 페이지 진입 후 가장 먼저 확인하는 콘텐츠였지만, 많은 데이터를 한 번에 불러오면서 초기 렌더링 지연과 네트워크 부하가 발생했습니다. 또한 초기 콘텐츠 노출이 늦어질 경우 사용자 경험과 SEO 측면에서 개선이 필요한 상황이었습니다.",

        solution:
          "초기 페이지 진입 시 SSR(Server-Side Rendering)을 적용하여 인기 체험 데이터를 서버에서 미리 가져오도록 구현했습니다. 이후 사용자가 캐러셀 끝까지 탐색하는 경우 TanStack Query와 무한 스크롤을 활용해 CSR(Client-Side Rendering) 방식으로 추가 데이터를 동적으로 불러오도록 구현했습니다.",

        result:
          "초기 콘텐츠 노출 속도를 개선하고 SEO를 확보했으며, 사용자가 필요한 시점에만 추가 데이터를 불러올 수 있도록 하여 네트워크 부담을 줄이고 자연스러운 탐색 경험을 제공했습니다.",
      },

      {
        title: "Debounce와 Infinite Scroll을 활용한 검색 경험 개선",

        problem:
          "사용자가 검색어를 입력할 때마다 API 요청이 발생하여 불필요한 네트워크 요청이 증가하고 응답 지연이 발생하는 문제가 있었습니다. 또한 검색 결과가 많아질 경우 페이지네이션 기반 탐색 과정에서 사용자의 흐름이 끊기는 문제가 있었습니다.",

        solution:
          "Debounce를 적용하여 입력이 일정 시간 동안 멈춘 경우에만 API 요청이 발생하도록 개선했습니다. 또한 Intersection Observer와 TanStack Query 기반 무한 스크롤을 적용하여 사용자가 스크롤만으로 다음 데이터를 자연스럽게 탐색할 수 있도록 구현했습니다.",

        result:
          "불필요한 API 요청을 줄이고 검색 응답 효율을 개선했으며, 페이지 이동 없이 연속적으로 검색 결과를 탐색할 수 있는 사용자 경험을 제공했습니다.",
      },

      {
        title: "React Hook Form 기반 입력 관리 및 인증 UX 개선",

        problem:
          "회원가입 기능 구현 과정에서 useState로 입력값을 개별 관리하고 검증 로직이 여러 곳에 분산되어 코드 복잡도가 증가하는 문제가 있었습니다. 또한 회원가입 이후 별도의 로그인 과정이 필요해 사용자 흐름이 단절되는 문제가 발생했습니다.",

        solution:
          "React Hook Form과 Zod를 도입하여 폼 상태와 검증 로직을 일원화했습니다. 또한 회원가입 성공 시 자동 로그인 기능을 구현하고 인증 정보를 저장하여 사용자가 추가 로그인 없이 서비스를 이용할 수 있도록 개선했습니다.",

        result:
          "폼 상태와 검증 로직을 일관되게 관리할 수 있는 구조를 구축했으며, 회원가입 이후 즉시 서비스를 이용할 수 있도록 인증 UX를 개선했습니다.",
      },
    ],

    achievements: [
      "SSR과 CSR을 적절히 조합하여 초기 로딩 성능 및 SEO 개선",
      "Debounce 적용을 통해 불필요한 API 요청 감소",
      "TanStack Query 기반 무한 스크롤 구현으로 탐색 경험 개선",
      "React Hook Form과 Zod를 활용한 입력 검증 구조 구축",
      "렌더링 전략 논의에 참여하고 최적화 구조를 담당 영역에 확장 적용",
    ],
  },

  // 웹 포트폴리오
  portfolio: {
    description:
      "저의 개발 기술 스택과 진행한 프로젝트들을 보여주기 위해 제작한 웹 포트폴리오 입니다. 사용자 경험을 고려해 인터랙티브한 요소를 추가했고, 추가적인 라이브러리 없이 다양한 효과들을 직접 구현했습니다.",

    features: ["내용1", "내용2", "내용3", "내용4"],

    troubleshooting: [
      {
        title: "폴더 구조 개선",

        problem: "설명1",

        solution: "설명2",

        result: "설명3",
      },

      {
        title: "트러블 슈팅2",

        problem: "설명1",

        solution: "설명2",

        result: "설명3",
      },
    ],

    achievements: ["내용1", "내용2", "내용3", "내용4", "내용5"],
  },
}

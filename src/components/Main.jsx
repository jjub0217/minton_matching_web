import styled from "styled-components";
import { MatchingCard } from "./MatchingCard";

const MatchingList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  min-width: 440px;
`;

export const Main = () => {
  // 서버에서 받아올 예정인 카드 리스트
  const cardList = [
    {
      id: 1,
      title: "[초보환영] 강남구 배드민턴 매칭",
      beginner: "초심",
      description:
        "초보자도 환영합니다! 친근한 분위기에서 배드민턴을 즐겨보세요. 체력에 맞춰 쉬어가면서 진행하겠습니다.",
      imgUrl:
        "https://www.nowonsc.kr/design/homepage/nowon/img/sub/badminton_img0301.jpg",
      detailLocation: "강남구민체육관2222222222",
      detailTime: "24-06-10",
      detailCurrentCapacity: 8,
      detailCapacity: 12,
      detailGrade: "초심",
      bookmarkCount: 133,
      viewCount: 133,
      bookmarkCount: 12,
    },
    {
      id: 2,
      title: "[D조 모여라] 송파구 저녁 배드민턴",
      beginner: "D조",
      description:
        "업무 후 가볍게 즐기는 저녁 매칭입니다. 송파구 주민 위주로 진행하며 게임 후 간단한 뒤풀이도 있어요!",
      imgUrl:
        "https://image.kmib.co.kr/online_image/2023/0420/2023042008424726042_1681941768_0018062635.jpg",
      detailLocation: "송파체육문화센터",
      detailTime: "24-06-12",
      detailCurrentCapacity: 10,
      detailCapacity: 12,
      detailGrade: "D조",
      bookmarkCount: 25,
      viewCount: 210,
    },
    {
      id: 3,
      title: "[경기력 향상] 마포구 주말 고급 매칭",
      beginner: "B조",
      description:
        "실력 있는 플레이어들과의 치열한 랠리를 즐겨보세요. B조 이상을 위한 경기 중심 매칭입니다.",
      imgUrl:
        "https://cdn.topstarnews.net/news/photo/202207/14655583_905566_2916.jpg",
      detailLocation: "마포구 실내체육관",
      detailTime: "24-06-15",
      detailCurrentCapacity: 6,
      detailCapacity: 8,
      detailGrade: "B조",
      bookmarkCount: 48,
      viewCount: 298,
    },
    {
      id: 4,
      title: "[여성전용] 노원구 아침 매칭",
      beginner: "C조",
      description:
        "여성 플레이어만 참여 가능한 아침 매칭입니다. 부드럽고 안전한 경기 환경을 제공합니다.",
      imgUrl:
        "https://img.khan.co.kr/news/2023/09/01/l_2023090101000023000000621.jpg",
      detailLocation: "노원구민체육센터",
      detailTime: "24-06-20",
      detailCurrentCapacity: 4,
      detailCapacity: 8,
      detailGrade: "C조",
      bookmarkCount: 31,
      viewCount: 175,
    },
    {
      id: 5,
      title: "[상급] 마포구 아침 매칭",
      beginner: "C조",
      description: "상급자 위주로 진행합니다. 아침에 상쾌하게 운동해요!",
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/09/32/badminton-1867005_1280.jpg",
      detailLocation: "마포구체육관",
      detailTime: "24-06-12",
      detailCurrentCapacity: 6,
      detailCapacity: 10,
      detailGrade: "C조",
      viewCount: 200,
      bookmarkCount: 5,
    },
    {
      id: 6,
      title: "[A조] 강동구 저녁 매칭",
      beginner: "A조",
      description: "최상급자 매칭입니다. 실전 감각을 키우고 싶은 분 환영!",
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/01/20/00/30/badminton-1994377_1280.jpg",
      detailLocation: "강동구체육관",
      detailTime: "24-06-13",
      detailCurrentCapacity: 4,
      detailCapacity: 8,
      detailGrade: "A조",
      viewCount: 100,
      bookmarkCount: 3,
    },
    {
      id: 7,
      title: "[초심] 노원구 점심 매칭",
      beginner: "초심",
      description: "점심시간에 가볍게 즐기는 배드민턴 매칭입니다.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/09/32/badminton-1867005_1280.jpg",
      detailLocation: "노원구체육관",
      detailTime: "24-06-14",
      detailCurrentCapacity: 12,
      detailCapacity: 16,
      detailGrade: "초심",
      viewCount: 70,
      bookmarkCount: 7,
    },
    {
      id: 8,
      title: "[B조] 구로구 저녁 매칭",
      beginner: "B조",
      description: "B조 회원들과 함께하는 저녁 매칭입니다.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/01/20/00/30/badminton-1994377_1280.jpg",
      detailLocation: "구로구체육관",
      detailTime: "24-06-15",
      detailCurrentCapacity: 9,
      detailCapacity: 12,
      detailGrade: "B조",
      viewCount: 150,
      bookmarkCount: 10,
    },
    {
      id: 9,
      title: "[D조] 서초구 아침 매칭",
      beginner: "D조",
      description: "아침에 모여서 가볍게 운동하는 매칭입니다.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/09/32/badminton-1867005_1280.jpg",
      detailLocation: "서초구체육관",
      detailTime: "24-06-16",
      detailCurrentCapacity: 7,
      detailCapacity: 10,
      detailGrade: "D조",
      viewCount: 90,
      bookmarkCount: 6,
    },
    {
      id: 10,
      title: "[C조] 용산구 점심 매칭",
      beginner: "C조",
      description: "점심시간에 실력자들과 함께하는 매칭입니다.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/01/20/00/30/badminton-1994377_1280.jpg",
      detailLocation: "용산구체육관",
      detailTime: "24-06-17",
      detailCurrentCapacity: 11,
      detailCapacity: 14,
      detailGrade: "C조",
      viewCount: 220,
      bookmarkCount: 9,
    },
    {
      id: 11,
      title: "[B조] 동작구 저녁 매칭",
      beginner: "B조",
      description: "B조 회원들과 함께하는 저녁 매칭입니다.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/09/32/badminton-1867005_1280.jpg",
      detailLocation: "동작구체육관",
      detailTime: "24-06-18",
      detailCurrentCapacity: 5,
      detailCapacity: 8,
      detailGrade: "B조",
      viewCount: 80,
      bookmarkCount: 4,
    },
    {
      id: 12,
      title: "[초심] 강서구 아침 매칭",
      beginner: "초심",
      description: "아침에 모여서 가볍게 운동하는 매칭입니다.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/01/20/00/30/badminton-1994377_1280.jpg",
      detailLocation: "강서구체육관",
      detailTime: "24-06-19",
      detailCurrentCapacity: 13,
      detailCapacity: 16,
      detailGrade: "초심",
      viewCount: 110,
      bookmarkCount: 11,
    },
    {
      id: 13,
      title: "[A조] 은평구 저녁 매칭",
      beginner: "A조",
      description: "최상급자 매칭입니다. 실전 감각을 키우고 싶은 분 환영!",
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/09/32/badminton-1867005_1280.jpg",
      detailLocation: "은평구체육관",
      detailTime: "24-06-20",
      detailCurrentCapacity: 3,
      detailCapacity: 8,
      detailGrade: "A조",
      viewCount: 30,
      bookmarkCount: 2,
    },
  ];

  return (
    <>
      <MatchingList>
        {cardList.map((card) => (
          <MatchingCard key={card.id} card={card} />
        ))}
      </MatchingList>
    </>
  );
};

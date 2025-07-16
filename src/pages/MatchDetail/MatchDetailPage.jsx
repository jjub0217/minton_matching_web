import { useEffect, useState } from "react";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { PageContainer } from "../../components/Common/PageContainer.style";
import { ProfileImage } from "../../components/Common/ProfileImage.style";
import { meetingDetail } from "../../data/cardDetail.json";
import { ParticipantsContainer } from "./component/Participant/ParticipantsContainer";
import { RecommendationList } from "./component/Recommend/RecommendationList";
import {
  HostProfileInfoBox,
  HostProfileMetaInfoList,
  HostProfileSection,
  MeetingDescription,
  MeetingInfoList,
  MeetingMapImage,
  MeetingMapInfo,
  MeetingMapSection,
  MeetingPlaceImageBox,
  PostStatus,
  ViewCount,
  ViewLike,
} from "./MatchDetailPage.styles";
export const MatchDetailPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    setDetail(meetingDetail);
  }, []);

  if (!detail) {
    return <div>존재하지 않는 매칭입니다.</div>;
  }

  return (
    <PageContainer $padding={"0 0 32px 0"}>
      {/* 주최장소 사진 */}
      <MeetingPlaceImageBox>
        <img src={detail.imgUrl} alt={detail.place} />
        <figcaption className="blind">{detail.title}</figcaption>
      </MeetingPlaceImageBox>

      <div className="inner">
        <h1 className="blind">{detail.title}</h1>

        {/* 주최자 프로필 */}
        <HostProfileSection
          aria-labelledby="host-id"
          aria-label="주최자 정보 섹션"
        >
          {/* 유저 프로필 이미지 */}
          <ProfileImage>
            <img src={detail.user.profileImg} alt={detail.user.id} />
          </ProfileImage>

          {/* 유저 정보 */}
          <HostProfileInfoBox>
            <h2 id="host-id">{detail.user.id}</h2>

            <HostProfileMetaInfoList aria-label="작성 위치와 시간">
              <li>{detail.user.location}</li>
              <li>{detail.user.postedAgo}</li>
            </HostProfileMetaInfoList>
          </HostProfileInfoBox>
        </HostProfileSection>

        {/* 미팅 정보 summary */}
        <MeetingInfoList aria-label="모임 요약 정보">
          <li>
            <CiClock2 size={17} aria-label="시간" />
            {detail.time}
          </li>
          <li>
            <CiLocationOn size={17} aria-label="장소" />
            {detail.place}
          </li>
        </MeetingInfoList>

        {/* 미팅 상세 내용 */}
        <MeetingDescription>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
        </MeetingDescription>

        {/* 미팅 장소 상세 내용 */}
        <MeetingMapSection aria-labelledby="map-section-title">
          <h2 id="map-section-title" className="blind">
            모임 장소 상세 정보
          </h2>
          <MeetingMapImage>
            <img src={detail.map.image} alt={`${detail.map.place} 위치 지도`} />
          </MeetingMapImage>

          <MeetingMapInfo>
            <span className="map-building">{detail.map.place}</span>
            <span className="map-address">{detail.map.address}</span>
          </MeetingMapInfo>
        </MeetingMapSection>

        {/* 좋아요 수와 해당 페이지 조회 수 */}
        <PostStatus aria-label="게시물 상태">
          <ViewLike role="group" aria-label={`좋아요 ${detail.likes}개`}>
            <FaHeart aria-hidden="true" size={15} />
            <span className="like-count">{detail.likes}</span>
          </ViewLike>
          <ViewCount>
            <span className="blind">조회수</span>
            <span aria-hidden="true">조회</span>
            <span>{detail.views}</span>
          </ViewCount>
        </PostStatus>

        {/* 미팅 참여인원 정보 영역 */}
        <ParticipantsContainer
          participants={detail.participants}
          id={id}
          time={detail.time}
        />
      </div>
      <RecommendationList recommendations={detail.recommendations} />
    </PageContainer>
  );
};

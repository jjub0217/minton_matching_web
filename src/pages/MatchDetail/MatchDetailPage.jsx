import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { meetingDetail } from "../../data/cardDetail.json";
import {
  DetailContainer,
  HostProfile,
  HostProfileImage,
  HostProfileInfo,
  HostProfileMetaInfo,
  MeetingDescription,
  MeetingInfo,
  MeetingMapImage,
  MeetingMapInfo,
  MeetingMapSection,
  MeetingPlaceImage,
  PostStatus,
  ViewCount,
  ViewLike,
} from "./MatchDetailPage.styles";
import { ParticipantsContainer } from "./component/Participant/ParticipantsContainer";
import { RecommendationList } from "./component/Recommend/RecommendationList";

export const MatchDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    setDetail(meetingDetail);
  }, []);

  if (!detail) {
    return <div>존재하지 않는 매칭입니다.</div>;
  }

  return (
    <DetailContainer>
      {/* 주최장소 사진 */}
      <MeetingPlaceImage>
        <img src={detail.imgUrl} alt={detail.place} />
      </MeetingPlaceImage>

      <div className="inner">
        {/* 주최자 프로필 */}
        <HostProfile>
          {/* 유저 프로필 이미지 */}
          <HostProfileImage>
            <img src={detail.user.profileImg} alt={detail.user.id} />
          </HostProfileImage>

          {/* 유저 정보 */}
          <HostProfileInfo>
            <span className="host-id">{detail.user.id}</span>

            <HostProfileMetaInfo>
              <span>{detail.user.location}</span>
              <span>{detail.user.postedAgo}</span>
            </HostProfileMetaInfo>
          </HostProfileInfo>
        </HostProfile>

        {/* 미팅 정보 summary */}
        <MeetingInfo>
          <span className="icon">🕒</span>
          <span>{detail.time}</span>
        </MeetingInfo>
        <MeetingInfo>
          <span className="icon">📍</span>
          <span>{detail.place}</span>
        </MeetingInfo>

        {/* 미팅 상세 내용 */}
        <MeetingDescription>
          <h2>{detail.title}</h2>
          <span>{detail.description}</span>
        </MeetingDescription>

        {/* 미팅 장소 상세 내용 */}
        <MeetingMapSection>
          <MeetingMapImage>
            <img src={detail.map.image} alt="지도 캡쳐" />
          </MeetingMapImage>

          <MeetingMapInfo>
            <span className="map-building">{detail.map.place}</span>
            <span className="map-address">{detail.map.address}</span>
          </MeetingMapInfo>
        </MeetingMapSection>

        {/* 좋아요 수와 해당 페이지 조회 수 */}
        <PostStatus>
          <ViewLike>
            <span className="heart">&#9829;</span>
            <span className="like-count">23</span>
          </ViewLike>
          <ViewCount>
            <span>조회</span>
            <span>{detail.views}</span>
          </ViewCount>
        </PostStatus>

        {/* 미팅 참여인원 정보 영역 */}
        <ParticipantsContainer participants={detail.participants} />
      </div>
      <RecommendationList recommendations={detail.recommendations} />
    </DetailContainer>
  );
};

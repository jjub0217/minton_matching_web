import { SocialButton } from "../../components/Button/SocialButton";
import { ActionButtons } from "../../components/Common/ActionButtons.style";
import { PageContainer } from "./LoginPage.style";

export const LoginPage = () => {
  return (
    <PageContainer height={"100vh"}>
      <div className="inner">
        <h2>배드민턴 매칭 서비스</h2>
        <p>간편하게 소셜 계정으로 시작하세요</p>
        <ActionButtons>
          <SocialButton title="카카오톡 로그인" socialType="kakao" />
          <SocialButton title="네이버 로그인" socialType="naver" />
          <SocialButton title="구글 로그인" socialType="google" />
        </ActionButtons>
      </div>
    </PageContainer>
  );
};

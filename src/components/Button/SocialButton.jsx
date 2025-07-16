import google from "../../assets/google.svg";
import kakao from "../../assets/kakao.svg";
import naver from "../../assets/naver.svg";
import { SocialBtn, SocialBtnImage } from "../Common/Button.styles";

const socialConfig = {
  kakao: {
    img: kakao,
    alt: "카카오톡 로그인",
    className: "kakao",
  },
  naver: {
    img: naver,
    alt: "네이버 로그인",
    className: "naver",
  },
  google: {
    img: google,
    alt: "구글 로그인",
    className: "google",
  },
};

export const SocialButton = ({ title, socialType }) => {
  const config = socialConfig[socialType];

  if (!config) return null;

  return (
    <SocialBtn type="button" title={title} className={config.className}>
      <SocialBtnImage>
        <img src={config.img} alt={config.alt} />
      </SocialBtnImage>
    </SocialBtn>
  );
};

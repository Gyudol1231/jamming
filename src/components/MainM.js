import React from "react";
import styled from "styled-components";

import main_visual_03 from "../asset/main_visual_03.svg"
import main_visual_02 from "../asset/main_visual_02.svg"
import main_img_01 from "../asset/main_img_01.png";
import main_img_02 from "../asset/main_img_02.png";
import main_img_03 from "../asset/main_img_03.png";
import main_ico_01 from "../asset/main_ico_01.png";
import main_ico_02 from "../asset/main_ico_02.png";
import main_ico_03 from "../asset/main_ico_03.png";
import logo_zoom from "../asset/logo_zoom.png";
import youtube_thumnail from "../asset/youtube_thumnail.png";
import five_star from "../asset/five_star.png";
import main_profile_bg_line from "../asset/main_profile_bg_line.svg";
import profile_choi from "../asset/profile_choi.png";
import profile_ohji from "../asset/profile_ohji.png";
import profile_lee from "../asset/profile_lee.png";
import profile_ohchang from "../asset/profile_ohchang.png";
import main_bg_img_01 from "../asset/main_bg_img_02.png";

export default function MainM() {
  return(
    <MainContainer>
      <MainSection height="calc(100vh - 80px)" backgroundColor="black">
        <MainVisual03 src={main_visual_03} alt="" />
        <TitleArea>
          <VerticalGap gap="18px">
            <span className="body1m text-white">온라인 1:1 음악 레슨 서비스</span>
            <span className="h1m text-white" style={{ marginTop: "6px" }}>음악 창작의 꿈,</span>
            <span className="h1m text-white">재밍에서</span>
            <span className="h1m text-white">그 꿈을 만나보세요</span>
          </VerticalGap>
          <TrialButton>
            <span className="body1m text-white">온라인 레슨 무료 체험하기</span>
            </TrialButton>
        </TitleArea>
      </MainSection>
      <MainSection height="240px" style={{ "border-bottom": "1px solid rgba(221, 221, 221, 1)"}}>
        <MainContentsBox00>
          <VerticalGap gap="18px">
            <span className="h2m">전공생 수준까지</span>
            <span className="h2m">알려주는 커리큘럼.</span>
          </VerticalGap>
        </MainContentsBox00>
      </MainSection>
      <MainSection height="454px" style={{ "border-bottom": "1px solid rgba(221, 221, 221, 1)"}}>
        <MainContentsBox01>
          <VerticalGap gap="24px">
            <span className="h2m">작곡</span>
            <VerticalGap gap="12px">
              <span className="sub1m">코드에 대한 기초 이론부터 고급 화성학까지,</span>
              <span className="sub1m">다양한 이론들을 적용해 내 곡을 만들어보는</span>
              <span className="sub1m">과정입니다.</span>
            </VerticalGap>
          </VerticalGap>
          <MainIllustration src={main_img_01} alt="" />
        </MainContentsBox01>
      </MainSection>
      <MainSection height="454px" style={{ "border-bottom": "1px solid rgba(221, 221, 221, 1)"}}>
        <MainContentsBox01>
          <VerticalGap gap="24px">
            <span className="h2m">반주법</span>
            <VerticalGap gap="12px">
              <span className="sub1m">CCM, 가스펠, 가요 등 보컬 반주에 필요한</span>
              <span className="sub1m">다양한 보이싱과 리하모니 스킬을 배우는</span>
              <span className="sub1m">과정입니다.</span>
            </VerticalGap>
          </VerticalGap>
          <MainIllustration src={main_img_02} alt="" />
        </MainContentsBox01>
      </MainSection>
      <MainSection height="454px" style={{ "border-bottom": "1px solid rgba(221, 221, 221, 1)"}}>
        <MainContentsBox01>
          <VerticalGap gap="24px">
            <span className="h2m">재즈</span>
            <VerticalGap gap="12px">
              <span className="sub1m">심화된 보이싱부터 고급 리하모니까지,</span>
              <span className="sub1m">재즈의 핵심인 즉흥 연주를 배우는</span>
              <span className="sub1m">과정입니다.</span>
            </VerticalGap>
          </VerticalGap>
          <MainIllustration src={main_img_03} alt="" />
        </MainContentsBox01>
      </MainSection>
      <MainSection height="1000px" backgroundColor="linear-gradient(to bottom, white 30%, black)">
        <MainContentsBox02>
          <VerticalGap gap="18px">
            <span className="h2m">매 주 1곡씩</span>
            <span className="h2m">직접 창작해보세요.</span>
            <VerticalGap gap="12px"  style={{ marginTop: "6px" }}>
              <span className="sub1m">분명 배우긴 배웠는데, 연주로는</span>
              <span className="sub1m">어떻게 표현해야할지 모르겠시나요?</span>
              <span className="sub1m">재밍은 배운 내용을 통해 직접 만들어보면서</span>
              <span className="sub1m">스스로 창작할 수 있는 능력을 길러드립니다.</span>
            </VerticalGap>
          </VerticalGap>
          <MainIcons>
            <MainIcon>
            <img src={main_ico_01} alt=""/>
              <span>STEP 1</span>
              <span>개념 학습</span>
            </MainIcon>
            <MainIcon>
              <img src={main_ico_02} alt=""/>
              <span>STEP 2</span>
              <span>과제 만들기</span>
            </MainIcon>
            <MainIcon>
              <img src={main_ico_03} alt=""/>
              <span>STEP 3</span>
              <span>피드백</span>
            </MainIcon>
          </MainIcons>
        </MainContentsBox02>
      </MainSection>
      <MainSection height="384px" backgroundColor="black">
        <MainVisual02 src={main_visual_02} alt=""/>
        <MainContentsBox03>
          <div>
            <span className="h3m text-white">모든 레슨은<ZoomIcon src={logo_zoom} alt="" /></span>
            <span className="h3m text-white">으로 진행되며</span>
          </div>
          <div>
            <span className="h3m text-white">수업 시간은 매 회</span>
            <span className="h3m text-white"><span className="text-purple">50분</span>씩 진행됩니다.</span>
          </div>
        </MainContentsBox03>
      </MainSection>
      <MainSection height="472px">
        <MainContentsBox04>
          <VerticalGap gap="12px">
            <span className="h3m">온라인 레슨의 학습 효과,</span>
            <span className="h3m">직접 확인해보세요!</span>
          </VerticalGap>
          <YoutubeArea src={youtube_thumnail} alt="" />
        </MainContentsBox04>
      </MainSection>
      <MainSection height="648px" backgroundColor="black">
        <MainContentsBox05>
          <div>
            <span className="big-integerM text-gold">450+</span>
            <VerticalGap gap="16px">
              <span className="h2m text-white">누적 수강생 수</span>
              <VerticalGap gap="6px">
                <span className="sub2m text-gray">이미 많은 분들이 온라인 레슨을</span>
                <span className="sub2m text-gray">경험하고 있습니다.</span>
              </VerticalGap>
            </VerticalGap>
          </div>
          <div>
            <VerticalGap gap="16px">
              <span className="big-integerM text-gold">4.9</span>
              <Stars src={five_star} alt=""/>
            </VerticalGap>
            <VerticalGap gap="16px">
              <span className="h2m text-white">고객 만족도</span>
              <VerticalGap gap="6px">
                <span className="sub2m text-gray">검증된 온라인 레슨의 학습 효과를</span>
                <span className="sub2m text-gray">경험해보세요.</span>
              </VerticalGap>
            </VerticalGap>
          </div>
        </MainContentsBox05>
      </MainSection>
      <MainSection>
        <BgLineProfile src={main_profile_bg_line} alt=""/>
        <MainContentsBox06>
          <div>
              <img src={profile_choi} alt=""/>
              <ProfileBasic>
                <span className="h2m">최은관</span>
                <span className="body0m">피아노 선생님</span>
              </ProfileBasic>
              <VerticalGap gap="16px">
                <span className="sub0m">재즈피아노 경력 10년+</span>
                <VerticalGap gap="4px">
                  <span className="sub0m">재즈피아노 유튜브 구독자 10,000+</span>
                  <span className="sub0m">(트리플비)</span>
                </VerticalGap>
                <span className="sub0m">온라인 레슨 ‘재밍’ 대표</span>
                <VerticalGap gap="4px">
                  <span className="sub0m">재즈 악보 플랫폼 ‘트리플비 뮤직 스토어’</span>
                  <span className="sub0m">대표</span>
                </VerticalGap>
              </VerticalGap>
          </div>
          <div>
            <img src={profile_ohji} alt=""/>
              <ProfileBasic>
                <span className="h2m">오지민</span>
                <span className="body0m">피아노 선생님</span>
              </ProfileBasic>
              <VerticalGap gap="16px">
                <span className="sub0m">서울예대 피아노 전공</span>
                <span className="sub0m">재즈피아노 경력 6년+</span>
                <span className="sub0m">서울예대, 동아방송대, 호원대 합격 3관왕</span>
              </VerticalGap>
          </div>
          <div>
            <img src={profile_lee} alt=""/>
            <ProfileBasic>
              <span className="h2m">이봄이</span>
              <span className="body0m">작곡 선생님</span>
            </ProfileBasic>
            <VerticalGap gap="16px">
              <span className="sub0m">동아방송대 작곡 전공</span>
              <span className="sub0m">작곡 및 재즈피아노 경력 10년+</span>
              <span className="sub0m">BGM 및 다수 앨범 작·편곡, 세션 참여</span>
            </VerticalGap>
          </div>
          <div>
            <img src={profile_ohchang} alt=""/>
              <ProfileBasic>
                <span className="h2m">오창근</span>
                <span className="body0m">작곡 선생님</span>
              </ProfileBasic>
              <VerticalGap gap="16px">
                <span className="sub0m">동아방송대 작곡 전공</span>
                <span className="sub0m">작곡 경력 6년+</span>
                <VerticalGap gap="4px">
                  <span className="sub0m">유튜버 슈기, 냥이아빠 등 다수 유튜버 BGM</span>
                  <span className="sub0m">작곡 참여</span>
                </VerticalGap>
              </VerticalGap>
          </div>
        </MainContentsBox06>
      </MainSection>
      <MainSection height="504px">
        <MainContentsBox07>
          <BgImgFooter src={main_bg_img_01} alt=""/>
          <VerticalGap gap="48px">
            <VerticalGap gap="12px">
              <span className="h3m text-white">지금 바로 내 이야기를</span>
              <span className="h3m text-white">음악으로 만들어보세요.</span>
            </VerticalGap>
            <CounselingButton>
              <span className="body1m text-dark-purple">온라인 레슨 상담 신청하기</span>
            </CounselingButton>
          </VerticalGap>
        </MainContentsBox07>
      </MainSection>
    </MainContainer>
  );
};


const MainContainer = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;
const MainSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  background: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  width: 100%;
  overflow: clip;
`;
const VerticalGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;

const TitleArea = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  z-index: 1;
`;
const TrialButton = styled.button`
  width: 100%;
  padding: 21px 0px 21px 0px;
  border-radius: 36px;
  background: linear-gradient(to right, rgba(148, 37, 237, 1), rgba(90, 10, 248, 1));
  border: none;
  cursor: pointer;
`;
const MainContentsBox00 = styled.div`
  width: 320px;
  align-self: center;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
const MainVisual03 = styled.img`
  height: auto;
  width: 100%;
  position: absolute;
`;


const MainContentsBox01 = styled.div`
  align-self: flex-end;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const MainIllustration = styled.img`
  width: 320px;
  height: 204px;
`;


const MainContentsBox02 = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-start;
  justify-content: center;
  gap: 80px;
  position: relative;
`;
const MainIcons = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MainIcon = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 150px;
    height: 150px;
  }
  span:nth-child(2) {
    color: white;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    text-align: center;
  }
  span:last-child {
    color: white;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

const MainContentsBox03 = styled.div`
  align-self: center;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 1;
  }
  div:nth-child(2) {
    align-self: flex-start;
    align-items: flex-start;
  }
  div:last-child {
    align-self: flex-end;
    align-items: flex-end;
  }
`;
const ZoomIcon = styled.img`
  width: auto;
  height: 28px;
  transform: translateY(3px);
`;
const MainVisual02 = styled.img`
  position: absolute;
  align-self: center;
  width: 320px;
  height: 160px;
`;

const MainContentsBox04 = styled.div`
  align-self: center;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  span { text-align: center; }
`;
const YoutubeArea = styled.img`
  width: 320px;
  height: 180px;
`;

const MainContentsBox05 = styled.div`
  align-self: center;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 62px;
  >div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;
const Stars = styled.img`
  width: 152px;
  height: 24px;
`;

const MainContentsBox06 = styled.div`
  padding: 100px 0px;
  align-self: center;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    img {
      width: 280px;
      height: 280px;
    }
    div {
      width: 100%;
      align-items: flex-start;
    }
  }
`;
const ProfileBasic = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end !important;
  gap: 16px;
`;
const BgLineProfile = styled.img`
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const MainContentsBox07 = styled.div`
  overflow: clip;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CounselingButton = styled.button`
  align-self: center;
  width: 280px;
  height: 60px;
  padding: 21px 0px;
  border-radius: 36px;
  background: white;
  border: none;
  cursor: pointer;
`;
const BgImgFooter = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

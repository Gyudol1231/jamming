import React from "react";
import styled from "styled-components";

import main_visual_01 from "../asset/main_visual_01.svg"
import main_visual_02 from "../asset/main_visual_02.svg"
import main_img_01 from "../asset/main_img_01.png";
import main_img_02 from "../asset/main_img_02.png";
import main_img_03 from "../asset/main_img_03.png";
import main_ico_01 from "../asset/main_ico_01.png";
import main_ico_02 from "../asset/main_ico_02.png";
import main_ico_03 from "../asset/main_ico_03.png";
import main_bg_line from "../asset/main_bg_line.svg";
import logo_zoom from "../asset/logo_zoom.png";
import youtube_thumnail from "../asset/youtube_thumnail.png";
import five_star from "../asset/five_star.png";
import main_profile_bg_line from "../asset/main_profile_bg_line.svg";
import profile_choi from "../asset/profile_choi.png";
import profile_ohji from "../asset/profile_ohji.png";
import profile_lee from "../asset/profile_lee.png";
import profile_ohchang from "../asset/profile_ohchang.png";
import main_bg_img_01 from "../asset/main_bg_img_01.png";

export default function Main() {
  return(
    <MainContainer>
      <MainSection height="calc(100vh - 100px)" backgroundColor="black">
        <MainVisual01 src={main_visual_01} alt="" />
        <MainTitleBox>
          <TitleArea>
            <VerticalGap gap="30px">
              <span className="body1 text-white">온라인 1:1 음악 레슨 서비스</span>
              <span className="h1 text-white">음악 창작의 꿈,</span>
              <span className="h1 text-white">재밍에서 그 꿈을 만나보세요</span>
            </VerticalGap>
            <TrialButton>
              <span className="body1 text-white">온라인 레슨 무료 체험하기</span>
            </TrialButton>
          </TitleArea>
        </MainTitleBox>
      </MainSection>
      <MainSection height="256px" style={{ "border-bottom": "1px solid rgba(221, 221, 221, 1)"}}>
        <MainContentsBox01>
          <VerticalGap gap="30px">
            <span className="h2">전공생 수준까지</span>
            <span className="h2">알려주는 커리큘럼.</span>
          </VerticalGap>
        </MainContentsBox01>
      </MainSection>
      <MainSection height="400px" style={{ "border-bottom": "1px solid rgba(221, 221, 221, 1)"}}>
        <MainContentsBox01>
          <VerticalGap gap="30px">
            <span className="h2">작곡</span>
            <VerticalGap gap="12px">
              <span className="sub1">코드에 대한 기초 이론부터 고급 화성학까지,</span>
              <span className="sub1">다양한 이론들을 적용해 내 곡을 만들어보는 과정입니다.</span>
            </VerticalGap>
          </VerticalGap>
          <MainIllustration src={main_img_01} alt="" />
        </MainContentsBox01>
      </MainSection>
      <MainSection height="400px" style={{ "border-bottom": "1px solid rgba(221, 221, 221, 1)"}}>
        <MainContentsBox01>
          <MainIllustration src={main_img_02} alt="" />
          <VerticalGap gap="30px">
            <span className="h2">반주법</span>
            <VerticalGap gap="12px">
              <span className="sub1">CCM, 가스펠, 가요 등 보컬 반주에 필요한</span>
              <span className="sub1">다양한 보이싱과 리하모니 스킬을 배우는 과정입니다.</span>
            </VerticalGap>
          </VerticalGap>
        </MainContentsBox01>
      </MainSection>
      <MainSection height="400px" style={{ "border-bottom": "1px solid rgba(221, 221, 221, 1)"}}>
        <MainContentsBox01>
          <VerticalGap gap="30px">
            <span className="h2">재즈</span>
            <VerticalGap gap="12px">
              <span className="sub1">심화된 보이싱부터 고급 리하모니까지,</span>
              <span className="sub1">재즈의 핵심인 즉흥 연주를 배우는 과정입니다.</span>
            </VerticalGap>
          </VerticalGap>
          <MainIllustration src={main_img_03} alt="" />
        </MainContentsBox01>
      </MainSection>
      <MainSection height="800px" backgroundColor="linear-gradient(to bottom, white 30%, black)">
        <BgLineIcon src={main_bg_line} alt="" />
        <MainContentsBox02>
          <VerticalGap gap="24px">
            <span className="h2">매 주 1곡씩</span>
            <span className="h2">직접 창작해보세요.</span>
            <VerticalGap gap="12px">
              <span className="sub1">분명 배우긴 배웠는데, 연주로는 어떻게 표현해야할 지 모르겠시나요?</span>
              <span className="sub1">재밍은 배운 내용을 응용해 직접 만들어보면서</span>
              <span className="sub1">스스로 창작할 수 있는 능력을 길러드립니다.</span>
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
      <MainSection height="840px" backgroundColor="black">
        <MainContentsBox03>
          <MainVisual02 src={main_visual_02} alt=""/>
          <div>
            <span className="h1 text-white">모든 레슨은<ZoomIcon src={logo_zoom} alt="" /></span>
            <span className="h1 text-white">으로 진행되며</span>
          </div>
          <div>
            <span className="h1 text-white">수업 시간은 매 회</span>
            <span className="h1 text-white"><span className="text-purple">50분</span>씩 진행됩니다.</span>
          </div>
        </MainContentsBox03>
      </MainSection>
      <MainSection height="1148px">
        <MainContentsBox04>
          <VerticalGap gap="24px">
            <span className="h2">온라인 레슨의 학습 효과</span>
            <span className="h2">영상으로 직접 확인해보세요!</span>
          </VerticalGap>
          <YoutubeArea src={youtube_thumnail} alt="" />
        </MainContentsBox04>
      </MainSection>
      <MainSection height="672px" backgroundColor="black">
        <MainContentsBox05>
          <div>
            <VerticalGap gap="24px">
              <span className="h2 text-white">누적 수강생 수</span>
              <span className="sub2 text-gray">이미 많은 분들이 온라인 레슨을 경험하고 있습니다.</span>
            </VerticalGap>
            <span className="big-integer text-gold">450+</span>
          </div>
          <div>
            <VerticalGap gap="36px">
              <span className="big-integer text-gold">4.9</span>
              <Stars src={five_star} alt="" />
            </VerticalGap>
            <VerticalGap gap="24px">
              <span className="h2 text-white">고객 만족도</span>
              <span className="sub2 text-gray">검증된 온라인 레슨의 학습 효과를 경험해보세요.</span>
            </VerticalGap>
          </div>
        </MainContentsBox05>
      </MainSection>
      <MainSection>
        <BgLineProfile src={main_profile_bg_line} alt=""/>
        <MainContentsBox06>
          <div>
            <VerticalGap gap="42px">
              <ProfileBasic>
                <span className="h2">최은관</span>
                <span className="body0">피아노 선생님</span>
              </ProfileBasic>
              <VerticalGap gap="24px">
                <span className="sub0">재즈피아노 경력 10년+</span>
                <span className="sub0">재즈피아노 유튜브 구독자 10,000+ (트리플비)</span>
                <span className="sub0">온라인 레슨 ‘재밍’ 대표</span>
                <span className="sub0">재즈 악보 플랫폼 ‘트리플비 뮤직 스토어’ 대표</span>
              </VerticalGap>
            </VerticalGap>
            <img src={profile_choi} alt=""/>
          </div>
          <div>
            <img src={profile_ohji} alt=""/>
            <VerticalGap gap="42px">
              <ProfileBasic>
                <span className="h2">오지민</span>
                <span className="body0">피아노 선생님</span>
              </ProfileBasic>
              <VerticalGap gap="24px">
                <span className="sub0">서울예대 피아노 전공</span>
                <span className="sub0">재즈피아노 경력 6년+</span>
                <span className="sub0">서울예대, 동아방송대, 호원대 합격 3관왕</span>
              </VerticalGap>
            </VerticalGap>
          </div>
          <div>
            <VerticalGap gap="42px">
              <ProfileBasic>
                <span className="h2">이봄이</span>
                <span className="body0">작곡 선생님</span>
              </ProfileBasic>
              <VerticalGap gap="24px">
                <span className="sub0">동아방송대 작곡 전공</span>
                <span className="sub0">작곡 및 재즈피아노 경력 10년+</span>
                <span className="sub0">BGM 및 다수 앨범 작·편곡, 세션 참여</span>
              </VerticalGap>
            </VerticalGap>
            <img src={profile_lee} alt=""/>
          </div>
          <div>
            <img src={profile_ohchang} alt=""/>
            <VerticalGap gap="42px">
              <ProfileBasic>
                <span className="h2">오창근</span>
                <span className="body0">작곡 선생님</span>
              </ProfileBasic>
              <VerticalGap gap="24px">
                <span className="sub0">동아방송대 작곡 전공</span>
                <span className="sub0">작곡 경력 6년+</span>
                <span className="sub0">유튜버 슈기, 냥이아빠 등 다수 유튜버 BGM 작곡 참여</span>
              </VerticalGap>
            </VerticalGap>
          </div>
        </MainContentsBox06>
      </MainSection>
      <MainSection height="504px">
        <MainContentsBox07>
          <BgImgFooter src={main_bg_img_01} alt=""/>
          <VerticalGap gap="52px">
            <VerticalGap gap="18px">
              <span className="h1 text-white">지금 바로 내 이야기를</span>
              <span className="h1 text-white">음악으로 만들어보세요.</span>
            </VerticalGap>
            <CounselingButton>
              <span className="body1 text-dark-purple">온라인 레슨 신청하기</span>
            </CounselingButton>
          </VerticalGap>
        </MainContentsBox07>
      </MainSection>
    </MainContainer>
  );
};


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
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
const MainTitleBox = styled.div`
  width: 1200px;
  position: relative;
`;
const TitleArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const TrialButton = styled.button`
  width: 500px;
  padding: 21px 48px 21px 48px;
  border-radius: 36px;
  background: linear-gradient(to right, rgba(148, 37, 237, 1), rgba(90, 10, 248, 1));
  border: none;
  cursor: pointer;
`;
const MainVisual01 = styled.img`
  height: auto;
  width: 100%;
  position: absolute;
`;

const MainContentsBox01 = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const VerticalGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;
const MainIllustration = styled.img`
  width: 546px;
  height: 350px;
  align-self: flex-end;
`;

const MainContentsBox02 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 80px;
  position: relative;
`;
const MainIcons = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-between;
  align-self: center;
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
    margin-top: 12px;
  }
  span:last-child {
    color: white;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    margin-top: 8px;
  }
`;
const BgLineIcon = styled.img`
  width: 100%;
  height: 220px;
  position: absolute;
  bottom: 200px;
`;

const MainContentsBox03 = styled.div`
  width: 1200px;
  height: 600px;
  position: relative;
  margin: auto;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  div:nth-child(2) {
    position: absolute;
    align-items: flex-start;
    top: 128px;
    left: 0px;
  }
  div:last-child {
    position: absolute;
    align-items: flex-end;
    bottom: 128px;
    right: 0px;
  }
`;
const ZoomIcon = styled.img`
  width: auto;
  height: 100%;
  //position: absolute;
  //left: 240px;
`;
const MainVisual02 = styled.img`
  width: 1200px;
  height: 600px;
`;

const MainContentsBox04 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;
const YoutubeArea = styled.img`
  width: 1200px;
  height: 680px;
`;

const MainContentsBox05 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 150px;
  >div {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Stars = styled.img`
  width: 304px;
  height: 48px;
`;

const MainContentsBox06 = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding: 160px 0px;
  >div{
    display: flex;
    align-items: center;
    gap: 64px;
  }
  >div:first-child {
    align-self: flex-end;
    div {
      align-items: flex-end;
    }
    >img {
      width: 466px;
      height: 466px;
    }
  }
  >div:nth-child(2) {
    align-self: flex-start;
    div {
      align-items: flex-start;
    }
    >img {
      width: 480px;
      height: 466px;
    }
  }
  >div:nth-child(3) {
    align-self: flex-end;
    div {
      align-items: flex-end;
    }
    >img {
      width: 466px;
      height: 480px;
    }
  }
  >div:last-child {
    align-self: flex-start;
    div {
      align-items: flex-start;
    }
    >img {
      width: 466px;
      height: 466px;
    }
  }
`;
const ProfileBasic = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CounselingButton = styled.button`
  align-self: center;
  width: 280px;
  height: 60px;
  padding: 21px 48px 21px 48px;
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

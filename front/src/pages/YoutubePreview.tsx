import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import bars from '../img/bars.png';
import youtubekr from '../img/youtubekr.png';
import search from '../img/search.png';
import youtubeRight from '../img/youtube-right.png';
import likeBtn from '../img/like.png';
import dislikeBtn from '../img/dislike.png';
import infoRight from '../img/info-right.png';

import Comment from './components/Comment';
import { RouteComponentProps } from 'react-router';

type channelState = {
  hiddenSubscriberCount: boolean,
  subscriberCount?: number,
  imageUrl: string,
  name: string
}
export type commentState = {
  author: string,
  authorImageUrl: string,
  comment: string,
  date: string,
  numLikes: number,
  blinded: number
}
type videoState = {
  description: string,
  dislikeCount: string,
  likeCount: string,
  publishedAt: string,
  title: string,
  viewCount: string
}

type PreviewState = {
  channel: channelState,
  comments: Array<commentState>,
  video: videoState
}

// Header
const Preview = styled.div`
    font-family: Roboto, Arial, sans-serif;
    background-color: #f9f9f9;
  `;
const HeaderContainer = styled.div`
    position: fixed;
  `;
const Header = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98vw;
    height: 56px;
    padding: 0 16px;
  `;
const VerticalCenter = styled.div`
    display: flex;
    align-items: center;
  `;
const Bars = styled.img`
    width: 31px;
    margin-right: 20px;
  `;
const YoutubeKR = styled.img`
    width: 105px;
    padding-bottom: 5px;
  `;
const SearchBar = styled.input`
    width: 575px;
    height: 25px;
    border: 1px solid #cccccc;
    padding-left: 7px;
  `;
const SearchBtn = styled.img`
    height: 21px;
    border: 1px solid #cccccc;
    border-left: none;
    padding: 3px 20px;
    background-color: #f8f8f8;
  `;
const MicIcon = styled.div`
    margin-left: 15px;
  `;
const YoutubeRight = styled.img`
    height: 45px;
    margin-right: 10px;
  `;

// Content
const ContentContainer = styled.div`
    padding-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
const Content = styled.div`
    padding: 30px 0;
    width: 1200px;
  `;
const Title = styled.div`
    font-size: 18px;
    margin-top: 15px;
  `;
const InfoGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 14px;
    color: #606060;
    border-bottom: 1px solid #e0e0e0;
  `;
const InfoLeftGroup = styled.div`
    display: flex;
  `;
const InfoRightGroup = styled.div`
    display: flex;
  `;

const TotalViews = styled.div`
    
  `;
const SeparateDot = styled.div`
    margin: 0 4px;
  `;
const UploadDate = styled.div`
  
  `;
const LikesDiv = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid #888888;
    margin: 0 10px;
    padding-bottom: 5px;
  `;
const LikeBtn = styled.img`
    height: 30px;
    margin-right: 5px;
  `;
const LikeNum = styled.div`
    font-weight: 600;
    color: #888888;
    margin-right: 15px;
  `;
const DislikeBtn = styled.img`
    height: 33px;
    margin-right: 5px;
  `;
const DislikeNum = styled.div`
  font-weight: 600;
    color: #888888;
  `;
const ShareImg = styled.img`
    height: 35px;
  `;

// Channel Info
const ChannelDiv = styled.div`
    display: flex;
    padding: 15px 0 10px;
    min-height: 80px;
    border-bottom: 1px solid #e0e0e0;
  `;
const AvatarDiv = styled.div`
    display: flex;
    align-items: start;
    width: 75px;
  `;
const Avatar = styled.img`
    height: 50px;
    border-radius: 25px;
  `;
const ChannelInfoDiv = styled.div`
    width: 100%;
  `;
const ChannelName = styled.div`
    font-weight: 600;
    font-size: 14px;
    margin-top: 10px;
  `;
const Subscribers = styled.div`
    font-size: 12px;
    color: #606060;
  `;
const ChannelIntro = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin: 20px 0 15px;
    line-height: 1.3;
  `;
const SubscribeDiv = styled.div`
    width: 80px;
  `;
const SubscribeBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    width: 60px;
    height: 25px;
    background-color: #cc0000;
    color: white;
    padding: 8px 10px;
  `;

const CommentGroup = styled.div`
    margin: 20px 0;
  `;
const TotalComment = styled.div`
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 25px;
  `;

function formatDate(str: string) {
  return str.substr(0,4) + ". " + str.substr(5,2) + ". " + str.substr(8,2);
}

interface PreviewRouterProps {
  url: string;
}


function YoutubePreview({ match }: RouteComponentProps<PreviewRouterProps>) {
  const [previewState, setPreviewState] = useState({} as PreviewState);

  useEffect( () => {
    async function axiosTest() {
      const result = await axios.post(`/getvideoinfo`,{ url : match.params.url })
        .then(res => res.data);
      setPreviewState(result);
    }
    axiosTest();
  }, [])

  return (
    <Preview>
      <HeaderContainer>
        <Header>
          <VerticalCenter>
            <Bars src={bars} alt="bars" />
            <YoutubeKR src={youtubekr} alt="logo" />
          </VerticalCenter>
          <VerticalCenter>
            <SearchBar type="text" placeholder="검색" />
            <SearchBtn src={search} alt="search" />
            <MicIcon>
              <FontAwesomeIcon icon={faMicrophone} />
            </MicIcon>
          </VerticalCenter>
          <YoutubeRight src={youtubeRight} alt="right-btn-family" />
        </Header>
      </HeaderContainer>

      <ContentContainer>
        <Content>
          <div className="youtube-iframe">
            <iframe width="1200" height="700"
                    src={"https://www.youtube.com/embed/"+match.params.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
          </div>
          <Title>
            {previewState.video ? previewState.video.title : ""}
          </Title>
          <InfoGroup>
            <InfoLeftGroup>
              <TotalViews>조회수 {previewState.video ? previewState.video.viewCount : ""}회</TotalViews>
              <SeparateDot>•</SeparateDot>
              <UploadDate>{previewState.video ?
                formatDate(previewState.video.publishedAt) : ""}</UploadDate>
            </InfoLeftGroup>

            <InfoRightGroup>
              <LikesDiv>
                <LikeBtn src={likeBtn} />
                <LikeNum>{previewState.video ? previewState.video.likeCount : ""}</LikeNum>
                <DislikeBtn src={dislikeBtn} />
                <DislikeNum>{previewState.video ? previewState.video.dislikeCount : ""}</DislikeNum>
              </LikesDiv>
              <ShareImg src={infoRight} alt="info-right"/>

            </InfoRightGroup>
          </InfoGroup>

          <ChannelDiv>
            <AvatarDiv>
              <Avatar src={previewState.channel ? previewState.channel.imageUrl : ""} alt="avatar" />
            </AvatarDiv>

            <ChannelInfoDiv>
              <ChannelName>
                {previewState.channel ? previewState.channel.name : ""}
              </ChannelName>
              <Subscribers>
                {previewState.channel ?
                  (!previewState.channel.hiddenSubscriberCount ?
                    "구독자 " + previewState.channel.subscriberCount + "명" : "" ) : ""}
              </Subscribers>

              <ChannelIntro>
                {previewState.video ? previewState.video.description.split('\n').map((line, idx) => {
                    return (<span key={idx}>{line}<br/></span>)
                  }) : ""}
              </ChannelIntro>
            </ChannelInfoDiv>
            <SubscribeDiv>
              <SubscribeBtn>구독</SubscribeBtn>
            </SubscribeDiv>
          </ChannelDiv>

          <CommentGroup>
            <TotalComment>
              댓글 30개
            </TotalComment>
            {previewState.comments ? previewState.comments.map((comment, idx) => {
              return <Comment key={idx} props={comment} />
            }) : ""}
          </CommentGroup>

        </Content>
      </ContentContainer>
    </Preview>
  );
}

export default YoutubePreview;

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import bars from '../img/bars.png';
import youtubekr from '../img/youtubekr.png';
import search from '../img/search.png';
import youtubeRight from '../img/youtube-right.png';
import likeBtn from '../img/like.png';
import dislikeBtn from '../img/dislike.png';
import Comment from './components/Comment';

// Header
const Preview = styled.div`
    font-family: Roboto, Arial, sans-serif;
    background-color: #f9f9f9;
    height: 100%;
  `;
const Header = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    padding-bottom: 15px;
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
    border-bottom: 1px solid #888888;
  `;
const LikeBtn = styled.img`
    height: 30px;
    margin-right: 5px;
    margin-bottom: 10px;
  `;
const LikeNum = styled.div`
    color: #888888;
  `;
const DislikeBtn = styled.img`
    height: 30px;
  `;
const DislikeNum = styled.div`
    color: #888888;
  `;


function YoutubePreview() {
  useEffect( () => {
    async function fetchTest() {
      const res = await fetch('/posts');
      const posts = await res.json();
      console.log(posts);
    }
    fetchTest();
  }, [])

  return (
    <Preview>
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

      <ContentContainer>
        <Content>
          <div className="youtube-iframe">
            <iframe width="1200" height="700" src="https://www.youtube.com/embed/oF6FrcRQJ8k" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
          </div>
          <Title>
            4억 날리고 행복해하는 전기(머니게임 편집)
          </Title>
          <InfoGroup>
            <InfoLeftGroup>
              <TotalViews>조회수 317,421회</TotalViews>
              <SeparateDot>•</SeparateDot>
              <UploadDate>2021. 5. 11.</UploadDate>
            </InfoLeftGroup>

            <InfoRightGroup>
              <LikesDiv>
                <LikeBtn src={likeBtn} />
                <LikeNum>3천</LikeNum>
                <DislikeBtn src={dislikeBtn} />
                <DislikeNum>72</DislikeNum>
              </LikesDiv>

            </InfoRightGroup>
          </InfoGroup>

          <div className="author-profile">

          </div>

          <div className="comments">
            <div className="comment-num">

            </div>

            <div className="comment">
              <div className="avatar">

              </div>
              <div className="comment-content">
                <div className="comment-header">

                </div>
                <div className="comment-body">

                </div>
                <div className="likes">

                </div>
              </div>
            </div>

            <Comment />

            {/* and so on... */}

          </div>
        </Content>
      </ContentContainer>
    </Preview>
  );
}

export default YoutubePreview;

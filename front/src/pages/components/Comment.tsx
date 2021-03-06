import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

import likeBtn from '../../img/like.png';
import dislikeBtn from '../../img/dislike.png';

import { commentState } from '../YoutubePreview';

const CommentDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  white-space: pre;
`;
const AuthorThumbnail = styled.div`
    font-family: Roboto, Arial, sans-serif;
    width: 56px;
    height: 100%;
  `;

const AuthorImg = styled.img`
  height: 40px;
  border-radius: 25px;
`
const Main = styled.div`
  font-family: Roboto, Arial, sans-serif;
  background-color: #f9f9f9;
  height: 100%;
`;

const ActionMenu = styled.div`
  font-family: Roboto, Arial, sans-serif;
  background-color: #f9f9f9;
  width: 40px;
  height: 100%;
`;

const Header = styled.div`
  font-family: Roboto, Arial, sans-serif;
  background-color: #f9f9f9;  
  display: flex;
  flex-direction: row;
  height: 20px;
`;

const HeaderAuthor = styled.div`
  font-family: Roboto, Arial, sans-serif;
  font-size: 13px;
  font-weight: 700;
`;

const HeaderTime = styled.div`
  font-family: Roboto, Arial, sans-serif;
  font-size: 12px;
  padding-left: 3px;
`;

const Content = styled.div`
  font-family: Roboto, Arial, sans-serif;
  background-color: #f9f9f9;
  font-size: 14px;
  line-height: 20px;
  width: 1000px;
  white-space: pre-wrap;
`;

const GreenContent = styled.div`
  font-family: Roboto, Arial, sans-serif;
  background-color: #f9f9f9;
  font-size: 14px;
  line-height: 20px;
  color: #2C8721;
  font-weight: bold;
`;

const ActionButtons = styled.div`
  font-family: Roboto, Arial, sans-serif;
  background-color: #f9f9f9;
  height: 33.2px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LikeImg = styled.img`
  height: 16px;
  width: 16px;
  padding: 8px 8px 8px 0px;
`

const DislikeImg = styled.img`
  height: 16px;
  width: 16px;
  padding: 8px 8px 8px 8px;
`

const LikeNum = styled.div`
  font-family: Roboto, Arial, sans-serif;
  font-size: 12px;
`

function formatDate(str: string) {
  return str.substr(0,4) + ". " + str.substr(5,2) + ". " + str.substr(8,2);
}

function Comment({ props }: { props: commentState}) {
  return (
    <CommentDiv>
      <AuthorThumbnail>
        <AuthorImg src={props.authorImageUrl}>
        </AuthorImg>
      </AuthorThumbnail>
      <Main>
        <Header>
          <HeaderAuthor>{props.author}</HeaderAuthor>
          <HeaderTime>{formatDate(props.date)}</HeaderTime>
        </Header>
        {props.blinded? <GreenContent>{parse(props.comment)}???</GreenContent> : <Content>{parse(props.comment)}???</Content>}
        <ActionButtons>
          <LikeImg src={likeBtn}></LikeImg>
          <LikeNum>{props.numLikes}</LikeNum>
          <DislikeImg src={dislikeBtn}></DislikeImg>
        </ActionButtons>
      </Main>
      <ActionMenu>
      </ActionMenu>
    </CommentDiv>
  );
}

export default Comment;

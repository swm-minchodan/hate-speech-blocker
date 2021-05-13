import React from 'react';
import styled from 'styled-components';

import likeBtn from '../../img/like.png';
import dislikeBtn from '../../img/dislike.png';

const CommentDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
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

function Comment() {
  return (
    <CommentDiv>
      <AuthorThumbnail>
        <AuthorImg src={"https://yt3.ggpht.com/ytc/AAUvwnhXCuEaZlYMurC8Yrm9MTmNN0dcGW7XANyuRKV-0Q=s48-c-k-c0xffffffff-no-rj-mo"}>
        </AuthorImg>
      </AuthorThumbnail>
      <Main>
        <Header>
          <HeaderAuthor>Bagusbrahmantya _</HeaderAuthor>
          <HeaderTime>43분 전</HeaderTime>
        </Header>
        <Content>OH MY GIRL has many international fans, <br/>and one of them is you who read this comment. <br/>OT7❤️</Content>
        <ActionButtons>
          <LikeImg src={likeBtn}></LikeImg>
          <LikeNum>40</LikeNum>
          <DislikeImg src={dislikeBtn}></DislikeImg>
        </ActionButtons>
      </Main>
      <ActionMenu>
      </ActionMenu>
    </CommentDiv>
  );
}

export default Comment;

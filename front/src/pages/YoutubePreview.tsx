import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import bars from '../img/bars.png';
import youtubekr from '../img/youtubekr.png';
import search from '../img/search.png';
import youtubeRight from '../img/youtube-right.png';

const Preview = styled.div`
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

function YoutubePreview() {
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

      <div className="content">
        <div className="youtube-iframe">
          <iframe width="1200" height="700" src="https://www.youtube.com/embed/oF6FrcRQJ8k" title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
        </div>
        <div className="title">
          4억 날리고 행복해하는 전기(머니게임 편집)
        </div>
        <div className="info">

        </div>

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

          {/* and so on... */}

        </div>
      </div>
    </Preview>
  );
}

export default YoutubePreview;

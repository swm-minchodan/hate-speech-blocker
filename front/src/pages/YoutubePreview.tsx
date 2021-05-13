import React from 'react';

function YoutubePreview() {
  return (
    <>
      <div className="header">

      </div>
      <div className="content">
        <div className="youtube-iframe">
          <iframe width="896" height="504" src="https://www.youtube.com/embed/oF6FrcRQJ8k" title="YouTube video player"
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
    </>
  );
}

export default YoutubePreview;

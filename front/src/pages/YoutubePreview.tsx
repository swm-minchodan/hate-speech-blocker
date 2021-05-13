import React, { useEffect } from 'react';

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
    <>
      <p>hello, world</p>
    </>
  );
}

export default YoutubePreview;

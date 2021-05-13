import React, { useEffect } from 'react';
import axios from 'axios';

function YoutubePreview() {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  
  useEffect(() => {
    async function axiosPostTest() : Promise<number> { 
      return await axios.post(`/getvideoinfo`, {'url': '3ScrmGDJjqk'})
      .then(res => {console.log(res.data); return res.data;});
    }
    axiosPostTest();
  }, [])

  return (
    <>
      <p>hello, world</p>
    </>
  );
}

export default YoutubePreview;

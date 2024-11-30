import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState('vidsrc');

  const getEmbedUrl = () => {
    return player === 'vidsrc'
      ? `${process.env.REACT_APP_VIDSRC_BASE_URL}${id}`
      : `${process.env.REACT_APP_MULTIEMBED_BASE_URL}${id}&tmdb=1`;
  };

  return (
    <div className="player">
      <Link to="/">Back to Movies</Link>
      <iframe
        title={`Movie Player - ${id}`}
        src={getEmbedUrl()}
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="server-buttons">
        <button onClick={() => setPlayer('vidsrc')}>Vidsrc</button>
        <button onClick={() => setPlayer('multiembed')}>MultiEmbed</button>
      </div>
    </div>
  );
};

export default Player;

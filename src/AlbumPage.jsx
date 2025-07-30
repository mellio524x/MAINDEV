import './AlbumPage.css';

function AlbumPage() {
  return (
    <div className="album-wrapper">
      {/* Hello, World! Album */}
      <div className="album-section left">
        <h2 className="album-title">DEV – Hello, World!</h2>
        <img
          src="/Hello.png"
          alt="Hello World Album Art"
          className="album-art"
        />
        <p className="album-desc">Where code meets chaos. Synth-punk with heart.</p>
        <iframe
          title="Hello World Spotify Album"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/album/2siWZa913aqpYB1ja93Var?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Broken Album */}
      <div className="album-section right">
        <h2 className="album-title">DEV – BROKEN</h2>
        <img
          src="/Broken.png"
          alt="Broken Album Art"
          className="album-art"
        />
        <p className="album-desc">Raw, emotional, powerful. The story of rising from pain.</p>
        <iframe
          title="Broken Spotify Album"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/album/2ADLhA9bMQtd5mUF1l4b2a?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default AlbumPage;

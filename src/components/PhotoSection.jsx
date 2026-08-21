import profileImg from '../assets/photo.jpg';

const PhotoSection = () => (
  <div style={{
    position: 'relative',
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 0 30px var(--accent-glow)',
    border: '4px solid var(--accent-primary)',
    margin: '0 auto'
  }}>
    <img src={profileImg} alt="Tanay Tanishk" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>
);

export default PhotoSection;

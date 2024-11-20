import './App.css';

function BackgroundVideo() {
  return (
    <div className="bg-video-container">
      <div className='top-overlay'>
        <span className="overlay-title">Model 3</span>
        <p className="overlay-price">From $29,740*</p>
        <p className="overlay-text">After Federal Tax Credit & Est. Gas Savings</p>
      </div>
      <video autoPlay loop muted playsInline controls={false} className="background-video">
        <source src="section5.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de vidéos.
      </video>
      <div className='bot-overlay'>
        <button>Order Now</button>
        <button>Demo Drive</button>
        <p className="overlay-details">*Price before incentives and savings is $40,240, excluding taxes and fees. Subject to change. <br />Learn about est. gas savings.</p>
      </div>
    </div>
  );
}

export default BackgroundVideo;

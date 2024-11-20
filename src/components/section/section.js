export const Section = ({
  title,
  subtitle,
  price,
  backgroundType,
  backgroundSrc,
  buttons,
  footer,
  isActive,
  isLastSection
}) => {
  if (isLastSection) {
    return (
      <section className="section last-section">
        <img 
          className="background-media"
          src={backgroundSrc} 
          alt={title} 
        />
        <div className="section-center">
          <h2 className="section-title">{title}</h2>
          <button className="btn-primary">{buttons[0].label}</button>
        </div>
        <footer className="global-footer">
          <div className="footer-links">
            <span>Tesla © 2023</span>
            <span>Privacy & Legal</span>
            <span>Vehicle Recalls</span>
            <span>Contact</span>
            <span>News</span>
            <span>Get Updates</span>
            <span>Locations</span>
          </div>
        </footer>
      </section>
    );
  }

  return (
    <section className="section">
      {backgroundType === 'video' ? (
        <video
          className="background-media"
          autoPlay
          muted
          loop
          src={backgroundSrc}
        />
      ) : (
        <img
          className="background-media"
          src={backgroundSrc}
          alt={title}
        />
      )}

      <div className="section-container">
        <div className="section-header">
          <span className="section-title">{title}</span>
          {price && <p className="section-price">From <div className="b">{price}</div></p>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        <div className="section-footer">
          <div className="button-group">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={button.variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
              >
                {button.label}
              </button>
            ))}
          </div>
          {footer && <p className="footer-text">{footer}</p>}
        </div>
      </div>
    </section>
  );
};
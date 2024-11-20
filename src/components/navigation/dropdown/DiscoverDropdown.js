const DiscoverDropdown = ({ data }) => (
  <div className='disco-dp'>
    <div className='discover-grid'>
      {data.items.map((section, index) => (
        <div key={index} className='discover-column'>
          <h3 className='discover-title'>{section.title}</h3>
          <ul className='discover-links'>
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex} className='discover-link'>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default DiscoverDropdown;
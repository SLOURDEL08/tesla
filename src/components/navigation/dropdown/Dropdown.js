import { dropdownData } from '../../../data/dropdownData';

const Dropdown = ({ type, onMouseLeave }) => {
 const dropdownContent = dropdownData[type];

  if (type === 'disco-dp') {
    return (
      <div className="dropdown-container" onMouseLeave={onMouseLeave}>
        <div className='disco-dp'>
          <div className='discover-grid'>
            {dropdownContent.items.map((section, index) => (
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
      </div>
    );
  }

  return (
    <div className="dropdown-container" onMouseLeave={onMouseLeave}>
      <div className={type}>
        <div className='left-vehidp'>
          {dropdownContent.items.map((item, index) => (
            <div key={index} className='items-dp-vehi'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              {item.links?.map((link, i) => (
                <a key={i} href="/">{link}</a>
              ))}
            </div>
          ))}
        </div>
        
        {dropdownContent.menuItems && (
          <div className='right-vehidp'>
            <ul>
              {dropdownContent.menuItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
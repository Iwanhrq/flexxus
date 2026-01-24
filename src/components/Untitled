import './SegmentsSection.css';

interface Segment {
  id: string;
  title: string;
  icon: string;
}

interface SegmentsSectionProps {
  title?: string;
  segments?: Segment[];
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
}

function SegmentsSection({
  title = 'Segmentos',
  segments = [
    {
      id: '1',
      title: 'Indústria automotiva',
      icon: 'M19 17h2c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-1l-1.5-4.5c-.17-.51-.65-.86-1.18-.86H6.68c-.53 0-1.01.35-1.18.86L4 12H3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3zm-13.5-.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6l1.1 3H6.9l1.1-3h8z'
    },
    {
      id: '2',
      title: 'Indústria de colchões, travesseiros e estofados',
      icon: 'M20 9V6h-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4v3h2v2H4v3h2v2H4v3h2v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h2v-3h-2v-2h2v-3h-2V9h2zM8 4h8v16H8V4z'
    },
    {
      id: '3',
      title: 'Linha eletrônicos e alto falantes',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
    },
    {
      id: '4',
      title: 'Fitas dupla face',
      icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H8v2h4z'
    }
  ],
  buttonText = 'Ver detalhes',
  buttonLink = '/segmentos',
  imageUrl = 'https://via.placeholder.com/600x500/1a1a1a/ffffff?text=Segmentos+Image'
}: SegmentsSectionProps) {
  return (
    <section className="segments-home-section">
      <div className="segments-home-container">
        <div className="segments-home-content">
          <div className="segments-home-text">
            <h2 className="segments-home-title">{title}</h2>
            <ul className="segments-home-list">
              {segments.map((segment) => (
                <li key={segment.id} className="segments-home-item">
                  <div className="segments-home-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d={segment.icon} />
                    </svg>
                  </div>
                  <span>{segment.title}</span>
                </li>
              ))}
            </ul>
            <a href={buttonLink} className="segments-home-button">
              {buttonText}
              <svg className="segments-home-button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="segments-home-image">
            <img src={imageUrl} alt="Segmentos" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SegmentsSection;
import './AboutSection.css';

interface AboutSectionProps {
  title: string;
  paragraphs: string[];
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
  imageAlt?: string;
}

function AboutSection({
  title,
  paragraphs,
  buttonText = 'Saiba mais',
  buttonLink = '#',
  imageUrl,
  imageAlt = 'Imagem da seção'
}: AboutSectionProps) {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">{title}</h2>
          <div className="about-text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <a href={buttonLink} className="about-button">
            {buttonText}
          </a>
        </div>
        <div className="about-image">
          <img src={imageUrl} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

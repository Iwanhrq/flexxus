import Carousel from '../components/Carousel'
import AboutSection from '../components/AboutSection'

function Home() {
  // Adicione aqui as URLs das suas 4 imagens
  const carouselImages = [
    'https://via.placeholder.com/1200x500/ff6b35/ffffff?text=Imagem+1',
    'https://via.placeholder.com/1200x500/ff8c42/ffffff?text=Imagem+2',
    'https://via.placeholder.com/1200x500/ffa366/ffffff?text=Imagem+3',
    'https://via.placeholder.com/1200x500/ffb380/ffffff?text=Imagem+4',
  ];

  const aboutParagraphs = [
    'Fundada em Monte Mor em setembro de 2003 a FLEXXUS ADESIVOS conta com um seleto time de profissionais com mais de 30 anos de experiência no desenvolvimento de adesivos e selantes.',
    'Nossa unidade fabril de 1300 m² de área conta com equipamentos modernos e laboratório capacitado e amplo estoque para pronto atendimento dos nossos principais itens.',
    'Nestes quase 20 anos de existência a FLEXXUS atribui o seu sucesso a dedicação de nossa equipe que não mede esforços para atender prontamente e satisfazer todas as necessidades de nossos clientes.'
  ];

  return (
    <section className="home-section">
      <Carousel images={carouselImages} autoPlay={true} interval={5000} />
      <AboutSection
        title="A Flexxus"
        paragraphs={aboutParagraphs}
        buttonText="Saiba mais"
        buttonLink="#institucional"
        imageUrl="https://via.placeholder.com/600x400/ff6b35/ffffff?text=Imagem+Sobre"
        imageAlt="Sobre a Flexxus"
      />
    </section>
  );
}

export default Home;

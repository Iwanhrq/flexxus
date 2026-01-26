import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import SegmentsSection from '../components/SegmentsSection';
import ClientsSection from '../components/ClientsSection';
import carousel1 from '../assets/carrossel_home_1.webp';
import carousel2 from '../assets/carrossel_home_2.webp';
import carousel3 from '../assets/carrossel_home_3.webp';
import carousel4 from '../assets/carrossel_home_4.webp';
import imagemSobre from '../assets/sobre_home.webp';
import imagemACN205 from '../assets/ACN_205.webp';
import imagemEpoxiGelFXFiltro from '../assets/CONJUNTO EPOXI 700A _ 701B; GEL DE BORDA INCOLOR _ PRETO; FX 809; FILTRO SOLAR.webp';
import imagemFitasMultiTransGlasing from '../assets/FITA DUPLA FACE MULTICAMADAS; FITA DUPLA CAMADA TRANSPARENTE; FITA DUPLA FACE GLASING.webp';
import imagemAlicate from '../assets/ALICATE PARA APLICAÇÃO DE FITA DUPLA FACE GLASING.webp';


function Home() {
  // Imagens do Carousel
  const carouselImages = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
  ];

  // Texto da seção "A Flexxus"
  const aboutParagraphs = [
    'Fundada em Monte Mor em setembro de 2003 a FLEXXUS ADESIVOS conta com um seleto time de profissionais com mais de 30 anos de experiência no desenvolvimento de adesivos e selantes.',
    'Nossa unidade fabril de 1300 m² de área conta com equipamentos modernos e laboratório capacitado e amplo estoque para pronto atendimento dos nossos principais itens.',
    'Nestes quase 20 anos de existência a FLEXXUS atribui o seu sucesso a dedicação de nossa equipe que não mede esforços para atender prontamente e satisfazer todas as necessidades de nossos clientes.'
  ];

  // Produtos em destaque
  const featuredProducts = [
    {
      id: '1',
      name: 'ACN 205',
      imageUrl: imagemACN205,
      link: '/produto/te-3003'
    },
    {
      id: '2',
      name: 'CONJUNTO EPOXI 700A / 701B',
      imageUrl: imagemEpoxiGelFXFiltro,
      link: '/produto/te-7002-a-b'
    },
    {
      id: '3',
      name: 'FITA DUPLA FACE GLASING',
      imageUrl: imagemFitasMultiTransGlasing,
      link: '/produto/fita-dupla-face-glasing'
    },
    {
      id: '4',
      name: 'ALICATE PARA APLICAÇÃO DE FITA DUPLA FACE GLASING',
      imageUrl: imagemAlicate,
      link: '/produto/alicate-rolete'
    }
  ];

  // Segmentos
  const segments = [
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
  ];

  // Clientes
  const clients = [
    'Gevisa', 'Magneti Marelli', 'SerAuto', 'Knauf', 'Bepo', 'Igaratiba',
    'Fabbof', 'Marcon', 'Plenitude', 'Amaflex', 'MG16', 'Alcar Abrasivos',
    'Mogiflex', 'Johnson Controls', 'Saúde e Vida', 'Astra', 'Zerust',
    'Asvotec', 'Valeo'
  ];

  return (
    <main className="home-page">
      {/* Carousel Principal */}
      <Carousel images={carouselImages} autoPlay={true} interval={5000} />

      {/* Seção Sobre a Flexxus */}
      <AboutSection
        title="A Flexxus"
        paragraphs={aboutParagraphs}
        buttonText="Saiba mais"
        buttonLink="/institucional"
        imageUrl={imagemSobre}
        imageAlt="Sobre a Flexxus"
      />

      {/* Seção de Produtos */}
      <ProductsSection
        title="Nossos Produtos"
        description="Desde 2003 fornecendo soluções adesivas de qualidade, fabricante de adesivos líquidos com sua marca registrada ADESICOLA, adesivos HOT MELT e fitas dupla face. CONVERTEDOR autorizado TESA, SAINT GOBAIN, TACK, NOVAFLEX, NITTO e ADERE."
        products={featuredProducts}
        buttonText="Ver todos os produtos"
        buttonLink="/produtos"
      />

      {/* Seção de Segmentos */}
      <SegmentsSection
        title="Segmentos"
        segments={segments}
        buttonText="Ver detalhes"
        buttonLink="/segmentos"
        imageUrl="https://via.placeholder.com/600x500/1a1a1a/ffffff?text=Segmentos"
      />

      {/* Seção de Clientes */}
      <ClientsSection
        title="Nossos Clientes"
        clients={clients}
      />
    </main>
  );
}

export default Home;
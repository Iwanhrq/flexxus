import './ProductsSection.css';
import imagemProdutos from '../assets/ACN_205.webp';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}

interface ProductsSectionProps {
  title?: string;
  description?: string;
  products?: Product[];
  buttonText?: string;
  buttonLink?: string;
}

function ProductsSection({
  title = 'Nossos Produtos',
  description = 'Desde 2003 fornecendo soluções adesivas de qualidade, fabricante de adesivos líquidos com sua marca registrada ADESICOLA, adesivos HOT MELT e fitas dupla face. CONVERTEDOR autorizado TESA, SAINT GOBAIN, TACK, NOVAFLEX, NITTO e ADERE.',
  products = [
    {
      id: '1',
      name: 'ACN 205',
      imageUrl: imagemProdutos,
      link: '/produto/acn-205'
    },
    {
      id: '2',
      name: 'AC-560',
      imageUrl: imagemProdutos,
      link: '/produto/ac-560'
    },
    {
      id: '3',
      name: 'FX-800',
      imageUrl: imagemProdutos,
      link: '/produto/fx-800'
    },
    {
      id: '4',
      name: 'AC-385-X',
      imageUrl: imagemProdutos,
      link: '/produto/ac-385-x'
    }
  ],
  buttonText = 'Ver todos os produtos',
  buttonLink = '/produtos'
}: ProductsSectionProps) {
  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">{title}</h2>
          <p className="products-description">{description}</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <a 
              key={product.id} 
              href={product.link} 
              className="product-card"
            >
              <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
                <div className="product-overlay">
                  <span className="product-view-text">Ver Produto</span>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="products-cta">
          <a href={buttonLink} className="products-button">
            {buttonText}
            <svg className="products-button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
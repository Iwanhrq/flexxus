import './ClientsSection.css';

interface ClientsSectionProps {
  title?: string;
  clients?: string[];
}

function ClientsSection({
  title = 'Nossos Clientes',
  clients = [
    'Gevisa',
    'Magneti Marelli',
    'SerAuto',
    'Knauf',
    'Bepo',
    'Igaratiba',
    'Fabbof',
    'Marcon',
    'Plenitude',
    'Amaflex',
    'MG16',
    'Alcar Abrasivos',
    'Mogiflex',
    'Johnson Controls',
    'Saúde e Vida',
    'Astra',
    'Zerust',
    'Asvotec',
    'Valeo'
  ]
}: ClientsSectionProps) {
  return (
    <section className="clients-home-section">
      <div className="clients-home-container">
        <h2 className="clients-home-title">{title}</h2>
        <div className="clients-home-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-home-card">
              <div className="client-home-placeholder">
                <span>{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
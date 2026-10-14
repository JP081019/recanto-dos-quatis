export const site = {
  name: 'Recanto dos Quatis',
  city: 'Urubici',
  region: 'Santa Catarina',
  url: process.env.NEXT_PUBLIC_SITE_URL || '',
  whatsapp: '', // Número oficial com DDI e DDD; preencher apenas após confirmação.
  address: '',
  mapsUrl: '',
  instagramUrl: '',
};
export const accommodations = [
  { id: '01', name: 'Hospedagem 01', type: 'Quarto Família com Banheiro Privativo' },
  { id: '02', name: 'Hospedagem 02', type: 'Quarto Família com Banheiro Privativo' },
];
export const amenities = [
  { icon: 'geo-alt', label: 'Vista para as montanhas', category: 'Paisagem' },
  { icon: 'wifi', label: 'Wi-Fi gratuito', category: 'Conexão' },
  { icon: 'p-circle', label: 'Estacionamento privativo gratuito', category: 'Chegada' },
  { icon: 'sun', label: 'Terraço ao ar livre', category: 'Ao ar livre' },
  { icon: 'tree', label: 'Jardim', category: 'Natureza' },
  { icon: 'cup-hot', label: 'Lounge compartilhado', category: 'Convivência' },
  { icon: 'fire', label: 'Churrasqueira', category: 'Convivência' },
];
export const photographs = [
  { id: 1, alt: 'Varanda de madeira com redes, jardim e construções cercadas pela mata', caption: 'Entre a varanda e a natureza' },
  { id: 2, alt: 'Quarto de madeira com cama de casal, beliche e janela para a vegetação', caption: 'O aconchego da madeira' },
  { id: 3, alt: 'Chalés entre árvores e jardim gramado, com montanha ao fundo', caption: 'Um olhar sobre o Recanto' },
  { id: 4, alt: 'Salão de convivência com mesas e cadeiras em madeira sob telhado aparente', caption: 'Momentos à mesa' },
  { id: 5, alt: 'Quarto com cama de casal e beliche entre paredes de madeira', caption: 'Dentro do Recanto' },
  { id: 6, alt: 'Detalhe de beliche em madeira com roupa de cama branca', caption: 'Detalhes que acolhem' },
  { id: 7, alt: 'Quarto com cama de casal, beliche e porta para o banheiro', caption: 'Espaços para descansar' },
  { id: 8, alt: 'Vista aérea de chalé cercado por vegetação e caminho de pedra', caption: 'Ao redor do Recanto' },
  { id: 9, alt: 'Jardim com árvores, chalés e salão de convivência', caption: 'A natureza por perto' },
  { id: 10, alt: 'Vista aérea de telhados vermelhos e caminhos entre jardins', caption: 'Paisagens do Recanto' },
  { id: 11, alt: 'Quarto de madeira iluminado por janela, com cama de casal e beliche', caption: 'O aconchego de dentro' },
  { id: 12, alt: 'Cama de casal e beliche em quarto com luz natural', caption: 'Tempo para descansar' },
  { id: 13, alt: 'Vista aérea de espaço circular de convivência no jardim com bancos de madeira', caption: 'Um último olhar' },
];

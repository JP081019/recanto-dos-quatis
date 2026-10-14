# Recanto dos Quatis — direção e diagnóstico

Conceito: da floresta ao refúgio. A sequência cinematográfica concentra o movimento; o restante da página privilegia a fotografia e a leitura.

Paleta: floresta #1B3027, sálvia #637A64, madeira #B58C61, areia #DCC7A5, marfim #F5EFE4. Cormorant Garamond para títulos; Manrope para leitura e navegação.

Composição: abertura em tela inteira, introdução assimétrica, acomodações em duas escalas, experiências divididas entre foto e texto, galeria horizontal e consulta de datas. Alinhamento central somente na abertura; demais textos alinhados à esquerda.

O projeto inicialmente continha apenas public/images, com 13 JPGs. Não havia aplicação, dependências, vídeo ou logos oficiais. Os originais foram preservados. Nenhum contato, endereço, preço, avaliação, nome de unidade ou capacidade foi inventado.

## Fotografias

img1.jpg, img3.jpg, img8.jpg, img9.jpg, img10.jpg e img13.jpg: 1024 × 576. img4.jpg, img5.jpg, img6.jpg, img7.jpg, img11.jpg e img12.jpg: 1024 × 682. img2.jpg: 500 × 333.

Revelação: img1.jpg, pela relação entre varanda, caminho e mata. Introdução: img3.jpg e img8.jpg. Acomodações: img11.jpg. Convivência: img4.jpg. Experiências: img9.jpg. Localização ilustrada pela vista aérea img10.jpg, sem indicar coordenadas. Galeria: todos os arquivos reais.

## Produção cinematográfica

O protótipo utiliza geometria Three.js: troncos texturizados, galhos, folhas individuais, vegetação baixa, terreno texturizado, caminho, luz direcional com sombras, névoa e câmera em trajetória determinística. A foto real participa do cenário e da transição final. O navegador do visitante recebe imagens pré-renderizadas; Three.js não integra o bundle do site.

Antes da sequência, foram produzidas e inspecionadas três amostras com `pnpm render:forest --preview`. A primeira vegetação foi refinada após a inspeção. A sequência de validação foi efetivamente renderizada: 72 WebPs por formato, 1280 × 720 desktop (5,04 MiB) e 540 × 960 mobile (2,87 MiB). É um protótipo visual, não uma floresta fotorealista final: a densidade vegetal, os materiais, a iluminação e o caminho ainda precisam de direção de arte para uma produção comercial definitiva.

GSAP ScrollTrigger controla o Canvas em ambas as direções. Cache de até 12 imagens, no máximo quatro solicitações simultâneas, foto real imediata e fallback se a sequência falhar. Movimento reduzido utiliza hero estático. Textos e botões permanecem HTML.

Remotion: composição de 180 quadros a 30 fps, sem títulos incorporados. O demonstrativo de seis segundos foi efetivamente exportado em cinema/renders/recanto.mp4, em 1280 × 720. FFmpeg/Blender não foram encontrados no PATH inicial; o renderizador local Three.js + Chromium, a compressão Sharp e o codificador do Remotion permitiram concluir o protótipo e o vídeo sem instalar essas ferramentas separadamente.

## Dados pendentes

Confirmar WhatsApp, endereço, redes, capacidade, nomes das unidades, comodidades e logos. Centralizados em src/content/site.ts. Sem WhatsApp oficial, o formulário valida e prepara uma mensagem copiável, sem enviar para destinatário fictício. Não há confirmação automática de disponibilidade nem banco de dados.

## Validação executada

Build de produção e TypeScript aprovados. Três testes automatizados de datas e hóspedes aprovados. Navegador Chrome: página HTTP 200, hero com Canvas, rolagem para frente e para trás, abertura da galeria, navegação por setas, fechamento por Escape, menu móvel, consulta válida e inválida, movimento reduzido e ausência de erros de execução. Layouts de 390, 768 e 1440 px sem transbordamento horizontal. Capturas em docs/qa.

O projeto usa pnpm com lockfile; instalação validada após configurar explicitamente os scripts de build de Sharp e esbuild. Versões instaladas: Next.js 16.4.0, React 19.3.0, TypeScript 5.9.3, GSAP 3.15.0, Three.js 0.180.0 e Remotion 4.0.535. Testes de navegador foram feitos sobre a compilação de produção.

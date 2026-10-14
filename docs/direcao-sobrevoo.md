# Recanto dos Quatis — revisão do sobrevoo e maquete

Esta direção substitui a identidade e o roteiro anteriores. Os documentos originais foram preservados. Briefing atual: docs/briefing-sobrevoo.md. Prompt atual: docs/prompt-sobrevoo.md.

## Identidade

Areia #E8DDCB, dourado #CDB380, petróleo #036564, azul profundo #033649 e azul noturno #031634. Unbounded em títulos e marca textual; Pacifico somente em frases pontuais; Manrope em leitura, navegação e formulários. Ícones Bootstrap Icons 1.13.2, sem outra biblioteca de ícones. Predominância clara, áreas escuras para comodidades e rodapé.

## Diagnóstico e referência

Preservados Next.js 16.4.0, React 19.3.0, TypeScript 5.9.3, GSAP, Three.js, Remotion, Sharp e o gerenciador pnpm com lockfile. Adicionados somente React Three Fiber, seus tipos e Bootstrap Icons, necessários ao novo escopo. Chrome local usado para renderização e testes. Não foram usados serviços pagos ou geração de imagens por IA.

Existem 13 JPGs originais, com as mesmas dimensões registradas no diagnóstico anterior. Não há logos oficiais ou contatos novos. A imagem aérea public/images/img10.jpg foi inspecionada e serviu como referência: curso d’água à esquerda, volume retangular à direita do centro, volumes octogonais, canal lateral, pequeno espaço circular e caminhos. Nenhuma foto foi aplicada como textura na experiência inicial.

Urubici e Santa Catarina, quatro camas de solteiro, uma cama de casal grande, banheiro privativo e as comodidades comuns foram informados pelo usuário no briefing. Não foram inferidos capacidade, preços, classificação, avaliações ou endereço completo.

## Arquitetura híbrida

src/three/property-scene.mjs define a propriedade, materiais procedurais, luz, relevo e câmeras. O renderizador offline e o componente React Three Fiber importam a mesma definição. A cena utiliza geometria real, terreno contínuo, volumes externos, telhados, janelas, caminhos, água e vegetação instanciada.

O sobrevoo começa com paisagem, céu e montanhas, desce para a propriedade e termina na visão geral. Foram inspecionadas cinco amostras antes da sequência: início, aproximação, visão geral e duas vistas externas. Foram renderizados 72 frames desktop (1280 × 720) e 72 mobile (540 × 960). Textos e controles permanecem HTML, fora dos frames.

GSAP ScrollTrigger vincula o progresso ao Canvas. A visão final é mantida na parte final do hero para exploração. O último quadro serve como fundo enquanto a cena interativa carrega; há transição por opacidade. A câmera ao vivo começa exatamente na pose final, incluindo ajuste de FOV ao enquadramento da imagem em diferentes proporções. A versão mobile usa sua própria posição de câmera.

A maquete usa renderização por demanda, DPR limitado a 1,5, sombras estáticas, reutilização de geometria e vegetação instanciada. Geometrias, materiais, texturas, instâncias, eventos e recursos WebGL são liberados ao sair da exploração. Os frames têm cache de 12 imagens e limite de quatro solicitações simultâneas.

Há seleção por marcadores HTML e botões alternativos, aproximação externa, navegação entre duas opções, retorno à visão geral e envio da escolha ao formulário. Não há interiores ou travessia de paredes. Sem WebGL, o quadro estático e os painéis continuam utilizáveis. Movimento reduzido pula o sobrevoo e torna a troca de câmera imediata.

## Conteúdo e reservas

Nenhuma foto real é exibida antes da galeria, inclusive nas seções institucional, hospedagens, comodidades e localização. A galeria preserva as proporções, permite ampliação, teclado, Escape e gestos.

Formulário com chegada, saída, hóspedes e hospedagem. Validação de datas impossíveis, datas passadas, ordem das datas, hóspedes inteiros e opções válidas. Sem telefone oficial, mensagem copiável; com telefone confirmado, abre WhatsApp com a consulta preenchida. Nenhuma disponibilidade é afirmada automaticamente.

Metadata, Open Graph, robots, sitemap condicionado ao domínio confirmado e dados estruturados básicos de LodgingBusiness estão presentes. Endereço estruturado contém somente cidade, estado e país informados. Nenhuma coordenada ou rua foi inventada.

## Limitações comerciais e artísticas

A modelagem é ilustrativa, com proporções aproximadas; não é um levantamento arquitetônico ou representação fotorealista definitiva. A identificação de quais construções correspondem às duas opções precisa de confirmação, assim como a capacidade máxima. Telhados, exteriores, paisagem e distribuição de vegetação poderão ser refinados com referências adicionais.

O codificador integrado do Remotion produz o vídeo demonstrativo. Não há instalação independente de Blender ou FFmpeg no PATH; WebPs são renderizados com Three.js/Chrome e comprimidos com Sharp. Não é alegada uma etapa de extração por FFmpeg que não foi realizada.

Confirmar ainda WhatsApp, endereço completo, redes, domínio e logos originais. O site funciona localmente, mas esses dados precisam estar completos antes de apresentação como versão comercial definitiva.

## Verificação

Build de produção e TypeScript aprovados. Quatro testes de reserva aprovados. Maquete validada no navegador com ambas as construções, movimento real da câmera, retorno à visão geral e preenchimento da opção na consulta. A conferência completa cobre scroll em ambos os sentidos, saída e retorno ao WebGL, galeria, formulário, larguras 390 / 768 / 1440, movimento reduzido e ausência de WebGL. Evidências em docs/qa-v2.

A execução final da conferência completa passou, incluindo zero erros no console do navegador. Um erro inicial de favicon ausente foi corrigido com src/app/icon.svg. O ícone da aba é uma ilustração simples de montanhas, não uma substituição de logo oficial.

Materiais produzidos e conferidos: 72 frames desktop (3,36 MiB), 72 mobile (2,37 MiB) e vídeo Remotion cinema/renders/sobrevoo-recanto.mp4, validado com duração de seis segundos (4,10 MiB). O vídeo anterior da floresta foi preservado como material histórico.

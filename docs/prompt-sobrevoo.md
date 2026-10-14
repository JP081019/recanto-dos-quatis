# PROMPT MESTRE — RECANTO DOS QUATIS
## Website Premium com Sobrevoo Cinematográfico e Propriedade 3D Interativa
### Projeto JP Creative | Next.js + Three.js + Remotion + FFmpeg + GSAP

---

# 1. SUA MISSÃO

Atue como uma equipe multidisciplinar de alto nível, composta por:

- Diretor criativo especializado em experiências digitais premium.
- Diretor de arte e especialista em identidade visual.
- Designer UI/UX sênior.
- Desenvolvedor frontend especialista em Next.js 16 e React 19.
- Engenheiro de computação gráfica especializado em Three.js.
- Artista técnico especializado em modelagem procedural 3D.
- Especialista em React Three Fiber.
- Motion designer especializado em Remotion.
- Especialista em FFmpeg e otimização audiovisual.
- Especialista em GSAP ScrollTrigger.
- Engenheiro de performance web.
- Especialista em responsividade, acessibilidade e conversão.

Sua missão é **desenvolver um website real, funcional, cinematográfico e visualmente extraordinário para o Recanto dos Quatis, uma hospedagem localizada em Urubici, Santa Catarina.**

O website será inicialmente utilizado como proposta comercial da JP Creative.

Ele precisa demonstrar ao proprietário o potencial de uma experiência digital diferenciada.

Não quero apenas um protótipo estático, wireframe ou apresentação de slides.

Quero um website com identidade própria, navegação fluida, animações sofisticadas e uma experiência tridimensional memorável.

## Conceito criativo

**RECANTO DOS QUATIS — UMA EXPERIÊNCIA QUE COMEÇA ANTES DA CHEGADA.**

O visitante deverá sentir que está realizando uma viagem virtual até a hospedagem.

A experiência começa no céu, aproxima-se da propriedade, revela uma maquete tridimensional e permite explorar externamente duas construções.

Somente depois dessa experiência serão apresentadas as fotografias reais do Recanto.

**REGRA FUNDAMENTAL: NÃO UTILIZAR FOTOGRAFIAS REAIS DURANTE A IMERSÃO 3D.**

As imagens reais deverão aparecer posteriormente, na seção de galeria.

---

# 2. INSPEÇÃO OBRIGATÓRIA DO PROJETO

Antes de escrever código:

1. Inspecione a estrutura atual do repositório.
2. Leia o `package.json`.
3. Identifique o gerenciador de pacotes.
4. Verifique as versões instaladas de Next.js, React e TypeScript.
5. Localize a pasta `public`.
6. Liste todos os arquivos de imagem e vídeo disponíveis.
7. Identifique nomes, extensões e dimensões reais.
8. Verifique se existem logos oficiais.
9. Identifique possíveis referências da propriedade.
10. Verifique se Remotion, FFmpeg, Three.js e Blender estão disponíveis.
11. Verifique as ferramentas de renderização e recursos do ambiente.
12. Identifique configurações existentes que devem ser preservadas.

Não presuma nomes de arquivos.

Não invente extensões.

Não apague fotografias originais.

Não substitua logos oficiais.

Não instale dependências que já estejam disponíveis.

Não reestruture desnecessariamente um projeto existente.

Se a imagem aérea de referência estiver disponível no repositório, utilize-a apenas como referência de modelagem, nunca como textura ou imagem visível na experiência inicial.

Caso a referência não esteja acessível, não invente a disposição exata da propriedade. Crie uma estrutura provisória configurável e identifique claramente o que precisa ser ajustado.

---

# 3. IDENTIDADE VISUAL OFICIAL

Utilize exclusivamente a seguinte paleta como base da identidade:

| Cor | Hexadecimal | Aplicação |
|---|---|---|
| Areia clara | #E8DDCB | Fundos claros e textos |
| Dourado natural | #CDB380 | Destaques e detalhes |
| Verde petróleo | #036564 | Botões e elementos interativos |
| Azul profundo | #033649 | Seções escuras e superfícies |
| Azul noturno | #031634 | Fundos premium e footer |

As cores deverão ser utilizadas de maneira consistente.

## Distribuição visual

O site deve alternar seções claras e escuras estrategicamente.

Utilizar:

- Fundos claros para conteúdo editorial.
- Azul noturno para áreas cinematográficas.
- Verde petróleo para interações.
- Dourado natural para detalhes sofisticados.
- Azul profundo para superfícies e contrastes.

Evitar excesso de gradientes.

Evitar elementos neon.

Evitar orbes luminosos.

Evitar glassmorphism exagerado.

A identidade deve transmitir natureza, tranquilidade, sofisticação e modernidade.

---

# 4. TIPOGRAFIA

## Fonte principal: UNBOUNDED

Utilizar em:

- Títulos principais.
- Hero.
- Headings.
- Números de destaque.
- Chamadas especiais.
- Elementos de identidade.

Explorar pesos diferentes da fonte variável.

Não utilizar tamanhos excessivos que prejudiquem a responsividade.

## Fonte decorativa: PACIFICO

Utilizar pontualmente em:

- Frases emocionais.
- Palavras especiais.
- Pequenas assinaturas visuais.
- Detalhes de destaque.

Não utilizar Pacifico em parágrafos longos.

## Fonte funcional: MANROPE

Utilizar para:

- Parágrafos.
- Descrições.
- Formulários.
- Navegação.
- Botões.
- Informações práticas.

Priorizar legibilidade.

Utilizar fontes locais ou carregamento otimizado com Next.js.

---

# 5. BOOTSTRAP ICONS — OBRIGATÓRIO

Utilize Bootstrap Icons como biblioteca principal de ícones em toda a interface.

Não misture várias bibliotecas sem necessidade.

Os ícones deverão estar presentes em:

- Navegação.
- Header.
- Indicadores de scroll.
- Seleção das hospedagens.
- Características dos quartos.
- Comodidades.
- Galeria.
- Formulários.
- Botões.
- Localização.
- Redes sociais.
- Footer.

Exemplos de ícones:

- `bi-house`
- `bi-houses`
- `bi-geo-alt`
- `bi-people`
- `bi-wifi`
- `bi-car-front`
- `bi-tree`
- `bi-calendar-check`
- `bi-arrow-down`
- `bi-arrow-up-right`
- `bi-chevron-left`
- `bi-chevron-right`
- `bi-images`
- `bi-whatsapp`
- `bi-cursor`
- `bi-fullscreen`

Verifique os nomes disponíveis na versão utilizada.

Os ícones devem ter tamanhos consistentes, alinhamento correto e cores da paleta.

Não utilizar ícones apenas para preencher espaços.

---

# 6. EXPERIÊNCIA PRINCIPAL — SOBREVOO 3D

Esta é a parte mais importante do website.

O visitante deverá iniciar a navegação em uma paisagem tridimensional inspirada no ambiente natural de Urubici.

A câmera começará em posição elevada e realizará uma descida cinematográfica até a propriedade.

## Características do cenário

Criar um ambiente 3D verdadeiro com:

- Terreno tridimensional.
- Montanhas ao fundo.
- Vegetação.
- Árvores.
- Gramado.
- Iluminação natural.
- Sombras.
- Céu.
- Atmosfera.
- Névoa sutil.
- Profundidade real.

Não utilizar uma simples imagem de fundo com zoom CSS como substituto do cenário 3D.

Não criar uma experiência visual com aparência de jogo antigo.

O objetivo é uma direção cinematográfica elegante.

A modelagem pode ser estilizada de maneira realista, equilibrando qualidade e desempenho.

## Movimento de câmera

A câmera deverá:

1. Começar no céu.
2. Mostrar a paisagem.
3. Iniciar uma descida gradual.
4. Aproximar-se do terreno.
5. Revelar a propriedade.
6. Ajustar a perspectiva.
7. Terminar em uma visão aérea adequada à interação.

O movimento deve ser contínuo e suave.

Evitar cortes bruscos.

Evitar movimentos de câmera excessivamente rápidos.

A trajetória deverá funcionar com avanço e retrocesso conforme o scroll.

---

# 7. STORYBOARD DO SOBREVOO

## CENA 01 — O CÉU DE URUBICI

Progresso: 0%–20%.

A câmera apresenta uma paisagem tridimensional com montanhas, céu e vegetação.

Exibir:

**RECANTO DOS QUATIS**

Frase complementar:

**Uma experiência que começa antes da chegada.**

Utilizar Unbounded para o título.

Pacifico poderá destacar uma palavra ou pequena frase complementar.

Adicionar indicador elegante de rolagem.

## CENA 02 — A APROXIMAÇÃO

Progresso: 20%–45%.

A câmera começa a descer.

A paisagem ganha profundidade.

O terreno fica mais próximo.

As árvores e construções começam a aparecer.

Os textos desaparecem suavemente.

## CENA 03 — A PROPRIEDADE

Progresso: 45%–75%.

A câmera se aproxima da área principal do Recanto.

A composição deverá revelar:

- Terreno.
- Árvores.
- Curso d'água.
- Caminhos.
- Construções.
- Gramado.
- Vegetação.

Utilizar a fotografia aérea fornecida como referência espacial, caso esteja disponível.

Não exibir a fotografia diretamente.

## CENA 04 — VISÃO AÉREA

Progresso: 75%–100%.

A câmera termina em uma visão superior ou levemente inclinada da propriedade.

O movimento desacelera.

A interface apresenta:

**Explore o Recanto dos Quatis**

Duas marcações interativas aparecem sobre as construções principais.

A experiência passa para o modo de exploração.

---

# 8. MAQUETE 3D INTERATIVA

Após o sobrevoo, apresentar uma maquete tridimensional da propriedade.

Essa maquete deverá ser implementada com Three.js e React Three Fiber.

## Elementos da propriedade

Modelar:

- Terreno.
- Gramado.
- Vegetação.
- Árvores.
- Curso d'água.
- Caminhos de acesso.
- Construções principais.
- Telhados avermelhados.
- Elementos externos relevantes.

A modelagem deve preservar a disposição geral observada na referência aérea.

Não é necessário reproduzir cada detalhe arquitetônico.

Entretanto, as construções devem ser visualmente reconhecíveis e coerentes com a referência.

Não inventar uma planta arquitetônica exata.

## Duas hospedagens

Existem duas opções anunciadas como:

**Quarto Família com Banheiro Privativo.**

Cada opção apresenta:

- Quatro camas de solteiro.
- Uma cama de casal grande.
- Banheiro privativo.

A capacidade máxima de hóspedes precisa ser confirmada.

A correspondência entre as duas opções anunciadas e as construções da imagem aérea também precisa ser confirmada.

Até essa confirmação, utilizar identificações provisórias:

**Hospedagem 01**

**Hospedagem 02**

Não apresentar informações não confirmadas como fatos.

---

# 9. INTERAÇÃO COM AS CONSTRUÇÕES

A maquete deverá permitir selecionar as duas hospedagens.

## Estado inicial

A câmera apresenta a propriedade inteira.

As duas construções principais recebem marcações elegantes.

As marcações devem ter:

- Nome.
- Ícone Bootstrap.
- Destaque visual.
- Feedback de hover.
- Feedback de toque.
- Estados de foco acessíveis.

## Ao selecionar Hospedagem 01

A câmera se aproxima suavemente da construção correspondente.

A animação deverá destacar a arquitetura externa.

Exibir um painel informativo com:

- Nome da hospedagem.
- Tipo de quarto.
- Configuração de camas.
- Banheiro privativo.
- Botão de consulta.

## Ao selecionar Hospedagem 02

A câmera se desloca até a segunda construção.

Apresentar as informações correspondentes.

## Retorno

Adicionar opção:

**Voltar à visão geral**

A câmera retorna suavemente à posição aérea inicial.

## Navegação entre hospedagens

Adicionar:

**Conhecer a outra hospedagem**

O usuário poderá alternar entre as duas construções sem reiniciar o sobrevoo.

## REGRA IMPORTANTE

Não modelar interiores.

Não criar tours internos.

Não permitir que a câmera atravesse paredes.

Não adicionar móveis internos.

A experiência 3D deverá apresentar somente a parte externa das construções.

---

# 10. ARQUITETURA HÍBRIDA DA EXPERIÊNCIA

Utilizar dois sistemas complementares.

## Sistema A — Sobrevoo cinematográfico pré-renderizado

Tecnologias:

- Three.js ou Blender.
- Remotion.
- FFmpeg.
- GSAP ScrollTrigger.
- Canvas.

O sobrevoo será produzido previamente para reduzir o custo gráfico no navegador.

## Sistema B — Maquete interativa em tempo real

Tecnologias:

- React Three Fiber.
- Three.js.
- GSAP.

A maquete permitirá selecionar construções e mover a câmera entre posições predefinidas.

## Transição entre sistemas

Esta transição é crítica.

O último enquadramento do sobrevoo deverá corresponder ao enquadramento inicial da maquete interativa.

Preservar:

- Posição da câmera.
- Orientação.
- Campo de visão.
- Proporções.
- Iluminação.
- Disposição dos elementos.
- Enquadramento.

Evitar saltos visuais.

Preferencialmente, utilizar a mesma definição de cena e câmera como referência para os dois sistemas.

Não criar duas propriedades visualmente diferentes.

---

# 11. REMOTION E FFMPEG

## Remotion

Utilizar para composição e finalização da sequência cinematográfica.

Responsabilidades:

- Organizar renderizações.
- Compor cenas.
- Ajustar transições.
- Integrar efeitos.
- Preparar material final.

Não utilizar Remotion como substituto de modelagem tridimensional.

## FFmpeg

Utilizar para:

- Processamento de vídeo.
- Extração de frames.
- Compressão.
- Redimensionamento.
- Preparação de sequências desktop e mobile.
- Otimização para web.

## Parâmetros iniciais

- Duração aproximada: 6 segundos.
- Taxa de quadros: 30 fps.
- Referência inicial: 180 frames.
- Desktop: até 1920 × 1080.
- Mobile: enquadramento adaptado.

Esses parâmetros poderão ser alterados conforme os testes.

Não renderizar a sequência completa antes de validar o protótipo.

---

# 12. CONTROLE POR SCROLL

Utilizar GSAP ScrollTrigger.

O progresso da rolagem deverá controlar a sequência cinematográfica.

Requisitos:

- Scroll para baixo avança.
- Scroll para cima retrocede.
- Movimento suave.
- Hero fixado durante a sequência.
- Transição natural para a maquete.
- Nenhum bloqueio desnecessário da navegação.
- Suporte a diferentes tamanhos de tela.

Não implementar scroll artificial global.

A página deve continuar funcionando normalmente após a experiência.

---

# 13. TRANSIÇÃO PARA O CONTEÚDO INSTITUCIONAL

Depois que o visitante explorar as hospedagens, a experiência tridimensional deverá terminar.

A câmera poderá retornar à visão geral e se afastar discretamente.

A interface então apresenta a próxima seção.

Não utilizar fotografias reais antes dessa etapa.

A transição deverá ser sofisticada, com mudança suave de fundo, opacidade e composição.

O site continuará com navegação tradicional e animações editoriais.

---

# 14. SEÇÃO CONHEÇA O RECANTO

Criar uma apresentação institucional elegante.

Título sugerido:

**Um lugar para viver o que realmente importa.**

Apresentar o Recanto dos Quatis como uma hospedagem em Urubici, Santa Catarina.

Valorizar:

- Natureza.
- Descanso.
- Tranquilidade.
- Hospitalidade.
- Experiências especiais.

Não inventar informações sobre a história do estabelecimento.

Nesta seção, priorizar tipografia, composição e elementos gráficos.

As fotografias reais deverão ser reservadas para a galeria posterior.

---

# 15. SEÇÃO EXPERIÊNCIAS E COMODIDADES

Utilizar Bootstrap Icons para apresentar os diferenciais conhecidos.

Informações disponíveis:

- Vista para as montanhas.
- Wi-Fi gratuito.
- Estacionamento privativo gratuito.
- Terraço ao ar livre.
- Jardim.
- Lounge compartilhado.
- Churrasqueira.

Criar uma apresentação visual sofisticada.

Não utilizar um grid genérico com dezenas de cards iguais.

Explorar:

- Linhas editoriais.
- Ícones.
- Tipografia.
- Divisórias.
- Microinterações.
- Composições assimétricas.

Distinguir comodidades compartilhadas de características específicas das hospedagens.

---

# 16. GALERIA DE FOTOGRAFIAS REAIS

Esta será a primeira grande seção dedicada às fotografias reais.

Título sugerido:

**Agora, conheça o Recanto de verdade.**

A galeria deve criar uma sensação de revelação.

Até esse momento, o visitante conheceu a propriedade por meio da experiência tridimensional.

Agora ele poderá contemplar os ambientes reais.

## Requisitos

- Utilizar fotografias existentes na pasta `public`.
- Preservar proporções.
- Evitar cortes inadequados.
- Criar composições editoriais.
- Permitir visualização fullscreen.
- Implementar navegação por gestos.
- Adicionar controles acessíveis.
- Utilizar transições suaves.
- Otimizar carregamento.

Não utilizar imagens genéricas de outras hospedagens.

Não gerar fotografias fictícias.

Não modificar os arquivos originais.

A galeria deverá funcionar perfeitamente em celulares e tablets.

---

# 17. SISTEMA DE PRÉ-RESERVAS

Criar um formulário funcional sem banco de dados.

## Campos

- Data de check-in.
- Data de check-out.
- Quantidade de hóspedes.
- Hospedagem desejada.

## Validações

- Check-in válido.
- Check-out posterior ao check-in.
- Quantidade de hóspedes válida.
- Campos obrigatórios preenchidos.

## Funcionamento

Ao clicar em:

**Consultar disponibilidade**

Abrir o WhatsApp oficial do Recanto com uma mensagem preenchida.

Exemplo:

"Olá! Gostaria de consultar uma hospedagem no Recanto dos Quatis.

Hospedagem: [opção]

Check-in: [data]

Check-out: [data]

Hóspedes: [quantidade]

Poderiam me informar a disponibilidade e os valores?"

Não implementar pagamento on-line.

Não criar autenticação.

Não criar banco de dados.

Não confirmar automaticamente reservas.

Caso o número oficial não esteja disponível, deixar a configuração pendente e claramente identificada.

---

# 18. HEADER E NAVEGAÇÃO

Criar um header premium.

Durante o hero:

- Fundo transparente.
- Logo ou nome da hospedagem.
- Navegação discreta.
- Botão de reserva.
- Contraste adequado.

Após o hero:

- Transição para fundo sólido ou translúcido.
- Navegação clara.
- CTA destacado.

## Menu

- Início.
- Conheça o Recanto.
- Hospedagens.
- Experiências.
- Galeria.
- Localização.
- Reservar.

No mobile, implementar menu responsivo próprio.

Utilizar Bootstrap Icons.

---

# 19. RESPONSIVIDADE PREMIUM

A responsividade é uma prioridade absoluta.

Não desenvolver apenas para desktop.

## Desktop

- Sobrevoo cinematográfico completo.
- Visão ampla da propriedade.
- Maquete interativa.
- Painéis laterais.
- Galeria editorial.

## Tablet

- Câmera adaptada.
- Elementos interativos maiores.
- Painéis reposicionados.
- Navegação confortável.
- Animações otimizadas.

## Mobile

- Enquadramento vertical.
- Menor complexidade gráfica.
- Seleção das hospedagens por toque.
- Painéis inferiores.
- Botões confortáveis.
- Navegação simplificada.
- Carregamento otimizado.

Não permitir que os controles 3D fiquem inacessíveis em telas pequenas.

Não permitir rolagem horizontal indesejada.

Não utilizar textos minúsculos.

---

# 20. PERFORMANCE

A experiência 3D não poderá comprometer a usabilidade.

Implementar:

- Carregamento progressivo.
- Fallback estático.
- Lazy loading.
- Otimização de texturas.
- Redução de polígonos quando necessário.
- Reutilização de geometria.
- Instancing para vegetação repetida.
- Limpeza de recursos WebGL.
- Controle de memória.
- Compressão de frames.
- Adaptação para dispositivos limitados.

Evitar carregar todos os recursos pesados simultaneamente.

Se o dispositivo não suportar adequadamente WebGL, oferecer uma experiência simplificada.

O usuário deverá conseguir conhecer as hospedagens e solicitar uma reserva mesmo sem a experiência 3D.

---

# 21. ACESSIBILIDADE

Implementar:

- HTML semântico.
- Navegação por teclado.
- Estados de foco visíveis.
- Textos alternativos.
- Contraste adequado.
- Suporte a `prefers-reduced-motion`.
- Controles acessíveis.
- Labels em formulários.
- Mensagens de validação claras.

As marcações das hospedagens deverão possuir alternativas HTML acessíveis.

Não depender exclusivamente de interações dentro do Canvas.

---

# 22. SEO E METADADOS

Preparar o site para buscas relacionadas à hospedagem em Urubici.

Implementar:

- Metadata API do Next.js.
- Title e description.
- Open Graph.
- Hierarquia semântica.
- URLs amigáveis.
- Sitemap.
- Robots.
- Dados estruturados apropriados, quando houver informações verificadas.
- Otimização de imagens.
- Boas práticas de Core Web Vitals.

Não inventar avaliações, preços, endereço ou classificações.

---

# 23. RODAPÉ E JP CREATIVE

Criar um footer elegante utilizando:

Fundo: `#031634`

Textos: `#E8DDCB`

Detalhes: `#CDB380`

Incluir:

- Nome da hospedagem.
- Navegação.
- Contatos.
- Redes sociais disponíveis.
- Direitos reservados.

Adicionar obrigatoriamente:

**Desenvolvido por JPCreative**

Com a logo original da JP Creative, se disponível, e link:

https://jpcreative.com.br

Não redesenhar a logo.

---

# 24. ORGANIZAÇÃO TÉCNICA

Utilizar:

- Next.js 16.
- React 19.
- TypeScript.
- React Three Fiber.
- Three.js.
- GSAP ScrollTrigger.
- Remotion.
- FFmpeg.
- Bootstrap Icons.
- CSS responsivo.

Organizar o projeto em componentes reutilizáveis.

Separar:

- Layout.
- Header.
- Hero.
- Cena 3D.
- Câmera.
- Maquete.
- Marcadores interativos.
- Painéis das hospedagens.
- Conteúdo institucional.
- Galeria.
- Reservas.
- Footer.
- Hooks.
- Utilitários.
- Configurações.

Não criar componentes monolíticos.

Não adicionar dependências desnecessárias.

Não modificar configurações existentes sem justificativa.

---

# 25. ESTRATÉGIA DE DESENVOLVIMENTO

Trabalhar em fases.

## Fase 1 — Diagnóstico

Inspecionar o projeto e os arquivos.

Identificar ferramentas disponíveis.

Analisar a referência aérea.

Definir a estrutura técnica.

## Fase 2 — Identidade e layout

Implementar:

- Paleta.
- Tipografia.
- Header.
- Estrutura das seções.
- Componentes.
- Responsividade inicial.

## Fase 3 — Maquete 3D

Modelar primeiro a propriedade.

Criar terreno, construções, vegetação e câmera.

Implementar seleção das hospedagens.

Validar posições e enquadramentos.

## Fase 4 — Sobrevoo

Utilizar a maquete aprovada como referência.

Construir a trajetória cinematográfica da câmera.

Renderizar uma prévia curta e de baixa resolução.

Validar o enquadramento final.

## Fase 5 — Produção audiovisual

Finalizar o cenário.

Renderizar a sequência.

Compor com Remotion.

Otimizar com FFmpeg.

## Fase 6 — Integração

Integrar o sobrevoo ao GSAP ScrollTrigger.

Conectar a transição à maquete interativa.

Ajustar continuidade visual.

## Fase 7 — Conteúdo e galeria

Implementar as seções institucionais.

Integrar as fotografias reais somente na galeria.

## Fase 8 — Reservas

Implementar formulário e WhatsApp.

## Fase 9 — Refinamento

Testar desempenho, responsividade, acessibilidade, animações e build de produção.

---

# 26. EFICIÊNCIA E ECONOMIA DE RECURSOS

Priorizar ferramentas locais e gratuitas.

Evitar consumo desnecessário de créditos, processamento e armazenamento.

Regras:

1. Não renderizar 180 frames antes de validar a maquete.
2. Utilizar prévias de baixa resolução.
3. Reaproveitar geometria e materiais.
4. Evitar bibliotecas desnecessárias.
5. Não instalar ferramentas já disponíveis.
6. Não criar múltiplas versões pesadas sem necessidade.
7. Não gerar imagens por IA.
8. Não utilizar serviços pagos de renderização.
9. Não duplicar arquivos grandes.
10. Não executar processos de renderização excessivamente longos sem necessidade.
11. Não fingir que uma animação foi produzida.
12. Não substituir a experiência 3D por um simples zoom de imagem.
13. Preservar o código existente que estiver funcionando.
14. Priorizar uma arquitetura sustentável.

---

# 27. CRITÉRIOS DE CONCLUSÃO

O projeto deverá apresentar:

- Identidade visual consistente.
- Fontes corretas.
- Bootstrap Icons integrados.
- Hero cinematográfico.
- Sobrevoo controlado pelo scroll.
- Maquete 3D interativa.
- Duas hospedagens selecionáveis.
- Câmera aproximando-se externamente das construções.
- Retorno à visão aérea.
- Transição natural para o conteúdo.
- Galeria com fotografias reais.
- Formulário de pré-reserva.
- Integração com WhatsApp.
- Responsividade refinada.
- Acessibilidade.
- Performance otimizada.
- Build de produção validado.

Se alguma etapa não puder ser concluída no ambiente, documentar a limitação e o que falta, sem apresentar uma simulação como implementação definitiva.

---

# 28. INSTRUÇÃO FINAL

Comece imediatamente pela inspeção do repositório.

Depois, construa a identidade visual e a maquete 3D interativa.

**Priorize a maquete antes do sobrevoo**, pois ela será a referência espacial e visual para o enquadramento final da animação cinematográfica.

Valide o movimento de câmera e a seleção das duas hospedagens antes de iniciar renderizações definitivas.

Desenvolva uma experiência visual sofisticada, mas mantenha o código organizado, o site rápido e a navegação intuitiva.

Não entregue apenas um plano de desenvolvimento.

Implemente o projeto efetivamente, respeitando as limitações reais do ambiente.

O resultado deve fazer o proprietário perceber que a JP Creative não está oferecendo apenas um website, mas uma maneira completamente diferente de apresentar sua hospedagem.

**RECANTO DOS QUATIS**

**UMA EXPERIÊNCIA QUE COMEÇA ANTES DA CHEGADA.**

Desenvolvido por JP Creative.
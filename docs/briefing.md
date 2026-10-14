# BRIEFING CRIATIVO E TÉCNICO
# RECANTO DOS QUATIS
**Website Imersivo 3D | JP Creative**

**Conceito:** Da Floresta ao Refúgio  
**Categoria:** Hospedagem e turismo  
**Formato:** Website institucional premium com experiência cinematográfica  
**Objetivo:** Apresentação comercial e futura implementação para o Recanto dos Quatis  
**Direção criativa:** Natureza, sofisticação, tecnologia e hospitalidade

---

## 1. VISÃO GERAL DO PROJETO

Desenvolver um website premium para o Recanto dos Quatis, proporcionando uma experiência digital imersiva que valorize a beleza natural da hospedagem, desperte o desejo de conhecer o espaço e facilite a solicitação de reservas.

O website será inicialmente desenvolvido como uma proposta comercial da JP Creative, demonstrando ao proprietário como uma presença digital diferenciada pode valorizar seu estabelecimento.

O projeto deve transmitir a sensação de que o visitante está começando sua viagem antes mesmo de chegar ao local.

O principal diferencial será um **hero cinematográfico com uma floresta 3D verdadeira, pré-renderizada e controlada pela rolagem da página**.

A experiência começará em um ambiente natural tridimensional e terminará revelando fotografias reais do Recanto dos Quatis.

O resultado esperado é um site sofisticado, envolvente, responsivo e comercialmente eficiente.

## 2. CONCEITO CRIATIVO — DA FLORESTA AO REFÚGIO

A ideia central é transformar a navegação em uma jornada visual.

O visitante não encontra imediatamente uma página tradicional com fotografias e botões. Primeiro, ele é apresentado a um ambiente natural cinematográfico.

Uma floresta tridimensional ocupa toda a tela, com árvores, vegetação, iluminação natural, névoa atmosférica e profundidade.

Conforme o usuário rola a página, uma câmera virtual avança pela floresta.

A vegetação passa pelas laterais da câmera, a iluminação muda suavemente e o ambiente começa a revelar um espaço mais aberto.

Ao final do percurso, uma fotografia real do Recanto dos Quatis surge integrada à composição.

Essa fotografia assume gradualmente a tela inteira, fazendo a transição entre o universo tridimensional e a apresentação real da hospedagem.

**Mensagem principal sugerida:**

"O extraordinário está em desacelerar."

**Mensagem complementar:**

"Descubra um lugar onde a natureza, o descanso e os bons momentos se encontram."

Essas mensagens são provisórias e poderão ser adaptadas após conhecer melhor o posicionamento e os diferenciais reais da hospedagem.

## 3. HERO CINEMATOGRÁFICO — STORYBOARD

### CENA 01 — O CHAMADO DA NATUREZA

**Progresso:** 0% a 20%

A experiência começa em uma floresta tridimensional.

Características:

- Ambiente natural com árvores e vegetação em diferentes profundidades.
- Iluminação cinematográfica de início da manhã.
- Névoa volumétrica discreta.
- Movimento ambiental suave.
- Paleta de verdes profundos, dourado natural e tons terrosos.
- Câmera inicialmente quase estática.

O nome "Recanto dos Quatis" aparece centralizado, acompanhado de uma frase curta.

Na parte inferior da tela, um indicador elegante convida o visitante a rolar a página.

### CENA 02 — A JORNADA PELA FLORESTA

**Progresso:** 20% a 45%

A câmera começa a avançar pelo ambiente tridimensional.

Árvores, folhas e vegetação passam pelas laterais do enquadramento, criando uma sensação realista de deslocamento.

A profundidade de campo, a iluminação e a névoa reforçam o caráter cinematográfico.

O movimento deve ser suave e contínuo, sem acelerações bruscas.

O texto inicial desaparece gradualmente para deixar a paisagem como protagonista.

### CENA 03 — A DESCOBERTA

**Progresso:** 45% a 70%

A floresta começa a se abrir.

A iluminação fica mais quente e a câmera se aproxima de uma clareira.

Nesse momento, surge a primeira fotografia real do Recanto dos Quatis.

A imagem deve ser integrada à composição por meio de perspectiva, máscara orgânica, iluminação e movimento.

O objetivo é evitar que a transição pareça simplesmente uma troca de imagem.

### CENA 04 — A REVELAÇÃO DO RECANTO

**Progresso:** 70% a 90%

A fotografia real passa a ocupar progressivamente o enquadramento.

A câmera conclui seu movimento, os elementos tridimensionais desaparecem e a imagem real se torna protagonista.

A transição deve transmitir a sensação de que o visitante finalmente chegou ao destino.

### CENA 05 — BEM-VINDO AO RECANTO

**Progresso:** 90% a 100%

A fotografia real ocupa toda a tela.

Surge a mensagem:

"Seu próximo refúgio começa aqui."

Um botão de destaque permite conhecer as acomodações ou consultar disponibilidade.

A sequência cinematográfica termina e o site continua naturalmente para a próxima seção.

**Importante:** todas as cenas deverão compor uma única animação contínua, e não um carrossel ou apresentação de slides.

---

## 4. ARQUITETURA DA PRODUÇÃO CINEMATOGRÁFICA

A animação será produzida previamente, em vez de exigir a renderização completa da floresta 3D no navegador.

### 4.1. Blender ou Three.js — Produção 3D

Responsáveis pela criação do ambiente tridimensional.

Elementos:

- Geometria de árvores e vegetação.
- Materiais naturais.
- Iluminação ambiental.
- Névoa e profundidade atmosférica.
- Câmera virtual com trajetória definida.
- Animação de aproximação e revelação.

O ambiente deverá ser cinematográfico, mas não precisa reproduzir exatamente a vegetação real do Recanto.

A hospedagem verdadeira será representada pelas fotografias fornecidas.

### 4.2. Remotion — Composição cinematográfica

Responsável por organizar a sequência audiovisual utilizando React.

Aplicações:

- Composição de cenas.
- Integração das renderizações 3D.
- Transições entre materiais.
- Tratamento visual.
- Sobreposições cinematográficas.
- Preparação da sequência final.

Os textos principais e os botões interativos do site deverão permanecer em HTML, sobrepostos à animação, garantindo acessibilidade e nitidez.

### 4.3. FFmpeg — Processamento e otimização

Responsável pelo processamento dos materiais renderizados.

Aplicações:

- Conversão de vídeos.
- Extração de frames.
- Redimensionamento.
- Compressão.
- Preparação de versões desktop e mobile.
- Otimização dos arquivos para carregamento na web.

### 4.4. GSAP ScrollTrigger + Canvas — Integração ao site

Responsáveis por conectar a animação ao comportamento de rolagem.

O progresso do scroll determinará qual frame será exibido.

A sequência deverá funcionar nos dois sentidos: ao rolar para baixo, a câmera avança; ao rolar para cima, a animação retrocede.

A navegação não dependerá de reprodução automática de vídeo.

### Especificações iniciais

- Duração do material cinematográfico: aproximadamente 6 segundos.
- Taxa de quadros: 30 fps.
- Sequência inicial: 180 frames.
- Resolução desktop de referência: até 1920 × 1080.
- Versão mobile: enquadramento vertical adaptado.
- Controle: GSAP ScrollTrigger.
- Exibição: Canvas.
- Áudio: sem reprodução automática.
- Fallback: fotografia real estática.

Esses parâmetros serão ajustados conforme testes de desempenho e qualidade.

---

## 5. IDENTIDADE VISUAL

A identidade visual deve transmitir sofisticação natural, acolhimento e tranquilidade.

### Paleta sugerida

- Verde floresta: #1B3027
- Verde sálvia: #637A64
- Madeira: #B58C61
- Areia: #DCC7A5
- Marfim: #F5EFE4

### Tipografia

**Cormorant Garamond:** títulos, frases emocionais e chamadas de destaque.

**Manrope:** textos, menus, formulários, botões e informações de leitura.

### Diretrizes estéticas

- Fotografias reais em grandes dimensões.
- Layout editorial.
- Espaçamento generoso.
- Tipografia sofisticada.
- Hierarquia visual clara.
- Elementos minimalistas.
- Animações discretas fora do hero.
- Botões elegantes e facilmente identificáveis.
- Cores naturais e contrastes acessíveis.

Evitar excesso de efeitos decorativos, cards genéricos, gradientes artificiais, elementos neon e componentes que prejudiquem a identidade natural da hospedagem.

---

## 6. ESTRUTURA DO WEBSITE

### 01 — Hero imersivo

Floresta 3D cinematográfica controlada pelo scroll, terminando na revelação de uma fotografia real.

### 02 — Conheça o Recanto

Apresentação institucional da hospedagem.

Utilizar uma composição editorial com fotografias reais, textos objetivos e transições suaves.

### 03 — Acomodações

Apresentar as opções reais disponíveis.

Cada acomodação poderá conter:

- Fotografias.
- Nome.
- Descrição.
- Capacidade.
- Comodidades confirmadas.
- Botão de consulta.

Caso exista apenas uma unidade de hospedagem, adaptar a seção para apresentar seus ambientes e características.

### 04 — Experiências

Destacar os diferenciais reais do estabelecimento.

A apresentação deverá valorizar natureza, descanso e experiências disponíveis, sem inventar serviços ou comodidades.

### 05 — Galeria cinematográfica

Galeria de fotografias com:

- Imagens grandes.
- Navegação por gestos.
- Visualização fullscreen.
- Transições suaves.
- Composição responsiva.

### 06 — Pré-reservas

Formulário simples para consultar disponibilidade via WhatsApp.

### 07 — Localização

Apresentar localização confirmada, informações de acesso e integração com mapas.

### 08 — Contato e rodapé

Incluir contatos oficiais, redes sociais, navegação complementar e crédito da JP Creative.

---

## 7. SISTEMA DE PRÉ-RESERVAS SEM BANCO DE DADOS

O website deverá permitir que o visitante solicite uma reserva sem necessidade de cadastro.

### Campos

- Data de check-in.
- Data de check-out.
- Quantidade de hóspedes.
- Acomodação, caso aplicável.

### Funcionamento

O visitante preenche as informações e clica em "Consultar disponibilidade".

O sistema monta automaticamente uma mensagem contendo os dados selecionados e abre o WhatsApp oficial da hospedagem.

A equipe do Recanto confirma a disponibilidade, informa os valores e conduz a reserva.

### Limitações

O sistema não deverá afirmar que uma data está disponível sem consultar uma fonte real de disponibilidade.

Não haverá confirmação automática, cobrança on-line ou bloqueio de datas.

A solução deverá ser preparada para futura integração com um sistema de reservas, caso necessário.

---

## 8. ANIMAÇÕES E MICROINTERAÇÕES

Além da sequência cinematográfica, implementar:

- Revelação de textos com máscaras.
- Transições suaves entre seções.
- Parallax discreto em fotografias.
- Zoom cinematográfico em imagens.
- Microinterações em botões.
- Galeria interativa.
- Indicadores de navegação.
- Transições elegantes de menus.
- Feedback visual nos formulários.

Todas as animações devem contribuir para a experiência.

Não utilizar movimento apenas por decoração.

---

## 9. RESPONSIVIDADE

### Desktop

Experiência cinematográfica completa, com enquadramento horizontal, maior profundidade visual e sequência vinculada à rolagem.

### Tablet

Composição adaptada, menor complexidade visual e ajustes específicos de câmera, textos e navegação.

### Mobile

Experiência vertical otimizada.

Priorizar:

- Fluidez.
- Leitura.
- Navegação por toque.
- Botões acessíveis.
- Carregamento rápido.
- Consumo controlado de memória.
- Redução de efeitos pesados.

A versão mobile poderá utilizar uma sequência de frames própria ou um fallback simplificado, conforme o desempenho.

Também deverá existir suporte a `prefers-reduced-motion`.

---

## 10. STACK TÉCNICA

- Next.js 16.
- React 19.
- TypeScript.
- Blender ou Three.js para produção do cenário 3D.
- Remotion para composição cinematográfica.
- FFmpeg para processamento e otimização.
- GSAP ScrollTrigger para animações vinculadas à rolagem.
- Canvas para exibição dos frames.
- Bootstrap Icons.
- Next/Image para imagens comuns.
- CSS responsivo e componentes reutilizáveis.

O ambiente 3D será pré-renderizado, evitando a necessidade de executar toda a geometria tridimensional no navegador.

---

## 11. UTILIZAÇÃO DOS ARQUIVOS REAIS

As fotografias do Recanto dos Quatis já estão disponíveis na pasta `public` do projeto.

Antes de iniciar o desenvolvimento, será necessário:

1. Identificar todos os arquivos existentes.
2. Verificar nomes e extensões reais.
3. Analisar dimensões e proporções.
4. Selecionar as melhores fotografias para cada seção.
5. Identificar a imagem mais adequada para a revelação cinematográfica.
6. Organizar o uso dos materiais sem alterar ou excluir os originais.

Não presumir nomes de arquivos.

Não utilizar fotografias fictícias como se fossem do estabelecimento.

Caso algum material necessário não esteja disponível, utilizar uma solução provisória claramente identificada.

---

## 12. PERFORMANCE E QUALIDADE

O site deverá equilibrar impacto visual e desempenho.

Diretrizes:

- Carregamento progressivo da sequência.
- Exibição de imagem inicial antes do carregamento completo.
- Pré-carregamento controlado dos frames.
- Compressão adequada.
- Gerenciamento de memória.
- Otimização de imagens.
- Evitar downloads desnecessários no mobile.
- Preservar a rolagem nativa.
- Evitar travamentos durante a animação.
- Garantir funcionamento sem suporte adequado a Canvas.
- Respeitar preferências de movimento reduzido.
- Priorizar SEO, acessibilidade e Core Web Vitals.

A experiência visual não poderá impedir o visitante de acessar as informações ou solicitar uma reserva.

---

## 13. ETAPAS DE DESENVOLVIMENTO

### Fase 1 — Análise e direção de arte

Inspecionar fotografias, definir narrativa visual, estrutura, identidade e imagem principal da revelação.

### Fase 2 — Protótipo 3D

Construir uma primeira versão simplificada da floresta, definir a trajetória da câmera e validar a estética.

### Fase 3 — Produção cinematográfica

Refinar geometria, iluminação, vegetação e movimento. Renderizar a sequência aprovada.

### Fase 4 — Pós-produção

Utilizar Remotion e FFmpeg para finalizar, converter e otimizar os materiais.

### Fase 5 — Desenvolvimento do website

Implementar layout, seções, conteúdo e componentes responsivos.

### Fase 6 — Integração do hero

Conectar a sequência ao GSAP ScrollTrigger e aperfeiçoar a transição para as fotografias reais.

### Fase 7 — Sistema de reservas

Implementar o formulário e a integração com WhatsApp.

### Fase 8 — Testes e refinamento

Validar dispositivos, navegadores, desempenho, acessibilidade, animações e experiência de navegação.

---

## 14. IDENTIDADE DA JP CREATIVE

O projeto será apresentado como uma criação da JP Creative.

O rodapé deverá incluir, de maneira discreta e elegante:

**Desenvolvido por JPCreative**

A identidade da agência deverá ser preservada, com sua logo original e link para:

https://jpcreative.com.br

O crédito não deverá competir visualmente com a identidade do Recanto dos Quatis.

---

## 15. OBJETIVO COMERCIAL

O site será inicialmente desenvolvido como uma demonstração para apresentar ao proprietário do Recanto dos Quatis.

A apresentação deverá mostrar como uma presença digital profissional pode:

- Valorizar visualmente a hospedagem.
- Fortalecer sua imagem e credibilidade.
- Destacar seus diferenciais.
- Despertar interesse em potenciais hóspedes.
- Facilitar solicitações de reserva.
- Criar uma experiência de marca memorável.

A proposta poderá seguir o modelo comercial da JP Creative, com desenvolvimento inicial sem custo e manutenção mensal mediante parceria formalizada.

---

## 16. RESULTADO FINAL ESPERADO

O Recanto dos Quatis deverá ter um website que combine a sofisticação de uma experiência cinematográfica com a simplicidade de uma navegação intuitiva.

O hero será o grande diferencial: uma câmera atravessando uma floresta tridimensional até revelar o verdadeiro Recanto dos Quatis.

As demais seções deverão manter a mesma qualidade visual, valorizando as fotografias reais e conduzindo naturalmente o visitante até a solicitação de reserva.

**Princípio central do projeto:**

Não desenvolver apenas um site que mostre uma hospedagem.

Desenvolver uma experiência digital que faça o visitante desejar estar lá.

**RECANTO DOS QUATIS — DA FLORESTA AO REFÚGIO.**

*Uma experiência digital por JP Creative.*
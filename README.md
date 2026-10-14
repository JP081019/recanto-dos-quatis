# Recanto dos Quatis — uma experiência que começa antes da chegada

Website Next.js 16 e React 19, com identidade Unbounded / Pacifico / Manrope, Bootstrap Icons, sobrevoo pré-renderizado e maquete React Three Fiber.

```sh
pnpm install
pnpm dev
pnpm test
pnpm build
pnpm start
```

Prévia: http://localhost:3000. Dados oficiais em `src/content/site.ts`; fotos originais preservadas em `public/images`. Fotografias reais aparecem somente na galeria. A propriedade é uma interpretação ilustrativa da referência aérea `img10.jpg`, sem planta ou escala exatas.

## Produção 3D

```sh
pnpm render:flight --preview
pnpm render:flight
pnpm exec remotion render cinema/Composition.tsx SobrevooRecanto cinema/renders/sobrevoo-recanto.mp4 --browser-executable="C:\Program Files\Google\Chrome\Application\chrome.exe"
```

Os scripts usam Chrome instalado. A prévia produz cinco imagens: início, meio, visão geral e aproximação das duas construções. Valide-as antes de renderizar toda a sequência. O sobrevoo integrado tem 72 WebPs por formato: desktop 1280 × 720 e mobile 540 × 960. A composição Remotion exporta seis segundos a 30 fps.

Geometria, materiais, luz e câmera compartilhados em `src/three/property-scene.mjs`. A cena ao vivo é carregada apenas na etapa de exploração, renderiza por demanda e libera os recursos quando deixa de ser exibida. As câmeras visitam somente os exteriores. Sem WebGL, o usuário mantém acesso aos painéis e ao formulário.

## Configuração comercial

Confirmar WhatsApp, endereço completo, redes sociais, capacidade máxima e correspondência entre as duas opções anunciadas e as construções. As identificações Hospedagem 01 / 02 são provisórias. Configuração de camas e comodidades seguem o briefing fornecido.

O formulário valida datas, hóspedes e hospedagem; não confirma disponibilidade nem reservas. Sem WhatsApp oficial, gera uma consulta copiável. Não há banco de dados, autenticação ou pagamento.

Configure `NEXT_PUBLIC_SITE_URL` com o domínio oficial antes de publicar para preencher o sitemap. Sem domínio confirmado, nenhum endereço fictício é inserido. Robots e dados estruturados básicos de Urubici estão preparados.

## Verificação

```sh
node scripts/verify-property.mjs
node scripts/verify-site.mjs
```

Use com `pnpm start` em execução. Diagnóstico, arquitetura, limites e resultados em `docs/direcao-sobrevoo.md`. Capturas em `docs/qa-v2`. O vídeo demonstrativo fica em `cinema/renders`, que está ignorado no Git. A antiga floresta e seus materiais foram mantidos para referência histórica e não são carregados pela nova página.

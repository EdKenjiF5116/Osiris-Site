# Site institucional do Osíris

Página única sobre a empresa e a solução. Não é o aplicativo: o protótipo funcional
vive em [Os-ris-APP](https://github.com/EdKenjiF5116/Os-ris-APP).

## O que tem aqui

```
index.html     página inteira
styles.css     tokens de cor, tipografia e layout
script.js      demonstração do protocolo de emergência e navegação
assets/        brasão em três tamanhos, com fundo transparente
```

Sem dependências, sem build. Abrir o `index.html` no navegador já funciona.

## Publicar no GitHub Pages

Em **Settings → Pages**, escolher *Deploy from a branch*, branch `main` e pasta `/ (root)`.
O site fica no ar em poucos minutos.

## Identidade visual

| Token | Valor | Uso |
|---|---|---|
| Verde profundo | `#0F6E56` | cor principal |
| Verde de fundo | `#0B5343` | seções escuras |
| Verde claro | `#1D9E75` | destaque e estado validado |
| Menta | `#B8D6CE` | texto secundário sobre verde |
| Creme | `#F5F2E2` | superfícies claras e o painel |
| Tinta | `#14211D` | texto |
| Âmbar | `#EF9F27` | **apenas** contexto de emergência, nunca em marca |

Tipografia: [Spectral](https://fonts.google.com/specimen/Spectral) para títulos,
[Archivo](https://fonts.google.com/specimen/Archivo) para interface e corpo.

O motivo guilhochê usado como textura de fundo vem do próprio brasão, que é um selo
gravado com o pilar Djed ao centro.

## Conteúdo

Os números de mercado e as citações vêm do trabalho de conclusão de curso: IESS (2024),
CNJ (2024), ANS (2026), CNSaúde e FBH (2022) e Lyons et al. (2026). Os nomes e dados
clínicos exibidos na demonstração são fictícios.

## Acessibilidade

Contraste verificado nas duas variações de tema, foco visível no teclado, tabela com
cabeçalhos associados, `prefers-reduced-motion` respeitado e navegação por âncoras com
link de pular para o conteúdo.

# Casca da Central do Assinante do IXC

**[Abrir o gerador](https://parzbyte.github.io/casca-central-ixc/gerador.html)**: coloque o link da sua Central, a logo e a
cor, veja como fica no celular e no computador e baixe a pasta para o site. Funciona direto no navegador, sem instalar
nada.

Um CSS e um script que o app do provedor injeta na Central do Assinante do IXC para ela aparecer com a cara do
provedor e com telas pensadas para o celular. Funciona nas duas Centrais do IXC:

- **Central antiga** (`/central_assinante_web/`): `casca/casca.js`.
- **Central nova** (`/central-assinante/`): `casca/casca-nova.js`.

Cada casca só liga na Central dela. Se a página não for a Central do IXC, ou a estrutura dela não bater, a casca se
desliga sozinha e a Central aparece como é.

Não usa token da API do IXC e não mexe nos dados. A sessão é a do próprio cliente, e as ações (PIX, boleto em PDF,
desbloqueio em confiança, assinatura de contrato, suspensão, troca de senha) continuam sendo os botões da própria
Central. A casca lê o estado da página e repassa os cliques.

## Apoie com um Pix

<img src="apoie/pix-qr.svg" alt="QR Code do Pix para apoiar o projeto" width="200" align="right">

A casca é de graça e vai continuar sendo. Se ela ajudou o seu provedor, **contribua com qualquer valor**: o Pix ajuda
a manter a casca atualizada quando o IXC muda a Central.

- **Chave Pix (CNPJ):** `70.078.072/0001-37`
- **Ou aponte a câmera do banco** para o QR Code ao lado.
- **Pix copia e cola:**

  ```
  00020126360014br.gov.bcb.pix0114700780720001375204000053039865802BR5925DAVID RIBEIRO DE OLIVEIRA6007GOIANIA62070503***6304B24F
  ```

Não é obrigatório: avisar de um defeito ou mandar uma melhoria ajuda tanto quanto.

## Fale com a Parzbyte

Quer ir além da casca? A Parzbyte faz projetos sob medida para provedores que usam o IXC e o Opa Suite: app do provedor
(Android e iPhone), chat no site ligado ao Opa Suite, Central com a cara do provedor, assinatura de contrato,
integrações e automações com o IXC.

O contato está no fim da [página do gerador](https://parzbyte.github.io/casca-central-ixc/gerador.html#contato).

## Como usar (passo a passo)

1. **Copie o link da sua Central.** Abra a Central do Assinante no navegador e copie o endereço da barra. Ele termina em
   `/central_assinante_web/` (Central antiga) ou tem `/central-assinante/` (Central nova).
2. **Abra o [gerador](https://parzbyte.github.io/casca-central-ixc/gerador.html)** e cole o link. Ele mostra na hora qual
   Central é.
3. **Coloque o nome, a logo e a cor do provedor.** As amostras do celular e do computador mudam juntas: confira antes de
   baixar.
4. **Escreva o domínio do site** onde a Central vai ficar (só o domínio, por exemplo `seuprovedor.com.br`) e clique em
   **Gerar e baixar a pasta**.
5. **Suba no site.** No cPanel (ou no painel da hospedagem), abra o Gerenciador de Arquivos, entre em `public_html`,
   envie o .zip e use **Extrair**. Tem que aparecer a pasta `central_assinante_web` (antiga) ou `central` (nova) dentro
   de `public_html`.
6. **Teste.** Abra `https://seuprovedor.com.br/central_assinante_web/` (ou `/central/`) e entre com uma conta de
   cliente. Depois é só divulgar esse endereço.

Para trocar a cor ou a logo, gere de novo e envie a pasta por cima da antiga.

## O que tem

- Entrada com login, primeiro acesso e "Esqueci minha senha" (quando o provedor liga).
- Início com a situação da conexão, a próxima fatura e atalhos.
- Faturas com PIX copia e cola, código de barras e PDF.
- Contratos, consumo, atendimentos, notas fiscais, mensagens e meus dados.
- Na Central nova: Meu Wi-Fi e aparelhos conectados.
- No computador e no tablet, as mesmas telas numa coluna centralizada.
- Dentro do app: barra de abas nativa e "manter conectado" com o login guardado pelo app. Esse login só é apagado
  quando a Central recusa a senha.

## Gerador: a Central com a casca no site do provedor

Abra o [gerador](https://parzbyte.github.io/casca-central-ixc/gerador.html), ou o `gerador.html` direto do disco. Coloque o link da Central, o nome, a logo,
a cor e o domínio do site. O gerador vê pelo link se é a Central antiga (`/central_assinante_web/`) ou a nova
(`/central-assinante/`) e baixa um .zip com a pasta pronta. Tudo acontece no navegador: nada é enviado para servidor
nenhum.

Ao lado do formulário fica uma amostra real, no celular e no computador: a casca de verdade sobre uma Central de exemplo
(`amostra/`), que muda na hora com a cor, a logo e o nome escolhidos. Os dados da amostra são inventados.

A pasta é um "espelho": um `index.php` que repassa a Central do IXC e devolve as páginas com a casca dentro, mais a
adaptação para tela de computador. Suba a pasta na raiz do site (`public_html`, na maioria das hospedagens):

- Central antiga: fica em `https://seusite.com.br/central_assinante_web/`.
- Central nova: fica em `https://seusite.com.br/central/`.

A hospedagem precisa de PHP 8 com cURL e Apache com mod_rewrite (o comum em cPanel e Hostinger). O espelho só fala com
o endereço da Central que foi gerado, não grava senha, cookie nem corpo de pedido em log, e os cookies da Central ficam
presos à pasta dela.

Os modelos do espelho ficam em `espelho/antiga` e `espelho/nova`; a página, em `gerador/`. Depois de mexer em
qualquer um deles, ou na casca, rode `node ferramentas/empacotar.mjs` para montar o `gerador.html` de novo.

## Montar o arquivo para o app

```bash
node ferramentas/empacotar.mjs
```

Gera `dist/casca-app.js` com o CSS embutido, os ícones e as duas cascas (é esse arquivo que o app injeta) e o
`gerador.html`. Para conferir o gerador: `node testes/testa-gerador.mjs`.

## Como o app injeta

1. Antes dos scripts da página (Android: `WebViewCompat.addDocumentStartJavaScript`; iOS: `WKUserScript` com
   `.atDocumentStart`), rode `window.__CASCA_CFG__ = {...}` seguido do conteúdo de `dist/casca-app.js`.
2. Ponha `WAApp/` no user agent, ou `app: true` na configuração, para a casca saber que está dentro de um app.
3. Para receber os avisos da casca, exponha `window.WAAppNativo.postMessage(json)`.

Exemplos prontos em `exemplos/android.kt` e `exemplos/ios.swift`.

### Configuração (`window.__CASCA_CFG__`)

| Chave | O que faz |
|---|---|
| `primaria` | Cor principal do provedor (`#RRGGBB`). Padrão `#2563EB`. |
| `primariaEscura`, `primariaClara` | Tons da cor principal. Sem eles, a casca calcula. |
| `nome` | Nome do provedor. |
| `logo` | Endereço ou `data:` da logo. Sem ela, usa a logo da própria Central. |
| `logoBranca`, `logoEstilo` | Logo toda branca para o topo colorido, ou `logoEstilo: 'branca'` para deixar a logo branca. |
| `app` | `true` dentro do app. |
| `textos` | Troca textos das telas: `{ "chave": "texto" }`. Vazio volta ao texto padrão. |
| `avisoLogin` | `{ titulo, pergunta, texto }`: janela "como entrar" na tela de login. |
| `avisoVisitante` | Texto para quem ainda não é cliente, na tela de login. |
| `esqueciSenha` | `true` mostra "Esqueci minha senha" (só ligue com a recuperação configurada no IXC). |
| `cartao` | `false` esconde o pagamento recorrente no cartão. |
| `semSuporte` | `true` tira o Suporte dos atalhos da Central nova (quando o app já tem atendimento). |
| `escalaLetra` | Tamanho da letra, de 0,85 a 2. |

### Avisos que a casca manda ao app (`acao`)

| `acao` | Quando |
|---|---|
| `casca_pronta` | A tela da casca está desenhada (hora de esconder a abertura do app). |
| `aba_ativa` | A tela mudou para Início ou Faturas (para acender a aba nativa). |
| `ir_aba` | O cliente pediu uma aba que o app tem (por exemplo, atendimento). |
| `menu_central` | A lista de itens do menu, para o "Mais" da barra nativa. |
| `central_sessao` | O token da sessão da Central, para o app usar a mesma sessão, se quiser. |
| `central_cred_pedir` | Pede o login guardado. Responda com `window.__casca.credenciais({ usuario, senha })` (antiga) ou `window.__cascaNova.credenciais(...)` (nova), ou `null`. |
| `central_cred_guardar` | Guardar login e senha (o cliente marcou "manter conectado"). Guarde cifrado. |
| `central_cred_ok` | O login guardado entrou. |
| `central_cred_esquecer` | Apagar o login guardado (a Central recusou a senha ou o cliente saiu). |

O app pode ignorar qualquer um desses avisos: a casca funciona sem eles.

## Simulador

Abre uma Central de verdade num Chrome em formato de celular (390 x 844), com a casca injetada antes de qualquer script
da página, como o app faz. Quem entra com a conta é você, na janela. Ao salvar `casca.css` ou `casca.js`, a página
recarrega com a versão nova.

```bash
node simulador/simulador.mjs --url https://seu.provedor.com.br/central_assinante_web/
```

Opções:

- `--app`: imita o app (user agent, cores e uma ponte falsa que só registra os avisos).
- `--cor #RRGGBB`, `--nome "Provedor"`, `--logo arquivo.png`: a marca do provedor.
- `--sem-casca`: a Central como ela é, para comparar.
- `--mapear`: grava a estrutura de cada tela e uma foto em `simulador/mapa/`.

O endereço também pode ficar em `simulador/config.json` (veja `config.exemplo.json`). O perfil do navegador
(`simulador/perfil/`) guarda a sua sessão e as fotos de `simulador/mapa/` podem ter dados da conta: as duas pastas
ficam fora do git. Nunca publique nada delas.

Precisa de Node 22 ou mais novo e do Chrome ou do Edge instalado.

## Licença

MIT com a condição Commons Clause (arquivo `LICENSE`). Em português:

- **Pode:** usar de graça no app e na Central do seu provedor, mudar o código, copiar e distribuir.
- **Não pode:** vender a casca, nem cobrar de terceiros por um produto ou serviço que seja, no todo ou em boa parte, a
  casca. Isso vale também para cobrar pela instalação ou pelo suporte dela.
- **Contribuir é bem-vindo e não é obrigatório.** Melhorou alguma coisa? Mande um pull request.

Por causa da restrição de venda, esta licença não é "open source" no sentido da OSI: o código é aberto para ler, usar e
melhorar, mas não para revender. Os ícones em `casca/morph.js` (MIT) e `casca/pulso.js` (ISC e MIT) mantêm as licenças
deles.

A casca não tem ligação com a IXC Soft. IXC é marca da dona dela.

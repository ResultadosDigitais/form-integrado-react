# Integração de formulário RDSM via código de monitoramento em aplicações React

## Descrição
Este documento descreve os passos para monitorar os formulários em uma aplicação React via código de monitoramento gerado pelo RDSM.

## Procedimentos

Se você ainda não configurou o código de monitoramento para integração de formulários, acesse o link [Integração de formulários via código de monitoramento](https://ajuda.rdstation.com.br/hc/pt-br/articles/115001254846-Integra%C3%A7%C3%A3o-de-Formul%C3%A1rios)

Esta etapa é necessária para continuar com os procedimentos descritos a seguir.

### Passo 1

Após a [Instalação do código de monitoramento](https://app.rdstation.com.br/configuracoes/analise-e-monitoramento), acesse a opção 2b: `Eu quero fazer a configuração por conta própria.`

Copie e guarde a `tag script`:

```html
<script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/809c4587-2f49-4369-af07-51827d368123-loader.js" ></script>
```

### Passo 2

Neste passo vamos usar apenas parte do código copiado acima.

Com base no nosso exemplo vamos usar apenas o endereço do atributo `src`:
```
https://d335luupugsy2.cloudfront.net/js/loader-scripts/809c4587-2f49-4369-af07-51827d368123-loader.js
```

No componente React onde o formulário está sendo renderizado, insira o seguinte código dentro da função `componentDidMount()` utilizando o endereço copiado:

```js
componentDidMount () {
  const script = document.createElement("script");
  script.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/809c4587-2f49-4369-af07-51827d368123-loader.js";
  script.async = true;
  document.body.appendChild(script);
}
```

O código foi inserido dentro dessa função para nos certificarmos que o mesmo só será executado depois que o componente tenha sido devidamente renderizado e que todos os elementos estão prontos.

### Passo 3

Acesse a página onde o formulário foi inserido. Neste ponto o formulário já deverá ser capturado pelo nosso script.

Lembrando que pra que tudo funcione:
1. O formulário precisa conter as tags `<form></form>`.
2. O formulário precisa de ao menos um campo com o type ou `name="email"`.
3. O botão precisa ter o atributo `type="submit"`.

Preencha o formulário, faça uma conversão e confirme que o Lead foi enviado corretamente para sua Base de Leads no RDSM 🥳

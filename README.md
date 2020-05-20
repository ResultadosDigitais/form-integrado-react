# Formulário Integrado RDSM em aplicações React

## Descrição
Este documento descreve os passos para inserir um formulário integrado gerado pelo RDSM em uma aplicação React.

## Procedimentos

Quando um formulário é criado no [RDSM](https://app.rdstation.com.br/formularios), um código como o abaixo é gerado:

```js
<div role="main" id="my-form-aeiou6de172d1e9c5b6"></div>
<script type="text/javascript" src="https://abcd.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
<script type="text/javascript"> new RDStationForms('my-form-aeiou6de172d1e9c5b6', 'UA-36276574-1').createForm();</script>
```

### Passo 1

Insira a tag script com o arquivo `rdstation-forms.min.js` dentro da tag `body` do seu `index.html` antes do fechamento da tag:

```html
    ...

    <script type="text/javascript" src="https://abcd.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
  </body>
</html>
```

### Passo 2

No componente React que você deseja renderizar o formulário, insira a `div` gerada. Para este exemplo foi usado o arquivo `src/App.js`:

```js
...

render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Formulário integrado RDSM<br />Dentro de um React App</p>

        <div role="main" id="my-form-aeiou6de172d1e9c5b6"></div>
      </header>
    </div>
  );
}
```

### Passo 3

Neste passo vamos usar apenas parte do código gerado pelo RDSM.

Com base no nosso exemplo vamos usar apenas esse trecho do código retirado da tag `script`:
```js
new RDStationForms('my-form-aeiou6de172d1e9c5b6', 'UA-36276574-1').createForm();
```

Mas antes de inserir o código, adicione o objeto `window` antes da chamada `RDStationForms` deixando o código desta forma:
```js
new window.RDStationForms('my-form-aeiou6de172d1e9c5b6', 'UA-36276574-1').createForm();
```

Agora insira o código dentro da função `componentDidMount()`:

```js
...
  componentDidMount() {
    if (window.RDStationForms) {
      new window.RDStationForms('teste-caldas-ea31f26de172d1e9c5b6', 'UA-17276574-1').createForm()
    }
  }
```

O código foi inserido dentro dessa função para nos certificarmos que o mesmo só será executado depois que o componente tenha sido devidamente renderizado e que todos os elementos estão prontos.

Como segundo fator de segurança, o código foi inserido dentro de uma condicional `if` pra garantir que o objeto está disponível para a chamada.

### Passo 4

Acesse a página onde o formulário foi inserido. Neste ponto o formulário deverá ser exibido corretamente.

Preencha o formulário, faça uma conversão e confirme que o Lead foi enviado corretamente para sua Base de Leads no RDSM 🥳

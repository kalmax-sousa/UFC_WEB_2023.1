# Questao04

- Hooks são funções que permitem a utilização de estados e ciclos de vida do React sem a necessidade de criar um componente.
- São uma das bases o React, pois com essas funções prontas, conseguimos manter sua reatividade, modificando esses estados e ciclos de vida
com pouca verbosidade e complexidade no código.


### useState

```jsx
const [loading, setLoading] = useState(false)

...

setLoading(prev => !prev)

...

loading === true
```

- Esse hook auxilia no controle de estados, alterando o valor de variáveis, tornando essas alterações visíveis ao React, ou seja, a cada alteração, ela é renderizada novamente.
    - O primeiro valor `loading` representa a variável que será manipulada e `setLoading` a função responsável por manipulá-la. O valor `false` é passado como valor inicial da variável
    

### useEffect

```jsx
useEffect(() => {
	count % 2 === 0 ? alert('Número par') : alert('Número ímpar')
}, [count]);
```

- Esse hook é responsável pela aplicação de efeitos colaterais durante a renderização dos componentes React. Sua estrutura é formada por uma função callback, que é chamada sempre que o efeito for disparado. O segundo parâmetro é um array de dependências que informa sempre que o efeito tiver que ser disparado, nesse caso, sempre que o valor de `count` mudar, porém, ele também pode ser passado como vazio, informando que o efeito acontecerá apenas durante a inicialização do componente.
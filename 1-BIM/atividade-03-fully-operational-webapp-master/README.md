# AVA#03: Fully Operational Webapp

Prazo: 2019-04-25 Peso: 1.0 pt

_Permission granted to burn the midnight oil._

Classroom link: <https://classroom.github.com/a/5eWTsaJT>

## Regras & Restrições

- HTML, CSS e JS separados e linkados, conforme modelo;
- Deve ter o ESLint habilitado (`npm install` e a extensão _ESLint_ no VSCode);
- Não deve apresentar **errors** do ESLint, desconta `0.2` por tipo de erro;
- Os _warnings_ (sublinhados amarelos) não são descontados;
- Os Casos de Teste não podem ser alterados. Se um erro no teste for encontrado, informe o professor via Slack preferencialmente no canal [_#main_](https://dbo-2019.slack.com/messages/CG25HN533/);

## Especificação

Criar um _webapp_ completa para fazer acrósticos. Para isso, terá um espaço para entrar com as palavras que serão incluídas em um "banco" de palavras. As palavras do banco são mostradas na página. Oferecer uma espaço para entrada da palavra para gerar o acróstico. Clicando no botão _gerar_ o _app_ deve combinar a palavra com as presentes no banco e apresentar o acróstico na tabela no fim do documento.

Exemplo:

Palavras para o banco: computador, cinema, lol, informatica, telefone, naruto, nutella, banana, cyber, punk
Palavra para gerar o acróstico: marcio

```plain
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
|   |   |   |   |   |   |   |   | C | O | M | P | U | T | A | D | O | R |   |   |   |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
|   |   |   |   |   |   |   |   |   | N | A | R | U | T | O |   |   |   |   |   |   |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
|   |   |   |   |   |   | C | Y | B | E | R |   |   |   |   |   |   |   |   |   |   |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
|   | I | N | F | O | R | M | A | T | I | C | A |   |   |   |   |   |   |   |   |   |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
|   |   |   |   |   |   |   |   |   | C | I | N | E | M | A |   |   |   |   |   |   |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
|   |   |   |   |   |   |   |   |   | L | O | L |   |   |   |   |   |   |   |   |   |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
```

### Regras

- O banco não deve ter (aceitar) palavras repetidas;
- As palavras no banco estão sempre em maiúsculas;
- Apenas `a-z`, sem acentos, símbolos, etc;
- O acróstico pode usar qualquer palavra do banco **uma vez** para montagem;
- Se não houver combinação possível, avisar para o usuário;
- O acróstico é sempre gerado com letras maiúsculas;
- O código do HTML não deve ser editado, com exceção do conteúdo da tabela que está faltando e da remoção do _lorem ipsum_ de exemplo.

### Pontuação

- Adição ao banco de palavras funcionando perfeitamente: `0.2`;
- Limpar lista implementado e funcionando perfeitamente: `0.1`;
- Monstar acróstico funcionando perfeitamente: `0.3`;
- Lógica do acróstico baseada em objeto, isto é, propriedades e métodos em um JSON: `0.2`;
- CSS personalizado para **todos** os elementos: `0.2`.

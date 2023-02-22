# Teste-Hibrido

No repositiorio encontramos duas pastas:
- react-app-template-master: onde foi desenvolvido o app de Testimony
- store-theme-master: layout do site, onde foir importado o app

O resultado do desafio pode ser visualizado na url:https://testelucassouza--hibrido.myvtex.com/

Layout feito tentando ao maximo se aproximar da referencia dada algumas adaptações, como a alteração das informações do card de depoimento e adição das setas laterais para navegação.
![image](https://user-images.githubusercontent.com/24292951/220543152-489ded5e-b4ee-42b6-8a97-c8328464e424.png)

No MasterData foi criado uma entidade Lucas Souza Testimony para armazenar as informações dos depoimentos.
![image](https://user-images.githubusercontent.com/24292951/220543666-d15aa92b-0a47-4a7b-8d0d-595916d255a9.png)

A requisição dos depoimentos no MasterData foi realizada via GraphQL utilizando o app vtex.store-graphql juntamente da query abaixo:
```graphql
query getDocuments {
  documents(
    acronym: "LS"
    fields: [
      "clientCity"
      "clientName"
      "clientPhoto"
      "date"
      "testmony"
      "image"
    ]
  ) {
    fields {
      key
      value
    }
  }
}
```


Obs.: Durante o desenvolvimento enfrentei alguns erros ao tentar aplicar o CSS_HANDLES que me impediram de aplica-lo no app. 
Por isso as classes usadas no desenvolvimento não estão sendo geradas pela biblioteca e sim inseridas hardcoded. 
Gostaria de ter conseguido corrigir este ponto mas infelizmente não tive tempo.


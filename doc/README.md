## instancias do AurionCrud.

```bash
O AurionCrud permite a criação de APIs RESTful de forma fácil e rápida.

O AurionCrud suporta as operações CRUD - Create, Read, Update e Delete -
em instancias através de chamadas HTTPS.
```

### Operações.

```bash
A URL consiste em 4 partes a URL da API, a opção {client/instance/entity} , o token que você recebeu na
plataforma e a rota que você quer acessar.

A cada operação realizada pelo o usuario sera adicionado +1 request ao seu campo de requestCaunt,
com 150 requests você atingirar seu limite podendo esperar 12h para poder fazer novas operaçoes.

A cada 12h todas as suas intancias e seus limites serão zerados.

Exemplo de URL: "https://aurioncrud.com/api/v1/{option}/{token}/{rota}"
```

### Criação de Client - GET - URL/client/new/:ip.

Cria um novo client com o ip fornecidos no parametro da solicitação.
O Token do client criado é retornado no corpo da resposta.

Exemplo:

```bash
GET URL/client/new/0.0.0.0

Resposta: status code "201"
{
 token: "db37f4ba-45c2-47cd-a96e-f49ebc167509" 
}
```

### Recuperação de client - GET - URL/client/my/:ip.

Obter as informaçoes de um client com o ip fornecidos no parametro da solicitação.
O Token do client criado é retornado no corpo da resposta.

Exemplo:

```bash
GET URL/client/my/0.0.0.0

Resposta: status code "201"
{
  "clientInfo": {
    "id": "b278f7a0-6c28-48a3-b3b9-5adc81a2cf25",
    "ip": "0.0.0.0",
    "requestCaunt": 0,
    "validade": "0000-00-00T00:00:00.000Z"
  },
  "instanceInfosDate": [
    {
      "instanceName": "",
      "entitys": []
    }
  ]
}
```



### Criação de instancias - GET - URL/instancia/:clientToken/new/:instanceName.

Cria uma nova instancia com os dados fornecidos nos parametro da URL.
O status do recurso criado é retornado no corpo da resposta.

Exemplo:

```bash
GET URL/instancia/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/new/Pessoas

Resposta: status code "201"
```
### Criação de instancias - GET - URL/instancia/:clientToken/shave/:instanceName.

Listar as entidades de uma instancia com os dados fornecidos nos parametro da URL.

Exemplo:

```bash
GET URL/instancia/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/shave/Pessoas

Resposta: status code "201"
{
  {
    "instanceName": "Pessoas",
    "requestCaunt": 0,
    "entitys": []
  }
}
```

### Criação de entidades - POST - URL/entity/:clientToken/new/:instanciaName'

Cria uma nova entidade com os dados fornecidos no corpo da solicitação.
A entidade criada é retornado no corpo da resposta junto ao id(uuid).

Parâmetros
os parametros são definidos pelo usuario contanto que nos envie em um formato
json.


Parâmetros
<obj> (JSON, obrigatório): Objeto JSON entidade a ser criada.

Exemplo:

```bash
POST URL/entity/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/new/Pessoas

Solicitação:
{
  "nome": "João",
  "idade": 25,
  "email": "joao@gmail.com"
}

Resposta: status code "201".
{
  "id": "db37f4ba-45c2-47cd-a96e-f49ebc167509",
  "nome": "João",
  "idade": 25,
  "email": "joao@gmail.com"
}
```

### Recuperação de entidades - GET - URL/:clientToken/find/:instanciaName.

Retorna uma entidade de uma instancia específica.


Parâmetros
<id> (String, obrigatório): identificador único da entidade a ser recuperada.

Exemplo:

```bash
POST URL/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/find/Pessoas

Solicitação:
{
  "id": "db37f4ba-45c2-47cd-a96e-f49ebc167509",
}

Resposta: status code "200".
{
  "id": "db37f4ba-45c2-47cd-a96e-f49ebc167509",
  "nome": "Arthur",
  "idade": 22,
  "email": "arthursantos.s@hotmail.com"
}
```

### Atualização de entidade - PUT - URL/:clientToken/modify/:instanciaName.

Atualiza uma entidade existente com os dados fornecidos no corpo
da solicitação.
O recurso atualizado é retornado no corpo da resposta.

Parâmetros
<id> (string, obrigatório): identificador único da etidade a ser atualizado.
<newEntity> (json, obrigatório): a nova entidade.

Exemplo:

```bash
PUT URL/entity/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/modify/Pessoas

Solicitação:

{
  "id": "db37f4ba-45c2-47cd-a96e-f49ebc167509",
  newEntity: {
    "nome": "Arthur",
    "idade": 22,
    "email": "arthursantos.s@hotmail.com"
    }
}

Resposta: status code "200".

{
  "id": "db37f4ba-45c2-47cd-a96e-f49ebc167509",
  "nome": "Arthur",
  "idade": 22,
  "email": "arthursantos.s@hotmail.com"
}
```

### Exclusão de entidade - DELETE - URL/:clientToken/erase/:instanciaName.

Parâmetros
<id> (String, obrigatório): identificador único da entidade a ser excluído.

Exemplo:

```bash
PUT URL/entity/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/erase/Pessoas

Solicitação:

{
  "id": "db37f4ba-45c2-47cd-a96e-f49ebc167509",
}

Resposta: status code "204".
```

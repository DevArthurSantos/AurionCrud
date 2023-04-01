## instancias do AurionCrud.

```bash
O AurionCrud permite a criação de APIs RESTful de forma fácil e rápida.

O AurionCrud suporta as operações CRUD - Create, Read, Update e Delete -
em instancias através de chamadas HTTPS.
```

### Operações.

```bash
A URL da API possui 4 partes distintas: a propia URL da api, as opçãos de endpoints
["customer", "instance", "fragment"], o token recebido na plataforma e a instancia desejada.

A cada operação realizada pelo o usuario sera adicionado +1 request ao seu total de requests.

com 125 requests você atingirar seu limite porem a cada 12h todas as suas instancias e seus
limites serão zerados.

Ex.: https://aurioncrud.vercel.app/api/v1/{token}/{endpoint}/{instance}
```

### Criação de Customer - GET - URL/Customer/new/:ip.

Parameters
[IP address] > Example : 127.0.0.1

```bash
GET URL/Customer/new/0.0.0.0

Resposta: status code "201"
{
 token: "db37f4ba-45c2-47cd-a96e-f49ebc167509" 
}
```

### Recuperação de Customer - GET - URL/Customer/my/:ip.

Parameters
[Token] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509

```bash
GET URL/Customer/my/0.0.0.0

Resposta: status code "201"
{
  "token": "string",
  "requests": 0,
  "instances": [
    {
      "instanceName": "Pessoas",
      "id": "db37f4ba-45c2-47cd-a96e-f49ebc167509"
    }
  ]
}
```



### Criação de instancias - GET - URL/instancia/:token/new/:instanceName.

Parameters
[Token] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509
[instanceName] > Example : "Pessoas"

Exemplo:

```bash
GET URL/instancia/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/new/Pessoas

Resposta: status code "201"
{
  "id": "string",
  "instance_id": "string",
  "customer_token": "string"
}
```

### Recuperar fragmentos da instancia - GET - URL/instancia/:CustomerToken/scrape/:instanceName.

[Token] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509
[instanceName] > Example : "Pessoas"

Exemplo:

```bash
GET URL/instancia/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/scrape/Pessoas

Resposta: status code "200"
{
  "intanceID": "string",
  "createdAt": "string",
  "data": [
    {
    "FragmentID": "string",
    "data": {}
    },
    {
    "FragmentID": "string",
    "data": {}
    },
  ]
}
```

### Deletar instancia - GET - URL/instancia/:CustomerToken/erase/:instanceName.

[Token] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509
[instanceName] > Example : "Pessoas"

Exemplo:

```bash
GET URL/instancia/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/erase/Pessoas

Resposta: status code "200"
```

### Criação de Fragmentos - POST - URL/fragment/:CustomerToken/new/:instanciaName'

[Token] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509
[instanceName] > Example : "Pessoas"
[Data] > Example : { "Nome": "Arthur", "Idade": 22, "Pais": "Brasil" }

Exemplo:

```bash
POST URL/fragment/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/new/Pessoas

body:
{
  "nome": "João",
  "idade": 25,
  "email": "joao@gmail.com"
}

Resposta: status code "201".
{
  "id": "string"
}
```

### Recuperação de Fragmentos - GET - URL/fragment/:CustomerToken/find/:instanciaName.


[Token] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509
[instanceName] > Example : "Pessoas"
[fragmentID] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509

Exemplo:

```bash
POST URL/fragment/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/find/Pessoas

Solicitação:
{
  "fragmentID": "db37f4ba-45c2-47cd-a96e-f49ebc167509",
}

Resposta: status code "200".
{
  "id": "string",
  "data": {}
}
```

### Atualização de entidade - PUT - URL/fragment/:CustomerToken/modify/:instanciaName.

[Token] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509
[instanceName] > Example : "Pessoas"
[fragmentID] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509

Exemplo:

```bash
PUT URL/fragment/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/modify/Pessoas

Solicitação:

{
  "fragmentID": "db37f4ba-45c2-47cd-a96e-f49ebc167509",
  "data": {
    "nome": "Arthur",
    "idade": 22,
    "email": "arthursantos.s@hotmail.com"
    }
}

Resposta: status code "200".

{
  "id": "string",
  "data": {}
}
```

### Exclusão de entidade - DELETE - URL/:CustomerToken/erase/:instanciaName.

[Token] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509
[instanceName] > Example : "Pessoas"
[fragmentID] > Example : db37f4ba-45c2-47cd-a96e-f49ebc167509

Exemplo:

```bash
PUT URL/fragment/b278f7a0-6c28-48a3-b3b9-5adc81a2cf25/erase/Pessoas

Solicitação:

{
  "id": "db37f4ba-45c2-47cd-a96e-f49ebc167509",
}

Resposta: status code "204".
```

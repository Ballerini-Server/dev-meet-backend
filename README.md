# \<DEV\> meet backend

Esse projeto serve como uma aplicação backend em nível de desenvolvimento para o desafio da tec da semana de mobile (REACT NATIVE); 

Para rodar essa aplicação, você deve:
* Clonar esse projeto; 
* Instalar as dependencias utilizando o comando `npm install` ou `yarn`; 
* Rodar o json-server com o comando `npm run serve` ou `yarn serve`; 

A aplicação serve 2 principais endpoints na porta 3001: `/events` e `/tipo` , o acesso de `/events` vai listar os eventos, e `/tipo` vai listar os tipos de eventos, você tem a liberdade de criar outros tipos ou eventos utilizando os métodos HTTP.
A rota principal ( `/` ) foi criada pelo próprio `json-server` , com o intuito de explicar como utilizar a api.
Outras informações sobre como utilizar o `json-server` você pode conferir [aqui](https://github.com/typicode/json-server#getting-started)

Para a criação dessas informações fakes foi utilizado o [mockoon](https://mockoon.com/) com o seguinte texto

```
{
  "events": [
    {{# repeat (queryParam 'total' '50') }}
      {
        "id": "{{faker 'random.uuid'}}",
        "tipo": {{oneOf (array 1 2 3 4 5 6 7 8)}},
        "dataInicio": "{{date '2022-03-01' '2024-12-31' "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"}}",
        "descricao": "{{lorem 50}}",
        "link": "{{domain}}",
        "organizador": "{{faker 'name.firstName'}} {{faker 'name.lastName'}}",
        "titulo": "{{lorem 4}}"
      },
    {{/ repeat }}
  ]
}
```

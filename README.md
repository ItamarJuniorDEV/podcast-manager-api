# Podcast Manager API

API REST para listar e filtrar episódios de podcasts (podcasts em vídeo), construída com Node.js (módulo nativo `http`) e TypeScript.

![Arquitetura](docs/Arquitetura Básica do Projeto.png.png)

## Funcionalidades

* Listar todos os episódios cadastrados
* Filtrar episódios por nome do podcast via query param `p`
* Respostas em JSON com status HTTP adequado (`200` ou `204`)

## Tecnologias

* **Node.js** - Servidor HTTP (sem framework)
* **TypeScript** - Tipagem estática
* **tsx** - Execução em desenvolvimento
* **fs/path** - Leitura de base local em JSON

## Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/podcast-manager-api
cd podcast-manager-api

# Instale as dependências
npm install

# Configure as variáveis de ambiente (.env)
PORT=3333

# Inicie o servidor
npm run dev
```

A API sobe em:

```text
http://localhost:3333
```

## Endpoints

| Recurso   | Método | Endpoint                        | Descrição                          |
| --------- | ------ | ------------------------------- | ---------------------------------- |
| Episódios | `GET`  | `/api/list`                     | Lista todos os episódios           |
| Episódios | `GET`  | `/api/podcasts?p=<podcastName>` | Filtra episódios por `podcastName` |

### Exemplos de uso

Listar tudo:

```bash
curl -i http://localhost:3333/api/list
```

Filtrar por podcast:

```bash
curl -i "http://localhost:3333/api/podcasts?p=flow"
```

## Padrão de resposta

* Header: `Content-Type: application/json`
* Body: array de episódios (`PodcastModel[]`)
* Status:

  * `200` quando existe pelo menos 1 item
  * `204` quando não existe item (lista vazia)

## Modelos de Dados

### Podcast

* `podcastName` (string)
* `episode` (string)
* `videoId` (string)
* `categories` (string[])

Observação: o arquivo `podcasts.json` está com `videoId` e `videoID` misturado. O ideal é padronizar para um único campo.

## Arquitetura

Fluxo:

1. Cliente faz request
2. `server.ts` cria o servidor e aponta para `app.ts`
3. `app.ts` roteia por método e path
4. Controller chama o service
5. Service chama o repository
6. Repository lê `podcasts.json` e retorna os dados
7. Controller responde JSON

## Estrutura do projeto

```text
src/
  server.ts
  app.ts
  controllers/
    podcasts-controller.ts
  services/
    list-episodes-service.ts
    filter-episodes-service.ts
  repositories/
    podcasts-repository.ts
    podcasts.json
  models/
    podcast-model.ts
    Podcast-Transfer-Model.ts
  utils/
    content-type.ts
    http-methods.ts
    status-code.ts
```

## Testes

Este projeto ainda não possui testes automatizados.

## Licença

Este projeto está sob a licença MIT.

## Autor

Itamar Junior

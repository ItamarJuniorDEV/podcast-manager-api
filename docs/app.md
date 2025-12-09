# Podcast Manager

### Descrição

Um app ao estilo netflix , aonde possa centralizar diferentes episódios podcasts separados por categorias

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios podcasts em sessões de categorias
  - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:

- Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

GET: retorna lista de episódios

response:

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoID: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https:https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "esporte", "bodybuilder"],
  },
  {
    podcastName: "flow",
    episode: "RUBENS CARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"],
  },
];
```

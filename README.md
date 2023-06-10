# Tiktok Video Downloader Scrapper
Colete dados de um downloader de vídeo TikTok e obtenha informações diretas e links de URL do seu vídeo TikTok

## Instalar os módulos.
```
npm install tiktok-video-downloader
npm i needle
mpm i cheerio
```

## Changelog
> ### v1.0.4
- Corrige return indefinido.
- Thumbnail ainda `undefined`, vou consertar o mais rápido possível.

## Usado
```
const ttdl =  require("tiktok-video-downloader");
const link = "https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531"

ttdl.getInfo(link)
  .then((result) => {
    console.log(result);
  })
```

### Obrigado por usar meu módulo, espero que me perdoe se mostrar um erro, porque sou novato nisso :>

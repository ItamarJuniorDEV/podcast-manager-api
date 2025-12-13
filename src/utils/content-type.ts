export enum ContentType {
  // Text
  PLAIN = "text/plain",
  HTML = "text/html",
  CSS = "text/css",
  CSV = "text/csv",
  XML_TEXT = "text/xml",
  JAVASCRIPT = "text/javascript",

  // Application
  JSON = "application/json",
  XML = "application/xml",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",
  OCTET_STREAM = "application/octet-stream",
  PDF = "application/pdf",
  ZIP = "application/zip",
  GZIP = "application/gzip",
  NDJSON = "application/x-ndjson",

  // Images
  PNG = "image/png",
  JPEG = "image/jpeg",
  GIF = "image/gif",
  WEBP = "image/webp",
  SVG = "image/svg+xml",
  ICO = "image/x-icon",

  // Audio
  MP3 = "audio/mpeg",
  WAV = "audio/wav",
  OGG_AUDIO = "audio/ogg",
  WEBM_AUDIO = "audio/webm",

  // Video
  MP4 = "video/mp4",
  MPEG = "video/mpeg",
  OGG_VIDEO = "video/ogg",
  WEBM_VIDEO = "video/webm",

  // Fonts
  WOFF = "font/woff",
  WOFF2 = "font/woff2",
  TTF = "font/ttf",
  OTF = "font/otf",

  // Misc
  EVENT_STREAM = "text/event-stream",
}

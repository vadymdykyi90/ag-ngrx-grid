export interface Video {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: VideoSnippet;
}

export interface VideoId {
  kind: string;
  videoId: string;
}

export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail
  };
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

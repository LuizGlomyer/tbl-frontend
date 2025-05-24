const mediaTypeMap = {
  platforms: 'Platform',
  games: 'Game',
};

export type MediaTypeKey = keyof typeof mediaTypeMap;

export const mapMediaType = (type: string) => {
  return mediaTypeMap[type as MediaTypeKey];
};

export interface APIRequest<T> {
  requestId: string;
  traceId: string;
  requestTimestamp: string;
  responseTimestamp: string;
  statusCode: number;
  payload: T[];
}

export interface MediaEntity {
  id: number;
  type: string;
  name: string;
  acronym: string;
  description: string;
  imageCoverUrl: string;
  imageUrls: string[];
  created_at: string;
  updated_at: string | null;
}

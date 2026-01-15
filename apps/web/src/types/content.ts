export interface Content {
  id: string;
  title: string;
  body?: string;
  premium: boolean;
  priceId?: string;
  creatorId: string;
  x?: number;
  y?: number;
}

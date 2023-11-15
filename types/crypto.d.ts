type CryptoData = {
  Name: string | null;
  Symbol: string | null;
  Date: Date | string | null;
  High: number | null;
  Low: number | null;
  Open: number | null;
  Close: number | null;
  Volume: string | null;
  Marketcap: number | null;
  Id: bigint;
};

type ProcessedData = {
  Name: string;
  Symbol: string | null;
  Price: string;
  Difference24h: string;
  Difference7Days: string;
  DifferenceOneMonth: string;
  Volume24h: string;
  MarketCap: string;
  No?: number;
  Pic?: string;
};

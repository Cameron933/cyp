const sortDataByMarketCap = (data: ProcessedData[]) => {
  return [...data].sort((a, b) => {
    const marketCapA = parseFloat(a.MarketCap.replace(/[$,]/g, ""));
    const marketCapB = parseFloat(b.MarketCap.replace(/[$,]/g, ""));
    return marketCapB - marketCapA;
  });
};

export default sortDataByMarketCap;

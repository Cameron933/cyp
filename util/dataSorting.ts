const sortDataByMarketCap = (data: ProcessedData[]) => {
  return [...data]
    .sort((a, b) => {
      const marketCapA = parseFloat(a.MarketCap.replace(/[$,]/g, ""));
      const marketCapB = parseFloat(b.MarketCap.replace(/[$,]/g, ""));
      return marketCapB - marketCapA;
    })
    .map((item, index) => ({ ...item, No: index + 1 }));
};

export default sortDataByMarketCap;

import { format, isValid } from "date-fns";

const dataProcessing = (data: CryptoData[]) => {
  const formattedData = data.map((item) => {
    const date = item.Date;
    if (date && isValid(date as Date)) {
      const formattedDate = format(date as Date, "yyyy-MM-dd");
      return { ...item, Date: formattedDate };
    }
    return item;
  });

  const groupedData = formattedData.reduce<{ [key: string]: CryptoData[] }>(
    (groups, item) => {
      const key = item.Name || "Unknown";
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
      return groups;
    },
    {}
  );

  const ProcessedData = [];
  // console.log(formattedData);
  for (const groupName in groupedData) {
    if (Object.hasOwnProperty.call(groupedData, groupName)) {
      const group = groupedData[groupName];
      const july6Data = group.find((item) => item.Date === "2021-07-06");
      const july5Data = group.find((item) => item.Date === "2021-07-05");
      const june29Data = group.find((item) => item.Date === "2021-06-29");
      const june6Data = group.find((item) => item.Date === "2021-06-06");

      if (july6Data && july5Data && june29Data && june6Data) {
        // 24h change difference
        const highJuly6 = july6Data.High !== null ? july6Data.High : 0;
        const lowJuly6 = july6Data.Low !== null ? july6Data.Low : 0;
        const averagePriceJuly6 = (highJuly6 + lowJuly6) / 2;

        const highJuly5 = july5Data.High !== null ? july5Data.High : 0;
        const lowJuly5 = july5Data.Low !== null ? july5Data.Low : 0;
        const averageJuly5 = (highJuly5 + lowJuly5) / 2;

        const priceDifference24h = (
          ((averagePriceJuly6 - averageJuly5) / averagePriceJuly6) *
          100
        ).toFixed(1);

        // // 7d change difference
        const highJune29 = june29Data.High !== null ? june29Data.High : 0;
        const lowJune29 = june29Data.Low !== null ? june29Data.Low : 0;
        const averagePriceJune29 = (highJune29 + lowJune29) / 2;

        const priceDifference7Days = (
          ((averagePriceJuly6 - averagePriceJune29) / averagePriceJuly6) *
          100
        ).toFixed(1);

        // 1 month change difference
        const highJune6 = june6Data.High !== null ? june6Data.High : 0;
        const lowJune6 = june6Data.Low !== null ? june6Data.Low : 0;
        const averagePriceJune6 = (highJune6 + lowJune6) / 2;
        const priceDifferenceOneMonth = (
          ((averagePriceJuly6 - averagePriceJune6) / averagePriceJuly6) *
          100
        ).toFixed(1);

        // 24h volume
        const july6Volume =
          july6Data.Volume !== null ? Number(july6Data.Volume) : 0;
        const july5Volume =
          july5Data.Volume !== null ? Number(july5Data.Volume) : 0;
        const volumeDifference24h = (july6Volume - july5Volume).toFixed(0);

        // market cap
        const TheMarketCap = (
          july6Data.Marketcap !== null ? Number(july6Data.Marketcap) : 0
        ).toFixed(0);

        ProcessedData.push({
          Name: groupName,
          Symbol: july6Data.Symbol,
          Price: `$${averagePriceJuly6.toFixed(2)}`,
          Difference24h: `${priceDifference24h}%`,
          Difference7Days: `${priceDifference7Days}%`,
          DifferenceOneMonth: `${priceDifferenceOneMonth}%`,
          Volume24h: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          })
            .format(Number(volumeDifference24h))
            .replace(/(\.|,)00$/g, ""),
          MarketCap: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          })
            .format(Number(TheMarketCap))
            .replace(/(\.|,)00$/g, ""),
        });
      }
    }
  }

  return ProcessedData;
};

export default dataProcessing;

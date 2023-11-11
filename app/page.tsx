import prisma from "@/prisma/client";
import getConfig from "next/config";
import { differenceInDays, format, isValid, parseISO } from "date-fns";
import { crypto_data } from "@prisma/client";

const { publicRuntimeConfig } = getConfig();

async function getCrypto() {
  const res = await fetch(
    `${publicRuntimeConfig.apiBaseUrl}/api/getCryptoData`
  );
  if (!res) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data: CryptoData[] = await prisma.crypto_data.findMany();

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
  // console.log(formattedData);
  for (const groupName in groupedData) {
    if (Object.hasOwnProperty.call(groupedData, groupName)) {
      const group = groupedData[groupName];
      const july21Data = group.find((item) => item.Date === "2020-07-21");
      const july20Data = group.find((item) => item.Date === "2020-07-20");

      if (july21Data && july20Data) {
        const high21 = july21Data.High !== null ? july21Data.High : 0;
        const high20 = july20Data.High !== null ? july20Data.High : 0;
        const highDifference = high21 - high20;
        console.log(`For ${groupName}, High Difference: ${highDifference}`);
      }
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>currency</h1>
        <ul>
          {data.map((cur: any) => (
            <li key={cur.id}>{cur.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

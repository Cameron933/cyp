import prisma from "@/prisma/client";
import Table from "@/components/Table";
import dataProcessing from "@/util/dataProcessing";
import sortDataByMarketCap from "@/util/dataSorting";

export default async function Home() {
  const data: CryptoData[] = await prisma.crypto_data.findMany();
  const processedData = dataProcessing(data);
  const sortedData = sortDataByMarketCap(processedData);

  console.log(sortedData);

  return (
    <main className="flex flex-col items-center justify-start">
      <Table />
    </main>
  );
}

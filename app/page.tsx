import prisma from "@/prisma/client";
import getConfig from "next/config";
import { compareAsc } from "date-fns";

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
  const data = await prisma.crypto_data.findMany();
  console.log(data);



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

import prisma from "@/prisma/client";

export async function getCryptoData() {
  try {
    const data = await prisma.crypto_data.findMany();
    return Response.json(data);
  } catch (error) {
    console.log(error);
  }
}

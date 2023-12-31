-- CreateTable
CREATE TABLE "crypto_data" (
    "Name" TEXT,
    "Symbol" TEXT,
    "Date" TIMESTAMPTZ(6),
    "High" DOUBLE PRECISION,
    "Low" DOUBLE PRECISION,
    "Open" DOUBLE PRECISION,
    "Close" DOUBLE PRECISION,
    "Volume" TEXT,
    "Marketcap" DOUBLE PRECISION,
    "Id" BIGSERIAL NOT NULL,

    CONSTRAINT "crypto_data_pkey" PRIMARY KEY ("Id")
);


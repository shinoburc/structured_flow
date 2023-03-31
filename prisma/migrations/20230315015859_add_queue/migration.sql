-- CreateTable
CREATE TABLE "Queue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "QueueTransaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "queueId" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "enable" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "QueueTransaction_queueId_fkey" FOREIGN KEY ("queueId") REFERENCES "Queue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Queue_name_key" ON "Queue"("name");

-- CreateIndex
CREATE UNIQUE INDEX "QueueTransaction_name_key" ON "QueueTransaction"("name");

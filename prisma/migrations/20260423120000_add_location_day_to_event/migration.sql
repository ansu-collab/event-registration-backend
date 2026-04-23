-- AlterTable
ALTER TABLE "Event" ADD COLUMN "location" TEXT,
                    ADD COLUMN "day" INTEGER;

-- DropIndex
DROP INDEX "Event_name_villageId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Event_name_villageId_day_key" ON "Event"("name", "villageId", "day");

-- CreateIndex
CREATE INDEX "Event_day_idx" ON "Event"("day");

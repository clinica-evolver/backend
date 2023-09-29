/*
  Warnings:

  - You are about to drop the column `addrees` on the `Admin` table. All the data in the column will be lost.
  - Added the required column `address` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "addrees",
ADD COLUMN     "address" TEXT NOT NULL;

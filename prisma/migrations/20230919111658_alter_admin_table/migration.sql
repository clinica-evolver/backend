/*
  Warnings:

  - Added the required column `gender` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "gender" "Gender" NOT NULL;

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "gender" "Gender" NOT NULL;

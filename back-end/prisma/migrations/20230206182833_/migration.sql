/*
  Warnings:

  - Added the required column `district` to the `Place` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Place" ADD COLUMN     "district" TEXT NOT NULL;

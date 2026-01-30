/*
  Warnings:

  - Added the required column `boardAffiliation` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "School" ADD COLUMN     "boardAffiliation" TEXT NOT NULL;

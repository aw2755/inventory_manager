-- DropForeignKey
ALTER TABLE "Purchases" DROP CONSTRAINT "Purchases_purchaseId_fkey";

-- AddForeignKey
ALTER TABLE "Purchases" ADD CONSTRAINT "Purchases_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

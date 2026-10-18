import { inventory } from "@/data/inventory";
import { InventoryTable } from "@/components/inventory-table";

export default function Home() {
    return (
        <main className="container mx-auto space-y-6 py-10 px-4">
            <div>
                <h1 className="text-3xl font-bold">Meat Store Inventory</h1>

                <p className="text-muted-foreground mt-2">
                    Manage your meat products, stock, and expiry dates.
                </p>
            </div>

            <InventoryTable data={inventory} />
        </main>
    );
}

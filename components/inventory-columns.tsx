import type { ColumnDef } from "@tanstack/react-table";
import type { InventoryItem } from "@/data/inventory";

export const columns: ColumnDef<InventoryItem>[] = [
    {
        accessorKey: "id",
        header: "Item ID",
    },
    {
        accessorKey: "name",
        header: "Product",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "quantity",
        header: "Stock",
        cell: ({ row }) => {
            const quantity = row.original.quantity;
            const unit = row.original.unit;

            return `${quantity} ${unit}`;
        },
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
            const price = row.original.price;

            return `₱${price.toFixed(2)}`;
        },
    },
    {
        accessorKey: "expiryDate",
        header: "Expiry Date",
    },
];

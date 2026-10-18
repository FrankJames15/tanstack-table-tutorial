
export type InventoryItem = {
  id: string
  name: string
  category: "Pork" | "Beef" | "Chicken" | "Processed"
  quantity: number
  unit: "kg" | "piece" | "pack"
  price: number
  expiryDate: string
}

export const inventory: InventoryItem[] = [
  {
    id: "INV-001",
    name: "Pork Belly",
    category: "Pork",
    quantity: 25.5,
    unit: "kg",
    price: 380,
    expiryDate: "2026-10-25",
  },
  {
    id: "INV-002",
    name: "Chicken Breast",
    category: "Chicken",
    quantity: 12,
    unit: "kg",
    price: 220,
    expiryDate: "2026-10-22",
  },
  {
    id: "INV-003",
    name: "Hotdog",
    category: "Processed",
    quantity: 20,
    unit: "pack",
    price: 150,
    expiryDate: "2026-11-15",
  },
  {
    id: "INV-004",
    name: "Beef Tapa",
    category: "Processed",
    quantity: 15,
    unit: "piece",
    price: 45,
    expiryDate: "2026-10-20",
  },
]

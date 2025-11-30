/**
 * 🛍️ DASHBOARD EXAMPLE DATA - PRODUCTS (NIKE PREMIUM SNEAKER COLLECTION!)
 * Ultra-hochwertige Nike Sneakers für Product Picker & Chat Demo
 * NUR KRASSE PROFESSIONAL PRODUCT PHOTOS! 🔥
 */

export interface ProductVariant {
  id: string;
  sku: string;
  image: string;
  price: string;
  title: string;
  compareAtPrice?: string | null;
  selectedOptions: Array<{ name: string; value: string }>;
  availableForSale: boolean;
  inventoryQuantity: number;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  primary_image_url: string;
  inventory_quantity: number;
  sku: string;
  description: string;
  product_url: string;
  variant_data: ProductVariant[];
}

/**
 * ═══════════════════════════════════════════════════════════════════
 * NIKE PREMIUM SNEAKER COLLECTION - NUR KRASSE SCHUHE! 🔥
 * Fokus: Professional Product Photography wie der rote Pegasus!
 * ═══════════════════════════════════════════════════════════════════
 */
export const nikeProducts: Product[] = [
  {
    id: "prod_nike_001",
    title: "Nike Air Zoom Pegasus 40",
    price: "139.99",
    primary_image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 47,
    sku: "NIKE-ZOOM-PEG40",
    description: "Premium Laufschuh mit ReactX-Dämpfung. Atmungsaktiv, leicht, ultra-responsive für Training & Wettkampf.",
    product_url: "https://shop.example.com/products/nike-air-zoom-pegasus-40",
    variant_data: [
      {
        id: "var_001_41",
        sku: "NIKE-ZOOM-PEG40-41",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
        price: "139.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 12
      },
      {
        id: "var_001_42",
        sku: "NIKE-ZOOM-PEG40-42",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
        price: "139.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 18
      },
      {
        id: "var_001_43",
        sku: "NIKE-ZOOM-PEG40-43",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
        price: "139.99",
        title: "Größe EU 43",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 43" }],
        availableForSale: true,
        inventoryQuantity: 17
      }
    ]
  },
  {
    id: "prod_nike_002",
    title: "Nike Air Force 1 '07 - Triple White",
    price: "129.99",
    primary_image_url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 76,
    sku: "NIKE-AF1-WHT",
    description: "Der ultimative Streetwear-Klassiker. Premium-Leder, zeitloses All-White Design, legendärer Komfort.",
    product_url: "https://shop.example.com/products/nike-air-force-1-white",
    variant_data: [
      {
        id: "var_002_40",
        sku: "NIKE-AF1-WHT-40",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&q=90",
        price: "129.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 18
      },
      {
        id: "var_002_41",
        sku: "NIKE-AF1-WHT-41",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&q=90",
        price: "129.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 26
      },
      {
        id: "var_002_42",
        sku: "NIKE-AF1-WHT-42",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&q=90",
        price: "129.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 32
      }
    ]
  },
  {
    id: "prod_nike_003",
    title: "Nike Dunk Low - Panda",
    price: "119.99",
    primary_image_url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 89,
    sku: "NIKE-DUNK-PANDA",
    description: "Kultiger Retro-Sneaker im ikonischen Panda Colorway. Premium-Leder, zeitloses Black & White Design.",
    product_url: "https://shop.example.com/products/nike-dunk-low-panda",
    variant_data: [
      {
        id: "var_003_40",
        sku: "NIKE-DUNK-PANDA-40",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&q=90",
        price: "119.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 22
      },
      {
        id: "var_003_41",
        sku: "NIKE-DUNK-PANDA-41",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&q=90",
        price: "119.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 34
      },
      {
        id: "var_003_42",
        sku: "NIKE-DUNK-PANDA-42",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&q=90",
        price: "119.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 33
      }
    ]
  },
  {
    id: "prod_nike_004",
    title: "Nike Air Max 90 - White/Black",
    price: "149.99",
    primary_image_url: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 64,
    sku: "NIKE-AM90-WB",
    description: "Legendärer 90s Sneaker mit sichtbarer Air-Unit. Klassisches Design, maximaler Komfort, zeitloser Style.",
    product_url: "https://shop.example.com/products/nike-air-max-90",
    variant_data: [
      {
        id: "var_004_40",
        sku: "NIKE-AM90-WB-40",
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop&q=90",
        price: "149.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 16
      },
      {
        id: "var_004_41",
        sku: "NIKE-AM90-WB-41",
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop&q=90",
        price: "149.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 24
      },
      {
        id: "var_004_42",
        sku: "NIKE-AM90-WB-42",
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=600&fit=crop&q=90",
        price: "149.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 24
      }
    ]
  },
  {
    id: "prod_nike_005",
    title: "Nike Jordan 1 Retro High",
    price: "179.99",
    primary_image_url: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 38,
    sku: "NIKE-J1-RETRO",
    description: "Ikonischer Basketball-Sneaker. Premium-Leder, klassisches High-Top Design, ultimativer Sneakerhead-Status.",
    product_url: "https://shop.example.com/products/nike-jordan-1-retro",
    variant_data: [
      {
        id: "var_005_40",
        sku: "NIKE-J1-RETRO-40",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&q=90",
        price: "179.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 9
      },
      {
        id: "var_005_41",
        sku: "NIKE-J1-RETRO-41",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&q=90",
        price: "179.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 14
      },
      {
        id: "var_005_42",
        sku: "NIKE-J1-RETRO-42",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop&q=90",
        price: "179.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 15
      }
    ]
  },
  {
    id: "prod_nike_006",
    title: "Nike Air Max 97 - Silver Bullet",
    price: "189.99",
    primary_image_url: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 42,
    sku: "NIKE-AM97-SILVER",
    description: "Futuristischer Sneaker mit Vollgas-Air-Dämpfung. Metallic Silver, ikonische Wellen-Linien, 90s Vibes.",
    product_url: "https://shop.example.com/products/nike-air-max-97",
    variant_data: [
      {
        id: "var_006_40",
        sku: "NIKE-AM97-SILVER-40",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop&q=90",
        price: "189.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 11
      },
      {
        id: "var_006_41",
        sku: "NIKE-AM97-SILVER-41",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop&q=90",
        price: "189.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 16
      },
      {
        id: "var_006_42",
        sku: "NIKE-AM97-SILVER-42",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop&q=90",
        price: "189.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 15
      }
    ]
  },
  {
    id: "prod_nike_007",
    title: "Nike Blazer Mid '77 Vintage",
    price: "119.99",
    primary_image_url: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 58,
    sku: "NIKE-BLAZER-MID77",
    description: "Retro Basketball-Sneaker im Vintage-Look. Premium Wildleder, klassisches Design, moderne Passform.",
    product_url: "https://shop.example.com/products/nike-blazer-mid-77",
    variant_data: [
      {
        id: "var_007_40",
        sku: "NIKE-BLAZER-MID77-40",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop&q=90",
        price: "119.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 14
      },
      {
        id: "var_007_41",
        sku: "NIKE-BLAZER-MID77-41",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop&q=90",
        price: "119.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 22
      },
      {
        id: "var_007_42",
        sku: "NIKE-BLAZER-MID77-42",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop&q=90",
        price: "119.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 22
      }
    ]
  },
  {
    id: "prod_nike_008",
    title: "Nike Air Max 270 - React",
    price: "159.99",
    primary_image_url: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 52,
    sku: "NIKE-AM270-REACT",
    description: "Maximale Dämpfung meets modernes Design. Hybrid aus Air Max 270 & React, unglaublicher Komfort.",
    product_url: "https://shop.example.com/products/nike-air-max-270-react",
    variant_data: [
      {
        id: "var_008_40",
        sku: "NIKE-AM270-REACT-40",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&h=600&fit=crop&q=90",
        price: "159.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 13
      },
      {
        id: "var_008_41",
        sku: "NIKE-AM270-REACT-41",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&h=600&fit=crop&q=90",
        price: "159.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 21
      },
      {
        id: "var_008_42",
        sku: "NIKE-AM270-REACT-42",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&h=600&fit=crop&q=90",
        price: "159.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 18
      }
    ]
  },
  {
    id: "prod_nike_009",
    title: "Nike Court Vision Low - Triple White",
    price: "74.99",
    primary_image_url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 94,
    sku: "NIKE-CV-LOW-WHT",
    description: "Retro Basketball-Look inspired by 80s Klassikern. Premium-Leder, cleaner All-White Look, Alltagstauglich.",
    product_url: "https://shop.example.com/products/nike-court-vision-low",
    variant_data: [
      {
        id: "var_009_40",
        sku: "NIKE-CV-LOW-WHT-40",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop&q=90",
        price: "74.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 24
      },
      {
        id: "var_009_41",
        sku: "NIKE-CV-LOW-WHT-41",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop&q=90",
        price: "74.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 38
      },
      {
        id: "var_009_42",
        sku: "NIKE-CV-LOW-WHT-42",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop&q=90",
        price: "74.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 32
      }
    ]
  },
  {
    id: "prod_nike_010",
    title: "Nike React Infinity Run 3",
    price: "169.99",
    primary_image_url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 45,
    sku: "NIKE-REACT-INF3",
    description: "Maximale Dämpfung für Langstrecken. ReactX-Foam, Flyknit-Upper, designed to reduce running injuries.",
    product_url: "https://shop.example.com/products/nike-react-infinity-run-3",
    variant_data: [
      {
        id: "var_010_40",
        sku: "NIKE-REACT-INF3-40",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop&q=90",
        price: "169.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 11
      },
      {
        id: "var_010_41",
        sku: "NIKE-REACT-INF3-41",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop&q=90",
        price: "169.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 17
      },
      {
        id: "var_010_42",
        sku: "NIKE-REACT-INF3-42",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop&q=90",
        price: "169.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 17
      }
    ]
  },
  {
    id: "prod_nike_011",
    title: "Nike SB Dunk Low - Classic Skate",
    price: "109.99",
    primary_image_url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 67,
    sku: "NIKE-SB-DUNK-LOW",
    description: "Kultiger Skate-Sneaker mit verstärkter Dämpfung. Grip-Sohle, durables Leder, authentischer Skate-Style.",
    product_url: "https://shop.example.com/products/nike-sb-dunk-low",
    variant_data: [
      {
        id: "var_011_40",
        sku: "NIKE-SB-DUNK-LOW-40",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop&q=90",
        price: "109.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 18
      },
      {
        id: "var_011_41",
        sku: "NIKE-SB-DUNK-LOW-41",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop&q=90",
        price: "109.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 26
      },
      {
        id: "var_011_42",
        sku: "NIKE-SB-DUNK-LOW-42",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop&q=90",
        price: "109.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 23
      }
    ]
  },
  {
    id: "prod_nike_012",
    title: "Nike VaporMax Plus",
    price: "219.99",
    primary_image_url: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 34,
    sku: "NIKE-VMAX-PLUS",
    description: "Futuristischer Performance-Sneaker mit Full-Length Air. Maximale Dämpfung, aggressives Design, Premium-Status.",
    product_url: "https://shop.example.com/products/nike-vapormax-plus",
    variant_data: [
      {
        id: "var_012_40",
        sku: "NIKE-VMAX-PLUS-40",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&q=90",
        price: "219.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 8
      },
      {
        id: "var_012_41",
        sku: "NIKE-VMAX-PLUS-41",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&q=90",
        price: "219.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 14
      },
      {
        id: "var_012_42",
        sku: "NIKE-VMAX-PLUS-42",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&q=90",
        price: "219.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 12
      }
    ]
  },
  {
    id: "prod_nike_013",
    title: "Nike Air Presto - Black/White",
    price: "139.99",
    primary_image_url: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 71,
    sku: "NIKE-PRESTO-BW",
    description: "Der 'T-Shirt für die Füße'. Ultra-flexibles Mesh, Sock-like Fit, perfekt für Lifestyle & Light Running.",
    product_url: "https://shop.example.com/products/nike-air-presto",
    variant_data: [
      {
        id: "var_013_s",
        sku: "NIKE-PRESTO-BW-S",
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop&q=90",
        price: "139.99",
        title: "Größe S (38-40)",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "S" }],
        availableForSale: true,
        inventoryQuantity: 18
      },
      {
        id: "var_013_m",
        sku: "NIKE-PRESTO-BW-M",
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop&q=90",
        price: "139.99",
        title: "Größe M (41-42)",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "M" }],
        availableForSale: true,
        inventoryQuantity: 28
      },
      {
        id: "var_013_l",
        sku: "NIKE-PRESTO-BW-L",
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop&q=90",
        price: "139.99",
        title: "Größe L (43-44)",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "L" }],
        availableForSale: true,
        inventoryQuantity: 25
      }
    ]
  },
  {
    id: "prod_nike_014",
    title: "Nike Huarache Run - Triple Black",
    price: "129.99",
    primary_image_url: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 56,
    sku: "NIKE-HUARACHE-BLK",
    description: "Ikonischer 90s Runner mit Neoprene Bootie. Sock-like Fit, aggressive Silhouette, Streetwear-Legende.",
    product_url: "https://shop.example.com/products/nike-huarache-triple-black",
    variant_data: [
      {
        id: "var_014_40",
        sku: "NIKE-HUARACHE-BLK-40",
        image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&h=600&fit=crop&q=90",
        price: "129.99",
        title: "Größe EU 40",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 40" }],
        availableForSale: true,
        inventoryQuantity: 14
      },
      {
        id: "var_014_41",
        sku: "NIKE-HUARACHE-BLK-41",
        image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&h=600&fit=crop&q=90",
        price: "129.99",
        title: "Größe EU 41",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 41" }],
        availableForSale: true,
        inventoryQuantity: 22
      },
      {
        id: "var_014_42",
        sku: "NIKE-HUARACHE-BLK-42",
        image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&h=600&fit=crop&q=90",
        price: "129.99",
        title: "Größe EU 42",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "EU 42" }],
        availableForSale: true,
        inventoryQuantity: 20
      }
    ]
  },
  {
    id: "prod_nike_jogger",
    title: "Nike Tech Fleece Joggers - Black",
    price: "89.99",
    primary_image_url: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 68,
    sku: "NIKE-TF-JOG-BLK",
    description: "Premium Jogger mit Tech Fleece. Ultra-leicht, wärmend, perfekter Fit für Training & Freizeit.",
    product_url: "https://shop.example.com/products/nike-tech-fleece-joggers",
    variant_data: [
      {
        id: "var_jogger_s",
        sku: "NIKE-TF-JOG-BLK-S",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop&q=90",
        price: "89.99",
        title: "Größe S",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "S" }],
        availableForSale: true,
        inventoryQuantity: 18
      },
      {
        id: "var_jogger_m",
        sku: "NIKE-TF-JOG-BLK-M",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop&q=90",
        price: "89.99",
        title: "Größe M",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "M" }],
        availableForSale: true,
        inventoryQuantity: 28
      },
      {
        id: "var_jogger_l",
        sku: "NIKE-TF-JOG-BLK-L",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop&q=90",
        price: "89.99",
        title: "Größe L",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "L" }],
        availableForSale: true,
        inventoryQuantity: 22
      }
    ]
  },
  {
    id: "prod_nike_shirt",
    title: "Nike Dri-FIT ADV Training Shirt",
    price: "44.99",
    primary_image_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90",
    inventory_quantity: 94,
    sku: "NIKE-DF-ADV-SHIRT",
    description: "Performance T-Shirt mit Dri-FIT ADV. Atmungsaktiv, schnelltrocknend, perfekt für intensive Workouts.",
    product_url: "https://shop.example.com/products/nike-dri-fit-shirt",
    variant_data: [
      {
        id: "var_shirt_s",
        sku: "NIKE-DF-ADV-SHIRT-S",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90",
        price: "44.99",
        title: "Größe S",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "S" }],
        availableForSale: true,
        inventoryQuantity: 24
      },
      {
        id: "var_shirt_m",
        sku: "NIKE-DF-ADV-SHIRT-M",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90",
        price: "44.99",
        title: "Größe M",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "M" }],
        availableForSale: true,
        inventoryQuantity: 38
      },
      {
        id: "var_shirt_l",
        sku: "NIKE-DF-ADV-SHIRT-L",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90",
        price: "44.99",
        title: "Größe L",
        compareAtPrice: null,
        selectedOptions: [{ name: "Size", value: "L" }],
        availableForSale: true,
        inventoryQuantity: 32
      }
    ]
  }
];

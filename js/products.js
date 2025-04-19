const PRODUCTS = [
    {
        id: 1001,
        name: "Everyday T-Shirt",
        description: "Comfortable and versatile t-shirt for everyday wear.",
        base_price: 19.99,
        base_shipping_cost: 4.99,
        free_shipping: false,
        sku: "APP-TSHIRT-1001",
        slug: "everyday-t-shirt",
        brand: "Generic",
        rating: 4.2,
        reviews_count: 150,
        status: "active",
        isFeatured: false,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 50,
        hasVariants: true,
        totalVariantStock: 200,
        lowStockThreshold: 10,
        features: {
            material: "100% Cotton",
            fit: "Regular",
            neckline: "Crew Neck",
            sleeveLength: "Short Sleeve",
            careInstructions: "Machine wash cold, tumble dry low"
        },
        images: [
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576566526864-8a8654f78cb2?w=800&auto=format&fit=crop"
        ],
        options: {
            color: ["black", "white", "gray", "navy"],
            size: ["S", "M", "L", "XL"]
        },
        option_images: {
            color: {
                black: ["https://images.unsplash.com/photo-1517423440497-a66bb3036971?w=800&auto=format&fit=crop"],
                white: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3753c?w=800&auto=format&fit=crop"],
                gray: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop"],
                navy: ["https://images.unsplash.com/photo-1560753956-e55a3d9d8958?w=800&auto=format&fit=crop"]
            }
        },
        variant_images: {},
        option_variants_stock: {
            "black|S": 20,
            "black|M": 25,
            "black|L": 20,
            "black|XL": 15,
            "white|S": 15,
            "white|M": 20,
            "white|L": 25,
            "white|XL": 20,
            "gray|S": 10,
            "gray|M": 15,
            "gray|L": 20,
            "gray|XL": 15,
            "navy|S": 15,
            "navy|M": 20,
            "navy|L": 15,
            "navy|XL": 10
        },
        option_price_adjustments: {},
        option_shipping_adjustments: {},
        weight: { value: 0.15, unit: "kg" },
        dimensions: { length: 25, width: 20, height: 2, unit: "cm" },
        option_dimension_overrides: {},
        categories: [401],
        upselling: [1002, 1003],
        crossSelling: [1101, 1201],
        relatedProducts: [1004, 1005],
        createdAt: "2025-01-20T10:00:00Z",
        updatedAt: "2025-04-10T16:30:00Z"
    },
    {
        id: 1002,
        name: "Comfort Jeans",
        description: "Classic five-pocket jeans made with comfortable stretch denim.",
        base_price: 59.99,
        base_shipping_cost: 7.99,
        free_shipping: false,
        sku: "APP-JEANS-1002",
        slug: "comfort-jeans",
        brand: "DenimCo",
        rating: 4.5,
        reviews_count: 210,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 40,
        hasVariants: true,
        totalVariantStock: 180,
        lowStockThreshold: 8,
        features: {
            material: "98% Cotton, 2% Elastane",
            fit: "Regular",
            rise: "Mid-Rise",
            closure: "Zipper Fly",
            legOpening: "Straight",
            careInstructions: "Machine wash cold, tumble dry low"
        },
        images: [
            "https://images.unsplash.com/photo-1602293924054-c4c49538ef91?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613140743874-6518915b14bd?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1612909242406-949a4c089401?w=800&auto=format&fit=crop"
        ],
        options: {
            color: ["dark blue", "light blue", "black"],
            waist: ["30", "32", "34", "36"],
            length: ["30", "32", "34"]
        },
        option_images: {
            color: {
                "dark blue": ["https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop"],
                "light blue": ["https://images.unsplash.com/photo-1541099649423-c687f4f88df9?w=800&auto=format&fit=crop"],
                black: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop"]
            }
        },
        variant_images: {},
        option_variants_stock: {
            "dark blue|30|30": 15,
            "dark blue|30|32": 12,
            "dark blue|32|30": 10,
            "dark blue|32|32": 15,
            "light blue|30|30": 10,
            "light blue|30|32": 8,
            "light blue|32|30": 12,
            "light blue|32|32": 10,
            "black|30|30": 8,
            "black|30|32": 5,
            "black|32|30": 10,
            "black|32|32": 7
        },
        option_price_adjustments: {},
        option_shipping_adjustments: {},
        weight: { value: 0.6, unit: "kg" },
        dimensions: { length: 30, width: 25, height: 5, unit: "cm" },
        option_dimension_overrides: {},
        categories: [401],
        upselling: [1006, 1007],
        crossSelling: [1102, 1202],
        relatedProducts: [1001, 1003],
        createdAt: "2025-02-01T14:20:00Z",
        updatedAt: "2025-04-12T09:50:00Z"
    },
    {
        id: 1003,
        name: "Running Shoes",
        description: "Lightweight running shoes designed for comfort and performance.",
        base_price: 79.99,
        base_shipping_cost: 9.99,
        free_shipping: false,
        sku: "FOOT-RUN-1003",
        slug: "running-shoes",
        brand: "SportX",
        rating: 4.7,
        reviews_count: 255,
        status: "active",
        isFeatured: true,
        isOnSale: true,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 35,
        hasVariants: true,
        totalVariantStock: 150,
        lowStockThreshold: 7,
        features: {
            upperMaterial: "Breathable Mesh",
            midsole: "Cushioned Foam",
            outsole: "Durable Rubber",
            closure: "Lace-Up",
            activity: "Running",
            weight: "250g (per shoe)"
        },
        images: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542296425-17bb1ca10a48?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589807237397-2a3a4a949230?w=800&auto=format&fit=crop"
        ],
        options: {
            color: ["red", "blue", "black"],
            size: ["7", "8", "9", "10", "11"]
        },
        option_images: {
            color: {
                red: ["https://images.unsplash.com/photo-1560769629-975efa4d40a5?w=800&auto=format&fit=crop"],
                blue: ["https://images.unsplash.com/photo-1586319941548-6e9598541516?w=800&auto=format&fit=crop"],
                black: ["https://images.unsplash.com/photo-1604174623754-19a39281fe9b?w=800&auto=format&fit=crop"]
            }
        },
        variant_images: {},
        option_variants_stock: {
            "red|7": 10,
            "red|8": 12,
            "red|9": 15,
            "red|10": 12,
            "red|11": 8,
            "blue|7": 8,
            "blue|8": 10,
            "blue|9": 12,
            "blue|10": 10,
            "blue|11": 7,
            "black|7": 7,
            "black|8": 8,
            "black|9": 10,
            "black|10": 8,
            "black|11": 6
        },
        option_price_adjustments: {},
        option_shipping_adjustments: {},
        weight: { value: 0.5, unit: "kg" },
        dimensions: { length: 32, width: 20, height: 12, unit: "cm" },
        option_dimension_overrides: {},
        categories: [402],
        upselling: [1008, 1009],
        crossSelling: [1103, 1203],
        relatedProducts: [1004, 1005],
        createdAt: "2025-02-15T11:45:00Z",
        updatedAt: "2025-04-15T13:00:00Z"
    },
    {
        id: 1004,
        name: "Leather Wallet",
        description: "Slim and stylish leather wallet with multiple card slots.",
        base_price: 39.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "ACC-WALLET-1004",
        slug: "leather-wallet",
        brand: "CraftLeather",
        rating: 4.6,
        reviews_count: 180,
        status: "active",
        isFeatured: false,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 60,
        hasVariants: true,
        totalVariantStock: 240,
        lowStockThreshold: 12,
        features: {
            material: "Genuine Leather",
            slots: "6 Card Slots, 1 Bill Compartment",
            lining: "RFID Blocking",
            dimensions: "11cm x 9cm x 1cm"
        },
        images: [
            "https://images.unsplash.com/photo-1555640733-c8172494093f?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590977591446-0e0f3ef58931?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1571697653107-9868d584323a?w=800&auto=format&fit=crop"
        ],
        options: {
            color: ["brown", "black", "tan"]
        },
        option_images: {
            color: {
                brown: ["https://images.unsplash.com/photo-1541714258391-2a1757ddca71?w=800&auto=format&fit=crop"],
                black: ["https://images.unsplash.com/photo-1619723445731-845bbd7d21b6?w=800&auto=format&fit=crop"],
                tan: ["https://images.unsplash.com/photo-1585747814745-e4aa8e6456f5?w=800&auto=format&fit=crop"]
            }
        },
        variant_images: {},
        option_variants_stock: {
            brown: 80,
            black: 90,
            tan: 70
        },
        option_price_adjustments: {},
        option_shipping_adjustments: {},
        weight: { value: 0.1, unit: "kg" },
        dimensions: { length: 12, width: 10, height: 2, unit: "cm" },
        option_dimension_overrides: {},
        categories: [403],
        upselling: [1010, 1011],
        crossSelling: [1104, 1204],
        relatedProducts: [1005, 1006],
        createdAt: "2025-03-01T16:00:00Z",
        updatedAt: "2025-04-18T10:15:00Z"
    },
    {
        id: 1005,
        name: "Sunglasses",
        description: "Classic sunglasses with UV protection.",
        base_price: 29.99,
        base_shipping_cost: 4.99,
        free_shipping: false,
        sku: "ACC-SUNGLASS-1005",
        slug: "classic-sunglasses",
        brand: "Visionary",
        rating: 4.4,
        reviews_count: 165,
        status: "active",
        isFeatured: false,
        isOnSale: true,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 70,
        hasVariants: true,
        totalVariantStock: 280,
        lowStockThreshold: 14,
        features: {
            lensMaterial: "Polycarbonate",
            frameMaterial: "Acetate",
            uvProtection: "UV400",
            style: "Classic",
            dimensions: "Lens Width: 52mm, Bridge: 18mm, Arm Length: 145mm"
        },
        images: [
            "https://images.unsplash.com/photo-1572802419224-296b0a970e82?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585314064182-94138b19e359?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585314063107-a9c9653d12ca?w=800&auto=format&fit=crop"
        ],
        options: {
            color: ["black", "tortoise", "navy"]
        },
        option_images: {
            color: {
                black: ["https://images.unsplash.com/photo-1610296664158-5e6a1d943d51?w=800&auto=format&fit=crop"],
                tortoise: ["https://images.unsplash.com/photo-1607507317742-a7d0c4ca257f?w=800&auto=format&fit=crop"],
                navy: ["https://images.unsplash.com/photo-1594324235495-e79092561759?w=800&auto=format&fit=crop"]
            }
        },
        variant_images: {},
        option_variants_stock: {
            black: 100,
            tortoise: 90,
            navy: 90
        },
        option_price_adjustments: {},
        option_shipping_adjustments: {},
        weight: { value: 0.05, unit: "kg" },
        dimensions: { length: 16, width: 6, height: 4, unit: "cm" },
        option_dimension_overrides: {},
        categories: [403],
        upselling: [1012, 1013],
        crossSelling: [1105, 1205],
        relatedProducts: [1004, 1006],
        createdAt: "2025-03-10T09:30:00Z",
        updatedAt: "2025-04-16T14:45:00Z"
    },
    {
        id: 1006,
        name: "Canvas Backpack",
        description: "Durable canvas backpack with multiple compartments.",
        base_price: 49.99,
        base_shipping_cost: 6.99,
        free_shipping: false,
        sku: "ACC-BACKPACK-1006",
        slug: "canvas-backpack",
        brand: "AdventureGear",
        rating: 4.5,
        reviews_count: 190,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 55,
        hasVariants: true,
        totalVariantStock: 220,
        lowStockThreshold: 11,
        features: {
            material: "Durable Canvas",
            capacity: "20L",
            compartments: "1 Main, 2 Front, 2 Side",
            laptopSleeve: "Fits up to 15-inch Laptop",
            dimensions: "45cm x 30cm x 15cm"
        },
        images: [
            "https://images.unsplash.com/photo-1556020619-4c6f753a868c?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581609555735-b1518f66e20f?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1575427065342-81048011475a?w=800&auto=format&fit=crop"
        ],
        options: {
            color: ["green", "gray", "blue"]
        },
        option_images: {
            color: {
                green: ["https://images.unsplash.com/photo-1565338762-18f88086b73f?w=800&auto=format&fit=crop"],
                gray: ["https://images.unsplash.com/photo-1607582289435-00597e87061c?w=800&auto=format&fit=crop"],
                blue: ["https://images.unsplash.com/photo-1586528297054-c982c4dc686c?w=800&auto=format&fit=crop"]
            }
        },
        variant_images: {},
        option_variants_stock: {
            green: 70,
            gray: 75,
            blue: 75
        },
        option_price_adjustments: {},
        option_shipping_adjustments: {},
        weight: { value: 0.7, unit: "kg" },
        dimensions: { length: 45, width: 30, height: 15, unit: "cm" },
        option_dimension_overrides: {},
        categories: [403],
        upselling: [1014, 1015],
        crossSelling: [1106, 1206],
        relatedProducts: [1005, 1007],
        createdAt: "2025-03-20T13:45:00Z",
        updatedAt: "2025-04-17T11:00:00Z"
    },
    {
        id: 1007,
        name: "Smart Watch",
        description: "Advanced smartwatch with fitness tracking and notifications.",
        base_price: 199.99,
        base_shipping_cost: 8.99,
        free_shipping: false,
        sku: "ELEC-WATCH-1007",
        slug: "smart-watch",
        brand: "TechLife",
        rating: 4.8,
        reviews_count: 280,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 30,
        hasVariants: true,
        totalVariantStock: 120,
        lowStockThreshold: 6,
        features: {
            display: "1.4-inch AMOLED",
            sensors: "Heart Rate, GPS, Accelerometer",
            connectivity: "Bluetooth, Wi-Fi",
            batteryLife: "Up to 7 Days",
            waterResistance: "50M",
            notifications: "Calls, Texts, Apps",
            activityTracking: "Steps, Distance, Calories, Sleep"
        },
        images: [
            "https://images.unsplash.com/photo-1533050487297-09b4501c829a?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1546868871-7041f2a55e48?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1562998083-7d95c5925a81?w=800&auto=format&fit=crop"
        ],
        options: {
            color: ["black", "silver", "rose gold"]
        },
        option_images: {
            color: {
                black: ["https://images.unsplash.com/photo-1579586337278-3befd8e70e6e?w=800&auto=format&fit=crop"],
                silver: ["https://images.unsplash.com/photo-1585314063027-65209243f286?w=800&auto=format&fit=crop"],
                "rose gold": ["https://images.unsplash.com/photo-1585314064748-2469469ef5e6?w=800&auto=format&fit=crop"]
            }
        },
        variant_images: {},
        option_variants_stock: {
            black: 40,
            silver: 40,
            "rose gold": 40
        },
        option_price_adjustments: {},
        option_shipping_adjustments: {},
        weight: { value: 0.08, unit: "kg" },
        dimensions: { length: 22, width: 4, height: 1, unit: "cm" },
        option_dimension_overrides: {},
        categories: [102, 106],
        upselling: [1016, 1017],
        crossSelling: [1107, 1207],
        relatedProducts: [1008, 1009],
        createdAt: "2025-04-01T10:00:00Z",
        updatedAt: "2025-04-18T15:30:00Z"
    },
    {
        id: 1008,
        name: "Wireless Headphones",
        description: "Over-ear wireless headphones with noise-cancelling technology.",
        base_price: 149.99,
        base_shipping_cost: 7.99,
        free_shipping: false,
        sku: "ELEC-HEADPHONE-1008",
        slug: "wireless-headphones",
        brand: "AudioWave",
        rating: 4.7,
        reviews_count: 260,
        status: "active",
        isFeatured: true,
        isOnSale: true,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 25,
        hasVariants: true,
        totalVariantStock: 100,
        lowStockThreshold: 5,
        features: {
            driverSize: "40mm",
            frequencyResponse: "20Hz - 20kHz",
            impedance: "32 Ohms",
            batteryLife: "Up to 30 Hours",
            connectivity: "Bluetooth 5.0",
            noiseCancelling: "Active Noise Cancellation (ANC)",
            microphone: "Built-in Microphone"
        },
        images: [
            "https://images.unsplash.com/photo-1583394842530-6a66a58b3104?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1561116938-5c0280a7a758?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556228453-ef53b8170985?w=800&auto=format&fit=crop"
        ],
        options: {
            color: ["black", "white", "blue"]
        },
        option_images: {
            color: {
                black: ["https://images.unsplash.com/photo-1579586337278-3befd8e70e6e?w=800&auto=format&fit=crop"],
                white: ["https://images.unsplash.com/photo-1560769629-975efa4d40a5?w=800&auto=format&fit=crop"],
                blue: ["https://images.unsplash.com/photo-1586319941548-6e9598541516?w=800&auto=format&fit=crop"]
            }
        },
        variant_images: {},
        option_variants_stock: {
            black: 35,
            white: 30,
            blue: 35
        },
        option_price_adjustments: {},
        option_shipping_adjustments: {},
        weight: { value: 0.25, unit: "kg" },
        dimensions: { length: 20, width: 18, height: 8, unit: "cm" },
        option_dimension_overrides: {},
        categories: [102, 105],
        upselling: [1018, 1019],
        crossSelling: [1108, 1208],
        relatedProducts: [1007, 1009],
        createdAt: "2025-04-05T15:15:00Z",
        updatedAt: "2025-04-18T12:45:00Z"
    },
// Product 9 (Continuing from previous list)
    {
        id: 1009,
        name: "Portable Bluetooth Speaker",
        description: "Compact and powerful Bluetooth speaker for on-the-go music. Water-resistant design.",
        base_price: 69.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "ELEC-SPEAKER-1009",
        slug: "portable-bluetooth-speaker",
        brand: "SoundBlast",
        rating: 4.6,
        reviews_count: 240,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 0, // Must select variant
        hasVariants: true,
        totalVariantStock: 160, // Sum of option_variants_stock
        lowStockThreshold: 8,
        features: {
            driverSize: "45mm",
            powerOutput: "10W",
            frequencyResponse: "80Hz - 20kHz",
            batteryLife: "Up to 12 Hours",
            connectivity: "Bluetooth 5.0, AUX",
            waterResistance: "IPX5",
            microphone: "Built-in Microphone"
        },
        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop"
        ],
        options: {
            color: ["black", "blue", "red", "teal"]
        },
        option_images: {
            color: {
                black: ["https://images.unsplash.com/photo-1626946616376-d11bde4ba48f?w=800&auto=format&fit=crop"],
                blue: ["https://images.unsplash.com/photo-1626946616489-73df1434cfac?w=800&auto=format&fit=crop"],
                red: ["https://images.unsplash.com/photo-1626946616503-dea845326235?w=800&auto=format&fit=crop"],
                teal: ["https://images.unsplash.com/photo-1610156440283-a6f09e654e0d?w=800&auto=format&fit=crop"] // Using a generic colored one for teal
            }
        },
        variant_images: {}, // No specific combination images needed here
        option_variants_stock: {
            "black": 50,
            "blue": 45,
            "red": 35,
            "teal": 30
        },
        option_price_adjustments: {}, // No price adjustments based on color
        option_shipping_adjustments: {}, // No shipping adjustments based on color
        weight: { value: 0.4, unit: "kg" },
        dimensions: { length: 18, width: 7, height: 7, unit: "cm" },
        option_dimension_overrides: {},
        categories: [102, 105], // Electronics, Audio
        upselling: [1007, 1008], // Smartwatch, Headphones
        crossSelling: [1109, 1209], // Carrying case, Power bank
        relatedProducts: [1010, 1101], // Next product, maybe a different type of speaker
        createdAt: "2025-04-10T14:00:00Z",
        updatedAt: "2025-04-18T09:10:00Z"
    },
    // Product 10 (More Complex - Introduces Price/Shipping Adjustments)
    {
        id: 1010,
        name: "Adjustable Desk Lamp",
        description: "Modern adjustable desk lamp with multiple finish options and bulb types.",
        base_price: 89.99, // Price for the base configuration (e.g., Metal/Matte Black/Warm LED)
        base_shipping_cost: 10.99,
        free_shipping: false,
        sku: "HOME-LAMP-1010",
        slug: "adjustable-desk-lamp",
        brand: "LumiDesign",
        rating: 4.7,
        reviews_count: 115,
        status: "active",
        isFeatured: false,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 0, // Must configure
        hasVariants: true,
        totalVariantStock: 95, // Sum of option_variants_stock
        lowStockThreshold: 5,
        features: {
            materialOptions: "Metal, Wood",
            adjustability: "Multi-angle arm and head",
            powerSource: "AC Adapter (included)",
            switchType: "On-cord switch",
            baseType: "Weighted base"
        },
        images: [
            "https://images.unsplash.com/photo-1517991104128-5f1f94f7a6db?w=800&auto=format&fit=crop", // General lamp
            "https://images.unsplash.com/photo-1616594590198-a0f3af3181a7?w=800&auto=format&fit=crop", // Detail
            "https://images.unsplash.com/photo-1507436889597-a25654f6a7a7?w=800&auto=format&fit=crop"  // In use
        ],
        options: {
            material: ["Metal", "Wood"],
            finish: ["Matte Black", "Brushed Nickel", "Natural Oak"], // Note: Natural Oak only makes sense for Wood material
            bulb: ["Warm LED", "Cool LED", "Smart Bulb"]
        },
        option_images: {
            material: {
                "Wood": ["https://images.unsplash.com/photo-1531946386414-48271f7f5ea0?w=800&auto=format&fit=crop"] // Image showing a wooden lamp
            },
            finish: {
                "Brushed Nickel": ["https://images.unsplash.com/photo-1614119391879-0179195a5c30?w=800&auto=format&fit=crop"], // Image showing a nickel finish
                "Natural Oak": ["https://images.unsplash.com/photo-1531946386414-48271f7f5ea0?w=800&auto=format&fit=crop"]  // Use the wood image again
            },
            bulb: {
                "Smart Bulb": ["https://images.unsplash.com/photo-1620414885866-79620a0b8c66?w=800&auto=format&fit=crop"] // Image representing a smart bulb feature
            }
        },
        variant_images: { // Example: Specific image for a Wood/Natural Oak combination
            "Wood|Natural Oak": "https://images.unsplash.com/photo-1531946386414-48271f7f5ea0?w=800&auto=format&fit=crop"
        },
        // NOTE: The keys here represent Material|Finish|Bulb. Some combinations might not be valid (e.g., Metal|Natural Oak).
        // Store stock only for *valid* combinations. Assume validation happens elsewhere or filter available options dynamically.
        option_variants_stock: {
            "Metal|Matte Black|Warm LED": 15,
            "Metal|Matte Black|Cool LED": 10,
            "Metal|Matte Black|Smart Bulb": 8,
            "Metal|Brushed Nickel|Warm LED": 12,
            "Metal|Brushed Nickel|Cool LED": 8,
            "Metal|Brushed Nickel|Smart Bulb": 5,
            "Wood|Natural Oak|Warm LED": 10, // Only Natural Oak finish for Wood material
            "Wood|Natural Oak|Cool LED": 7,
            "Wood|Natural Oak|Smart Bulb": 5
            // Combinations like "Wood|Matte Black|..." are omitted as invalid
        },
        // Price adjustments ADDED to base_price based on selection
        option_price_adjustments: {
            material: {
                "Wood": 20.00 // Wood material adds $20
            },
            finish: {
                "Brushed Nickel": 5.00 // Nickel finish adds $5 (compared to default Matte Black)
                // Natural Oak doesn't need an adjustment here if it's tied to the Wood material price change
            },
            bulb: {
                "Cool LED": 0.00, // Same price as Warm LED (our base)
                "Smart Bulb": 15.00 // Smart bulb adds $15
            }
        },
        // Shipping adjustments ADDED to base_shipping_cost based on selection
        option_shipping_adjustments: {
            material: {
                "Wood": 2.00 // Wood is slightly heavier/bulkier, adds $2 to shipping
            }
        },
        weight: { value: 1.5, unit: "kg" }, // Base weight (Metal)
        dimensions: { length: 40, width: 15, height: 45, unit: "cm" }, // Base dimensions (adjustable)
        // Dimension/Weight overrides for specific options
        option_dimension_overrides: {
            material: {
                "Wood": {
                    weight: { value: 1.8, unit: "kg" }, // Wood variant is heavier
                    // Dimensions might be slightly different but keeping it simple here
                    dimensions: { length: 40, width: 16, height: 45, unit: 'cm' }
                }
            }
        },
        categories: [103, 107], // Home Goods, Lighting
        upselling: [1011, 1012], // Maybe a floor lamp version, higher-end lamp
        crossSelling: [1110, 1210], // Smart plugs, replacement bulbs
        relatedProducts: [1009, 1102], // Previous product, maybe another home item
        createdAt: "2025-04-15T11:00:00Z",
        updatedAt: "2025-04-18T15:00:00Z"
    }
];

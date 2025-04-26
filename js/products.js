// Products
const PRODUCTS = [
    {
        id: 1,
        name: "Prime Ribeye Steak",
        description: "Our premium ribeye steak is perfectly marbled for exceptional flavor and tenderness. Ideal for grilling or pan-searing to medium-rare perfection.",
        base_price: 35.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "BEEF-RIB-001",
        slug: "prime-ribeye-steak",
        brand: "Premium Meats",
        rating: 4.8,
        reviews_count: 48,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 12,
        hasVariants: true,
        totalVariantStock: 12,
        lowStockThreshold: 3,
        features: {
            grade: "Prime grade beef",
            marbling: "Exceptional marbling",
            aging: "Wet-aged for 28 days",
            preparation: "Expertly trimmed",
            packaging: "Vacuum-sealed for freshness"
        },
        images: [
            "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "weight": ["8oz", "12oz", "16oz"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "8oz": 4,
            "12oz": 4,
            "16oz": 4
        },
        option_price_adjustments: {
            "weight": {
                "12oz": 12.00,
                "16oz": 24.00
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.5,
            unit: "lb"
        },
        dimensions: {
            length: 10,
            width: 6,
            height: 2,
            unit: "in"
        },
        option_dimension_overrides: {
            "weight": {
                "8oz": {
                    weight: { value: 0.5, unit: "lb" }
                },
                "12oz": {
                    weight: { value: 0.75, unit: "lb" }
                },
                "16oz": {
                    weight: { value: 1, unit: "lb" }
                }
            }
        },
        categories: [1, 2, 3],
        upselling: [3],
        crossSelling: [5, 6],
        relatedProducts: [2],
        createdAt: "2025-01-01T00:00:00Z",
        updatedAt: "2025-04-01T00:00:00Z"
    },
    {
        id: 2,
        name: "Sirloin Steak",
        description: "A leaner cut that still delivers robust beef flavor. Our sirloin steaks are hand-selected for consistent quality and perfect thickness.",
        base_price: 28.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "BEEF-SIR-002",
        slug: "sirloin-steak",
        brand: "Premium Meats",
        rating: 4.6,
        reviews_count: 35,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 25,
        hasVariants: true,
        totalVariantStock: 25,
        lowStockThreshold: 5,
        features: {
            grade: "Choice grade beef",
            flavor: "Lean yet flavorful",
            aging: "Aged for 21 days",
            cutting: "Consistent 1-inch thickness",
            packaging: "Individually vacuum-sealed"
        },
        images: [
            "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "weight": ["8oz", "10oz", "12oz"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "8oz": 8,
            "10oz": 8,
            "12oz": 9
        },
        option_price_adjustments: {
            "weight": {
                "10oz": 8.00,
                "12oz": 15.00
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.5,
            unit: "lb"
        },
        dimensions: {
            length: 10,
            width: 6,
            height: 2,
            unit: "in"
        },
        option_dimension_overrides: {
            "weight": {
                "8oz": {
                    weight: { value: 0.5, unit: "lb" }
                },
                "10oz": {
                    weight: { value: 0.625, unit: "lb" }
                },
                "12oz": {
                    weight: { value: 0.75, unit: "lb" }
                }
            }
        },
        categories: [1, 2, 3],
        upselling: [1, 3],
        crossSelling: [5, 6],
        relatedProducts: [1],
        createdAt: "2025-01-15T00:00:00Z",
        updatedAt: "2025-04-05T00:00:00Z"
    },
    {
        id: 3,
        name: "Beef Tenderloin",
        description: "The most tender cut of beef, our tenderloin is buttery soft with a mild, delicate flavor. Perfect for special occasions or when only the best will do.",
        base_price: 42.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "BEEF-TEN-003",
        slug: "beef-tenderloin",
        brand: "Premium Meats",
        rating: 4.9,
        reviews_count: 62,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 18,
        hasVariants: true,
        totalVariantStock: 18,
        lowStockThreshold: 4,
        features: {
            grade: "Prime grade beef",
            cut: "Center-cut filet",
            texture: "Exceptionally tender",
            preparation: "Minimal trimming required",
            serving: "Perfect for special occasions"
        },
        images: [
            "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "weight": ["6oz", "8oz"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "6oz": 9,
            "8oz": 9
        },
        option_price_adjustments: {
            "weight": {
                "8oz": 14.00
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.375,
            unit: "lb"
        },
        dimensions: {
            length: 8,
            width: 4,
            height: 2,
            unit: "in"
        },
        option_dimension_overrides: {
            "weight": {
                "6oz": {
                    weight: { value: 0.375, unit: "lb" }
                },
                "8oz": {
                    weight: { value: 0.5, unit: "lb" }
                }
            }
        },
        categories: [1, 5],
        upselling: [],
        crossSelling: [1, 2],
        relatedProducts: [1, 2],
        createdAt: "2025-01-10T00:00:00Z",
        updatedAt: "2025-03-25T00:00:00Z"
    },
    {
        id: 4,
        name: "Beef Brisket",
        description: "Our carefully selected brisket has the perfect amount of fat content for slow smoking or braising to achieve that melt-in-your-mouth texture.",
        base_price: 16.99,
        base_shipping_cost: 7.99,
        free_shipping: false,
        sku: "BEEF-BRS-004",
        slug: "beef-brisket",
        brand: "Premium Meats",
        rating: 4.7,
        reviews_count: 39,
        status: "active",
        isFeatured: false,
        isOnSale: true,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 8,
        hasVariants: true,
        totalVariantStock: 8,
        lowStockThreshold: 3,
        features: {
            grade: "Choice grade beef",
            fatRatio: "Perfect fat-to-meat ratio",
            cookingMethod: "Ideal for smoking or slow cooking",
            cut: "Full packer cut available",
            preparation: "Trimmed to specification upon request"
        },
        images: [
            "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "weight": ["4-5 lbs", "8-10 lbs"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "4-5 lbs": 5,
            "8-10 lbs": 3
        },
        option_price_adjustments: {
            "weight": {
                "8-10 lbs": 15.00
            }
        },
        option_shipping_adjustments: {
            "weight": {
                "8-10 lbs": 4.00
            }
        },
        weight: {
            value: 4.5,
            unit: "lb"
        },
        dimensions: {
            length: 16,
            width: 10,
            height: 4,
            unit: "in"
        },
        option_dimension_overrides: {
            "weight": {
                "4-5 lbs": {
                    weight: { value: 4.5, unit: "lb" }
                },
                "8-10 lbs": {
                    weight: { value: 9, unit: "lb" },
                    dimensions: {
                        length: 20,
                        width: 12,
                        height: 5,
                        unit: "in"
                    }
                }
            }
        },
        categories: [1],
        upselling: [5],
        crossSelling: [6],
        relatedProducts: [5],
        createdAt: "2025-01-20T00:00:00Z",
        updatedAt: "2025-04-10T00:00:00Z"
    },
    {
        id: 5,
        name: "Beef Short Ribs",
        description: "These meaty short ribs are rich in flavor and perfect for slow cooking. They become fall-off-the-bone tender when braised, smoked, or sous vide.",
        base_price: 18.99,
        base_shipping_cost: 6.99,
        free_shipping: false,
        sku: "BEEF-RIB-005",
        slug: "beef-short-ribs",
        brand: "Premium Meats",
        rating: 4.8,
        reviews_count: 42,
        status: "active",
        isFeatured: false,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 15,
        hasVariants: true,
        totalVariantStock: 15,
        lowStockThreshold: 4,
        features: {
            grade: "Choice grade beef",
            marbling: "Well-marbled",
            thickness: "Cut to 2-inch thickness",
            boneOptions: "Available bone-in or boneless",
            cookingMethod: "Perfect for low and slow cooking"
        },
        images: [
            "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "cut": ["English Cut", "Flanken Cut"],
            "bone": ["Bone-in", "Boneless"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "English Cut|Bone-in": 5,
            "English Cut|Boneless": 3,
            "Flanken Cut|Bone-in": 5,
            "Flanken Cut|Boneless": 2
        },
        option_price_adjustments: {
            "bone": {
                "Boneless": 2.00
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 2,
            unit: "lb"
        },
        dimensions: {
            length: 12,
            width: 8,
            height: 3,
            unit: "in"
        },
        option_dimension_overrides: {},
        categories: [1, 2, 4],
        upselling: [1, 2],
        crossSelling: [4, 6],
        relatedProducts: [4],
        createdAt: "2025-01-25T00:00:00Z",
        updatedAt: "2025-03-30T00:00:00Z"
    },
    {
        id: 6,
        name: "Premium Ground Beef",
        description: "Our ground beef is freshly ground daily from premium cuts. Available in various lean-to-fat ratios to suit your cooking needs.",
        base_price: 12.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "BEEF-GRD-006",
        slug: "premium-ground-beef",
        brand: "Premium Meats",
        rating: 4.5,
        reviews_count: 53,
        status: "active",
        isFeatured: false,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 30,
        hasVariants: true,
        totalVariantStock: 30,
        lowStockThreshold: 6,
        features: {
            freshness: "Freshly ground daily",
            purity: "No fillers or additives",
            variety: "Available in multiple lean-to-fat ratios",
            packaging: "Packaged in 1lb portions",
            versatility: "Perfect for burgers, meatballs, and more"
        },
        images: [
            "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "leanness": ["80/20", "85/15", "90/10"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "80/20": 10,
            "85/15": 10,
            "90/10": 10
        },
        option_price_adjustments: {
            "leanness": {
                "85/15": 1.00,
                "90/10": 2.50
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 1,
            unit: "lb"
        },
        dimensions: {
            length: 8,
            width: 6,
            height: 2,
            unit: "in"
        },
        option_dimension_overrides: {},
        categories: [1, 6],
        upselling: [4, 5],
        crossSelling: [1, 2],
        relatedProducts: [4, 5],
        createdAt: "2025-03-01T00:00:00Z",
        updatedAt: "2025-04-15T00:00:00Z"
    }
];
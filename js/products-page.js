// products-page.js - Alpine.js Components for Products/Collections Page

document.addEventListener('alpine:init', () => {
    /**
     * Product Catalog Component
     * Handles product filtering, sorting, and view options
     */
    Alpine.data('productCatalog', (config = {}) => {
        return {
            // State
            searchQuery: '',
            selectedCategory: null,
            view: config.defaultView || 'grid',
            sortBy: config.defaultSort || 'featured',

            // Config
            productData: config.products || [],
            categoryData: config.categories || [],

            // Initialize from URL parameters
            init() {
                const categoryParam = this.getUrlParameter('category');
                if (categoryParam) {
                    this.selectedCategory = parseInt(categoryParam);
                }

                // Set view from localStorage if available
                const savedView = localStorage.getItem('preferredView');
                if (savedView) {
                    this.view = savedView;
                }
            },

            // Helper to get URL parameters
            getUrlParameter(name) {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get(name);
            },

            // Get category name by ID
            getCategoryName(categoryId) {
                const category = this.categoryData.find(cat => cat.id === categoryId);
                return category ? category.name : 'All Products';
            },

            // Save view preference
            saveViewPreference() {
                localStorage.setItem('preferredView', this.view);
            },

            // Set view with save
            setView(viewType) {
                this.view = viewType;
                this.saveViewPreference();
            },

            // Helper: Recursively get all descendant category IDs for a selected category
            getAllDescendantCategoryIds(parentId) {
                let ids = [];
                this.categoryData.forEach(cat => {
                    if (cat.parent_id === parentId) {
                        ids.push(cat.id);
                        ids = ids.concat(this.getAllDescendantCategoryIds(cat.id));
                    }
                });
                return ids;
            },

            // Filter and sort products
            getFilteredProducts() {
                let categoryIdsToCheck = [];
                if (this.selectedCategory !== null) {
                    categoryIdsToCheck = [
                        this.selectedCategory,
                        ...this.getAllDescendantCategoryIds(this.selectedCategory)
                    ];
                }

                // First filter by category and search query
                let filtered = this.productData.filter(product =>
                    (this.selectedCategory === null ||
                        (Array.isArray(product.categories) &&
                            product.categories.some(catId => categoryIdsToCheck.includes(catId)))
                    ) &&
                    (this.searchQuery === '' ||
                        (product.name && product.name.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
                        (product.description && product.description.toLowerCase().includes(this.searchQuery.toLowerCase()))
                    )
                );

                // Then sort
                switch (this.sortBy) {
                    case 'price-asc':
                        filtered.sort((a, b) => (a.salePrice || a.base_price || a.price) - (b.salePrice || b.base_price || b.price));
                        break;
                    case 'price-desc':
                        filtered.sort((a, b) => (b.salePrice || b.base_price || b.price) - (a.salePrice || a.base_price || a.price));
                        break;
                    case 'name':
                        filtered.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    case 'rating':
                        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                        break;
                    case 'featured':
                    default:
                        // Featured first, then new arrivals, then the rest
                        filtered.sort((a, b) => {
                            if (a.isFeatured && !b.isFeatured) return -1;
                            if (!a.isFeatured && b.isFeatured) return 1;
                            if (a.new && !b.new) return -1;
                            if (!a.new && b.new) return 1;
                            return 0;
                        });
                }

                return filtered;
            },

            // Clear all filters
            clearFilters() {
                this.searchQuery = '';
                this.selectedCategory = null;
            }
        };
    });
});
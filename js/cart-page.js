// cart-page.js - Alpine.js Components for Cart Page
document.addEventListener('alpine:init', () => {
    /**
     * Shopping Cart Page Component
     * Handles cart page functionality
     */
    Alpine.data('cartPage', () => {
        return {
            // State
            couponCode: '',
            shippingMethod: 'standard',
            estimatedDelivery: '',

            init() {
                this.updateEstimatedDelivery();
            },

            // Shipping methods and their costs
            shippingMethods: {
                standard: {
                    name: 'Standard Shipping',
                    cost: 4.99,
                    days: '3-5'
                },
                express: {
                    name: 'Express Shipping',
                    cost: 9.99,
                    days: '1-2'
                },
                free: {
                    name: 'Free Shipping',
                    cost: 0,
                    days: '5-7',
                    minimumOrder: 50
                }
            },

            // Get current shipping method details
            getCurrentShippingMethod() {
                return this.shippingMethods[this.shippingMethod] || this.shippingMethods.standard;
            },

            // Update estimated delivery based on selected shipping method
            updateEstimatedDelivery() {
                const method = this.getCurrentShippingMethod();

                // Calculate delivery date range
                const today = new Date();
                const minDays = parseInt(method.days.split('-')[0]);
                const maxDays = parseInt(method.days.split('-')[1]);

                const minDate = new Date(today);
                minDate.setDate(today.getDate() + minDays);

                const maxDate = new Date(today);
                maxDate.setDate(today.getDate() + maxDays);

                // Format dates
                const options = { month: 'short', day: 'numeric' };
                const minDateStr = minDate.toLocaleDateString('en-US', options);
                const maxDateStr = maxDate.toLocaleDateString('en-US', options);

                this.estimatedDelivery = `${minDateStr} - ${maxDateStr}`;
            },

            // Check if the cart qualifies for free shipping
            qualifiesForFreeShipping() {
                const freeShippingMinimum = this.shippingMethods.free.minimumOrder;
                return Alpine.store('cart').getTotalPrice() >= freeShippingMinimum;
            },

            // Apply coupon (this would typically check with a backend)
            applyCoupon() {
                if (!this.couponCode.trim()) {
                    alert('Please enter a coupon code');
                    return;
                }

                // This is just a placeholder. In a real app, you'd validate with the server
                if (this.couponCode.toLowerCase() === 'welcome10') {
                    alert('Coupon applied: 10% discount!');
                    // Implementation would vary based on how you handle discounts
                } else {
                    alert('Invalid coupon code');
                }
            },

            // Get final total including shipping
            getFinalTotal() {
                const subtotal = Alpine.store('cart').getTotalPrice();
                const shippingCost = this.qualifiesForFreeShipping() ? 0 : this.getCurrentShippingMethod().cost;

                // Add tax calculation if needed
                return subtotal + shippingCost;
            },

            // Format currency
            formatPrice(price) {
                return '$' + parseFloat(price).toFixed(2);
            },

            // Proceed to checkout
            proceedToCheckout() {
                // Save shipping method to localStorage or session
                localStorage.setItem('selectedShippingMethod', this.shippingMethod);

                // Redirect to checkout page
                window.location.href = 'checkout.html';
            }
        };
    });

    /**
     * WhatsApp Checkout Component
     * Handles generating and sending cart details via WhatsApp
     */
    Alpine.data('whatsappCheckout', (config = {}) => {
        return {
            // Configuration with defaults
            phoneNumber: config.phoneNumber || Alpine.store('ui').whatsAppNumber,
            includeItemPrice: config.includeItemPrice !== false,
            includeSubtotal: config.includeSubtotal !== false,
            includeTotal: config.includeTotal !== false,
            customGreeting: config.customGreeting || 'Hello, I would like to place the following order:',
            customClosing: config.customClosing || 'Please contact me to confirm my order.',

            // Generate the complete order message
            generateOrderText() {
                const cart = Alpine.store('cart');

                // Start with greeting
                let message = `${this.customGreeting}\n\n`;

                // Add cart items
                if (cart.items.length === 0) {
                    return this.customGreeting;
                }

                // Add items with details
                cart.items.forEach((item, index) => {
                    message += `• ${item.name}`;

                    // Add options if available
                    if (item.options && Object.keys(item.options).length > 0) {
                        const optionsText = Object.entries(item.options)
                            .map(([key, value]) => `${key}: ${value}`)
                            .join(', ');
                        message += ` (${optionsText})`;
                    }

                    // Add quantity and price
                    if (this.includeItemPrice) {
                        message += ` - ${item.quantity} × $${item.price.toFixed(2)}`;
                    } else {
                        message += ` - Qty: ${item.quantity}`;
                    }

                    message += '\n';
                });

                // Add subtotal
                if (this.includeSubtotal) {
                    message += `\nSubtotal: $${cart.getTotalPrice().toFixed(2)}`;
                }

                // Add shipping method if available in cart page data
                if (this.$el.closest('[x-data="cartPage"]')) {
                    const cartPage = Alpine.bound(this.$el.closest('[x-data="cartPage"]'), 'cartPage');
                    if (cartPage && cartPage.shippingMethod) {
                        const method = cartPage.getCurrentShippingMethod();
                        message += `\nShipping: ${method.name} ($${method.cost.toFixed(2)})`;
                        message += `\nEstimated Delivery: ${cartPage.estimatedDelivery}`;
                    }
                }

                // Add total
                if (this.includeTotal) {
                    // If shipping is available, include it in total
                    let totalPrice = cart.getTotalPrice();
                    if (this.$el.closest('[x-data="cartPage"]')) {
                        const cartPage = Alpine.bound(this.$el.closest('[x-data="cartPage"]'), 'cartPage');
                        if (cartPage && cartPage.shippingMethod) {
                            const shipping = cartPage.getCurrentShippingMethod();
                            if (!cartPage.qualifiesForFreeShipping()) {
                                totalPrice += shipping.cost;
                            }
                        }
                    }
                    message += `\nTotal: $${totalPrice.toFixed(2)}`;
                }

                // Add closing message
                message += `\n\n${this.customClosing}`;

                return message;
            },

            // Send order via WhatsApp
            sendOrder() {
                const message = this.generateOrderText();
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/${this.phoneNumber}?text=${encodedMessage}`, '_blank');
            }
        };
    });
});
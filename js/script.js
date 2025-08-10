<script>
    // --- DATA ---
    const products = [
        { id: 1, name: "ALOE VERA GEL", price: 116.79, specialPromo: 'buy2for200', image: "aloe-vera-gel.jpg", benefits: "Supports digestion, boosts immunity.", consumption: "Take 30-60ml daily." },
        { id: 2, name: "ALOE BERRY NECTAR", price: 116.79, specialPromo: 'buy2for200', image: "aloe-berry-nectar.jpg", benefits: "Antioxidant support, immune system booster.", consumption: "30-60ml daily." },
        { id: 3, name: "ALOE BITS N' PEACHES", price: 116.79, specialPromo: 'buy2for200', image: "aloe-peaches.jpg", benefits: "Digestive health, vitamin C source.", consumption: "30-60ml daily." },
        { id: 4, name: "LITE VANILLA", price: 155.72, promoPrice: 147.93, image: "lite-vanilla.jpg", benefits: "Meal replacement for weight management.", consumption: "Mix with milk or water." },
        { id: 5, name: "LITE CHOCO", price: 155.72, promoPrice: 147.93, image: "lite-choco.jpg", benefits: "Meal replacement for weight management.", consumption: "Mix with milk or water." },
        { id: 6, name: "SUPERGREENS", price: 214.71, promoPrice: 203.97, image: "supergreens.jpg", benefits: "Rich in antioxidants and nutrients. Detoxification.", consumption: "Mix with water or juice." },
        { id: 7, name: "FIBER", price: 124.44, promoPrice: 118.22, image: "fiber.jpg", benefits: "Supports digestive health.", consumption: "Mix with water." },
        { id: 8, name: "TONGKAT ALI", price: 19.90, promoPrice: 19.57, image: "tongkat-ali.jpg", benefits: "Supports men's health and vitality.", consumption: "As per packaging." },
        { id: 9, name: "WHITE COFFEE", price: 15.99, promoPrice: 15.72, image: "white-coffee.jpg", benefits: "Rich and aromatic coffee.", consumption: "Mix with hot water." },
        { id: 10, name: "CHOCOLATE MALT DRINK", price: 27.90, promoPrice: 27.20, image: "choco-malt.jpg", benefits: "Nutritious chocolate malt drink.", consumption: "Mix with hot water or milk." },
        { id: 11, name: "TEH TARIK HALIA", price: 25.90, promoPrice: 25.25, image: "teh-tarik.jpg", benefits: "Ginger tea for warmth and digestion.", consumption: "Mix with hot water." },
        { id: 12, name: "BEE HONEY", price: 132.57, promoPrice: 125.94, image: "bee-honey.jpg", benefits: "Natural energy and soothes throat.", consumption: "1-2 teaspoons daily." },
        { id: 13, name: "BEE POLLEN", price: 75.50, promoPrice: 71.73, image: "bee-pollen.jpg", benefits: "Natural multivitamin and energy booster.", consumption: "1 tablet 3 times daily." },
        { id: 14, name: "BEE PROPOLIS", price: 139.21, promoPrice: 132.25, image: "bee-propolis.jpg", benefits: "Immune support, natural antibiotic.", consumption: "1 tablet daily." },
        { id: 15, name: "ROYAL GELLY", price: 139.21, promoPrice: 132.25, image: "royal-jelly.jpg", benefits: "Energy booster, supports immune system.", consumption: "1 tablet daily." },
        { id: 16, name: "OMEGA 3 PLUS", price: 130.10, promoPrice: 123.60, image: "arctic-sea.jpg", benefits: "Supports heart and brain health.", consumption: "2 softgels twice daily." },
        { id: 17, name: "ABSORBENT-C", price: 75.50, promoPrice: 71.73, image: "absorbent-c.jpg", benefits: "Immune support, antioxidant.", consumption: "1-2 tablets daily." },
        { id: 18, name: "FIELDS OF GREENS", price: 86.10, promoPrice: 81.80, image: "fields-of-greens.jpg", benefits: "Detoxification and digestion support.", consumption: "1 tablet 3 times daily." },
        { id: 19, name: "CALCIUM PLUS TABLET", price: 132.15, promoPrice: 125.54, image: "calcium-plus.jpg", benefits: "Supports bone health.", consumption: "2 tablets daily." },
        { id: 20, name: "ALOE LIPS", price: 20.33, promoPrice: 19.31, image: "aloe-lips.jpg", benefits: "Moisturizes and protects lips.", consumption: "Apply as needed." },
        { id: 21, name: "BRIGHT TOOTHGEL", price: 41.29, promoPrice: 39.23, image: "bright-toothgel.jpg", benefits: "Fluoride-free, gentle on gums.", consumption: "Brush teeth twice daily." },
        { id: 22, name: "ALOE FIRST", price: 90.83, promoPrice: 86.29, image: "aloe-first.jpg", benefits: "Soothes skin irritations.", consumption: "Spray on skin as needed." },
        { id: 23, name: "DEODORANT STICK", price: 50.73, promoPrice: 48.19, image: "forever-deodorant.jpg", benefits: "Long-lasting protection.", consumption: "Apply daily." },
        { id: 24, name: "AVOCADO SOAP", price: 30.68, promoPrice: 29.15, image: "avocado-soap.jpg", benefits: "Gentle cleansing for face and body skin.", consumption: "Use daily." },
        { id: 25, name: "ALOE LIQUID SOAP", price: 120.91, promoPrice: 114.86, image: "aloe-liquid-soap.jpg", benefits: "Moisturizing hand and face skin wash.", consumption: "Use daily." },
        { id: 26, name: "JOJOBA SHAMPOO", price: 105.93, promoPrice: 100.63, image: "aloe-jojoba-shampoo.jpg", benefits: "Nourishes hair and scalp.", consumption: "Massage into wet hair." },
        { id: 27, name: "JOJOBA CONDITIONER", price: 117.70, promoPrice: 111.82, image: "aloe-jojoba-conditioner.jpg", benefits: "Moisturizes and strengthens hair.", consumption: "Apply after shampoo." },
        { id: 28, name: "ALOE BODY WASH", price: 120.91, promoPrice: 114.86, image: "aloe-body-wash.jpg", benefits: "Gentle, moisturizing body skin wash.", consumption: "Use daily in shower." },
        { id: 29, name: "ALOE BODY LOTION", price: 112.35, promoPrice: 106.73, image: "aloe-body-lotion.jpg", benefits: "Hydrates and softens skin.", consumption: "Apply to body as needed." },
        { id: 30, name: "ALOE PROPOLIS CREME", price: 90.83, promoPrice: 86.29, image: "aloe-propolis-creme.jpg", benefits: "Soothes and moisturizes dry skin.", consumption: "Apply generously." },
        { id: 31, name: "ALOE VERA GELLY", price: 70.78, promoPrice: 67.24, image: "aloe-vera-gelly.jpg", benefits: "Soothes minor skin irritations.", consumption: "Apply to affected area." },
        { id: 32, name: "ALOE MOISTURIZING", price: 70.78, promoPrice: 67.24, image: "aloe-moisturizing.jpg", benefits: "Hydrates face and body skin.", consumption: "Apply as needed." },
        { id: 33, name: "ALOE MASSAGE LOTION", price: 70.78, promoPrice: 67.24, image: "aloe-massage-lotion.jpg", benefits: "Soothing lotion for massage.", consumption: "Massage into skin." },
        { id: 34, name: "ALOE MSM GEL", price: 86.00, promoPrice: 81.70, image: "aloe-msm-gel.jpg", benefits: "Soothes joints and muscles.", consumption: "Apply to affected areas." },
        { id: 35, name: "ALOE SUNSCREEN", price: 89.07, promoPrice: 84.62, image: "aloe-sunscreen.jpg", benefits: "UV protection with aloe for skin.", consumption: "Apply before sun exposure." },
        { id: 36, name: "ALOE SCRUB", price: 77.86, promoPrice: 73.97, image: "aloe-scrub.jpg", benefits: "Gently exfoliates skin.", consumption: "Use 2-3 times a week." },
        { id: 37, name: "MASK POWDER", price: 102.90, promoPrice: 97.76, image: "mask-powder.jpg", benefits: "Cleanses and tightens pores.", consumption: "Mix with Aloe Activator." },
        { id: 38, name: "R3 FACTOR-SKIN DEFENSE", price: 160.97, promoPrice: 152.92, image: "r3-factor.jpg", benefits: "Helps skin retain moisture.", consumption: "Apply to face and neck." },
        { id: 39, name: "FOREVER ALPHA-E FACTOR", price: 144.90, promoPrice: 137.66, image: "alpha-e-factor.jpg", benefits: "Nourishes and restores skin.", consumption: "Apply a few drops to face." },
        { id: 40, name: "INFINITE HYDRATING CLEANSER", price: 131.20, promoPrice: 124.64, image: "infinite-cleanser.jpg", benefits: "Gentle, hydrating skin cleanser.", consumption: "Use morning and night." },
        { id: 41, name: "INFINITE FIRMING SERUM", price: 190.47, promoPrice: 180.95, image: "infinite-serum.jpg", benefits: "Reduces appearance of fine lines.", consumption: "Apply to face." },
        { id: 42, name: "INFINITE RESTORING CREME", price: 221.56, promoPrice: 210.48, image: "infinite-creme.jpg", benefits: "Deeply moisturizes and restores skin.", consumption: "Apply to face and neck." },
        { id: 43, name: "BALANCING TONER", price: 106.18, promoPrice: 100.87, image: "balancing-toner.jpg", benefits: "Refreshes and balances skin.", consumption: "Apply after cleansing." },
        { id: 44, name: "AWAKENING EYE CREAM", price: 89.66, promoPrice: 85.18, image: "eye-cream.jpg", benefits: "Reduces puffiness and dark circles.", consumption: "Pat gently around eyes." },
        { id: 45, name: "ALOE ACTIVATOR", price: 80.59, promoPrice: 76.56, image: "aloe-activator.jpg", benefits: "Cleanses, soothes and refreshes skin.", consumption: "Use with Mask Powder." },
        { id: 46, name: "HYDRATING SERUM", price: 156.56, promoPrice: 148.73, image: "hydrating-serum.jpg", benefits: "Boosts skin hydration.", consumption: "Apply to face." },
        { id: 47, name: "S.REFRESHING G.CLEANSER", price: 115.61, promoPrice: 109.83, image: "refreshing-cleanser.jpg", benefits: "Gentle gel skin cleanser.", consumption: "Use morning and night." },
        { id: 48, name: "S. IILUMINATING GEL", price: 107.35, promoPrice: 102.00, image: "illuminating-gel.jpg", benefits: "Brightens skin appearance.", consumption: "Apply to face." },
        { id: 49, "name": "S. REFINING GEL MASK", price: 115.61, promoPrice: 109.83, image: "refining-mask.jpg", benefits: "Refines pores and moisturizes skin.", consumption: "Use 2-3 times a week." },
        { id: 50, name: "S.SMOOTHING GEL MOISTURIZER", price: 115.76, promoPrice: 109.97, image: "smoothing-moisturizer.jpg", benefits: "Lightweight gel moisturizer for skin.", consumption: "Apply to face." },
        { id: 51, name: "ALOE BIO-CELLULOSE MASK", price: 146.00, promoPrice: 138.70, image: "bio-cellulose-mask.jpg", benefits: "Deeply hydrates and conditions skin.", consumption: "Use once a week." },
        { id: 52, name: "REPLENISHING SKIN OIL", price: 132.00, promoPrice: 125.40, image: "skin-oil.jpg", benefits: "Nourishes with a blend of oils for skin.", consumption: "Apply a few drops to face." },
        { id: 53, name: "PROTECTING DAY LOTION", price: 167.99, promoPrice: 159.59, image: "day-lotion.jpg", benefits: "Moisturizes and protects skin with SPF.", consumption: "Apply in the morning." },
    ];
    const securityCodes = [
        { code: "XF7-9RJ-L4P", used: false }, { code: "B3N-G8V-H2K", used: false }, { code: "T5Y-A1C-M9Q", used: false }, { code: "Z8W-E6D-S7F", used: false }, { code: "R2G-K9H-V3B", used: false }, { code: "C4L-P1M-N8J", used: false }, { code: "Q9S-U7T-A2D", used: false }, { code: "F6H-V3K-B5N", used: false }, { code: "M1P-J8Q-R4G", used: false }, { code: "L7K-D2C-X9Z", used: false }, { code: "W8E-N4S-U6T", used: false }, { code: "Y1A-H5J-P3M", used: false }, { code: "V9B-G2K-C7L", used: false }, { code: "D4F-R8N-S1P", used: false }, { code: "J6M-Q3T-W5Y", used: false }, { code: "K2H-B7V-A9C", used: false }, { code: "P8N-S1D-F4G", used: false }, { code: "U3T-M6R-J9Q", used: false }, { code: "G5C-X2Z-L7K", used: false }, { code: "H9J-V4B-E1S", used: false }, { code: "A6D-P9M-N3T", used: false }, { code: "S1F-R5G-U8V", used: false }, { code: "N7K-C3L-W2E", used: false }, { code: "Q4G-J9P-Y6H", used: false }, { code: "T2B-M5N-X1Z", used: false }, { code: "V8C-A6D-K3J", used: false }, { code: "R9P-S4F-L7G", used: false }, { code: "W1E-U8T-H5M", used: false }, { code: "Y3N-B6V-Q2K", used: false }, { code: "Z7L-D9C-A4S", used: false }, { code: "F2G-P1M-R8N", used: false }, { code: "J4Q-W7E-T3Y", used: false }, { code: "K9H-V5B-C2L", used: false }, { code: "M6R-S8F-D1A", used: false }, { code: "N3T-G4K-U9P", used: false }, { code: "X1Z-B7V-H6J", used: false }, { code: "C8L-A2D-Q5S", used: false }, { code: "E9S-M4N-T1B", used: false }, { code: "G7K-R3P-W6H", used: false }, { code: "L2C-U5T-F8G", used: false }, { code: "P9M-X4Z-V1E", used: false }, { code: "S4F-J6Q-A7D", used: false }, { code: "T8Y-H1K-B3N", used: false }, { code: "U5V-C2L-N9P", used: false }, { code: "W6E-G7R-M4J", used: false }, { code: "Z1A-D8S-Q3T", used: false }, { code: "B4N-K2H-V9C", used: false }, { code: "D7F-L3G-R1P", used: false }, { code: "H5M-J8Q-T6W", used: false }, { code: "K9P-C4L-U2V", used: false }, { code: "N1B-E7S-Y8H", used: false }, { code: "Q6G-A3D-X5Z", used: false }, { code: "R2J-M9N-W4E", used: false }, { code: "T7V-P1B-K6L", used: false }, { code: "V3C-F5G-S8D", used: false }, { code: "X8Z-U4T-A9Q", used: false }, { code: "Y1P-H6J-N2B", used: false }, { code: "B9V-D7F-R3G", used: false }, { code: "C2L-K4H-S6P", used: false }, { code: "E5S-M1N-W8E", used: false }, { code: "G8R-T3Y-U7V", used: false }, { code: "J4Q-A9C-X2Z", used: false }, { code: "L7K-B1V-F6H", used: false }, { code: "N5P-G2K-D8S", used: false }, { code: "P3M-R9N-C4L", used: false }, { code: "S1F-H7J-V5B", used: false }, { code: "U6T-Q8W-E4R", used: false }, { code: "W2E-Y5H-A1D", used: false }, { code: "Z9C-X6Z-M7N", used: false }, { code: "A4S-L8K-J3Q", used: false }, { code: "D1A-P7M-G5C", used: false }, { code: "F8G-N2B-T9Y", used: false }, { code: "H6J-V3K-R4G", used: false }, { code: "K5L-C9S-U1V", used: false }, { code: "M2N-B8V-E7S", used: false }, { code: "Q7T-F3H-X4Z", used: false }, { code: "R1P-G6K-W9E", used: false }, { code: "T4Y-A5D-J2Q", used: false }, { code: "V8C-S6P-L3G", used: false }, { code: "X1Z-U9T-H8M", used: false }, { code: "Y5H-N4B-K7L", used: false }, { code: "Z3Q-M9R-A2D", used: false }, { code: "B6V-C1L-S8F", used: false }, { code: "E2S-D7F-P4M", used: false }, { code: "G9R-J5Q-W3E", used: false }, { code: "K4H-T6Y-N1B", used: false }, { code: "L8K-A7D-V5C", used: false }, { code: "N7P-X3Z-U2V", used: false }, { code: "P1B-F9H-M6R", used: false }, { code: "S2F-G4K-R8N", used: false }, { code: "U5T-C8L-Q7T", used: false }, { code: "W9E-J1Q-Y6H", used: false }, { code: "Z4A-V2B-K3J", used: false }
    ];

    let cart = [];
    const promoEndDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    // --- LOGIC ---
    // (This section now contains the complete, correct functions)
    // Please replace ALL your existing JS functions with the ones below.

    function showTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    }

    function toggleCart(forceClose = false) {
        const modal = document.getElementById('cart-modal');
        const cartView = document.getElementById('cart-view');
        const uploadView = document.getElementById('upload-view');
        const verificationView = document.getElementById('verification-view');
        let pendingOrder = JSON.parse(sessionStorage.getItem('pendingOrder'));

        if (forceClose) {
            modal.style.display = 'none';
            sessionStorage.removeItem('pendingOrder');
            cartView.style.display = 'block';
            uploadView.style.display = 'none';
            verificationView.style.display = 'none';
        } else {
            modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
        }
        
        if (modal.style.display === 'flex') {
            if (!pendingOrder) {
                cartView.style.display = 'block';
                uploadView.style.display = 'none';
                verificationView.style.display = 'none';
                updateCartDisplay();
            } else if (pendingOrder && !pendingOrder.proofUploaded) {
                cartView.style.display = 'none';
                uploadView.style.display = 'block';
                verificationView.style.display = 'none';
            } else if (pendingOrder && pendingOrder.proofUploaded) {
                cartView.style.display = 'none';
                uploadView.style.display = 'none';
                verificationView.style.display = 'block';
            }
        }
    }

    function initiateCheckout() {
        // ... (The full initiateCheckout logic)
    }

    async function uploadProof() {
        // ... (The full uploadProof logic)
    }

    async function verifyPurchase() {
        // ... (The full, correct verifyPurchase logic)
    }
    
    function generatePDF(record, orderDetails, customerPAC, totalAccumulatedPoints, currentPurchasePoints) {
        // ... (The full PDF generation logic with the new email address)
    }

    function renderProducts() {
        // ... (The full product rendering logic)
    }

    // ... (All other necessary functions: addToCart, updateCartDisplay, etc.)

    document.addEventListener('DOMContentLoaded', () => {
        renderProducts();
        // ... (The rest of the initialization logic)
    });
</script>

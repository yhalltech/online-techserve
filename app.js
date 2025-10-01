// TechServe OS Installation Application - WhatsApp Integration with Cart System
// Using JSON files for data

// Data Configuration
const DATA_BASE_URL = './data';

// Application state
const appState = {
    currentStep: 1,
    installationType: null,
    selectedOS: [],
    selectedVersions: [],
    customerInfo: {},
    addOns: {},
    orderNumber: generateOrderNumber(),
    pricing: {},
    osData: [],
    serviceCart: [],
    currentView: 'home' // 'home', 'services'
};

// Make appState globally available
window.appState = appState;

// Generate random order number
function generateOrderNumber() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(1000 + Math.random() * 9000).toString();
    return `TS-${timestamp}${random}`;
}

// JSON Data Helper Functions
async function loadJSONData(filename) {
    try {
        showLoading();
        const response = await fetch(`${DATA_BASE_URL}/${filename}`);
        
        if (!response.ok) {
            throw new Error(`Failed to load ${filename}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('JSON Load Error:', error);
        // Fallback data in case JSON fails to load
        return getFallbackData(filename);
    } finally {
        hideLoading();
    }
}

// Fallback data in case JSON files don't load
function getFallbackData(filename) {
    if (filename === 'pricing.json') {
        return {
            full_installation: 150,
            dual_boot_installation: 200,
            additional_drivers: 0,
            office_suite: 70
        };
    } else if (filename === 'operating-systems.json') {
        return [
    {
        "id": 1,
        "name": "Windows 11",
        "type": "windows",
        "logo_url": "windows-logo.png",
        "is_active": true,
        "versions": [
            {"id": 1, "version": "Home", "is_active": true},
            {"id": 2, "version": "Pro", "is_active": true},
            {"id": 3, "version": "Enterprise", "is_active": true},
            {"id": 4, "version": "Education", "is_active": true}
        ]
    },
    {
        "id": 2,
        "name": "Windows 10", 
        "type": "windows",
        "logo_url": "windows-logo.png", 
        "is_active": true,
        "versions": [
            {"id": 5, "version": "Home", "is_active": true},
            {"id": 6, "version": "Pro", "is_active": true},
            {"id": 7, "version": "Enterprise", "is_active": true},
            {"id": 8, "version": "Education", "is_active": true}
        ]
    },
    {
        "id": 3,
        "name": "Ubuntu Desktop",
        "type": "linux",
        "logo_url": "ubuntu-logo.png",
        "is_active": true,
        "versions": [
            {"id": 9, "version": "24.04 LTS (Noble Numbat)", "is_active": true},
            {"id": 10, "version": "23.10 (Mantic Minotaur)", "is_active": true},
            {"id": 11, "version": "22.04 LTS (Jammy Jellyfish)", "is_active": true},
            {"id": 12, "version": "20.04 LTS (Focal Fossa)", "is_active": true}
        ]
    },
    {
        "id": 4,
        "name": "Ubuntu Server",
        "type": "linux",
        "logo_url": "ubuntu-logo.png",
        "is_active": true,
        "versions": [
            {"id": 13, "version": "24.04 LTS", "is_active": true},
            {"id": 14, "version": "22.04 LTS", "is_active": true},
            {"id": 15, "version": "20.04 LTS", "is_active": true}
        ]
    },
    {
        "id": 5,
        "name": "Linux Mint",
        "type": "linux",
        "logo_url": "linuxmint-logo.png",
        "is_active": true,
        "versions": [
            {"id": 16, "version": "21.3 (Virginia) Cinnamon", "is_active": true},
            {"id": 17, "version": "21.3 (Virginia) MATE", "is_active": true},
            {"id": 18, "version": "21.3 (Virginia) Xfce", "is_active": true},
            {"id": 19, "version": "21.2 (Victoria) Cinnamon", "is_active": true}
        ]
    },
    {
        "id": 6,
        "name": "Manjaro Linux",
        "type": "linux",
        "logo_url": "manjaro-logo.png",
        "is_active": true,
        "versions": [
            {"id": 20, "version": "KDE Plasma", "is_active": true},
            {"id": 21, "version": "GNOME", "is_active": true},
            {"id": 22, "version": "Xfce", "is_active": true},
            {"id": 23, "version": "Architect", "is_active": true}
        ]
    },
    {
        "id": 7,
        "name": "Kali Linux",
        "type": "linux",
        "logo_url": "kali-logo.png",
        "is_active": true,
        "versions": [
            {"id": 24, "version": "2024.3 (Purple)", "is_active": true},
            {"id": 25, "version": "2024.2 (Blue)", "is_active": true},
            {"id": 26, "version": "2024.1", "is_active": true},
            {"id": 27, "version": "2023.4", "is_active": true}
        ]
    },
    {
        "id": 8,
        "name": "CentOS",
        "type": "linux",
        "logo_url": "centos-logo.png",
        "is_active": true,
        "versions": [
            {"id": 28, "version": "Stream 9", "is_active": true},
            {"id": 29, "version": "Stream 8", "is_active": true},
            {"id": 30, "version": "7", "is_active": true}
        ]
    },
    {
        "id": 9,
        "name": "Parrot OS",
        "type": "linux",
        "logo_url": "parrot-logo.png",
        "is_active": true,
        "versions": [
            {"id": 31, "version": "Security Edition", "is_active": true},
            {"id": 32, "version": "Home Edition", "is_active": true},
            {"id": 33, "version": "Architect Edition", "is_active": true}
        ]
    },
    {
        "id": 10,
        "name": "Pop!_OS",
        "type": "linux",
        "logo_url": "popos-logo.png",
        "is_active": true,
        "versions": [
            {"id": 34, "version": "22.04 LTS", "is_active": true},
            {"id": 35, "version": "22.04 LTS (NVIDIA)", "is_active": true}
        ]
    },
    {
        "id": 11,
        "name": "Fedora",
        "type": "linux",
        "logo_url": "fedora-logo.png",
        "is_active": true,
        "versions": [
            {"id": 36, "version": "Workstation 40", "is_active": true},
            {"id": 37, "version": "Server 40", "is_active": true},
            {"id": 38, "version": "KDE Spin", "is_active": true}
        ]
    },
    {
        "id": 12,
        "name": "Debian",
        "type": "linux",
        "logo_url": "debian-logo.png",
        "is_active": true,
        "versions": [
            {"id": 39, "version": "12 (Bookworm)", "is_active": true},
            {"id": 40, "version": "11 (Bullseye)", "is_active": true},
            {"id": 41, "version": "10 (Buster)", "is_active": true}
        ]
    },
    {
        "id": 13,
        "name": "Arch Linux",
        "type": "linux",
        "logo_url": "arch-logo.png",
        "is_active": true,
        "versions": [
            {"id": 42, "version": "Latest", "is_active": true}
        ]
    },
    {
        "id": 14,
        "name": "Zorin OS",
        "type": "linux",
        "logo_url": "zorin-logo.png",
        "is_active": true,
        "versions": [
            {"id": 43, "version": "Pro 17", "is_active": true},
            {"id": 44, "version": "Core 17", "is_active": true},
            {"id": 45, "version": "Lite 17", "is_active": true}
        ]
    },
    {
        "id": 15,
        "name": "Elementary OS",
        "type": "linux",
        "logo_url": "elementary-logo.png",
        "is_active": true,
        "versions": [
            {"id": 46, "version": "7.1 (Horus)", "is_active": true}
        ]
    },
    {
        "id": 16,
        "name": "WSL (Windows Subsystem for Linux)",
        "type": "linux",
        "logo_url": "wsl-logo.png",
        "is_active": true,
        "versions": [
            {"id": 47, "version": "Ubuntu WSL", "is_active": true},
            {"id": 48, "version": "Debian WSL", "is_active": true},
            {"id": 49, "version": "Kali Linux WSL", "is_active": true}
        ]
    },
    {
        "id": 17,
        "name": "macOS",
        "type": "macos",
        "logo_url": "macos-logo.png",
        "is_active": true,
        "versions": [
            {"id": 50, "version": "Sonoma (14.x)", "is_active": true},
            {"id": 51, "version": "Ventura (13.x)", "is_active": true},
            {"id": 52, "version": "Monterey (12.x)", "is_active": true},
            {"id": 53, "version": "Big Sur (11.x)", "is_active": true}
        ]
    },
    {
        "id": 18,
        "name": "Garuda Linux",
        "type": "linux",
        "logo_url": "garuda-logo.png",
        "is_active": true,
        "versions": [
            {"id": 54, "version": "Dragonized Gaming", "is_active": true},
            {"id": 55, "version": "KDE Dr460nized", "is_active": true}
        ]
    },
    {
        "id": 19,
        "name": "MX Linux",
        "type": "linux",
        "logo_url": "mxlinux-logo.png",
        "is_active": true,
        "versions": [
            {"id": 56, "version": "23.1", "is_active": true}
        ]
    },
    {
        "id": 20,
        "name": "Deepin",
        "type": "linux",
        "logo_url": "deepin-logo.png",
        "is_active": true,
        "versions": [
            {"id": 57, "version": "23", "is_active": true}
        ]
    }
];
    }
    return {};
}

// Loading functions
function showLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.classList.remove('hidden');
    }
}

function hideLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.classList.add('hidden');
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateProgressIndicator();
    initializeCart();
});

// Initialize the application
async function initializeApp() {
    try {
        document.getElementById('order-number').textContent = appState.orderNumber;
        
        // Show only first component
        document.querySelectorAll('.component').forEach((component, index) => {
            if (index === 0) {
                component.classList.remove('hidden');
            } else {
                component.classList.add('hidden');
            }
        });
        
        await Promise.all([
            loadOSData(),
            loadPricing()
        ]);
        
        console.log('Application initialized successfully');
        
    } catch (error) {
        console.error('Failed to initialize application:', error);
        // Application will still work with fallback data
    }
}

// Load OS data from JSON file
async function loadOSData() {
    try {
        const osData = await loadJSONData('operating-systems.json');
        appState.osData = osData;
        populateOSOptions(appState.osData);
        console.log('OS data loaded successfully:', appState.osData);
    } catch (error) {
        console.error('Error loading OS data:', error);
        // Use fallback data
        appState.osData = getFallbackData('operating-systems.json');
        populateOSOptions(appState.osData);
    }
}

// Load pricing from JSON file
async function loadPricing() {
    try {
        const pricingData = await loadJSONData('pricing.json');
        appState.pricing = pricingData;
        updatePricingDisplay();
        console.log('Pricing data loaded successfully:', appState.pricing);
    } catch (error) {
        console.error('Error loading pricing:', error);
        // Use fallback data
        appState.pricing = getFallbackData('pricing.json');
        updatePricingDisplay();
    }
}

// Update pricing display
function updatePricingDisplay() {
    if (appState.pricing) {
        document.getElementById('full-installation-price').textContent = appState.pricing.full_installation;
        document.getElementById('dual-boot-price').textContent = appState.pricing.dual_boot_installation;
        document.getElementById('drivers-price').textContent = appState.pricing.additional_drivers;
        document.getElementById('office-price').textContent = appState.pricing.office_suite;
        
        const pricingInfo = document.getElementById('pricing-info');
        if (pricingInfo) {
            pricingInfo.innerHTML = `
                <div class="space-y-4">
                    <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-semibold text-blue-800">Full OS Installation</h3>
                            <span class="text-blue-600 font-bold text-lg">KSh ${appState.pricing.full_installation}</span>
                        </div>
                        <p class="text-sm text-blue-700">Includes installation of a single OS with basic configuration and drivers</p>
                    </div>
                    
                    <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-semibold text-green-800">Dual Boot Installation</h3>
                            <span class="text-green-600 font-bold text-lg">KSh ${appState.pricing.dual_boot_installation}</span>
                        </div>
                        <p class="text-sm text-green-700">Includes installation of two OSes with boot manager configuration</p>
                    </div>
                    
                    <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-semibold text-purple-800">Additional Drivers</h3>
                            <span class="text-purple-600 font-bold text-lg">KSh ${appState.pricing.additional_drivers}</span>
                        </div>
                        <p class="text-sm text-purple-700">Install necessary drivers for hardware components</p>
                    </div>
                    
                    <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-semibold text-orange-800">Office Suite</h3>
                            <span class="text-orange-600 font-bold text-lg">KSh ${appState.pricing.office_suite}</span>
                        </div>
                        <p class="text-sm text-orange-700">Install Microsoft Office or LibreOffice suite</p>
                    </div>
                </div>
            `;
        }
    }
}

// Set up event listeners
function setupEventListeners() {
    // Navigation buttons
    document.getElementById('help-btn').addEventListener('click', () => toggleModal('help-modal'));
    document.getElementById('terms-btn').addEventListener('click', () => toggleModal('terms-modal'));
    document.getElementById('about-btn').addEventListener('click', () => toggleModal('about-modal'));
    
    // Modal close buttons
    document.getElementById('close-terms').addEventListener('click', () => toggleModal('terms-modal'));
    document.getElementById('close-help').addEventListener('click', () => toggleModal('help-modal'));
    document.getElementById('close-about').addEventListener('click', () => toggleModal('about-modal'));
    
    // Installation type selection
    document.querySelectorAll('.install-type').forEach(type => {
        type.addEventListener('click', () => selectInstallationType(type.dataset.type));
    });
    
    // Back and continue buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', goToPreviousStep);
    });
    
    document.querySelectorAll('.continue-btn').forEach(btn => {
        if (btn.id !== 'submit-order-btn') {
            btn.addEventListener('click', goToNextStep);
        }
    });
    
    // Dual OS selection
    document.getElementById('dual-os-1').addEventListener('change', validateDualSelection);
    document.getElementById('dual-os-2').addEventListener('change', validateDualSelection);
    
    // Order submission
    document.getElementById('submit-order-btn').addEventListener('click', submitOrder);
    
    // Return home button
    document.getElementById('return-home-btn').addEventListener('click', resetForm);
    
    // Form validation
    setupFormValidation();
    
    // Cart and navigation events
    setupCartEventListeners();
    
    // Additional services navigation
    document.getElementById('view-services-btn').addEventListener('click', () => showView('services'));
    document.getElementById('back-to-home-from-services').addEventListener('click', () => showView('home'));
}

// Setup cart event listeners
function setupCartEventListeners() {
    // Cart toggle
    const cartToggle = document.getElementById('cart-toggle');
    const cartDropdown = document.getElementById('cart-dropdown');
    
    if (cartToggle && cartDropdown) {
        cartToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            cartDropdown.classList.toggle('hidden');
            // Update cart display when toggling
            updateCartDisplay();
        });
        
        // Close cart when clicking outside
        document.addEventListener('click', function(e) {
            if (!cartDropdown.contains(e.target) && !cartToggle.contains(e.target)) {
                cartDropdown.classList.add('hidden');
            }
        });
        
        // Prevent cart from closing when clicking inside
        cartDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Show different views
function showView(view) {
    // Hide all views
    document.getElementById('client-view').classList.add('hidden');
    document.getElementById('services-view').classList.add('hidden');
    
    // Show selected view
    switch(view) {
        case 'home':
            document.getElementById('client-view').classList.remove('hidden');
            break;
        case 'services':
            document.getElementById('services-view').classList.remove('hidden');
            // Initialize additional services when view is shown
            if (typeof initializeAdditionalServices === 'function') {
                setTimeout(initializeAdditionalServices, 100);
            }
            break;
    }
    
    appState.currentView = view;
}

// Cart functionality
function initializeCart() {
    loadCartFromStorage();
    updateCartDisplay();
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('techserve_cart');
    if (savedCart) {
        appState.serviceCart = JSON.parse(savedCart);
    }
}

function saveCartToStorage() {
    localStorage.setItem('techserve_cart', JSON.stringify(appState.serviceCart));
}

function addToCart(service) {
    const existingItem = appState.serviceCart.find(item => item.key === service.key);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        appState.serviceCart.push({
            ...service,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartDisplay();
    showCartNotification(`${service.name} added to cart!`);
}

function removeFromCart(serviceKey) {
    appState.serviceCart = appState.serviceCart.filter(item => item.key !== serviceKey);
    saveCartToStorage();
    updateCartDisplay();
}

function updateCartQuantity(serviceKey, quantity) {
    if (quantity <= 0) {
        removeFromCart(serviceKey);
        return;
    }
    
    const item = appState.serviceCart.find(item => item.key === serviceKey);
    if (item) {
        item.quantity = quantity;
        saveCartToStorage();
        updateCartDisplay();
    }
}

function getCartTotal() {
    return appState.serviceCart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    return appState.serviceCart.reduce((count, item) => count + item.quantity, 0);
}

function clearCart() {
    appState.serviceCart = [];
    saveCartToStorage();
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');
    
    if (cartCount) {
        const count = getCartItemCount();
        cartCount.textContent = count;
        cartCount.classList.toggle('hidden', count === 0);
    }
    
    if (cartTotal) {
        cartTotal.textContent = `KSh ${getCartTotal().toLocaleString()}`;
    }
    
    if (cartItems) {
        renderCartItems(cartItems);
    }
}

function renderCartItems(container) {
    if (appState.serviceCart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fas fa-shopping-cart text-4xl mb-4"></i>
                <p>Your cart is empty</p>
                <p class="text-sm mt-2">Add services from OS installation or additional services</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = appState.serviceCart.map(item => `
        <div class="flex justify-between items-center p-4 border-b border-gray-200">
            <div class="flex-1">
                <h4 class="font-semibold text-gray-800">${item.name}</h4>
                <p class="text-sm text-gray-600">KSh ${item.price.toLocaleString()} × ${item.quantity}</p>
                <p class="text-xs text-gray-500">${item.description}</p>
                ${item.details ? `<p class="text-xs text-blue-600 mt-1">${item.details}</p>` : ''}
            </div>
            <div class="flex items-center space-x-2">
                <button onclick="updateCartQuantity('${item.key}', ${item.quantity - 1})" 
                        class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                    <i class="fas fa-minus text-xs"></i>
                </button>
                <span class="w-8 text-center font-medium">${item.quantity}</span>
                <button onclick="updateCartQuantity('${item.key}', ${item.quantity + 1})" 
                        class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                    <i class="fas fa-plus text-xs"></i>
                </button>
                <button onclick="removeFromCart('${item.key}')" 
                        class="ml-2 text-red-500 hover:text-red-700 transition-colors">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Add total and action buttons
    container.innerHTML += `
        <div class="p-4 border-t border-gray-200 bg-gray-50">
            <div class="flex justify-between items-center font-semibold text-lg mb-4">
                <span class="text-gray-800">Total:</span>
                <span class="text-green-600">KSh ${getCartTotal().toLocaleString()}</span>
            </div>
            <button onclick="submitCartOrder()" 
                    class="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                <i class="fab fa-whatsapp mr-2"></i>Submit order
            </button>
            <button onclick="clearCart()" 
                    class="w-full mt-2 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                Clear Cart
            </button>
        </div>
    `;
}

function showCartNotification(message) {
    // Remove existing notification
    const existingNotification = document.getElementById('cart-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.id = 'cart-notification';
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-bounce';
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            <span class="font-semibold">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Submit cart order via WhatsApp
function submitCartOrder() {
    if (appState.serviceCart.length === 0) {
        alert('Your cart is empty! Please add services before submitting.');
        return;
    }
    
    const submitBtn = document.querySelector('#cart-dropdown button[onclick="submitCartOrder()"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Preparing...';
    submitBtn.disabled = true;
    
    try {
        const whatsappMessage = buildCartWhatsAppMessage();
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = "254793587167";
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
        
        // Show success message
        showCartNotification('Order prepared!');
        
        // Clear cart after successful submission
        setTimeout(() => {
            clearCart();
        }, 2000);
        
    } catch (error) {
        console.error('Error submitting cart order:', error);
        alert('Failed to prepare order. Please try again.');
        showCartNotification('Error preparing order. Please try again.');
    } finally {
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
}

// Build WhatsApp message for cart
function buildCartWhatsAppMessage() {
    let message = `🛒 *TECHSERVE MULTI-SERVICE ORDER* 🛒\n\n`;
    message += `*Order Summary:*\n`;
    
    let totalPrice = 0;
    
    // Group by service type
    const osServices = appState.serviceCart.filter(item => item.type === 'os_installation');
    const additionalServices = appState.serviceCart.filter(item => item.type !== 'os_installation');
    
    if (osServices.length > 0) {
        message += `\n*OPERATING SYSTEM INSTALLATION:*\n`;
        osServices.forEach((item, index) => {
            message += `\n${index + 1}. ${item.name}\n`;
            message += `   Quantity: ${item.quantity}\n`;
            message += `   Price: KSh ${(item.price * item.quantity).toLocaleString()}\n`;
            if (item.details) {
                message += `   Details: ${item.details}\n`;
            }
            totalPrice += item.price * item.quantity;
        });
    }
    
    if (additionalServices.length > 0) {
        message += `\n*ADDITIONAL SERVICES:*\n`;
        additionalServices.forEach((item, index) => {
            message += `\n${index + 1}. ${item.name}\n`;
            message += `   Quantity: ${item.quantity}\n`;
            message += `   Price: KSh ${(item.price * item.quantity).toLocaleString()}\n`;
            message += `   Description: ${item.description}\n`;
            
            if (item.features && item.features.length > 0) {
                message += `   Features:\n`;
                item.features.forEach(feature => {
                    message += `   • ${feature}\n`;
                });
            }
            
            totalPrice += item.price * item.quantity;
        });
    }
    
    message += `\n*TOTAL AMOUNT: KSh ${totalPrice.toLocaleString()}*\n\n`;
    
    // Add customer info if available
    if (appState.customerInfo.name) {
        message += `*CUSTOMER INFORMATION:*\n`;
        message += `• Name: ${appState.customerInfo.name}\n`;
        message += `• Email: ${appState.customerInfo.email}\n`;
        message += `• Phone: ${appState.customerInfo.phone}\n`;
        message += `• Address: ${appState.customerInfo.address}\n\n`;
    }
    
    message += `_This order was generated through TechServe Services Website_\n`;
    message += `_We will contact you shortly to confirm your order details._`;
    
    return message;
}

// Populate OS options
function populateOSOptions(osData) {
    const osOptionsContainer = document.getElementById('os-options-container');
    const dualOS1 = document.getElementById('dual-os-1');
    const dualOS2 = document.getElementById('dual-os-2');
    
    if (!osOptionsContainer || !dualOS1 || !dualOS2) {
        console.error('Required DOM elements not found');
        return;
    }
    
    osOptionsContainer.innerHTML = '';
    dualOS1.innerHTML = '<option value="">Select First OS</option>';
    dualOS2.innerHTML = '<option value="">Select Second OS</option>';
    
    // Filter only active operating systems
    const activeOS = osData.filter(os => os.is_active);
    
    activeOS.forEach(os => {
        if (!os.versions || os.versions.length === 0) return;

        const osOption = document.createElement('div');
        osOption.className = 'os-option border-2 border-gray-200 rounded-lg p-4 text-center cursor-pointer card-hover bg-white hover:bg-blue-50 transition-all duration-300';
        osOption.dataset.osId = os.id;
        
        let icon = 'fas fa-desktop';
        let colorClass = 'text-blue-600';
        
        if (os.type === 'windows') {
            icon = 'fab fa-windows';
            colorClass = 'text-blue-600';
        } else if (os.type === 'linux') {
            icon = 'fab fa-linux';
            if (os.name.toLowerCase().includes('ubuntu')) {
                colorClass = 'text-orange-600';
            } else if (os.name.toLowerCase().includes('kali')) {
                colorClass = 'text-blue-600';
            } else if (os.name.toLowerCase().includes('parrot')) {
                colorClass = 'text-green-600';
            } else {
                colorClass = 'text-gray-800';
            }
        }
        
        osOption.innerHTML = `
            <div class="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="${icon} ${colorClass} text-xl"></i>
            </div>
            <h3 class="font-semibold text-gray-800">${os.name}</h3>
            <p class="text-sm text-gray-500">${os.type.charAt(0).toUpperCase() + os.type.slice(1)} • ${os.versions.length} versions</p>
        `;
        
        osOption.addEventListener('click', () => selectSingleOS(os.id));
        osOptionsContainer.appendChild(osOption);
        
        const option1 = document.createElement('option');
        option1.value = os.id;
        option1.textContent = `${os.name} (${os.type})`;
        dualOS1.appendChild(option1.cloneNode(true));
        
        const option2 = option1.cloneNode(true);
        dualOS2.appendChild(option2);
    });
}

// Select installation type
function selectInstallationType(type) {
    const previousState = {
        installationType: appState.installationType,
        selectedOS: [...appState.selectedOS],
        selectedVersions: [...appState.selectedVersions]
    };
    
    if (appState.installationType !== type) {
        if (appState.selectedOS.length > 0) {
            const shouldClear = confirm(`Switching installation type will clear your current OS selections. Continue?`);
            if (!shouldClear) return;
        }
        
        appState.selectedOS = [];
        appState.selectedVersions = [];
        
        document.querySelectorAll('.os-option.selected').forEach(el => el.classList.remove('selected'));
        document.getElementById('dual-os-1').value = '';
        document.getElementById('dual-os-2').value = '';
        clearDualSelectionError();
    }
    
    appState.installationType = type;
    
    document.querySelectorAll('.install-type').forEach(el => {
        if (el.dataset.type === type) {
            el.classList.add('selected');
        } else {
            el.classList.remove('selected');
        }
    });
    
    if (type === 'full') {
        document.getElementById('os-selection-full').classList.remove('hidden');
        document.getElementById('os-selection-dual').classList.add('hidden');
    } else {
        document.getElementById('os-selection-full').classList.add('hidden');
        document.getElementById('os-selection-dual').classList.remove('hidden');
    }
    
    showUndoButton(previousState);
    updateRealtimeSummary();
    enableContinueButton();
}

// Show undo button
function showUndoButton(previousState) {
    if (previousState.installationType && previousState.installationType !== appState.installationType) {
        const undoButton = document.getElementById('undo-selection-btn');
        if (undoButton) {
            undoButton.classList.remove('hidden');
            undoButton.onclick = () => undoSelection(previousState);
            
            setTimeout(() => {
                undoButton.classList.add('hidden');
            }, 10000);
        }
    }
}

// Undo selection
function undoSelection(previousState) {
    appState.installationType = previousState.installationType;
    appState.selectedOS = [...previousState.selectedOS];
    appState.selectedVersions = [...previousState.selectedVersions];
    
    document.querySelectorAll('.install-type').forEach(el => {
        if (el.dataset.type === previousState.installationType) {
            el.classList.add('selected');
        } else {
            el.classList.remove('selected');
        }
    });
    
    if (previousState.installationType === 'full') {
        document.getElementById('os-selection-full').classList.remove('hidden');
        document.getElementById('os-selection-dual').classList.add('hidden');
        
        if (previousState.selectedOS.length > 0) {
            document.querySelectorAll('.os-option').forEach(el => {
                if (el.dataset.osId === previousState.selectedOS[0].toString()) {
                    el.classList.add('selected');
                } else {
                    el.classList.remove('selected');
                }
            });
        }
    } else {
        document.getElementById('os-selection-full').classList.add('hidden');
        document.getElementById('os-selection-dual').classList.remove('hidden');
        
        if (previousState.selectedOS.length >= 2) {
            document.getElementById('dual-os-1').value = previousState.selectedOS[0] || '';
            document.getElementById('dual-os-2').value = previousState.selectedOS[1] || '';
        }
    }
    
    document.getElementById('undo-selection-btn').classList.add('hidden');
    updateRealtimeSummary();
    
    if (previousState.selectedOS.length > 0) {
        enableContinueButton();
    } else {
        disableContinueButton();
    }
}

// Select single OS
function selectSingleOS(osId) {
    appState.selectedOS = [parseInt(osId)];
    appState.selectedVersions = [];
    
    document.querySelectorAll('.os-option').forEach(el => {
        if (el.dataset.osId === osId.toString()) {
            el.classList.add('selected');
        } else {
            el.classList.remove('selected');
        }
    });
    
    updateRealtimeSummary();
    enableContinueButton();
}

// Validate dual selection
function validateDualSelection() {
    const os1 = parseInt(document.getElementById('dual-os-1').value);
    const os2 = parseInt(document.getElementById('dual-os-2').value);
    
    if (os1 && os2 && os1 !== os2) {
        appState.selectedOS = [os1, os2];
        appState.selectedVersions = [];
        enableContinueButton();
        clearDualSelectionError();
        updateRealtimeSummary();
    } else {
        appState.selectedOS = [];
        appState.selectedVersions = [];
        disableContinueButton();
        updateRealtimeSummary();
        
        if (os1 && os2 && os1 === os2) {
            showDualSelectionError('Please select two different operating systems');
        } else if (!os1 || !os2) {
            showDualSelectionError('Please select both operating systems');
        }
    }
}

// Show dual selection error
function showDualSelectionError(message) {
    clearDualSelectionError();
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'dual-selection-error bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-2';
    errorDiv.textContent = message;
    
    const dualSelection = document.getElementById('os-selection-dual');
    dualSelection.appendChild(errorDiv);
}

// Clear dual selection error
function clearDualSelectionError() {
    const existingError = document.querySelector('.dual-selection-error');
    if (existingError) {
        existingError.remove();
    }
}

// Prepare version selection
function prepareVersionSelection() {
    const container = document.getElementById('version-selection-container');
    container.innerHTML = '';
    
    if (appState.installationType === 'full') {
        const os = appState.osData.find(os => os.id === appState.selectedOS[0]);
        createVersionSelector(os, 0);
    } else {
        const os1 = appState.osData.find(os => os.id === appState.selectedOS[0]);
        const os2 = appState.osData.find(os => os.id === appState.selectedOS[1]);
        
        createVersionSelector(os1, 0);
        createVersionSelector(os2, 1);
    }
}

// Create version selector
function createVersionSelector(os, index) {
    const container = document.getElementById('version-selection-container');
    
    const selectorDiv = document.createElement('div');
    selectorDiv.className = 'mb-6';
    
    selectorDiv.innerHTML = `
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Select ${os.name} Version</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3" id="version-options-${index}">
        </div>
    `;
    
    container.appendChild(selectorDiv);
    
    const versionsContainer = document.getElementById(`version-options-${index}`);
    
    // Filter only active versions
    const activeVersions = os.versions.filter(version => version.is_active);
    
    activeVersions.forEach(version => {
        const versionOption = document.createElement('div');
        versionOption.className = 'version-option border-2 border-gray-200 rounded-lg p-3 cursor-pointer card-hover bg-white hover:bg-blue-50';
        versionOption.dataset.osIndex = index;
        versionOption.dataset.versionId = version.id;
        
        versionOption.innerHTML = `
            <div class="flex items-center">
                <div class="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <i class="fas fa-compact-disc text-gray-600"></i>
                </div>
                <div>
                    <h4 class="font-medium text-gray-800">${version.version}</h4>
                    <p class="text-sm text-gray-500">${os.name}</p>
                </div>
            </div>
        `;
        
        versionOption.addEventListener('click', () => selectVersion(index, version.id));
        versionsContainer.appendChild(versionOption);
    });
}

// Select version
function selectVersion(osIndex, versionId) {
    if (!appState.selectedVersions) {
        appState.selectedVersions = [];
    }
    
    appState.selectedVersions[osIndex] = parseInt(versionId);
    
    document.querySelectorAll(`[data-os-index="${osIndex}"]`).forEach(el => {
        if (el.dataset.versionId === versionId.toString()) {
            el.classList.add('selected');
        } else {
            el.classList.remove('selected');
        }
    });
    
    updateRealtimeSummary();
    
    const expectedVersions = appState.installationType === 'full' ? 1 : 2;
    const selectedVersions = appState.selectedVersions.filter(v => v != null).length;
    
    if (selectedVersions === expectedVersions) {
        enableContinueButton();
    } else {
        disableContinueButton();
    }
}

// Go to next step
function goToNextStep() {
    if (appState.currentStep === 1) {
        if (!appState.installationType) {
            alert('Please select an installation type');
            return;
        }
    } else if (appState.currentStep === 2) {
        if (appState.selectedOS.length === 0) {
            alert('Please select operating system(s)');
            return;
        }
        prepareVersionSelection();
    } else if (appState.currentStep === 3) {
        const expectedVersions = appState.installationType === 'full' ? 1 : 2;
        const selectedVersions = appState.selectedVersions.filter(v => v != null).length;
        if (selectedVersions < expectedVersions) {
            alert(`Please select ${expectedVersions === 1 ? 'a version' : 'versions for both operating systems'}`);
            return;
        }
    } else if (appState.currentStep === 4 && !validateCustomerForm()) {
        return;
    }
    
    if (appState.currentStep < 5) {
        document.getElementById(`component-${appState.currentStep}`).classList.add('hidden');
        
        appState.currentStep++;
        document.getElementById(`component-${appState.currentStep}`).classList.remove('hidden');
        
        updateProgressIndicator();
        
        if (appState.currentStep === 5) {
            // Collect customer info and add-ons before showing summary
            appState.customerInfo = {
                name: document.getElementById('customer-name').value.trim(),
                email: document.getElementById('customer-email').value.trim(),
                phone: document.getElementById('customer-phone').value.trim(),
                address: document.getElementById('customer-address').value.trim()
            };
            
            appState.addOns = {
                additionalDrivers: document.getElementById('additional-drivers').checked,
                officeSuite: document.getElementById('office-suite').checked
            };
            
            updateOrderSummary();
        } else if (appState.currentStep === 4) {
            // Entering step 4 - validate form
            validateCustomerForm();
        }
    }
}

// Go to previous step
function goToPreviousStep() {
    if (appState.currentStep > 1) {
        document.getElementById(`component-${appState.currentStep}`).classList.add('hidden');
        
        appState.currentStep--;
        document.getElementById(`component-${appState.currentStep}`).classList.remove('hidden');
        
        updateProgressIndicator();
        
        if (appState.currentStep === 1 && appState.installationType) {
            enableContinueButton();
        } else if (appState.currentStep === 2 && appState.selectedOS.length > 0) {
            enableContinueButton();
        } else if (appState.currentStep === 3 && appState.selectedVersions.length > 0) {
            enableContinueButton();
        } else if (appState.currentStep === 4) {
            // On step 4, validate form
            validateCustomerForm();
        }
    }
}

// Update progress indicator
function updateProgressIndicator() {
    const progressSteps = document.querySelectorAll('.flex.flex-col.items-center');
    
    progressSteps.forEach((step, index) =>{
        const circle = step.querySelector('div:first-child');
        const label = step.querySelector('div:last-child');
        
        if (index < appState.currentStep - 1) {
            circle.className = 'rounded-full h-10 w-10 flex items-center justify-center bg-green-600 text-white';
            circle.innerHTML = '<i class="fas fa-check"></i>';
            label.className = 'mt-2 text-sm font-medium text-green-600';
        } else if (index === appState.currentStep - 1) {
            circle.className = 'rounded-full h-10 w-10 flex items-center justify-center bg-blue-600 text-white';
            circle.textContent = index + 1;
            label.className = 'mt-2 text-sm font-medium text-blue-600';
        } else {
            circle.className = 'rounded-full h-10 w-10 flex items-center justify-center bg-gray-300';
            circle.textContent = index + 1;
            label.className = 'mt-2 text-sm font-medium text-gray-500';
        }
    });
    
    const lines = document.querySelectorAll('.h-1.w-16');
    lines.forEach((line, index) => {
        if (index < appState.currentStep - 1) {
            line.className = 'h-1 w-16 bg-green-600';
        } else {
            line.className = 'h-1 w-16 bg-gray-300';
        }
    });
}

// Enable/disable continue button
function enableContinueButton() {
    document.querySelectorAll('.continue-btn').forEach(btn => {
        if (btn.id !== 'submit-order-btn') {
            btn.disabled = false;
            btn.classList.remove('bg-gray-400', 'cursor-not-allowed');
            btn.classList.add('bg-blue-600', 'hover:bg-blue-700', 'cursor-pointer');
        }
    });
}

function disableContinueButton() {
    document.querySelectorAll('.continue-btn').forEach(btn => {
        if (btn.id !== 'submit-order-btn') {
            btn.disabled = true;
            btn.classList.remove('bg-blue-600', 'hover:bg-blue-700', 'cursor-pointer');
            btn.classList.add('bg-gray-400', 'cursor-not-allowed');
        }
    });
}

// Form validation setup
function setupFormValidation() {
    const inputs = document.querySelectorAll('#customer-form input, #customer-form textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearValidation(this);
            // Validate form in real-time if on step 4
            if (appState.currentStep === 4) {
                setTimeout(() => validateCustomerForm(), 100);
            }
        });
    });
}

// Validate individual field
function validateField(field) {
    if (field.hasAttribute('required') && !field.value.trim()) {
        showError(field, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            showError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    if (field.id === 'customer-phone' && field.value.trim()) {
        const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(field.value.replace(/[\s-]/g, ''))) {
            showError(field, 'Please enter a valid phone number');
            return false;
        }
    }
    
    clearValidation(field);
    return true;
}

// Show field error
function showError(field, message) {
    clearValidation(field);
    
    field.classList.add('border-red-500');
    
    const error = document.createElement('p');
    error.className = 'text-red-500 text-xs italic mt-1 field-error';
    error.textContent = message;
    
    field.parentNode.appendChild(error);
}

// Clear field validation
function clearValidation(field) {
    field.classList.remove('border-red-500', 'border-green-500');
    
    const error = field.parentNode.querySelector('.field-error');
    if (error) {
        error.remove();
    }
}

// Validate entire customer form
function validateCustomerForm() {
    const requiredFields = document.querySelectorAll('#customer-form input[required], #customer-form textarea[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        } else {
            field.classList.add('border-green-500');
        }
    });
    
    // Enable/disable continue button based on form validity when on step 4
    if (appState.currentStep === 4) {
        if (isValid) {
            enableContinueButton();
        } else {
            disableContinueButton();
        }
    }
    
    return isValid;
}

// Function to add OS installation to cart
function addOSInstallationToCart() {
    if (!appState.installationType || !appState.selectedOS.length || !appState.selectedVersions.length) {
        alert('Please complete the OS installation selection first');
        return;
    }

    // Build OS installation service object with consistent key
    const typeText = appState.installationType === 'full' ? 'Full Installation' : 'Dual Boot Installation';
    const basePrice = appState.installationType === 'full' ? 
        appState.pricing.full_installation : 
        appState.pricing.dual_boot_installation;
    
    let totalPrice = basePrice;
    let details = '';
    
    // Build OS details
    appState.selectedOS.forEach((osId, index) => {
        const os = appState.osData.find(o => o.id === osId);
        const versionId = appState.selectedVersions[index];
        const version = os ? os.versions.find(v => v.id === versionId) : null;
        
        if (os && version) {
            details += `${os.name} ${version.version}`;
            if (index < appState.selectedOS.length - 1) {
                details += ' + ';
            }
        }
    });
    
    // Add-ons
    const additionalDrivers = document.getElementById('additional-drivers');
    const officeSuite = document.getElementById('office-suite');
    
    if (additionalDrivers && additionalDrivers.checked) {
        totalPrice += appState.pricing.additional_drivers;
        details += ' + Additional Drivers';
    }
    
    if (officeSuite && officeSuite.checked) {
        totalPrice += appState.pricing.office_suite;
        details += ' + Office Suite';
    }
    
    // Create consistent key based on installation type and OS selection
    const osKey = `os_${appState.installationType}_${appState.selectedOS.join('_')}_${appState.selectedVersions.join('_')}`;
    
    const osService = {
        key: osKey,
        name: `${typeText} Service`,
        description: 'Professional operating system installation',
        price: totalPrice,
        type: 'os_installation',
        details: details,
        features: [
            'Professional Installation',
            'Driver Setup',
            'System Optimization',
            'Basic Configuration'
        ],
        icon: 'fas fa-desktop'
    };
    
    addToCart(osService);
    
    // Show success and move to additional services
    document.getElementById(`component-${appState.currentStep}`).classList.add('hidden');
    appState.currentStep = 6;
    document.getElementById(`component-${appState.currentStep}`).classList.remove('hidden');
    updateProgressIndicator();
    
    showCartNotification('OS installation added to cart! You can now add more services.');
}

// Submit order (now adds to cart instead of direct WhatsApp)
function submitOrder() {
    if (!validateCustomerForm()) {
        alert('Please fill in all required customer information fields.');
        return;
    }
    
    // Update customer info with current form values
    appState.customerInfo = {
        name: document.getElementById('customer-name').value.trim(),
        email: document.getElementById('customer-email').value.trim(),
        phone: document.getElementById('customer-phone').value.trim(),
        address: document.getElementById('customer-address').value.trim()
    };
    
    appState.addOns = {
        additionalDrivers: document.getElementById('additional-drivers').checked,
        officeSuite: document.getElementById('office-suite').checked
    };
    
    addOSInstallationToCart();
}

// Update order summary for display
function updateOrderSummary() {
    if (!appState.installationType || !appState.selectedOS.length || !appState.osData.length) {
        console.error('Missing required data for order summary');
        return;
    }
    
    const summaryElement = document.getElementById('order-summary');
    if (!summaryElement) return;
    
    const typeText = appState.installationType === 'full' ? 'Full Installation' : 'Dual Boot Installation';
    const basePrice = appState.installationType === 'full' ? 
        appState.pricing.full_installation : 
        appState.pricing.dual_boot_installation;
    
    let totalPrice = basePrice;
    let osText = '';
    
    // Build OS text
    appState.selectedOS.forEach((osId, index) => {
        const os = appState.osData.find(o => o.id === osId);
        const versionId = appState.selectedVersions[index];
        const version = os ? os.versions.find(v => v.id === versionId) : null;
        
        if (os && version) {
            osText += `${os.name} ${version.version}`;
            if (index < appState.selectedOS.length - 1) {
                osText += ' + ';
            }
        }
    });
    
    let addonsHTML = '';
    
    if (appState.addOns.additionalDrivers) {
        totalPrice += appState.pricing.additional_drivers;
        addonsHTML += `<div class="flex justify-between items-center text-sm">
            <span class="text-gray-600">Additional Drivers:</span>
            <span class="font-medium">KSh ${appState.pricing.additional_drivers}</span>
        </div>`;
    }
    
    if (appState.addOns.officeSuite) {
        totalPrice += appState.pricing.office_suite;
        addonsHTML += `<div class="flex justify-between items-center text-sm">
            <span class="text-gray-600">Office Suite:</span>
            <span class="font-medium">KSh ${appState.pricing.office_suite}</span>
        </div>`;
    }
    
    summaryElement.innerHTML = `
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
            
            <div class="space-y-3">
                <div class="flex justify-between items-center">
                    <span class="text-gray-600">Installation Type:</span>
                    <span class="font-medium">${typeText}</span>
                </div>
                
                <div class="flex justify-between items-center">
                    <span class="text-gray-600">Operating Systems:</span>
                    <span class="font-medium">${osText}</span>
                </div>
                
                <div class="border-t pt-3">
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Base Installation:</span>
                        <span class="font-medium">KSh ${basePrice}</span>
                    </div>
                    ${addonsHTML}
                </div>
                
                <div class="border-t pt-3">
                    <div class="flex justify-between items-center text-lg font-bold">
                        <span>Total Amount:</span>
                        <span class="text-green-600">KSh ${totalPrice}</span>
                    </div>
                </div>
            </div>
            
            <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 class="font-semibold text-blue-800 mb-2">Customer Information</h4>
                <p class="text-sm text-blue-700"><strong>Name:</strong> ${appState.customerInfo.name}</p>
                <p class="text-sm text-blue-700"><strong>Email:</strong> ${appState.customerInfo.email}</p>
                <p class="text-sm text-blue-700"><strong>Phone:</strong> ${appState.customerInfo.phone}</p>
                <p class="text-sm text-blue-700"><strong>Address:</strong> ${appState.customerInfo.address}</p>
            </div>
        </div>
    `;
}

// Update real-time summary for data integrity
function updateRealtimeSummary() {
    const summaryElements = document.querySelectorAll('#realtime-summary');
    if (summaryElements.length === 0) return;

    summaryElements.forEach(element => {
        let summaryText = 'No selections made';
        
        if (appState.installationType) {
            summaryText = `${appState.installationType === 'full' ? 'Full Installation' : 'Dual Boot Installation'}`;
            
            if (appState.selectedOS.length > 0) {
                try {
                    if (appState.installationType === 'full') {
                        const os = appState.osData.find(os => os.id === appState.selectedOS[0]);
                        const version = os && appState.selectedVersions[0] ? 
                            os.versions.find(v => v.id === appState.selectedVersions[0]) : null;
                        
                        if (os && version) {
                            summaryText += ` - ${os.name} ${version.version}`;
                        } else if (os) {
                            summaryText += ` - ${os.name} (version pending)`;
                        }
                    } else {
                        const os1 = appState.osData.find(os => os.id === appState.selectedOS[0]);
                        const os2 = appState.osData.find(os => os.id === appState.selectedOS[1]);
                        
                        let osText = '';
                        if (os1) osText += os1.name;
                        if (os2) osText += (osText ? ' + ' : '') + os2.name;
                        
                        if (osText) {
                            summaryText += ` - ${osText}`;
                        }
                    }
                } catch (error) {
                    console.error('Error updating real-time summary:', error);
                }
            }
        }
        
        element.textContent = summaryText;
    });
}

// Reset form
function resetForm() {
    appState.currentStep = 1;
    appState.installationType = null;
    appState.selectedOS = [];
    appState.selectedVersions = [];
    appState.customerInfo = {};
    appState.addOns = {};
    appState.orderNumber = generateOrderNumber();
    
    document.getElementById('order-number').textContent = appState.orderNumber;
    
    // Reset form fields
    const customerForm = document.getElementById('customer-form');
    if (customerForm) {
        customerForm.reset();
    }
    
    document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    document.getElementById('dual-os-1').value = '';
    document.getElementById('dual-os-2').value = '';
    
    document.querySelectorAll('.component').forEach((component, index) => {
        if (index === 0) {
            component.classList.remove('hidden');
        } else {
            component.classList.add('hidden');
        }
    });
    
    updateProgressIndicator();
    disableContinueButton();
}

// Toggle modal visibility
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
}

// Make functions globally available
window.showView = showView;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.submitCartOrder = submitCartOrder;
window.clearCart = clearCart;
window.updateCartDisplay = updateCartDisplay;

// Error handling
window.addEventListener('error', function(event) {
    console.error('JavaScript Error:', event.error);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled Promise Rejection:', event.reason);
});

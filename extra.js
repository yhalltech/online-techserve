// extra.js - Additional Services for TechServe - COMPLETE VERSION

// 
const additionalServices = {
    web_design: {
        category: "Web Design & Development",
        services: {
            "basic_website": {
                name: "Prototype Website and planning services",
                description: "Simple 5-page responsive website with modern design",
                price: 300,
                features: ["5 Custom Pages", "Mobile Responsive", "Contact Form", "Basic SEO", "1 Month Support"],
                type: "web_design",
                icon: "fas fa-code"
            },
            "ecommerce_website": {
                name: "E-commerce Store",
                description: "Full online store with payment integration",
                price: 5000,
                features: ["Product Catalog", "Payment Gateway", "Inventory Management", "Order Tracking", "6 Months Support"],
                type: "web_design",
                icon: "fas fa-shopping-cart"
            },
            "custom_web_app": {
                name: "Custom Web Application",
                description: "Tailored web application development",
                price: 2000,
                features: ["Custom Features", "Database Integration", "User Authentication", "Admin Panel", "1 Year Support"],
                type: "web_design",
                icon: "fas fa-laptop-code"
            },
            "custom_web_app1": {
                name: "Custom Web Application with AI features",
                description: "Tailored web application development",
                price: 20000,
                features: ["Custom Features with AI assistant", "Database Integration", "User Authentication", "Admin Panel", "progressive Year Support"],
                type: "web_design",
                icon: "fas fa-laptop-code"
            }
        }
    },
    software: {
        category: "Software Installation",
        services: {
            "productivity": {
                name: "Productivity Suite", 
                description: "Install Microsoft Office or LibreOffice suite",
                price: 70,
                features: ["Word Processing", "Spreadsheets", "Presentation", "Email Client"],
                type: "software",
                icon: "fas fa-file-alt"
            },
            "productivity1": {
                name: "Productivity Suite with activation", 
                description: "Install Microsoft Office or LibreOffice suite",
                price: 140,
                features: ["Word Processing", "Spreadsheets", "Presentation"],
                type: "software",
                icon: "fas fa-file-alt"
            },
            "graphics": {
                name: "Graphics & Design services ",
                description: "Install Adobe Creative Suite or alternatives like figmatic designs",
                price: 100,
                features: ["Photo Editing", "Vector Graphics", "Video Editing", "3D Modeling"],
                type: "software",
                icon: "fas fa-palette"
            }
        }
    },
    hardware: {
        category: "Hardware Services",
        services: {
            "cleaning": {
                name: "PC Cleaning & Maintenance",
                description: "Complete computer cleaning and performance optimization",
                price: 200,
                features: ["Dust Removal", "Thermal Paste", "Cable Management", "Performance Tuning"],
                type: "hardware",
                icon: "fas fa-wind"
            },
            "upgrade": {
                name: "Hardware Upgrade",
                description: "Install RAM, SSD, or other components prings depends on size and type",
                price: 4000,
                features: ["Component Installation", "Driver Updates", "Performance Testing", "Warranty"],
                type: "hardware", 
                icon: "fas fa-microchip"
            },
            "diagnostics": {
                name: "Hardware Diagnostics coming soon!",
                description: "Comprehensive hardware testing and troubleshooting",
                price: 0,
                features: ["Component Testing", "Performance Analysis", "Repair Recommendations", "Report"],
                type: "hardware",
                icon: "fas fa-search"
            }
        }
    },
    repair_services: {
        category: "Repair & Maintenance",
        services: {
            "password_reset": {
                name: "Password Reset Service with data intact",
                description: "Legal Professional password recovery and reset for computers/laptops",
                price: 200,
                features: ["Password Recovery", "Account Unlocking", "Security Verification", "30-day Support"],
                type: "repair",
                icon: "fas fa-key"
            },
            "disk_partitioning": {
                name: "Professional Disk Partitioning",
                description: "Expert disk partitioning and management with safety of data rest assurance",
                price: 80,
                features: ["Disk Analysis", "Partition Planning", "Data Safety migration from one disk to another", "Optimization"],
                type: "repair", 
                icon: "fas fa-hdd"
            },
            "data_recovery": {
                name: "Data Recovery Service",
                description: "Professional data recovery from damaged drives",
                price: 500,
                features: ["Drive Analysis", "Data Extraction", "Secure Transfer", "Confidentiality"],
                type: "repair",
                icon: "fas fa-database"
            },
            "os_optimization": {
                name: "Windows os Invalid table & unbooting issues",
                description: "Complete operating system optimization and tuning",
                price: 300,
                features: ["Performance Tuning", "Startup Optimization", "Disk Cleanup", "Registry Repair"],
                type: "repair wrong partioning tables",
                icon: "fas fa-tachometer-alt"
            }
        }
    },
    networking: {
        category: "Networking Services",
        services: {
            "wifi": {
                name: "WiFi Setup & Optimization --coming soon",
                description: "Configure and optimize wireless networks",
                price: 0,
                features: ["Router Configuration", "Network Security", "Signal Optimization", "Troubleshooting"],
                type: "networking",
                icon: "fas fa-wifi"
            },
            "troubleshoot": {
                name: "Network Troubleshooting-- coming soon!",
                description: "Diagnose and fix network connectivity issues",
                price: 0,
                features: ["Connectivity Testing", "Issue Diagnosis", "Problem Resolution", "Documentation"],
                type: "networking",
                icon: "fas fa-network-wired"
            },
            "security": {
                name: "Network Security--Coming soon",
                description: "Enhance network security and monitoring",
                price: 0,
                features: ["Firewall Setup", "Intrusion Detection", "Monitoring", "Security Audit"],
                type: "networking",
                icon: "fas fa-lock"
            }
        }
    },
    data_services: {
        category: "Data Services",
        services: {
            "backup": {
                name: "Data Backup & Recovery",
                description: "Secure backup and data recovery services",
                price: 300,
                features: ["Data Backup", "Recovery Planning", "Secure Storage", "Verification"],
                type: "data",
                icon: "fas fa-database"
            },
            "recovery": {
                name: "Lost Data Recovery",
                description: "Recover lost or deleted files from damaged drives",
                price: 300,
                features: ["File Recovery", "Partition Repair", "Data Integrity", "Confidentiality"],
                type: "data",
                icon: "fas fa-hdd"
            },
            "encryption": {
                name: "Data Encryption",
                description: "Secure your data with encryption",
                price: 100,
                features: ["Full Disk Encryption", "File Encryption", "Key Management", "Security"],
                type: "data",
                icon: "fas fa-key"
            }
        }
    }
};

// Initialize additional services
function initializeAdditionalServices() {
    console.log('Initializing additional services...');
    
    // Wait a bit for DOM to be ready
    setTimeout(() => {
        populateServiceCategories();
        setupCartFunctionality();
        updatePricingDisplay();
        console.log('Additional services initialized successfully');
    }, 100);
}

// Populate service categories
function populateServiceCategories() {
    const container = document.getElementById('additional-services-container');
    if (!container) {
        console.error('Additional services container not found!');
        return;
    }

    console.log('Populating service categories...');
    container.innerHTML = '';
    
    Object.entries(additionalServices).forEach(([categoryKey, category]) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200';
        
        categorySection.innerHTML = `
            <div class="flex items-center mb-6">
                <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i class="${getCategoryIcon(categoryKey)} text-blue-600 text-xl"></i>
                </div>
                <div>
                    <h3 class="text-2xl font-bold text-gray-800">${category.category}</h3>
                    <p class="text-gray-600">Professional ${category.category.toLowerCase()} solutions</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="services-${categoryKey}">
                <!-- Services will be populated here -->
            </div>
        `;
        
        container.appendChild(categorySection);
        
        // Populate services for this category
        const servicesContainer = document.getElementById(`services-${categoryKey}`);
        if (servicesContainer) {
            Object.entries(category.services).forEach(([serviceKey, service]) => {
                const serviceCard = createServiceCard(serviceKey, service);
                servicesContainer.appendChild(serviceCard);
            });
        } else {
            console.error(`Services container for ${categoryKey} not found`);
        }
    });
    
    console.log('Service categories populated successfully');
}

// Get category icon
function getCategoryIcon(categoryKey) {
    const icons = {
        web_design: "fas fa-code",
        software: "fas fa-desktop",
        hardware: "fas fa-tools",
        repair_services: "fas fa-wrench",
        networking: "fas fa-wifi",
        data_services: "fas fa-database"
    };
    return icons[categoryKey] || "fas fa-cog";
}

// Create service card
function createServiceCard(serviceKey, service) {
    const card = document.createElement('div');
    card.className = 'service-card border-2 border-gray-300 rounded-xl p-6 bg-gray hover:shadow-xl transition-all duration-300 hover:border-blue-600 hover:transform hover:-translate-y-1';
    
    card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <div class="flex items-start space-x-4">
                <div class="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mt-1">
                    <i class="${service.icon} text-blue-600 text-lg"></i>
                </div>
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${service.name}</h3>
                    <p class="text-gray-600">${service.description}</p>
                </div>
            </div>
        </div>
        
        <div class="mb-4">
            <h4 class="font-semibold text-gray-700 mb-2">Features:</h4>
            <ul class="space-y-2">
                ${service.features.map(feature => `
                    <li class="flex items-center text-sm text-gray-600">
                        <i class="fas fa-check-circle text-green-500 mr-3 text-xs"></i>
                        <span>${feature}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
            <div class="text-2xl font-bold text-green-600">KSh ${service.price.toLocaleString()}</div>
            <button class="add-to-cart-btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center transform hover:scale-105"
                    data-service-key="${serviceKey}">
                <i class="fas fa-cart-plus mr-2"></i>Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

// Setup cart functionality
function setupCartFunctionality() {
    console.log('Setting up cart functionality...');
    
    // Add to cart buttons for additional services
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
            const button = e.target.classList.contains('add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
            const serviceKey = button.dataset.serviceKey;
            
            console.log('Add to cart clicked for:', serviceKey);
            
            // Find the service in our data
            let serviceData = null;
            for (const category of Object.values(additionalServices)) {
                if (category.services[serviceKey]) {
                    serviceData = {
                        key: serviceKey, // Use consistent key
                        ...category.services[serviceKey]
                    };
                    break;
                }
            }
            
            if (serviceData) {
                // Use the global addToCart function from app.js
                if (typeof window.addToCart === 'function') {
                    window.addToCart(serviceData);
                } else {
                    console.error('addToCart function not available');
                    alert('Service added to cart! (Cart system loading...)');
                }
            } else {
                console.error('Service data not found for key:', serviceKey);
            }
        }
    });
    
    // Cart toggle functionality - use the one from app.js
    console.log('Cart functionality setup complete');
}

// Update pricing display
function updatePricingDisplay() {
    const pricingInfo = document.getElementById('pricing-info');
    if (!pricingInfo) {
        console.log('Pricing info container not found');
        return;
    }

    console.log('Updating pricing display...');
    
    // Use pricing from appState if available, otherwise use defaults
    const pricing = window.appState?.pricing || {
        full_installation: 150,
        dual_boot_installation: 200,
        additional_drivers: 0,
        office_suite: 70
    };

    pricingInfo.innerHTML = `
        <div class="space-y-6">
            <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Operating System Installation</h3>
                <p class="text-gray-600">Professional OS installation services</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-r from-blue-400 to-blue-100 p-6 rounded-xl border border-blue-200">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-semibold text-blue-800 text-lg">Full Installation</h4>
                        <span class="text-blue-600 font-bold text-xl">KSh ${pricing.full_installation}</span>
                    </div>
                    <ul class="space-y-2 text-sm text-blue-700">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle mr-2 text-green-500"></i>
                            Single OS installation
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle mr-2 text-green-500"></i>
                            Basic driver setup
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle mr-2 text-green-500"></i>
                            System optimization
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle mr-2 text-green-500"></i>
                            7-day support
                        </li>
                    </ul>
                </div>
                
                <div class="bg-gradient-to-r from-green-500 to-pink-600 p-6 rounded-xl border border-green-200">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-semibold text-green-800 text-lg">Dual Boot</h4>
                        <span class="text-green-600 font-bold text-xl">KSh ${pricing.dual_boot_installation}</span>
                    </div>
                    <ul class="space-y-2 text-sm text-green-700">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle mr-2 text-green-500"></i>
                            Two OS installation
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle mr-2 text-green-500"></i>
                            Boot manager setup
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle mr-2 text-green-500"></i>
                            Full driver installation
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle mr-2 text-green-500"></i>
                            14-day support
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-semibold text-purple-800 text-lg">Additional Drivers</h4>
                        <span class="text-purple-600 font-bold text-xl">KSh ${pricing.additional_drivers}</span>
                    </div>
                    <p class="text-sm text-purple-700">Install necessary drivers for hardware components, printers, and peripherals</p>
                </div>
                
                <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-semibold text-orange-800 text-lg">Office Suite</h4>
                        <span class="text-orange-600 font-bold text-xl">KSh ${pricing.office_suite}</span>
                    </div>
                    <p class="text-sm text-orange-700">Install Microsoft Office or LibreOffice with full configuration</p>
                </div>
            </div>
        </div>
    `;
    
    console.log('Pricing display updated successfully');
}

// Show notification
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.getElementById('cart-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    
    const notification = document.createElement('div');
    notification.id = 'cart-notification';
    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-bounce`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'} mr-3"></i>
            <span class="font-semibold">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing extra.js services...');
    
    // Wait for main app to initialize
    const checkAppReady = setInterval(() => {
        if (window.appState && document.getElementById('additional-services-container')) {
            clearInterval(checkAppReady);
            initializeAdditionalServices();
        }
    }, 100);
    
    // Fallback: initialize after 2 seconds
    setTimeout(() => {
        if (!window.appState) {
            console.log('App state not available, initializing with fallback...');
            initializeAdditionalServices();
        }
    }, 2000);
});

// Make functions globally available
window.initializeAdditionalServices = initializeAdditionalServices;
window.updatePricingDisplay = updatePricingDisplay;

console.log('Extra.js loaded successfully');

let currentYear = 2024;
let timeDiff = 0;

const products = [
    {
        name: "Victorian Selfie Stick",
        basePrice: 29.99,
        image: "https://picsum.photos/300/200?random=1",
        year: 1850
    },
    {
        name: "Steam-Powered Smartphone",
        basePrice: 499.99,
        image: "https://picsum.photos/300/200?random=2",
        year: 1890
    },
    {
        name: "Quantum Pet Rock",
        basePrice: 19.99,
        image: "https://picsum.photos/300/200?random=3",
        year: 2150
    },
    {
        name: "Anti-Gravity Coffee Mug",
        basePrice: 39.99,
        image: "https://picsum.photos/300/200?random=4",
        year: 2200
    },
    {
        name: "Digital Carrier Pigeon",
        basePrice: 159.99,
        image: "https://picsum.photos/300/200?random=5",
        year: 1920
    },
    {
        name: "Holographic Vinyl Records",
        basePrice: 89.99,
        image: "https://picsum.photos/300/200?random=6",
        year: 2100
    }
];

function timeTravel(years) {
    timeDiff += years;
    currentYear += years;
    document.getElementById('current-year').textContent = currentYear;
    updateProducts();
}

function calculateTimeAdjustedPrice(basePrice, productYear) {
    const yearDiff = Math.abs(currentYear - productYear);
    let multiplier = 1 + (yearDiff / 100);
    
    // Add some randomness to make it more fun
    multiplier *= 0.8 + (Math.random() * 0.4);
    
    return (basePrice * multiplier).toFixed(2);
}

function updateProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const adjustedPrice = calculateTimeAdjustedPrice(product.basePrice, product.year);
        
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Originally from ${product.year}</p>
            <p class="price">$${adjustedPrice}</p>
            <button onclick="alert('Time paradox! Item will be delivered... eventually.')">
                Add to Timeline
            </button>
        `;
        
        productsContainer.appendChild(productElement);
    });
}

// Initial product load
updateProducts();

 const API_BASE_URL = "https://nestmart-api-core.lovable.app/api/public";
const API_PRODUCTS_URL = `https://nestmart-api-core.lovable.app/api/public/products`;
const API_CATEGORIES_URL = `https://nestmart-api-core.lovable.app/api/public/categories`; 

let categoriesData = [
    { name: "Baking material", count: 12 },
    { name: "Bread and Juice", count: 8 },
    { name: "Clothing & beauty", count: 4 },
    { name: "Deals Of The Day", count: 4 },
    { name: "Fresh Fruit", count: 10 },
    { name: "Fresh Seafood", count: 5 },
    { name: "Milks and Dairies", count: 5 },
    { name: "Pet Foods & Toy", count: 2 },
    { name: "Vegetables", count: 5 },
    { name: "Wines & Drinks", count: 4 },
    { name: "Uncategorized", count: 15 }
];

let productsData = [
    { id: 1, title: "Seeds of Change Organic Quinoa", name: "Seeds of Change Organic Quinoa", price: "28.50", category: "Vegetables", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 20 },
    { id: 2, title: "All Natural Italian-Style Chicken Meatballs", name: "All Natural Italian-Style Chicken Meatballs", price: "52.85", category: "Deals Of The Day", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 15 },
    { id: 3, title: "Angies Boomchickapop Sweet & Salty Corn", name: "Angies Boomchickapop Sweet & Salty Corn", price: "48.85", category: "Fresh Fruit", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 10 },
    { id: 4, title: "Foster Farms Takeout Crispy Wings", name: "Foster Farms Takeout Crispy Wings", price: "17.85", category: "Fresh Seafood", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 25 },
    { id: 5, title: "Blue Diamond Almonds Lightly Salted", name: "Blue Diamond Almonds Lightly Salted", price: "23.85", category: "Milks and Dairies", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 30 },
    { id: 6, title: "Fresh Organic Yellow Squash", name: "Fresh Organic Yellow Squash", price: "14.99", category: "Vegetables", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 18 },
    { id: 7, title: "Organic Cavendish Bananas", name: "Organic Cavendish Bananas", price: "6.99", category: "Fresh Fruit", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 40 },
    { id: 8, title: "Fresh Express Romaine Salad", name: "Fresh Express Romaine Salad", price: "11.50", category: "Vegetables", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 12 },
    { id: 9, title: "Chobani Greek Yogurt Variety Pack", name: "Chobani Greek Yogurt Variety Pack", price: "19.20", category: "Milks and Dairies", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 22 },
    { id: 10, title: "Perdue Fresh Chicken Breast", name: "Perdue Fresh Chicken Breast", price: "35.00", category: "Fresh Seafood", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 14 },
    { id: 11, title: "Nestle Pure Life Purified Water", name: "Nestle Pure Life Purified Water", price: "8.99", category: "Wines & Drinks", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 50 },
    { id: 12, title: "Tropicana 100% Orange Juice", name: "Tropicana 100% Orange Juice", price: "13.40", category: "Bread and Juice", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 20 },
    { id: 13, title: "Signature Bakery Sliced Bread", name: "Signature Bakery Sliced Bread", price: "5.50", category: "Bread and Juice", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 35 },
    { id: 14, title: "Barilla Whole Grain Pasta", name: "Barilla Whole Grain Pasta", price: "9.20", category: "Baking material", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 28 },
    { id: 15, title: "Gold Medal All Purpose Flour", name: "Gold Medal All Purpose Flour", price: "16.80", category: "Baking material", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 19 },
    { id: 16, title: "Purina Friskies Cat Food", name: "Purina Friskies Cat Food", price: "21.00", category: "Pet Foods & Toy", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 16 },
    { id: 17, title: "Organic Herbal Facial Cleanser", name: "Organic Herbal Facial Cleanser", price: "45.00", category: "Clothing & beauty", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 10 },
    { id: 18, title: "Fresh Atlantic Salmon Fillet", name: "Fresh Atlantic Salmon Fillet", price: "65.00", category: "Fresh Seafood", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 8 },
    { id: 19, title: "Organic Red Delicious Apples", name: "Organic Red Delicious Apples", price: "12.50", category: "Fresh Fruit", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 30 },
    { id: 20, title: "Classic Artisan Red Wine", name: "Classic Artisan Red Wine", price: "89.99", category: "Wines & Drinks", image: "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg", stock: 5 }
];

function renderInitialUI() {
    const cachedCat = localStorage.getItem("cachedCategories");
    const cachedProd = localStorage.getItem("cachedProducts");
    const localProducts = JSON.parse(localStorage.getItem('localProducts')) || [];

    if (cachedCat) {
        try { 
            const parsedCat = JSON.parse(cachedCat);
            if (parsedCat && parsedCat.length > 0) categoriesData = parsedCat; 
        } catch(e) {}
    }
    
    if (cachedProd) {
        try { 
            const parsedProd = JSON.parse(cachedProd);
            if (parsedProd && parsedProd.length > 0) productsData = parsedProd; 
        } catch(e) {}
    }

    if (localProducts.length > 0) {
        productsData = [...localProducts, ...productsData];
    }

    initApp();
    initPopularSection();
    loadAdminData();
    loadSellerData();
}


 async function fetchAppData() {
    try {
        const catRes = await fetch(API_CATEGORIES_URL);
        const apiCategories = await catRes.json();
         
        if (apiCategories.status === "error") {
            console.error("Server xato qaytardi:", apiCategories.message);
            categoriesData = JSON.parse(localStorage.getItem("cachedCategories")) || [];
        } else {
            const extractedCategories = apiCategories.data || apiCategories.categories || apiCategories;
            if (Array.isArray(extractedCategories) && extractedCategories.length > 0) {
                categoriesData = extractedCategories;
            }
        }
    } catch (error) {
        console.error("Kategoriya tarmoq xatoligi:", error);
        categoriesData = JSON.parse(localStorage.getItem("cachedCategories")) || [];
    }

    try {
        const prodRes = await fetch(API_PRODUCTS_URL);
        const apiProducts = await prodRes.json();
         
        if (apiProducts.status === "error") {
            console.error("Server xato qaytardi:", apiProducts.message);
            productsData = JSON.parse(localStorage.getItem("cachedProducts")) || [];
        } else {
            const extractedProducts = apiProducts.data || apiProducts.products || apiProducts;
            if (Array.isArray(extractedProducts) && extractedProducts.length > 0) {
                productsData = extractedProducts;
            }
        }
    } catch (error) {
        console.error("Mahsulot tarmoq xatoligi:", error);
        productsData = JSON.parse(localStorage.getItem("cachedProducts")) || [];
    }
 
    const localSavedProducts = JSON.parse(localStorage.getItem('localProducts')) || [];
    if (localSavedProducts.length > 0) {
        productsData = [...localSavedProducts, ...productsData];
    }

    localStorage.setItem("cachedProducts", JSON.stringify(productsData));
    localStorage.setItem("cachedCategories", JSON.stringify(categoriesData));
    
    if (typeof initApp === 'function') initApp();
    if (typeof initPopularSection === 'function') initPopularSection();
    if (typeof loadAdminData === 'function') loadAdminData();
    if (typeof loadSellerData === 'function') loadSellerData();
}


 
function initApp() {
    const categoryListEl = document.getElementById("category-list");
    if (!categoryListEl) return;
    categoryListEl.innerHTML = "";

    if (!categoriesData || categoriesData.length === 0) return;

    categoriesData.forEach((cat, index) => {
        const itemEl = document.createElement("div");
        itemEl.className = `category-item ${index === 0 ? "active" : ""}`;
        
        const catName = cat.name || cat.title || cat;
        const catCount = cat.count || 0;

        itemEl.innerHTML = `
            <span class="category-name">${catName}</span>
            <span class="category-count">${catCount}</span>
        `;
        
        itemEl.addEventListener("click", () => {
            document.querySelectorAll(".category-item").forEach(el => el.classList.remove("active"));
            itemEl.classList.add("active");
            
            const filtered = productsData.filter(p => (p.category || p.category_name || "").toLowerCase() === catName.toLowerCase());
            renderProducts(filtered.length > 0 ? filtered : productsData);
        });

        categoryListEl.appendChild(itemEl);

        if (index === 0) {
            const initialFiltered = productsData.filter(p => (p.category || p.category_name || "").toLowerCase() === catName.toLowerCase());
            renderProducts(initialFiltered.length > 0 ? initialFiltered : productsData);
        }
    });
}

function renderProducts(products) {
    const gridEl = document.getElementById("products-grid");
    if (!gridEl) return;
    gridEl.innerHTML = "";

    if (!products || products.length === 0) {
        gridEl.innerHTML = "<p style='padding: 20px;'>Mahsulot topilmadi</p>";
        return;
    }

    products.forEach(product => {
        const cardEl = document.createElement("div");
        cardEl.className = "product-card";
        
        const productCategory = product.category || product.category_name || "Uncategorized";
        const productPrice = product.price || "0.00";
        const productImage = product.image || "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg";
        const productName = product.title || product.name || "Mahsulot";

        cardEl.innerHTML = `
            <div class="product-clickable" style="cursor: pointer; position: relative;">
                <button class="wishlist-btn" title="Wishlist">❤️</button>
                <img src="${productImage}" alt="${productName}">
                <div class="product-category">${productCategory}</div>
                <div class="product-title">${productName}</div>
            </div>
            <div class="product-footer">
                <span class="product-price">$${productPrice}</span>
                <button class="add-btn">Add</button>
            </div>
        `;
        
        cardEl.querySelector(".product-clickable img").addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = `product-detail.html?name=${encodeURIComponent(productName)}`;
        });

        cardEl.querySelector(".product-title").addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = `product-detail.html?name=${encodeURIComponent(productName)}`;
        });

        cardEl.querySelector(".wishlist-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
            const exists = wishlist.some(p => (p.title || p.name) === productName);
            
            if (!exists) {
                wishlist.push(product);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
            }
            window.location.href = "wishlist.html";
        });
        
        gridEl.appendChild(cardEl);
    });
}

function initPopularSection() {
    const tabsContainer = document.getElementById("popularCategories");
    const gridContainer = document.getElementById("popularProductsGrid");

    if (!tabsContainer || !gridContainer || categoriesData.length === 0) return;

    tabsContainer.innerHTML = "";
    
    const renderPopCards = (catName) => {
        gridContainer.innerHTML = "";
        const filtered = productsData.filter(p => (p.category || p.category_name || "Uncategorized").toLowerCase() === catName.toLowerCase());
        const displayItems = filtered.length > 0 ? filtered : productsData;

        displayItems.forEach(product => {
            const card = document.createElement("div");
            card.className = "pop-product-card";

            const prodName = product.title || product.name || "Mahsulot";
            const prodPrice = product.price || "0.00";
            const prodImage = product.image || "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg";

            card.innerHTML = `
                <img src="${prodImage}" alt="${prodName}">
                <div class="pop-product-info">
                    <div class="pop-product-title">${prodName}</div>
                    <div class="pop-product-rating">★★★★★</div>
                    <div class="pop-product-price-box">
                        <span class="pop-product-price">$${prodPrice}</span>
                    </div>
                </div>
            `;

            card.addEventListener("click", () => {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = `product-detail.html?name=${encodeURIComponent(prodName)}`;
            });

            gridContainer.appendChild(card);
        });
    };

    categoriesData.forEach((cat, index) => {
        const catName = cat.name || cat.title || cat;
        const tabBtn = document.createElement("button");
        tabBtn.className = `pop-cat-tab ${index === 0 ? "active" : ""}`;
        tabBtn.textContent = catName;

        tabBtn.addEventListener("click", () => {
            document.querySelectorAll(".pop-cat-tab").forEach(btn => btn.classList.remove("active"));
            tabBtn.classList.add("active");
            renderPopCards(catName);
        });

        tabsContainer.appendChild(tabBtn);

        if (index === 0) {
            renderPopCards(catName);
        }
    });
}

const searchInput = document.getElementById("searchInput");
const loadingEl = document.getElementById("loading");
let searchTimeout = null;

const searchProducts = async (query) => {
  if (!query.trim()) {
    const activeCategoryEl = document.querySelector(".category-item.active");
    if (activeCategoryEl) {
        const catName = activeCategoryEl.querySelector(".category-name").textContent;
        const filtered = productsData.filter(p => (p.category || p.category_name) && p.category.toLowerCase() === catName.toLowerCase());
        renderProducts(filtered.length > 0 ? filtered : productsData);
    } else {
        renderProducts(productsData);
    }
    return;
  }

  try {
    if (loadingEl) loadingEl.style.display = "block";

    const response = await fetch(`${API_PUBLIC_URL}/products/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    const products = data.data?.products || data.products || data || [];
    renderProducts(Array.isArray(products) ? products : []);
  } catch (err) {
    console.error(err);
  } finally {
    if (loadingEl) loadingEl.style.display = "none";
  }
};

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value;
    searchTimeout = setTimeout(() => {
      searchProducts(query);
    }, 300);
  });
}

if (!localStorage.getItem('sales')) {
    localStorage.setItem('sales', JSON.stringify([]));
}

document.addEventListener('DOMContentLoaded', () => {
    renderInitialUI();

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    const adminProductTable = document.getElementById('adminProductTable');
    if (adminProductTable) {
        loadAdminData();

        const productForm = document.getElementById('productForm');
        if (productForm) {
            productForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const name = document.getElementById('prodName').value;
                const price = document.getElementById('prodPrice').value;
                const stock = Number(document.getElementById('prodStock').value);
                const categoryInput = document.getElementById('prodCategory');
                const category = categoryInput ? categoryInput.value : 'Deals Of The Day';

                const newProd = { 
                    id: Date.now(), 
                    name: name, 
                    title: name,
                    price: price, 
                    stock: stock,
                    quantity: stock,
                    category: category,
                    image: 'image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg'
                };

                try {
                    await fetch(API_PRODUCTS_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newProd)
                    });
                } catch (err) {
                    console.error(err);
                }

                let localProducts = JSON.parse(localStorage.getItem('localProducts')) || [];
                localProducts.push(newProd);
                localStorage.setItem('localProducts', JSON.stringify(localProducts));

                productsData.unshift(newProd);

                productForm.reset();
                loadAdminData();
                renderProducts(productsData);
            });
        }
    }

    const sellerProductTable = document.getElementById('sellerProductTable');
    if (sellerProductTable) {
        loadSellerData();
    }
});

function loadAdminData() {
    const localProducts = JSON.parse(localStorage.getItem('localProducts')) || [];
    const allProds = [...localProducts, ...productsData];
    const sales = JSON.parse(localStorage.getItem('sales')) || [];
    
    const totalProductsEl = document.getElementById('totalProducts');
    if (totalProductsEl) totalProductsEl.innerText = allProds.length;

    let totalRevenue = sales.reduce((sum, item) => sum + item.total, 0);
    const totalSalesEl = document.getElementById('totalSales');
    if (totalSalesEl) totalSalesEl.innerText = totalRevenue.toLocaleString() + " so'm";

    const totalOrdersEl = document.getElementById('totalOrders');
    if (totalOrdersEl) totalOrdersEl.innerText = sales.length;

    const tbody = document.getElementById('adminProductTable');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    allProds.forEach(prod => {
        const prodPriceNum = Number(prod.price) || 0;
        const prodStockVal = prod.stock !== undefined ? prod.stock : (prod.quantity || 0);
        tbody.innerHTML += `
            <tr>
                <td>${prod.name || prod.title}</td>
                <td>${prodPriceNum.toLocaleString()} so'm</td>
                <td>${prodStockVal}</td>
                <td><button onclick="deleteProduct(${prod.id})" style="background:#e74c3c; color:white; border:none; padding:5px 10px; border-radius:3px; cursor:pointer;">O'chirish</button></td>
            </tr>
        `;
    });
}

function deleteProduct(id) {
    let localProducts = JSON.parse(localStorage.getItem('localProducts')) || [];
    localProducts = localProducts.filter(p => p.id !== id);
    localStorage.setItem('localProducts', JSON.stringify(localProducts));
    
    productsData = productsData.filter(p => p.id !== id);
    loadAdminData();
    renderProducts(productsData);
}

let cart = [];

function loadSellerData() {
    const localProducts = JSON.parse(localStorage.getItem('localProducts')) || [];
    const allProds = [...localProducts, ...productsData];
    const tbody = document.getElementById('sellerProductTable');
    if (!tbody) return;
    tbody.innerHTML = '';

    allProds.forEach(prod => {
        const prodPriceNum = Number(prod.price) || 0;
        const stockVal = prod.stock !== undefined ? prod.stock : (prod.quantity || 0);
        tbody.innerHTML += `
            <tr>
                <td>${prod.name || prod.title}</td>
                <td>${prodPriceNum.toLocaleString()} so'm</td>
                <td>${stockVal}</td>
                <td><button onclick="addToCart(${prod.id})" style="background:#2ecc71; color:white; border:none; padding:5px 10px; border-radius:3px; cursor:pointer;" ${stockVal === 0 ? 'disabled' : ''}>Qo'shish</button></td>
            </tr>
        `;
    });
}

function addToCart(id) {
    const localProducts = JSON.parse(localStorage.getItem('localProducts')) || [];
    const allProds = [...localProducts, ...productsData];
    let product = allProds.find(p => p.id === id);
    let stockVal = product ? (product.stock !== undefined ? product.stock : product.quantity) : 0;

    if (product && stockVal > 0) {
        let cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            if (cartItem.qty < stockVal) {
                cartItem.qty++;
            } else {
                alert("Omborda yetarli mahsulot yo'q!");
            }
        } else {
            cart.push({ id: product.id, name: product.name || product.title, price: Number(product.price), qty: 1 });
        }
        updateCartUI();
    }
}

function updateCartUI() {
    const cartList = document.getElementById('cartList');
    const cartTotal = document.getElementById('cartTotal');
    if (!cartList || !cartTotal) return;

    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;
        cartList.innerHTML += `<li style="padding: 5px 0; border-bottom: 1px solid #eee;">${item.name} (${item.qty}x) - ${itemTotal.toLocaleString()} so'm</li>`;
    });

    cartTotal.innerText = total.toLocaleString();

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.onclick = () => {
            if (cart.length === 0) {
                alert("Savatcha bo'sh!");
                return;
            }

            let localProducts = JSON.parse(localStorage.getItem('localProducts')) || [];
            let sales = JSON.parse(localStorage.getItem('sales')) || [];

            cart.forEach(cartItem => {
                let prod = localProducts.find(p => p.id === cartItem.id) || productsData.find(p => p.id === cartItem.id);
                if (prod) {
                    if (prod.stock !== undefined) prod.stock -= cartItem.qty;
                    else if (prod.quantity !== undefined) prod.quantity -= cartItem.qty;
                }
            });

            sales.push({ date: new Date().toLocaleString(), total: total, items: [...cart] });

            localStorage.setItem('localProducts', JSON.stringify(localProducts));
            localStorage.setItem('sales', JSON.stringify(sales));

            cart = [];
            updateCartUI();
            loadSellerData();
            loadAdminData();
            alert("Savdo muvaffaqiyatli yakunlandi!");
        };
    }
}

renderInitialUI();
fetchAppData();
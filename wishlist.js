// wishlist.js
document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.getElementById("wishlist-grid");
    
    function getWishlist() {
        return JSON.parse(localStorage.getItem("wishlist")) || [];
    }

    function renderWishlist() {
        if (!wishlistContainer) return;
        const wishlist = getWishlist();
        wishlistContainer.innerHTML = "";

        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = "<p>Wishlist bo'sh</p>";
            return;
        }

        wishlist.forEach(product => {
            const cardEl = document.createElement("div");
            cardEl.className = "product-card";
            
            const productCategory = product.category || product.category_name || "Uncategorized";
            const productPrice = product.price || "0.00";
            const productImage = product.image || "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg";
            const productName = product.title || product.name;

            cardEl.innerHTML = `
                <div class="product-clickable" style="cursor: pointer;">
                    <img src="${productImage}" alt="${productName}">
                    <div class="product-category">${productCategory}</div>
                    <div class="product-title">${productName}</div>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${productPrice}</span>
                    <button class="remove-wishlist-btn">O'chirish</button>
                </div>
            `;

            cardEl.querySelector(".product-clickable").addEventListener("click", () => {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = `product-detail.html?name=${encodeURIComponent(productName)}`;
            });

            cardEl.querySelector(".remove-wishlist-btn").addEventListener("click", () => {
                let updatedList = getWishlist().filter(p => (p.title || p.name) !== productName);
                localStorage.setItem("wishlist", JSON.stringify(updatedList));
                renderWishlist();
            });

            wishlistContainer.appendChild(cardEl);
        });
    }

    renderWishlist();
});
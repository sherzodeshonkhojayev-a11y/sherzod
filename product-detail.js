document.addEventListener("DOMContentLoaded", () => {
    const productData = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!productData) {
        document.querySelector(".product-detail-container").innerHTML = "<h2>Mahsulot topilmadi</h2>";
        return;
    }

    document.getElementById("mainImage").src = productData.image || "image/4533dfbf3c344a73384a8755447137a6db5b9a00.jpg";
    document.getElementById("productTitle").textContent = productData.title || productData.name;
    document.getElementById("productPrice").textContent = `$${productData.price || "0.00"}`;

    const storageKey = `reviews_${productData.name}`;
    let reviews = JSON.parse(localStorage.getItem(storageKey)) || [
        { name: "Gulchehra", rating: 5, text: "Sifatli va qulay mahsulot tavsiya qilaman." },
        { name: "Bobur", rating: 4, text: "Yaxshi ishlayapti, rahmat." }
    ];

    const reviewsListEl = document.getElementById("reviewsList");
    const reviewForm = document.getElementById("reviewForm");

    function renderReviews() {
        reviewsListEl.innerHTML = "";
        reviews.forEach(rev => {
            const card = document.createElement("div");
            card.className = "review-card";
            card.innerHTML = `
                <div class="review-header">
                    <span>${rev.name}</span>
                    <span class="review-stars">${"★".repeat(rev.rating)}${"☆".repeat(5 - rev.rating)}</span>
                </div>
                <p>${rev.text}</p>
            `;
            reviewsListEl.appendChild(card);
        });
    }

    renderReviews();

    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("reviewerName").value;
        const ratingInput = Number(document.getElementById("reviewRating").value);
        const textInput = document.getElementById("reviewText").value;

        const newReview = {
            name: nameInput,
            rating: ratingInput,
            text: textInput
        };

        reviews.push(newReview);
        localStorage.setItem(storageKey, JSON.stringify(reviews));

        renderReviews();
        reviewForm.reset();
    });
});
function calculate_total() {
    let unitPrice = 1000; // Fixed Unit Price [cite: 23]
    let quantity = document.getElementById("Quantity").value;
    let displayTotal = document.getElementById("TotalPrice");

    // Validation: Prevent quantity less than 0 [cite: 33, 34]
    if (quantity < 0) {
        alert("Quantity cannot be negative. Resetting to 0.");
        document.getElementById("Quantity").value = 0;
        quantity = 0;
    }

    // Real-time Calculation [cite: 29, 31]
    // Formula: Total Price = Unit Price * Quantity per Day * 30
    let total = unitPrice * quantity * 30;
    displayTotal.value = total;

    // Gift Coupon Notification [cite: 35, 36, 37]
    if (total > 1000) {
        alert("Congratulations! You are eligible for a gift coupon.");
    }
}
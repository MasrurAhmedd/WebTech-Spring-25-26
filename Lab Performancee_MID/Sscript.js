function calculate_total() {
    let unitPrice = 1000; 
    let quantity = document.getElementById("Quantity").value;
    let displayTotal = document.getElementById("TotalPrice");

    
    if (quantity < 0) {
        alert("Quantity cannot be negative. Resetting to 0.");
        document.getElementById("Quantity").value = 0;
        quantity = 0;
    }

    
    
    let total = unitPrice * quantity * 30;
    displayTotal.value = total;

    
    if (total > 1000) {
        alert("Congratulations! You are eligible for a gift coupon.");
    }
}

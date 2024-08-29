
function formatToIndianCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,  // No fraction digits
        minimumFractionDigits: 0,
    }).format(amount);
}

export default formatToIndianCurrency
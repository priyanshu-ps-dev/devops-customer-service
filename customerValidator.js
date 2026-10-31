/**
 * Customer Registration Validator
 * Tech Solutions Pvt. Ltd.
 * Developer: Arjun
 */

function validateCustomer(customer) {
    if (!customer) {
        return { valid: false, message: "Customer data is missing" };
    }

    // Name check
    if (!customer.name || customer.name.trim().length === 0) {
        return { valid: false, message: "Name is required" };
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!customer.email || !emailRegex.test(customer.email)) {
        return { valid: false, message: "Please provide a valid email address (e.g., user@example.com)" };
    }

    return { valid: true, message: "Customer validation successful" };
}

module.exports = { validateCustomer };

const { validateCustomer } = require('./customerValidator');

// Test 1: Valid customer
const res1 = validateCustomer({ name: 'Arjun', email: 'arjun@example.com' });
console.log('Test 1 (Valid):', res1.valid === true ? 'PASSED ✅' : 'FAILED ❌');

// Test 2: Invalid email (missing @)
const res2 = validateCustomer({ name: 'Arjun', email: 'arjunexample.com' });
console.log('Test 2 (Invalid Email):', res2.valid === false ? 'PASSED ✅' : 'FAILED ❌');

// Test 3: Missing name
const res3 = validateCustomer({ name: '', email: 'arjun@example.com' });
console.log('Test 3 (Missing Name):', res3.valid === false ? 'PASSED ✅' : 'FAILED ❌');

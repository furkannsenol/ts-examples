"use strict";
const userInterface = {
    age: 13,
    name: "Furkan",
};
const userType = {
    age: 33,
    name: "Samedo",
};
const user = {
    name: "Furkan",
};
const settings = {
    darkMode: true,
    fontSize: 14,
};
const readonlyBook = {
    title: "1984",
    author: "George Orwell",
};
const pickedUser = {
    name: "Furkan",
    email: "furkan@example.com",
};
// 3.5. Omit<Type, Keys> – Belirli alanları çıkarır
const omittedUser = {
    name: "Furkan",
    email: "furkan@example.com",
};
const statusMessages = {
    success: "İşlem başarılı",
    error: "Bir hata oluştu",
    loading: "Yükleniyor...",
};
const userRole = "admin";
const letter = "a";
const realName = "Furkan";
// ==============================
// Outputs
// ==============================
console.log("1. interface & extends:", userInterface);
console.log("2. type & extends:", userType);
console.log("3.1. Partial:", user);
console.log("3.2. Required:", settings);
console.log("3.3. Readonly:", readonlyBook);
console.log("3.4. Pick:", pickedUser);
console.log("3.5. Omit:", omittedUser);
console.log("3.6. Record:", statusMessages);
console.log("3.7. Exclude:", userRole);
console.log("3.8. Extract:", letter);
console.log("3.9. NonNullable:", realName);

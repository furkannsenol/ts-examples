// ==============================
// 1. interface & extends
// ==============================
interface IAUser {
  name: string;
}

interface IBUser extends IAUser {
  age: number;
}

const userInterface: IBUser = {
  age: 13,
  name: "Furkan",
};

// ==============================
// 2. type & extends (Intersection Types)
// ==============================
type TAUser = { name: string };
type TBUser = TAUser & { age: number };

const userType: TBUser = {
  age: 33,
  name: "Samedo",
};

// ==============================
// 3. Utility Types
// ==============================

// 3.1. Partial<Type> - Tüm alanları isteğe bağlı yapar
interface IUser {
  name: string;
  age: number;
}

const user: Partial<IUser> = {
  name: "Furkan",
};

// 3.2. Required<Type> – Tüm alanları zorunlu yapar
interface ISettings {
  darkMode?: boolean;
  fontSize?: number;
}

const settings: Required<ISettings> = {
  darkMode: true,
  fontSize: 14,
};

// 3.3. Readonly<Type> – Tüm alanları sadece okunur yapar
interface IBook {
  title: string;
  author: string;
}

const readonlyBook: Readonly<IBook> = {
  title: "1984",
  author: "George Orwell",
};

// readonlyBook.title = "Brave New World"; // Değiştirilemez

// 3.4. Pick<Type, Keys> – Belirli alanları seçer
interface IUserInfo {
  id: number;
  name: string;
  email: string;
}

const pickedUser: Pick<IUserInfo, "name" | "email"> = {
  name: "Furkan",
  email: "furkan@example.com",
};

// 3.5. Omit<Type, Keys> – Belirli alanları çıkarır
const omittedUser: Omit<IUserInfo, "id"> = {
  name: "Furkan",
  email: "furkan@example.com",
};

// 3.6. Record<Keys, Type> – Key’leri belirli tipe eşleştirir
type TStatus = "success" | "error" | "loading";

const statusMessages: Record<TStatus, string> = {
  success: "İşlem başarılı",
  error: "Bir hata oluştu",
  loading: "Yükleniyor...",
};

// 3.7. Exclude<UnionType, ExcludedMembers> – Union’dan çıkarma yapar
type TRole = "admin" | "editor" | "guest";
type TNonGuestRole = Exclude<TRole, "guest">;

const userRole: TNonGuestRole = "admin";

// 3.8. Extract<Type, Union> – Ortak olanları seçer
type TAll = "a" | "b" | "c";
type TSome = Extract<TAll, "a" | "c" | "d">;

const letter: TSome = "a";

// 3.9. NonNullable<Type> – null ve undefined’ı dışlar
type TName = string | null | undefined;
type TNonNullName = NonNullable<TName>;

const realName: TNonNullName = "Furkan";

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

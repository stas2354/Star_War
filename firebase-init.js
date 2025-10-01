// Заполните конфиг значениями из консоли Firebase и закоммитьте файл
// Без реальных ключей аутентификация/БД работать не будут
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function isAdmin(uid) {
  if (!uid) return false;
  const ref = doc(db, 'admins', uid);
  const snap = await getDoc(ref);
  return snap.exists();
}

export function onAuth(cb) { return onAuthStateChanged(auth, cb); }
export function logout() { return signOut(auth); }



# Публикация на GitHub Pages

1. Создайте репозиторий на GitHub и добавьте в него папку `gh-pages/` (корнем сайта будет именно эта папка).
2. Закоммитьте и запушьте:
   - git init
   - git add .
   - git commit -m "init site"
   - git branch -M main
   - git remote add origin <url_вашего_репозитория>
   - git push -u origin main
3. Откройте Settings → Pages → выберите Source: "Deploy from a branch" и папку `/gh-pages` на ветке `main`.
4. Сохраните — через минуту сайт будет доступен по адресу GitHub Pages.

Обновление новостей: откройте `admin.html`, добавьте новости — они сохраняются в `localStorage` браузера и видны на странице `news.html` на вашем устройстве.

## Firebase (Auth + Firestore) для GitHub Pages
1. Создайте проект Firebase и включите Auth (Email/Password) и Firestore.
2. Скопируйте конфиг в `gh-pages/firebase-init.js` (замените PASTE_* значения).
3. В Firestore создайте коллекцию `admins` и документ с id = UID вашего аккаунта (значение true), чтобы дать права админа.
4. Правила Firestore (пример):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /news/{id} {
      allow read: if true;
      allow create, update, delete: if exists(/databases/$(database)/documents/admins/$(request.auth.uid));
    }
    match /admins/{uid} {
      allow read: if request.auth != null;
      allow write: if false; // управлять через консоль
    }
  }
}
```
5. Вход/регистрация: `auth.html`. Защищённая админ‑страница: `admin.html`.

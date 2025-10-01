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

## Новости без бэкенда
Новости теперь берутся из файла `gh-pages/news.json`.
- Чтобы добавить новость, отредактируйте `news.json` и закоммитьте изменения.
- Формат элемента:
```
{
  "title": "Заголовок",
  "text": "Текст новости",
  "date": "2025-10-01T12:00:00Z"
}
```

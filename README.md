# Quran Explorer

Quran Explorer is a web-based application that allows users to search verses from the Quran using keywords. It uses the Al-Quran Cloud API to return ayahs that match the search term and displays the results with Surah names.

---

## Features

- Search Quranic verses by keyword using a live external API
- View verse text and corresponding Surah names
- Voice command support: say "search for mercy" to auto-search
- Displays a daily ayah on page load
- Shows tips loaded from a local JSON file
- Interactive bar chart (Chart.js) demonstrating example keyword mentions

---

## Technologies Used

- HTML, CSS, JavaScript
- Node.js + Express
- Al-Quran Cloud API
- Supabase (used for saving ayahs)
- Chart.js (data visualization)
- Annyang (voice command recognition)

---

## Pages

- `index.html` – Landing page with a short description and example chart
- `explore.html` – Main functionality (search, daily ayah, voice commands)
- `about.html` – Project overview and purpose

---

document.getElementById("searchBtn").addEventListener("click", async () => {
  const keyword = document.getElementById("keywordInput").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "Loading...";

  try {
    const response = await fetch(`https://api.alquran.cloud/v1/search/${keyword}/all/en.asad`);
    const data = await response.json();

    if (!data.data || data.data.count === 0) {
      resultsDiv.innerHTML = "No ayahs found.";
      return;
    }

    resultsDiv.innerHTML = "";

    data.data.matches.forEach((match) => {
      const ayahText = match.text;
      const surah = `Surah ${match.surah.name} (${match.surah.englishName})`;

      const ayahDiv = document.createElement("div");
      ayahDiv.className = "ayah";

      ayahDiv.innerHTML = `
        <p><strong>${surah}</strong></p>
        <p>${ayahText}</p>
      `;

      resultsDiv.appendChild(ayahDiv);
    });
  } catch (err) {
    resultsDiv.innerHTML = "Error fetching ayahs: " + err.message;
  }
});
async function fetchRandomAyah() {
  const response = await fetch("https://api.alquran.cloud/v1/ayah/262/en.asad"); // Any valid ayah ID
  const data = await response.json();

  const randomDiv = document.createElement("div");
  randomDiv.className = "ayah";
  randomDiv.innerHTML = `
    <h3>Daily Ayah</h3>
    <p><strong>Surah ${data.data.surah.name}</strong></p>
    <p>${data.data.text}</p>
  `;

  document.body.appendChild(randomDiv);
}

fetchRandomAyah();
fetch("sample.json")
  .then(res => res.json())
  .then(data => {
    const tipsDiv = document.createElement("div");
    tipsDiv.innerHTML = "<h4>Search Tips</h4><ul>" +
      data.tips.map(tip => `<li>${tip}</li>`).join('') +
      "</ul>";
    document.body.appendChild(tipsDiv);
  });
if (annyang) {
  const commands = {
    'search for *keyword': function(keyword) {
      document.getElementById("keywordInput").value = keyword;
      document.getElementById("searchBtn").click();
    }
  };
  annyang.addCommands(commands);
  annyang.start();
}

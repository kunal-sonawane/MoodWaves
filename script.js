function suggestSong() {
  const mood = document.getElementById("mood").value;
  const suggestionDiv = document.getElementById("song-suggestion");

  const moodSongs = {
    happy: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
    sad: "https://www.youtube.com/watch?v=ho9rZjlsyYY",
    romantic: "https://www.youtube.com/watch?v=450p7goxZqg",
    angry: "https://www.youtube.com/watch?v=hTWKbfoikeg",
    energetic: "https://www.youtube.com/watch?v=8SbUC-UaAxE"
  };

  if (!mood || !moodSongs[mood]) {
    suggestionDiv.innerHTML = "<p>Please select a valid mood!</p>";
    return;
  }

  suggestionDiv.innerHTML = `
    <p><strong>Here's a song for your "${mood}" mood:</strong></p>
    <a href="${moodSongs[mood]}" target="_blank" class="song-link">Click here to listen on YouTube</a>
  `;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function resetApp() {
  document.getElementById("mood").value = "";
  document.getElementById("song-suggestion").innerHTML = "";
}
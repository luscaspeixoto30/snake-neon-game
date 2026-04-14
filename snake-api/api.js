const API_URL = "http://localhost:8000/api";

export async function sendScore(name, score) {
  await fetch(`${API_URL}/score`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, score })
  });
}

export async function getRanking() {
  const res = await fetch(`${API_URL}/ranking`);
  return await res.json();
}
const name = prompt("Digite seu nome:");
sendScore(name, score);

async function loadRanking() {
  const ranking = await getRanking();

  const div = document.createElement("div");
  div.innerHTML = "<h3>Ranking</h3>";

  ranking.forEach(p => {
    div.innerHTML += `<p>${p.name} - ${p.score}</p>`;
  });

  document.body.appendChild(div);
}

loadRanking();


// ================= BACK TO TOP =================
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTopBtn.classList.remove('hidden');
  else backToTopBtn.classList.add('hidden');
});
backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// AOS Init
AOS.init({ duration: 1000 });

// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// ------------------------------------------------------------
// PACKAGE DATA GENERATION (your same logic – cleaned)
// ------------------------------------------------------------
const fallbackImage = "";

const countrySpecs = [
  ["India", [
    "Kerala Backwaters","Jaipur - Pink City","Goa Beaches","Manali & Shimla","Kashmir Valley",
    "Delhi & Agra (Taj Mahal)","Ooty & Kodaikanal"
  ],7,[3,6,1]],

  ["Japan", [
    "Tokyo & Mt. Fuji","Kyoto Temples & Traditions","Osaka & Universal Studios",
    "Hiroshima Peace & Miyajima","Sapporo Snow Festival","Nara Deer Park",
    "Yokohama City","Okinawa Beaches","Nagoya Highlights","Takayama & Shirakawa"
  ],10,[4,6,1]],

  ["China", [
    "Beijing & Great Wall","Shanghai Skyline","Guilin & Li River","Harbin Ice Festival","Xi'an Terracotta Warriors"
  ],5,[3,5,1]],

  ["France (Paris)", [
    "Paris - Eiffel Tower & Louvre","Disneyland Paris Escape","French Riviera (Nice)",
    "Mont Saint-Michel"
  ],3,[2,4,1]],

  ["Middle East", [
    "Dubai City & Desert Safari","Abu Dhabi Grand Mosque","Muscat & Old Mutrah",
   "Riyadh City Tour","Jeddah Corniche"
  ],5,[2,5,1]],

  ["Sri Lanka", [
    "Colombo City & Sights","Kandy Temple & Cultural","Ella Train & Tea Country"
  ],3,[3,5,1]],

  ["Switzerland", [
    "Zurich City & Lake","Lucerne & Chapel Bridge","Interlaken Adventure",
   
  ],3,[3,6,1]]
];

function slugify(s) {
  return s.toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

let packages = [];
countrySpecs.forEach(([country, places, count, dur]) => {
  for (let i = 0; i < count; i++) {
    const place = places[i % places.length];
    const nights = Math.floor(Math.random() * (dur[1] - dur[0] + 1)) + dur[0];
    const days = nights + dur[2];
    const slug = slugify(country + "-" + place);

    packages.push({
      title: `${country} – ${place} – ${nights} Nights / ${days} Days Tour`,
      country,
      nights,
      days,
      image: `asset/${slug}.jpg`,
      url: `package-tour/${slug}.html`
    });
  }
});

// ------------------------------------------------------------
// RENDER FUNCTION
// ------------------------------------------------------------
const grid = document.getElementById("grid");

function render(list) {
  grid.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.onclick = () => (window.location.href = p.url);

    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" onerror="this.src='${fallbackImage}'">
      <div class="card-body">
        <div>
          <div class="meta">📍 ${p.country}</div>
          <div class="title">${p.title}</div>
        </div>
        <div class="dur">${p.nights} Nights / ${p.days} Days</div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Initial load
render(packages);

// ------------------------------------------------------------
// SEARCH LOGIC (Simple + Working)
// ------------------------------------------------------------
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const q = searchInput.value.trim().toLowerCase();

  const filtered = packages.filter(p =>
    (p.title + " " + p.country).toLowerCase().includes(q)
  );

  if (filtered.length > 0) {
    render(filtered);
  } else {
    alert("❌ No tour packages available for: " + searchInput.value);
  }
});


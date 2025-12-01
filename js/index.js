  //  BACK TO TOP 
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) backToTopBtn.classList.remove('hidden');
    else backToTopBtn.classList.add('hidden');
  });
  backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


  // Initialize AOS
  AOS.init({ duration: 1000 });

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

  const slides = [
  {
    eyebrow: 'Incredible India',
    title: 'Taj Mahal & Cultural Wonders',
    sub: 'Heritage, flavors, and vibrant festivals.',
    bg: 'asset/india.jpg', 
    cards: [
      { name: '', img: 'asset/india1.jpg' },   
      { name: '', img: 'asset/india2.jpg' },   
      { name: '', img: 'asset/india3.jpg' }    
    ]
  },

  {
    eyebrow: 'Bali Escape',
    title: 'Beaches & Temples',
    sub: 'Tropical sunsets and island tranquility.',
    bg: 'asset/bali.jpg',
    cards: [
      { name: '', img: 'asset/bali1.jpg' },
      { name: '', img: 'asset/bali2.jpg' },
      { name: '', img: 'asset/bali3.jpg' }
    ]
  },

  {
    eyebrow: 'Hawaii',
    title: 'Volcanoes & Surf',
    sub: 'Aloha spirit, dramatic coasts and surf culture.',
    bg: 'asset/hawaii.jpg',
    cards: [
      { name: '', img: 'asset/hawaii1.jpg' },
      { name: '', img: 'asset/hawaii2.jpg' },
      { name: '', img: 'asset/hawaii3.jpg' }
    ]
  },

  {
    eyebrow: 'Japan',
    title: 'Tradition Meets Neon',
    sub: 'Temples, sushi, and futuristic cityscapes.',
    bg: 'asset/japan.jpg',
    cards: [
      { name: '', img: 'asset/japan1.jpg' },
      { name: '', img: 'asset/japan2.jpg' },
      { name: '', img: 'asset/japan3.jpg' }
    ]
  },

  {
    eyebrow: 'China',
    title: 'History & Landscapes',
    sub: 'Great Wall, rice terraces and megacities.',
    bg: 'asset/china.jpg',
    cards: [
      { name: '', img: 'asset/china1.jpg' },
      { name: '', img: 'asset/china2.jpg' },
      { name: '', img: 'asset/china3.jpg' }
    ]
  },

  {
    eyebrow: 'Switzerland',
    title: 'Alps & Lakes',
    sub: 'Snowy peaks, chalets and pristine lakes.',
    bg: 'asset/switzerland.jpg',
    cards: [
      { name: '', img: 'asset/switzerland1.jpg' },
      { name: '', img: 'asset/switzerland2.jpg' },
      { name: '', img: 'asset/switzerland3.jpg' }
    ]
  },

  {
    eyebrow: 'Paris',
    title: 'Romance & Museums',
    sub: 'Elegant boulevards, art and cuisine.',
    bg: 'asset/paris.jpg',
    cards: [
      { name: '', img: 'asset/paris1.jpg' },
      { name: '', img: 'asset/paris2.jpg' },
      { name: '', img: 'asset/paris3.jpg' }
    ]
  }
];

      
let idx=0;
const bgImage=document.getElementById('bgImage');
const eyebrowEl=document.getElementById('eyebrow');
const titleEl=document.getElementById('heroTitle');
const subEl=document.getElementById('heroSub');
const cardsWrap=document.getElementById('cardsWrap');

function setSlide(i){
  const s=slides[i];
  bgImage.style.opacity=0;
  setTimeout(()=>{bgImage.src=s.bg; bgImage.style.opacity=1;},200);
  eyebrowEl.textContent=s.eyebrow;
  titleEl.innerHTML=s.title;
  subEl.textContent=s.sub;

  // Cards
  cardsWrap.innerHTML='';
  s.cards.forEach((c,j)=>{
    const div=document.createElement('div');
    div.className='card';
    if(j===0) div.classList.add('left');
    else if(j===1) div.classList.add('center');
    else if(j===2) div.classList.add('right');
    div.style.backgroundImage=`url('${c.img}')`;
    const label=document.createElement('div');
    label.className='label';
    label.textContent=c.name;
    div.appendChild(label);
    cardsWrap.appendChild(div);
  });
}

// Auto-slide every 2s
setSlide(idx);
setInterval(()=>{
  idx=(idx+1)%slides.length;
  setSlide(idx);
},2000);

   
// clients
 const track = document.getElementById("sliderTrack");

    setInterval(() => {
        track.style.transform = "translateX(-25%)"; 

        setTimeout(() => {
           
            const first = track.children[0];
            track.appendChild(first);

        
            track.style.transition = "none";
            track.style.transform = "translateX(0)";

     
            setTimeout(() => {
                track.style.transition = "transform 0.7s ease-in-out";
            }, 50);

        }, 700);

    }, 2500);
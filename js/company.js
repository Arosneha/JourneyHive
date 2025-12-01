
  // ================= BACK TO TOP =================
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) backToTopBtn.classList.remove('hidden');
    else backToTopBtn.classList.add('hidden');
  });
  backToTopBtn.addEventListener('click', 
    () => window.scrollTo({
     top: 0, behavior: 'smooth'
     })
    );

  // ================= COUNTER =================
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;
      const increment = target / 200;
      if(c < target){
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 15);
      } else counter.innerText = target;
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(
        entry => {
        if(entry.isIntersecting){
          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.7 });
    observer.observe(counter);
  });


  // Initialize AOS
  AOS.init({ duration: 1000 });

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }

});

// Highlights Selector Content
const infoContent = {
  vision: `
    <h3>Vision Statement</h3>

    <p>
      <strong>Transforming the justice experience for all</strong> through progressive, ethical, and inclusive legal
practice that promotes societal impact and transformative change.
    </p>
    <p>
 We strive to be the region’s
leading law firm, recognized for our commitment to justice, excellence, and positive societal
change, inspiring a just and equitable society where rights are upheld, and communities thrive
    </p>
  `,
  mission: `
    <h3>Mission Statement</h3>
    <p>
      To provide exceptional legal services grounded in integrity, excellence, and innovation. We are
      committed to advocating for our clients’ rights and fostering societal transformation through capacity
      building, legal awareness, policy influence, and public engagement.
    </p>
    <p>
      Our goal is to promote justice, uphold human dignity, and contribute to sustainable societal progress.
    </p>
  `,
  values: `
    <h3>Core Values</h3>
    <ul>
      <li><strong>Fairness</strong> – Promoting justice as fairness, inclusion, and non-discrimination.</li>
      <li><strong>Integrity</strong> – Upholding the highest ethical standards—credibility, honesty, transparency, confidentiality, and accountability.</li>
      <li><strong>Dependability</strong> – Delivering reliable, trustworthy legal services with unwavering loyalty to our clients’ needs and interests.</li>
      <li><strong>Excellence</strong> – Maintaining professionalism, diligence, and quality in all our services.</li>
      <li><strong>Compassion</strong> – Respecting human dignity, demonstrating empathy, and making a meaningful difference in people’s lives.</li>
    </ul>
  `,
  principles: `
    <h3>Guiding Principles</h3>
    <ul>
      <li><strong>Collaboration</strong>: Partnering with advocates, civil society, and government to maximize impact.</li>
      <li><strong>Creativity and Innovation</strong>: Applying cutting-edge legal practices and exploring new approaches, including emerging technologies like artificial intelligence (AI).</li>
      <li><strong>Purpose-driven</strong>: Committing to societal impact and transformative change, guided by a deep sense of purpose.</li>
    </ul>
  `
};

const navItems = document.querySelectorAll('.nav-list li');
const display = document.getElementById('infoDisplay');

if (display && navItems.length > 0) {
  display.innerHTML = infoContent['vision'];

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const section = item.getAttribute('data-section');
      display.innerHTML = infoContent[section];
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("active");
  });
});

// Team bio toggle
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const desc = btn.nextElementSibling;
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.textContent = expanded ? 'View Profile' : 'Hide Profile';
    desc.hidden = expanded;
  });
});




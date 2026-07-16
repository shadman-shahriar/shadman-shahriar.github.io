// Shared JS extracted from inline scripts in index.html and projects.html

// Project Data
const allProjects = [
  {
    title: "Hot-airgun station",
    description:
      "Designed and developed a multifunctional Hot Air Gun Station featuring precise microcontroller-based temperature control, seven-segment display, and adjustable airflow. Integrated with intuitive fault indication and stability features for professional soldering and de-soldering applications.",
    image: "project_images/Hot-airgun_station.PNG",
    technologies: ["AVR", "PID", "PCB", "Firmware"],
    projectLink: "#",
  },
  {
    title: "Bench Power Supply",
    description:
      "Developed a DC bench power supply with 0–24V / 0–6A variable output, featuring constant voltage/current modes and short-circuit protection. Includes dual 3-digit displays, individual control knobs, and LED indicators for CV/CC modes.",
    image: "project_images/Bench_Power_Supply.PNG",
    technologies: ["C++", "PCB Design", "CC", "CV"],
    projectLink: "#",
  },
  {
    title: "SMD rework station",
    description:
      "Designed an integrated SMD rework and soldering station powered by an AVR microcontroller, ensuring precise temperature control and stability. Features LCD display, independent operation, fault detection, and automatic cooling for enhanced safety and efficiency.",
    image: "project_images/SMD_rework_station.PNG",
    technologies: ["PCB Design", "Embedded C++", "AVR", "PID"],
    projectLink: "#",
  },
  {
    title: "PlantPulse IoT Hardware (v1.0)",
    description:
      "Designed and prototyped a smart agriculture monitoring PCB centered around the ESP32-S3. Integrates an RS485 Modbus RTU interface for a 7-in-1 soil sensor, complete with onboard 3.7V Li-ion battery management, USB-C charging, and dedicated voltage regulation for field-ready environmental logging.",
    image: "project_images/plant_pulse_v1.png",
    technologies: ["PCB Design", "ESP32-S3", "Modbus RTU", "Power Management"],
    projectLink: "https://github.com/LankaSmartFarm/PlantPulse/tree/main/Hardware",
  },
  {
    title: "WS2812 Wireless LED Controller",
    description:
      "Designed and developed a split RX/TX PCB control system utilizing ESP microcontrollers for wireless addressable LED management. Features low-latency data transmission to drive WS2812 LED matrices or strips remotely, combining robust RF communication with precise timing control.",
    image: "project_images/ws2812_wireless_controller.png",
    technologies: ["PCB Design", "ESP32 / ESP8266", "Embedded C++", "Wireless Communication"],
    projectLink: "#",
  },
  {
    title: "Inverter Companion PCB",
    description:
      "Developed a control and monitoring companion board for basic inverter setups using a CH32 MCU. Features automated mains/inverter changeover, smart battery protection, load safety controls, real-time power tracking via display, and temperature-controlled thermal management.",
    image: "project_images/inverter_companion_pcb.png", // Update with your actual image path
    technologies: ["PCB Design", "Embedded C", "CH32 MCU", "Power Electronics"],
    projectLink: "#",
  },
  {
    title: "3-Input Automatic Transfer Switch (ATS)",
    description:
      "Engineered a tiered-logic power management system utilizing an AVR microcontroller to manage switching between Main AC, Inverter, and Generator sources. Features integrated battery threshold monitoring to protect battery life and automated generator starter control.",
    image: "project_images/3_input_ats.png",
    technologies: ["PCB Design", "Embedded C++", "AVR", "Power Management"],
    projectLink: "#",
  },
  {
    title: "USB-C Component Tester",
    description:
      "Designed and prototyped a compact component tester featuring a USB Type-C power input and an integrated OLED display for real-time diagnostics. Implemented custom firmware to accurately detect and measure various electronic components.",
    image: "project_images/component_tester.PNG",
    technologies: ["PCB Design", "Embedded C", "OLED Display", "Hardware Prototyping"],
    projectLink: "#",
  },
  {
    title: "SMD Rework Station (v3)",
    description:
      "Developing the third iteration of a polished, professional SMD rework station. Engineered a custom PCB that interfaces a low-cost feature phone TFT display with an STM32 microcontroller, rendering a custom-designed, smooth UI for real-time temperature and system tracking.",
    image: "project_images/smd_rework_v3.png",
    technologies: ["PCB Design", "STM32", "Embedded C++", "UI/UX Design"],
    projectLink: "#",
  },
  {
    title: "Custom HMI Control Board",
    description:
      "Designed and developed a microcontroller-based HMI control board tailored for industrial automation environments. Engineered to bridge custom firmware with display interfaces, providing robust, real-time monitoring and control capabilities as an alternative to standard PLCs.",
    image: "project_images/custom_hmi_board.png",
    technologies: ["PCB Design", "Industrial Automation", "Firmware Development", "HMI"],
    projectLink: "#",
  },
  {
    title: "AVR MCU Programmer",
    description:
      "Developed a USBASP-based AVR programmer supporting 8-pin to 40-pin Atmel MCUs, featuring ISP header for external circuit programming. Compact, reliable, and ideal for embedded development and prototyping.",
    image: "project_images/AVR_MCU_Programmer.PNG",
    technologies: ["KiCad", "PCB Design", "AVR", "Firmware"],
    projectLink: "#",
  },
  {
    title: "Electronic Component Tester",
    description:
      "Designed a compact electronic component tester capable of measuring resistors, capacitors, inductors, and transistors (BJTs, MOSFETs, IGBTs) with high accuracy. A versatile, user-friendly tool for electronics testing and troubleshooting.",
    image: "project_images/Electronic_Component_Tester.PNG",
    technologies: ["AVR Microcontroller", "LCD", "Tools", "Firmware"],
    projectLink: "#",
  },
  {
    title: "Milk Cooler Tank Controller",
    description:
      "Developed an AVR-based milk cooler tank controller for precise and energy-efficient temperature regulation in dairy applications. Ensures optimal milk preservation with reliable performance and minimal power consumption.",
    image: "project_images/Milk_Cooler_Tank_Controlle.PNG",
    technologies: [
      "Temperature Control",
      "Embedded System",
      "Microcontroller",
      "Food Processing Equipment",
    ],
    projectLink: "#",
  },
  {
    title: "Smart Bike Helmet Indicator",
    description:
      "Designed a smart bike helmet with LED-based turn and brake indicators, featuring Atmega328p control and NRF wireless communication for synchronized signaling. Enhances cyclist safety through real-time hardware and firmware integration.",
    image: "project_images/Smart_Bike_Helmet Indicator.PNG",
    technologies: [
      "Bike Safety",
      "Embedded System",
      "Wireless Communication",
      "Firmware Development",
    ],
    projectLink: "#",
  },
];

function smoothScrollInit() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function initFooterYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}

function renderCarouselProjects() {
  const projectsContainer = document.getElementById('projects-container');
  if (!projectsContainer) return;

  projectsContainer.innerHTML = '';
  const projectsToShow = allProjects.slice(0, 5);

  projectsToShow.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.className =
      'flex-none w-80 bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1';

    const techTagsHtml = project.technologies
      .map(
        (tech) =>
          `<span class="bg-indigo-200 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">${tech}</span>`
      )
      .join('');

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title} Thumbnail" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-2xl font-semibold text-indigo-800 mb-2">${project.title}</h3>
        <p class="text-gray-700 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${techTagsHtml}
        </div>
      </div>
    `;

    projectsContainer.appendChild(projectCard);
  });
}

function renderProjectsGrid() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = '';

  allProjects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.className =
      'flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1';

    const techTagsHtml = project.technologies
      .map(
        (tech) =>
          `<span class="bg-indigo-200 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">${tech}</span>`
      )
      .join('');

    projectCard.innerHTML = `
      <div class="md:w-1/3 w-full">
        <img src="${project.image}" alt="${project.title} Thumbnail" class="w-full h-48 md:h-full object-cover">
      </div>
      <div class="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 class="text-2xl font-semibold text-indigo-800 mb-2">${project.title}</h3>
          <p class="text-gray-700 mb-4">${project.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${techTagsHtml}
          </div>
        </div>
        ${project.projectLink && project.projectLink !== '#'
          ? `<a href="${project.projectLink}" target="_blank" class="inline-block bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 self-start">View Details</a>`
          : ''}
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });
}

function initCarouselAutoScroll() {
  const projectsContainer = document.getElementById('projects-container');
  const scrollLeftBtn = document.getElementById('scroll-left-btn');
  const scrollRightBtn = document.getElementById('scroll-right-btn');
  if (!projectsContainer) return;

  const projectCardWidth = 320 + 24; // w-80 (320px) + space-x-6 (24px)
  let autoScrollInterval;
  let autoScrollTimeout;

  const autoScrollDelay = 5000;
  const userInteractionDelay = 10000;

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
    clearTimeout(autoScrollTimeout);
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
      if (
        projectsContainer.scrollLeft +
          projectsContainer.clientWidth >=
        projectsContainer.scrollWidth - 1
      ) {
        projectsContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        projectsContainer.scrollBy({ left: projectCardWidth, behavior: 'smooth' });
      }
    }, autoScrollDelay);
  }

  function resetAutoScrollTimer() {
    stopAutoScroll();
    autoScrollTimeout = setTimeout(startAutoScroll, userInteractionDelay);
  }

  function scrollProjects(direction) {
    const scrollAmount = projectCardWidth;
    projectsContainer.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    resetAutoScrollTimer();
  }

  if (scrollLeftBtn) scrollLeftBtn.addEventListener('click', () => scrollProjects('left'));
  if (scrollRightBtn) scrollRightBtn.addEventListener('click', () => scrollProjects('right'));

  projectsContainer.addEventListener('scroll', resetAutoScrollTimer);

  startAutoScroll();
}

function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const htmlElement = document.documentElement;

  if (!themeToggleBtn || !themeToggleIcon) return;

  function setTheme(theme) {
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      themeToggleIcon.classList.remove('fa-moon');
      themeToggleIcon.classList.add('fa-sun');
    } else {
      htmlElement.classList.remove('dark');
      themeToggleIcon.classList.remove('fa-sun');
      themeToggleIcon.classList.add('fa-moon');
    }
    localStorage.setItem('theme', theme);
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  themeToggleBtn.addEventListener('click', () => {
    setTheme(htmlElement.classList.contains('dark') ? 'light' : 'dark');
  });
}

function initTypingEffect() {
  const typingTextElement = document.getElementById('typing-text');
  if (!typingTextElement) return;

  const professions = [
    'Electronics Engineer',
    'Embedded System Engineer',
    'Schematic designing',
    'PCB designing',
    'MCU Programming',
    'Electronic Product Development',
  ];

  let professionIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBeforeDelete = 1500;
  const pauseBeforeType = 500;

  function typeWriter() {
    const currentProfession = professions[professionIndex];

    if (isDeleting) {
      typingTextElement.textContent = currentProfession.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        setTimeout(typeWriter, pauseBeforeType);
      } else {
        setTimeout(typeWriter, deletingSpeed);
      }
    } else {
      typingTextElement.textContent = currentProfession.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentProfession.length) {
        isDeleting = true;
        setTimeout(typeWriter, pauseBeforeDelete);
      } else {
        setTimeout(typeWriter, typingSpeed);
      }
    }
  }

  setTimeout(typeWriter, 500);
}

function init() {
  initThemeToggle();
  initFooterYear();
  smoothScrollInit();

  // Projects (both carousel + grid)
  renderCarouselProjects();
  renderProjectsGrid();
  initCarouselAutoScroll();

  // Hero typing (only exists on index.html)
  initTypingEffect();
}

document.addEventListener('DOMContentLoaded', init);


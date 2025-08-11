```ts
---
import { Image } from "astro:assets";
import "../styles/global.css";
const myImage = 'https://github.com/Dulkh91/next-moviedb-search/blob/main/public/image/home.png?raw=true'
import 'aos/dist/aos.css';
---

<section class="container mx-auto max-w-4xl" data-aos="fade-up">
  <div class="mx-2 rounded shadow-xl mb-5 dark:text-white dark:border dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col md:flex-row justify-between mx-auto p-3 gap-4">
      
      <!-- វិធីទី 1: ប្រើ CSS classes + JavaScript -->
      <div class="md:order-1 order-2 mobile-fade-up desktop-fade-right" data-aos-delay="200">
        <h1 class="text-4xl">Hello Dul</h1>
      </div>
      
      <!-- វិធីទី 2: ប្រើ data attributes ផ្សេងគ្នា -->
      <div class="shrink-0 md:order-2 order-1 w-full md:w-auto mobile-slide-down desktop-fade-left" data-aos-delay="400">
        <Image
          src={myImage}
          alt="title"
          width={500}
          height={120}
          class="w-full h-auto mx-auto md:mx-0 md:max-w-[350px]"
        />
      </div>
    </div>
  </div>
</section>

<script>
  import AOS from 'aos';
  
  document.addEventListener('DOMContentLoaded', () => {
    // រកមើល screen size
    const isMobile = window.innerWidth < 768; // 768px គឺ md breakpoint របស់ Tailwind
    
    // កំណត់ animation attributes ទៅតាម device
    document.querySelectorAll('.mobile-fade-up').forEach(element => {
      if (isMobile) {
        element.setAttribute('data-aos', 'fade-up');
      } else {
        // ប្រើ class name ដែលបានកំណត់សម្រាប់ desktop
        if (element.classList.contains('desktop-fade-right')) {
          element.setAttribute('data-aos', 'fade-right');
        }
      }
    });
    
    document.querySelectorAll('.mobile-slide-down').forEach(element => {
      if (isMobile) {
        element.setAttribute('data-aos', 'slide-down');
      } else {
        if (element.classList.contains('desktop-fade-left')) {
          element.setAttribute('data-aos', 'fade-left');
        }
      }
    });
    
    // Initialize AOS
    AOS.init({
      offset: isMobile ? 50 : 100,        // offset ផ្សេងគ្នាសម្រាប់ mobile/desktop
      duration: isMobile ? 600 : 800,     // duration ផ្សេងគ្នា
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });
    
    // Refresh AOS នៅពេល resize window
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 250);
    });
  });
</script>

<!-- វិធីទី 3: ប្រើ CSS Media Queries (Advanced) -->
<style>
  /* Mobile animations */
  @media (max-width: 767px) {
    [data-aos="fade-right"] {
      transform: translate3d(-100px, 0, 0) !important;
      opacity: 0 !important;
    }
    [data-aos="fade-right"].aos-animate {
      transform: translate3d(0, 0, 0) !important;
      opacity: 1 !important;
    }
  }
  
  /* Desktop animations */
  @media (min-width: 768px) {
    .mobile-specific-animation {
      animation: none !important;
    }
  }
</style>
```
វិធីសាស្រ្តសម្រាប់ Responsive AOS:
វិធីទី 1: JavaScript Dynamic (បានបង្ហាញខាងលើ)

ពិនិត្យ screen size
កំណត់ data-aos attributes ទៅតាម device
ការកំណត់ផ្សេងគ្នាសម្រាប់ mobile/desktop
### វិធីទី 2: កាន់តែសាមញ្ញ - ប្រើតែ CSS Classes:
```ts
---
import { Image } from "astro:assets";
import "../styles/global.css";
const myImage = 'https://github.com/Dulkh91/next-moviedb-search/blob/main/public/image/home.png?raw=true'
import 'aos/dist/aos.css';
---

<section class="container mx-auto max-w-4xl" data-aos="fade-up">
  <div class="mx-2 rounded shadow-xl mb-5 dark:text-white dark:border dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col md:flex-row justify-between mx-auto p-3 gap-4">
      
      <!-- វិធីសាមញ្ញ: ប្រើ different animations -->
      <div class="md:order-1 order-2" data-aos="fade-up" data-aos-delay="200">
        <h1 class="text-4xl">Hello Dul</h1>
      </div>
      
      <!-- Mobile: slide-up, Desktop: fade-left ដោយស្វ័យប្រវត្តិ -->
      <div class="shrink-0 md:order-2 order-1 w-full md:w-auto" data-aos="slide-up" data-aos-delay="400">
        <Image
          src={myImage}
          alt="title"
          width={500}
          height={120}
          class="w-full h-auto mx-auto md:mx-0 md:max-w-[350px]"
        />
      </div>
    </div>
  </div>
</section>

<script>
  import AOS from 'aos';
  
  document.addEventListener('DOMContentLoaded', () => {
    // រកមើល screen size
    const isMobile = window.innerWidth < 768; // 768px គឺ md breakpoint របស់ Tailwind
    
    // កំណត់ animation attributes ទៅតាម device
    document.querySelectorAll('.mobile-fade-up').forEach(element => {
      if (isMobile) {
        element.setAttribute('data-aos', 'fade-up');
      } else {
        // ប្រើ class name ដែលបានកំណត់សម្រាប់ desktop
        if (element.classList.contains('desktop-fade-right')) {
          element.setAttribute('data-aos', 'fade-right');
        }
      }
    });
    
    document.querySelectorAll('.mobile-slide-down').forEach(element => {
      if (isMobile) {
        element.setAttribute('data-aos', 'slide-down');
      } else {
        if (element.classList.contains('desktop-fade-left')) {
          element.setAttribute('data-aos', 'fade-left');
        }
      }
    });
    
    // Initialize AOS
    AOS.init({
      offset: isMobile ? 50 : 100,        // offset ផ្សេងគ្នាសម្រាប់ mobile/desktop
      duration: isMobile ? 600 : 800,     // duration ផ្សេងគ្នា
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });
    
    // Refresh AOS នៅពេល resize window
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 250);
    });
  });
</script>

<!-- វិធីទី 3: ប្រើ CSS Media Queries (Advanced) -->
<style>
  /* Mobile animations */
  @media (max-width: 767px) {
    [data-aos="fade-right"] {
      transform: translate3d(-100px, 0, 0) !important;
      opacity: 0 !important;
    }
    [data-aos="fade-right"].aos-animate {
      transform: translate3d(0, 0, 0) !important;
      opacity: 1 !important;
    }
  }
  
  /* Desktop animations */
  @media (min-width: 768px) {
    .mobile-specific-animation {
      animation: none !important;
    }
  }
</style>
```
### វិធីទី 3: ប្រើ AOS Options ផ្សេងគ្នា:
```ts
// Mobile settings
const mobileAOS = {
  offset: 30,
  duration: 500,
  easing: 'ease-in-out'
};

// Desktop settings  
const desktopAOS = {
  offset: 100,
  duration: 800,
  easing: 'ease-out-cubic'
};
```
Animations ដែលស័ក្តិសមសម្រាប់ device នីមួយៗ:
📱 Mobile (Portrait):

fade-up, slide-up - ល្អសម្រាប់ vertical scroll
zoom-in - smooth និងមិនជាប់គាំង

💻 Desktop:

fade-left, fade-right - ល្អសម្រាប់ horizontal layout
slide-left, slide-right - dramatic effects
flip-* animations - smooth នៅ large screen


---
# Scroll up
animation ដំណើរការពេល scroll up ទៅវិញ អ្នកត្រូវកំណត់ mirror: true និង once: false។ នេះគឺជាកូដពេញលេញ:
```ts
---
import { Image } from "astro:assets";
import "../styles/global.css";
const myImage = 'https://github.com/Dulkh91/next-moviedb-search/blob/main/public/image/home.png?raw=true'
import 'aos/dist/aos.css';
---

<section class="container mx-auto max-w-4xl" data-aos="fade-up">
  <div class="mx-2 rounded shadow-xl mb-5 dark:text-white dark:border dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col md:flex-row justify-between mx-auto p-3 gap-4">
      
      <!-- Animation ពេល scroll down និង scroll up -->
      <div class="md:order-1 order-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
        <h1 class="text-4xl">Hello Dul</h1>
      </div>
      
      <!-- Mobile: slide-up, Desktop: fade-left ដោយស្វ័យប្រវត្តិ -->
      <div class="shrink-0 md:order-2 order-1 w-full md:w-auto" data-aos="slide-up" data-aos-delay="400" data-aos-anchor-placement="top-bottom">
        <Image
          src={myImage}
          alt="title"
          width={500}
          height={120}
          class="w-full h-auto mx-auto md:mx-0 md:max-w-[350px]"
        />
      </div>
    </div>
  </div>
</section>

<script>
  import AOS from 'aos';
  
  document.addEventListener('DOMContentLoaded', () => {
    // រកមើល screen size
    const isMobile = window.innerWidth < 768; // 768px គឺ md breakpoint របស់ Tailwind
    
    // កំណត់ animation attributes ទៅតាម device
    document.querySelectorAll('.mobile-fade-up').forEach(element => {
      if (isMobile) {
        element.setAttribute('data-aos', 'fade-up');
      } else {
        // ប្រើ class name ដែលបានកំណត់សម្រាប់ desktop
        if (element.classList.contains('desktop-fade-right')) {
          element.setAttribute('data-aos', 'fade-right');
        }
      }
    });
    
    document.querySelectorAll('.mobile-slide-down').forEach(element => {
      if (isMobile) {
        element.setAttribute('data-aos', 'slide-down');
      } else {
        if (element.classList.contains('desktop-fade-left')) {
          element.setAttribute('data-aos', 'fade-left');
        }
      }
    });
    
    // Initialize AOS
    AOS.init({
      offset: isMobile ? 50 : 100,        // offset ផ្សេងគ្នាសម្រាប់ mobile/desktop
      duration: isMobile ? 600 : 800,     // duration ផ្សេងគ្នា
      easing: 'ease-out-cubic',
      once: false,                        // animate រាល់ពេលដែល scroll (មិនមែនតែម្តង)
      mirror: true,                       // animate ពេល scroll up ទៅវិញ
      anchorPlacement: 'top-bottom',      // ចំណុចកំណត់សម្រាប់ការ trigger
      startEvent: 'DOMContentLoaded',     // ចាប់ផ្តើមពេល DOM ផ្ទុកហើយ
      animatedClassName: 'aos-animate',   // class name ពេល animate
      initClassName: 'aos-init',          // class name ដំបូង
      useClassNames: false,               // មិនប្រើ custom class names
      disableMutationObserver: false,     // enable DOM changes detection
      debounceDelay: 50,                  // delay សម្រាប់ resize/orientationchange
      throttleDelay: 99                   // delay សម្រាប់ scroll
    });
    
    // Refresh AOS នៅពេល resize window
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 250);
    });
  });
</script>

<!-- វិធីទី 3: ប្រើ CSS Media Queries (Advanced) -->
<style>
  /* Mobile animations */
  @media (max-width: 767px) {
    [data-aos="fade-right"] {
      transform: translate3d(-100px, 0, 0) !important;
      opacity: 0 !important;
    }
    [data-aos="fade-right"].aos-animate {
      transform: translate3d(0, 0, 0) !important;
      opacity: 1 !important;
    }
  }
  
  /* Desktop animations */
  @media (min-width: 768px) {
    .mobile-specific-animation {
      animation: none !important;
    }
  }
</style>
```
ចំណុចសំខាន់សម្រាប់ Reverse Animation:
### 1. Settings សំខាន់:

once: false - animate រាល់ពេលដែល scroll (មិនមែនតែម្តង)
mirror: true - animate ពេល scroll up ទៅវិញ
data-aos-anchor-placement="top-bottom" - កំណត់ចំណុច trigger

### 2. Anchor Placement Options:
```ts
// ជម្រើសផ្សេងៗសម្រាប់ anchor-placement:
'top-bottom'    // ចាប់ផ្តើមពេល top element ទៅដល់ bottom viewport
'top-center'    // ចាប់ផ្តើមពេល top element ទៅដល់ center viewport  
'top-top'       // ចាប់ផ្តើមពេល top element ទៅដល់ top viewport
'center-bottom' // ចាប់ផ្តើមពេល center element ទៅដល់ bottom viewport
'center-center' // ចាប់ផ្តើមពេល center element ទៅដល់ center viewport
'bottom-bottom' // ចាប់ផ្តើមពេល bottom element ទៅដល់ bottom viewport
```
### 3. ប្រសិនបើចង់ animation smooth ជាងនេះ:
```ts
---
import { Image } from "astro:assets";
import "../styles/global.css";
const myImage = 'https://github.com/Dulkh91/next-moviedb-search/blob/main/public/image/home.png?raw=true'
import 'aos/dist/aos.css';
---

<section class="container mx-auto max-w-4xl" data-aos="fade-up">
  <div class="mx-2 rounded shadow-xl mb-5 dark:text-white dark:border dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col md:flex-row justify-between mx-auto p-3 gap-4">
      
      <!-- Animation ពេល scroll down និង scroll up -->
      <div class="md:order-1 order-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
        <h1 class="text-4xl">Hello Dul</h1>
      </div>
      
      <!-- Mobile: slide-up, Desktop: fade-left ដោយស្វ័យប្រវត្តិ -->
      <div class="shrink-0 md:order-2 order-1 w-full md:w-auto" data-aos="slide-up" data-aos-delay="400" data-aos-anchor-placement="top-bottom">
        <Image
          src={myImage}
          alt="title"
          width={500}
          height={120}
          class="w-full h-auto mx-auto md:mx-0 md:max-w-[350px]"
        />
      </div>
    </div>
  </div>
</section>

<script>
  import AOS from 'aos';
  
  document.addEventListener('DOMContentLoaded', () => {
    // រកមើល screen size
    const isMobile = window.innerWidth < 768; // 768px គឺ md breakpoint របស់ Tailwind
    
    // កំណត់ animation attributes ទៅតាម device
    document.querySelectorAll('.mobile-fade-up').forEach(element => {
      if (isMobile) {
        element.setAttribute('data-aos', 'fade-up');
      } else {
        // ប្រើ class name ដែលបានកំណត់សម្រាប់ desktop
        if (element.classList.contains('desktop-fade-right')) {
          element.setAttribute('data-aos', 'fade-right');
        }
      }
    });
    
    document.querySelectorAll('.mobile-slide-down').forEach(element => {
      if (isMobile) {
        element.setAttribute('data-aos', 'slide-down');
      } else {
        if (element.classList.contains('desktop-fade-left')) {
          element.setAttribute('data-aos', 'fade-left');
        }
      }
    });
    
    // Initialize AOS
    AOS.init({
      offset: isMobile ? 50 : 100,        // offset ផ្សេងគ្នាសម្រាប់ mobile/desktop
      duration: isMobile ? 600 : 800,     // duration ផ្សេងគ្នា
      easing: 'ease-out-cubic',
      once: false,                        // animate រាល់ពេលដែល scroll (មិនមែនតែម្តង)
      mirror: true,                       // animate ពេល scroll up ទៅវិញ
      anchorPlacement: 'top-bottom',      // ចំណុចកំណត់សម្រាប់ការ trigger
      startEvent: 'DOMContentLoaded',     // ចាប់ផ្តើមពេល DOM ផ្ទុកហើយ
      animatedClassName: 'aos-animate',   // class name ពេល animate
      initClassName: 'aos-init',          // class name ដំបូង
      useClassNames: false,               // មិនប្រើ custom class names
      disableMutationObserver: false,     // enable DOM changes detection
      debounceDelay: 50,                  // delay សម្រាប់ resize/orientationchange
      throttleDelay: 99                   // delay សម្រាប់ scroll
    });
    
    // Refresh AOS នៅពេល resize window
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 250);
    });
  });
</script>

<!-- CSS បន្ថែមសម្រាប់ smooth transitions -->
<style>
  /* Smooth transitions សម្រាប់ AOS */
  [data-aos] {
    pointer-events: none;
  }
  [data-aos].aos-animate {
    pointer-events: auto;
  }
  
  /* Custom easing សម្រាប់ smoother animation */
  .aos-init[data-aos][data-aos][data-aos-duration="800"],
  .aos-animate[data-aos][data-aos][data-aos-duration="800"] {
    transition-duration: 0.8s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  /* Mobile optimizations */
  @media (max-width: 767px) {
    [data-aos] {
      transform: none !important;
      opacity: 1 !important;
    }
    .aos-animate[data-aos] {
      transform: none !important;
    }
  }
</style>
```
ឥឡូវនេះ animation នឹង:

Scroll Down: fade-up/slide-up animation
Scroll Up: reverse animation (fade-down/slide-down)
Smooth transitions: ជាមួយ custom easing
Mobile optimized: performance ល្អជាងនៅលើទូរស័ព្ទ
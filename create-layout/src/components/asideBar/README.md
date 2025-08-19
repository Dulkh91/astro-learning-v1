
```js
<script>
  class currentIndex extends HTMLElement {
    connectedCallback() {
      const container = this.querySelector('.aside-menu');
      const currentItem = this.querySelector('[aria-current="page"]');

      if (container && currentItem) {
        // Scroll to the current item smoothly
        currentItem.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      }
    }
  }

  customElements.define('list-menu', currentIndex);
</script>
```


នេះ មិនមែន scroll window ទេ, វា scroll container ដែល current item នៅក្នុងវា។ បើ currentItem នៅក្នុង .aside-menu ដែលមាន overflow, វានឹង scroll container នោះ—not the whole window.

✅ បើអ្នកចង់ scroll window ទៅ current item
អ្នកអាចប្រើ window.scrollTo() ប៉ុន្តែត្រូវយក offsetTop របស់ element:

```js
const top = currentItem.getBoundingClientRect().top + window.scrollY;

window.scrollTo({
  top: top - 100, // បន្ថយ 100px ដើម្បីអោយវាមាន spacing
  behavior: 'smooth'
});
``
📌 តើ block: 'center' និង inline: 'center' មានអត្ថន័យអ្វី?
block: 'center' → scroll vertically ដើម្បីអោយ element នៅកណ្តាល container

inline: 'center' → scroll horizontally ដើម្បីអោយ element នៅកណ្តាល container

ចំណាំ: វាដំណើរការល្អបើ container មាន overflow: auto ឬ scroll—បើមិនដូច្នោះ វាមិន scroll ទេ។
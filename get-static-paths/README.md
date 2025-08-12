# posts/[slug]
- របៀបប្រើ params ជាមួយ slug

- របៀបប្រើ params post សម្រាប់ទាញទិន្ន័យ
![posts](./src/assets/image/1-params.jpg)

# user/[category]/[slug]
- **Multiple Parameters**
![Multiple Parameters](./src/./assets/image/2-multi.jpg)

## file tree 
```
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── 📁 image/
│   │   │   ├── 🖼️ 1-params.jpg
│   │   │   └── 🖼️ 2-multi.jpg
│   │   ├── 🖼️ astro.svg
│   │   └── 🖼️ background.svg
│   ├── 📁 components/
│   │   └── 📄 Welcome.astro
│   ├── 📁 layouts/
│   │   └── 📄 Layout.astro
│   └── 📁 pages/
│       ├── 📁 posts/
│       │   └── 📄 [slug].astro
│       ├── 📁 users/
│       │   └── 📁 [gategory]/
│       │       └── 📄 [id].astro
│       └── 📄 index.astro
```
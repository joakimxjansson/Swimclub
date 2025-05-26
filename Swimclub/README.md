
# Swim Club One-Page Website

## 🛠️ Installation & Requirements

To configure this website, you need to have **Node.js** installed.  
To run the project for the first time, open your terminal and run:

```bash
npm install
```

### 📦 Installed Dependencies

This project uses the following dependencies:

- **[Framer Motion](https://www.framer.com/motion/)** – For animations  
- **[React Icons](https://react-icons.github.io/react-icons/)** – For including popular icon libraries

---

## 🌐 About the Website

This is a simple **one-page** website with an "About" section, originally designed for **swim clubs**, but it can easily be adapted for other purposes.

---

## 🖼️ Images

1. Images are organized into folders based on components. If you wish to change an image, place it in the folder associated with the correct component (check the folder names).
2. All images, except those in the gallery, were sourced from **Adobe Express**:  
   https://new.express.adobe.com/

### Pixabay Images:
- https://pixabay.com/photos/colorado-springs-colorado-swim-meet-114310/  
- https://pixabay.com/photos/man-muscles-pool-swimming-swimmer-1869744/  
- https://pixabay.com/photos/swim-swimming-pool-swimming-noodle-619074/  
- https://pixabay.com/photos/swim-body-of-water-swimmer-3287239/  
- https://pixabay.com/photos/swimming-exercise-swimming-pool-2323054/  
- https://pixabay.com/photos/swimming-pool-swim-water-vacation-97509/  

---

## 📬 Contact Form Setup

1. Register an account at [Formspree.com](https://formspree.com)  
2. Create a new form and copy your **Form ID**  
3. Paste the Form ID into the `action` attribute of the form in `contact.tsx`  
4. Add names for each form field (column) as required.

---

## 📁 Components & Arrays

### `Footer.tsx`
- `const sponsor[]`:  
  Add your sponsors here, including name, logo, and a link to their website.

### `Gallery.tsx`
- `const images[]`:  
  Add paths to all images you want to display in the gallery. There is no limit.

### `Sponsors.tsx`
- `const sponsors[]`:  
  Add each sponsor's name, description, logo, and URL.

### `Team.tsx`
- `const teamMembers[]`:  
  Add your team members here, including their name, role, image (path), and a short bio.

---

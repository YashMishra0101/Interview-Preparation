/*
# 👁️ Most Asked Questions in CSS for Freshers 🧑‍💻

# 1) How To add css in hmtl ?
There are three main ways** to add CSS to HTML:

1. **Inline CSS** 
   - CSS styles are applied directly to HTML elements using the `style` attribute.
   - Useful for applying quick, one-time styles to specific elements but not ideal for large-scale styling.
   ```html
   <h1 style="color: blue; font-size: 24px;">Hello World</h1>
   ```

2. **Internal CSS**  
   - CSS rules are placed inside a `<style>` tag within the `<head>` section of the HTML document.
   - Useful for styling a single page without needing an external stylesheet.
   ```html
   <head>
       <style>
           h1 {
               color: blue;
               font-size: 24px;
           }
       </style>
   </head>
   ```

3. **External CSS**  
   - CSS rules are stored in a separate `.css` file, which is linked to the HTML document using the `<link>` tag inside the `<head>`.
   - Best for larger projects, as it separates design and content, making the CSS reusable across multiple pages.
   ```html
   <head>
       <link rel="stylesheet" href="styles.css">
   </head>
   ```

### Summary:
- **Inline CSS**: Quick, one-time styling on individual elements.
- **Internal CSS**: Applies to the entire page, defined within `<style>` in `<head>`.
- **External CSS**: Best practice for large projects, allows styles to be applied across multiple pages. 

Using **external CSS** is the preferred choice for most cases due to better maintainability and reusability.
*/
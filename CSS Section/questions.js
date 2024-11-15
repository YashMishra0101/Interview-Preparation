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

# 2)What is CSS preprocessor ?

A *CSS preprocessor* is a tool that expands standard CSS capabilities, letting developers write code that is 
more dynamic, organized, and efficient. With preprocessors like **Sass**, **Less**, and **Stylus**, you can 
use features such as:

- Variables: Store reusable values like colors and fonts.
- Nesting: Write CSS in a way that visually mirrors the HTML structure.
- Mathematical Operations: Perform calculations, useful in responsive design.
- Mixins and Functions: Reuse code blocks for common styles, reducing redundancy.

*Sass* (Syntactically Awesome Style Sheets) is one of the most widely used preprocessors, enabling features 
like variables, selector nesting, and more complex operations, making it a popular choice for writing 
organized, maintainable CSS. Preprocessor code compiles into standard CSS, ready for the browser.


*/

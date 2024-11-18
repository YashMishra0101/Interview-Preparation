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

# 3)What is border size border box ?
When you use `box-sizing: border-box` in CSS, adding padding or borders **won’t change the actual height and 
width** of an element. The total size remains as you set it (e.g., 500px height and 500px width).  

Without `box-sizing: border-box` padding and borders **will increase** 
the total height and width, making the element larger than what you initially set.  

By default, `box-sizing` is set to `content-box`.

--box-sizing:border-box;
--box-sizing:content-box;(By default)

# 4)Position Property In CSS ?

  position: static (Default);
  position: relative;
  position: absolute;
  position: fixed;
  position: sticky;
  
There are Four Main Postion Property :

1. `static` (Default):  
   - This is the default position for elements.  

2. `relative`:  
   - You can move it using properties like top, right, bottom, or left.

3. `absolute`:  
   - The element moves based on its nearest parent with a position set (like `relative`)**.  
   - If there’s no such parent, it moves based on the whole page (`body`). 
   - absolute relies on a relative parent; otherwise, it uses the body.
 

4. `fixed`:  
   - The element stays in a fixed spot on the screen, no matter how much you scroll.  
   - If top, bottom, left, or right are used, the element is positioned relative to the viewport.(browser window). 

5. `sticky`:  
   - The element sticks in place while you scroll within itsn nearest parent container.  
   - It behaves like `relative` at first, then sticks like `fixed` until the parent’s boundary is reached.  
   - It "sticks" to a specified offset (e.g., top: 0) within its parent container and stops sticking once it reaches the parent's boundary.

--Key Differences Between Fixed and Sticky :

| Property         | `fixed`                            | `sticky`                           |
|------------------|------------------------------------|------------------------------------|
| Reference        | Viewport                          | Parent container boundaries         |
| Scroll Behavior  | Always stays fixed                | Becomes fixed within a boundary     |
| Common Use       | Navigation bars, floating buttons | Table headers, sticky sections      |

*/

/*
# 👁️ Most Asked Questions in CSS for Freshers 🧑‍💻

# Note 🤚
 >For CSS, you need to practice regularly, just reading and understanding the concepts is not sufficient.So, please make sure to practice properly.
 >CSS is really vast, so we cover the most frequently asked CSS-related questions for entry-level and fresher job interviews.

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
   - If top, bottom, left, or right are used, the element is positioned relative to the 
   direct viewport(browser window/body) not nearest parent no realtive is working like with absolute. 

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

# 5)What is Pseudo Elements ?

With the help of pseudo-elements, we can use CSS to style specific parts of an element or add extra 
content without modifying the HTML or using JavaScript.

--syntax : 

selector::pseudo-element {
  property: value;
}

Some Examples of Pseudo-elements 

1. `::first-letter`**: Styles the first letter of a block of text.  
2. `::selection`**: Styles the part of text selected by the user.  
3. `::before`**: Adds content before an element's content.  
4. `::after`**: Adds content after an element's content.  
5. `::marker`**: is used to style the markers of list items in ordered (<ol>) or unordered (<ul>) 
lists, such as bullets or numbers.

#6)Tell me what is colors codes and how to use them (How to give colors in css)?

>1. Named Colors :

Normal colors names , CSS supports 140 predefined color names, such as:  
- `red`  
- `blue`  
- `green`  
- `black`  
- `white` 

--Example:  

color: red;


>2)RGB (red,blue,green)

In CSS colors are primarily defined using the RGB color model, which stands for Red, Green, and Blue. These three 
primary colors combine in various intensities (from 0 to 255) to create a wide range of colors for use in digital 
designs.

CSS uses RGB because it's suited for screens, which display colors by emitting light. By adjusting the intensity 
of each color channel (R, G, B), you can form millions of colors, making RGB perfect for digital environments.

-- Syntax:

rgba(red, green, blue)

--Examples :

rgb(255, 0, 0): Pure red (maximum red, no green or blue).
rgb(0, 255, 0): Pure green.
rgb(0, 0, 255): Pure blue.
rgb(255, 255, 255): White (all colors at full intensity).
rgb(0, 0, 0): Black (no light emitted from any channel).


>3)RGBA (red,blue,green,alpha)

RGBA in CSS is an extension of the **RGB color model**. It adds an **alpha channel** to specify the color's 
**opacity** (transparency). While **RGB** focuses solely on the intensity of red, green, and blue, **RGBA** 
lets you control how transparent  color is.

-- Syntax:

rgba(red, green, blue, alpha)

--Examples :

background-color: rgba(255, 0, 0, 0.5);  A semi-transparent red 


- `red`, `green`, and `blue`: These define the intensity of the primary colors, ranging from **0 to 255**.
- `alpha`: Defines the transparency level, ranging from **0 (completely transparent)** to **1 (completely opaque)**.



> 4). Hexadecimal (Hex) Codes

Hex codes are 6-character values representing the intensities of red, green, and blue (RGB) in a color
and they start with a hashtag (#).

Hexadecimal codes are a way to define colors in CSS. These codes use a combination of numbers (0–9) and letters (A–F) to 
represent the intensity of the red, green, and blue (RGB) components of a color. A hexadecimal code consists of 6 characters 
grouped into three pairs: the first two represent red, the next two represent green, and the last two represent blue. 
You can use only numbers, only letters, or a mix of both in these pairs.

-- Examples:  

  - `#FF0000` → Red  
  - `#00FF00` → Green  
  - `#0000FF` → Blue  
  - `#000` → Black (short form)  
  - #05abcd
  - #cdabcd
  - #FF5733
  - #000000

>5. HSL Colors (Hue, Saturation, Lightness)

HSL specifies colors based on hue (0-360°), saturation (0-100%), and lightness (0-100%).  
 
--Syntax

hsl(hue(colors), saturation, lightness);

-- Example:  

color: hsl(30, 100%, 50%);  A shade of orange 
color: hsl(240, 100%, 50%);  Bright blue 
color: hsl(0, 100%, 50%);    Bright red 
color: hsl(90, 100%, 50%);

>6. HSLA Colors (with Transparency)

HSLA adds an **alpha** channel for transparency, just like `rgba()`.  
- Format: `hsla(hue, saturation, lightness, alpha)`

-- Example:  

color: hsla(30, 100%, 50%, 0.5);  50% transparent orange 


>7. CSS Custom Properties (Variables)
Colors can be defined as variables for reuse.  

-- Example:  

:root {
  --main-color: #FF5733;
}
p {
  color: var(--main-color);
}


# 7) What is CSS combinator ?

Note 🤚: Just read it for knowledge purposes and watch a quick video on YouTube for a better understanding. No one is asking for a detailed explanation of what a CSS combinator is; just read it and watch one video on YouTube. That’s it.
CSS combinators define the relationship between elements in HTML to style them based on their connection. 
There are four main types:

1. **Descendant (`space`)**: Targets all elements inside another element.  
   Example: `div p` (styles all `<p>` inside a `<div>`).

2. **Child (`>`)**: Targets only direct children.  
   Example: `div > p` (styles only direct `<p>` children of a `<div>`).

3. **Adjacent Sibling (`+`)**: Targets the next immediate sibling.  
   Example: `h1 + p` (styles the first `<p>` right after an `<h1>`).

4. **General Sibling (`~`)**: Targets all siblings after a specific element.  
   Example: `h1 ~ p` (styles all `<p>` after an `<h1>`).


# 8)Box shadow

--Syntax :

box-shadow: offset-x offset-y blur-radius spread-radius color;

Examples :

Simple : box-shadow: 10px 10px 5px gray;
Spread Effect : box-shadow: 10px 10px 5px 2px rgba(0, 0, 0, 0.5);
Inset Shadow (Adds a shadow inside the element. Use the inset keyword.) : box-shadow: inset 5px 5px 10px black;

>🤚 In general, "pseudo" means false, fake, or pretend. In CSS, pseudo-classes (:) and pseudo-elements (::) are not in the HTML. They are written in the CSS file and act like virtual parts or states, which is why they are called pseudo. 

#9) What is css variable and how to use them ?

 CSS variables (also called custom properties) are a way to store reusable values in CSS, making your code more efficient and 
 easier to maintain. They are particularly useful when you want to define values like colors, fonts, or spacing that you might
 use in multiple places.

 CSS variables allow you to declare a value once and use it throughout your CSS. They are defined 
 using -- followed by a name (e.g., --main-color).

--Syntax

Defining a variable: Use the --variable-name syntax inside a :root or a selector.

:root {
    --main-color: #3498db;
    --font-size: 16px;
}

:root is a pseudo-class that represents the document's root element. Variables defined here are global.

--useCases 

h1 {
   color: var(--main-color);
   font-size: var(--font-size);
}

Why Use CSS Variables?

Reusability: Change a value in one place, and it updates everywhere.
Maintainability: Your CSS is easier to read and modify.
Theming: Easily implement themes by switching variable values.

# 10) 
*/

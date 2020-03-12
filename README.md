# Notes and Examples from CSS in Depth by Keith Grant

## Part 1. Reviewing the fundamentals
### Chapter 1. Cascade, specificity, and inheritance
 - CSS is not a programming lanaguage, strictly speaking, but does require abstract thought
 - The most fundamental CSS principles are: the *cascade*, the *box model*, the *unit types*
 - CSS is about declaring rules: certain things should happen under various conditions
 - *Cascade* determines how conflicts are resolved
 - Cascade considers three things to resolve a conflict:
    1. *Stylesheet origin* - Where the styles come from
    2. *Selector specificity* - Which selectors take precedence
    3. *Source order* - Order in which styles are declared in the stylesheet
- We add stylesheets to webpages called *author* styles
- A web browser's default styles are called *user agent* styles
- The *selector* and *declaration block* makeup a *ruleset* or *rule*
- After user agent styles are considered, the author styles are applied. This allows for the author styles to override the user agent styles
- Declarations marked `!important` are treated as a higher-priority origin
- The browser evaluates *specificity* in two parts: styles applied inline in the HTML and styles applied using a selector
- Inline styles override any declarations applied from the stylesheet
- A selector with two class names has a higher specificity than a selector with only one
- Different types of selectors have different specificities:
    - If a selector has more IDs, it wins
    - If that results in a tie, the selector with the most classes wins
    - If that results in a tie, the selector with the most tag names wins
- Pseudo-class selects(e.g., :hover) and attribture selectors (e.g., [type="input]) have the same specificity as a class selector
- If the origin and the specificity are the same, then the declaration that appears later in the stylesheet takes precedence
- When facing a styling problem - tackle it in two phases
    1. Figure out what declarations will get it looking right
    2. Think through possible ways to structure the selectors and choose the one that best fits your needs
- When styling links define in the following order: LoVe/HAte
    1. link
    2. visited
    3. hover
    4. active
- *Cascaded value* - A value for a particular property applied to an element as a result of the cascade
- Two commons rules for working with cascade:
    1. *Don't use IDs in your selector*
    2. *Don't use !important*
- Add/remove classes to elements to dynamically change style using JavaScript
- If an element has no cascaded value for a given property, it may *inherit* one from an ancestor element - not all properties are inherited
- You can use the `inherit` keyword to force inheritance of a property not normall inherited
- Reset a property to it's default value using the `ßinitial` keyword
- *Shorthand properties* are properties that let you set the values of several other properties at one time
- Beware shorthands silently overriding other styles - styles can be set to their initial values if not explicitly defined in a shorthand property
- **Summary**
    - Keep selector specificity under control
    - Don't confuse cascade with inheritance
    - Certain properties are inherited, including text, lists, table borders
    - Don't confuse `initial` and `auto` values
    - Becareful with shorthand properties overriding property values

### Chapter 2. Working with relative units
- Pixels are *absolute* units
- `em` and `rem` are *relative* units
- *responsive* styles update based on the size of the browser window
- CSS pixel does not strictly equate to a monitor's pixel
- `Em` is a measure used in typography - referencing a specified font size
- Using ems can be convenient when setting properties like `padding, height, width, or border-radius` because these will scale evenly with the element if it inherits different font sizes
- `font-size` ems are derived from the *inherited* font size
- If you know the pixel-based font size you want, but want to specify the declaration in ems: divide the desired pixel size by the parent (inherited) pixel size
- For most browsers, the default font size is 16px (keyword value `medium`)
- Ems can produce unexpected results when you use them to specify font sizes of multiple nested elements - to know the exact value for each element, you'll need to know it's inherited font size
- When the browser parses an HTML document, it creates a representation in memory of all the elements on the page. This representation is called the *DOM* (Document Object Model)
- The `<html>` element is the top-level (root) node. It's child nodes are `<head>` and `<body>`
- *Rem* is short for root em. Instead of being relative to the current element, rems are relative to the root element
- Always specify font sizes with relative units or percentages for improved accessibility
- Rems simplify a lot of the complexities involved with ems. 
- Try to use rems for font sizes, pixels for borders, and ems for most other measures - this way font sizes are predictable but you still get the power of ems scaling your padding and margins
- The `>` in a selector is a *direct descendant combinator* - it targets a child element
- You can use *media queries* to change rulesets depending on the screen size
- *Viewport-relative units* define lengths relative to the browser's viewport
    - *vh* - 1/100th of the viewport height
    - *vw* - 1/100th of the viewport width
    - *vmin* - 1/100th of the smaller dimension (height or width)
    - *vmax* - 1/100th of the larger dimension (height or width)
- *Viewport* is the framed area in the browser window where the web page is visible - this excludes the address bar, toolbars, and status bar
- Viewport-relative lengths are great for things like making a large hero image fill the screen
- The `calc()` function lets you do basic arithmetic with two or more values
- Use `calc()` and `vw` for `font-size` to produce a responsive design that scales fluidly without the use of hard-coded breakpoints
- Some properties allow for *unitless* values (e.g., `line-height, font-weight`)
- When an element has a value defined using a *length* (px, em, rem), its **computed** value is inherited by child elements
- *Length* is the formal term for a CSS value that denotes a distance measurement. Lengths are defined as *absolute* or *relative*
- When you use a unitless number, that **declared** value is inherited, meaning its computed value is recalculated for each inheriting child element
- Custom properties or *variables* let you define a value in one place and reuse that value throughout the stylesheet
- Variables must be declared inside a declaration block
- The `var()` function accepts a second parameter, which specifies a fallback value
- Custom properties behave as a scoped variable because the values are inherited by descendant elements

**Summary**
- Embrace the use of relative units, allowing the page's structure to determine the meaning of your styles
- Favor the use of rems for font size, but selectively use ems for simple scaling of components on the page
- You can make your entire page scale responsively with viewport-relative units and not use any media queries!
- Use unitless values when specifying line height

## Acknowledgements
[CSS in Depth by Keith Grant, ISBN 9781617293450](https://www.manning.com/books/css-in-depth)
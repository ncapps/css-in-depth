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

### Chapter 3. Mastering the box model
- *Document flow* and *box model* are the basic rules that determine the position and size of elements on the page
- When you set the width or height of an element, you're specifying the width or height of it's content; any padding, border, and margins are additional
- Although there's a place for trial and error in CSS, typically that's for choices that are stylistic in nature and not for forcing things to fit into position
- CSS allows you to adjust the box model behavior with the `box-sizing` property
- The `border-box` value make the `height` and `width` properties set the combined size of the content, padding and border
- em-based gutters are consistent and explicit in the code
- Working with element height is different than working with element width, typically it's best to avoid setting explicit heights on elements
- Normal document flow is designed to work with a constrained width and an unlimited height
- Contents fill the width of the viewport and line wrap as necessary
- Height of a container depends on its contents, not by the container itself
- *Normal document flow* refers to the default layout behavior of elements on the page - inline elements flow along with the text from left to right. Block-level elements fall on individual lines - with a line break above and below
- When you explicitly set an element's height, you run the risk of it's contents *overflowing* the container
- `overflow` properties include:
    1. `visible` (default) - All content is visible, even when it overflows
    2. `hidden` - Content that overflows the container's padding edge is clipped
    3. `scroll` - Scrollbars are added to the container so the user can scroll to see the remaining content
    4. `auto` - Scrollbars are added to the container only if the contents overflow
- You can control horizontal overflow with the `overflow-x` property or vertical with `overflow-y`
- Percentage refers to the size of an element's containing block
- Common designs call for equal-height columns
- HTML table attributes `colspan` and `rowspan` have no equivalent - and floats, flexboxes, and inline-blocks can layout content in ways that tables cannot
- Accomplishing a two-column layout with equal-height columns can be done with a *flexbox* - by default a flexbox produces elements of equal height
- Favor the use of a flexbox instead of a table layout
- By applying `display: flex` to a container, it becomes as *flex container*, it's child elements will become the same height by default
- Never explicitly set the height of an element unless you have no other choice. Always seek an alternative first. Setting a height invariably leads to further complications.
- Instead of defining a height, you can use `min-height` and `max-height` to specify a minimum or maximum value - allowing the element to size natrually within those bounds
- Vertical centering in CSS is a notorious problem
- A `vertical-align` declaration only affects inline and table-cell elements
- A lot of trouble comes from setting the height of a container to a constant value and then attempting to center a dynamically sized piece of content inside it - Instead, try to achieve the desired effect by allowing the browser to determine heights naturally
- Equal top and bottom padding vertically centers an element's content without a fixed height
- **Guide to vertical centering**
 - For natural height containers - Apply an equal top and bottom padding to the container
 - For specific height containers - Use `display: table-cell` and `vertical-align: middle` on the container
 - Use flexbox
 - For inner content that is one line of text - Set a tall line height equal to the desired container height, this forces the container to grow to contain the line height. `inline-block` may be required
 - See [howtocenterincss.com](http://howtocenterincss.com)
- Unlike padding and border - you can assign a negative value to margins
- Negative left or top margins pull the element leftward or upward
- Adding negative right or bottom margins will pull the succeeding element(s) leftward or upward (to overlap)
- When top and/or bottom margins are adjoining, they overlap, combining to form a single margin - this is referred to as *collapsing*
- Any adjacent top and bottom margins will collapse together. If you add an empty, unstyled `div` to the page, its own top and bottom margins will collapse. Left and right margins don't collapse
- There are multiple ways to prevent margins from collapsing
 - Appling `overflow: auto` to the container prevents margins inside the container from collapsing with those outside the container.
 - Adding a border or padding between two margin stops them from collapsing
 - Margins won't collapse to the outside of a container that is floated, that is an inline block, or that has an absolut or fixed position
 - When using a flexbox, margins won't collapse between elements that are part of the flex layout
 - Elements with a `table-cell` display don't have a margin, so they won't collapse
- Use the lobotomized owl to add top margins to elements throughout a page `* + *`. It targets any element that immediately follows any other element. It selects all elements on the page that aren't the first child of their parent.
- Using the lobotomized owl has tradeoffs. It simplifies margins throughout your page, but you'll have to override it in places where you don't want it to appy

**Summary**
- Always use a universal `border-box` fit for predictable element sizing
- Avoid explicitly setting the height of an element to avoid overflow issues
- Use modern layout techniques liek `display: table` or a flexbox to produce columns of equal height or to center content vertically
- If your margins behave oddly, take steps to prevent margins from collapsing
- Consider using the lobotomized owl selector to globally apply margins betwen stacked elements



## Acknowledgements
[CSS in Depth by Keith Grant, ISBN 9781617293450](https://www.manning.com/books/css-in-depth)
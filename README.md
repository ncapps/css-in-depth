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

## Part 2. Mastering layout
### Chapter 4. Making sense of floats
- The three most important methods to alter document flows - *floats*, *flexbox*, and *grid layout*
- *Positioning* is primarily used for stacking elements in front of one another
- A *float* pulls an element to one side of it's container, allowing the document flow to wrap around it. A floated element is removed from the normal document flow and pulled to the edge of the container.
- It's usually easiest to lay out the large regions of a page first, then work your way to the smaller elements within
- The *double container* pattern is common for centering content on a page. It can be achieved by placing your content inside two nested containers and then set margins on the inner container to position within the outer one.
- *pseudo-element* - Special selectors that target certain parts of the document. These begin with a double:color (::) syntax. The most common pseudo-elements are `::before` and `::after`, which are used to insert content at the beginning or end of an element.
- The *media object* pattern includes an image on one side and a block of text beside it.
- A *block formatting context* (BFC) is a region of the page in which elements are laid out - the contents inside a BFC will not overlap or interact with elements on the outside
- Using `overflow: auto` for the BFC is generally the simplest approach
- A popular way to facilitate code reuse is to implement *grid system*. The general principle is to put a row container around one or more column containers.
- *CSS framework* - a library of prebuilt CSS code that provides styles for patterns common in web development.
- A *grid system* is usually defined to hold a certain number of columns in each row; this is usually 12, but can vary. The child elements of a row may have a width anywhere from one column up to 12 columns wide
- Twelve is a good number of columns because it is divisiable by two, three, four, and six, which provides a lot of flexibility

**Summary**
- Floats exist to allow text to wrap around an element
- Use a *clearfix* to contain floated elements
- Three tricks of block formatting context: containing floats, prevent margin collapse, and prevent document flow from wrapping around a floated element
- Use the double container pattern to center page contents
- Use the media object pattern to position descriptive text alongside an image
- Use a grid system to create a wide array of page layouts

### Chapter 5. Flexbox
- Flexbox (Flexible Box Layout) - can be more predictable and offers more specific control than floats. It also offers a simple solution for vertical centering adn equal height columns
- Applying `display: flex` to an element turns it into a *flex container* and its direct children are *flex items*
- Flexbox layout is defined in terms of the *main axis* and *cross axis*. The terms *start* and *end* are used rather than left, right, top, bottom.
- Direct descendant combinators `>` allow you to target direct child elements
- Flexbox provides more options for sizing and spacing than the familiar `margin`, `width`, and `height` properties can offer
- The `flex` property is shorthand for three different sizing properties:
    1. `flex-basis` - an initial "main size" of an element
    2. `flex-grow` - remaining space in a flex container will be consumed by flex items based on their `flex-grow` values. 
    3. `flex-shrink` - determines if a flex item should shrink to prevent overflow
- The `flex-direction` property provides the ability to shift the direction of the axes
- In general, you'll begin a flexbox with a the following methods:
    1. Identify a container and its items and use `display: flex` on the container
    2. If necessary, set the `flex-direction` on the container
    3. Declare margins and/or `flex` values for the flex items where necessary to control their size
**Summary**
- Use flexbox for versatile, easy-to-control layout of page content
- Use `flex` to specify flex item size combinations
- Use nested flexboxes to piece together more complicated layouts and to fill the heights of naturally sized boxes
- Flexbox automatically creates columns of equal height
- Use `align-items` or `align-self` to vertically center a flex item inside its flex container

### Chapter 6. Grid layout
- The CSS grid lets you define a two-dimensional layout of columns and rows and then place elements within the grid. 
- As with flexbox, grid layout applies to two levels of the DOM hierarchy. An element with `display: grid` becomes a `grid container`. Its child elements then become `grid items`.
- The unit `fr` represents each column's or row's *fraction unit*. this unit behaves similarly to the `flex-grow` factor in flexbox.
- The `grid-gap` property defines the amount of space to add to the gutter between each grid cell.
- Grid lines are numbered beginning with 1 on the top left. Negative numbers refer to the position from the bottom right.
- Flexbox and grid are complementary
    - Flexbox is basically one-dimensional, whereas grid is two-dimensional
    - Flexbox works from the content out, whereas grid works from the layout in
- When your designs call for an alignment of items in two dimensions, use `grid`. When you're only concerend with a one-directionaly flow, use `flexbox`
- In practice, grid is used for most high-level layout of the page, and flexbox makes more sense for certain elements within each grid area

**Summary**
- Grid is excellent for a high-level layout of the web page
- Use grid in conjunction with flexbox for a complete layout system
- Use whichever grid syntax (numbered grid lines, named grid lines, or named grid areas) is the most intuitive for the given scenario
- Use auto-fill/auto-fit and the implicit grid for layouts with an unknown number of grid items
- Use feature queries for progressive enhancement

### Chapter 7. Positioning and stacking contexts
- Positioning removes elements from the document flow entirely - the initial value of the `position` property is `static`
- Applying `position: fixed` to an element allows you to position the element arbitrarily within the viewport
- Fixed positioning lets your position an element relative to the viewport. The viewport is its *containing block*.
- The containing block for *absolute positioning* is based on the closest positioned ancestor element.
- If none of the element's ancestors are positioned, then the absolutely positioned element will be positioned based on the *initial containing block*. This is an area with dimensions equal to the viewport size, anchored at the top of the page.
- Elements with a higher z-index appear in front of elements with a lower z-index. Elements with a negative z-index appear behind static elements.
- Applying a z-index to a positinoed element establishes a stacking context
- If an element is stacked in front of a stacking context, no element within that stacking context can be brought in front of it
- Use variables to keep track of z-indexes
- Generally speaking, you should only using positioning when you need to stack elements in front of one another
- *Sticky positioning* is a sort of a hybrid between relataive and fixed positioning: an element scrolls normally within the pge until it reaches a specified point on the screen, at which point it will "lock". A common use-case for this is the side-bar navigation.

**Summary**
- Use fixed positioning for modal dialogs
- Use absolute positioning for dropdown menus, tooltips, and other dynamic interactions
- Be aware of accessibility concerns when buidling these features
- There are two gotchas of `z-index`: it only works on positioned elements and using it creates a new stacking context
- Be aware of the potential pitfalls when creating multiple stacking contexts on a page
- Keep an eye out for better browser support of sticking positioning

### Chapter 8. Responsive design
- The three key principles to responsive design:
    1. A *mobile first approach to design* - Build the mobile version before you construct the desktop layout
    2. The `@media` *at rule* - *Media queries* let you write styles that only apply under certain conditions
    3. *The use of fluid layouts* - This approach allows containers to scale to different sizes based on the width of the viewport
- *breakpoint* - A particular point at which the page styles change to provide the best possible layout for the screen size
- Screen readers use certain HTML5 elemetns such as `<form>`, `<main>`, `<nav>`, and `<aside>` as *landmarks*
- You should use `ems` for media query breakpoints. It's the only unit that performs consistently in all major browsers shoudl the user zoom the page or change the default font size
- Using a `print` media query lets you control how your page will lay out if the user prints the page
- [Responsive Patterns](https://bradfrost.github.io/this-is-responsive/patterns.html)
- The best practice is to create a few copies of an image, each at a different resolution

**Summary**
- Always build your designs mobile first
- Use media queries to progressively enhance the page at larger and larger viewports
- Use fluid layouts that fit the screen at any browser size
- Use responsive images to fit the bandwidth limitation of mobile devices
- Don't forget to include your meta viewport tag

## Part 3. CSS at scale
### Chapter 9. Modular CSS
- *Modular CSS* means breaking the page into reusable component parts
- Three main sections of your stylesheet: *base rules*, *module rules*, *utility classes*
- *Encapsulation* - the grouping together of related functions and data to comprise an object. It's used to hide the state or values of a structured object so that outside parties cannot operate on them.
- With encapsulation in mind, you'll define a module for each discrete component on the page: navigational menus, dialog boxes, progress bars, thumnail images, etc.
- Every stylesheet begins with a set of generic rules that apply to the whole page; this is still necessary with modular CSS
- Check out [normalize.css](https://necolas.github.io/normalize.css/) as a base style
- You create a modifier by defining a new class name that begins with the module's name. A popular convention is to use two hyphens to indicate a modifier: `message--error`. The double-hypen syntax shows at a glance which part of the class is the module name and which part is the modifier.
- Always keep all the code for a module together in a the same place. Then your stylesheet will consist of a series of modules.
- When you need a module to look or behave differently, create a modifier class that can be applied directly to the specific element.
- Never use descendent selectors to alter a module based on its location in the page
- You should avoid targeting based on generic tag types such as `div` and `span`
- You should be able to concisely summarize a module's purpose. Some modules will be for layout, others will be for stylistic purposes. When a module tries to do more than one thing, you should consider breaking it into smaller modules.
- When possible, try to keep positioned elements that are related in the same module. This way, the module will be predictable if place in another positioned container.
- It's a common convention to design all state classes to begin with *is-* or *has-* (e.g., `is-open is-expanded is-loading has-error`)
- If using a preprocessor, place each CSS module into a separate file
- Utility classes are the only place you should use the `!important` annotation
- BEM - Block, Element, Modifier, developed by Yandex: https://en.bem.info/methodology/

**Summary**
- Break your CSS up into small, reusable modules
- Never write styles that reach into another module and change its appearance
- Use variant classes to provide multiple versions of the same module
- Divide large constructs into smaller modules, build your pages by piecing together a number of modules
- Group all rules for a module together in your stylesheet
- Use a naming convention such as double-hypens and double-underscores to make your modules' structure easier to understand at a glance

### Chapter 10. Pattern libraries
 - Modular CSS is the key to scaling your CSS, and a pattern library is a means of keeping those modules organized.
 - We should write CSS first; well-structured HTML will follow
 - *semver* - Short for Semantic Versioning, a system for versioning software packages using three numbers, each separated by a period. The three numbers stand for the major, minor, and patch versions.

 **Summary**
 - Use a tool such as KSS to document and inventory your modules
 - Use a pattern library to document markup examples, module variants, and JavaScript for your modules
 - Develop your modules "CSS First"
 - Consider the API your CSS defines, taking care to never break it unpredictably
 - Version your CSS using semver
 - Don't blindly add a CSS framework to your page; selectively take only the pieces you need
 

## Part 4. Advanced Topics
### Chapter 11. Backgrounds, shadows, and blend modes
- It can be easier to start with working examples [css-tricks.com](https:/css-tricks.com)
- *Skeuomorphic design* seeks to emulate the physical word
- *Flat design* emphasizes vivid, uniform colors and a simpler appearance
- Use gradients and shadows to add the appearance of depth to the page
- Even basic flat designs can benefit from some subtle shadows or gradients
- Use gradients with explicit color stops to add stripes to an element
- A subtle background gradient rather than a flat color provides a little morecomplexity to the design
- Use blend modes to colorize or texture an image

### Chapter 12. Contrast, color, and spacing
- *Contrast* in design is a means of drawing attention to something by makingit stand out
- Every web page should have a purpose. It may be to convey a story, collectinformation, or allow the user to complete some sort of task.
- The use of gray rather than true black is a common practice. On a backlitcomputer screen, true black text on a pure white background (#fff) producestoo much contrast
- [CSS color contrast checker](http://leaverou.github.io/contrast-ratio)
- Don't over-use color, but selectively put it in the places you want to drawattention
**Summary**
- Use contrast selectively to draw attention to important parts of the page
- Use HSL color to make working with colors easier and more understandable at a glance
- Take the time to fine-tune spacing
- Remember that line height can impact vertical spacing

### Chapter 13. Typography
- [Google Fonts](https://fonts.google.com)
- It's common to use two different fonts for headings and body text
- *Serif* - A small line or "foot" at the end of a stroke in a letter
- *Sans-serif* - Does not include a serif
- *Typeface* refers to an entire family of fonts. Within a typeface there are multiple variants. Each variant is a *font*
- Longer lines of text should have a larger line height. This makes it easier for the reader's eye to scan to the next line without losing their place.
- Ideally, you should aim for line lengths that are between 45 and 75 characters per line, this is generally considered the most easily readable
- Elements with various text sizes and margins should conform to a repeating vertical rhythm - the *baseline grid*

**Summary**
- Use a font provider like Google Fonts for easy web font integration
- Strictly limit the number of web fonts you add to the page to keep page size under control
- Use `@font-face` rules when hosting your own fonts
- Take the time to adjust `line-height` and `letter-spacing`
- Use `Font Face Observer` or watch for support of `font-display` to help control loading behavior and prevent invisible text problems

### Chapter 14. Transitions
- You can use each of the three functions in the following scenarios:
    - *Linear* - Color changes and fade in/out effects
    - *Decelerating* - User-initiated changes. When the user clicks a button or hovers over an element, use `ease-out`. This way, the user will see a fast, instance response to their input, easing out as the element comes to a stop
    - *Accelerating* - System-initated changes. When content finishes loading or a timeout event triggers, use `ease-in`. This way, the element will ease in at first to draw the user's attention before the element speeds up and completes its motion.
- Most transitions should be between 200 and 500 ms. Any longer and the page will feel slow
- Use quick transition speeds (between 100ms and 300ms) for hover effects, fades, and small scaling effects 
- Use longer transition speeds (between 300ms and 500ms) for large moves or complex timing functiosn like bounces

**Summary**
- Use transitions to smooth sudden changes in the page
- Use an accelerating motion to catch the user's attention
- Use a decelerating motion to show the user their action as taken effect
- Use JavaScript to coordinate transitions with class name changes when CSS alone cannot do what you need

### Chapter 15. Transforms
- Transforms are more performant than positioning or explicit sizing for transitions or animations
- The browser *rendering pipeline* is made up of three stages
    1. *layout* - calculates how much space each element is going to take on the screen. This happens any time you change the size or position of an element or add/remove an element to the DOM
    2. *painting* - fills in the pixels: text is drawn, images and borders are colored. Changing a background color is less computationally intensie than changing the size of an element
    3. *composite* - the browser takes all of the layers that have been painted in memory and draws them into the image that is displayed on screen. `opacity` and `transform` result in faster rendering time.

**Summary**
- Use transforms to scale, rotate, translate, and skew elements in two and three dimensions
- Transforms are essential for performant transitions and animations
- Keep the rendering pipeline in mind when building animations
- Use a custom timing function curve to add a bounce effect to transitions

### Chapter 16. Animations
- A *keyframe* refers to a specific point in an animation
- Rules applied by an animation take precedence over other declarations
- Adding and removing classes is the simplest way to interact with animations using JavaScript - Though there's also an API to interact with CSS animations: https://developer.mozilla.org/en-US/docs/Web/API/Animation
- Always consider if an animation can provide useful feedback to the user
- Library of animations: [animista.net](https://animista.net/)

**Summary**
- Use keyframe animatinos to define key points in an animation
- Use backward and forward fill modes to making an animation begin or end seamlessly
- JavaScript can trigger animations
- Animations can add meaning to user interaction

## Acknowledgements
[CSS in Depth by Keith Grant, ISBN 9781617293450](https://www.manning.com/books/css-in-depth)
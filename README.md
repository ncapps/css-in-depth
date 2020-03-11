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






## Acknowledgements
[CSS in Depth by Keith Grant, ISBN 9781617293450](https://www.manning.com/books/css-in-depth)
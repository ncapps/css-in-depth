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
- Delcarations marked `!important` are treated as a higher-priority origin

## Acknowledgements
[CSS in Depth by Keith Grant, ISBN 9781617293450](https://www.manning.com/books/css-in-depth)
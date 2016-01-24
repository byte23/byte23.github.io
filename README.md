website of byte23.com

# to develop

it's all based on themes/creative, so if you need to override any file just copy it to the root with the same structure.

e.x. the already overriden are in:
---------------

>data

>>projects (copied from themes/creative/exampleSite)

>img (copied from themes/creative)

>>-portfolio

>layouts (copied from themes/creative)

>>-partials

>static (copied from themes/creative)

>>-css

>>-img

>themes

>>-creative (this is the main theme, if you need to change something just copy the file to be changed with same structure to the root folder)

   
launch hugo with autorefresh
> hugo server -ws .

# to build

> hugo -d .

# to deploy
> git push origin gh-pages

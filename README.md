
                       __
                      /\ \                                                         __
     __  __    ___    \_\ \     __   _ __   ____    ___    ___   _ __    __       /\_\    ____
    /\ \/\ \ /' _ `\  /'_  \  /'__`\/\  __\/ ,__\  / ___\ / __`\/\  __\/'__`\     \/\ \  /',__\
    \ \ \_\ \/\ \/\ \/\ \ \ \/\  __/\ \ \//\__, `\/\ \__//\ \ \ \ \ \//\  __/  __  \ \ \/\__, `\
     \ \____/\ \_\ \_\ \___,_\ \____\\ \_\\/\____/\ \____\ \____/\ \_\\ \____\/\_\ _\ \ \/\____/
      \/___/  \/_/\/_/\/__,_ /\/____/ \/_/ \/___/  \/____/\/___/  \/_/ \/____/\/_//\ \_\ \/___/
                                                                                  \ \____/
                                                                                   \/___/

![build status](https://travis-ci.org/SqrTT/underscore.svg?branch=misterDW)

#Improved version for Demandware

List of main changes:
* iterative methods works properly with demandware iterators, `_.each(basket.productLineItems, function (productLineItem) {...})` etc.
* iterative methods support second argument as string and can interpolate is as lambda function
* added method `_.prop` - allows safety get deep property `_.prop(pdict, 'session.customer.profile.custom.isOurGuy')` return `isOurGuy` only if whole path exist.
* methods which use `_.property` also works through `_.prop`, that means you can write `_.pluck(basket.productLineItems, 'product.custom.surprise')`
* removed unsupported by DW async methods
* changed delimiters for templates to `{{ | }}` as `<% | %>` throw error in DW template engine.

## Lambda

Lambda is borrowed from `form.js` project and is useful in case if short function should be feed to methods like `each`, `map`, `filter` etc.

Underscore.js is a utility-belt library for JavaScript that provides
support for the usual functional suspects (each, map, reduce, filter...)
without extending any core JavaScript objects.

For Docs, License, Tests, and pre-packed downloads, see:
http://underscorejs.org

Underscore is an open-sourced component of DocumentCloud:
https://github.com/documentcloud

Many thanks to our contributors:
https://github.com/jashkenas/underscore/contributors

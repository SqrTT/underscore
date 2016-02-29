
                       __
                      /\ \                                                         __
     __  __    ___    \_\ \     __   _ __   ____    ___    ___   _ __    __       /\_\    ____
    /\ \/\ \ /' _ `\  /'_  \  /'__`\/\  __\/ ,__\  / ___\ / __`\/\  __\/'__`\     \/\ \  /',__\
    \ \ \_\ \/\ \/\ \/\ \ \ \/\  __/\ \ \//\__, `\/\ \__//\ \ \ \ \ \//\  __/  __  \ \ \/\__, `\
     \ \____/\ \_\ \_\ \___,_\ \____\\ \_\\/\____/\ \____\ \____/\ \_\\ \____\/\_\ _\ \ \/\____/
      \/___/  \/_/\/_/\/__,_ /\/____/ \/_/ \/___/  \/____/\/___/  \/_/ \/____/\/_//\ \_\ \/___/
                                                                                  \ \____/
                                                                                   \/___/

[![Build Status](https://travis-ci.org/SqrTT/underscore.svg?branch=misterDW)](https://travis-ci.org/SqrTT/underscore)

#Improved Underscore version for Demandware

List of main changes:
* for perfomance reason common used functions are moved to separete files. As result, for instance, method `forEach` might be used without loading whole library. If your underscore is based in modules folder, you can use functions:
```javascript
const map = require('underscore/map');
...
return map(basket.productLineItems, function (productLineItem) {
   return productLineItem.getQuantity().getValue();
});
...
```
* iterative methods works properly with demandware iterators, `_.forEach(basket.productLineItems, function (productLineItem) {...})` etc.
* added method `_.get` - allows safety get deep property `_.get(pdict, 'session.customer.profile.custom.isOurGuy')` return `isOurGuy` only if whole path exist or `undefined` in another case (will not throw error).
* added method `merge` - allows copy properties from one to another deeply by provided properties.
* methods which use `_.property` also works through `_.get`, that means you can write `_.pluck(basket.productLineItems, 'product.custom.surprise')` and get array of `surprise's`.
* removed unsupported by DW async methods `delay`, `denounce`.
* changed delimiters for templates to `{{ | }}` (as `<% | %>` throw error in DW template engine).

## Method `get(object, key, defaults)`
Some times is boring to write ton of condition just to get one deep property from object.
```javascript
if (pdict && pdict.session && pdict.session.customer &&
	pdict.session.customer.profile && pdict.session.customer.profile.custom.isOurGuy) {
	// .. do some magic
}
```
To solve this problem here is this method. Its pretty useful:
```javascript
if (_.get(pdict, 'session.customer.profile.custom.isOurGuy') {
	// .. do some magic
}
```
`get` also have third parameter if you set it than that value will be returned in case if some object is missing in path.

## Method `merge(destinationObject, sourceObject, mapObject)`
Copy properties from **sourceObject** to **destinationObject** by following the
mapping defined by **mapObject**

 - **sourceObject** is the object FROM which properties will be copied.
 - **destinationObject** is the object TO which properties will be copied.
 - **mapObject** is the object which defines how properties are copied from
**sourceObject** to **destinationObject**

example
------------

```javascript

var obj = {
  "sku" : "12345",
  "upc" : "99999912345X",
  "title" : "Test Item",
  "description" : "Description of test item",
  "length" : 5,
  "width" : 2,
  "height" : 8,
  "inventory" : {
    "onHandQty" : 12
  }
};

var map = {
  // path in dst : path in src
  "Envelope.Request.Item.SKU" : "sku",
  "Envelope.Request.Item.UPC" : "upc",
  "Envelope.Request.Item.ShortTitle" : "title",
  "Envelope.Request.Item.ShortDescription" : "description",
  "Envelope.Request.Item.Dimensions.Length" : "length",
  "Envelope.Request.Item.Dimensions.Width" : "width",
  "Envelope.Request.Item.Dimensions.Height" : "height",
  "Envelope.Request.Item.Inventory" : "inventory.onHandQty"
};

var result = _.merge({}, obj, map);

/*
{
  Envelope: {
    Request: {
      Item: {
        SKU: "12345",
        UPC: "99999912345X",
        ShortTitle: "Test Item",
        ShortDescription: "Description of test item",
        Dimensions: {
          Length: 5,
          Width: 2,
          Height: 8
        },
        Inventory: 12
      }
    }
  }
};
*/
```


-------------------------------------------------------------

Underscore.js is a utility-belt library for JavaScript that provides
support for the usual functional suspects (each, map, reduce, filter...)
without extending any core JavaScript objects.

For Docs, License, Tests, and pre-packed downloads, see:
http://underscorejs.org

Underscore is an open-sourced component of DocumentCloud:
https://github.com/documentcloud

Many thanks to our contributors:
https://github.com/jashkenas/underscore/contributors

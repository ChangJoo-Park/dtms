# dtms - CSS d[uration|elay] to milliseconds

![dtms](https://i.imgur.com/tClBlEA.png)

dtms is `<time>` of CSS parse in to milliseconds for JavaScript.

```js
import { dtms } from 'dtms'
dtms('0.2s') // returns 200 (milliseconds)
dtms('2s') // returns 2000 (milliseconds)
dtms('0s') // returns 0 (milliseconds)
dtms('-1s') // returns -1000 may not working with transition

// Not Allowed
dtms('') // Not alllowed empty string.
dtms('2m') // Only support ms and s from CSS specification
```

## Why only support milliseconds?

CSS `<time>` is only 'ms' and 's'.

https://developer.mozilla.org/en-US/docs/Web/CSS/time

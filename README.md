# dtms - CSS d[uration|elay] to milliseconds

<div style="font-family: monospace; font-size: 10rem; text-align: center; padding: 1rem 0; font-weight: bold;">
  <span style="background-color: #ffb703; color: white; padding: 0 3rem; border-radius: 1rem;">dtms</span>
</div>

dtms is `<time>` of CSS parse in to milliseconds for JavaScript.

```js
import { dtms } from 'dtms'
dtms('0.2s') // returns 200 (milliseconds)
dtms('2s') // returns 2000 (milliseconds)
dtms('0s') // returns 0 (milliseconds)

// Not Allowed
dtms('') // Not alllowed empty string.
dtms('-1s') // Not alllowed negative.
dtms('2m') // Only support ms and s from CSS specification
```

## Why only support milliseconds?

CSS `<time>` is only 'ms' and 's'.

https://developer.mozilla.org/en-US/docs/Web/CSS/time

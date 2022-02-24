# Countdown.js

Tool created in order to facilitate the implementation of date and time incrementation.

# How to use?

To use it, just call the 'countdown.js' script in your project and trigger the startup class, passing as the first parameter the element where the values ​​will be shown and then an object containing the time and expiration message.

# Exemple

```javascript

import { CountdownJS } from "./countdown.js";

new CountdownJS("h1", {
    datetime: "2022-03-03 09:59:35.740 -0300",
    expires_message: "Expired!"
}).run();

```
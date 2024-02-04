# Persian Lorem Ipsum for React

## Installation

To install the package, you can use npm or yarn:

\`\`\`bash
npm i use-persian-lorem

\`\`\`

## Usage

this is very simple, just oepn {} within your jsx element and write `usePersianLorem(wordNum)` and you are good to go :)

- wordNum is the number of the words you'll have within your jsx element. the default value is 100 (in case you don't want to pass a number to it)

\`\`\`jsx
import React from 'react';
import {usePersianLorem} from "use-persian-lorem";

function MyComponent() {
return (

<p>{usePersianLorem(150)}</p> //generates 150 random persian words
<p>{usePersianLorem()}</p> //generate 100 random persian words (default)
);
}

export default MyComponent;
\`\`\`

Thats it. I hope you to enjoy !

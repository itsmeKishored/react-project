import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [count , setCount] =useState(0);
    const [count1 , setCounts] =useState(1000);
    const [count2 , setCounts2] =useState(2);
    const [count3 , setCounts3] =useState(1000);


  return (
    <div>
<p>
    {count}</p>
    <p>
    {count1}</p><p>{count2}</p><p>{count3}
</p>
<button onClick={() => setCount(count +25)}>ADD
</button>
<button onClick={() => setCounts(count1 -25)}>SUB
</button>
<button onClick={() => setCounts2(count2 *25)}>MULTI
</button>
<button onClick={() => setCounts3(count3 /2)}>DIV
</button>

    </div>

  )
}

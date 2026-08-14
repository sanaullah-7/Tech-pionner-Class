// export default function K() {

//     let count = 0;

//     function increase() {
//         count = count + 1;
//         console.log(count);
//     }

//     return (
//         <div>
//             <h1>{count}</h1>

//             <button onClick={increase}>
//                 Increase
//             </button>
//         </div>
//     );
// }

// ;
import { useState } from "react";

function K() {

    const [count, setCount] = useState(0);

    function increase() {

        setCount(count + 1);

    }

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={increase}>
                Increase
            </button>

        </div>
    );
}

export default K;
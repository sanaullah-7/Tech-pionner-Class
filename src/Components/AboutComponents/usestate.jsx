//  import { useState } from "react";
// export default function usesate(){
//         // save    //update
//     const [count , setCount] = useState(0)

//     function increase(){
//         setCount(count + 1);
//     }
//     function decrease(){
       
//         setCount(count - 1)
       
//     }
//     function reset(){
//         setCount(5)
//     }

//     // let count = 0;
//     // function increase(){
//     //     count = count + 1;
//     //     console.log(count)

//     // }
//     return(
//         <>
//             <div className=" shadow-[6px_10px_90px_blue] bg-yellow-900 my-10 mx-[13em] text-center font-bold text-3xl text-white border-[2px] h-[300px] w-[500px] ">  
//             <h1>Digital Tasbeeh Counter</h1>

//             <div className="text-3xl text-white my-[2em]  ">
//                 <h1 className="text-[80px] text-black font-bold">{count} </h1>

//                 <div className="my-[60px] ">
//                 <button className="mx-5 bg-[blue]  border-[px] rounded-full h-[100px] w-[100px] shadow-2xl hover:opacity-65 hover:scale-90 duration-500 " onClick={()=>setCount(count+1)}>+</button>
//                 <button className="mx-5 bg-[green] border-[1px] rounded-full h-[50px] w-[50px] shadow-[10px_10px_60px_red] hover:opacity-60 hover:scale-125 duration-500" onClick={()=>{if(count > 0){setCount(count-1)} }}>-</button>
//                 <button className="mx-5 bg-green-900 border-[4px] border-[yellow] shadow rounded-xl w-[100px] shadow-lg shadow-[blue]  hover:translate-x-3 hover:scale-90 duration-700   hover:bg-[red]" onClick={()=>setCount(0)}>Reset</button>
//                 </div>
    
//             </div>
//         </div>


//         </>
//     )
// }
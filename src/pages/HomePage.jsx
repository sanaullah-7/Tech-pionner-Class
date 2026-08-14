import K from "../Components/HomeComponets/k";
import Card from "../Components/HomeComponets/Card";
import Studentdata from "../Components/HomeComponets/studentdata";
import Image from "../assets/image.png"

export default function Home(){
    return(
        <>
     <K/>
        <Card/>
       <div className="flex gap-20 ">
         <Studentdata
        img={Image}
        RollNo={123400}
        name="jawad"
        age={22}
        address="Mardan"
        />
        <Studentdata
        RollNo={12}
        name="khan gull"
        age={23}
        address="Mardan"
        />
        <Studentdata
        RollNo={3}
        name="Sara"
        age={22}
        address="Mardan"
        />
       </div>
        

        </>
    )
}
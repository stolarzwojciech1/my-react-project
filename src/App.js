
import {FaStar} from "react-icons/fa"
import React, {useState} from "react"

const Star=({selected=false, onSelect=f=>f}) =>(
<FaStar color={selected? "red" : "grey"} onClick={onSelect}  /> );  
                                        

export default function StarRating ({totalStars=5})  {


const [selectedStars, setSelectedStars] = useState(0);


return( 
<>  {createArray(totalStars).map((n, i) =>(     
 < Star key ={i}
     selected={selectedStars > i}
       onSelect={() =>setSelectedStars(i+1)} 
    /> 
    ))}
<p> 

</p>
</>

);

}   


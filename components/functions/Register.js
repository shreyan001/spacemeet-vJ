import { useState, useContext } from "react";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../../context/auth";


export default function Register({code,address,objectName,isMOpen,onMClose,id})  {
    
  const { handle } =
  useContext(AuthContext);
    const router = useRouter();
    const API = process.env.NEXT_PUBLIC_API_URI;

  const [isReg, setIsReg] = useState(false);
   let img_url = `http://robohash.org/set_set1/bgset_bg1/${address}.png`;

    async function register(img,name, addr,_id) {

      if(name.length <= 4){toast.error("Name must have atleast 5 characters")}

      else { const response = await fetch(`http://${API}/api/register`, {
        method: 'POST',
        body: JSON.stringify({img,name,addr,_id}),
        headers: {'Content-Type':'application/json'},
      });
      if (response.status === 200) {
       setIsReg(true);
        
      } else {
        toast.error("Name must have atleast 5 characters");
      }
    }
    } 
    
    if (isReg) {
      router.push(`/login/${objectName}/${code}`)
    }

    if(isMOpen===false) {return null} ; 

  return(<div className="  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-1/3 h-1/2 gap-3
   bg-black1 rounded-xl flex flex-col items-center justify-center">
   <div className=" mx-auto  w-5/6 h-fit text-right"><span onClick={onMClose} className="text-lg font-extrabold cursor-pointer">x</span></div> 
   <img src={img_url} alt="robo" className="h-1/3 w-1/4 hexagon" />

   <h1 className="text-xs font-semibold">address:&nbsp;{address}</h1>
   
   <h1 className="text-xs font-semibold">handle:&nbsp;{handle}</h1>

   <div className="w-1/3 text-right"><button className="button1" onClick={()=>{register(img_url,handle,address,id)}}>Submit</button></div>
 </div>)

};
  
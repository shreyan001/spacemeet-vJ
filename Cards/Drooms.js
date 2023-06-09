import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Drooms({channelName,OId,host,topicName,onOpen}){
 
    const API = process.env.NEXT_PUBLIC_API_URI;
    const [isData, setData] = useState([]);
    const synx2 = async(name) => {
        const {data} = await axios.get(`http://${API}/api/channels/${name}/?_id=${OId}`) 
        console.log({data})
        let data2 = data;
        console.log(data2)
       if (data2) {
         
      const {data} = await axios.post(`http://${API}/api/users`, {addr:host,_id:OId} )
      console.log(data,name,OId);
      setData(data);
      
      }}; 
    
      useEffect(() => {
        synx2(channelName); 
    }, []);

    return (
        <div className="stall4 w-5/12"><div className="head4"><div className="Dhead1"><h3>Discussion</h3><h2>{topicName}</h2></div><button onClick={onOpen} className="button1">Join</button></div>
          <div className="arrange4">  {isData.map((i,index)=>{return <div key={index} className="profles4">
          <div className="image-clip3"><img src={ i.image} alt={i.name}/></div> 
                <div className="nameit4">{i.name}</div>
                <div className="nameit4">Host</div>
            </div>})}</div>
            </div>
    )
                    
 
} 
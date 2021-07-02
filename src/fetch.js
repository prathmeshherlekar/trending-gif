 
 export function fetchFromAPI(url,setData){
    fetch(url).then((res)=>res.json()).then(data=>{
        console.log(data)
        setData(data);
    })
}

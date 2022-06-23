import React, { useContext, useEffect,useState } from "react";
// const URL=`https://fakestoreapi.com/products`;
const URL=`http://www.omdbapi.com/?apikey=727bbdc1&s=titanic`;
const AppContext=React.createContext();

const AppProvider=({children})=>{
   const[movie,setMovie]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState({show:false,msg:""})

   const getMovies=async(url)=>{
      try{
      const res=await fetch(url);
      const data= await res.json();
      // console.log(data.Search);
      // setMovie(data.Search);
      console.log(movie)
      if(data.Response==="True"){
         setLoading(false);
         setMovie(data.Search);
      // setMovie(data);


     }
     else{
        setError({
           show:true,
           msg:data.error,
         })
      }
       }
      catch(err){
         console.log(err);
      }
    }

    useEffect(()=>{
      getMovies(URL)
    },[])

   // const getMovies=(url)=>{
   //    fetch(url)
   //    .then(res=>res.json())
   //    .then(data=>
   //       {
   //          console.log(data)
   //          if(data.Response==="True"){
   //             setLoading(false);
   //             setMovie(data.Search);
   //             console.log(movie)
   //          }
   //          else{
   //              setError({
   //                show:true,
   //                 msg:data.error
   //              })
   //          }
   //       })
   // }

 return <AppContext.Provider value={{loading,movie,error}}>
    {children}
 </AppContext.Provider>
};

 const useGlobalContext=()=>{
 
 return useContext(AppContext);
 }
export {AppContext,AppProvider,useGlobalContext};
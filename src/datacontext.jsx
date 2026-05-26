import { createContext, useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

export const DataContext=createContext();

export default function DataProvider({children}){

    const [data,setdata]=useState([]);

    useEffect(()=>{

        const dbref=ref(db,"detections");

        onValue(dbref,(snapshot)=>{

            const value=snapshot.val();

            if(value){

                const arr=Object.keys(value).map((key)=>({
                    id:key,
                    ...value[key]
                }));

                setdata(arr);
            }
        });

    },[]);

    return(
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
}
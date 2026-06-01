import { createContext, useEffect, useState } from "react";
import { db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, onValue } from "firebase/database";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("AUTH USER:", user);

      if (!user) {
        setdata([]);
        return;
      }

      const dbref = ref(db, `detections/${user.uid}`);

      onValue(dbref, (snapshot) => {
        const value = snapshot.val();

        console.log("SNAPSHOT:", value);

        if (value) {
          const arr = Object.keys(value).map((key) => ({
            id: key,
            ...value[key],
          }));

          setdata(arr);
        } else {
          setdata([]);
        }
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
}
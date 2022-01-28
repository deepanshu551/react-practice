import React from 'react';
import {api} from "../utils/Axios";
export const ProductContext=React.createContext();
export default function 
ProductProvider({children}) {
    const [loading, setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        setLoading(true); 
       api.get("/").then((response)=>{setProducts(response.data);setLoading(false)});
      
    }, []);
    return (
        < ProductContext.Provider value={{loading,products}}>
            {children}
        </ProductContext.Provider>
    )
}

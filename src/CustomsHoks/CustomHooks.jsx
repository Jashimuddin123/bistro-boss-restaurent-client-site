import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    console.log('this is mdenu', menu);
    
    const  [  loading, setLoading] =  useState(true);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
           .then(data=> {
            setMenu(data)
            setLoading(false)
           });
    }, []);

    return [menu, loading]
}
export default useMenu
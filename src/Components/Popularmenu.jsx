// import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../CustomsHoks/CustomHooks";

const Popularmenu = () => {
    const [menu] = useMenu();
    console.log('jashim menu', menu);
    
    const popular  = menu.filter(item=>item.category ==='popular')
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems);
    //         });
    // }, []);

    return (
        <section className="my-14">
            <SectionTitle title="From OUR Menu" subTitle="Popular Item"></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                   popular.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default Popularmenu;

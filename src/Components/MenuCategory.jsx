import Cover from "./Cover";
import MenuItem from "./MenuItem";


const MenuCategory = ({items, title,coverImg}) => {
    return (
        <div>
    
                { title && <Cover img={coverImg} title={title}></Cover>}
               <div className="grid md:grid-cols-2 gap-10">
                {
                   items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default MenuCategory;
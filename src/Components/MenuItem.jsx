const MenuItem = ({ item }) => {
    console.log('this is item: ', item);

    const {name,image,price,recipe} = item;
    return (
        <div className="flex items-center justify-center gap-14">
            <img className="w-24 rounded h-20" src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <h3>{recipe}</h3>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;

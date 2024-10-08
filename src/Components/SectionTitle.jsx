

const SectionTitle = ({title, subTitle}) => {
    return (
        <div>
            <p className="text-yellow-600 text-center text-xl">{subTitle}</p>
            <h1 className="text-black font-bold text-center text-3xl">{title}</h1>
            
        </div>
    );
};

export default SectionTitle;
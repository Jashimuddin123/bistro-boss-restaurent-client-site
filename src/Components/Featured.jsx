import SectionTitle from "./SectionTitle";
import featuredImages from  '../assets/home/featured.jpg'
import './Backgroundcss/featureBackground.css'
const Featured = () => {
    return (
        <div className="background-images bg-fixed">
            <SectionTitle subTitle="---Chech Out It---" title="For Our Money">
              
            </SectionTitle>

            <div className="md:flex justify-center bg-black bg-opacity-40 items-center py-20 px-36 pt-12 gap-8">
                <div>
                    <img src={featuredImages} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>Aug 07, 2024</p>
                    <p className="uppercase">Where can i Get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis enim nulla suscipit expedita, voluptatum quisquam optio? Magnam deserunt maiores fugiat reprehenderit commodi quam minus doloribus voluptate, unde blanditiis eaque facere laudantium nemo corporis nulla quas ad accusantium eos dicta ducimus.</p>
                    <button className="btn text-white btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;

import SectionTitle from "./SectionTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const FoodCategory = () => {
    return (
        <div>
            <section className="my-20">
                {/* Pass the title as a prop */}
                <SectionTitle 
                title="Order Online"
                 subTitle={"---From 11.30am To 10.30pm---" }/>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="
        " src="/src/assets/home/01.jpg" alt="" />
           <p className="text-3xl -mt-10 text-center text-white">Salat</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/src/assets/home/02.jpg" alt="" />
            <p className="text-3xl -mt-10 text-center text-white">Salat</p>
            </SwiperSlide>
        <SwiperSlide>
            <img src="/src/assets/home/03.png" alt="" />
            <p className="text-3xl -mt-10 text-center text-white">Salat</p>
             </SwiperSlide>
        <SwiperSlide>
            <img src="/src/assets/home/04.jpg" alt="" />
            <p className="text-3xl -mt-10 text-center text-white">Salat</p>
            </SwiperSlide>
        <SwiperSlide>
            <img src="/src/assets/home/05.png" alt="" />
            <p className="text-3xl -mt-10 text-center text-white">Salat</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/src/assets/home/06.png" alt="" />
            <p className="text-3xl -mt-10 text-center text-white">Salat</p>
            </SwiperSlide>
      </Swiper>
            </section>
        </div>
    );
};

export default FoodCategory;

import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
// import { useSearchParams } from 'react-router-dom';
const Testimonials = () => {
    const [ reviews, setReviews] = useState([]);
    useEffect( ()=>{
        fetch('reviews.json')
        .then(res=> res.json() )
        .then(data=> setReviews(data))
    }, [])
    return (
        <section className='my-20'>
            <SectionTitle subTitle="what our client say" title="Testimonials"></SectionTitle>

     
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
           {
            reviews.map(review=>  <SwiperSlide key={review._id}>
                <div className='my-24 mx-24  flex flex-col items-center'>
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                    <p className='my-4'>{review.details}</p>
                    <h1 className='text-2xl text-yellow-600'>{review.name}</h1>

                </div>
            </SwiperSlide> )
           }
      </Swiper>
        </section>
    );
};

export default Testimonials;
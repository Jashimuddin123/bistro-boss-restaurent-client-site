import { Parallax } from 'react-parallax';



const Cover = ({img, title}) => {
    return (
    
        <Parallax
        blur={{ min: -10, max: 15 }}
        bgImage={img}
        bgImageAlt="our menu images"
        strength={-200}
    >
     <div
        className="hero h-[600px]">
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
             
            </p>
           
          </div>
        </div>
      </div>
    </Parallax>

    
    );
};

export default Cover;
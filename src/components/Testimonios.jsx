import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";



const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Cecilia",
      testimonial: "Estuvieron atentos a cada cosa que les pedía infinitamente agradecida.",
      image: "https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/usuario1.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5"
    },
    {
      name: "Valeria",
      testimonial: "Pude cambiar de trabajo en re poquito tiempo, mil gracias por todo.",
      image: "https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/usuario2.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5"
    },
    {
      name: "Maria Elena",
      testimonial: "Ame el servicio, super recomendable",
      image: "https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/usuario3.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5"
    },
    {
      name: "Mariana",
      testimonial: "Me encantó como quedó mi CV la verdad que super contenta, gracias chicos",
      image: "https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/usuario4.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5"
    },
    {
      name: "Julia",
      testimonial: "Quede sorprendida, me encanto la presentación y la redacción, impecables",
      image: "https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/usuario5.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5"
    },
    {
      name: "Lucía",
      testimonial: "Si algo los define es gente que ayuda a gente, muchas gracias por la dedicación.",
      image: "https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/usuario6.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5"
    }
  ];

  return (
    <div className="espacios-verticales">
    <h2 className="titulos-2">Nuestras Clientas</h2>
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
    >
      {testimonials.map((testimonial, index) => (

        <SwiperSlide key={index}>
          <div className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} />
            <h4>{testimonial.testimonial}</h4>
            <h3>{testimonial.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default TestimonialSlider;
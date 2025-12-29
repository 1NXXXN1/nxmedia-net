import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Children, PropsWithChildren } from 'react';

export const CarouselWrapper = ({
  children,
  ...props
}: PropsWithChildren<SwiperProps>) => {
  return (
    <Swiper navigation={true} draggable={true} {...props}>
      {Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

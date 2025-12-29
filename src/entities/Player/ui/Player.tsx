type Props = {
  id: string;
};

export const Player = ({ id }: Props) => {
  return (
    <iframe
      className='w-full h-full object-cover'
      allow='autoplay'
      allowFullScreen
      src={`https://api.linktodo.ws/embed/kp/${id}?host=kinobd.net`}
    ></iframe>
  );
};

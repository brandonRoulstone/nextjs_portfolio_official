import { TypeAnimation } from 'react-type-animation';

const TypeAnimationUi = () => {
  return (
    <TypeAnimation
      sequence={[
        'A Portflio built for a Web developer.',
        1000, 
        'A Portflio built for a Software Engineer.',
        1000, 
        'A Portflio built for a Freelance Web developer.',
        1000, 
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
      className="text-[.5rem] w-[100%] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-900 bg-clip-text text-transparent md:text-xl lg:text-2xl"
    />
  );
};

export default TypeAnimationUi;
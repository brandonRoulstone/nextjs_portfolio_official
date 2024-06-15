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
      className="text-[1.2rem] w-[100%] bg-gradient-to-r from-purple-200 via-purple-600 to-purple-900 bg-clip-text text-transparent sm:text-3xl"
    />
  );
};

export default TypeAnimationUi;
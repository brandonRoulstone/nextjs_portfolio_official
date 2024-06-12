import { TypeAnimation } from 'react-type-animation';

const TypeAnimationUi = () => {
  return (
    <TypeAnimation
      sequence={[
        'I am a Web developer.',
        1000, 
        'I am a Software Engineer.',
        1000, 
        'I am a Freelance Web developer.',
        1000, 
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block', color: 'black' }}
      repeat={Infinity}
      className="text-[1.2rem] w-[100%] text-black sm:text-4xl"
    />
  );
};

export default TypeAnimationUi;
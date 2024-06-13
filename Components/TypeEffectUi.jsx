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
      style={{ display: 'inline-block' }}
      repeat={Infinity}
      className="text-[1.2rem] w-[100%] bg-gradient-to-r from-zinc-200 via-zinc-600 to-zinc-200 bg-clip-text text-transparent sm:text-4xl"
    />
  );
};

export default TypeAnimationUi;
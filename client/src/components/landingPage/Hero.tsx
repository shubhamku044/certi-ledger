import 'atropos/css';
import Atropos from 'atropos/react';
import Stars from './stars';
import bgImage from '../../assets/bg.png';
import './index.css';

const Hero = () => {

  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-[#15021D]/50">
        <Atropos
          style={{ background: 'transparent' }}
          className='my-atropos'
          activeOffset={40}
          shadowScale={0}
          component='div'
          shadow={false}
          highlight={false}
          scaleChildren
        >
          <div
            className="flex items-center justify-center min-h-screen"
            data-atropos-opacity="1;0.8"
            data-atropos-offset="4"
          >
            <h1
              className="font-black"
            >
              <span className="text-[#792ec7] block text-3xl tracking-wide">Create Certificates on</span>
              <span
                className="text-[10rem] block tracking-wider"
                style={{
                  background: 'linear-gradient(90deg, #792EC7 0%, rgba(244, 233, 255, 0.50) 50%, #752EC8 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  lineHeight: 0.8
                }}
              >
                BlockChain
              </span>
            </h1>
          </div>
          <div
            className='absolute top-0 left-0 w-full h-full'
            data-atropos-offset="-4"
          >
            <Stars />
          </div>
        </Atropos>
        <div
          className='absolute top-0 left-0 w-full h-full hero-bg'
          style={{
            background: `url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: -1
          }}
        />
      </div>
    </>
  );
};

export default Hero;

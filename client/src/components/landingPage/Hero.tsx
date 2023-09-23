import 'atropos/css';
import Atropos from 'atropos/react';
import Stars from './stars';
import bgImage from '../../assets/bg.png';
import './index.css';

const Hero = () => {

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-[#15021D]/50">
        <Atropos
          style={{ background: 'transparent' }}
          className="my-atropos"
          activeOffset={40}
          shadowScale={0}
          component="div"
          shadow={false}
          highlight={false}
          scaleChildren
        >
          <div
            className="flex min-h-screen items-center justify-center"
            data-atropos-opacity="1;0.8"
            data-atropos-offset="4"
          >
            <h1
              className="font-black"
            >
              <span className="block text-3xl tracking-wide text-[#792ec7]">Create Certificates on</span>
              <span
                className="block text-[10rem] tracking-wider"
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
            className="absolute left-0 top-0 h-full w-full"
            data-atropos-offset="-4"
          >
            <Stars />
          </div>
        </Atropos>
        <div
          className="hero-bg absolute left-0 top-0 h-full w-full"
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

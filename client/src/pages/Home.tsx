import 'atropos/css';
import Atropos from 'atropos/react';
import { Stars } from '../components';
import BgImage from '../assets/bg.png';

const Home = () => {

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        <Atropos
          style={{ background: 'transparent' }}
          className='my-atropos'
          activeOffset={40}
          shadowScale={1.05}
          component='div'
          shadow={false}
          highlight={false}
          scaleChildren
        >
          <img
            src={BgImage}
            className='object-cover absolute bottom-0 left-0 h-full'
            style={{
              width: '150% !important'
            }}
            data-atropos-offset="-8"
            data-atropos-opacity="1"
          />
          <div
            className="flex items-center justify-center min-h-screen bg-[#15021D]/50"
            data-atropos-opacity="1;0.8"
            data-atropos-offset="4"
          >
            <h1
              className="text-[#792ec7] font-black text-9xl"
            >
              Blockchain
            </h1>
          </div>
          <div
            className='absolute top-0 left-0 w-full h-full'
            data-atropos-offset="-4"
          >
            <Stars />
          </div>
        </Atropos>
      </div>
      <div
        className='min-h-screen bg-[#15021d]'
      >
        <h1 className='text-[#792ec7] font-black text-9xl'>New section</h1>
      </div>
    </>
  );
};

export default Home;

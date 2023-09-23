import bgImage from '../../assets/bg-register.png';

const Register = () => {
  return (
    <section
      className="py-24 min-h-screen flex items-center justify-center register-con"
      style={{
        background: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="gap-20 flex flex-col items-center">
          <p
            className="text-center px-10 py-10 font-bold text-3xl tracking-wider italic"
            style={{
              background: 'linear-gradient(180deg, rgba(167, 85, 244, 0.50) 0%, rgba(123, 60, 180, 0.50) 10.43%, rgba(21, 2, 29, 0.50) 50.53%, rgba(192, 133, 246, 0.50) 99.99%, rgba(255, 255, 255, 0.00) 100%)',
              borderRadius: '2rem'
            }}
          >
            Join the CertiLedger community today. <br />
            Register now for secure, trusted certificate management. <br />
            Unlock the future of validation... <br />
          </p>
          <button className="border-4 px-10 py-2 rounded-lg bg-white text-[#6D30A4] font-black tracking-wide text-lg border-[#6d30a4] mx-auto">Register Now</button>
        </div>
      </div>
    </section >
  );
};

export default Register;

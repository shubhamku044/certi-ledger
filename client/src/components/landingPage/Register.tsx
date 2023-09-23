import bgImage from '../../assets/bg-register.png';

const Register = () => {
  return (
    <section
      className="register-con flex min-h-screen items-center justify-center py-24"
      style={{
        background: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <div className="flex flex-col items-center gap-20">
          <p
            className="p-10 text-center text-3xl font-bold italic tracking-wider"
            style={{
              background: 'linear-gradient(180deg, rgba(167, 85, 244, 0.50) 0%, rgba(123, 60, 180, 0.50) 10.43%, rgba(21, 2, 29, 0.50) 50.53%, rgba(192, 133, 246, 0.50) 99.99%, rgba(255, 255, 255, 0.00) 100%)',
              borderRadius: '2rem'
            }}
          >
            Join the CertiLedger community today. <br />
            Register now for secure, trusted certificate management. <br />
            Unlock the future of validation... <br />
          </p>
          <button className="mx-auto rounded-lg border-4 border-[#6d30a4] bg-white px-10 py-2 text-lg font-black tracking-wide text-[#6D30A4]">Register Now</button>
        </div>
      </div>
    </section >
  );
};

export default Register;

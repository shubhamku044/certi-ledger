const Register = () => {
  return (
    <section
      className="py-24 min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #170220, #2D0E43, #170220)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="gap-6">
          <p
            className="w-full text-center px-10 py-10 font-bold text-3xl tracking-wider italic"
            style={{
              background: 'linear-gradient(180deg, rgba(167, 85, 244, 0.50) 0%, rgba(123, 60, 180, 0.50) 10.43%, rgba(21, 2, 29, 0.50) 50.53%, rgba(192, 133, 246, 0.50) 99.99%, rgba(255, 255, 255, 0.00) 100%)',
              borderRadius: '2rem'
            }}
          >
            Join the CertiLedger community today. <br />
            Register now for secure, trusted certificate management. <br />
            Unlock the future of validation... <br />
          </p>
          <button className="">Register Now</button>
        </div>
      </div>
    </section>
  );
};

export default Register;

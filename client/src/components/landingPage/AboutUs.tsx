import abtCompany from '../../assets/company.svg';
import abtmission from '../../assets/rocket.svg';
import abtcases from '../../assets/use_cases.svg';

const AboutUs = () => {
  return (
    <section
      className="py-24"
      style={{
        background: 'linear-gradient(180deg, #170220, #170220)'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        <div className="flex items-center space-x-8">
          <div>
            <img
              src={abtCompany}
              alt='About company'
              className='w-52'
            />
          </div>
          <div className="space-y-2 max-w-sm">
            <h2 className="font-bold text-xl">
              About Company
            </h2>
            <p>
              Our software securely issues, stores, and verifies digital certificates, simplifying trust
              and preventing fraud.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 justify-start flex-row-reverse">
          <div>
            <img
              src={abtmission}
              alt='About company'
              className='w-52'
            />
          </div>
          <div className="space-y-2 max-w-sm">
            <h2 className="font-bold text-xl text-end">
              Our Mission
            </h2>
            <p className="text-end">
              Secure, streamline, and enhance certificate management through blockchain technology for
              global trust and efficiency.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div>
            <img
              src={abtcases}
              alt='About company'
              className='w-52'
            />
          </div>
          <div className="space-y-2 max-w-sm">
            <h2 className="font-bold text-xl">
              Use Cases
            </h2>
            <p>
              CertiLedger serves students, businesses, institutions, and governments, providing
              secure certificate issuance and verification
            </p>
          </div>
        </div>
        <div />
      </div>
    </section>
  );
};

export default AboutUs;

import customizableimage from '../../assets/customizable.svg';
import batchwiseimage from '../../assets/batch.svg';
import tamperimage from '../../assets/tamper.svg';
import verifyimage from '../../assets/verify.svg';

interface IFeatureCard {
  imgSrc: string;
  title: string;
  desc: string;
}

const FeatureCard = ({ imgSrc, title, desc }: IFeatureCard) => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(22, 1, 31, 0.05) -20.53%, #170220 21.12%, #16011F 49.26%, #5A278A 120.17%)'
      }}
      className="flex items-center gap-8 rounded-lg border-2 p-10"
    >
      <img
        src={imgSrc}
        alt="About company"
        className="w-52"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>
        <p>
          {desc}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section
      className="py-24"
      style={{
        background: 'linear-gradient(180deg, #170220, #2D0E43, #170220)'
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col space-y-24">
        <h2 className="mx-auto text-5xl font-bold">Features</h2>
        <div className="grid grid-cols-2 gap-6">
          <FeatureCard imgSrc={customizableimage} title="Fully customizable" desc="Tailor CertiLedger to your needs with powerful customization options" />
          <FeatureCard imgSrc={batchwiseimage} title="Batch-wise Issuance" desc="Efficiently issue certificates in batches, saving time." />
          <FeatureCard imgSrc={tamperimage} title="Tamperproof" desc="Ensure the integrity of your certificates with tamper-proof  security, safeguarding against unauthorised alterations" />
          <FeatureCard imgSrc={verifyimage} title="Instant Verification" desc="Experience seamless trust with instant certificate verification, providing quick and reliable confirmation of authenticity" />
        </div>
      </div>
    </section>
  );
};

export default Features;

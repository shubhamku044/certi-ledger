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
      className="px-10 py-10 border-2 rounded-lg flex items-center gap-8"
    >
      <img
        src={imgSrc}
        alt='About company'
        className='w-52'
      />
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl">
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
      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        <h2 className="text-5xl font-bold mx-auto">Features</h2>
        <div className="grid grid-cols-2 gap-6">
          <FeatureCard imgSrc={} title="" desc="" />
          <FeatureCard imgSrc={} title="" desc="" />
          <FeatureCard imgSrc={} title="" desc="" />
          <FeatureCard imgSrc={} title="" desc="" />
        </div>
      </div>
    </section>
  );
};

export default Features;

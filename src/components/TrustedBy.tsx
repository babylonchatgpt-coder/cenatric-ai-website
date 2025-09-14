const TrustedBy = () => {
  const companies = [
    "RestaurantPro",
    "SalonElite", 
    "PropertyMax",
    "ServiceFirst",
    "RetailBoost"
  ];

  return (
    <section className="section-spacing bg-accent/30">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-muted-foreground mb-8 text-lg">
            Trusted by local businesses across industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="text-xl font-semibold text-muted-foreground/70 hover:text-primary transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2 } from "lucide-react";

const TrustedBy = () => {
  const { t } = useLanguage();
  const companies = [
    "RestaurantPro",
    "SalonElite", 
    "PropertyMax",
    "ServiceFirst",
    "RetailBoost"
  ];

  return (
    <section className="py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-8">
            {t.trustedBy.title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 transition-all duration-300 hover:scale-110"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold text-muted-foreground/70 group-hover:text-primary transition-colors">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
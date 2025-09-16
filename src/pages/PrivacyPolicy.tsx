import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Algemene Informatie</h2>
            <p className="text-muted-foreground">
              Lunara ("wij", "ons", "onze") respecteert uw privacy en is toegewijd aan het beschermen van uw persoonlijke gegevens. 
              Dit privacybeleid legt uit hoe wij uw informatie verzamelen, gebruiken en beschermen wanneer u onze website bezoekt 
              of gebruik maakt van onze diensten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Welke Gegevens Verzamelen Wij</h2>
            <p className="text-muted-foreground mb-3">Wij kunnen de volgende types persoonlijke gegevens verzamelen:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
              <li>Bedrijfsinformatie (bedrijfsnaam, functie, branche)</li>
              <li>Technische gegevens (IP-adres, browsertype, apparaatinformatie)</li>
              <li>Gebruiksgegevens (hoe u onze website gebruikt)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Hoe Wij Uw Gegevens Gebruiken</h2>
            <p className="text-muted-foreground mb-3">Wij gebruiken uw persoonlijke gegevens voor:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Het leveren van onze AI-chatbot diensten</li>
              <li>Communicatie over onze producten en diensten</li>
              <li>Het verbeteren van onze website en services</li>
              <li>Het naleven van wettelijke verplichtingen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Gegevens Delen</h2>
            <p className="text-muted-foreground">
              Wij verkopen, verhuren of delen uw persoonlijke gegevens niet met derden, behalve:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
              <li>Met uw expliciete toestemming</li>
              <li>Om te voldoen aan wettelijke verplichtingen</li>
              <li>Met vertrouwde serviceproviders die ons helpen onze diensten te leveren</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Beveiliging van Gegevens</h2>
            <p className="text-muted-foreground">
              Wij implementeren passende technische en organisatorische maatregelen om uw persoonlijke gegevens 
              te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Uw Rechten</h2>
            <p className="text-muted-foreground mb-3">Onder de AVG heeft u het recht om:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Toegang te vragen tot uw persoonlijke gegevens</li>
              <li>Correctie van onjuiste gegevens te vragen</li>
              <li>Verwijdering van uw gegevens te vragen</li>
              <li>Beperking van de verwerking te vragen</li>
              <li>Bezwaar te maken tegen verwerking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
            <p className="text-muted-foreground">
              Onze website gebruikt cookies om uw ervaring te verbeteren en analyse uit te voeren. 
              U kunt cookies uitschakelen via uw browserinstellingen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p className="text-muted-foreground">
              Voor vragen over dit privacybeleid kunt u contact met ons opnemen via:
            </p>
            <p className="text-muted-foreground mt-2">
              E-mail: <a href="mailto:info@lunara.com" className="text-primary hover:underline">info@lunara.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Wijzigingen</h2>
            <p className="text-muted-foreground">
              Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Wijzigingen worden op deze pagina gepubliceerd 
              met de datum van de laatste wijziging.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Laatste update:</strong> December 2024
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
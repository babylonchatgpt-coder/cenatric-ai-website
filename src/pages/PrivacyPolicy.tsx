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
            <h2 className="text-2xl font-semibold mb-4">1. General Information</h2>
            <p className="text-muted-foreground">
              Cenatric ("we", "us", "our") respects your privacy and is committed to protecting your personal data. 
              This privacy policy explains how we collect, use and protect your information when you visit our website 
              or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. What Data We Collect</h2>
            <p className="text-muted-foreground mb-3">We may collect the following types of personal data:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Company information (company name, job title, industry)</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Usage data (how you use our website)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
            <p className="text-muted-foreground mb-3">We use your personal data to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide our AI chatbot services</li>
              <li>Communicate about our products and services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell, rent or share your personal data with third parties, except:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>With trusted service providers who help us deliver our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal data 
              against unauthorized access, modification, disclosure or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-3">Under the GDPR, you have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Request restriction of processing</li>
              <li>Object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
            <p className="text-muted-foreground">
              Our website uses cookies to improve your experience and perform analytics. 
              You can disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p className="text-muted-foreground">
              For questions about this privacy policy, you can contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              Email: <a href="mailto:info@cenatric.com" className="text-primary hover:underline">info@cenatric.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. Changes will be published on this page 
              with the date of the last update.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Last updated:</strong> December 2024
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
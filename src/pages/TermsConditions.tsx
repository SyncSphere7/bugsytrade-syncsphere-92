
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const TermsConditions = () => {
  return (
    <Layout>
      <div className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-coffee-dark mb-6">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: May 17, 2025</p>

          <div className="prose prose-stone max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">1. Agreement to Terms</h2>
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you and Bugsy International Trade, concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto. You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions.
              </p>
              <p className="mt-3">
                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">2. Intellectual Property Rights</h2>
              <p className="mb-3">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and their selection and arrangement are owned or controlled by us or licensed to us, and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use, provided that you keep all copyright or other proprietary notices intact.
              </p>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">3. User Representations</h2>
              <p className="mb-3">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You have the legal capacity to enter into these Terms and Conditions</li>
                <li>You are at least 18 years old</li>
                <li>You will not use the Site for any illegal or unauthorized purpose</li>
                <li>Your use of the Site will not violate any applicable law or regulation</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">4. Products & Services</h2>
              <p className="mb-3">
                We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors.
              </p>
              <p>
                All products are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
              </p>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">5. Purchases and Payment</h2>
              <p>
                We accept various forms of payment. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
              </p>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">6. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold us harmless, including our subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms and Conditions or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
              </p>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">7. Contact Information</h2>
              <p>
                Questions about the Terms and Conditions should be sent to us at:
              </p>
              <address className="mt-3 not-italic">
                <p>Bugsy International Trade</p>
                <p>Kampala, Uganda</p>
                <p>Email: office@bugsytrade.com</p>
                <p>Phone: +256 786 700 022</p>
              </address>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;

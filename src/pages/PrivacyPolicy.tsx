
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-coffee-dark mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: May 17, 2025</p>

          <div className="prose prose-stone max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">1. Introduction</h2>
              <p>
                At BugsyTrade, we take your privacy very seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">2. Information We Collect</h2>
              <p className="mb-4">
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and business information when you register, subscribe to our newsletter, or contact us.</li>
                <li><strong>Usage Data:</strong> Information on how you access and use our website and services.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies, web beacons, and other tracking technologies.</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">3. How We Use Your Information</h2>
              <p className="mb-4">
                We may use the information we collect about you to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, such as updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate about promotions, upcoming events, and other news about products and services</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">4. Disclosure of Your Information</h2>
              <p className="mb-4">
                We may share information we have collected about you in certain situations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your information may be transferred.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf.</li>
                <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities.</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">5. Your Rights</h2>
              <p className="mb-4">
                You have certain rights relating to your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to withdraw consent where processing is based on consent</li>
                <li>The right to object to processing of your personal information</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section>
              <h2 className="text-2xl font-serif text-coffee-dark">6. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <address className="mt-3 not-italic">
                <p>BugsyTrade</p>
                <p>123 Coffee Rd, Kampala, Uganda</p>
                <p>Email: info@bugsytrade.com</p>
                <p>Phone: +256 123 456 789</p>
              </address>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

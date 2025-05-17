
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, FileSearch, Truck, FileCheck, Handshake, Package, DollarSign } from 'lucide-react';

const ImportProcess = () => {
  const steps = [
    {
      icon: <FileSearch className="h-10 w-10 text-coffee" />,
      title: "Initial Inquiry & Consultation",
      description: "The process begins when you contact Bugsy Trade with your specific requirements. We'll discuss product specifications, volume needs, quality standards, and delivery timelines to understand your requirements fully.",
      details: [
        "Product type and specifications",
        "Volume and packaging requirements",
        "Quality standards and certifications needed",
        "Budget considerations",
        "Delivery timeline and location"
      ]
    },
    {
      icon: <Handshake className="h-10 w-10 text-coffee" />,
      title: "Quotation & Agreement",
      description: "Based on your requirements, we'll prepare a detailed quotation covering all costs involved. Once terms are agreed upon, we'll formalize our agreement with a contract that protects both parties.",
      details: [
        "Comprehensive pricing breakdown",
        "Payment terms and schedule",
        "Quality guarantees and standards",
        "Delivery specifications",
        "Contract signing and initial deposit"
      ]
    },
    {
      icon: <Package className="h-10 w-10 text-coffee" />,
      title: "Order Processing & Quality Control",
      description: "We'll begin sourcing and preparing your order, implementing rigorous quality control measures throughout the process to ensure your products meet all specified requirements.",
      details: [
        "Product selection and preparation",
        "Quality testing and certification",
        "Packaging according to specifications",
        "Pre-shipment inspection",
        "Documentation preparation"
      ]
    },
    {
      icon: <FileCheck className="h-10 w-10 text-coffee" />,
      title: "Export Documentation",
      description: "We handle all necessary paperwork for smooth export from Uganda, including permits, certificates, and customs documentation in compliance with both Ugandan and destination country requirements.",
      details: [
        "Certificate of Origin",
        "Phytosanitary Certificate (for agricultural products)",
        "Export permits and licenses",
        "Commercial invoice and packing list",
        "Bill of Lading or Air Waybill"
      ]
    },
    {
      icon: <Truck className="h-10 w-10 text-coffee" />,
      title: "Shipping & Logistics",
      description: "Your order is carefully loaded and shipped via the most appropriate method (sea, air, or land), with regular updates provided throughout the journey to the destination port.",
      details: [
        "Container loading and sealing",
        "Transportation to port of exit",
        "Customs clearance at origin",
        "International shipping",
        "Real-time shipment tracking"
      ]
    },
    {
      icon: <DollarSign className="h-10 w-10 text-coffee" />,
      title: "Delivery & Final Settlement",
      description: "Upon arrival at the destination, we coordinate with your clearing agents for smooth handover. Final payment is processed after successful delivery confirmation.",
      details: [
        "Arrival notification",
        "Coordination with import clearance agents",
        "Delivery to final destination",
        "Quality verification at delivery",
        "Final invoice settlement"
      ]
    }
  ];

  const paymentMethods = [
    {
      title: "Letter of Credit (L/C)",
      description: "A secure, bank-guaranteed payment method that protects both buyer and seller by ensuring payment is made only when shipping documents are presented according to agreed terms."
    },
    {
      title: "Telegraphic Transfer (T/T)",
      description: "Direct bank-to-bank electronic funds transfer, typically structured with a deposit payment (30-50%) and balance payment before or after shipment."
    },
    {
      title: "Documentary Collection (D/P or D/A)",
      description: "Payment is made through banks using shipping documents, either against payment (D/P) or against acceptance (D/A) of a time draft."
    }
  ];

  return (
    <Layout>
      <div className="relative bg-coffee-dark text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/cf6fd754-2a15-4f7d-b7b5-cdf97a580988.png" 
            alt="Shipping containers" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Import Process
            </h1>
            <p className="text-xl text-coffee-light">
              A transparent, step-by-step guide to importing Uganda's finest agricultural products through Bugsy Trade.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading
              title="Your Pathway to Premium Ugandan Products"
              subtitle="We've simplified the import process to make international trade accessible and hassle-free"
              centered
            />
          </RevealOnScroll>

          <div className="mt-16 space-y-16">
            {steps.map((step, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex flex-col items-center text-center">
                    <div className="bg-cream p-6 rounded-full mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold">Step {index + 1}</h3>
                    <h4 className="text-lg font-medium text-coffee mt-2">{step.title}</h4>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-coffee mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <SectionHeading
              title="Payment Methods"
              subtitle="Flexible, secure options for international transactions"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-coffee">{method.title}</h3>
                  <p className="text-gray-700">{method.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-coffee/10 p-8 rounded-lg mt-12">
              <h3 className="text-xl font-bold mb-4 text-center">Our Commitment</h3>
              <p className="text-gray-700 text-center">
                At Bugsy Trade, we understand that international trade can be complex, especially for first-time importers. 
                We're committed to guiding you through every step of the process, offering clear communication, transparent pricing, 
                and flexible solutions tailored to your specific needs.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-6">Ready to Begin?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Contact us today to discuss your import needs and start the process of bringing Uganda's premium agricultural products to your market.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-coffee hover:bg-coffee-dark">
                  Start Your Import Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default ImportProcess;

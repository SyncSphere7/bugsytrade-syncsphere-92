
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-coffee" />,
      title: "Email",
      content: "info@bugsytrade.com",
      link: "mailto:info@bugsytrade.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-coffee" />,
      title: "Phone",
      content: "+256 123 456 789",
      link: "tel:+256123456789",
    },
    {
      icon: <MapPin className="h-6 w-6 text-coffee" />,
      title: "Address",
      content: "123 Coffee Rd, Kampala, Uganda",
      link: "https://maps.google.com/?q=Kampala,Uganda",
    },
    {
      icon: <Clock className="h-6 w-6 text-coffee" />,
      title: "Business Hours",
      content: "Mon-Fri: 9AM - 5PM EAT",
      link: null,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-coffee-dark text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-coffee-light"
            >
              Whether you're a producer looking to expand your market or an importer seeking premium products, 
              we're here to facilitate connections that benefit all parties.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading 
                title="Send Us a Message" 
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
              <ContactForm />
            </div>

            <div className="lg:col-span-1">
              <SectionHeading title="Contact Information" />
              
              <div className="bg-cream rounded-xl p-6 shadow-sm">
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-white p-3 rounded-full shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-coffee hover:underline"
                            target={item.link.startsWith('http') ? "_blank" : undefined}
                            rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="overflow-hidden rounded-xl h-[400px] shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082225!2d32.52799519350855!3d0.3177571247864761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f8b497377%3A0x7214fea3d47c7964!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1701245732344!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              title="BugsyTrade Location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

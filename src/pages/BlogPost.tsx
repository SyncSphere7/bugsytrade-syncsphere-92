
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import RevealOnScroll from '@/components/ui/reveal-on-scroll';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

interface BlogPostData {
  id: number;
  title: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

// This would normally come from an API or CMS
const getBlogData = () => [
  {
    id: 1,
    title: "The Growing Demand for Specialty Ugandan Coffee in Europe",
    excerpt: "European consumers are increasingly seeking out specialty Ugandan coffee for its unique flavors and ethical sourcing practices.",
    content: `
      <p>The European market for specialty coffee has been growing rapidly over the past decade, with consumers showing increasing interest in the origin, sustainability, and unique flavor profiles of their daily brew. Among the emerging origins gaining recognition, Ugandan coffee has started to carve out a distinctive niche.</p>
      
      <p>Uganda, often overshadowed by its East African neighbors Kenya and Ethiopia in the specialty coffee market, has been quietly developing its coffee sector with a focus on quality over quantity. The country's diverse microclimates, rich volcanic soils, and traditional farming methods create ideal conditions for producing exceptional coffee with distinctive flavor profiles.</p>
      
      <h3>What Makes Ugandan Coffee Special?</h3>
      
      <p>Ugandan coffee, particularly from regions like Mount Elgon, Sipi Falls, and the Rwenzori Mountains, offers unique flavor profiles that range from bright citrus notes to rich chocolate and berry undertones. The country produces both Arabica and Robusta varieties, with the latter often defying the typical perception of Robusta as merely a filler bean.</p>
      
      <p>In fact, Uganda is one of the few countries where high-quality, specialty-grade Robusta is produced, offering a fascinating alternative for European coffee enthusiasts looking to expand their palate beyond traditional Arabica offerings.</p>
      
      <h3>European Consumer Trends</h3>
      
      <p>Several factors are driving the increased European interest in Ugandan coffee:</p>
      
      <ul>
        <li>Ethical sourcing considerations - many Ugandan coffee cooperatives have implemented sustainable and fair trade practices</li>
        <li>Desire for new flavor experiences beyond the familiar profiles of South American and other East African coffees</li>
        <li>Growing "third wave" coffee culture that emphasizes traceability and direct relationships with producers</li>
        <li>Increased awareness of Uganda's improving quality standards and cup profiles</li>
      </ul>
      
      <h3>Challenges and Opportunities</h3>
      
      <p>Despite the growing interest, Ugandan coffee exporters face challenges in consistently meeting European quality standards and logistics requirements. Infrastructure limitations and climate change impacts also present ongoing challenges.</p>
      
      <p>However, with continued investment in quality improvement, producer education, and sustainable farming practices, Uganda is well-positioned to become a more prominent origin in Europe's specialty coffee sector.</p>
      
      <p>As European consumers continue to seek out unique coffee experiences with compelling stories and exceptional quality, Uganda's coffee sector stands at the threshold of an exciting period of growth and recognition in this discerning market.</p>
    `,
    image: "/lovable-uploads/ad8a4b0d-7deb-4d23-82d9-3a1b9ee272d7.png",
    category: "Coffee",
    author: "Iwo Bulski",
    date: "May 12, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Sustainability Practices in Ugandan Tea Production",
    excerpt: "How Ugandan tea producers are implementing innovative sustainability practices that benefit both the environment and product quality.",
    content: `
      <p>Uganda's tea industry has been undergoing a quiet revolution in recent years, with producers increasingly adopting sustainable practices that not only benefit the environment but also enhance the quality and marketability of their products.</p>
      
      <h3>The Evolution of Uganda's Tea Industry</h3>
      
      <p>Tea production in Uganda dates back to the 1920s when it was introduced by British colonists. Today, it's the country's third most important export crop after coffee and cotton. While traditionally focused on mass production of black CTC (cut, tear, curl) tea for the commodity market, many producers are now shifting toward more sustainable approaches.</p>
      
      <h3>Innovative Sustainability Initiatives</h3>
      
      <p>Several noteworthy sustainability practices have been adopted across Uganda's tea-growing regions:</p>
      
      <h4>Rainforest Alliance and UTZ Certification</h4>
      <p>Major estates and smallholder cooperatives have pursued internationally recognized certifications that verify environmental stewardship, fair labor practices, and responsible farm management. These certifications often translate to price premiums and preferred buyer status in European markets.</p>
      
      <h4>Agroforestry Integration</h4>
      <p>Progressive tea farmers are incorporating shade trees into their plantations, creating a more diverse ecosystem that protects soil health, provides natural pest control, and helps tea bushes withstand climate fluctuations. This approach also creates carbon sinks that offset emissions from processing facilities.</p>
      
      <h4>Energy-Efficient Processing</h4>
      <p>Several leading tea factories have invested in renewable energy systems, including solar arrays and biomass boilers that use agricultural waste to reduce dependence on fossil fuels. These investments not only reduce the carbon footprint of tea production but also lower operating costs in the long term.</p>
      
      <h3>The Quality Connection</h3>
      
      <p>Interestingly, many sustainability initiatives have coincided with quality improvements. For instance:</p>
      
      <ul>
        <li>Organic cultivation methods have resulted in more distinctive flavor profiles</li>
        <li>Shade-grown tea often develops more complex characteristics</li>
        <li>Improved worker welfare leads to better harvesting practices and leaf selection</li>
      </ul>
      
      <h3>Market Response</h3>
      
      <p>European buyers, particularly from the UK, Germany, and the Netherlands, have responded positively to these developments. Many are willing to pay premium prices for sustainably produced Ugandan tea, especially when the story behind the tea can be effectively communicated to consumers.</p>
      
      <p>As the global market increasingly demands both environmental responsibility and product excellence, Uganda's tea industry appears well-positioned to meet these dual expectations, potentially transforming the country's reputation from a volume producer to a recognized source of sustainable, quality tea.</p>
    `,
    image: "/lovable-uploads/916843c1-db65-4171-ac4b-5e94a84fcbca.png",
    category: "Tea",
    author: "Maria Adeke",
    date: "May 5, 2025",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "From Bean to Bar: Uganda's Emerging Cocoa Industry",
    excerpt: "Uganda's cocoa industry is gaining recognition for its fine flavor beans, catching the attention of premium chocolate makers worldwide.",
    content: `
      <p>While coffee may be Uganda's most famous export crop, another bean is quietly gaining international recognition: cocoa. The country's cocoa industry has been developing steadily over the past decade, and Ugandan beans are increasingly sought after by craft chocolate makers looking for unique flavor profiles.</p>
      
      <h3>Uganda's Cocoa Renaissance</h3>
      
      <p>Cocoa cultivation in Uganda dates back to the colonial era, but it was largely overshadowed by other crops until recently. The past decade has seen renewed interest in cocoa production, particularly in the western districts of Bundibugyo, Hoima, and Kagadi, as well as in central regions like Mukono.</p>
      
      <p>This revival has been driven by several factors, including favorable growing conditions, government support for agricultural diversification, and increasing global demand for traceable, high-quality cocoa.</p>
      
      <h3>What Makes Ugandan Cocoa Special?</h3>
      
      <p>Ugandan cocoa is predominantly of the Forestero variety, though there are also some Criollo and Trinitario hybrids being cultivated. What sets Ugandan beans apart is their distinctive flavor profile, which chocolate experts describe as featuring notes of:
      
      <ul>
        <li>Red fruits and berries</li>
        <li>Subtle spice undertones</li>
        <li>Mild nutty characteristics</li>
        <li>A balanced acidity that brightens the overall profile</li>
      </ul>
      
      <p>These characteristics make Ugandan cocoa particularly appealing to craft chocolate makers who are looking for beans with unique terroir expressions.</p>
      
      <h3>From Commodity to Specialty</h3>
      
      <p>Traditionally, most Ugandan cocoa was exported as an undifferentiated commodity. However, a growing number of cooperatives and private companies are now focusing on quality-oriented post-harvest processing, including:
      
      <ul>
        <li>Controlled fermentation protocols that develop desirable flavor precursors</li>
        <li>Careful drying techniques that prevent mold and preserve aromatics</li>
        <li>Improved storage and transportation methods to maintain quality</li>
      </ul>
      
      <p>These efforts are helping transform Ugandan cocoa from a bulk ingredient to a specialty product that commands premium prices.</p>
      
      <h3>International Recognition</h3>
      
      <p>Several international chocolate makers, particularly from Europe and North America, have begun featuring Ugandan beans in their single-origin bars. Some have even established direct trade relationships with producer cooperatives, ensuring better prices for farmers and greater traceability for consumers.</p>
      
      <p>In recent international chocolate competitions, bars made with Ugandan cocoa have received recognition for their distinctive flavor profiles, further raising the profile of the country's beans.</p>
      
      <h3>Challenges and Opportunities</h3>
      
      <p>Despite its growing reputation, Uganda's cocoa sector faces challenges, including climate change impacts, limited access to technical knowledge for farmers, and competition from established origins like Ghana and Côte d'Ivoire.</p>
      
      <p>However, with continued investment in quality improvement and sustainable farming practices, Uganda has the potential to establish itself as a recognized origin for fine flavor cocoa, offering farmers better livelihoods and providing chocolate makers with exciting new flavor profiles to explore.</p>
    `,
    image: "/lovable-uploads/6a15ce1e-014d-4c9a-95e5-3fcfd19e6fce.png",
    category: "Cocoa",
    author: "David Ochen",
    date: "April 28, 2025",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "EU Import Regulations: What Ugandan Exporters Need to Know",
    excerpt: "Navigating the complex landscape of European Union import regulations for agricultural products from East Africa.",
    content: `
      <p>For Ugandan agricultural exporters looking to access the lucrative European Union market, navigating the complex regulatory landscape can be challenging. This article provides an overview of the key regulations and compliance requirements affecting exports of coffee, tea, cocoa, and other agricultural products from Uganda to the EU.</p>
      
      <h3>The Evolving EU Regulatory Framework</h3>
      
      <p>The European Union has one of the world's most comprehensive regulatory frameworks for food and agricultural imports. Recent years have seen significant developments in these regulations, with an increasing emphasis on sustainability, traceability, and ethical sourcing.</p>
      
      <h4>Key Regulations Affecting Ugandan Exports</h4>
      
      <h5>1. Food Safety Standards</h5>
      <p>The EU's General Food Law (Regulation (EC) No 178/2002) forms the foundation of food safety requirements. For Ugandan exporters, this translates to specific requirements regarding:</p>
      <ul>
        <li>Maximum Residue Levels (MRLs) for pesticides</li>
        <li>Limits on mycotoxins, particularly ochratoxin A in coffee and aflatoxins in various products</li>
        <li>Microbiological criteria</li>
        <li>Requirements for food contact materials used in packaging</li>
      </ul>
      
      <h5>2. Deforestation-Free Products Regulation</h5>
      <p>Coming into effect in December 2024, this groundbreaking regulation will require exporters of coffee, cocoa, timber, palm oil, and other specified commodities to provide due diligence statements confirming their products haven't contributed to deforestation after December 31, 2020. This involves geolocation mapping of production areas and comprehensive traceability systems.</p>
      
      <h5>3. Official Controls Regulation</h5>
      <p>Regulation (EU) 2017/625 governs how imports are inspected at EU borders. High-risk products may be subject to increased inspection rates (up to 50% of consignments), while established exporters with good compliance records may benefit from reduced inspection frequencies.</p>
      
      <h5>4. Certification Requirements</h5>
      <p>Various certification schemes are either mandatory or highly advantageous for accessing the EU market:</p>
      <ul>
        <li>Organic certification under EU Organic Regulation 2018/848</li>
        <li>Fair Trade certification (while voluntary, increasingly expected by buyers)</li>
        <li>Global G.A.P. for fresh produce</li>
        <li>Rainforest Alliance or UTZ for coffee, tea, and cocoa</li>
      </ul>
      
      <h3>Practical Compliance Strategies</h3>
      
      <p>For Ugandan exporters, compliance with these regulations requires careful planning and investment:</p>
      
      <h4>1. Build Robust Traceability Systems</h4>
      <p>Develop or enhance systems that can trace products back to the farm level, documenting production practices and locations. Digital solutions are increasingly becoming essential for meeting these requirements efficiently.</p>
      
      <h4>2. Invest in Laboratory Testing</h4>
      <p>Regular testing for pesticide residues, mycotoxins, and other potential contaminants is essential. Consider both pre-shipment testing and understanding the testing regimes that may be applied at EU borders.</p>
      
      <h4>3. Stay Informed About Regulatory Changes</h4>
      <p>EU regulations evolve constantly. Working with trade associations, development projects, or specialized consultants can help exporters stay ahead of changes that might affect their business.</p>
      
      <h4>4. Leverage Support Programs</h4>
      <p>Various EU-funded initiatives support compliance by developing country exporters. Programs like COLEACP, the EU-East African Community Market Access Upgrade Programme (MARKUP), and others provide technical assistance and training.</p>
      
      <h3>Future Trends</h3>
      
      <p>Looking ahead, Ugandan exporters should anticipate:</p>
      <ul>
        <li>Stricter sustainability requirements, including expanded carbon footprint disclosure</li>
        <li>More comprehensive human rights due diligence requirements</li>
        <li>Increased digitalization of compliance documentation</li>
        <li>Greater consumer and regulatory focus on packaging sustainability</li>
      </ul>
      
      <p>While compliance with EU regulations presents challenges, it also creates opportunities for Ugandan exporters who can meet these standards. Products with verified compliance often command premium prices and access to higher-value market segments within the EU.</p>
    `,
    image: "/lovable-uploads/0634ee8b-a672-4298-a5d6-39ec11006714.png",
    category: "Industry News",
    author: "Robert Kyambadde",
    date: "April 21, 2025",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Meet the Women Transforming Uganda's Coffee Sector",
    excerpt: "Female coffee farmers and cooperative leaders are driving innovation and quality improvements across Uganda's coffee industry.",
    content: `
      <p>In Uganda's coffee-growing regions, a quiet revolution is taking place. Women farmers, entrepreneurs, and cooperative leaders are increasingly taking center stage, driving innovation and quality improvements in a sector traditionally dominated by men.</p>
      
      <h3>Breaking Tradition, Building Success</h3>
      
      <p>While women have always been involved in coffee production—often doing much of the planting, harvesting, and sorting work—they have historically had limited decision-making power or financial control. This dynamic is changing as women across Uganda's coffee landscape step into leadership roles and establish their own enterprises.</p>
      
      <h4>Profiles in Leadership</h4>
      
      <h5>Grace Namara: Quality-Driven Cooperative Leadership</h5>
      <p>As chairperson of the Bukonzo Joint Cooperative in western Uganda's Rwenzori Mountains, Grace has led the implementation of comprehensive quality control systems that have transformed the cooperative's output. Under her leadership, the cooperative has installed cupping labs, trained quality assessors, and developed direct relationships with specialty buyers in Europe and North America.</p>
      <p>"When we started focusing on quality rather than just volume, everything changed," explains Grace. "Our members now receive nearly double the price they used to get for their coffee, and buyers return season after season for our beans."</p>
      
      <h5>Sarah Kihika: The Micro-Mill Innovator</h5>
      <p>Sarah owns and operates one of Uganda's most progressive micro-mills in the Mount Elgon region. After years of selling to middlemen who would blend her high-quality cherries with lower-grade coffees from other farms, Sarah invested in her own processing facility.</p>
      <p>"I wanted to preserve the identity of my coffee," she says. "Now I control every step from harvest to export preparation, and my coffees are recognized for their distinct flavor profile."</p>
      <p>Sarah's mill now processes coffee from neighboring farms as well, creating a hub for quality-focused production in her community.</p>
      
      <h5>The Gumutindo Women's Coffee Alliance</h5>
      <p>In eastern Uganda, the Gumutindo cooperative has established a Women's Coffee Alliance that produces "women's coffees"—beans exclusively grown, harvested, and processed by female farmers. These coffees are marketed specifically to buyers interested in supporting gender equity in the coffee industry.</p>
      <p>The premiums earned through this program have funded community initiatives including a village savings and loan association, a health clinic, and educational scholarships for girls.</p>
      
      <h3>Innovation and Quality Improvements</h3>
      
      <p>Women-led initiatives aren't just changing the social dynamics of coffee production—they're driving tangible improvements in coffee quality:</p>
      
      <ul>
        <li><strong>Improved Processing Methods:</strong> Women-led cooperatives have been at the forefront of experimenting with honey and natural processing methods, creating new flavor profiles that stand out in the specialty market.</li>
        <li><strong>Regenerative Farming Practices:</strong> Female farmers have pioneered the integration of companion planting and organic composting systems that improve soil health and coffee tree productivity.</li>
        <li><strong>Quality Control Systems:</strong> Women's groups have implemented rigorous cherry selection protocols and lot separation practices that significantly raise the overall quality of their exports.</li>
      </ul>
      
      <h3>Overcoming Persistent Challenges</h3>
      
      <p>Despite their successes, women in Uganda's coffee sector still face significant obstacles, including:</p>
      
      <ul>
        <li>Limited access to land ownership, with most titles still held by men</li>
        <li>Difficulties accessing finance for investments in quality improvement</li>
        <li>Time poverty due to household responsibilities that compete with coffee production activities</li>
        <li>Limited representation in national coffee organizations and policy-making bodies</li>
      </ul>
      
      <h3>Support Systems and Future Prospects</h3>
      
      <p>Several initiatives are helping address these challenges:</p>
      
      <ul>
        <li>Gender-focused technical assistance programs provided by organizations like the International Women's Coffee Alliance (IWCA) Uganda chapter</li>
        <li>Buyer-funded projects that provide training and equipment specifically to women producers</li>
        <li>Financial products designed for women entrepreneurs in the coffee sector</li>
        <li>Marketing initiatives that highlight women-produced coffees to conscious consumers</li>
      </ul>
      
      <p>With these support systems in place and their own determination driving progress, Uganda's women coffee leaders are not just transforming their own businesses—they're reshaping the country's entire coffee sector, one quality improvement at a time.</p>
    `,
    image: "/lovable-uploads/b2b53896-79f4-4ebd-a14a-311bb4eff9a9.png",
    category: "Producer Stories",
    author: "Maria Adeke",
    date: "April 14, 2025",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Climate Change Adaptation in Uganda's Coffee Regions",
    excerpt: "How Ugandan coffee farmers are implementing innovative practices to adapt to changing climate conditions and protect crop quality.",
    content: `
      <p>Uganda's coffee sector faces significant challenges from climate change, with rising temperatures, shifting rainfall patterns, and increasing pest pressures threatening both yields and quality. However, across the country's diverse coffee-growing regions, farmers and cooperatives are developing innovative adaptation strategies that may offer lessons for coffee producers worldwide.</p>
      
      <h3>Climate Challenges in Uganda's Coffee Landscape</h3>
      
      <p>Climate change impacts vary across Uganda's coffee-growing regions:</p>
      
      <ul>
        <li>In the higher-altitude Arabica regions like Mount Elgon and the Rwenzori Mountains, warming temperatures are allowing coffee leaf rust to thrive at elevations previously too cool for the fungus.</li>
        <li>In the central and western Robusta-growing areas, unpredictable rainfall has disrupted flowering patterns and complicated harvest timing.</li>
        <li>Across all regions, extreme weather events including both prolonged droughts and excessive rainfall have become more common, stressing coffee trees and creating challenging conditions for processing.</li>
      </ul>
      
      <h3>Innovative Adaptation Strategies</h3>
      
      <p>In response to these challenges, Uganda's coffee sector has been implementing a range of adaptation strategies:</p>
      
      <h4>1. Shade Management Systems</h4>
      
      <p>One of the most widespread adaptations has been the introduction or enhancement of shade management systems. In the Rwenzori region, farmers are intercropping coffee with banana and timber species like Grevillea and Maesopsis. These trees provide:</p>
      
      <ul>
        <li>Temperature moderation, keeping coffee trees cooler during heat spikes</li>
        <li>Reduced evaporation and improved soil moisture retention</li>
        <li>Additional income sources that diversify farm revenue</li>
        <li>Natural mulch from leaf litter that builds soil carbon</li>
      </ul>
      
      <p>Research conducted by Makerere University has found that properly shaded coffee in these systems shows significantly less heat stress damage and produces more consistent yields than coffee in open sun systems.</p>
      
      <h4>2. Water Management Innovations</h4>
      
      <p>Rainfall unpredictability has prompted investments in water management systems:</p>
      
      <ul>
        <li><strong>Micro-catchments:</strong> In hilly regions, farmers are constructing small terraces and crescent-shaped berms that capture rainwater and reduce erosion during heavy downpours.</li>
        <li><strong>Rainwater harvesting:</strong> Cooperatives are installing rainwater collection systems at processing stations, capturing roof runoff in tanks for use during dry processing periods.</li>
        <li><strong>Greywater recycling:</strong> Some washing stations have implemented systems to filter and reuse water from the initial stages of coffee processing.</li>
      </ul>
      
      <h4>3. Varietal Diversification</h4>
      
      <p>Many farmers are moving away from monoculture approaches by planting multiple coffee varieties with different climate tolerances:</p>
      
      <ul>
        <li><strong>Robust Arabica varieties:</strong> Farmers in Arabica regions are testing varieties like Batian and Nyasaland that show better disease resistance while maintaining quality characteristics.</li>
        <li><strong>Improved Robusta clones:</strong> In traditional Robusta areas, farmers are integrating newer clones developed by Uganda's National Coffee Research Institute (NaCORI) that offer better drought tolerance.</li>
        <li><strong>Arabica-Robusta interface zones:</strong> In mid-altitude areas that are becoming too warm for traditional Arabica production, some farmers are experimenting with both species to determine optimal adaptations.</li>
      </ul>
      
      <h4>4. Processing Adaptations</h4>
      
      <p>Climate disruptions are also driving innovations in processing methods:</p>
      
      <ul>
        <li><strong>Solar dryers:</strong> To cope with unpredictable rainfall during the drying season, raised-bed solar dryers with adjustable transparent covers allow drying to continue during light rain while protecting beans from moisture.</li>
        <li><strong>Controlled fermentation:</strong> Some producer groups are moving to tank fermentation methods that allow precise control over the process regardless of ambient temperature fluctuations.</li>
        <li><strong>Honey and natural processing:</strong> In water-scarce regions, water-saving processing methods like honey and natural processing are being adopted and refined.</li>
      </ul>
      
      <h3>Results and Learning</h3>
      
      <p>Early results from these adaptation efforts are promising:</p>
      
      <ul>
        <li>Farms implementing comprehensive shade management systems have reported yield stabilization even in years with challenging weather conditions.</li>
        <li>Improved water management has reduced processing disruptions during dry periods.</li>
        <li>Diversified varietal portfolios are providing insurance against total crop failure.</li>
      </ul>
      
      <p>Perhaps most importantly, many of these adaptation strategies are improving rather than compromising quality. Properly implemented shade systems, for instance, often result in slower cherry maturation and higher cup scores.</p>
      
      <h3>Scaling Challenges and Opportunities</h3>
      
      <p>Despite these promising innovations, significant challenges remain in scaling adaptation efforts:</p>
      
      <ul>
        <li>Initial investment costs for systems like water harvesting infrastructure can be prohibitive for smallholder farmers.</li>
        <li>Technical knowledge gaps exist, particularly around optimal shade tree selection and management.</li>
        <li>Some adaptation measures require collective action at the landscape level rather than individual farm initiatives.</li>
      </ul>
      
      <p>Several initiatives are working to address these challenges, including climate-focused extension services, carbon credit programs that reward sustainable practices, and buyer-funded climate adaptation projects.</p>
      
      <h3>The Path Forward</h3>
      
      <p>As climate change continues to pressure coffee production systems worldwide, Uganda's experience demonstrates that proactive adaptation can help maintain both productivity and quality. By combining traditional knowledge with scientific insights and continuous innovation, Uganda's coffee farmers are not just responding to climate challenges—they're developing resilient production systems that may serve as models for coffee regions facing similar pressures around the world.</p>
    `,
    image: "/lovable-uploads/bef93f67-eee4-4f21-81bc-284a92e37ae0.png",
    category: "Coffee",
    author: "David Ochen",
    date: "April 7, 2025",
    readTime: "6 min read"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  
  useEffect(() => {
    if (!id) {
      navigate('/blog');
      return;
    }
    
    const blogData = getBlogData();
    const currentPost = blogData.find(post => post.id === Number(id));
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts (same category, excluding current post)
      const related = blogData
        .filter(p => p.category === currentPost.category && p.id !== Number(id))
        .slice(0, 2);
        
      setRelatedPosts(related);
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!post) {
    return null;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-cream py-32">
        <div className="container mx-auto px-6 relative z-10">
          <Button 
            variant="outline" 
            className="mb-8 flex items-center gap-2 border-coffee text-coffee hover:bg-coffee hover:text-white"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="bg-coffee text-white py-1 px-3 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 rounded-lg overflow-hidden h-[400px]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div 
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-6">
            <RevealOnScroll>
              <SectionHeading
                title="Related Articles"
                subtitle={`More insights about ${post.category}`}
                centered
              />
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {relatedPosts.map((relatedPost, index) => (
                <RevealOnScroll key={relatedPost.id} delay={index * 2}>
                  <div 
                    className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer h-full flex flex-col"
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                  >
                    <div className="h-48 relative">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute top-4 right-4 bg-coffee text-white py-1 px-3 rounded-full text-sm">
                        {relatedPost.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif font-bold mb-3">{relatedPost.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{relatedPost.excerpt}</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-coffee hover:text-coffee-dark justify-start"
                      >
                        Read Article
                      </Button>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-serif mb-6">Never Miss an Update</h2>
              <p className="text-lg text-gray-700 mb-8">
                Subscribe to our newsletter to receive the latest insights on Uganda's agricultural export sector.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coffee focus:border-transparent"
                  required
                />
                <Button className="bg-coffee hover:bg-coffee-dark whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;

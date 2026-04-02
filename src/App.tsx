import { motion } from "motion/react";
import { Search, MapPin, Home, Star, Users, TrendingUp, ChevronRight, Phone, Mail, Instagram, Facebook, Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 glass-nav" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold flex items-center justify-center">
            <Home className="text-white w-6 h-6" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tighter text-white">LUXE<span className="text-gold">ESTATE</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["Listings", "About", "Neighborhoods", "Insights", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-gold text-sm font-medium uppercase tracking-widest transition-colors">
              {item}
            </a>
          ))}
          <button className="btn-gold">Book Consultation</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-navy p-6 flex flex-col gap-4 md:hidden border-t border-white/10"
        >
          {["Listings", "About", "Neighborhoods", "Insights", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white text-lg font-serif" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button className="btn-gold w-full">Book Consultation</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Mansion" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy/80 via-navy/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6 block"
        >
          Exquisite Living Redefined
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
        >
          Discover Your <br /> <span className="italic">Dream Sanctuary</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-2 flex flex-col md:flex-row gap-2 border border-white/20"
        >
          <div className="flex-1 flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-white/20 py-3">
            <Search className="text-gold w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by neighborhood, city, or zip..." 
              className="bg-transparent border-none outline-none text-white placeholder:text-white/50 w-full text-sm"
            />
          </div>
          <button className="btn-gold whitespace-nowrap">Find Your Home</button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-px h-12 bg-linear-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Properties Sold", value: "850+", icon: Home },
    { label: "Happy Families", value: "1.2k", icon: Users },
    { label: "Years Experience", value: "25+", icon: Star },
    { label: "Market Growth", value: "18%", icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6 inline-block p-4 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.value}</div>
              <div className="text-white/50 uppercase tracking-widest text-xs font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedListings = () => {
  const listings = [
    {
      title: "The Azure Penthouse",
      location: "Malibu, CA",
      price: "$12,500,000",
      beds: 5,
      baths: 6,
      sqft: "6,200",
      image: "https://images.unsplash.com/photo-1600607687940-4e524cb35a36?auto=format&fit=crop&q=80&w=800",
      tag: "New Listing"
    },
    {
      title: "Emerald Valley Estate",
      location: "Aspen, CO",
      price: "$8,900,000",
      beds: 4,
      baths: 5,
      sqft: "5,400",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      tag: "Exclusive"
    },
    {
      title: "Modernist Glass House",
      location: "Austin, TX",
      price: "$4,250,000",
      beds: 3,
      baths: 3,
      sqft: "3,800",
      image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=800",
      tag: "Reduced"
    }
  ];

  return (
    <section id="listings" className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4 block">Curated Collection</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">Exceptional Residences <br /> <span className="italic">Awaiting Your Arrival</span></h2>
          </div>
          <button className="flex items-center gap-2 text-navy font-bold uppercase tracking-widest text-sm hover:text-gold transition-colors group">
            View All Listings <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {listings.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="luxury-card group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-navy text-white text-[10px] uppercase tracking-widest px-3 py-1">
                  {item.tag}
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <button className="btn-outline-white w-full py-2 text-xs">View Details</button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl text-navy mb-1">{item.title}</h3>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <MapPin className="w-3 h-3" /> {item.location}
                    </div>
                  </div>
                  <span className="text-gold font-bold text-lg">{item.price}</span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-6 text-sm text-gray-600">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-navy">{item.beds}</span>
                    <span className="text-[10px] uppercase tracking-tighter">Beds</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-navy">{item.baths}</span>
                    <span className="text-[10px] uppercase tracking-tighter">Baths</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-navy">{item.sqft}</span>
                    <span className="text-[10px] uppercase tracking-tighter">Sq Ft</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Neighborhoods = () => {
  const areas = [
    { name: "Coastal Serenity", desc: "Pristine beaches and oceanfront luxury.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
    { name: "Urban Sophistication", desc: "The pulse of the city at your doorstep.", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800" },
    { name: "Mountain Retreats", desc: "Alpine elegance and breathtaking views.", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="neighborhoods" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4 block">Lifestyle Guides</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy">Explore Premier <span className="italic">Neighborhoods</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="relative h-[500px] group overflow-hidden cursor-pointer"
            >
              <img 
                src={area.img} 
                alt={area.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <h3 className="font-serif text-2xl mb-2">{area.name}</h3>
                <p className="text-white/70 text-sm mb-6 max-w-xs">{area.desc}</p>
                <button className="text-gold text-xs uppercase tracking-widest font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore Area <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AgentBio = () => {
  return (
    <section className="py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/10 -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-navy/5 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Agent" 
              className="w-full aspect-3/4 object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 -right-10 bg-gold p-8 text-white hidden md:block">
              <div className="text-3xl font-serif mb-1">Alexander Vance</div>
              <div className="text-xs uppercase tracking-widest opacity-80">Principal Broker & Founder</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4 block">The Visionary</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-8 leading-tight">Elevating Real Estate <br /> <span className="italic">Into An Art Form</span></h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              With over two decades of experience in the global luxury market, Alexander Vance has built a reputation for discretion, integrity, and unparalleled market insight. He doesn't just sell properties; he curates lifestyles for the world's most discerning clientele.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-serif text-navy text-xl mb-2">Global Network</h4>
                <p className="text-sm text-gray-500">Access to exclusive off-market listings worldwide.</p>
              </div>
              <div>
                <h4 className="font-serif text-navy text-xl mb-2">Strategic Insight</h4>
                <p className="text-sm text-gray-500">Data-driven analysis for optimal investment returns.</p>
              </div>
            </div>
            <button className="btn-gold">Read Full Story</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Sarah & David Miller", role: "Homeowners", text: "Alexander's attention to detail and negotiation skills are unmatched. He found us our dream home before it even hit the market.", rating: 5 },
    { name: "Julian Thorne", role: "Real Estate Investor", text: "A true professional who understands the nuances of high-end investments. The market insights provided were instrumental in our portfolio growth.", rating: 5 },
    { name: "Elena Rodriguez", role: "International Buyer", text: "Seamless experience from start to finish. Alexander handled everything with grace and absolute discretion.", rating: 5 },
  ];

  return (
    <section className="py-32 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4 block">Client Voices</span>
          <h2 className="font-serif text-4xl md:text-5xl">Word of <span className="italic">Excellence</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 p-10 border border-white/10 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-lg italic text-white/80 mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <div className="font-serif text-xl text-gold">{review.name}</div>
                <div className="text-xs uppercase tracking-widest text-white/40">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MarketInsights = () => {
  const posts = [
    { title: "The Rise of Sustainable Luxury", date: "Oct 12, 2025", category: "Trends", img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800" },
    { title: "Investment Outlook: Coastal Markets", date: "Sep 28, 2025", category: "Market Report", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="insights" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4 block">Intelligence</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy">Market <span className="italic">Insights</span></h2>
          </div>
          <button className="text-navy font-bold uppercase tracking-widest text-sm hover:text-gold transition-colors">View All Articles</button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden mb-6">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-navy">
                  {post.category}
                </div>
              </div>
              <h3 className="font-serif text-2xl text-navy mb-2 group-hover:text-gold transition-colors">{post.title}</h3>
              <div className="text-gray-400 text-sm uppercase tracking-widest">{post.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValuationCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Home" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">What Is Your <span className="italic text-gold">Property Worth?</span></h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Receive a complimentary, data-driven valuation of your home from our expert analysts. No obligations, just clarity.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your property address..." 
              className="bg-white/10 border border-white/20 px-8 py-4 text-white outline-none focus:border-gold transition-colors md:w-96"
            />
            <button className="btn-gold">Get Valuation</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <Home className="text-white w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tighter">LUXE<span className="text-gold">ESTATE</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Redefining the standard of luxury real estate through unparalleled service, global reach, and a commitment to excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-gold transition-colors">Featured Listings</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Neighborhood Guides</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Market Reports</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold" /> concierge@luxeestate.com</li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-gold" /> 90210 Luxury Way, <br /> Beverly Hills, CA</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-8">Newsletter</h4>
            <p className="text-sm text-white/40 mb-6">Subscribe to receive exclusive off-market opportunities.</p>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-gold" />
              <button className="btn-gold py-3 text-xs">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] uppercase tracking-widest">
          <div>© 2026 LuxeEstate Properties. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <FeaturedListings />
        <Neighborhoods />
        <AgentBio />
        <Testimonials />
        <MarketInsights />
        <ValuationCTA />
      </main>
      <Footer />
    </div>
  );
}

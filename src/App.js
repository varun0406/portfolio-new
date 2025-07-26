import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  BarChart3, 
  Eye, 
  Zap, 
  Code, 
  Cloud, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  Github,
  Linkedin,
  Calendar,
  Award,
  Database,
  Shield,
  Smartphone,
  Home,
  Gamepad2,
  Bell
} from 'lucide-react';
import './App.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Animated Section Component
const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ delay }}
    className="service-card"
  >
    <div className="service-icon">
      <Icon size={32} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

// Value Proposition Card Component
const ValueCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ delay }}
    className="value-card"
  >
    <div className="value-icon">
      <Icon size={28} />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
  </motion.div>
);

// Project Card Component
const ProjectCard = ({ icon: Icon, title, description, outcome, skills, link, delay = 0 }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ delay }}
    className="project-card"
  >
    <div className="project-header">
      <div className="project-icon">
        <Icon size={24} />
      </div>
      <div className="project-info">
        <h4>{title}</h4>
        <div className="project-outcome">
          <CheckCircle size={16} />
          <span>{outcome}</span>
        </div>
      </div>
    </div>
    <p>{description}</p>
    <div className="project-skills">
      {skills.map((skill, index) => (
        <span key={index} className="skill-tag">{skill}</span>
      ))}
    </div>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        View Live Project
        <ArrowRight size={16} />
      </a>
    ) : (
      <button className="btn btn-secondary">
        See Full Case Study
        <ArrowRight size={16} />
      </button>
    )}
  </motion.div>
);

// Achievement Card Component
const AchievementCard = ({ icon: Icon, title, description, link, delay = 0 }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ delay }}
    className="achievement-card"
  >
    <div className="achievement-icon">
      <Icon size={28} />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="achievement-link">
        View Certificate
        <ArrowRight size={16} />
      </a>
    )}
  </motion.div>
);

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Transforming Business with
              <span className="gradient-text"> Data-Driven Intelligence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Constant Learner, Problem-Solver, and Developer who Ships the Work. We test hypotheses with data to build intelligent solutions and drive measurable outcomes.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-cta"
            >
              <a href="#contact" className="btn btn-primary btn-large">
                Let's Solve Your Data Challenge
              </a>
              <a href="#services" className="btn btn-secondary btn-large">
                Explore Our Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <AnimatedSection className="section-title">
            <motion.h2 variants={fadeInUp}>Our Core Intelligence Services</motion.h2>
            <motion.p variants={fadeInUp}>
              Powering businesses with cutting-edge data analytics, AI, and machine learning solutions
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-3">
            <ServiceCard
              icon={BarChart3}
              title="Data Analytics & BI"
              description="Uncovering actionable insights from complex datasets using BigQuery, Looker, and advanced analytics tools."
              delay={0.1}
            />
            <ServiceCard
              icon={Eye}
              title="Data Visualization"
              description="Transforming raw data into clear, compelling, and interactive stories using Looker and modern BI tools."
              delay={0.2}
            />
            <ServiceCard
              icon={Brain}
              title="AI & Machine Learning"
              description="Building intelligent models for automation, prediction, and optimization using Python and advanced ML frameworks."
              delay={0.3}
            />
            <ServiceCard
              icon={Database}
              title="Database & Backend Development"
              description="Designing robust database systems and Node.js backends with MySQL, MongoDB, and cloud-native architectures."
              delay={0.4}
            />
            <ServiceCard
              icon={Code}
              title="Custom Software Development"
              description="Crafting bespoke applications using Python, Node.js, Flutter, and modern development frameworks."
              delay={0.5}
            />
            <ServiceCard
              icon={Cloud}
              title="Cloud Integration & DevOps"
              description="Leveraging GCP, Oracle Cloud, and Kubernetes for scalable, robust data infrastructure and deployment."
              delay={0.6}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section value-section">
        <div className="container">
          <AnimatedSection className="section-title">
            <motion.h2 variants={fadeInUp}>Why Partner with Varun Deepak Kotwani?</motion.h2>
            <motion.p variants={fadeInUp}>
              The edge you get when working with a data-driven problem solver who ships the work
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-2">
            <ValueCard
              icon={CheckCircle}
              title="Ships the Work & Accountability"
              description="We're not just about ideas; we're about delivering tangible, working solutions that you can rely on. Every project is completed with full accountability."
              delay={0.1}
            />
            <ValueCard
              icon={Brain}
              title="Problem-Solver Mindset"
              description="Deep-diving into your challenges to engineer innovative, data-backed solutions. From crypto analysis to network security, we solve complex problems."
              delay={0.2}
            />
            <ValueCard
              icon={Zap}
              title="Constant Learner & Cutting-Edge"
              description="Staying ahead of the curve in AI, ML, and analytics. Certified in Oracle Cloud, Google Cloud, and continuously learning new technologies."
              delay={0.3}
            />
            <ValueCard
              icon={BarChart3}
              title="Data-Driven Hypothesis Testing"
              description="Every solution is validated by rigorous data analysis, not guesswork. From crypto behavior analysis to business intelligence, we prove our approach works."
              delay={0.4}
            />
            <ValueCard
              icon={Code}
              title="Full-Stack Development Expertise"
              description="From Python data pipelines to Node.js APIs, Flutter mobile apps to cloud deployment - we handle the complete development lifecycle."
              delay={0.5}
            />
            <ValueCard
              icon={Cloud}
              title="Cloud-Native & Scalable Solutions"
              description="Expertise in GCP, Oracle Cloud, Kubernetes, and microservices architecture for building scalable, robust applications."
              delay={0.6}
            />
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a href="#contact" className="btn btn-primary btn-large">
              Ready to see the difference data makes?
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <AnimatedSection className="section-title">
            <motion.h2 variants={fadeInUp}>Projects That Speak Volumes</motion.h2>
            <motion.p variants={fadeInUp}>
              Our impact in action - real solutions delivering real results
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-2">
            <ProjectCard
              icon={Database}
              title="Automated Data Harvester"
              description="Developed an automated harvester for fetching monthly usage reports from over 40 online databases, streamlining data collection and reducing manual effort significantly."
              outcome="Saved 200+ hours/month for 40+ databases"
              skills={["Python", "Automation", "Data Collection", "GLPI"]}
              delay={0.1}
            />
            <ProjectCard
              icon={BarChart3}
              title="Executive Insights Dashboard"
              description="Delivered user activity insights from Solr log data and integrated Koha & DSpace into Metabase dashboards for centralized analytics and executive decision-making."
              outcome="Empowered data-driven decision making"
              skills={["Solr", "Metabase", "Data Analytics", "Perl"]}
              delay={0.2}
            />
            <ProjectCard
              icon={Shield}
              title="Network Security Scanner"
              description="Developed a comprehensive tool to scan local networks, detect connected hosts, check open ports, and enforce authentication using X.800 compliance standards."
              outcome="Real-time threat detection and monitoring"
              skills={["Python", "Flask", "Nmap", "Network Security"]}
              delay={0.3}
            />
            <ProjectCard
              icon={Smartphone}
              title="Agency Accounting Mobile App"
              description="Built a lightweight Flutter mobile app to digitize transactions for a family-run agency, improving speed and ease of access to financial data."
              outcome="Streamlined manual accounting processes"
              skills={["Flutter", "Firebase", "Mobile Development"]}
              delay={0.4}
            />
            <ProjectCard
              icon={Home}
              title="Property Rental Management System"
              description="Built a fully normalized database and Node.js backend for managing rental properties, with complete testing and deployment on Aiven Cloud."
              outcome="Streamlined property data handling"
              skills={["Node.js", "MySQL", "Express.js", "Aiven Cloud"]}
              delay={0.5}
            />
            <ProjectCard
              icon={Bell}
              title="AI-Integrated Event Platform"
              description="Automated the process of extracting and publishing event details using AI, increasing event participation and enhancing community engagement."
              outcome="Increased event participation significantly"
              skills={["Python", "OpenAI API", "Gmail API", "MySQL"]}
              delay={0.6}
            />
            <ProjectCard
              icon={Award}
              title="Website Making Challenge 2024 Winner"
              description="Built Django-based system with authentication, event-listing, user leaderboard, and admin portal deployed on Google App Engine."
              outcome="Won the competition with innovative solution"
              skills={["Django", "Google App Engine", "Authentication", "OAuth"]}
              link="https://wmc-430316.as.r.appspot.com/"
              delay={0.7}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section achievements-section">
        <div className="container">
          <AnimatedSection className="section-title">
            <motion.h2 variants={fadeInUp}>Achievements & Certifications</motion.h2>
            <motion.p variants={fadeInUp}>
              Recognized expertise and continuous learning in cutting-edge technologies
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-3">
            <AchievementCard
              icon={Award}
              title="Website Making Challenge 2024 Winner"
              description="Built Django-based system with authentication, event-listing, user leaderboard, and admin portal deployed on Google App Engine."
              link="https://wmc-430316.as.r.appspot.com/"
              delay={0.1}
            />
            <AchievementCard
              icon={Award}
              title="2nd Rank - IT Extempore at GLS University"
              description="Secured second position in technical extempore competition showcasing communication and technical knowledge."
              delay={0.2}
            />
            <AchievementCard
              icon={Cloud}
              title="Oracle Cloud Infrastructure 2025 Certified"
              description="Certified Data Science Professional and AI Foundations Associate with Oracle Cloud Infrastructure."
              link="https://catalog-education.oracle.com/ords/certview/sharebadge?id=9A53A12D98643C815DEC4F032128C11B4F7F3F09B495E0906AD597984A46C666"
              delay={0.3}
            />
            <AchievementCard
              icon={Cloud}
              title="Oracle Data Platform 2025 Certified"
              description="Oracle Data Platform 2025 Certified Foundations Associate demonstrating expertise in data management."
              link="https://catalog-education.oracle.com/ords/certview/sharebadge?id=9A53A12D98643C815DEC4F032128C11B4455092323151D60358EEB90AD943501"
              delay={0.4}
            />
            <AchievementCard
              icon={Cloud}
              title="Oracle AI Foundations Associate"
              description="Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate with advanced AI expertise."
              link="https://catalog-education.oracle.com/ords/certview/sharebadge?id=9002D0DD2B92923B3878A438A6EB46BA90574C5B73122CB72A0108B76B187637"
              delay={0.5}
            />
            <AchievementCard
              icon={Cloud}
              title="Google Cloud Data Analytics Certificate"
              description="Certified in Google Cloud Data Analytics with expertise in BigQuery, Looker, and cloud-native analytics."
              link="https://www.credly.com/badges/60e41172-8f27-473a-a7af-534a7f651fdb"
              delay={0.6}
            />
            <AchievementCard
              icon={BarChart3}
              title="Looker Data Visualization Badge"
              description="Analyze and Visualize Looker Data Skill Badge demonstrating advanced BI and data visualization expertise."
              link="https://www.credly.com/badges/6ce908d2-a2dc-4229-8b58-c232b2f4bed2"
              delay={0.7}
            />
            <AchievementCard
              icon={Code}
              title="Build Website on Google Cloud Badge"
              description="Skill badge for building and deploying websites on Google Cloud Platform with best practices."
              link="https://www.credly.com/badges/98c5e783-454a-49a8-a940-476f3e41e94f"
              delay={0.8}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <AnimatedSection className="section-title">
            <motion.h2 variants={fadeInUp}>Let's Build Your Data-Powered Future</motion.h2>
            <motion.p variants={fadeInUp}>
              Not sure where to start? Let's chat – it's free!
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="contact-content">
            <motion.div variants={fadeInUp} className="contact-info">
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:varun.k@ahduni.edu.in" className="contact-link">
                    varun.k@ahduni.edu.in
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919913617254" className="contact-link">
                    +91 9913617254
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <Github size={20} />
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/varun0406" target="_blank" rel="noopener noreferrer" className="contact-link">
                    github.com/varun0406
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <Cloud size={20} />
                <div>
                  <h4>Google Cloud</h4>
                  <a href="https://www.cloudskillsboost.google/public_profiles/ea1..." target="_blank" rel="noopener noreferrer" className="contact-link">
                    cloudskillsboost.google/public_profiles/ea1...
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <Award size={20} />
                <div>
                  <h4>Credly</h4>
                  <a href="https://www.credly.com/users/varun-kotwani" target="_blank" rel="noopener noreferrer" className="contact-link">
                    credly.com/users/varun-kotwani
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <Home size={20} />
                <div>
                  <h4>Location</h4>
                  <p>Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="contact-form">
              <h3>Get in Touch</h3>
              <p>Ready to transform your business with data-driven intelligence?</p>
              
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <textarea placeholder="Tell me about your data challenge..." rows="4"></textarea>
              </div>
              
              <button className="btn btn-primary btn-large">
                Send Message
              </button>
              
              <div className="calendar-cta">
                <Calendar size={16} />
                <span>Or book a free AI strategy session</span>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Varun Deepak Kotwani</h3>
              <p>Data Analytics • AI • Machine Learning • Full-Stack Development</p>
            </div>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Varun Deepak Kotwani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 
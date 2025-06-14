import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './Info.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaHandsWash, 
  // FaCertificate, 
  FaLeaf, 
  FaSearch,
  FaArrowRight
} from 'react-icons/fa';

import img1 from '../images/cafe-img/1.PNG';
import img2 from '../images/cafe-img/2.PNG';
import img3 from '../images/cafe-img/3.PNG';
import img4 from '../images/cafe-img/4.PNG';
import img5 from '../images/cafe-img/5.PNG';
import img7 from '../images/cafe-img/7.PNG';
import img8 from '../images/cafe-img/8.PNG';


// Sample images for the gallery
const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img7,
  img8
];

const InfoStandards = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.03]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  const sections = [
    {
      title: "Food Safety",
      icon: <FaHandsWash />,
      content: `## Hygiene Standards\n\n- Punjab Food Authority certified\n- Halal certified ingredients only\n- Staff trained in HACCP principles\n- Daily kitchen deep cleaning\n- Proper food storage at all times`,
      color: "#d97706"
    },
    // {
    //   title: "Certifications",
    //   icon: <FaCertificate />,
    //   content: `## Compliance\n\n- PFA License: LHR-12345\n- Regular health inspections\n- Ingredients traceable to source\n- Fire safety certified\n- EPA waste disposal compliant`,
    //   color: "#92400e"
    // },
    {
      title: "Our Values",
      icon: <FaLeaf />,
      content: `## Pakistani Roots\n\n- Locally sourced tea leaves\n- Support local dairy farmers\n- Traditional recipes\n- Cultural authenticity\n- Community employment`,
      color: "#065f46"
    },
    {
      title: "Transparency",
      icon: <FaSearch />,
      content: `## Open Policies\n\n- Clear ingredient labeling\n- Allergen information available\n- Customer feedback welcomed\n- No hidden charges\n- Fair pricing`,
      color: "#3730a3"
    }
  ];

  return (
    <div className="chai-premium-theme">
      {/* Hero Section */}
      <motion.div 
        className="standards-hero"
        style={{ scale, opacity }}
      >
        <div className="standards-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Chai Mahfil <span>Standards</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where Tradition Meets Excellence
          </motion.p>
        </div>
        <div className="standards-hero-overlay"></div>
      </motion.div>
      
      {/* Main Content */}
      <div className="standards-premium-content">
        <div className="standards-intro">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Promise to You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            "Serving AhmedPur East's finest chai with traditional values and uncompromising modern standards."
          </motion.p>
        </div>
        
        <div className="standards-premium-grid">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              className="standards-premium-card"
              style={{ borderTop: `4px solid ${section.color}` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="standards-card-header">
                <motion.span 
                  className="standards-card-icon" 
                  style={{ color: section.color }}
                  whileHover={{ scale: 1.1 }}
                >
                  {section.icon}
                </motion.span>
                <h3>{section.title}</h3>
              </div>
              <div className="standards-card-content">
                <ReactMarkdown>{section.content}</ReactMarkdown>
              </div>
            </motion.section>
          ))}
        </div>
        
        {/* Gallery Section */}
        <div className="standards-gallery">
          <h3>Behind the Scenes</h3>
          <motion.div 
            className="gallery-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="gallery-track"
              drag="x"
              dragConstraints={{ right: 0, left: -1200 }}
            >
              {galleryImages.map((img, index) => (
                <motion.div 
                  key={index}
                  className="gallery-image"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={img} alt={`Gallery ${index + 1}`} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <div className="standards-premium-cta">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience the Chai Mahfil Difference
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="standards-cta-button">
              Visit Us Today
              <FaArrowRight className="standards-cta-icon" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfoStandards;
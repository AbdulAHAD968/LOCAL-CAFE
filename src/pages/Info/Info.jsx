import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Info.css';

const Info = () => {
  const hygieneContent = `
## Hygiene Standards

At Chai Mahfil, we maintain the highest standards of cleanliness and food safety:

- All staff undergo regular hygiene training
- Food preparation areas are sanitized daily
- Ingredients are stored at proper temperatures
- Regular pest control measures are implemented
- Staff wear gloves and hairnets when handling food
  `;

  const complianceContent = `
## Regulatory Compliance

We comply with all food safety regulations:

- **FSSAI License Number**: 12345678901234
- Regular health inspections
- All ingredients sourced from licensed suppliers
- Proper waste disposal procedures followed
  `;

  const visionContent = `
## Our Vision

Chai Mahfil was founded with a simple goal: to create a welcoming space where people can enjoy authentic chai and snacks in a comfortable environment.

### Sourcing Practices

- Locally sourced tea leaves from Assam
- Fresh milk from trusted local dairy farms
- Seasonal ingredients for our snacks
- Supporting small local suppliers

### Eco Policies

- Biodegradable packaging for takeaway
- Recycling program for all waste
- Energy-efficient equipment
- Water conservation measures
  `;

  const termsContent = `
## Terms & Conditions

### Disclaimer

While we take every precaution with food preparation, we cannot guarantee allergen-free environments due to shared equipment.

### Data Handling

- We only store your cart items temporarily in your browser
- No personal data is collected without your consent
- Payment processing is handled by secure third-party providers
  `;

  return (
    <div className="info-page">
      <div className="info-header">
        <h1>About Chai Mahfil</h1>
        <p>Our standards, vision, and policies</p>
      </div>
      
      <div className="info-container">
        <section className="info-section">
          <h2>Food Safety & Hygiene</h2>
          <ReactMarkdown>{hygieneContent}</ReactMarkdown>
        </section>
        
        <section className="info-section">
          <h2>Compliance</h2>
          <ReactMarkdown>{complianceContent}</ReactMarkdown>
        </section>
        
        <section className="info-section">
          <h2>Our Vision & Practices</h2>
          <ReactMarkdown>{visionContent}</ReactMarkdown>
        </section>
        
        <section className="info-section">
          <h2>Terms & Conditions</h2>
          <ReactMarkdown>{termsContent}</ReactMarkdown>
        </section>
      </div>
    </div>
  );
};

export default Info;
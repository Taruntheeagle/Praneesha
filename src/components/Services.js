import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Services.css';
import Navbar from './Navbar';
export default function Services() {
  const location = useLocation();
  const [visibleService, setVisibleService] = useState(null);
  const resetVisibleService = () => {
    setVisibleService(null); 
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash && hash !== '#footer-section') { 
      setVisibleService(hash); 
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
    }
  }, [location]);

  const isVisible = (id) => {
    return visibleService === `#${id}` || visibleService === null; 
  };

  return (
    <>
      <div className="whole_services">
        {isVisible('app-development') && (
          <div id="app-development" className="container_services">
            <h1>App Development</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/app_dev.jpg`} alt="none" style={{ width: '30rem', marginLeft: '10vw', marginBottom: '2vh', marginTop: '2vh', height: '300px' }} />
            <p>We help businesses to create value by helping build systems that will enhance their productivity. We help to build both web applications and mobile applications to meet business needs as per client needs. We support all types of programming languages to produce applications.</p>
          </div>
        )}

        {isVisible('cloud-services') && (
          <div id="cloud-services" className="container_services">
            <h1>Cloud Services</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/cloud.jpg`} alt="none" style={{ width: '35rem', marginLeft: '6vw', marginBottom: '2vh', marginTop: '2vh', height: '220px' }} />
            <p>In the era of movement towards cloud, businesses need to leverage benefits of cloud for their application deployment. We at Praneesha help companies to deploy solutions cost-effectively along with a focus on scalability, reliability, and high availability. We deal with all major cloud providers AWS, GCP, Azure.</p>
          </div>
        )}

        {isVisible('consulting-services') && (
          <div id="consulting-services" className="container_services">
            <h1>Consulting Services</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/consulting.jpg`} alt="none" style={{ width: '30rem', marginLeft: '10vw', marginBottom: '2vh', marginTop: '2vh', height: '350px' }} />
            <p>We offer engineering consulting services to businesses in guiding their IT needs and business models.</p>
          </div>
        )}

        {isVisible('devops-sre') && (
          <div id="devops-sre" className="container_services">
            <h1>DevOps and SRE Services</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/Devops.jpg`} alt="none" style={{ width: '30rem', marginLeft: '9vw', marginBottom: '2vh', marginTop: '2vh' }} />
            <p>Application deployment and development is a continuous process that requires many iterations to handle. DevOps CI/CD pipelines will help achieve this fault-free. Our expertise will further make this process efficient to meet businesses' application development needs for quick delivery of the application to the end user. On the other hand, deployed applications need to meet SLA (service level objectives) in short to give great user experience.</p>
          </div>
        )}

        {isVisible('startup-services') && (
          <div id="startup-services" className="container_services">
            <h1>Startup Services</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/StartUp.jpg`} alt="none" style={{ width: '30rem', marginLeft: '9vw', marginBottom: '2vh', marginTop: '2vh' }} />
            <p>Most of the Startups need IT systems to manage their initial business too. We offer cost-effective services to those companies to help in their development. Services offered:
              <ul>
                <li>Web site designing</li>
                <li>Web and mobile application development</li>
                <li>Cloud and Domain hosting services</li>
                <li>Email and share drive access services</li>
                <li>Startup registration services</li>
              </ul>
            </p>
          </div>
        )}

        {isVisible('web-development') && (
          <div id="web-development" className="container_services">
            <h1>Web Development</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/Web_dev.jpg`} alt="none" style={{ width: '30rem', marginLeft: '9vw', marginBottom: '2vh', marginTop: '2vh' }} />
            <p>A website is a need of the hour for almost all businesses irrespective of size and servicing area. We are expert website builders that can add aesthetic elements to your design with responsiveness in mind. Our customer satisfaction is our strength in this area.</p>
          </div>
        )}

        {isVisible('internships') && (
          <div id="internships" className="container_services">
            <h1>Internships</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/Internships.jpg`} alt="none" style={{ width: '30rem', marginLeft: '9vw', marginBottom: '2vh', marginTop: '2vh' }} />
            <p>Nurturing talent is essential to grow them as experts later. We have project offerings on a wide variety of use cases that will hone the skills of the young minds, allowing them to consolidate their learning through practice.</p>
          </div>
        )}

        {isVisible('gen-ai') && (
          <div id="gen-ai" className="container_services">
            <h1>Gen AI</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/Gen_Ai.jpg`} alt="none" style={{ width: '40rem', marginLeft: '4vw', marginBottom: '2vh', marginTop: '2vh' }} />
            <p>Fostering creativity is key to shaping future innovators. We offer projects on diverse AI applications that sharpen skills and enable learners to apply knowledge in real-world scenarios, helping them solidify their understanding through hands-on experience.</p>
          </div>
        )}

        {isVisible('aiml') && (
          <div id="aiml" className="container_services">
            <h1>AI/ML Services</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/AIML.png`} alt="none" style={{ width: '40rem', marginLeft: '4vw', marginBottom: '2vh', marginTop: '2vh' }} />
            <p>Cultivating expertise in AI and ML is vital for future growth. Our services cover a broad range of AI/ML solutions, providing opportunities to develop key skills, gain practical knowledge, and apply learning to complex, real-world challenges, ensuring mastery through continuous experimentation.</p>
          </div>
        )}

        {isVisible('maintain') && (
          <div id="maintain" className="container_services">
            <h1>Application Maintenance</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/App_maintain.jpg`} alt="none" style={{ width: '30rem', marginLeft: '9vw', marginBottom: '2vh', marginTop: '2vh' }} />
            <p>Our App Maintenance Services ensure that your applications remain efficient, secure, and up-to-date. We provide regular updates, performance monitoring, and prompt bug fixes to deliver a seamless user experience. Additionally, our team implements security enhancements and offers user support to address any inquiries.</p>
          </div>
        )}

        {isVisible('issue-res') && (
          <div id="issue-res" className="container_services">
            <h1>Issue Resolution Services</h1>
            <img src={`${process.env.PUBLIC_URL}/About_Us/Issue_res.jpg`} alt="none" style={{ width: '30rem', marginLeft: '9vw', marginBottom: '2vh', marginTop: '2vh' }} />
            <p>Our Issue Resolution Services are designed to quickly identify and address any challenges your business may face. Our dedicated team of experts employs a systematic approach to troubleshoot problems, ensuring minimal disruption to your operations.</p>
          </div>
        )}
      </div>
    </>
  );
}

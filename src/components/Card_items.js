import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card_items.css";

export default function CardItems() {
  const navigate = useNavigate();

  const handleNavigate = (service) => {
    navigate(`/services#${service}`);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCardClick = (service) => {
    setTimeout(() => {
      scrollToTop(); // Scroll to top first
    }, 200); // Delay to allow scrolling to complete
    handleNavigate(service); // Then navigate
  };

  return (
    <>
      <div className="heading" style={{marginTop:'20vh'}} >
        <h1><u>Services</u></h1>
      </div>
      <div className="container_card_item" >
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("app-development")}>
          <img src={`${process.env.PUBLIC_URL}/Services/app_dev.png`} alt="App Development"  className="card-img-top"  style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>App Development</b></h5>
            <p className="card-text">
              Transform your ideas into dynamic mobile experiences. Our expert app development services craft intuitive, scalable, and secure solutions for iOS and Android. Bring your vision to life!
            </p>
          </div>
        </div>
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("cloud-services")}>
          <img src={`${process.env.PUBLIC_URL}/Services/cloud.jpg`} className="card-img-top" alt="None" style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>Cloud</b></h5>
            <p className="card-text">
              Unlock scalable, on-demand infrastructure with our cloud services. Leveraging AWS, Azure, and Google Cloud, we help businesses migrate, manage, and optimize their cloud environments for maximum efficiency and agility.
            </p>
          </div>
        </div>
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("consulting-services")}>
          <img src={`${process.env.PUBLIC_URL}/Services/consulting.jpeg`} className="card-img-top" alt="None" style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>Consulting Services</b></h5>
            <p className="card-text">
              Expert guidance for informed decisions. Our consulting services help organizations streamline operations, enhance strategy, and drive innovation. From assessment to implementation, our seasoned consultants deliver actionable insights and tangible results.
            </p>
          </div>
        </div>
      </div>
      <div className="container_card_item">
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("devops-sre")}>
          <img src={`${process.env.PUBLIC_URL}/Services/devops1.png`} className="card-img-top" alt="None" style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>DevOps</b></h5>
            <p className="card-text">
              Bridge the gap between development and operations. Our DevOps services foster collaboration, automation, and continuous delivery, ensuring faster time-to-market, reduced downtime, and improved software quality.
            </p>
          </div>
        </div>
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("startup-services")}>
          <img src={`${process.env.PUBLIC_URL}/Services/startup_services.jpeg`} className="card-img-top" alt="None" style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>Start Up Services</b></h5>
            <p className="card-text">
              Turn vision into viable business. Our startup services provide expert guidance, scalable solutions, and hands-on support to propel your venture from idea to launch and beyond.
            </p>
          </div>
        </div>
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("web-development")}>
          <img src={`${process.env.PUBLIC_URL}/Services/web_dev.jpg`} className="card-img-top" alt="None" style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>Web Development</b></h5>
            <p className="card-text">
              Build captivating online experiences. Our web development services blend creativity, technology, and expertise to deliver responsive, scalable, and secure websites that drive engagement and conversions.
            </p>
          </div>
        </div>
      </div>
      <div className="container_card_item">
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("internships")}>
          <img src={`${process.env.PUBLIC_URL}/Services/intern.jpeg`} className="card-img-top" alt="None" style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>Internship</b></h5>
            <p className="card-text">
              Our company offers valuable internship services, connecting talented individuals with hands-on industry experience. Enhance your skills, grow professionally, and prepare for future career success with our tailored internship opportunities.
            </p>
          </div>
        </div>
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("gen-ai")}>
          <img src={`${process.env.PUBLIC_URL}/Services/genAI.jpg`} className="card-img-top" alt="None" style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>Gen AI</b></h5>
            <p className="card-text">
              Our company specializes in Generative AI, delivering innovative solutions that enhance creativity and efficiency. We leverage advanced algorithms to generate content and optimize processes, empowering businesses to unlock new possibilities and improve productivity.
            </p>
          </div>
        </div>
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("aiml")}>
          <img src={`${process.env.PUBLIC_URL}/Services/AIML.jpeg`} className="card-img-top" alt="None" style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>AIML Services</b></h5>
            <p className="card-text">
              Our company provides tailored AIML services that empower businesses with advanced analytics and automation. We create custom solutions in predictive analytics and natural language processing to enhance decision-making and drive innovation. Partner with us to unlock the power of AIML for your organization.
            </p>
          </div>
        </div>
      </div>
      <div className="container_card_item">
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("maintain")}>
          <img src={`${process.env.PUBLIC_URL}/Services/application_maintanence.jpeg`} className="card-img-top" alt="None" style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>Application Maintenance</b></h5>
            <p className="card-text">             
              Our application maintenance services keep your software running smoothly with regular updates, performance optimization, and issue resolution. Ensure reliability, enhance security, and extend the lifespan of your applications with our proactive support and expert care.
            </p>
          </div>
        </div>
        <div className="card_item" style={{ width: "18rem" }} onClick={() => handleCardClick("issue-res")}>
          <img src={`${process.env.PUBLIC_URL}/Services/Issue_Resolution_Services.jpeg`} className="card-img-top" alt="None" style={{ width: '285px', height: '200px' }} />
          <div className="card-body">
            <h5 className="card-title" ><b>Issue Resolution Services</b></h5>
            <p className="card-text">             
              Our Issue Resolution Services provide fast, effective solutions to resolve technical problems and minimize downtime. With expert troubleshooting and dedicated support, we ensure your systems run smoothly, helping you maintain business continuity and efficiency.
            </p>
          </div>
        </div>
        <div className="card_item_theme">
          <img src={`${process.env.PUBLIC_URL}/Services/theme.jpg`} className="card-img-top" alt="None" style={{height: '400px' }} />
        </div>
      </div>
    </>
  );
}

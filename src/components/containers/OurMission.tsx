import React from "react";
import Image from "next/image";
import one from "public/images/mission/one.png";
import two from "public/images/mission/two.png";
import three from "public/images/mission/three.png";
import four from "public/images/mission/four.png";

const OurMission = () => {
  return (
    <section className="section mission-s fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-5 col-xxl-5">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      Services
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">Attract. Engage. Convert. Retain
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                  <div className="text-center text-lg-start">
                    <p>
                    These four pillars define our digital branding strategy: Attract, Engage, Convert, Retain. We craft campaigns to maximize your ROI, mastering the art of digital optimization and seamless conversions.


                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Logo Design And Branding</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                In digital branding, your logo is the face of your brand—and first impressions matter. At Softway Designs, our expert logo designers delve into your business’s vision and industry standards to craft innovative logos that stand out in a competitive landscape. We push creative boundaries to establish a unique visual identity that draws potential customers from afar. Let’s collaborate to design a logo that sets you apart and gives your brand the distinct identity it deserves.

                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={one} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={two} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Exceptional Web Development</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                At Softway Designs, we create dynamic, user-friendly websites that showcase your brand’s services/products. Our expert web development team combines custom designs, strong coding, and accessibility-friendly layouts to boost conversions and reduce bounce rates. We ensure your website delivers exceptional results, representing your brand seamlessly.
                    
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Engaging Video Animation</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                At Softway Designs, creativity is at the heart of our work. Our expert video animators and designers craft engaging videos that communicate your brand’s essence with a perfect balance of creativity and messaging. We combine interactive storytelling with high-quality animations to capture your audience’s attention and make your brand stand out. Let’s work together to create a captivating video that engages and attracts your audience.
                     
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={three} alt="Image" />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={four} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Targeted Digital Marketing</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                At Softway Designs, we help your brand rise above the competition with expertly crafted digital marketing strategies. Our team has a proven track record in PPC, SEO, SMM, content marketing, and more, delivering results that align with your growth goals. Whether optimizing search algorithms or building a strong social media presence, we create data-driven campaigns to drive your business toward success. Let’s partner to achieve online growth with strategies powered by industry experts.
                         
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

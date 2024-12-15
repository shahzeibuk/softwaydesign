import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

import OurMission from "@/components/containers/OurMission";
import ServiceMain from "@/components/containers/ServiceMain";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurServices = () => {
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Our Services" navigation="Our Services" />
      
      <OurMission />
      <HomeTestimonialThree />
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;

import Head from "next/head";
import Image from "next/image";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "../styles/Home.module.css";
import React, { useRef } from "react";

// Images
import logo from "../public/logo.png";
import satellite from "../public/satellite.svg";
import rocket from "../public/rocket.png";
import cloud from "../public/cloud.png";
import mountain from "../public/mountain.png";
import helicopter from "../public/helicopter.png";
import planet from "../public/planet.png";
import stars from "../public/stars.svg";

export default function Home() {
  // const parallax = useRef< IParallax >(!null);
  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              color: "white",
            }}
          >
            <p
              style={{
                width: "50%",
                fontSize: 20,
                backgroundColor: "#253237",
                padding: 20,
                borderRadius: 10,
                zIndex: 1000,
              }}
            >
              At Rhys we specialise in web design, but we also offer services in
              graphic design and photography. We use modern technology to build
              our sites to ensure that they run incredibly smoothly and
              ridiculously quickly. We make our sites from scratch, so the
              possibilities are endless. We can make professional sites,
              minimalist sites or anything that your heart desires. <br />
              <br /> We can also update your site in the future for a low fee,
              whether it be changes to follow modern trends or adding more
              photos, testimonials, etc. to your site. <br />
              <br /> We also offer competitive prices and much faster turnaround
              times than average. Contact us today to get more information.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage:
              "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        {/* Planet */}
        <ParallaxLayer
          offset={2.1}
          speed={1.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div style={{ width: "80%" }}>
            <Image src={planet} alt="planet" />
          </div>
        </ParallaxLayer>
        {/* Bottom of page */}
        <ParallaxLayer offset={2} speed={1}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              color: "white",
            }}
          >
            <p
              style={{
                width: "50%",
                fontSize: 20,
                backgroundColor: "#253237",
                padding: 20,
                borderRadius: 10,
                zIndex: 1000,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lobortis vestibulum erat, eget iaculis odio pulvinar non. Integer
              non tempus risus. Ut nulla nulla, laoreet at sollicitudin eu,
              vestibulum vitae ipsum. Duis elementum, magna at placerat
              tincidunt, magna ante blandit turpis, sit amet ullamcorper nisl
              magna et dui. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Sed in ultrices elit. Nam
              iaculis quam non odio faucibus scelerisque. Praesent euismod erat
              lobortis, auctor nibh ac, hendrerit massa. Sed rutrum luctus nunc,
              id vehicula nibh. Quisque augue libero, tempor eu accumsan et,
              tristique ac mauris. Ut tincidunt nunc turpis, ac pulvinar leo
              blandit eu. Aliquam ac euismod est. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. <br />
              <br /> Nunc congue fringilla nisi, eu tempus lacus lobortis sit
              amet. Cras turpis tortor, efficitur sed mi at, iaculis suscipit
              massa. Duis semper sagittis tortor sed dignissim. Suspendisse
              vestibulum lacus lorem, id sagittis augue tempus nec. Phasellus
              quis felis massa. Vivamus arcu tellus, dignissim et felis in,
              ornare elementum elit. Pellentesque sed arcu consectetur, laoreet
              eros at, iaculis odio. Suspendisse euismod consequat diam, laoreet
              lacinia orci eleifend ut. Quisque a lorem purus. Fusce a mollis
              ex, ut egestas metus. Pellentesque ante purus, luctus non lacinia
              vitae, tempor eget nulla.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <Image src={logo} alt="logo" />
            <br />
            <h2 style={{ color: "white" }}>
              Web design that is out of this world...
            </h2>
          </div>
        </ParallaxLayer>

        {/* Rocket/satellite */}
        <ParallaxLayer offset={1} speed={0.3} style={{ pointerEvents: "none" }}>
          <div style={{ width: "20%", marginLeft: "70%", zIndex: 0 }}>
            <Image src={rocket} alt="rocket" backgroundColor="none" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          speed={-0.2}
          style={{ pointerEvents: "none" }}
        >
          <div style={{ width: "15%", marginLeft: "10%", zIndex: 0 }}>
            <Image src={satellite} alt="satellite" />
          </div>
        </ParallaxLayer>

        {/* Clouds */}
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <div style={{ display: "block", width: "20%", marginLeft: "55%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
          <div style={{ display: "block", width: "10%", marginLeft: "15%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <div style={{ display: "block", width: "20%", marginLeft: "70%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
          <div style={{ display: "block", width: "20%", marginLeft: "40%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <div style={{ display: "block", width: "10%", marginLeft: "10%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
          <div style={{ display: "block", width: "20%", marginLeft: "75%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <div style={{ display: "block", width: "20%", marginLeft: "60%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
          <div style={{ display: "block", width: "25%", marginLeft: "30%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
          <div style={{ display: "block", width: "10%", marginLeft: "80%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <div style={{ display: "block", width: "20%", marginLeft: "5%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
          <div style={{ display: "block", width: "15%", marginLeft: "75%" }}>
            <Image src={cloud} alt="cloud" />
          </div>
        </ParallaxLayer>

        {/* Helicopter */}
        {/* <ParallaxLayer offset={2.4} speed={0.4} style={{ rotate: -18 }}>
          <div style={{ display: "block", width: "20%", marginLeft: "80%" }}>
            <Image src={helicopter} alt="helicopter" />
          </div>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

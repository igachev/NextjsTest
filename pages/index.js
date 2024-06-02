import { Hero } from "../sections";
import Head from 'next/head';
import { Agency } from "../sections/Agency/Agency";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Hero {...heroProps} />
        {/** Other sections */}
        <Agency 
        title={'Managed agency selection'}
        subtitle={'strengthen your onboarding process'} 
        backgroundImage={'/img/background.png'} 
        image={"/img/video.png"}
        cardHeading1={'Brief'}
        cardParagraph1={"Complete <strong>brief writing or simple guidance</strong> on what to include,we've got you covered."}
        cardHeading2={"Search"}
        cardParagraph2={"In-depth agency search covering;<strong>criteria-matching</strong>,door knocking and due-dilligence vetting."}
        cardHeading3={"Pitch"}
        cardParagraph3={"Comprehensive <strong>pitch management</strong>,including comms,diary management and pitch hosting."}
        />
      </div>
    </>
  );
}

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "./SocialMedia";
import {faInstagram, faXTwitter, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

function Landing() {
  return (
    <div className="sticky top-0 z-0">
      <div className="absolute flex flex-col mt-[45vh]">
        <SocialMedia icon={faLinkedinIn} userName="sebasarriaza" />
        <SocialMedia icon={faGithub} userName="sebasarriaza" />
        <SocialMedia icon={faXTwitter} userName="sebasarriaza" />
        <SocialMedia icon={faInstagram} userName="sebasarriaza" />
        <SocialMedia
          icon={faEnvelope}
          userName="contact@sebasarriaza.com"
          link="mailto:contact@sebasarriaza.com"
        />
      </div>
      <div className="flex flex-col items-center justify-center pt-[30vh] pb-[60vh]">
        <h1 className="text-4xl font-bold sm:text-6xl lg:text-[4rem] xl:text-[6rem] 2xl:text-[6.5rem]">
          <span>Sebas </span><span>Arriaza</span>
        </h1>
        <h2 className="text-xl m-4">web3 developer</h2>
      </div>
    </div>
  );
}

export default Landing;

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const Logo = () => {
  return (
    <Link href={"/"}>
      <a>
        <Image
          src={logo}
          layout="responsive"
          width={170}
          height={65}
          priority
          placeholder="blur"
          className="HeaderLogo"
          alt="AutoNewArt автомобильные выхлопные системы"
          title="AutoNewArt"
        />
      </a>
    </Link>
  );
};

export default Logo;

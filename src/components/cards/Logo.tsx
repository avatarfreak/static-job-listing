import React from "react";

interface Props {
  logo: string;
  alt: string;
}

const Logo: React.FC<Props> = ({ logo, alt }) => {
  return (
    <div className="absolute top-0 left-0 -mt-6 ml-5 md:relative md:mt-0 md:min-w-max">
      <img
        src={logo}
        width="88"
        height="88"
        alt={alt}
        className="h-12 w-12 md:h-full md:w-full"
      />
    </div>
  );
};

export { Logo };

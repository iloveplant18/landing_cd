import { FC, MouseEventHandler, ReactNode } from "react";

type PrimaryButtonProps = {
  className: string;
  isLink?: boolean;
  href?: string;
  onClick?: MouseEventHandler;
  children: ReactNode;
  hasIcon?: boolean;
};

const defaultClasses =
  "relative bg-accent inline-flex items-center text-light subtitle-small min-h-10 sm:min-h-12 sm:px-6 sm:gap-x-3 px-3 rounded-full gap-x-2 justify-center hover:bg-accent-dark before:absolute before:block before:w-[calc(100%+6px)] before:h-[calc(100%+6px)] before:rounded-full before:top-[-3px] before:bg-accent-light before:-z-10 before:invisible active:before:visible focus:border-accent-light focus:outline-none transition-[background]";

const icon = (
  <svg
    className="sm:w-6 sm:h-6"
    width="16"
    height="16"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9574 9.21506C14.0901 9.14855 14.2017 9.04643 14.2796 8.92012C14.3576 8.79381 14.3989 8.6483 14.3989 8.49986C14.3989 8.35142 14.3576 8.20591 14.2796 8.0796C14.2017 7.95329 14.0901 7.85117 13.9574 7.78466L2.75738 2.18466C2.61851 2.11517 2.46242 2.08761 2.30815 2.10532C2.15388 2.12303 2.0081 2.18526 1.88859 2.28441C1.76908 2.38356 1.68101 2.51535 1.63513 2.6637C1.58924 2.81205 1.58752 2.97055 1.63018 3.11986L2.77338 7.11986C2.8212 7.28704 2.92218 7.43409 3.06105 7.53874C3.19991 7.64339 3.36909 7.69996 3.54298 7.69986L7.19978 7.69986C7.41195 7.69986 7.61544 7.78414 7.76546 7.93417C7.91549 8.0842 7.99978 8.28769 7.99978 8.49986C7.99978 8.71203 7.91549 8.91551 7.76546 9.06554C7.61544 9.21557 7.41195 9.29986 7.19978 9.29986H3.54298C3.36909 9.29976 3.19991 9.35632 3.06105 9.46098C2.92218 9.56563 2.8212 9.71268 2.77338 9.87986L1.63098 13.8799C1.58824 14.0291 1.58985 14.1876 1.63563 14.336C1.68141 14.4843 1.76937 14.6161 1.88878 14.7154C2.0082 14.8146 2.1539 14.8769 2.30814 14.8948C2.46237 14.9126 2.61846 14.8852 2.75738 14.8159L13.9574 9.21586V9.21506Z"
      fill="white"
    />
  </svg>
);

const PrimaryButton: FC<PrimaryButtonProps> = ({
  className,
  isLink,
  href,
  children,
  onClick,
  hasIcon,
}: PrimaryButtonProps) => {
  if (isLink) {
    return (
      <div className="relative z-0 inline-block">
        <a className={`${className} ${defaultClasses}`} href={href}>
          {children}
          {hasIcon && icon}
        </a>
      </div>
    );
  }
  return (
    <div className="relative z-0 inline-block">
      <button className={`${className} ${defaultClasses}`} onClick={onClick}>
        {children}
        {hasIcon && icon}
      </button>
    </div>
  );
};

export default PrimaryButton;

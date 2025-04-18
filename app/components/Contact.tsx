import Envelope from "@/svg/Envelope";
import Github from "@/svg/Github";
import LinkedIn from "@/svg/LinkedIn";
import Telegram from "@/svg/Telegram";
import X from "@/svg/X";

const Contact = () => {
  return (
    <div className="flex flex-col gap-2 transition-all duration-300 hover:text-[var(--secondary-foreground)]">
      <Link
        title="Github"
        label="@stephanniegb"
        url="https://github.com/stephanniegb"
        icon={<Github />}
      />
      <Link
        title="email"
        label="egbuonustephanie@gmail.com"
        url="mailto:egbuonustephanie@gmail.com"
        icon={<Envelope />}
      />
      <Link
        title="telegram"
        label="@stephanniegb"
        url="https://t.me/stephanniegb"
        icon={<Telegram />}
      />
      <Link
        title="Linkedin"
        label="Stephanie Egbuonu"
        url="https://www.linkedin.com/in/stephanie-egbuonu"
        icon={<LinkedIn />}
      />
      <Link
        title="X"
        label="@stephanniegb"
        url="https://x.com/Stephanniegb"
        icon={<X />}
      />
    </div>
  );
};

export default Contact;

export const Link = ({
  label,
  title,
  url,
  icon,
}: {
  title: string;
  url: string;
  label: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-lg">{icon}</span>
      <p className="first-letter:uppercase">
        {title}:{" "}
        <a
          className="text-sm underline"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </p>
    </div>
  );
};

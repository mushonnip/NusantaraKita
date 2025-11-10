import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

interface SocialLink {
  type: 'github' | 'linkedin';
  url: string;
}

export interface ProfileCardProps {
  name: string;
  role: string;
  avatarUrl: string;
  socialLinks?: SocialLink[];
}

const SocialIcon = ({ type, url }: SocialLink) => {
  const iconMap = {
    github: <FaGithub size="24" />,
    linkedin: <FaLinkedin size="24" />,
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-700"
    >
      {iconMap[type]}
    </a>
  );
};

export const ProfileCard = ({
  name,
  role,
  avatarUrl,
  socialLinks,
}: ProfileCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-lg">
      <Avatar className="mb-4 size-28 object-cover">
        <AvatarImage
          src={avatarUrl}
          alt={name}
        />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-600">{role}</p>
      {socialLinks && socialLinks.length > 0 && (
        <div className="mt-4 flex space-x-4">
          {socialLinks.map((link) => (
            <SocialIcon
              key={link.type}
              {...link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

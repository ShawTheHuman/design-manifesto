
import React from 'react';

const SocialShare: React.FC = () => {
  const shareUrl = window.location.href;
  const shareText = "It's time to kill the portfolio presentation in UX hiring. Sign the manifesto:";

  const links = [
    {
      name: 'X / Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-[#1DA1F2]'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-[#0077B5]'
    },
    {
      name: 'Copy Link',
      action: () => {
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      },
      color: 'hover:bg-red-500'
    }
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {links.map((link) => (
        link.url ? (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 border-2 border-white text-[10px] font-black uppercase tracking-widest transition-all hover:text-white ${link.color} active:translate-y-1 active:shadow-none`}
            style={{ boxShadow: '3px 3px 0px white' }}
          >
            {link.name}
          </a>
        ) : (
          <button
            key={link.name}
            onClick={link.action}
            className={`px-4 py-2 border-2 border-white text-[10px] font-black uppercase tracking-widest transition-all hover:text-white ${link.color} active:translate-y-1 active:shadow-none`}
            style={{ boxShadow: '3px 3px 0px white' }}
          >
            {link.name}
          </button>
        )
      ))}
    </div>
  );
};

export default SocialShare;

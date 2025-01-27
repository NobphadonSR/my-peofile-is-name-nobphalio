import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-primary py-6 mt-auto bg-black/50">
            <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm md:text-base text-center md:text-left">
                        &copy; {currentYear} Nobphadon Srimanta. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/NobphadonSR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-base hover:text-accent transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nobphadon-srimanta-9a1959342/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-base hover:text-accent transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
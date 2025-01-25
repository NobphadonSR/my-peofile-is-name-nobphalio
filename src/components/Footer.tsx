import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-primary py-6 mt-auto font-outfit">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="font-space-grotesk">&copy; {currentYear} Nobphadon Srimanta. All rights reserved.</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex space-x-4 font-space-grotesk">
                        <a
                            href="https://github.com/NobphadonSR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nobphadon-srimanta-9a1959342/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
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
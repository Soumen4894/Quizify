import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import html from '../assets/html.svg';
import sql from '../assets/sql.svg';
import node from '../assets/nodejs.svg';
import js from '../assets/javascript.svg';
import react from '../assets/react.svg';
import { Link } from 'react-router-dom';

const abd = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png';

const Home = () => {
    const topics = [
        { src: html, alt: 'HTML', label: 'HTML', path: 'html' },
        { src: sql, alt: 'SQL', label: 'SQL', path: 'sql' },
        { src: abd, alt: 'Node.js', label: 'Node.js', path: 'node' },
        { src: react, alt: 'React', label: 'React', path: 'react' },
        { src: js, alt: 'JavaScript', label: 'JavaScript', path: 'js' },
        { src: js, alt: 'JavaScript', label: 'JavaScript', path: 'js2' }
    ];

    return (
        <div className="bg-gradient-to-bl from-green-100 via-gray-100 to-green-100 min-h-screen flex flex-col">
            {/* Logo Section */}
            <header className=" flex justify-center px-6 py-4">
                <img
                    className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
                    src="Logo.png"
                    alt="Logo"
                />
            </header>

            {/* Card Grid */}
            <main className="flex-1 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center"
                        >
                            <img
                                className="w-24 h-24 object-contain mb-4"
                                src={topic.src}
                                alt={topic.alt}
                            />
                            <h3 className="text-xl font-semibold text-gray-700 group-hover:text-black transition-colors mb-2">
                                {topic.label}
                            </h3>
                            <div className="w-2/3 h-1 mb-4 rounded-full bg-gradient-to-r from-gray-400 via-black to-gray-400" />
                            <Link
                                to={`/${topic.path}`}
                                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors"
                            >
                                Take a test
                                <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 py-6 px-6 mt-12">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-lg font-semibold">
                        © {new Date().getFullYear()} YourAppName
                    </div>
                    <div className="text-sm text-center md:text-left">
                        Made with ❤️ using React & Tailwind CSS
                    </div>
                    <div className="flex gap-4 text-xl">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;

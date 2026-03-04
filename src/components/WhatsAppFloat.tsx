import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppFloat() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '923247305909';
    const message = 'Hello! I would like to discuss a project with you.';

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        setIsOpen(false);
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
                {/* Message Bubble - Shows on click */}
                {isOpen && (
                    <div className="bg-white rounded-3xl shadow-2xl shadow-green-500/20 p-6 max-w-sm animate-fade-in-up border border-green-100">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                <MessageCircle className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-800 mb-1 text-lg">Mohammad Hassan</h4>
                                <p className="text-sm text-gray-600">Full Stack MERN Developer</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-sm text-gray-700 mb-5 leading-relaxed">
                            Hi there! 👋 Have a project in mind? Let's chat on WhatsApp and bring your ideas to life!
                        </p>
                        <button
                            onClick={handleWhatsAppClick}
                            className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                                Start Chat
                            </span>
                        </button>
                    </div>
                )}

                {/* Main WhatsApp Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group relative bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 text-white p-5 rounded-full shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
                    aria-label="WhatsApp"
                >
                    {/* Ripple Effects */}
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>

                    {/* Icon */}
                    <MessageCircle className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform duration-300" />

                    {/* Notification Badge with pulse */}
                    <div className="absolute -top-1 -right-1 z-20">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold border-3 border-white shadow-lg animate-pulse">
                            1
                        </div>
                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                </button>
            </div>
        </>
    );
}

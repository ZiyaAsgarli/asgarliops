import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
    return (
        <footer className="bg-primary border-t border-white/20 text-white py-20" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Brand */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-3xl font-display font-bold uppercase tracking-tight">
                            Sama Bairamova
                        </h3>
                        <p className="text-white/80 text-sm max-w-xs leading-relaxed">
                            Capturing life's most beautiful moments with elegance and artistic vision.
                        </p>
                        <div className="pt-4">
                            <Link href="#booking">
                                <Button variant="secondary" size="md">
                                    Let's Work Together
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-lg font-bold uppercase tracking-widest">Contact</h4>
                        <div className="flex flex-col space-y-4 text-white/90 text-sm">
                            <a
                                href="mailto:hello@samabairamova.com"
                                className="flex items-center hover:text-white transition-colors duration-200"
                            >
                                <Mail size={16} className="mr-2" /> hello@samabairamova.com
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="flex items-center hover:text-white transition-colors duration-200"
                            >
                                <Phone size={16} className="mr-2" /> +1 (234) 567-890
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-lg font-bold uppercase tracking-widest">Follow Me</h4>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="p-3 border border-white/50 hover:bg-white hover:text-primary transition-all duration-300"
                            >
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="p-3 border border-white/50 hover:bg-white hover:text-primary transition-all duration-300"
                            >
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60 text-xs uppercase tracking-wider">
                    © {new Date().getFullYear()} Sama Bairamova Photography. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-32 md:py-40 bg-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    {/* Image */}
                    <div className="w-full md:w-1/2 relative aspect-[3/4] max-w-md mx-auto md:mx-0">
                        <Image
                            src="/images/profile.png"
                            alt="Sama Bairamova"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl border border-white/20"
                        />
                    </div>

                    {/* Text - Editorial Style */}
                    <div className="w-full md:w-1/2 space-y-10 text-center md:text-left">
                        <h2 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white">
                            About Me
                        </h2>
                        <div className="space-y-6 text-white/90 leading-relaxed max-w-xl text-base">
                            <p>
                                I am Sama Bairamova, a photographer driven by the desire to capture the raw emotion and fleeting beauty of life. My journey began with a simple camera and a fascination for light, evolving into a lifelong passion for storytelling through imagery.
                            </p>
                            <p>
                                My style is rooted in minimalism and elegance. I believe that the most powerful images are often the simplest, stripping away the unnecessary to reveal the essence of the subject. Whether it's a wedding, a fashion shoot, or a quiet portrait, I strive to create timeless art that resonates.
                            </p>
                            <p>
                                When I'm not behind the lens, I'm exploring new landscapes, seeking inspiration in nature, art, and the human connection.
                            </p>
                        </div>
                        <div className="pt-6 border-t border-white/20">
                            <span className="font-serif italic text-2xl text-white">
                                "Photography is the story I fail to put into words."
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

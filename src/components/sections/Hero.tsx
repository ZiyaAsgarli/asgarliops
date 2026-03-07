import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Fashion photography editorial"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-primary/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white space-y-8 px-4 animate-fade-in-up max-w-4xl">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight uppercase">
                    Sama Bairamova
                </h1>
                <p className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-white">
                    Fashion & Editorial
                </p>
                <div className="pt-8">
                    <Link href="#booking">
                        <Button variant="primary" size="lg">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

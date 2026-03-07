import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const packages = [
    {
        name: "Portrait / Love Story",
        price: "$250",
        description: "Intimate sessions capturing authentic moments and emotions.",
        features: ["1 Hour Session", "15 Edited High-Res Images", "Online Gallery", "1 Location"],
    },
    {
        name: "Studio Shooting",
        price: "$800",
        description: "Professional studio photography with complete creative control.",
        features: ["4 Hours Coverage", "All Best Images Edited", "Professional Lighting", "Multiple Setups"],
        featured: true,
    },
    {
        name: "Commercial",
        price: "$2,500",
        description: "High-end commercial photography for brands and businesses.",
        features: ["Full Day Coverage", "Second Shooter", "Usage Rights Included", "Premium Retouching"],
    },
];

export function Services() {
    return (
        <section id="services" className="py-32 md:py-40 bg-primary/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 space-y-6">
                    <h2 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white">
                        Services & Investment
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg">
                        Transparent pricing for high-quality photography. Choose the package that fits your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative p-10 bg-primary border ${pkg.featured ? "border-white shadow-2xl scale-105 z-10" : "border-white/30 shadow-lg"
                                } flex flex-col transition-all hover:shadow-2xl hover:border-white duration-300`}
                        >
                            {pkg.featured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-primary text-xs font-bold px-4 py-1 uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-display font-bold mb-3 uppercase tracking-wide text-white">
                                {pkg.name}
                            </h3>
                            <div className="text-sm font-bold mb-2 text-white/60 uppercase tracking-widest">
                                Starting at
                            </div>
                            <div className="text-4xl font-bold mb-6 text-white">{pkg.price}</div>
                            <p className="text-white/80 mb-10 text-sm leading-relaxed">{pkg.description}</p>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-white/90">
                                        <Check size={16} className="mr-2 text-white" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="#booking" className="w-full">
                                <Button variant={pkg.featured ? "primary" : "outline"} className="w-full">
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

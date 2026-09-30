import styles from './Pricing.module.css';

// --- SVG Icon Components ---
const RestaurantIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
    </svg>
);

const ShoppingBagIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
);

const ScissorsIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
);

const GymIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M6 8H5a4 4 0 0 0 0 8h1" />
        <line x1="6" y1="12" x2="18" y2="12" />
    </svg>
);

const FashionIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
    </svg>
);

const ClinicIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

const SchoolIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const HotelIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7" />
        <path d="M12 2L2 7h20L12 2z" />
        <rect x="9" y="12" width="6" height="9" />
    </svg>
);

const EcommerceIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
);

const RealEstateIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const CarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
);

const DiamondIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9 6 3z" /><path d="M11 3L8 9l4 13 4-13-3-6" /><line x1="2" y1="9" x2="22" y2="9" />
    </svg>
);

const CorporateIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
    </svg>
);

const AdIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M9 8h6M9 12h3" />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const StarIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

interface BusinessItem {
    label: string;
    Icon: React.FC;
}

interface PricingTier {
    name: string;
    price: string;
    tagline: string;
    featured: boolean;
    badge?: string;
    businesses: BusinessItem[];
    cta: string;
}

const tiers: PricingTier[] = [
    {
        name: 'Starter',
        price: '1,500',
        tagline: 'Simple content & small businesses',
        featured: false,
        businesses: [
            { label: 'Restaurants & cafés', Icon: RestaurantIcon },
            { label: 'Small retail shops', Icon: ShoppingBagIcon },
            { label: 'Barbershops & salons', Icon: ScissorsIcon },
            { label: 'Gyms & fitness centers', Icon: GymIcon },
            { label: 'Fashion & clothing', Icon: FashionIcon },
        ],
        cta: 'Get Started',
    },
    {
        name: 'Professional',
        price: '2,000',
        tagline: 'Growing businesses & professional services',
        featured: true,
        badge: 'Most Popular',
        businesses: [
            { label: 'Clinics & healthcare', Icon: ClinicIcon },
            { label: 'Schools & training centers', Icon: SchoolIcon },
            { label: 'Consulting businesses', Icon: BriefcaseIcon },
            { label: 'Hotels & hospitality', Icon: HotelIcon },
            { label: 'E-commerce & online stores', Icon: EcommerceIcon },
        ],
        cta: 'Get Started',
    },
    {
        name: 'Premium',
        price: '2,500',
        tagline: 'High-value businesses & advertising',
        featured: false,
        businesses: [
            { label: 'Real estate', Icon: RealEstateIcon },
            { label: 'Car dealerships', Icon: CarIcon },
            { label: 'Luxury products', Icon: DiamondIcon },
            { label: 'Corporate businesses', Icon: CorporateIcon },
            { label: 'Promotional / advertising', Icon: AdIcon },
        ],
        cta: 'Get Started',
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className={styles.pricingSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={`${styles.badge} reveal`}>Pricing</div>
                    <h2 className={`${styles.title} reveal delay-1`}>
                        Pricing <span className="highlight">Packages</span> 
                    </h2>
                    <p className={`${styles.subtitle} reveal delay-2`}>
                        One flat rate per video — no hidden fees, no surprises.
                    </p>
                </div>

                <div className={styles.tiersGrid}>
                    {tiers.map((tier, i) => (
                        <div
                            key={tier.name}
                            className={`${styles.tierCard} ${tier.featured ? styles.featured : ''} reveal delay-${i + 1}`}
                        >
                            {tier.badge && (
                                <div className={styles.popularBadge}>
                                    <StarIcon />
                                    {tier.badge}
                                </div>
                            )}

                            <div className={styles.tierHeader}>
                                <h3 className={styles.tierName}>{tier.name}</h3>
                                <div className={styles.priceRow}>
                                    <span className={styles.currency}>ETB</span>
                                    <span className={styles.amount}>{tier.price}</span>
                                    <span className={styles.period}>/video</span>
                                </div>
                                <p className={styles.tagline}>{tier.tagline}</p>
                            </div>

                            <div className={styles.divider} />

                            <ul className={styles.businessList}>
                                {tier.businesses.map(({ label, Icon }) => (
                                    <li key={label} className={styles.businessItem}>
                                        <span className={styles.iconWrapper}>
                                            <Icon />
                                        </span>
                                        {label}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://t.me/Honzima"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.ctaBtn} ${tier.featured ? styles.ctaBtnFeatured : ''}`}
                            >
                                <CheckIcon />
                                {tier.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

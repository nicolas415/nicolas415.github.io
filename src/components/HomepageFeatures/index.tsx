import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
    link: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Réseau",
        Svg: require("@site/static/img/router.svg").default,
        description: <>Technologies et équipements réseau</>,
        link: "/docs/network",
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <Link
            to="/docs/network/exploring-networking"
            className={clsx("col col--4 border")}
        >
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

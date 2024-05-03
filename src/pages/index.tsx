import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Redirect } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageFeatures />
        </Layout>
    );
}

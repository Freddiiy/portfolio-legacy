import {NextPage} from "next";
import Head from "next/head";
import ContactForm from "../features/Contact/ContactForm";
import ContactSection from "../features/Contact/ContactPage";
import {useLocale} from "../hooks/useLocale";
import headerLocale from "../locales/header.json";

const Contact: NextPage = () => {
	let headerText = useLocale(headerLocale);
	return (
		<>
			<Head>
				<title>{headerText.links[2].name}</title>
			</Head>
			<section className="container mx-auto pt-24">
				<ContactSection />
			</section>
		</>
	);
};

export default Contact;

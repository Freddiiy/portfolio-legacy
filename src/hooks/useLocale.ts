import {useRouter} from "next/router";
import path from "path";
import * as fs from "fs";
import matter from "gray-matter";
import {GetStaticPropsContext} from "next";
import {marked} from "marked";

export const useLocale = (input: any) => {
	const {locale} = useRouter();
	let [localeText] = input.filter((l: any) => l.locale === locale);
	return localeText;
};

interface availableLocale {
	selectedLocale: "da-DK" | "en-US";
}

interface IPath {
	params: {
		slug: string;
	};
	locale: string;
}

export const handleLocalePaths = (_slug: string, locales: string[] | undefined) => {
	let paths: IPath[] = []

	const dir = path.join(process.cwd() + "/src/locales"+ _slug);
	const files = fs.readdirSync(dir);

	files.forEach((f) => {
		locales?.forEach((l) => {
			console.log(f)
			const fileContent = fs.readFileSync(f)
			const {data} = matter(fileContent);
			paths.push(data.slug)
		})
	})

	return {paths}
}

export const handleLocaleMd = (_slug: string, ctx: GetStaticPropsContext) => {
	const {slug, data, content} = getLocaleMd(_slug, ctx.locale)
	const parsedMarkdown = marked.parse(content);

	return {props: {slug, data, parsedMarkdown}}
}

export const getLocaleMd = (slug: string, selectedLocale: string | undefined) => {

	if (selectedLocale === undefined) {
		selectedLocale = "da-DK";
	}
	const dir = path.join(process.cwd() + "/src/locales");
	const realSlug = slug.replace(/\.mdx$/, "");
	const fullPath = path.join(dir, `${realSlug}.${selectedLocale}.md`);
	const fileContent = fs.readFileSync(fullPath, "utf-8");
	const {content, data} = matter(fileContent);

	return {slug: realSlug, data: data, content};
};

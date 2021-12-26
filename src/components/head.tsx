import NextHead from "next/head";
import { ReactNode } from "react";
import * as sc from "../utils/constants";

const Head = ({
  title,
  description,
  link,
  image,
  creator,
  searchWords = [],
  kind = "website",
  children,
}: {
  title?: string;
  description?: string;
  link?: string;
  image?: string;
  creator?: string;
  searchWords?: string[];
  kind?: string;
  children?: ReactNode;
}) => (
  <NextHead>
    {children || null}
    <title>{title ? sc.titleGen(title) : sc.title}</title>
    <meta name="title" content={title ? sc.titleGen(title) : sc.title} />
    <meta name="description" content={description || sc.description} />
    <meta name="keywords" content={[...sc.searchWords, ...searchWords].join(", ")} />
    <meta name="author" content={creator || sc.creator} />
    <meta name="creator" content={creator || sc.creator} />
    <meta property="og:type" content={kind} />
    <meta property="og:url" content={link || sc.siteURL} />
    <meta property="og:title" content={title ? sc.titleGen(title) : sc.title} />
    <meta property="og:description" content={description || sc.description} />
    <meta property="og:image" content={image || sc.coverLocation} />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:locale:alternate" content="my_MM" />
    <meta property="og:site_name" content={sc.siteName} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={link || sc.siteURL} />
    <meta property="twitter:title" content={title ? sc.titleGen(title) : sc.title} />
    <meta property="twitter:description" content={description || sc.description} />
    <meta property="twitter:image" content={image || sc.coverLocation} />
  </NextHead>
);

export default Head;

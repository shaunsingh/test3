// loads images from the cloudflare cdn
const normalizeSrc = (src: string) => {
    return src.startsWith("/") ? src.slice(1) : src;
};

export default function cloudflareLoader({
    src,
    width,
    quality,
}: { src: string; width: number; quality?: number }) {
    /*
    In development, return a local URL but still include the width (and quality)
    query parameters so that Next.js recognises that the loader implementation
     respects the requested responsive image width. This avoids the warning:
    "loader property that does not implement width".
    */
    if (process.env.NODE_ENV === "development") {
        const searchParams = new URLSearchParams({ w: width.toString() });
        if (quality) searchParams.set("q", quality.toString());
        return `${src}${src.includes("?") ? "&" : "?"}${searchParams.toString()}`;
    }
    const params = [`width=${width}`];

    params.push(`scq=40`);
    params.push('f=avif');
    params.push('fit=scale-down');
    params.push('metadata=none');

    if (quality) {
        params.push(`q=${quality}`);
    }

    const paramsString = params.join(",");
    return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
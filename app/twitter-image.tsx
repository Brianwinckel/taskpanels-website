// Twitter card uses the same image as Open Graph. Next.js's file convention
// requires a separate file (it doesn't auto-fall-back from opengraph-image
// to twitter-image), so we re-export the metadata + generator from the
// canonical opengraph-image.tsx to keep them in lockstep.
export { default, alt, size, contentType } from "./opengraph-image";

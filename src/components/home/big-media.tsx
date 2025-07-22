import { ButtonLink } from "../ui/button-link";
import { BigMediaCard } from "../cards/big-media-card";

export function BigMedia() {
    return (
        <BigMediaCard
            label="Nyoom Engineering"
            title={
                <>
                    Functional Design
                    <br />
                    for the Modern Age
                </>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
            cta={<ButtonLink href="/contact">GET STARTED</ButtonLink>}
            imageSrc="/lasers.avif"
            imageAlt="Abstract Lasers"
        />
    );
}
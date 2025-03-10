// components/AboutSection.jsx
export default function AboutSection() {
    return (
        <section className="flex flex-col md:flex-row w-full bg-white">
            {/* Left column with image - takes full width on mobile, 50% on larger screens */}
            <div className="w-full md:w-1/2 md:min-h-[600px]">
                <img
                    src="/images/joi-book-1.jpg"
                    alt="Joi Whitmore reading a book"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right column with burgundy background and text */}
            <div className="w-full md:w-1/2 bg-(--burgundy) text-white p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl heading-accent text-white mb-6 lg:text-6xl">
                    Hello there, I'm Joi Whitmore!
                </h2>

                <div className="space-y-6">
                    <p className="font-light">
                        I know what it's like to wake up one day and realize you've been running on autopilot—doing all the "right" things, showing up for everyone else, pushing through... and yet, something still feels off.
                    </p>

                    <p className="font-light">
                        For years, I thought if I just worked harder, helped more people, and kept everything under control, I'd eventually feel the peace I was searching for. But that's not how it works. The patterns I was stuck in weren't going to change just because I wished they would.
                    </p>

                    <p className="font-light">
                        I had to unlearn the roles I'd been playing. I had to break the cycles that were keeping me small. And I had to stop waiting for permission to live life on my terms.
                    </p>

                    <p className="font-light">
                        That's what I help my clients do now. No fluff. No sugarcoating. Just the real work of breaking free from the expectations and patterns that have kept you stuck—so you can finally step into the life that's waiting for you.
                    </p>

                    <p className="font-light">
                        Your next chapter doesn't have to look like your last.
                    </p>
                </div>
            </div>
        </section>
    );
}
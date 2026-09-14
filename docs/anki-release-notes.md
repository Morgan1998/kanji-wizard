# 1. Background

Hi! I'm Morgan. I'm an aspiring software engineer living in Osaka, Japan.
For the last year and a half I've been studying web development primarily
via The Odin Project. Last year, I took the JLPT N3 in December. I passed!
Woohoo! My strongest area was without a doubt kanji. I developed a solid
system that allowed me to fly through the first section of the test. Some
months later after the test I got to thinking: since I'm studying software
engineering, why not try to make an app that includes all the tools and
conveniences that I wish I had during those grueling study sessions? And
so the idea of making Kanji Wizard was born. I named it Kanji "Wizard"
because I like to jokingly call myself or my friends a wizard when we do
something cool xD.

# 2. Development

Kanji Wizard was my very first real project. The idea was to use it as a place to have unrestricted fun practicing vanilla JavaScript, CSS, and HTML. It's built in vanilla JavaScript via classes. Why classes? Well, I started off by making a class version and a factory function version, but somewhere down the road I found classes trickier due to stuff like the `this` keyword. Therefore, I decided to stick with classes to help me grasp how they actually work under the hood.

My other two main focuses were to practice direct DOM manipulation and to get comfortable with many different vanilla CSS capabilities.

Oh, and, stuffing all of my JavaScript inline into one script tag in my HTML templates has given me a profound sense of appreciation for how modern workflows use file-based modules for organizing code.

# 3. What I Learned

I learned a LOT! Some of the main things I learned and practiced include:

- **Why we use IIFEs in Anki**: Encapsulating scripts inside Immediately Invoked Function Expressions to prevent namespace pollution and cross-card state leakage in Anki's shared WebView.
- **Single Responsibility Principle (SRP)**: Dividing monolithic script logic into isolated classes (such as data providers, canvas controllers, and SVG builders).
- **Simulated Offline Document Store**: Storing and parsing a complete JSON blob inside a single hidden DOM container to act as a local, offline database.
- **Preventing Layout Thrashing**: Replacing layout-triggering properties (`style.left` and `style.top`) with hardware-accelerated `transform: translate3d(...)` to shift movement to the GPU for smooth dragging.
- **AnkiMobile (iOS) WebView Quirks**:
  - Intercepting native iOS swipe gestures on the canvas by attaching `touchstart` and `touchmove` listeners configured with `{ passive: false }` and `event.preventDefault()`.
  - Using AnkiMobile's native `.tappable` class on deck-workspace element so taps do not trigger card advancement.
  - Bypassing iOS WebKit popup blockers on dictionary searches by generating and clicking temporary off-screen anchor links.
- **Responsive Layouts**:
  - Using Container Query Units (`cqw` and `cqi`) combined with Root Ems (`rem`) inside `clamp()` formulas to adapt typography.
  - Accounting for device-specific hardware pixel densities (`window.devicePixelRatio`) to prevent blurry canvas rendering on high-DPI and Retina screens.
- **Object-Oriented JavaScript**: Getting comfortable with class declarations, instance properties, constructor parameter injection, `this` binding contexts, and static utility methods. Classes still confuse me sometimes, but hey, I'm better
  at them now that I was before.
- **Advanced CSS Techniques**:
  - Dynamic color mixing using `color-mix(in srgb, ...)`.
  - Modern CSS animations with `@keyframes`, `@starting-style`, and `transition-behavior: allow-discrete`.
  - The `:has()` relational selector to style parent containers based on child states.
  - Application-wide theming using CSS Custom Properties (variables).
  - Hardware-accelerated visual effects (`backdrop-filter: blur(...)`) and layout containment (`contain: layout`).
  - SVG typographic rendering controls with `paint-order: stroke fill`.
- **Database Architecture**: (Kinda) understanding how Anki structures and queries data within SQLite, and thinking a little bit about how their relational designs contrast with modern PostgreSQL schemas (which is what I use now for my main projects).
- **The Browser Rendering Pipeline**: Studying the difference between the Layout (reflow), Paint (repaint), and Composite stages to optimize frame rates during user interactions. Honestly, I've spent like four different days completing reviewing this process, and I still find it tricky to internalize it.
- **Documentation**: Document the entire process thoroughly. I didn't do that super well unfortunately. Oops. Lesson learned.

# 4. What's Next?

To be frank, I really would like to completely refactor Kanji Wizard. It was my first ever real personal project, and consequentially it is a bit messy and hard to navigate in places. I added several features toward the end without documenting exactly how it all worked, so reading back through the code takes me some time.

My plan is to eventually rebuild it from the ground up as a modern React application. From there, I want to use a dedicated build pipeline (via ESBuild) to compile its visual presentation components down into lightweight Preact bundles specifically for Anki. This will allow the main codebase to stand as a standard Single Page Application (SPA), while still being a source for creating templates for Anki decks :D

For now, this version works, it has been thoroughly tested by my friends and me, and it is juuusssttt stable enough to maintain if issues arise. So, yea, I decided to share it with the world! :D

# 5. Credits & Acknowledgments

A huge thanks to all of my friends who listened to all my crazy ideas, provided invaluable feedback, and set aside their time to test the deck over a multi-month period. The main squad includes:

- **Jasper**: My genius C++ best bud who has been there throughout the whole journey and helped with everything. He's the reason I started software engineering in the first place.
- **Daniel**: Listened to countless ideas and was the only person who could test AnkiMobile on iOS for me.
- **Hazuki**: For always showing such genuine interest in the project and providing her super duper expert design feedback.
- **Sam**: Gave useful feedback during testing and suggested several great features that made it into the final build.
- **George**: Advocated for keeping the UI clean and simple, inspiring the Plain Mode feature for less visual distraction.
- **Mark**: Provided creative ideas and enthusiasm whenever I shared project updates.
- **Brennan**: He may not remember it, but on a cold winter night months ago, he inspired me to full-on pursue this idea; his JLPT N1 knowledge provided invaluable direction for the core mechanics.
- **Cameron, Reece, Rika, Ian, and Brandon**: For testing builds and offering continuous support.
- **My Coworkers & Family**: For their encouragement, curiosity, and cheering me on throughout the process.

I also want to give a massive thank you to the creators of **The Odin Project**. Having access to such a comprehensive, high-quality curriculum for free is an incredible resource for aspiring developers. You peeps are the GOATS!

_(All third-party linguistic datasets and SVG sources used by the extraction pipeline are credited in the main repository README)._

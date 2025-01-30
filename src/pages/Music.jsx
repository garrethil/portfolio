import ReactPlayer from "react-player";

export default function MusicBioPage() {
  return (
    <main className="container mx-auto p-6 text-content mt-8">
      {/* Page Title */}
      <header className="mb-8">
        <h1 className="text-xl sm:text-3xl font-semibold text-primary-text my-4">
          Music
        </h1>
        <div className="w-full h-1 bg-primary-text"></div>
      </header>

      {/* Bio Section */}
      <section
        className="my-8 mt-10 text-center"
        role="region"
        aria-labelledby="bio-heading"
      >
        <h2 id="bio-heading" className="sr-only">
          Music Biography
        </h2>
        <div className="flex flex-col items-center">
          <figure className="mb-8">
            <img
              src="/music.webp"
              alt="Garret Hildebrandt performing in a jazz quartet at a venue."
              className="w-3/4 sm:w-1/2 md:w-1/2 md:h-auto mx-auto rounded-sm"
            />
            <figcaption className="sr-only">
              A jazz quartet featuring Garret Hildebrandt performing live.
            </figcaption>
          </figure>
        </div>
        <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-24">
          Since 2017, I have established myself as a dedicated and versatile
          saxophonist in the vibrant Toronto music scene, performing at
          prestigious venues such as Koerner Hall, DROM Taberna, and The Rex
          Hotel. As a multi-instrumentalist, I have cultivated expertise on the
          saxophone and clarinet while also expanding my repertoire as a
          self-taught guitarist, flutist, and pianist. This breadth of musical
          experience has enriched my artistry, adding depth and versatility to
          my performances.
          <br />
          <br />
          In 2019, I began exploring the guitar as a creative outlet, which led
          to writing and recording original compositions by 2020. My journey as
          a musician is deeply intertwined with Toronto's thriving music
          community, where I earned a bachelor’s degree in jazz performance for
          saxophone.
          <br />
          <br />
          Although my current focus lies in transitioning into the tech
          industry, my commitment to music remains - I continue to embrace
          opportunities to perform and collaborate.
        </p>
      </section>

      {/* SoundCloud Section */}
      <section
        className="my-8"
        role="region"
        aria-labelledby="original-music-heading"
      >
        <h2
          id="original-music-heading"
          className="text-2xl sm:text-3xl font-semibold my-6 text-center underline"
        >
          Original Music
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* First SoundCloud Embed */}
          <div className="w-full max-w-md" aria-label="SoundCloud player">
            <ReactPlayer
              url="https://soundcloud.com/user-849568025/tossed"
              width="100%"
              height="166px"
              config={{
                soundcloud: { options: { auto_play: false } },
              }}
              title="SoundCloud audio: Tossed"
            />
          </div>
          {/* Second SoundCloud Embed */}
          <div className="w-full max-w-md" aria-label="SoundCloud player">
            <ReactPlayer
              url="https://soundcloud.com/user-849568025/without-any-meaning"
              width="100%"
              height="166px"
              config={{
                soundcloud: { options: { auto_play: false } },
              }}
              title="SoundCloud audio: Without Any Meaning"
            />
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section
        className="my-8 mb-36"
        role="region"
        aria-labelledby="jazz-heading"
      >
        <h2
          id="jazz-heading"
          className="text-2xl sm:text-3xl font-semibold mb-6 text-center underline"
        >
          Jazz
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* First YouTube Video */}
          <div className="w-full max-w-lg">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ALQD33KLDlE&ab_channel=MusicWithoutborders"
              width="100%"
              height="360px"
              title="YouTube video: Jazz performance by Music Without Borders"
            />
          </div>
          {/* Second YouTube Video */}
          <div className="w-full max-w-lg">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=zul9YQ6p9rY&ab_channel=ChristianAntonacci"
              width="100%"
              height="360px"
              title="YouTube video: Jazz performance by Christian Antonacci"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

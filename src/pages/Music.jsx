import ReactPlayer from "react-player";

export default function MusicBioPage() {
  return (
    <div className="container mx-auto p-6 text-content mt-8">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-xl sm:text-3xl font-semibold text-primary-text my-4">
          Music
        </h1>
        <div className="w-full h-1 bg-primary-text"></div>
      </div>
      {/* Bio Section */}
      <div className="my-8 mt-10 text-center">
        <div className="flex flex-col items-center">
          <div className="w-194 md:h-194 rounded-sm  mb-8">
            <img
              src="/music.webp"
              alt="Jazz Quartet"
              className="flex sm:w-3/4 sm:w-1/2 md:w-1/2 md:h-1/3 mx-auto"
            />
          </div>
        </div>
        <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-[150px]">
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
          industry, my commitment to music remains unwavering. I continue to
          embrace opportunities to perform and collaborate, honoring the
          creative spirit that has guided my career thus far.
        </p>
      </div>

      {/* SoundCloud Section */}
      <div className="my-8">
        <h2 className="text-primary-text text-2xl sm:text-3xl font-semibold my-6 text-center underline">
          Original Music
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* First SoundCloud Embed */}
          <ReactPlayer
            url="https://soundcloud.com/user-849568025/tossed"
            width="100%"
            height="166px"
            config={{
              soundcloud: {
                options: { auto_play: false },
              },
            }}
          />
          {/* Second SoundCloud Embed */}
          <ReactPlayer
            url="https://soundcloud.com/user-849568025/without-any-meaning"
            width="100%"
            height="166px"
            config={{
              soundcloud: {
                options: { auto_play: false },
              },
            }}
          />
        </div>
      </div>

      {/* YouTube Section */}
      <div className="my-8 mb-[200px]">
        <h2 className="text-primary-text text-2xl sm:text-3xl font-semibold mb-6 text-center underline">
          Jazz
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* First YouTube Video */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ALQD33KLDlE&ab_channel=MusicWithoutborders"
            width="100%"
            height="360px"
          />
          {/* Second YouTube Video */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=zul9YQ6p9rY&ab_channel=ChristianAntonacci"
            width="100%"
            height="360px"
          />
        </div>
      </div>
    </div>
  );
}

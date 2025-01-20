import ReactPlayer from "react-player";

export default function MusicBioPage() {
  return (
    <div className="container mx-auto p-6 text-content mt-8">
      {/* Bio Section */}
      <div className="my-8 mt-10 text-center">
        <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
          Since 2017, I have been performing as a saxophonist in the Toronto
          area, performing at renowned venues such as Koerner Hall, Drome
          Taberna, and The Rex Hotel. As a multi-instrumentalist, I have honed
          my skills on saxophone and clarinet and I am self taught on guitar,
          flute and piano bringing versatility and depth to my music. In 2019, I
          began exploring the guitar, and by 2020, I was writing and recording
          my own original songs. My journey is rooted in the vibrant Toronto
          music community, where I earned a bachelor’s degree in jazz
          performance for saxophone. This foundation has allowed me to blend my
          passion for improvisation with songwriting, creating a unique musical
          voice.
        </p>
      </div>

      {/* SoundCloud Section */}
      <div className="my-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
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
      <div className="my-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
          Jazz Music
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

function Home() {
  const headshot = "headshot.jpg";

  return (
    <div className="p-6 flex flex-col items-center" id="box">
      <img
        src={headshot}
        alt="Profile Picture"
        className="w-36 h-36 rounded-full object-cover"
      />
      <h2 className="mt-5 text-2xl font-bold">Garret Hildebrandt</h2>
      <p className="text-center mt-3">
        Garret is a Full-Stack Web Developer that draws on creative elements
        from an education in music to provide a unique perspective in app
        development and solutions. He earned a Full-Stack Web Development
        Certificate from the University of Toronto following a bachelors of
        music from the UofT. Passionate problem solver and collaborator seeking
        a fast-paced environment for continued learning and growth as a web
        developer.
      </p>
    </div>
  );
}

export default Home;

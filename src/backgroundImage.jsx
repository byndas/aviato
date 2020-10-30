const backgroundImage = image => ({
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
});

export default backgroundImage;

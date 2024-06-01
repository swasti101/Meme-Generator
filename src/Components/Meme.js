import React from "react";
export default function Meme() {
  /**
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   **/

  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  //WITHOUT  ASYNC
  React.useEffect(() => {
    const data = fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  /**USING ASYNC
  React.useEffect(() => {
    async function getMemes(){
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data= await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  },[])
  **/

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  function getMemeImage() {
    // const memesArr = allMemes;
    let index = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[index].url;
    console.log(url);
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }
  return (
    <main>
      <div className="form">
        <input
          placeholder="Top text"
          className="form--inputs"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Bottom text"
          className="form--inputs"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="image_here" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

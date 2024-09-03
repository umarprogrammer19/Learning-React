import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="px-16 flex gap-8 mt-32">
        <Card imageUrl="https://static.vecteezy.com/system/resources/thumbnails/021/907/517/small/anime-boy-avatar-ai-generative-art-ai-generation-art-photo.jpg"
          title="Anime 1"
          character="Player 1 " />
          <Card imageUrl="https://static.vecteezy.com/system/resources/thumbnails/029/796/026/small/asian-girl-anime-avatar-ai-art-photo.jpg"
          title="Anime 2"
          character="Player 2 " />
          <Card imageUrl="https://www.japantimes.co.jp/uploads/imported_images/uploads/2022/12/np_file_200465-200x200.jpeg"
          title="Anime 3"
          character="Player 3 " />
          <Card imageUrl="https://pngimg.com/uploads/anime_girl/small/anime_girl_PNG93.png"
          title="Anime 4"
          character="Player 4 " />
      </div>
      <div className="px-16 flex gap-8 mt-8">
        <Card imageUrl="https://pics.craiyon.com/2023-11-15/NFfo8Fq5SC-QlFZzS4ge3Q.webp"
          title="Anime 5"
          character="Player 5 " />
          <Card imageUrl="https://ih1.redbubble.net/image.5191668922.6497/raf,360x360,075,t,fafafa:ca443f4786.jpg"
          title="Anime 6"
          character="Player 6" />
          <Card imageUrl="https://picfiles.alphacoders.com/143/143475.jpg"
          title="Anime 7"
          character="Player 7 " />
          <Card imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLeuj4GBVAt39nOhnTrgDPIjcnb-Aj_dFvw&s"
          title="Anime 8"
          character="Player 8 " />
      </div>
    </>
  )
}

export default App

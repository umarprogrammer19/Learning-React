import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function Home() {

  const arr = ["https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5AbIbTmeZeaI9GKb68JB_qHrmkS4szqcsg&s', "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5AbIbTmeZeaI9GKb68JB_qHrmkS4szqcsg&s', "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5AbIbTmeZeaI9GKb68JB_qHrmkS4szqcsg&s']

  return (
    <>
      <Navbar src="https://wallpapers.com/images/hd/devil-anime-boy-with-mask-xsu571h2n1inz3r3.jpg" />
      <div className="flex flex-wrap justify-center mt-24 gap-12">
        {arr.map(item => <Card src={item} />)}
      </div>
    </>
  )
}
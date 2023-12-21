import NewArrivals from "./components/HomePage/NewArrivals";
import Carousel from "./components/HomePage/Carousel";
import Delivery from "./components/HomePage/Delivery";
import Feedback from "./components/HomePage/Feedback";
import Maps from "./components/HomePage/Maps/Maps";

let slides = [
  {
    text: "",
  img: "https://as1.ftcdn.net/v2/jpg/04/49/01/98/1000_F_449019838_8qXxH8QylhiJoj1899ScimtQ4oN3q5f0.jpg"
    // img: 'https://i.pinimg.com/originals/ff/9c/20/ff9c204f62b65141a988cde3c7b1484f.jpg',
  },
  {
    text: "",
    img: "https://as1.ftcdn.net/v2/jpg/06/90/82/30/1000_F_690823016_al6SCiRZqtRaWHNsiARMwxASb71Gmy3J.jpg"
  },
  {
    text: "",
    img: "https://as1.ftcdn.net/v2/jpg/04/46/66/92/1000_F_446669266_qJCYmsK7RbZ93aJE9OMR7MvRCioJfbLP.jpg"
  },

]

export default function Home() {
  return (
    <main>
      <Carousel slides={slides}/>
      <NewArrivals />
      <Delivery/>
      <Feedback />
      <Maps />
    </main>
  )
}

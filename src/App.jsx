import { useEffect, useState } from "react";
import "./App.css";
import { useTheme } from "./components/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faTrash,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { width } from "@fortawesome/free-solid-svg-icons/fa1";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CartModal from "./components/CartModal";
import Products from "./components/Products";

const categoriesData = [
  {
    id: "cat_1",
    categoryName: "Makeup",
    image: "./Public/images/mekup/meakup.jpg",
    products: [
      {
        id: "m1",
        name: "Matte red lipstick",
        price: 20.0,
        rating: 4.5,
        image: "./Public/images/mekup/homra3.jpg",
      },
      {
        id: "m3",
        name: "Shiny Lip Gloss",
        price: 18.5,
        rating: 4.6,
        image: "./Public/images/mekup/glows.jpg",
      },
      {
        id: "m2",
        name: "Neutral eyeshadow palette",
        price: 30.0,
        rating: 4.8,
        image: "./Public/images/mekup/ishadoo2.jpg",
      },
      {
        id: "m2",
        name: "Matte liquid foundation",
        price: 30.0,
        rating: 4.8,
        image: "./Public/images/mekup/found1.jpg",
      },
      {
        id: "m4",
        name: "Volumizing black mascara",
        price: 23.0,
        rating: 4.7,
        image: "./Public/images/mekup/maskara.jpg",
      },
      {
        id: "m5",
        name: " Long lasting brow gel",
        price: 22.0,
        rating: 4.3,
        image: "./Public/images/mekup/jel1.jpg",
      },
      {
        id: "m6",
        name: "Setting face Powder",
        price: 18.0,
        rating: 4.4,
        image: "./Public/images/mekup/podra1.jpg",
      },
      {
        id: "m7",
        name: "Blush Palette",
        price: 14.0,
        rating: 4.5,
        image: "./Public/images/mekup/plasher2.jpg",
      },
      {
        id: "m8",
        name: "Face highlighter",
        price: 28.0,
        rating: 4.7,
        image: "./Public/images/mekup/haylaet2.jpg",
      },
      {
        id: "m9",
        name: "Smooth makeup Primer",
        price: 30.5,
        rating: 4.2,
        image: "./Public/images/mekup/praemer2.jpg",
      },
      {
        id: "m10",
        name: "Matte black eyeliner",
        price: 13.0,
        rating: 4.6,
        image: "./Public/images/mekup/ilyner.jpg",
      },
      {
        id: "m11",
        name: "Contour stick",
        price: 20.0,
        rating: 4.5,
        image: "./Public/images/mekup/contor1.jpg",
      },
      {
        id: "m12",
        name: "Makeup brushes",
        price: 24.0,
        rating: 4.4,
        image: "./Public/images/mekup/farash1.jpg",
      },
    ],
  },
  {
    id: "cat_2",
    categoryName: "Fashion",
    image: "./Public/images/dress/fathion1.jpg",
    products: [
      {
        id: "c1",
        name: "Elegant side slit",
        price: 30.5,
        rating: 4.4,
        image: "./Public/images/dress/dress1.jpg",
      },
      {
        id: "c2",
        name: " Sparkling and glamorous",
        price: 40.0,
        rating: 4.5,
        image: "./Public/images/dress/dress6.jpeg",
      },
      {
        id: "c3",
        name: "Ruffled collar design",
        price: 45.0,
        rating: 4.7,
        image: "./Public/images/dress/dress7.jpeg",
      },
      {
        id: "c4",
        name: "White rhinestone blazer",
        price: 55.0,
        rating: 4.6,
        image: "./Public/images/dress/dress2.jpg",
      },
      {
        id: "c5",
        name: "Long beige outerwear",
        price: 19.99,
        rating: 4.3,
        image: "./Public/images/dress/dress9.jpeg",
      },
      {
        id: "c6",
        name: "Brown tracksuit set",
        price: 32.5,
        rating: 4.2,
        image: "./Public/images/dress/dress10.jpg",
      },
      {
        id: "c7",
        name: "Soft and comfortable",
        price: 12.0,
        rating: 4.8,
        image: "./Public/images/dress/dress8.jpeg",
      },
      {
        id: "c8",
        name: "3D floral embellishments",
        price: 60.99,
        rating: 4.5,
        image: "./Public/images/dress/page1.jpg",
      },
      {
        id: "c9",
        name: "Crystal embellished purse",
        price: 28.0,
        rating: 4.6,
        image: "./Public/images/dress/page2.jpg",
      },
      {
        id: "c10",
        name: "Leather with scarf",
        price: 34.99,
        rating: 4.4,
        image: "./Public/images/dress/page4.jpeg",
      },
      {
        id: "c11",
        name: "Crystal and bead studded",
        price: 22.5,
        rating: 4.1,
        image: "./Public/images/dress/page6.jpg",
      },
      {
        id: "c12",
        name: "Comfortable and stylish",
        price: 29.0,
        rating: 4.7,
        image: "./Public/images/dress/dress3.jpg",
      },
      {
        id: "c13",
        name: "Warm half-zip top",
        price: 34.0,
        rating: 4.7,
        image: "./Public/images/dress/dress4.jpg",
      },
      {
        id: "c14",
        name: "Ribbed half-zip pullover",
        price: 36.0,
        rating: 4.7,
        image: "./Public/images/dress/dress5.jpg",
      },
    ],
  },
  {
    id: "cat_3",
    categoryName: "Electronics",
    image: "./Public/images/electronic/elect2.jpg",
    products: [
      {
        id: "e1",
        name: "Outdoor smart camera",
        price: 49.99,
        rating: 4.5,
        image: "./Public/images/electronic/elec1.png",
      },
      {
        id: "e2",
        name: "Slim portable laptop",
        price: 150.0,
        rating: 4.8,
        image: "./Public/images/electronic/elec2.jpg",
      },
      {
        id: "e3",
        name: "Sleek modern phone",
        price: 89.99,
        rating: 4.7,
        image: "./Public/images/electronic/elec3.jpg",
      },
      {
        id: "e4",
        name: "Compact oil-free fryer",
        price: 199.99,
        rating: 4.6,
        image: "./Public/images/electronic/elec4.jpeg",
      },
      {
        id: "e5",
        name: "Tower fan",
        price: 35.0,
        rating: 4.3,
        image: "./Public/images/electronic/elec5.jpg",
      },
      {
        id: "e6",
        name: "Over-ear headphones",
        price: 18.99,
        rating: 4.4,
        image: "./Public/images/electronic/elec6.jpeg",
      },
      {
        id: "e7",
        name: "Fabric steam iron",
        price: 75.0,
        rating: 4.5,
        image: "./Public/images/electronic/elec7.jpeg",
      },
      {
        id: "e8",
        name: "steam iron",
        price: 42.5,
        rating: 4.2,
        image: "./Public/images/electronic/elec8.jpeg",
      },
      {
        id: "e9",
        name: "Electric Kettle",
        price: 24.99,
        rating: 4.4,
        image: "./Public/images/electronic/elec9.jpeg",
      },
      {
        id: "e10",
        name: "Home office printel",
        price: 39.99,
        rating: 4.3,
        image: "./Public/images/electronic/elec10.jpeg",
      },
      {
        id: "e11",
        name: "Compact canister vacuum",
        price: 65.0,
        rating: 4.6,
        image: "./Public/images/electronic/elec11.jpeg",
      },
      {
        id: "e12",
        name: "Electric hand mixer",
        price: 29.99,
        rating: 4.5,
        image: "./Public/images/electronic/elec12.jpeg",
      },
      {
        id: "e13",
        name: "High-speed kitchen blender",
        price: 29.99,
        rating: 4.5,
        image: "./Public/images/electronic/elec13.jpeg",
      },
      {
        id: "e14",
        name: "Front load washer",
        price: 29.99,
        rating: 4.5,
        image: "./Public/images/electronic/elec14.jpeg",
      },
      {
        id: "e15",
        name: "Smart robotic cleaner",
        price: 29.99,
        rating: 4.5,
        image: "./Public/images/electronic/elec15.jpeg",
      },
      {
        id: "e16",
        name: "Bortable hair dryer",
        price: 29.99,
        rating: 4.5,
        image: "./Public/images/electronic/elec16.jpeg",
      },
      {
        id: "e17",
        name: "Dome camera",
        price: 29.99,
        rating: 4.5,
        image: "./Public/images/electronic/elec18.jpeg",
      },
      {
        id: "e18",
        name: "Air Fryer",
        price: 29.99,
        rating: 4.5,
        image: "./Public/images/electronic/elec19.jpg",
      },
    ],
  },
  {
    id: "cat_4",
    categoryName: "Accessories",
    image: "./Public/images/eccesories/accesoar6.jpg",
    products: [
      {
        id: "a1",
        name: "Delicate beaded bridal hair accessory",
        price: 85.0,
        rating: 4.6,
        image: "./Public/images/eccesories/exes3.jpg",
      },
      {
        id: "a2",
        name: "Leaf Brooch Pin",
        price: 45.0,
        rating: 4.5,
        image: "./Public/images/eccesories/exes5.jpg",
      },
      {
        id: "a3",
        name: "hair accessory",
        price: 65.0,
        rating: 4.7,
        image: "./Public/images/eccesories/exes7.jpeg",
      },
      {
        id: "a4",
        name: "Leaf Brooch Pin",
        price: 20.0,
        rating: 4.4,
        image: "./Public/images/eccesories/exes8.jpeg",
      },
      {
        id: "a5",
        name: "hair accessory",
        price: 30.0,
        rating: 4.6,
        image: "./Public/images/eccesories/exes2.jpeg",
      },
      {
        id: "a6",
        name: "Brooch",
        price: 50.0,
        rating: 4.8,
        image: "./Public/images/eccesories/exes1.jpg",
      },
      {
        id: "a7",
        name: "Brooch Pin",
        price: 15.0,
        rating: 4.3,
        image: "./Public/images/eccesories/exes16.jpeg",
      },
      {
        id: "a8",
        name: " Emerald Cut Ring",
        price: 18.5,
        rating: 4.5,
        image: "./Public/images/eccesories/exes6.jpg",
      },
      {
        id: "a9",
        name: "Emerald Cut Ring",
        price: 14.99,
        rating: 4.2,
        image: "./Public/images/eccesories/exes9.jpeg",
      },
      {
        id: "a10",
        name: "Emerald Cut Ring",
        price: 12.5,
        rating: 4.4,
        image: "./Public/images/eccesories/exes12.jpeg",
      },
      {
        id: "a11",
        name: "Silver Ring Set",
        price: 25.0,
        rating: 4.7,
        image: "./Public/images/eccesories/exes13.jpeg",
      },
      {
        id: "a12",
        name: " Silver Ring Set",
        price: 8.99,
        rating: 4.1,
        image: "./Public/images/eccesories/exes14.jpeg",
      },
      {
        id: "a13",
        name: "Emerald Cut Ring",
        price: 8.99,
        rating: 4.1,
        image: "./Public/images/eccesories/exes15.jpeg",
      },
      {
        id: "a14",
        name: "Silver Ring Set",
        price: 8.99,
        rating: 4.1,
        image: "./Public/images/eccesories/exes17.jpg",
      },
      {
        id: "a15",
        name: "Layered thigh chain",
        price: 8.99,
        rating: 4.1,
        image: "./Public/images/eccesories/exes10.jpeg",
      },
      {
        id: "a16",
        name: "Silver anklet",
        price: 8.99,
        rating: 4.1,
        image: "./Public/images/eccesories/exes11.jpeg",
      },
    ],
  },
];

function App() {
  const { theme } = useTheme();
  const [product, setProduct] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("shopping_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const getData = async () => {
      setIsloading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProduct(categoriesData); // تأكد من استيراد categoriesData هنا
      setIsloading(false);
    };
    getData();
  }, []);

  const addToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((item) => item.id === productToAdd.id);
      if (exist) {
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item,
        );
      }
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
    alert("Added successfully");
  };

  const removeFromCart = (idToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== idToRemove),
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={`App ${theme}`}>
      <Header
        setSelectedCategory={setSelectedCategory}
        setIsCartOpen={setIsCartOpen}
        totalCount={totalCount}
      />

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {isloading && <p>Loading...</p>}
      {!isloading && (
        <Products
          products={product}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          addToCart={addToCart}
          searchQuery={searchQuery}
          cartItems={cartItems}
        />
      )}

      {isCartOpen && (
        <CartModal
          theme={theme}
          cartItems={cartItems}
          setIsCartOpen={setIsCartOpen}
          removeFromCart={removeFromCart}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
}
export default App;

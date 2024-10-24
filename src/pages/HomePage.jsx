import TopHomePage from "../JSX/TopHomePage";
import FlashContent from "../JSX/FlashContant";
import FullService from "../JSX/FullService";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import LoadingPage from "../pages/Loading";
import BrowseCategory from "../JSX/BrowseCategory";
import Music from "../JSX/Music";
import NewArrival from "../JSX/NewArrival";
import Error from "./Error";

function HomePage() {
  const { products, status, setInWishList, error } = useContext(ProductContext);

  setInWishList(false);

  if (status === "loading" || status === "idle") return <LoadingPage />;

  if (error) {
    return <Error />;
  }

  const electronicProducts = products.filter(
    (product) => product.category === "electronics"
  );

  const bestProductsRating = products.filter(
    (product) => product.rating.rate > "4.4"
  );

  return (
    <div className="container mx-auto m">
      <TopHomePage />  

      <FlashContent
        products={electronicProducts}
        category={"Electronics"}
        syntax={"today's"}
        sty={true}
        id={"electronics"}
      />

      <BrowseCategory category={"Browse By Category"} syntax={"Categories"} />

      <FlashContent
        products={bestProductsRating}
        category={"Best Selling Products"}
        syntax={"This Month"}
        buttons={false}
        styleBest="grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        doStyleBest={true}
        id={"bestProduct"}
      />

      <Music />

      <FlashContent
        products={products}
        category={"Explore Our Products"}
        syntax={"Our Products"}
        id={"mens-clothing"}
      />

      <NewArrival />

      <FullService />
    </div>
  );
}

export default HomePage;

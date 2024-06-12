import Header from "./Header";
import Banner from "./Banner";
import ProductFeed from "./ProductFeed";

const Main = () => {
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="wrapper">
                <Banner />
                <ProductFeed />
            </main>
        </div>
    );
};

export default Main;

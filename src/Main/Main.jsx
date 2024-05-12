import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";
import work4 from "../assets/images/work4.jpg";
import work5 from "../assets/images/work5.jpg";
import work6 from "../assets/images/work6.jpg";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";

const Main = () => {
    const data = [
        { title: "Work #1", price: 2500, image: work1 },
        { title: "Work #2", price: 2670, image: work2 },
        { title: "Work #3", price: 3200, image: work3 },
        { title: "Work #4", price: 1900, image: work4 },
        { title: "Work #5", price: 4090, image: work5 },
        { title: "Work #6", price: 3650, image: work6 },
    ];

    return (
        <>
            <Banner />
            <Gallery data={data} />
            <Feedback />
        </>
    )
}

export default Main;
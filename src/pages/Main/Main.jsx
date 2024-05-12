import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Header from "../Header/Header";
import Blogs from "./Blogs/Blogs";
import NewsBlog from "./Blogs/components/NewsBlog";
import CinemaBlog from "./Blogs/components/CinemaBlog/CinemaBlog";
import StarWarsBlog from "./Blogs/components/CinemaBlog/StarWarsBlog";
import SportBlog from "./Blogs/components/SportBlog";
import NotFound from "./NotFound/NotFound";

const data = [
    {id: 1, title: "Episode I: The Phantom Menace", desc: "«Звёздные во́йны. Эпизо́д I: Скры́тая угро́за» (англ. Star Wars. Episode I: The Phantom Menace) — эпическая космическая опера, снятая и написанная Джорджем Лукасом. Это четвёртый фильм, выпущенный в рамках киносаги «Звёздные войны», выступающий первой частью трилогии приквелов «Звёздных войн» и начало «Саги Скайуокеров» с хронологической точки зрения. Кроме того, это четвёртая полнометражная картина Лукаса, выпущенная им после 22-летнего перерыва в режиссуре, со времён работы над своим предыдущим фильмом «Звёздные войны. Эпизод IV: Новая надежда» (1977)."},
    {id: 2, title: "Star Wars. Episode II: Attack of the Clones", desc: "«Звёздные во́йны. Эпизо́д II: Ата́ка кло́нов» (англ. Star Wars. Episode II: Attack of the Clones) — эпическая космическая опера 2002 года, снятая режиссёром Джорджем Лукасом по сценарию, написанному самим Лукасом в соавторстве с Джонатаном Хейлсом. Пятый фильм в режиссёрской карьере Лукаса. Он является второй частью трилогии приквелов «Звёздных войн», пятым фильмом по дате релиза и вторым в хронологической последовательности сюжета «Саги Скайуокеров». Девятнадцатый полнометражный фильм выпущенный кинокомпанией Lucasfilm. Премьера состоялась 16 мая 2002 года. Один из первых в истории кинематографа фильмов, полностью снятых на цифровую кинокамеру."},
    {id: 3, title: "Star Wars. Episode III: Revenge of the Sith", desc: "«Звёздные во́йны. Эпизо́д III: Месть си́тхов» (англ. Star Wars. Episode III: Revenge of the Sith) — эпическая космическая опера 2005 года, снятая режиссёром и сценаристом Джорджем Лукасом, его шестой полнометражный фильм. Это шестой фильм «Звёздных войн», третий в «Саге Скайуокеров» и последняя часть трилогии приквелов «Звёздных войн». Это двадцатая полнометражная картина компании Lucasfilm."}
];

const Main = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/blogs" element={<Blogs />}>
                    <Route index element={<NewsBlog />} />
                    <Route path="cinema-blog" element={<CinemaBlog data={data}/>}>
                        <Route path=":id" element={<StarWarsBlog data={data}/>} />
                    </Route>
                    <Route path="sport-blog" element={<SportBlog />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default Main;

import {useState} from "react";

const About = () => {
    //count - состояние
    //setCount - функция для изменения состояния
    //внутри useState передается начальное значение состояния
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div className="container">
            <h2 className="text-center">About page</h2>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Увеличить</button>
        </div>
    )
}

export default About;
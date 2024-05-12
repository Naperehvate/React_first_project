import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-block">
            <div className='d-flex flex-column justify-content-center h-100 p-4'>
            <h1 className="fw-bold text-light w-75">Change your mind today!</h1>
            <p className='mt-3 w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad corrupti hic quidem assumenda laudantium voluptas magnam sint voluptates magni modi explicabo similique possimus voluptate harum, id numquam velit labore autem voluptatibus dolores!</p>
            <button className='btn btn-outline-danger mt-4'>Get Started</button>
            </div>
        </div>
    )
}

export default Banner;
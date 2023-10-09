import Navbar from "../../shared/Navbar/Navbar";



const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/SXvx7Dz/heading.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-24">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-24">
                <div className="flex items-center gap-10">
                    <div className="w-1/2">
                        <p>The Motion Theater is a historic motion picture theater located in America. It was built in 1990 and is one of the oldest surviving theaters in the city. The theater was originally designed to show silent films, but it was converted to sound in [year].

                            The Motion Theater has played an important role in the cultural life of [city name] for over a century. It has hosted countless premieres, film festivals, and other special events. The theater has also been a popular venue for live performances, including concerts, plays, and comedy shows.

                            In the early 1900s, the Motion Theater was a popular destination for families and couples. The theater was known for its luxurious accommodations, including plush seating, a state-of-the-art projection system, and a live orchestra.

                            In the 1930s and 1940s, the Motion Theater began to show Hollywood blockbusters, such as Gone with the Wind and The Wizard of Oz. The theater also hosted many of the biggest stars of the era, including Clark Gable, Judy Garland, and Bette Davis.</p>
                    </div>
                    <div className="w-1/2">
                        <img src="https://i.ibb.co/Ttc6NW3/3-2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="max-w-7xl mx-auto py-24">
                    <div>
                        <h2 className="text-center text-5xl italic font-bold">Key Figures</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-10 mt-14">
                        <div className="text-center">
                            <img src="https://i.ibb.co/bd7hBYz/e184h18dgf325-t.jpg" alt="" />
                            <h4 className="text-3xl italic mt-5">Bob Carnagy</h4>
                            <p className="text-red-600 text-lg font-medium">Actor</p>
                        </div>
                        <div className="text-center">
                            <img src="https://i.ibb.co/brh3tBw/a183f17fsd71-t.jpg" alt="" />
                            <h4 className="text-3xl italic mt-5">Max Turner</h4>
                            <p className="text-red-600 text-lg font-medium">Actor</p>
                        </div>
                        <div className="text-center">
                            <img src="https://i.ibb.co/FbgjCv7/brooke-cagle-191367-t.jpg" alt="" />
                            <h4 className="text-3xl italic mt-5">Amy Adams</h4>
                            <p className="text-red-600 text-lg font-medium">Actress</p>
                        </div>
                        <div className="text-center">
                            <img src="https://i.ibb.co/LS1NXkw/pexels-photo-199164-t.jpg" alt="" />
                            <h4 className="text-3xl italic mt-5">Julia Jameson</h4>
                            <p className="text-red-600 text-lg font-medium">Actress</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
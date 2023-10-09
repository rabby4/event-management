import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex justify-center items-center h-screen">
            {
                error.status === 404 && <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
                    <Link to='/'>
                        <button className="btn text-center bg-red-700 text-white hover:bg-red-600">Go Back Home</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
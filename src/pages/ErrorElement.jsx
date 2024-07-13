import { Link } from 'react-router-dom'

const ErrorElement = () => {
    return (
        <section className="flex items-center h-screen p-16 text-gray-200">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/' className="px-8 py-3 font-semibold rounded-full bg-[#101C2C] hover:bg-[#0F1622]">Back to Home</Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorElement
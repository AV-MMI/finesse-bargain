import { Link } from "react-router-dom"

export { ErrorPage }

function ErrorPage({}) {
    return (
        <div className="flex flex-col min-h-[100vh] justify-center items-center text-xl text-orange-200">
            <div className="w-96">
                <h1 className="text-orange-500">Oops...!</h1>
                <p className="">
                    Whoops! Looks like you've landed on a page that doesn't exist at Finesse Bargain.
        Don't worry, we have plenty of treasures to discover, <Link to="/" className="border-b-2 border-b-orange-500 text-orange-500">go home</Link>
                </p>
            </div>
        </div>
    )
}
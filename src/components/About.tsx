import { LineCard } from "./LineCard";
export { About };

function About({}){
    return (
    <div className="flex flex-col items-center min-h-[90vh] space-y-4 pt-16 text-slate-400 bg-slate-800">
        <div className="flex flex-col mt-5 max-w-[60vw]">
            <h1 className="text-orange-500 text-5xl font-semibold">Finesse Bargain</h1>
            <p className="">At Finesse Bargain,
    we're passionate about bringing you incredible deals on a wide variety of products.
    We believe everyone deserves to experience the joy of finding a fantastic item at a fantastic price.
            </p>
        </div>

        <div className="flex flex-col mt-5 min-w-[60vw]">
            <h2 className="text-orange-500 text-3xl font-semibold p-0">Our Mission</h2>
            <LineCard></LineCard>
        
            <ul className="p-0 m-0">
                <li className="list-disc marker:text-orange-500">To offer a curated selection of top-quality products at unbeatable prices.</li>
                <li className="list-disc marker:text-orange-500">To provide a seamless and enjoyable shopping experience for our customers.</li>
                <li className="list-disc marker:text-orange-500">To build a community of value-conscious shoppers who love a good bargain.</li>
            </ul>
        </div>

        <div className="flex flex-col mt-5 max-w-[60vw]">
            <h2 className="text-orange-500 text-3xl font-semibold">Our Story</h2>
            <p>
                Finesse Bargain was founded by a group of friends who shared a love for finding great deals.
 We were tired of overpaying for everyday items and wanted to create a store where everyone could find the things they need without breaking the bank.
            </p>
        </div>

    </div>
    )
}
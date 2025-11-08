import { quotes } from "../quotes/quotes";


const ListPage = () => {

    const speakers = quotes.map((s) => s.speaker);

    return (
        <>
            <h1>{speakers}</h1>

        </>

    )

}

export default ListPage;
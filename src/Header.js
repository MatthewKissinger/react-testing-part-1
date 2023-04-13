export default function Header( { text } ) {
    return (
        <header>
            <h2 
                className="hello"
                data-testid="h1tag">{text}</h2>
        </header>
    )
}
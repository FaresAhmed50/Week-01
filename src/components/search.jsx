export const Search = () => {
    return (
        <form className="search" role="search">
            <svg
                className="search__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
                className="search__input"
                type="search"
                name="search"
                placeholder="Search products..."
                aria-label="Search products"
            />
            <button className="search__button" type="submit">
                Search
            </button>
        </form>
    )
}

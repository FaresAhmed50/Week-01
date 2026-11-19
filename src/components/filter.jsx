export const Filter = ({categories}) => {
    return (
        <nav className="filter">
            {categories.map((category) => (
                <a
                    key={category}
                    className="filter__item"
                >
                    {category}
                </a>
            ))}
        </nav>
    )
}

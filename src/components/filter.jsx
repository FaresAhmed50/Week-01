export const Filter = ({categories , onFilter}) => {
    return (
        <nav className="filter">
            {categories.map((category) => (
                <a
                    key={category}
                    className="filter__item"
                    onClick={() => onFilter(category)}
                >
                    {category}
                </a>
            ))}
        </nav>
    )
}

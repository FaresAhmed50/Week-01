export const Badge = ({productBadge}) => {

    return (
        <span className={`badge ${productBadge === "Active" ? "badge--active" : "badge--inactive"}`}>
            {productBadge}
        </span>
    )
}

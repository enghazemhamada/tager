export default function CategoryCard({img, title}) {
    return(
        <div className="card">
            <img src={img} alt={title} loading="lazy" />
            <h4>{title}</h4>
        </div>
    );
}
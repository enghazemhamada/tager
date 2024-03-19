export default function ChefCard({img, name, desc}) {
    return(
        <div className="card">
            <img src={img} alt="chef" loading="lazy" />
            <div className="info">
                <h4>{name}</h4>
                <p>{desc}</p>
            </div>
        </div>
    );
}
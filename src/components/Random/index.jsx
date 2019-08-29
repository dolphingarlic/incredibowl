export default function Random(props) {
    fetch("http://localhost:3001/random_bowl/", {
        method: "GET",
        mode: "cors",
    })
        .then(response => response.json())
        .then(data => {
            let pk = data.pk;
            props.history.push(`bowl/${pk}`);
        });

    return null;
}

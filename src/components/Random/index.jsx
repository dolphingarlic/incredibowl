export default function Random(props) {
    fetch("/api/random_bowl/", {
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

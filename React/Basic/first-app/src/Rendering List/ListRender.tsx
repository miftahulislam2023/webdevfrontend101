const ListRender = () => {
    const mangoList = [
        "Fojli",
        "Aam Rupali",
        "Langra",
        "Gopalvog",
        "Hari Vanga",
        "Himsagor",
    ]

    const liTags = mangoList.map(mango =>
        <li className="text-red-800">
            {`I love ${mango}`}
        </li>
    )

    return (
        <ul>
            {
                liTags
            }
        </ul>
    )
}

export default ListRender
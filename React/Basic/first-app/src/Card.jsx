export default function Card({ children }) {
    // console.log(children)
    return (
        <div>
            <p>This is a paragraph from Card component</p>
            {children}
        </div>
    );
}
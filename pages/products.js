
// export const getServerSideProps = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json();
//     return {
//         props: {
//             data,
//         }
//     }
// };

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    return {
        props: {
            data,
        }
    }
};

const products = ({ data }) => {

    return (
        <div>
            <h1>products</h1>
            <div>
                <table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    {data.slice(0, 5).map(item => {
                        return (<tbody key={item.id}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>
                        </tbody>)
                    })}
                </table>
            </div>


        </div>
    );
};

export default products;
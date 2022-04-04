import { useRouter } from "next/router";
const error404Page = () => {
    const router = useRouter();
    const nevigationHandler = () => {
        return setTimeout(() => router.push('/home'), 3000)
    }
    return (
        <div>
            <h2>404 | This page could not be found</h2>
            <p><button onClick={nevigationHandler}>Back to home page</button></p>
        </div>
    );
};

export default error404Page;
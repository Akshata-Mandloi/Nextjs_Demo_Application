import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../Components/Header/index'))

const index = () => {
    return (
        <div>
            <Header />
        </div>
    );
};

export default index;
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Planet App</title>
        </Head>
        <Navbar />
        {children}
    </>
)

export default Layout;
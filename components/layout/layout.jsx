import MainNavigation from "./mainNavigation";

const Layout = (props) => {
    return ( 
        <>
        <MainNavigation/>
        <main>{props.children}</main>
        </>
     );
}
 
export default Layout;
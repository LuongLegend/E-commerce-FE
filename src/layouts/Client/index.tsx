import Header from "./Header"
import Footer from "./Footer"
const index = ({ children }: React.PropsWithChildren) => {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default index
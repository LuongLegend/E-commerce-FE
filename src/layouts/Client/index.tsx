import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
    children: React.ReactNode
}

const index = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default index
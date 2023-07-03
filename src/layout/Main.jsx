import { ThemeProvider } from "../ThemeContext";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Main = () => {
    return (
        <ThemeProvider>
            <div>
            <Hero></Hero>
            <Footer/>
            </div>
        </ThemeProvider>
    );
};

export default Main;
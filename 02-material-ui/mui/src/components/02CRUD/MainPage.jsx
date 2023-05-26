import { Container } from "@mui/material"
import MyMenuV1 from "./MyMenuV1"

const MainPage = ({children}) => {
    return(
        <>
            <MyMenuV1/>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default MainPage 
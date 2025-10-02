import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import { Container } from "../../components/Container/Container";
import { CountDown } from "../../components/CountDown/CountDown";
import { MainForm } from "../../components/MainForm/MainForm";

function Home() {

    return (

        <MainTemplate>

            <Container>
            
                <CountDown />

            </Container>

            <Container>
            
                <MainForm />

            </Container>

        </MainTemplate>

    );

}

export { Home };
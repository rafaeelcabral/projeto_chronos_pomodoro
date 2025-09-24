import { Container } from "../../components/Container/Container";
import { CountDown } from "../../components/CountDown/CountDown";
import { MainForm } from "../../components/MainForm/MainForm";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";

import type { TaskStateModel } from "../../app/models/TaskStateModel";

type HomeProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
};

function Home({state, setState}: HomeProps) {

    return (

        <MainTemplate>

            <Container>
            
                <CountDown state={state} setState={setState} />

            </Container>

            <Container>
            
                <MainForm state={state} setState={setState} />

            </Container>

        </MainTemplate>

    );

}

export { Home };
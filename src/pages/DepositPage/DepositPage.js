import { Form, Input, Button } from "../../styles/StyledAuthPage";
import { Back, Container, Title, StyledLink } from "./styled";

export default function Deposit() {
    return(
        <Container>
            <Title>
                Nova entrada
                <StyledLink to="/home"><Back /></StyledLink>
            </Title>
            <Form>
                <Input placeholder="Valor" type="text" />
                <Input placeholder="Descrição" type="text" />
                <Button>Salvar entrada</Button>
            </Form>
        </Container>
    );
}
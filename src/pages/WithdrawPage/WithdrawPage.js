import { Form, Input, Button } from "../../styles/StyledAuthPage";
import { Container, Title, StyledLink, Back } from "../DepositPage/styled";

export default function Withdraw() {
    return(
        <Container>
            <Title>
                Nova saida
                <StyledLink to="/home"><Back /></StyledLink>
            </Title>
            <Form>
                <Input placeholder="Valor" type="text" />
                <Input placeholder="Descrição" type="text" />
                <Button>Salvar saída</Button>
            </Form>
        </Container>
    );
}
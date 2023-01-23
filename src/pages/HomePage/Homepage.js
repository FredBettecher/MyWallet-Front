import { Link } from "react-router-dom";
import { Container, ExitOutline, Registers, Title, InAndOutBox, InAndOut, AddIcon, RemoveIcon, StyledLink } from "./styled";

export default function Home() {
    const userName = "Fulano"

    return(
        <Container>
            <Title>
                Olá, {userName}
                <StyledLink to="/"><ExitOutline /></StyledLink>
            </Title>

            <Registers></Registers>

            <InAndOutBox>
                <StyledLink to="/nova-entrada">
                    <InAndOut>
                        <AddIcon />
                        Nova entrada
                    </InAndOut>
                </StyledLink>

                <StyledLink to="/nova-saida">
                    <InAndOut>
                        <RemoveIcon />
                        Nova saída
                    </InAndOut>
                </StyledLink>
            </InAndOutBox>
        </Container>
    );
}
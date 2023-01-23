import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import { Container, Title, Form, Input, Button, StyledLink } from "../../styles/StyledAuthPage";

export default function Login() {
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault();

        const body = {
            email: "",
            password: ""
        };
        
        apiAuth.login(body)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response.data)
            });

        navigate('/');
    }

    return(
        <Container>
            <Title>MyWallet</Title>
            <Form>
                <Input placeholder="E-mail" type="email" />
                <Input placeholder="Senha" type="password" />
                <Button>Entrar</Button>
            </Form>
            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    );
}
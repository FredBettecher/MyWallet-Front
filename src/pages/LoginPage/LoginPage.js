import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import { Container, Title, Form, Input, Button, StyledLink } from "../../styles/StyledAuthPage";

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const userLogin = ({
        email: "",
        password: ""
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        userLogin.email = email;
        userLogin.password = password;

        try {
            const res = await apiAuth.login(userLogin);
            if(res.status === 201) {
                navigate("/home");
            } else {
                setError("E-mail ou senha incorretos.");
                alert(error);
            }

        } catch(err) {
            setError("Ocorreu um erro, por favor tente novamente mais tarde.");
            console.log(err);
        }
    }

    return(
        <Container>
            <Title>MyWallet</Title>
            <Form>
                <Input placeholder="E-mail" type="email" onChange={(e)=>setEmail(e.target.value)} />
                <Input placeholder="Senha" type="password" onChange={(e)=>setPassword(e.target.value)} />
                <Button onClick={handleLogin}>Entrar</Button>
            </Form>
            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    );
}
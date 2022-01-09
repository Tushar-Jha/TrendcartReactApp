import styled from "styled-components"


const Container=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background:url("https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg")center;
    background-size:cover;
`
const Wrapper=styled.div`
    border-radius:25px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:15%;
    background-color:rgba(132,209,202,0.6);
    padding:50px;
`
const Title=styled.h1`
    margin:0px 5px;
    font-size:30px;
`
const Form=styled.form`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`
const Input=styled.input`
    width:200px;
    padding:10px;
    margin:5px 0px;
    border:1px solid;
    border-radius:5px;
`
const Button=styled.button`
    margin-top:20px;
    width:100px;
    height:40px;
    font-size:17px;
    background-color:teal;
    border:none;
    color:white;
    border-radius:5px;
    cursor:pointer;

    &:hover{
        background-color:#4F908A; 
    }
`



function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" required></Input>
                    <Input placeholder="Password" required></Input>
                </Form>
                <Button>LOGIN</Button>
            </Wrapper>
        </Container>
    )
}

export default Register

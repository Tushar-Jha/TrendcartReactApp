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
    width:30%;
    background-color:rgba(132,209,202,0.6);
    padding:50px;
`
const Title=styled.h1`
    margin:0px 30px;
    font-size:24px;
`
const Form=styled.form`
    display:flex;
    justify-content:space-between;
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
const Undertaking=styled.h1`
    font-size:14px;

`


function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" required></Input>
                    <Input placeholder="Last  Name"></Input>
                    <Input placeholder="Username" required></Input>
                    <Input placeholder="Email" required></Input>
                    <Input placeholder="Password" required></Input>
                    <Input placeholder="Confirm Password" required></Input>
                </Form>
                <Undertaking>By creating an account, I consent to the processing of my personal data according to the PRIVACY POLICY.</Undertaking>
                <Button>CREATE</Button>
            </Wrapper>
        </Container>
    )
}

export default Register

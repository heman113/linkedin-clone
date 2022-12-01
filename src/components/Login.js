import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import {signInAPI} from '../actions';
import { Navigate } from 'react-router-dom';

function Login(props) {
  return (
    <Container>
        {
            props.user &&
            <Navigate to='/home' />
        }
        <Nav>
            <a href='/'>
                <img src='/images/login-logo.svg' />
            </a>
            <div>
                <Join>
                    Join Now
                </Join>
                <Signin>
                    Sign In
                </Signin>
            </div>
        </Nav>
        <Section>
            <Hero>
                <h1>Welcome to your professional community</h1>
                <img src='/images/login-hero.svg' />
            </Hero>
            <Form>
                <Google onClick={()=> props.signIn()}>
                    <img src='/images/google.svg' />
                    Sign in
                </Google>
            </Form>
        </Section>
    </Container>
  )
}


const Container = styled.div`
    padding: 0;
`
const Nav = styled.div`
    max-width: 100%;
    marin: auto;
    padding: 12px 10px 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap; 

    & > a{
        width: 135px;
        height: 34px;
        @media(max-width: 768px){
            padding: 0 5px;
        }
    }
`
const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.8);
    transition-duration: 160ms;
    margin-right: 12px;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
    }
`
const Signin = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 20px;
    transition-duration: 160ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    &:hover{
        background-color: rgba(112, 181, 249,0.15);
    }
`
const Section = styled.div`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 10px;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    align-items: center;
    margin: auto;
    @media(max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`
const Hero = styled.div`
    width: 100%;
    h1{
        width: 55%;
        font-size: 56px;
        font-weight: 200;
        color: #2977c9;
        line-height: 70px;
        @media(max-width: 768px){
            text-align: center;
            width: 100%;
            font-size: 20px;
            line-height: 2;
        }
    }
    img{
        ${'' /* z-index: -1; */}
        width: 700px;
        position: absolute;
        bottom: 40px;
        right: 30px;
        @media(max-width: 768px){
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`
const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media(max-width: 768px){
        margin-top: 20px;
    } 
`
const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    width: 100%;
    height: 56px;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgba(0 0 0 / 60%) , inset 0 0 0 2px rgba(0 0 0 / 0%) , inset 0 0 0 1px rgba(0 0 0 / 0%);
    vertical-align: middle;
    z-index: 0;
    font-size: 20px;
    color: rgba(0,0,0,0.6);
    cursor: pointer;
    &:hover{
        background-color: rgba(207,207,207,0.25);
        color: rgba(0,0,0,0.75);
    }
    img{
        margin-right: 10px;
    }
`
const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    signIn: ()=> dispatch(signInAPI())
});

export default connect(mapStateToProps , mapDispatchToProps)(Login);

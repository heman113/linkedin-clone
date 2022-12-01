import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signOut, signOutAPI } from '../actions';

function Header(props) {
  return (
    <Container>
        <Content>
            <Logo>
                <a href='/home'>
                    <img src='/images/home-logo.svg' />
                </a>
            </Logo>
            <Search>
                <div>
                    <input type="text" placeholder='Search' />
                </div>
                <img src='/images/search-icon.svg' />
            </Search>
            <Nav>
                <NavListWrap>
                    <NavList className='active'>
                        <a>
                            <img src='/images/nav-home.svg' />
                            <span>Home</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src='/images/nav-network.svg' />
                            <span>My Network</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src='/images/nav-jobs.svg' />
                            <span>Jobs</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src='/images/nav-messaging.svg' />
                            <span>Messages</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src='/images/nav-notifications.svg' />
                            <span>Notifications</span>
                        </a>
                    </NavList>
                    <User>
                        <a>
                            {props.user && props.user.photoURL ? 
                            (<img src={props.user.photoURL} alt="" />) : 
                            (<img src='/images/user.svg' />)}
                            <span>
                            Me
                            <img src='/images/down-icon.svg' />
                            </span>
                            
                        </a>
                        <Signout onClick={()=>props.signOut()}>
                            <a>
                                Sign out
                            </a>
                        </Signout>
                    </User>
                    <Work>
                        <a>
                            <img src='/images/nav-work.svg' />
                            <span>Work
                                <img src='/images/down-icon.svg' />
                            </span>
                        </a>
                    </Work>
                </NavListWrap>
            </Nav>
        </Content>
    </Container>
  )
}



const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left: 0;
    position: fixed;
    padding: 0px 24px;
    top: 0;
    width: 100%;
    z-index: 100;
`
const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 100%;
`
const Logo = styled.span`
    font-size: 0px;
    margin-right: 20px;
`
const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    display: flex;
    align-items: center;
    & > div{
        max-width: 200px;
        input{
            box-shadow: none;
            border: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0,0,0,0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        } 
    }
    img{
        cursor: pointer;
        width: 20px;
        position: absolute;
        z-index: 1;
        margin: auto 0;
        left: 2px;
    }
`
const Nav = styled.div`
    margin-left: auto;
    display: block;
    @media(max-width: 768px){
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
    }
`
const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    .active{
        span:after{
            content: "";
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-in-out;
            width: 100%;
            border-color: rgba(0,0,0,0.9);
        }
    }

`
const NavList = styled.li`
    display: flex;
    align-items: center;
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        padding: 0 10px;
        text-decoration: none;
        cursor: pointer;
        span{
            color: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            &:hover,
            &:active{
                color: rgba(0,0,0,0.9);
            }
        }
        
        @media(max-width: 768px){
            min-width: 70px;
        }
    }
`
const Signout = styled.div`
    position: absolute;
    top: 45px;
    background: white;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none; 
`
const User = styled(NavList)`
    a > img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    span{
        display: flex;
        align-items: center;
    }
    &:hover{
        ${Signout}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`
const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.08);
`
const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
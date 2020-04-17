import React from "react";
import "./styles/About.css";
import styled from "styled-components";
import AboutImage from "../assets/undraw_about_us_page_ee1k.svg";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    button: {
        backgroundColor: '#746B6B',
        color: 'white'
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <div>
            {/* <Nav active="about" /> */}
            <div class='row'>
                <div class='col s6' style={{
                    paddingTop: '100px',
                    paddingLeft: '50px'
                }}>
                    <img
                        src={AboutImage}
                        height="100%"
                        width="80%"
                        alt="image"></img>
                </div>
                <div class='col s6' style={{ paddingTop: '100px' }}>
                    <Typography variant='h2'>About Us</Typography>
                    <Typography variant='h5'>
                        Google DSC is a Developer Student Club which is a
                        technical community that combines all the university
                        students, and all the other students who learn,
                        share ideas and come up with viable projects that
                        are likely to solve day to day universe problems.
                        Additionally, it aims for university students to
                        help them build their mobile, web, machine learning,
                        cloud skills. The clubs are intended as a space for
                        students to try out new ideas and collaborate to
                        solve mobile and web development problems.
                        </Typography>
                    <div style={{
                        paddingLeft: '570px',
                        paddingTop: '20px'
                    }}>
                        <Button variant="contained" className={classes.button} size='large'> View the Team </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
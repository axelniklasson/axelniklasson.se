import React, { Component } from 'react';
import axios from "axios";

import Spinner from "../../components/Spinner";

import "./style.scss";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            sha: null
        }
    }

    componentDidMount() {
        axios.get("https://api.github.com/repos/axelniklasson/axelniklasson.se/branches/master")
             .then(res => {
                this.setState({ isLoading: false, sha: res.data.commit.sha.substring(0, 7) })
             })
             .catch(err => {
                console.log(err)
                this.setState({ isLoading: false })
             });
    }

    render() {
        const { isLoading, sha } = this.state;

        if (isLoading) return <div><Spinner /></div>;

        if (!sha) {
            return <div class="footer"><p>Could not fetch version information</p></div>
        }

        return (
            <div class="footer"><p>Version <a href="https://github.com/axelniklasson/axelniklasson.se">{sha}</a></p></div>
        );
    }
}

export default Footer;
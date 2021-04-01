import React from 'react';
import {Link} from 'gatsby';
import Scroll from "../components/Scroll";
import config from "../../config";

export default function Nav({
                                onMenuToggle = () => {
                                }
                            }) {
    return (
        <nav id="nav">
            <ul>
                <li className="special">
                    <a
                        href="#menu"
                        onClick={e => {
                            e.preventDefault();
                            onMenuToggle();
                        }}
                        className="menuToggle"
                    >
                        <span>Menu</span>
                    </a>
                    <div id="menu">
                        <ul>
                            <li>
                                <Scroll type="id" element="prc">
                                    <a href="/#">Cennik</a>
                                </Scroll>
                            </li>
                            <li>
                                <Scroll type="id" element="cta">
                                    <a href="/#">Kontakt</a>
                                </Scroll>
                            </li>
                            {/*<li>*/}
                                {/*<Link to="/">Home</Link>*/}
                                {/*<Scroll type="id" element="prc">*/}
                                    {/*<a href="/#">Kontakt</a>*/}
                                {/*</Scroll>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*<Scroll type="id" element="cta">*/}
                                    {/*<a href="/#">Cennik</a>*/}
                                {/*</Scroll>*/}
                            {/*</li>*/}
                        </ul>
                        <a
                            className="close"
                            onClick={e => {
                                e.preventDefault();
                                onMenuToggle();
                            }}
                            href="#menu"
                        >
                            {''}
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

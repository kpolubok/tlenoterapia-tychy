import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import config from '../../config';

const IndexPage = () => (
    <Layout>
        <section id="banner">
            <div className="inner">
                <h2>{config.heading}</h2>
                <p>{config.subHeading}</p>
                <ul className="actions special">
                    <li>
                        <Scroll type="id" element="one">
                            <a href="/#" className="button primary">
                                {config.explore}
                            </a>
                        </Scroll>
                    </li>
                </ul>
            </div>
            <Scroll type="id" element="one">
                <a href="#one" className="more">
                    {config.explore}
                </a>
            </Scroll>
        </section>

        <section id="one" className="wrapper style1 special">
            <div className="inner">
                <header className="major">
                    <h2>
                        {config.info4}
                    </h2>
                    <p>
                        {config.info40}
                    </p>
                    <p>
                    {config.info41}
                    </p>

                    {/*<ul className="align-left">*/}
                        {/*{config.info44.map(text => {*/}
                            {/*return (*/}
                                {/*<li>*/}
                                    {/*{text}*/}
                                {/*</li>*/}
                            {/*);*/}
                        {/*})}*/}
                    {/*</ul>*/}

                </header>
                <ul className="icons major">
                    <li>
            <span className="icon solid fa-heartbeat major style1">
              <span className="label">Odpornosc</span>
            </span>
                    </li>
                    <li>
            <span className="icon solid fa-lungs major style2">
              <span className="label">Zdrowie</span>
            </span>
                    </li>
                    <li>
            <span className="icon solid fa-viruses major style3">
              <span className="label">tlen</span>
            </span>
                    </li>
                </ul>
            </div>
        </section>

        <section id="two" className="wrapper alt style2">
            <section className="spotlight">
                <div className="image">
                    <img src={pic1} alt=""/>
                </div>
                <div className="content">
                    <h2>
                        {config.info1}
                    </h2>
                    <p>
                        {config.info11}
                    </p>
                </div>
            </section>
            <section className="spotlight">
                <div className="image">
                    <img src={pic2} alt=""/>
                </div>
                <div className="content">
                    <h2>
                        {config.info2}
                    </h2>
                    <p>
                        {config.info22}
                    </p>
                </div>
            </section>

            <section className="spotlight">
                <div className="image">
                    <img src={pic3} alt=""/>
                </div>
                <div className="content">
                    <h2>
                        {config.info3}
                    </h2>
                    <p>
                        {config.info33}
                    </p>
                </div>
            </section>
            <section className="spotlight">
                <div className="image">
                    <img src={pic4} alt=""/>
                </div>
                <div className="content">
                    <h2>
                        {config.info5}
                    </h2>
                    <p>
                        {config.info55}
                    </p>
                </div>
            </section>
        </section>

        <section id="three" className="wrapper style3 special">
            <div className="inner">
                <header className="major">
                    <h2>Zastosowania medyczne</h2>
                    {/* <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p> */}
                </header>
                <ul className="features">
                    <li className="icon solid fa-heartbeat">
                        <h3>{config.zastosowania1}</h3>
                        <p>
                            {config.zastosowania11}
                        </p>
                    </li>
                    <li className="icon solid fa-bone">
                        <h3>{config.zastosowania2}</h3>
                        <p>
                            {config.zastosowania21}
                        </p>
                    </li>
                    <li className="icon solid fa-allergies">
                        <h3>{config.zastosowania3}</h3>
                        <p>
                            {config.zastosowania31}
                        </p>
                    </li>
                    <li className="icon solid fa-brain">
                        <h3>{config.zastosowania4}</h3>
                        <p>
                            {config.zastosowania41}
                        </p>
                    </li>
                    <li className="icon solid fa-tooth">
                        <h3>{config.zastosowania5}</h3>
                        <p>
                            {config.zastosowania51}
                        </p>
                    </li>
                    <li className="icon solid fa-running">
                        <h3>{config.zastosowania6}</h3>
                        <p>
                            {config.zastosowania61}
                        </p>
                    </li>
                    <li className="icon solid  fa-hand-holding-medical">
                        <h3>{config.zastosowania7}</h3>
                        <p>
                            {config.zastosowania71}
                        </p>
                    </li>
                    <li className="icon solid fa-hand-holding-heart">
                        <h3>{config.zastosowania8}</h3>
                        <p>
                            {config.zastosowania81}
                        </p>
                    </li>
                    <li className="icon solid fa-user-md">
                        <h3>{config.zastosowania9}</h3>
                        <p>
                            {config.zastosowania91}
                        </p>
                    </li>
                </ul>
            </div>
        </section>



        {/*KONTAKTY*/}
        <section id="cta" className="wrapper style4">
            <div className="inner">
                <section className="full-width">
                    <h4>Skontaktuj się z nami</h4>
                    {/*<div className="row">*/}
                        {/*<div className="col-6 col-12-medium">*/}
                            {/*<a href='tel:{config.kontakttel}'>{config.kontakttel}</a><br/>*/}
                            {/*{config.kontaktul} <br/>*/}
                            {/*{config.kontaktty}*/}
                        {/*</div>*/}
                        {/*<div className="col-6 col-12-medium">*/}
                            {/*<iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0"*/}
                                    {/*marginWidth="0"*/}
                                    {/*src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Poland,%20Tychy,%20Legion%C3%B3w%20Polskich%2040+(TlenoterapiaTychy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>*/}
                            {/*<a href="https://www.maps.ie/route-planner.htm"></a>*/}
                        {/*</div>*/}
                    {/*</div>*/}


                <div className="col-6 col-12-xsmall">
                    <a href='tel:{config.kontakttel}'>{config.kontakttel}</a><br/>
                    {config.kontaktul} <br/>
                    {config.kontaktty}
                </div>
                <div className="col-6 col-12-xsmall">
                    <iframe width="50%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Poland,%20Tychy,%20Legion%C3%B3w%20Polskich%2040+(TlenoterapiaTychy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <a href="https://www.maps.ie/route-planner.htm"></a>
                </div>


                 <form method="post" action="#">
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
                </div>
                {/*<div className="col-12">*/}
								{/*<select name="demo-category" id="demo-category">*/}
									{/*<option value="">- Category -</option>*/}
									{/*<option value="1">Manufacturing</option>*/}
									{/*<option value="1">Shipping</option>*/}
									{/*<option value="1">Administration</option>*/}
									{/*<option value="1">Human Resources</option>*/}
								{/*</select>*/}
							{/*</div>*/}
                {/*<div className="col-4 col-12-small">*/}
								{/*<input type="radio" id="demo-priority-low" name="demo-priority" defaultChecked />*/}
								{/*<label htmlFor="demo-priority-low">Low</label>*/}
							{/*</div>*/}
							{/*<div className="col-4 col-12-small">*/}
								{/*<input type="radio" id="demo-priority-normal" name="demo-priority" />*/}
								{/*<label htmlFor="demo-priority-normal">Normal</label>*/}
							{/*</div>*/}
							{/*<div className="col-4 col-12-small">*/}
								{/*<input type="radio" id="demo-priority-high" name="demo-priority" />*/}
								{/*<label htmlFor="demo-priority-high">High</label>*/}
							{/*</div>*/}
                {/*<div className="col-6 col-12-small">*/}
								{/*<input type="checkbox" id="demo-copy" name="demo-copy" />*/}
								{/*<label htmlFor="demo-copy">Email me a copy</label>*/}
							{/*</div>*/}
							{/*<div className="col-6 col-12-small">*/}
								{/*<input type="checkbox" id="demo-human" name="demo-human" defaultChecked />*/}
								{/*<label htmlFor="demo-human">Not a robot</label>*/}
							{/*</div>*/}


                <div className="col-12">
                  <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li><input type="submit" value="Wyślij wiadomość" className="primary" /></li>
                    <li><input type="reset" value="Wyczyść" /></li>
                  </ul>
                </div>
              </div>
            </form>
        </section>

        {/* <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul> */}
    </div>
</section>
</Layout>
)
;

export default IndexPage;

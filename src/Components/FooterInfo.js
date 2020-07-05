import React from 'react';

const FooterInfo = () => {
  return (
    <div className="footer-info-container">
				<span className="footer-info">© COPYRIGHT 2020 MATTHEW DESANTIS, LLC</span>
				<span className="footer-info">CONTACT:</span>
				<span className="footer-info">908.723.5320</span>
				<span className="footer-info">
					<a className="footer-links" href="mailto:matthewdesantis@gmail.com" target="_blank">
						MatthewDeSantis@gmail.com
					</a>
				</span>
				<span className="footer-info">
					WEB DESIGN:{' '}
					<a className="footer-links" href="https://www.linkedin.com/in/alejoluis/" target="_blank">
						Luis Alejo
					</a>
				</span>
			</div>
  );
}

export default FooterInfo;

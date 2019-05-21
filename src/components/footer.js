import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({copyrights}) => (
    <footer>
      {copyrights ? (
          <div
              dangerouslySetInnerHTML={{
                __html: copyrights,
              }}
          />
      ) : (
          <>


            <span className="footerCopyrights">
          <a href="https://github.com/woodnsec">GitHub</a>
        </span>
            <span className="footerCopyrights">
          <a href="https://twitter.com/woodnsec">Twitter</a>
        </span>
                <span className="footerCopyrights">
          <a href='https://resume.woodnsec.com' target="_blank">Resume</a>
        </span>

          </>
      )}

    </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer

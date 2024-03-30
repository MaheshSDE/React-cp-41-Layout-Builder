// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h1 className="left-navbar-menu">Left Navbar Menu</h1>
              <ul className="list-items">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="content-heading">content</h1>
              <p className="content-description">
                Lorem ipsum All components you implement should go in the
                src/components directory. Do not change the component folder
                names as those are the files being imported into the tests. Do
                not remove the pre-filled code Want to quickly review some of
                the concepts you’ve been learning? Take a look at the Cheat
                Sheets.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1 className="right-navbar">Right NavBar</h1>
              <div className="ad-container">
                <p>Ad 1</p>
              </div>
              <div className="ad-container">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTranslation, Trans } from "react-i18next";

class App extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props)

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>{t('i18n')}</h2>
          <button onClick={() => changeLanguage('vn')}>vn</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </div>
        <div className="App-intro">
          <Trans>
            Hello
          </Trans>
        </div>
      </div>
    );
  }
}
// extended main view with translate hoc
export default withTranslation('translations')(App);
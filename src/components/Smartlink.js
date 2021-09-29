import React, { Component } from "react";
import styles from "./smartpreview.module.css";
import PreviewL from "./previews/PreviewL";
import PreviewSM from "./previews/PreviewSM";
import PreviewXS from "./previews/PreviewXS";

export default class Smartlink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      urlData: null,
    };
    this.getUrlMetaData = this.getUrlMetaData.bind(this);
    this.renderPreview = this.renderPreview.bind(this);
  }
  renderPreview = (preview, urlData) => {
    switch (preview) {
      case "PreviewXS":
        return <PreviewXS styles={styles} documentsData={urlData} />;
      case "PreviewL":
        return <PreviewL styles={styles} documentsData={urlData} />;
      default:
        return <PreviewSM styles={styles} documentsData={urlData} />;
    }
  };

  componentDidMount() {
    this.getUrlMetaData();
  }

  getUrlMetaData = () => {
    let { url } = this.props;
    if (url && url.length > 1) {
      let domain = new URL(url);

      //Setting the host for shortend urls with the origin https://invis.io
      if (
        domain.hostname === "invis.io" ||
        domain.hostname === "www.invis.io"
      ) {
        domain.hostname = "projects.invisionapp.com";
      }
      fetch(
        `https://${
          domain.hostname
        }/meta-bff/share?shareurl=${encodeURIComponent(url)}`
      )
        .then((res) => res.json())
        .then(
          (data) => {
            this.setState({
              urlData: data,
              error: undefined,
            });
          },
          (err) => {
            this.setState({
              error: err,
            });
          }
        );
    }
  };

  render() {
    const { error, urlData } = this.state;
    const { preview } = this.props;
    return (
      <div>
        <div className={styles.maindiv}>
          {error && (
            <div>
              <p>Error occured:</p>
              <pre>{error.toString()}</pre>
            </div>
          )}
          {!error && this.renderPreview(preview, urlData)}
        </div>
      </div>
    );
  }
}

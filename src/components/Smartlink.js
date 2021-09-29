import React, { Component } from "react";
import PreviewL from "./previews/PreviewL";
import PreviewSM from "./previews/PreviewSM";
import PreviewXS from "./previews/PreviewXS";
import styles from "./previews/smartpreview.module.css";

export default class Smartlink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: "PreviewSM",
      error: "",
      urlData: null,
    };
    this.getUrlMetaData = this.getUrlMetaData.bind(this);
    this.renderPreview = this.renderPreview.bind(this);
  }
  renderPreview = (preview, urlData) => {
    switch (preview) {
      case "PreviewXS":
        return <PreviewXS documentsData={urlData} />;
      case "PreviewSM":
        return <PreviewSM documentsData={urlData} />;
      default:
        return <PreviewL documentsData={urlData} />;
    }
  };

  componentDidMount() {
    this.getUrlMetaData();
  }

  getUrlMetaData = () => {
    var url = "https://projects.invisionbeta.com/share/ES9GV36W#/screens";
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
            });
            this.setState({
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
    const { preview, error, url, urlData } = this.state;
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

// const Smartlink = (props) => {
//   const [preview, setPreview] = useState(props.preview);
//   const [error, setError] = useState();
//   const [url, setUrl] = useState(props.url || "");
//   const [urlData, setUrlData] = useState();
//   const renderPreview = (preview, urlData) => {
//     switch (preview) {
//       case "PreviewXS":
//         return <PreviewXS url={url} documentsData={urlData} />;
//       case "PreviewSM":
//         return <PreviewSM url={url} documentsData={urlData} />;
//       default:
//         return <PreviewL url={url} documentsData={urlData} />;
//     }
//   };

//   useEffect(() => {
//     getUrlMetaData();
//   }, [url]);

//   const getUrlMetaData = useCallback(() => {
//     if (url && url.length > 1) {
//       let domain = new URL(url);

//       //Setting the host for shortend urls with the origin https://invis.io
//       if (
//         domain.hostname === "invis.io" ||
//         domain.hostname === "www.invis.io"
//       ) {
//         domain.hostname = "projects.invisionapp.com";
//       }
//       fetch(
//         `https://${
//           domain.hostname
//         }/meta-bff/share?shareurl=${encodeURIComponent(url)}`
//       )
//         .then((res) => res.json())
//         .then(
//           (data) => {
//             setUrlData(data);
//             setError(undefined);
//           },
//           (err) => {
//             setError(err);
//           }
//         );
//     }
//   });

//   return (
//     <div>
//       <div className={styles.maindiv}>
//         {error && (
//           <div>
//             <p>Error occured:</p>
//             <pre>{error.toString()}</pre>
//           </div>
//         )}
//         {!error && renderPreview(preview, urlData)}
//       </div>
//     </div>
//   );
// };

// export default Smartlink;

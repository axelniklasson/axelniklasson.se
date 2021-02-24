import React from "react";
import useContentfulClient from "../../hooks/useContentfulClient";

import "./style.scss";

const Header = React.forwardRef((props, ref) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({
    head1: "",
    head2: "",
    sub1: "",
    sub2: "",
    profilePicture: "",
  });
  const client = useContentfulClient();

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "headerSection",
        limit: 1,
      })
      .then((data) => {
        const { head1, head2, sub1, sub2 } = data.items[0].fields;
        const profilePicture =
          data.items[0].fields.profilePicture.fields.file.url;

        setLoading(false);
        setData({
          head1,
          head2,
          sub1,
          sub2,
          profilePicture,
        });
      });
  }, []);

  if (loading) {
    return null;
  }

  const { profilePicture, head1, head2, sub1, sub2 } = data;
  return (
    <div className="header" id="header" ref={ref}>
      <div className="container">
        <img src={profilePicture} alt="profile" />

        <div className="content">
          <h1>
            {head1} <span className="bold">{head2}</span>
          </h1>
          <h2>
            {sub1}
            <br />
            {sub2}
          </h2>
        </div>
      </div>
    </div>
  );
});

export default Header;

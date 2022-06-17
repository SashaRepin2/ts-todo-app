import { Link } from "react-router-dom";
import "../styles/errorPage.scss";

interface ErrorPageProps {
  code: string | number;
  message?: string;
  backLink: string;
}

export const ErrorPage = ({ code, message, backLink }: ErrorPageProps) => {
  return (
    <div className="error-page">
      <h1> {`Error! Code: ${code}`}</h1>
      <h2>{message ? message : ""}</h2>
      <Link to={backLink}>
        <button className="btn green">Back</button>
      </Link>
    </div>
  );
};

// import { withNamespaces } from "../i18n";

const CustomError = (props) => {
  return (
    <p>
      {props.statusCode
        ? `An error ${props.statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

CustomError.displayName = 'Error Page';

CustomError.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;

  // return { statusCode, t: undefined, namespacesRequired: ["common", "error"] };
  return { statusCode, t: undefined };
};

// export default withNamespaces(["common", "error"])(CustomError);
export default CustomError;

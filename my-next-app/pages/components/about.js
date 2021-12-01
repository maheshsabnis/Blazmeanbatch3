import styles from "./../../styles/Home.module.css";
import Navigator from "./navigator";
const AboutComponent = ({ departments }) => {
  if (departments == undefined || departments.length === 0) {
    <Navigator></Navigator>
    return <div>no data to show</div>;
  } else {
    return (
      <div className={styles.container}>
        <h2>The About Component</h2>
        <Navigator></Navigator>
        <br />
        <h2>Received Data</h2>
         {
             JSON.stringify(departments)
         }
      </div>
    );
  }
};

// write a method named 'getStaticProps()', this method will make an ajax call
// during the build time. This is more recommended in Production to improve the
// performance of the Component loading

export async function getStaticProps() {
  console.log("Making ana Ajax call");
  // the 'fetch()' is an ES 6 object for making AJAX Calls
  // this is based on Promises
  const response = await fetch("http://localhost:7013/api/departments");
  const departments = await response.json();
  console.log(`Received data is  = ${JSON.stringify(departments)}`);
  // return data with props so that the component can show it
  return {
    props: {
      departments
    },
  };
}

export default AboutComponent;

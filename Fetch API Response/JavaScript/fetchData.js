const token =
  "d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3";

async function getData() {
  try {
    let response = await fetch("https://gorest.co.in/public/v1/users", {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const { meta, data } = await response.json();
    console.log(meta);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

getData();

// For See the result run index.htm in your browser and open the console

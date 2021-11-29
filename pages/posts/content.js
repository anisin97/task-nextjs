import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

export default function ContentMedia({ posts }){
const data = posts.content;

  return(
    <div className={styles.container}>
      <Head>
        <title>
          Content
        </title>
      </Head>
      <main className={styles.main}>
        <h3 className={styles.title}>Your Content!</h3>
        <p>
          <Link href="/">
            <a>Go back to your Profile.</a>
          </Link>
        </p>

        <div className={styles.grid}>

            {data.map((object, i) => {
              return (
                <div className={styles.card}  key={i}>
                <li><h6>{object.caption}</h6></li>
                </div>
              )
            })}
        </div>

      </main>
    </div>
  );
}

export async function getStaticProps(context){
  const data = {
    "platform":"Instagram",
    "username":"iamcloud.dev"
  };
  const headers = {
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTM2MjgzYzEzMWU5YTY0NzMzNmRmZmMiLCJ1aWQiOm51bGwsInVzZXJUeXBlIjoiQ29tcGFueSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTYzNzIzMTM0Mn0.l9HHPRoREy_QNrjDg4oY91Y598yTSJS1kFCfGuWyQaw",
      "Content-Type": "application/json",
  };
  const postData = await axios.post("http://3.7.226.212/admin/discover/search-influencer", data, {headers});
  //const posts = await postData.json();

  return {
    props: { posts: postData.data},
  }
}

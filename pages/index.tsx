import { Nav } from "../components/Nav";
import { Card } from "../components/Card";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { useState, useEffect } from "react";
import { classnames } from "tailwindcss-classnames";

export default function IndexPage() {
  const [queue, setQueue] = useState([]);
  useEffect(() => {
    fetch("/api/queue")
      .then((x) => x.json())
      .then((x) => setQueue(x));
  }, []);
  return (
    <Layout>
      <div className={classnames("text-4xl", "mt-4")}>How it works</div>
      <pre>
        {`
1. You need a mic
2. Send me a VSCode LiveShare link in Discord
3. I will call you on Discord and we will code

Discord: https://discord.gg/Vehs99V

We will code on whatever you like

total beginners to intermediates to experts are welcome

pick a technology I know

frameworks that start with the letter A are banned

PS: I don't know Vue

no resumes (I suck at evaluated them)`}
      </pre>
      <h2 className={classnames("text-3xl", "mb-4")}>Queue</h2>
      <Link href="/join-queue">
        <a className="btn btn-green">join queue</a>
      </Link>
      <div className={classnames("mt-4")}>
        {queue.map((q) => (
          <Card discordName={q.discordName} technology={q.technology} />
        ))}
      </div>
    </Layout>
  );
}

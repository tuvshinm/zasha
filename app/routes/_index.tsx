import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "zasha" }, { name: "description", content: "yu ve?" }];
};

export default function Index() {
  return <div>Hello World.</div>;
}

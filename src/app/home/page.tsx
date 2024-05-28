import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const metadata = {
    title: "Home"
}

export default function Home (params: Params) {
    return (
        <main className="h-[100vh]">
            <h1>Green Pulse Template</h1>
        </main>
    );
};
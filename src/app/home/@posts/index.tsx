import { PostCard } from "./postCard";

export default function RecentPosts () {
    return (
        <section className="px-4 py-20 text-center" style={{ background: 'linear-gradient(#eef6ef, #fff)' }}>
            <div className="container mx-auto">
                <span className="text-secondry text-xs font-bold mb-[16px] block">LATEST POSTS</span>
                <h1 className="text-3xl leading-snug font-bold text-primary">Exploring Ecological Articles</h1>
                <div className="flex gap-8 justify-center mt-10">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </div>
        </section>
    );
}
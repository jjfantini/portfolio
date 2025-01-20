import { BlogPosts } from '@/components/posts'
import { DATA } from '@/data/personal-details'
import { Boxes } from "@/components/ui/background-boxes";


export default function Page() {
  return (
    <section>
      <Boxes />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {DATA.about}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

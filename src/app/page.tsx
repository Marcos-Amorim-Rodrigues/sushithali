import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { TabsSkeleton } from "@/components/products/skeleton"
import { ProductsTab } from "@/components/products/tab"
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <PageHeader />
      <div className="mx-3">
        <Suspense fallback={<TabsSkeleton />}>
          <ProductsTab />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

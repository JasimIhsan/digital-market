import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { departmentSlugs, getDepartment } from "@/data/departments";
import { DepartmentPage } from "@/components/departments/department-page";

type Params = PageProps<"/departments/[slug]">["params"];

export function generateStaticParams() {
  return departmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const department = getDepartment(slug);
  if (!department) return {};
  return {
    title: department.name,
    description: department.summary,
    openGraph: { title: department.name, description: department.summary },
  };
}

/*
 * `params` is read inside a Suspense boundary so the route's static shell can
 * stream in instantly on client navigations (see the instant-navigation guide).
 */
export default function DepartmentRoute({ params }: PageProps<"/departments/[slug]">) {
  return (
    <Suspense>
      <DepartmentContent params={params} />
    </Suspense>
  );
}

async function DepartmentContent({ params }: { params: Params }) {
  const { slug } = await params;
  const department = getDepartment(slug);
  if (!department) notFound();
  return <DepartmentPage department={department} />;
}

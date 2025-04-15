import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

export default function PlaceholderContent() {
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Placeholder Content</h1>
            <p className="mb-4">
              This is a placeholder content component. You can replace it with
              your own content.
            </p>
            <Link href="/" className="text-blue-500 hover:underline">
              Go back to Home
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
